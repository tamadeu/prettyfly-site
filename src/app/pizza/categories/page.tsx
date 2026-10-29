import type { Metadata } from 'next';
import { PizzaShopCollectionsPageContent } from '@/features/pizza-shop/components/PizzaShopCollectionsPageContent';

export const metadata: Metadata = {
  title: 'Categories — Pizza Shop',
  description: 'Browse all pizza categories: BBQ Pizza, Chicken Pizza, Beef Pizza, and Veggie Pizza.',
};

export default function PizzaCategoriesPage() {
  return <PizzaShopCollectionsPageContent />;
}
