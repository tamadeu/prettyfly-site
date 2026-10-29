import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { CUSTOMER_COOKIE, customerFetch } from '@/lib/customer-api';

export const dynamic = 'force-dynamic';

export async function GET() {
  const token = (await cookies()).get(CUSTOMER_COOKIE)?.value;
  if (!token) return NextResponse.json({ customer: null });

  const upstream = await customerFetch('/me', { token }).catch(() => null);
  if (!upstream?.ok) {
    const response = NextResponse.json({ customer: null });
    if (upstream?.status === 401) response.cookies.delete(CUSTOMER_COOKIE);
    return response;
  }

  return NextResponse.json({ customer: (await upstream.json()).data });
}

export async function PUT(request: Request) {
  const token = (await cookies()).get(CUSTOMER_COOKIE)?.value;
  if (!token) return NextResponse.json({ message: 'Não autenticado.' }, { status: 401 });

  const upstream = await customerFetch('/me', { method: 'PUT', body: await request.json().catch(() => ({})), token });
  const json = await upstream.json().catch(() => ({}));

  return NextResponse.json(
    upstream.ok ? { customer: json.data } : { message: json.message, errors: json.errors },
    { status: upstream.status },
  );
}
