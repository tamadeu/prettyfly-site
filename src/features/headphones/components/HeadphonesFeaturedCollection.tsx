'use client';

import Link from 'next/link';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { useProducts } from '@/features/products/hooks/useProducts';

export function HeadphonesFeaturedCollection() {
  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/headphones-products' });
  const products = data?.products ?? [];

  return (
    <section className="container-main hp-fc-section">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'clamp(20px, 2.5vw, 32px)',
        }}
      >
        <h2 style={{ fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 700, color: '#111', margin: 0 }}>
          Featured Collection
        </h2>
        <Link
          href="/shop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: 'clamp(12px, 1vw, 14px)',
            fontWeight: 500,
            color: '#111',
            textDecoration: 'none',
            borderBottom: '1px solid #111',
            paddingBottom: '2px',
            transition: 'opacity 200ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          View All
          <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3647L8.22192 16.9505L13.1717 12.0007Z" />
          </svg>
        </Link>
      </div>

      {/* Product grid */}
      {isLoading ? (
        <div className="hp-fc-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                aspectRatio: '3 / 4',
                backgroundColor: '#f4f4f4',
                borderRadius: '8px',
                animation: 'hp-skeleton-pulse 1.4s ease-in-out infinite',
              }}
            />
          ))}
        </div>
      ) : (
        <div className="hp-fc-grid">
          {products.slice(0, 8).map((product, index) => (
            <HomeProductCard
              key={product.id}
              product={product}
              index={index}
              hrefBase="/products"
            />
          ))}
        </div>
      )}

      <style>{`
        .hp-fc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(12px, 1.5vw, 20px);
        }
        @media (min-width: 750px) {
          .hp-fc-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 992px) {
          .hp-fc-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @keyframes hp-skeleton-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
      `}</style>
    </section>
  );
}
