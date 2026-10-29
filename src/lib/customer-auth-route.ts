import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { CUSTOMER_COOKIE, clientIp, customerFetch, sessionCookieOptions } from '@/lib/customer-api';

// Repassa login/cadastro ao backend e guarda o token numa cookie httpOnly.
export async function handleCustomerAuth(request: Request, path: '/login' | '/register') {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: 'Requisição inválida.' }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await customerFetch(path, { method: 'POST', body: payload, ip: clientIp(request) });
  } catch {
    return NextResponse.json({ message: 'Serviço indisponível. Tente novamente.' }, { status: 503 });
  }

  const json = await upstream.json().catch(() => ({}));

  if (!upstream.ok || !json.token) {
    return NextResponse.json(
      { message: json.message ?? 'Não foi possível concluir.', errors: json.errors },
      { status: upstream.status >= 400 ? upstream.status : 500 },
    );
  }

  const response = NextResponse.json({ customer: json.data }, { status: upstream.status });
  response.cookies.set(CUSTOMER_COOKIE, json.token, sessionCookieOptions());
  return response;
}

// Rotas públicas que só repassam o corpo ao backend (sem sessão).
export async function proxyCustomerPost(request: Request, path: string) {
  const payload = await request.json().catch(() => null);
  if (payload === null) return NextResponse.json({ message: 'Requisição inválida.' }, { status: 400 });

  const upstream = await customerFetch(path, { method: 'POST', body: payload, ip: clientIp(request) }).catch(() => null);
  if (!upstream) return NextResponse.json({ message: 'Serviço indisponível. Tente novamente.' }, { status: 503 });

  const json = await upstream.json().catch(() => ({}));
  return NextResponse.json(
    { message: json.message, errors: json.errors },
    { status: upstream.status === 429 ? 429 : upstream.status },
  );
}

// Repassa uma chamada autenticada (token na cookie httpOnly) ao backend.
export async function proxyCustomerAuthed(request: Request, method: string, path: string) {
  const token = (await cookies()).get(CUSTOMER_COOKIE)?.value;
  if (!token) return NextResponse.json({ message: 'Não autenticado.' }, { status: 401 });

  const hasBody = method === 'POST' || method === 'PUT';
  const body = hasBody ? await request.json().catch(() => null) : undefined;
  if (hasBody && body === null) return NextResponse.json({ message: 'Requisição inválida.' }, { status: 400 });

  const upstream = await customerFetch(path, { method, body, token, ip: clientIp(request) }).catch(() => null);
  if (!upstream) return NextResponse.json({ message: 'Serviço indisponível. Tente novamente.' }, { status: 503 });

  if (upstream.status === 204) return new NextResponse(null, { status: 204 });

  const json = await upstream.json().catch(() => ({}));
  const response = NextResponse.json(json, { status: upstream.status });
  if (upstream.status === 401) response.cookies.delete(CUSTOMER_COOKIE);
  return response;
}
