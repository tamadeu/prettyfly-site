import { redirect } from 'next/navigation';
import { getCurrentCustomer } from '@/lib/customer-api';
import { AccountPageContent } from '@/features/auth/components/AccountPageContent';

export const metadata = { title: 'Minha conta' };
export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const customer = await getCurrentCustomer();
  if (!customer) redirect('/login');

  return <AccountPageContent customer={customer} />;
}
