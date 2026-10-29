'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useWishlistStore } from '@/store/wishlistStore';
import { formatPrice } from '@/utils/formatPrice';

export function AccountWishlist() {
  const items = useWishlistStore((s) => s.items);
  const removeItem = useWishlistStore((s) => s.removeItem);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <h2 className="ac-h2">Lista de desejos</h2>
      {!mounted ? (
        <p className="ac-muted">Carregando...</p>
      ) : items.length === 0 ? (
        <div className="ac-empty">
          <p>Sua lista de desejos está vazia.</p>
          <Link href="/shop" className="ac-btn" style={{ display: 'inline-flex', marginTop: '1.6rem' }}>Explorar produtos</Link>
        </div>
      ) : (
        <ul className="ac-products">
          {items.map((item) => (
            <li key={item.productId} className="ac-product">
              <Link href={`/products/${item.slug}`} className="ac-product-img">
                {item.image ? <Image src={item.image} alt={item.name} width={300} height={380} unoptimized /> : null}
              </Link>
              <Link href={`/products/${item.slug}`} className="ac-product-name">{item.name}</Link>
              <p className="ac-product-price">
                {item.compareAtPrice ? <s>{formatPrice(item.compareAtPrice, 'BRL')}</s> : null}
                <span>{formatPrice(item.price, 'BRL')}</span>
              </p>
              <button type="button" className="ac-link ac-danger" onClick={() => removeItem(item.productId)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
