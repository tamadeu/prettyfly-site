'use client';

import { useCartStore } from '@/store/cartStore';
import { useCheckoutStore } from '@/store/checkoutStore';
import { formatPrice } from '@/utils/formatPrice';

export function FreeShippingNotice() {
  const policy = useCheckoutStore((s) => s.freeShippingPolicy);
  const ready = useCheckoutStore((s) => s.ready);
  const items = useCartStore((s) => s.items);
  if (!ready || !policy || !items.length) return null;
  const subtotalCents = items.reduce((sum, item) => sum + Math.round(item.price * 100) * item.quantity, 0);
  const remaining = Math.max(0, Math.round(policy.minimum * 100) - subtotalCents) / 100;

  return <div role="status" style={{ padding: '14px', margin: '12px 0', border: '1px solid #d6e5da', borderRadius: '6px', background: '#f4faf6', color: '#245936', fontSize: '14px', lineHeight: 1.5 }}>
    <strong>{remaining > 0 ? `Faltam ${formatPrice(remaining, 'BRL')} em produtos para frete grátis.` : 'Seu carrinho atingiu o valor para frete grátis!'}</strong>
    <p style={{ margin: '4px 0 0' }}>Na opção de entrega mais barata disponível para seu CEP. Consulte no checkout.</p>
  </div>;
}
