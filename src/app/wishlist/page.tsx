import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Lista de desejos',
  description: 'Seus produtos salvos.',
};

export default function WishlistPage() {
  return <WishlistPageContent storefront="fashion" />;
}
