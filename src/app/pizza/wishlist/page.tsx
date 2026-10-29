import type { Metadata } from 'next';
import { WishlistPageContent } from '@/features/wishlist/components/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Wishlist — Pizza Shop',
  description: 'Your saved pizzas and favourites.',
};

export default function PizzaWishlistPage() {
  return (
    <div style={{ background: '#000000', minHeight: '100dvh' }}>
      <WishlistPageContent storefront="pizza" />
    </div>
  );
}
