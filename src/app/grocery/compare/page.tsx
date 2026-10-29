import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products',
  description: 'Compare grocery products side by side.',
};

export default function GroceryComparePage() {
  return <ComparePageContent storefront="grocery" />;
}
