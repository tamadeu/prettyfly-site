import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products',
  description: 'Compare nutrition products side by side.',
};

export default function NutritionComparePage() {
  return <ComparePageContent storefront="nutrition" />;
}
