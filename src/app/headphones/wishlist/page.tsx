import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist — Headphones Shop',
  description: 'Your saved headphones and audio gear.',
};

export default function HeadphonesWishlistPage() {
  return <WishlistPageContent storefront="headphones" />;
}
