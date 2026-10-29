import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist — Smart Watches Shop',
  description: 'Your saved smart watch products.',
};

export default function SmartWatchesWishlistPage() {
  return <WishlistPageContent storefront="smart-watches" />;
}
