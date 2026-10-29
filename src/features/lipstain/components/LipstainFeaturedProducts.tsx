'use client';

import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

const ACCENT = '#c9173c';

function ProductCardSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '8px', marginBottom: '12px' }} />
      <div className="animate-shimmer" style={{ height: '15px', width: '70%', borderRadius: '4px', margin: '0 auto 8px' }} />
      <div className="animate-shimmer" style={{ height: '13px', width: '40%', borderRadius: '4px', margin: '0 auto' }} />
    </div>
  );
}

export function LipstainFeaturedProducts() {
  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/lipstain-products' });
  const products = data?.products ?? [];

  return (
    <section className="lsfp-section">
      <div className="container-main">
        <h2 className="lsfp-heading">Featured Products</h2>

        <div className="lsfp-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <HomeProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  themeColor={ACCENT}
                />
              ))}
        </div>

        <div className="lsfp-load-more-wrap">
          <Link href="/shop" className="lsfp-load-more">
            Load more
          </Link>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .lsfp-section {
          background: #fff;
        }

        .lsfp-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: #111;
          text-align: center;
          margin-bottom: clamp(24px, 3.5vw, 40px);
          letter-spacing: -0.01em;
        }

        .lsfp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(12px, 2vw, 20px);
        }

        @media (min-width: 750px) {
          .lsfp-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .lsfp-load-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: clamp(28px, 4vw, 48px);
        }

        .lsfp-load-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
          padding: 11px 36px;
          border: 1px solid #222;
          color: #222;
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
          border-radius: 2px;
          transition: background-color 200ms ease, color 200ms ease;
          letter-spacing: 0.01em;
        }
        .lsfp-load-more:hover {
          background-color: #222;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
