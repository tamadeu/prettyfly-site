import type { Metadata } from 'next';
import { CartPageContent } from '@/features/cart/components/CartPageContent';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review your cart and proceed to checkout.',
};

export default function CartPage() {
  return <CartPageContent />;
}
