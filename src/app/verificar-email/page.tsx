import Link from 'next/link';
import { customerFetch } from '@/lib/customer-api';

export const metadata = { title: 'Confirmar e-mail' };
export const dynamic = 'force-dynamic';

type Params = Record<string, string | string[] | undefined>;

export default async function VerifyEmailPage({ searchParams }: { searchParams: Promise<Params> }) {
  const params = await searchParams;
  const pick = (key: string) => (typeof params[key] === 'string' ? (params[key] as string) : '');

  const upstream = await customerFetch('/verify-email', {
    method: 'POST',
    body: { id: pick('id'), expires: pick('expires'), signature: pick('signature') },
  }).catch(() => null);

  const ok = upstream?.ok === true;

  return (
    <div className="container-main" style={{ paddingTop: '8rem', paddingBottom: '10rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3.2rem', marginBottom: '1.6rem' }}>{ok ? 'E-mail confirmado' : 'Link inválido ou expirado'}</h1>
      <p style={{ color: '#777', marginBottom: '3.2rem' }}>
        {ok
          ? 'Sua conta está ativa. Obrigado por confirmar.'
          : 'Entre na sua conta e peça um novo e-mail de confirmação.'}
      </p>
      <Link href={ok ? '/minha-conta' : '/login'} style={{ textDecoration: 'underline' }}>
        {ok ? 'Ir para minha conta' : 'Entrar'}
      </Link>
    </div>
  );
}
