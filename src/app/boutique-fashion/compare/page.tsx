import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products — Boutique Fashion',
  description: 'Compare boutique fashion products side by side.',
};

export default function BoutiqueFashionComparePage() {
  return <ComparePageContent storefront="boutique-fashion" />;
}
