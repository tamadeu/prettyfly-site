import type { Metadata } from 'next';
import { GroceryCollectionsPageContent } from '@/features/grocery-shop/components/GroceryCollectionsPageContent';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse our grocery categories — fresh fruits, vegetables, dairy, meats, and more.',
};

export default function GroceryCategoriesPage() {
  return <GroceryCollectionsPageContent />;
}
