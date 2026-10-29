import { cookies } from 'next/headers';

const API_URL = (process.env.API_URL || 'http://127.0.0.1:8002/api/v1').replace(/\/$/, '');
const API_TOKEN = process.env.API_TOKEN || '';

export const CUSTOMER_COOKIE = 'pf_customer';
export const CUSTOMER_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export interface Customer {
  id: number | null;
  name: string;
  email: string;
  phone: string | null;
  document: string | null;
  birth_date: string | null;
}

export async function customerFetch(
  path: string,
  options: { method?: string; body?: unknown; token?: string } = {},
): Promise<Response> {
  return fetch(`${API_URL}/customers${path}`, {
    method: options.method ?? 'GET',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      ...(options.body !== undefined ? { 'Content-Type': 'application/json' } : {}),
      ...(API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {}),
      ...(options.token ? { 'X-Customer-Token': options.token } : {}),
    },
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: CUSTOMER_COOKIE_MAX_AGE,
  };
}

export async function getCurrentCustomer(): Promise<Customer | null> {
  const token = (await cookies()).get(CUSTOMER_COOKIE)?.value;
  if (!token) return null;

  try {
    const response = await customerFetch('/me', { token });
    if (!response.ok) return null;
    return (await response.json()).data as Customer;
  } catch {
    return null;
  }
}
