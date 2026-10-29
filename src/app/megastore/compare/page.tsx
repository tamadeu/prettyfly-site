import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products',
  description: 'Compare electronics products side by side.',
};

export default function MegastoreComparePage() {
  return <ComparePageContent storefront="megastore" />;
}
