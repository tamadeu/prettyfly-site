import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products',
  description: 'Compare pet food products side by side.',
};

export default function PetFoodComparePage() {
  return <ComparePageContent storefront="pet-food" />;
}
