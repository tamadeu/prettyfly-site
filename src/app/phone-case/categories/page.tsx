import type { Metadata } from 'next';
import { PCCollectionsPageContent } from '@/features/phone-case/components/PCCollectionsPageContent';

export const metadata: Metadata = {
  title: 'Categories — Phone Case Shop',
  description: 'Browse our phone case categories — phone cases, leather cases, slim cases, wallet cases.',
};

export default function PhoneCaseCategoriesPage() {
  return <PCCollectionsPageContent />;
}
