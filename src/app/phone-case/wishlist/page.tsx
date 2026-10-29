import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist — Phone Case Shop',
  description: 'Your saved phone case products.',
};

export default function PhoneCaseWishlistPage() {
  return <WishlistPageContent storefront="phone-case" />;
}
