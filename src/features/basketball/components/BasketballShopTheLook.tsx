'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { formatPrice } from '@/utils/formatPrice';
import type { Product } from '@/types/product';

const BB_ENDPOINT = '/api/basketball-products';

/* Curated order so page 1 matches the screenshot (DribbleUp + Molten BG38). */
const PREFERRED_SLUGS = [
  'bb-dribbleup-smart-basketball',
  'bb-molten-bg38-basketball',
  'bb-evolution-game-basketball',
  'bb-go-sports-basketball',
  'bb-ektelon-pro-basketball',
  'bb-molten-gg7x-basketball',
];

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* ── Lookbook Pins (Basketball products) ── */
const lookbookPins = [
  { id: 'pin-1', top: '16%', left: '80%', name: 'Molten BG38 Basketball', price: 120.0, href: '/products/bb-molten-bg38-basketball' },
  { id: 'pin-2', top: '10%', left: '12%', name: 'DribbleUp Smart Basketball', price: 85.0, href: '/products/bb-dribbleup-smart-basketball' },
  { id: 'pin-3', top: '74%', left: '66%', name: 'Evolution Game Basketball', price: 82.0, href: '/products/bb-evolution-game-basketball' },
];

function LookbookPin({ pin }: { pin: typeof lookbookPins[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: 'absolute', top: pin.top, left: pin.left, zIndex: 5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        style={{
          width: '28px', height: '28px', borderRadius: '50%', border: '3px solid #fff',
          backgroundColor: hovered ? '#222' : 'rgba(0,0,0,0.5)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)', transition: 'background-color 250ms ease, transform 250ms ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fff', display: 'block' }} />
      </button>

      <div
        style={{
          position: 'absolute', bottom: 'calc(100% + 10px)', left: '50%',
          transform: `translateX(-50%) translateY(${hovered ? '0' : '6px'})`,
          backgroundColor: '#fff', borderRadius: '6px', boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          padding: '12px 16px', whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0, pointerEvents: hovered ? 'auto' : 'none',
          transition: 'opacity 250ms ease, transform 250ms ease', zIndex: 10,
        }}
      >
        <Link href={pin.href} style={{ textDecoration: 'none' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '2px' }}>{pin.name}</p>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#222' }}>{formatPrice(pin.price)}</p>
        </Link>
      </div>
    </div>
  );
}

/* ── Basketball — Shop the Look ── */
export function BasketballShopTheLook() {
  const { data } = useProducts({ limit: 20 }, { endpoint: BB_ENDPOINT });

  const bySlug = new Map((data?.products || []).map((p) => [p.slug, p]));
  const allProducts = PREFERRED_SLUGS
    .map((s) => bySlug.get(s))
    .filter((p): p is Product => Boolean(p));

  const [currentPage, setCurrentPage] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const perPage = 2;
  const totalPages = Math.max(1, Math.ceil(allProducts.length / perPage));
  const visibleProducts = allProducts.slice(currentPage * perPage, currentPage * perPage + perPage);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    setAnimKey((k) => k + 1);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);
    setAnimKey((k) => k + 1);
  }, [totalPages]);

  const goNext = useCallback(() => {
    setCurrentPage((p) => (p + 1) % totalPages);
    setAnimKey((k) => k + 1);
  }, [totalPages]);

  return (
    <section className="bbstl-section">
      <div className="container-main">
        <div className="bbstl-grid" style={{ display: 'grid' }}>

          {/* ═══ LEFT ═══ */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 30px)', fontWeight: 700, color: '#222' }}>Shop the look</h2>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {visibleProducts.length > 0
                  ? visibleProducts.map((product, i) => (
                      <div key={`${product.id}-${animKey}`} className="bbstl-card-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                        <HomeProductCard product={product} index={currentPage * perPage + i} hrefBase="/products" imageHeight="345px" />
                      </div>
                    ))
                  : [1, 2].map((i) => (
                      <div key={i}>
                        <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '4px', marginBottom: '14px' }} />
                        <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
                        <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto', borderRadius: '4px' }} />
                      </div>
                    ))
                }
              </div>

              <button onClick={goPrev} aria-label="Previous" className="bbstl-nav-prev">
                <IconArrowLeftS size={20} />
              </button>
              <button onClick={goNext} aria-label="Next" className="bbstl-nav-next">
                <IconArrowRightS size={20} />
              </button>
            </div>

            {/* Pagination dots */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '28px' }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    width: currentPage === i ? '18px' : '10px',
                    height: currentPage === i ? '18px' : '10px',
                    borderRadius: '50%',
                    border: currentPage === i ? '1.5px solid #222' : 'none',
                    backgroundColor: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: 0, cursor: 'pointer', transition: 'all 300ms ease',
                  }}
                >
                  <span style={{
                    width: currentPage === i ? '8px' : '10px',
                    height: currentPage === i ? '8px' : '10px',
                    borderRadius: '50%',
                    backgroundColor: currentPage === i ? '#222' : '#bbb',
                    display: 'block', transition: 'all 300ms ease',
                  }} />
                </button>
              ))}
            </div>
          </div>

          {/* ═══ RIGHT: Lookbook Image ═══ */}
          <div className="bbstl-lookbook" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
            <Image
              src="/basketball/lookbook/lookbook-1.webp"
              alt="Shop the look"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="50vw"
            />
            {lookbookPins.map((pin) => (
              <LookbookPin key={pin.id} pin={pin} />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .bbstl-grid {
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .bbstl-lookbook {
          height: clamp(360px, 90vw, 705px);
          border-radius: 4px;
        }

        @media (min-width: 992px) {
          .bbstl-grid { grid-template-columns: 1fr 1fr; gap: 24px; align-items: center; }
          .bbstl-lookbook { height: 705px; }
        }

        /* Product shots vary in dimension — contain them within the fixed 345px
           square image box so nothing overflows or is cropped incorrectly; the
           card's light backdrop letterboxes cleanly. Scoped to this section. */
        .bbstl-section .fc-card > a:first-child img {
          object-fit: contain !important;
        }

        .bbstl-card-reveal {
          animation: bbstlRevealUp 600ms ease-out both;
        }
        @keyframes bbstlRevealUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .bbstl-nav-prev,
        .bbstl-nav-next {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 400ms ease, transform 400ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .bbstl-nav-prev { left: 8px; transform: translateY(-50%); }
        .bbstl-nav-next { right: 8px; transform: translateY(-50%); }

        .bbstl-section:hover .bbstl-nav-prev { opacity: 1; }
        .bbstl-section:hover .bbstl-nav-next { opacity: 1; }

        .bbstl-nav-prev:hover,
        .bbstl-nav-next:hover { background-color: #000; border-color: #000; color: #fff; }
      `}</style>
    </section>
  );
}
