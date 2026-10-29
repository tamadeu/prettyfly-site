'use client';

import { useState } from 'react';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

const F4_ENDPOINT = '/api/fashion-04-products';

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

/* ── Fashion 04 — Featured Collection ── */
export function Fashion04FeaturedCollection() {
  const { data, isLoading } = useProducts({ limit: 15 }, { endpoint: F4_ENDPOINT });
  const [showMore, setShowMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const initialProducts = data?.products.slice(0, 8) || [];
  const extraProducts = data?.products.slice(8, 15) || [];

  return (
    <section>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Featured Collection</h2>
          <p style={{ fontSize: '15px', color: '#777' }}>Discover our handpicked selection of trending styles and must-have pieces</p>
        </div>

        <div className="f4fc-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : initialProducts.map((product, i) => (
                <HomeProductCard key={product.id} product={product} index={i} />
              ))
          }

          {showMore && extraProducts.map((product, i) => (
            <div key={product.id} style={{ animation: 'f4fcFadeInUp 400ms ease forwards', animationDelay: `${i * 60}ms`, opacity: 0 }}>
              <HomeProductCard product={product} index={i + 8} />
            </div>
          ))}
        </div>

        {!showMore && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              disabled={loadingMore}
              onClick={() => {
                setLoadingMore(true);
                setTimeout(() => { setLoadingMore(false); setShowMore(true); }, 1500);
              }}
              className="f4fc-load-more-btn"
              style={{ minWidth: '160px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {loadingMore ? (
                <>
                  <span className="f4fc-load-spinner" />
                  Loading...
                </>
              ) : 'Load More'}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .f4fc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .f4fc-grid > * { min-width: 0; }

        @media (min-width: 750px) {
          .f4fc-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .f4fc-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .f4fc-load-more-btn {
          display: inline-block;
          padding: 12px 36px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          border-radius: 40px;
          text-decoration: none;
          background: none;
          cursor: pointer;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .f4fc-load-more-btn:hover { background-color: #222; color: #fff; }
        .f4fc-load-more-btn:disabled { opacity: 0.85; cursor: not-allowed; }

        .f4fc-load-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: f4fcSpin 600ms linear infinite;
        }
        @keyframes f4fcSpin { to { transform: rotate(360deg); } }
        @keyframes f4fcFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
