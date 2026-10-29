import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Your saved car accessories and auto parts.',
};

export default function CarAccessoriesWishlistPage() {
  return <WishlistPageContent storefront="car-accessories" />;
}
