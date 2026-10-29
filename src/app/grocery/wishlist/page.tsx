import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Your saved grocery products.',
};

export default function GroceryWishlistPage() {
  return <WishlistPageContent storefront="grocery" />;
}
