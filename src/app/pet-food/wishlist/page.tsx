import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Your saved pet food products.',
};

export default function PetFoodWishlistPage() {
  return <WishlistPageContent storefront="pet-food" />;
}
