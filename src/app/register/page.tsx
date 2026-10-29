import { redirect } from 'next/navigation';
import { getCurrentCustomer } from '@/lib/customer-api';
import { RegisterPageContent } from '@/features/auth/components/RegisterPageContent';

export const metadata = { title: 'Register' };

export const dynamic = 'force-dynamic';

export default async function RegisterPage() {
  if (await getCurrentCustomer()) redirect('/minha-conta');

  return <RegisterPageContent />;
}
