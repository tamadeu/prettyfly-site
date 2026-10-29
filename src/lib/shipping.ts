import type { CartItem } from '@/types/cart';

export function shippingInputKey(items: CartItem[], cep: string): string {
  return `${cep.replace(/\D/g, '')}|${items.map((i) => `${i.productId}:${i.variantId}:${i.quantity}`).sort().join('|')}`;
}
