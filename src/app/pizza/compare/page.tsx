import type { Metadata } from 'next';
import { ComparePageContent } from '@/features/compare/components/ComparePageContent';

export const metadata: Metadata = {
  title: 'Compare Products — Pizza Shop',
  description: 'Compare pizza products side by side.',
};

export default function PizzaComparePage() {
  return (
    <div style={{ background: '#000000', minHeight: '100dvh' }}>
      <ComparePageContent storefront="pizza" />
    </div>
  );
}
