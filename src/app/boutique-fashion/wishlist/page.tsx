import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist — Boutique Fashion',
  description: 'Your saved boutique fashion products.',
};

export default function BoutiqueFashionWishlistPage() {
  return <WishlistPageContent storefront="boutique-fashion" />;
}
