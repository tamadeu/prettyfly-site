'use client';

import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

function ProductCardSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '8px', marginBottom: '12px' }} />
      <div className="animate-shimmer" style={{ height: '15px', width: '70%', marginBottom: '8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '13px', width: '40%', borderRadius: '4px' }} />
    </div>
  );
}

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function ElegantFashionBestSelling() {
  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/elegant-fashion-products' });
  const products = data?.products ?? [];

  return (
    <section className="efbs-section">
      <div className="container-main">
        <div className="efbs-heading-row">
          <h2 className="efbs-heading">Best Selling Products</h2>
          <Link href="/shop" className="efbs-view-all">
            <span className="efbs-view-all-text">Shop All Products</span>
            <span className="efbs-view-all-arrow"><IconArrowRight size={14} /></span>
          </Link>
        </div>

        <div className="efbs-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.slice(0, 8).map((product, i) => (
                <HomeProductCard key={product.id} product={product} index={i} />
              ))}
        </div>
      </div>

      <style>{`
        .efbs-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .efbs-heading {
          font-size: clamp(20px, 4vw, 28px);
          font-weight: 700;
          color: #111;
        }
        .efbs-view-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          transition: gap 200ms ease;
        }
        .efbs-view-all:hover { gap: 10px; }
        .efbs-view-all-text {
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .efbs-view-all-arrow {
          color: #e07b39;
          display: inline-flex;
          align-items: center;
          transition: transform 200ms ease;
        }
        .efbs-view-all:hover .efbs-view-all-arrow { transform: translateX(3px); }

        .efbs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(12px, 2vw, 24px);
        }

        @media (min-width: 750px) {
          .efbs-heading-row { margin-bottom: 32px; }
        }
        @media (min-width: 992px) {
          .efbs-grid { grid-template-columns: repeat(4, 1fr); }
          .efbs-heading-row { margin-bottom: 36px; }
        }
      `}</style>
    </section>
  );
}
