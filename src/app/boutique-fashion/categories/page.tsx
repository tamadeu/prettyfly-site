import type { Metadata } from 'next';
import { BFCollectionsPageContent } from '@/features/boutique-fashion/components/BFCollectionsPageContent';

export const metadata: Metadata = {
  title: 'Categories — Boutique Fashion',
  description: 'Browse boutique fashion categories — tops, women, men, and shoes.',
};

export default function BoutiqueFashionCategoriesPage() {
  return <BFCollectionsPageContent />;
}
