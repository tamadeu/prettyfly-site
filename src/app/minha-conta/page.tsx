import { redirect } from 'next/navigation';
import { getCurrentCustomer } from '@/lib/customer-api';
import { AccountPageContent } from '@/features/auth/components/AccountPageContent';
import { ACCOUNT_TABS, type AccountTab } from '@/features/auth/components/account/tabs';

export const metadata = { title: 'Minha conta' };
export const dynamic = 'force-dynamic';

export default async function AccountPage({ searchParams }: { searchParams: Promise<{ aba?: string }> }) {
  const { aba } = await searchParams;
  const initialTab = (ACCOUNT_TABS.find((t) => t.id === aba)?.id ?? 'dados') as AccountTab;
  const customer = await getCurrentCustomer();
  if (!customer) redirect('/login');

  return <AccountPageContent customer={customer} initialTab={initialTab} />;
}
