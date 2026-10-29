import { NextResponse } from 'next/server';
import { CUSTOMER_COOKIE, customerFetch, sessionCookieOptions } from '@/lib/customer-api';

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
    upstream = await customerFetch(path, { method: 'POST', body: payload });
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
