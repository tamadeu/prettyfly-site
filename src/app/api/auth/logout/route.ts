import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { CUSTOMER_COOKIE, customerFetch } from '@/lib/customer-api';

export const dynamic = 'force-dynamic';

export async function POST() {
  const jar = await cookies();
  const token = jar.get(CUSTOMER_COOKIE)?.value;

  if (token) {
    await customerFetch('/logout', { method: 'POST', token }).catch(() => undefined);
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.delete(CUSTOMER_COOKIE);
  return response;
}
