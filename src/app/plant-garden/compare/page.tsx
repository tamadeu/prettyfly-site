import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products — Plant & Garden',
  description: 'Compare plant and garden products side by side.',
};

export default function PlantGardenComparePage() {
  return <ComparePageContent storefront="plant-garden" />;
}
