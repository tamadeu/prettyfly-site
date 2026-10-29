import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Your saved nutrition products.',
};

export default function NutritionWishlistPage() {
  return <WishlistPageContent storefront="nutrition" />;
}
