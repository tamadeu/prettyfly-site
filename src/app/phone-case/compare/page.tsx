import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products — Phone Case Shop',
  description: 'Compare phone case products side by side.',
};

export default function PhoneCaseComparePage() {
  return <ComparePageContent storefront="phone-case" />;
}
