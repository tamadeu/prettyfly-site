import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products — Smart Watches Shop',
  description: 'Compare smart watch products side by side.',
};

export default function SmartWatchesComparePage() {
  return <ComparePageContent storefront="smart-watches" />;
}
