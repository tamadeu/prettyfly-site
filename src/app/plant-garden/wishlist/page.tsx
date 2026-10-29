import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist — Plant & Garden',
  description: 'Your saved plants and garden products.',
};

export default function PlantGardenWishlistPage() {
  return <WishlistPageContent storefront="plant-garden" />;
}
