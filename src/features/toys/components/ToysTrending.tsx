'use client';

import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

/* ── Remix Icon Arrow — sized in `em` so it always exactly matches the
   button's font-size, however that font-size changes. ── */
function IconArrowRight({ size = '1em' }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} style={{ display: 'block', flexShrink: 0 }}>
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
    </div>
  );
}

/* ── Trending This Week — reimplemented to match the Basketball homepage's
   product card exactly (BasketballFeatured.tsx): 345px image box, contain
   fit, and no showCountdown/showScrollText overrides — the shared
   HomeProductCard's own defaults apply (countdown on index 0, scrolling
   marquee on index 2), same as Basketball. Only the grid/view-all chrome
   is Toys-scoped; the card itself is the same shared component Basketball
   uses, fed Toys product data. Background stays transparent per the
   earlier "no background behind images" request. ── */

export function ToysTrending() {
  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/toys-products' });

  const products = data?.products.slice(0, 8) || [];

  return (
    <section>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: '#222' }}>Trending This Week</h2>
        </div>

        <div className="tytr-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <HomeProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  imageHeight="345px"
                />
              ))
          }
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/shop" className="tytr-view-all">
            View all
            <IconArrowRight />
          </Link>
        </div>
      </div>

      <style>{`
        .tytr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .tytr-grid > * { min-width: 0; }

        .tytr-grid .fc-card > a:first-child {
          background-color: transparent !important;
        }
        .tytr-grid .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: transparent !important;
        }

        @media (min-width: 750px) {
          .tytr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .tytr-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .tytr-view-all {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 30px;
          font-size: 15px;
          line-height: 1;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          border-radius: 40px;
          text-decoration: none;
          background: none;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .tytr-view-all:hover { background-color: #222; color: #fff; }
      `}</style>
    </section>
  );
}
