'use client';

import { useState } from 'react';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

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

/* ── Featured Products Section ── */

export function BackpackFeatured() {
  const { data, isLoading } = useProducts({ limit: 12 }, { endpoint: '/api/backpack-products' });
  const [showMore, setShowMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const initialProducts = data?.products.slice(0, 8) || [];
  const extraProducts = data?.products.slice(8, 12) || [];

  return (
    <section>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Featured Products</h2>
        </div>

        <div className="bpf-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : initialProducts.map((product, i) => (
                <HomeProductCard key={product.id} product={product} index={i} />
              ))
          }

          {showMore && extraProducts.map((product, i) => (
            <div key={product.id} style={{ animation: 'bpfFadeInUp 400ms ease forwards', animationDelay: `${i * 60}ms`, opacity: 0 }}>
              <HomeProductCard product={product} index={i + 8} />
            </div>
          ))}
        </div>

        {!showMore && extraProducts.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              disabled={loadingMore}
              onClick={() => {
                setLoadingMore(true);
                setTimeout(() => { setLoadingMore(false); setShowMore(true); }, 1200);
              }}
              className="bpf-load-more-btn"
              style={{ minWidth: '160px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {loadingMore ? (
                <>
                  <span className="bpf-load-spinner" />
                  Loading...
                </>
              ) : 'Load more'}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .bpf-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .bpf-grid > * { min-width: 0; }

        @media (min-width: 750px) {
          .bpf-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .bpf-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .bpf-load-more-btn {
          display: inline-block;
          padding: 13px 38px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          text-decoration: none;
          background: none;
          cursor: pointer;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .bpf-load-more-btn:hover { background-color: #222; color: #fff; }
        .bpf-load-more-btn:disabled { opacity: 0.85; cursor: not-allowed; }

        .bpf-load-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: bpfSpin 600ms linear infinite;
        }

        @keyframes bpfSpin { to { transform: rotate(360deg); } }
        @keyframes bpfFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
