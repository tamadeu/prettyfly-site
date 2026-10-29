import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products — Headphones Shop',
  description: 'Compare headphones and audio gear side by side.',
};

export default function HeadphonesComparePage() {
  return <ComparePageContent storefront="headphones" />;
}
