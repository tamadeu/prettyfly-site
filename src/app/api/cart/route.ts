import { randomBytes } from 'node:crypto';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { CUSTOMER_COOKIE, clientIp, sessionCookieOptions } from '@/lib/customer-api';

export const dynamic = 'force-dynamic';
const CART_COOKIE = 'pf_cart';

async function proxy(request: Request) {
  const origin = request.headers.get('origin');
  // Usa o Host público, pois a URL interna pode ser HTTP atrás de um proxy HTTPS.
  if (request.method !== 'GET' && (!origin || !URL.canParse(origin) || new URL(origin).host !== request.headers.get('host'))) {
    return NextResponse.json({ message: 'Origem inválida.' }, { status: 403 });
  }
  const jar = await cookies();
  const existing = jar.get(CART_COOKIE)?.value;
  const token = existing && /^[a-f0-9]{64}$/.test(existing) ? existing : randomBytes(32).toString('hex');
  const customer = jar.get(CUSTOMER_COOKIE)?.value;
  const body = request.method === 'PUT' ? await request.json().catch(() => null) : undefined;
  if (body === null) return NextResponse.json({ message: 'Requisição inválida.' }, { status: 400 });
  const upstream = await fetch(`${(process.env.API_URL || 'http://127.0.0.1:8002/api/v1').replace(/\/$/, '')}/cart`, {
    method: request.method,
    cache: 'no-store',
    signal: AbortSignal.timeout(15000),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN || ''}`,
      'X-Cart-Token': token,
      ...(customer ? { 'X-Customer-Token': customer } : {}),
      ...(clientIp(request) ? { 'X-Forwarded-For': clientIp(request)! } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  }).catch(() => null);
  if (!upstream) return NextResponse.json({ message: 'Não foi possível salvar. Verifique sua conexão e tente novamente.' }, { status: 503 });
  const json = await upstream.json().catch(() => ({ message: 'Serviço indisponível.' }));
  const response = NextResponse.json(json, { status: upstream.status, headers: { 'Cache-Control': 'private, no-store' } });
  if (upstream.ok || upstream.status === 409) {
    response.cookies.set(CART_COOKIE, token, { ...sessionCookieOptions(), maxAge: 60 * 60 * 24 * 180 });
  }
  if (upstream.status === 401) response.cookies.delete(CUSTOMER_COOKIE);
  return response;
}

export const GET = proxy;
export const PUT = proxy;
