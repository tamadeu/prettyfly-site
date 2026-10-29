import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Your saved electronics products.',
};

export default function MegastoreWishlistPage() {
  return <WishlistPageContent storefront="megastore" />;
}
