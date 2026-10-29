import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { CUSTOMER_COOKIE, clientIp, customerFetch } from '@/lib/customer-api';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const token = (await cookies()).get(CUSTOMER_COOKIE)?.value;
  if (!token) return NextResponse.json({ message: 'Não autenticado.' }, { status: 401 });

  const upstream = await customerFetch('/email/resend', { method: 'POST', token, ip: clientIp(request) }).catch(() => null);
  if (!upstream) return NextResponse.json({ message: 'Serviço indisponível.' }, { status: 503 });

  const json = await upstream.json().catch(() => ({}));
  return NextResponse.json({ message: json.message }, { status: upstream.status });
}
