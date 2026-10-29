import { ResetPasswordPageContent } from '@/features/auth/components/ResetPasswordPageContent';

export const metadata = { title: 'Redefinir senha' };

type Params = Record<string, string | string[] | undefined>;

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<Params> }) {
  const params = await searchParams;
  const token = typeof params.token === 'string' ? params.token : undefined;
  const email = typeof params.email === 'string' ? params.email : undefined;

  return <ResetPasswordPageContent token={token} initialEmail={email} />;
}
