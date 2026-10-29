'use client';

import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

function IconArrowRight({ size = '1em' }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} style={{ display: 'block', flexShrink: 0 }}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function ProductCardSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3 / 4', borderRadius: '4px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto 8px', borderRadius: '4px' }} />
    </div>
  );
}

export function SocksTrending() {
  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/socks-products' });

  const products = data?.products.slice(0, 8) || [];

  return (
    <section>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: '#222' }}>Trending This Week</h2>
        </div>

        <div className="sxtr-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <HomeProductCard key={product.id} product={product} index={i} imageHeight="345px" />
              ))
          }
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/shop" className="sxtr-view-all">
            View All
            <IconArrowRight />
          </Link>
        </div>
      </div>

      <style>{`
        .sxtr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .sxtr-grid > * { min-width: 0; }

        @media (min-width: 750px) {
          .sxtr-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }

        /* 345x345 product-image boxes: capped/centered square, image
           contained (never stretched or cropped) inside it. The shared
           HomeProductCard's own ≤749px media query overrides the height
           back to a fluid clamp, so this only governs tablet/desktop. */
        .sxtr-grid .fc-card > a:first-child {
          max-width: 345px;
          width: 100%;
          margin: 0 auto 14px;
        }
        .sxtr-grid .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: #f5f5f5;
        }

        .sxtr-view-all {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 33px;
          font-size: 16px;
          line-height: 1;
          font-weight: 500;
          color: #171717;
          border: 1px solid #171717;
          border-radius: 0;
          text-decoration: none;
          background-color: #fff;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .sxtr-view-all:hover { background-color: #171717; color: #fff; }
      `}</style>
    </section>
  );
}
