'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/utils/formatPrice';
import { useCheckoutStore } from '@/store/checkoutStore';
import { CartSaveStatus } from '@/components/shared/CartSaveStatus';
import { FreeShippingNotice } from '@/components/shared/FreeShippingNotice';
import { getStorefrontFromPath, getStorefrontOfSlug, productHrefBaseFor, shopHrefFor } from '@/utils/storefront';

/* ── Icons ── */

function IconClose({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconEdit({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z" />
    </svg>
  );
}



/* ── Tab Panels ── */

type TabType = 'none' | 'note';

function NotePanel({ onClose }: { onClose: () => void }) {
  const { draft, update, ready } = useCheckoutStore();
  return (
    <div style={{ padding: '24px' }}>
      <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#222', marginBottom: '16px' }}>Instruções especiais do pedido</h4>
      <textarea value={draft.notes} maxLength={2000} disabled={!ready} onChange={(e) => update({ notes: e.target.value })}
        placeholder="Instruções para o vendedor"
        style={{ width: '100%', minHeight: '120px', padding: '14px', fontSize: '15px', border: '1px solid #e5e5e5', borderRadius: '8px', outline: 'none', resize: 'vertical', color: '#222' }}
      />
      <button onClick={onClose}
        style={{ width: '100%', padding: '14px', backgroundColor: '#F15B41', color: '#fff', fontSize: '16px', fontWeight: 600, border: 'none', borderRadius: '40px', cursor: 'pointer', marginTop: '20px' }}
      >
        Concluir
      </button>
      <button onClick={onClose} style={{ display: 'block', margin: '14px auto 0', fontSize: '15px', fontWeight: 500, color: '#222', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
        Fechar
      </button>
    </div>
  );
}



/* ── Cart Drawer ── */

export function CartDrawer() {
  const { items: allItems, isDrawerOpen, closeDrawer, removeItem, updateQuantity } = useCartStore();
  const pathname = usePathname();
  const storefront = getStorefrontFromPath(pathname);
  const items = allItems.filter((i) => getStorefrontOfSlug(i.slug) === storefront);
  const productHrefBase = productHrefBaseFor(storefront);
  const shopHref = shopHrefFor(storefront);
  const [activeTab, setActiveTab] = useState<TabType>('none');
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // O fechamento também pode vir de outro componente.
      const reset = setTimeout(() => setActiveTab('none'), 0);
      return () => clearTimeout(reset);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closeDrawer(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isDrawerOpen, closeDrawer]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeDrawer}
        style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 9999, transition: 'opacity 250ms ease',
          opacity: isDrawerOpen ? 1 : 0, pointerEvents: isDrawerOpen ? 'auto' : 'none',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, width: '460px', maxWidth: '100vw',
          backgroundColor: '#fff', zIndex: 9999, display: 'flex', flexDirection: 'column',
          transition: 'transform 350ms ease',
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
          boxShadow: isDrawerOpen ? '-4px 0 24px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {/* Header — close button always, title only when items exist */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: items.length > 0 ? 'space-between' : 'flex-end', padding: '20px 24px', borderBottom: items.length > 0 ? '1px solid #f0f0f0' : 'none' }}>
          {items.length > 0 && <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#222' }}>Item adicionado ao carrinho</h3>}
          <button onClick={closeDrawer} style={{ display: 'flex', background: 'none', border: 'none', cursor: 'pointer', color: '#222' }} aria-label="Fechar carrinho">
            <IconClose size={22} />
          </button>
        </div>

        {/* Cart items — scrollable */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
          {items.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '60px' }}>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#222', marginBottom: '20px' }}>Seu carrinho está vazio.</p>
              <Link
                href={shopHref}
                onClick={closeDrawer}
                style={{
                  display: 'inline-block', padding: '14px 36px', backgroundColor: '#F15B41',
                  color: '#fff', fontSize: '16px', fontWeight: 600, borderRadius: '40px',
                  textDecoration: 'none', transition: 'background-color 250ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F15B41'; }}
              >
                Voltar à loja
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.productId}-${item.variantId}`} style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: '1px solid #f0f0f0' }}>
                {/* Thumbnail */}
                <Link href={`${productHrefBase}/${item.slug}`} onClick={closeDrawer} style={{ width: '90px', height: '110px', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#f5f5f5', flexShrink: 0, position: 'relative', display: 'block' }}>
                  {item.image && <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} sizes="90px" />}
                </Link>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#222', marginBottom: '5px' }}>{item.name}</h4>
                  <p style={{ fontSize: '15px', color: '#666', marginBottom: '3px' }}>
                    <span style={{ fontWeight: 600, color: '#222' }}>Cor:</span> {item.color} &nbsp;&nbsp;
                    <span style={{ fontWeight: 600, color: '#222' }}>Tamanho:</span> {item.size}
                  </p>
                  <p style={{ fontSize: '17px', fontWeight: 600, color: '#F15B41', marginBottom: '12px' }}>{formatPrice(item.price, 'BRL')}</p>

                  {/* Quantity + remove */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #e5e5e5', borderRadius: '4px' }}>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variantId, Math.max(1, item.quantity - 1))}
                        style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#222' }}
                      >−</button>
                      <span style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 500, color: '#222', borderLeft: '1px solid #e5e5e5', borderRight: '1px solid #e5e5e5' }}>
                        {item.quantity}
                      </span>
                      <button
                        disabled={item.quantity >= 99}
                        onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                        style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#222' }}
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.variantId)}
                      style={{ fontSize: '15px', color: '#222', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontWeight: 500 }}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

        </div>

        {/* Footer — tabs + subtotal + buttons */}
        {items.length > 0 && (
          <div style={{ borderTop: '1px solid #e5e5e5' }}>
            {/* Tab buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', borderBottom: '1px solid #f0f0f0' }}>
              {[
                { key: 'note' as TabType, icon: <IconEdit size={20} />, label: 'Observação' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(activeTab === tab.key ? 'none' : tab.key)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                    padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '14px', fontWeight: 500,
                    color: activeTab === tab.key ? '#F15B41' : '#555',
                    transition: 'color 200ms ease',
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active tab panel — slides up from below */}
            {activeTab !== 'none' && (
              <div style={{ animation: 'cartTabSlideUp 300ms ease-out' }}>
                {activeTab === 'note' && <NotePanel onClose={() => setActiveTab('none')} />}
              </div>
            )}

            <div style={{ padding: '0 24px' }}><CartSaveStatus /></div>
            {/* Subtotal + buttons */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '26px', fontWeight: 700, color: '#222' }}>Subtotal</span>
                <span style={{ fontSize: '20px', fontWeight: 600, color: '#222' }}>{formatPrice(subtotal, 'BRL')}</span>
              </div>
              <FreeShippingNotice />
              <p style={{ fontSize: '15px', color: '#777', marginBottom: '18px' }}>Consulte as opções de entrega no checkout.</p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  style={{
                    flex: 1, textAlign: 'center', padding: '14px 0', border: '1.5px solid #222',
                    borderRadius: '40px', fontSize: '15px', fontWeight: 600, color: '#222',
                    textDecoration: 'none', transition: 'all 250ms ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#222'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#222'; }}
                >
                  View cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={closeDrawer}
                  style={{
                    flex: 1, textAlign: 'center', padding: '14px 0', backgroundColor: '#F15B41',
                    color: '#fff', border: 'none', borderRadius: '40px', fontSize: '15px',
                    fontWeight: 600, textDecoration: 'none', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    transition: 'background-color 250ms ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F15B41'; }}
                >
                  Check out
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes cartTabSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
