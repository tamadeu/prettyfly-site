'use client';

import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

/* ── Remix Icon Arrow ── */
function IconArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* ── Skeleton Loader ── */
function ProductCardSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3 / 4', borderRadius: '4px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
        <div className="animate-shimmer" style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
        <div className="animate-shimmer" style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
        <div className="animate-shimmer" style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
      </div>
    </div>
  );
}

/* ── Trending This Week — 4×2 grid + View All pill ── */

export function GlassesTrending() {
  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/glasses-products' });

  const products = data?.products.slice(0, 8) || [];

  return (
    <section>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: '#222' }}>Trending This Week</h2>
        </div>

        <div className="gltr-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <HomeProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  /* Countdown lives on the 2nd card (Cartier Louis), matching the
                     screenshot; the scrolling-text overlay is disabled entirely. */
                  showCountdown={i === 1}
                  showScrollText={false}
                  /* Fixed 345px-tall image box; `contain` (below) keeps the full
                     glasses shot inside it with no crop/overflow. */
                  imageHeight="345px"
                />
              ))
          }
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/shop" className="gltr-view-all">
            View All
            <IconArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        .gltr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .gltr-grid > * { min-width: 0; }

        /* Fixed 345×345 image box — square, capped so it never overflows a
           narrower cell, with the whole product shot contained (no crop). */
        .gltr-grid .fc-card > a:first-child {
          width: 345px;
          height: 345px;
          max-width: 100%;
          aspect-ratio: auto;
          margin-left: auto;
          margin-right: auto;
        }
        .gltr-grid .fc-card > a:first-child img {
          object-fit: contain !important;
        }

        @media (min-width: 750px) {
          .gltr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .gltr-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .gltr-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 30px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          border-radius: 40px;
          text-decoration: none;
          background: none;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .gltr-view-all:hover { background-color: #222; color: #fff; }
      `}</style>
    </section>
  );
}
