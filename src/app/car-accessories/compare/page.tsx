import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products',
  description: 'Compare car accessories products side by side.',
};

export default function CarAccessoriesComparePage() {
  return <ComparePageContent storefront="car-accessories" />;
}
