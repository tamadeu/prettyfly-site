'use client';

import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

function Skeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '6px', marginBottom: '12px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '70%', margin: '0 auto 6px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '12px', width: '40%', margin: '0 auto', borderRadius: '4px' }} />
    </div>
  );
}

export function PCFeaturedCollection() {
  const { data, isLoading } = useProducts(
    { limit: 8 },
    { endpoint: '/api/phone-case-products' },
  );

  const products = data?.products.slice(0, 8) ?? [];

  return (
    <section>
      <div className="container-main">
        {/* Header row */}
        <div className="pcfc-header">
          <h2 className="pcfc-heading">Featured Collection</h2>
          <Link href="/phone-case/shop" className="pcfc-view-all">
            View All <IconArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="pcfc-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
            : products.map((product, i) => (
                <div key={product.id} className="pcfc-card-wrap" style={{ animationDelay: `${i * 35}ms` }}>
                  <HomeProductCard
                    product={product}
                    index={i}
                    hrefBase="/phone-case/product"
                    showCountdown={false}
                    showScrollText={false}
                  />
                </div>
              ))
          }
        </div>
      </div>

      <style>{`
        .pcfc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(20px, 2.5vw, 32px);
          gap: 16px;
        }

        .pcfc-heading {
          font-size: clamp(20px, 2.5vw, 30px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }

        .pcfc-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          font-weight: 500;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          white-space: nowrap;
          transition: color 220ms ease;
        }
        .pcfc-view-all:hover { color: #555; }

        .pcfc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(10px, 1.5vw, 20px);
        }
        .pcfc-grid > * { min-width: 0; }

        .pcfc-card-wrap {
          animation: pcfcFadeIn 360ms ease both;
        }
        @keyframes pcfcFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 750px) {
          .pcfc-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
        }
        @media (min-width: 992px) {
          .pcfc-grid { grid-template-columns: repeat(4, 1fr); gap: 22px; }
        }
      `}</style>
    </section>
  );
}
