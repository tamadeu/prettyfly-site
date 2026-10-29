'use client';

import Link from 'next/link';

export function AccountOrders() {
  return (
    <div>
      <h2 className="ac-h2">Minhas compras</h2>
      <div className="ac-empty">
        <p>Você ainda não fez nenhuma compra.</p>
        <Link href="/shop" className="ac-btn" style={{ display: 'inline-flex', marginTop: '1.6rem' }}>Ir às compras</Link>
      </div>
    </div>
  );
}
