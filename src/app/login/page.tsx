import { redirect } from 'next/navigation';
import { getCurrentCustomer } from '@/lib/customer-api';
import { LoginPageContent } from '@/features/auth/components/LoginPageContent';

export const metadata = { title: 'Log in' };

export const dynamic = 'force-dynamic';

export default async function LoginPage() {
  if (await getCurrentCustomer()) redirect('/minha-conta');

  return <LoginPageContent />;
}
