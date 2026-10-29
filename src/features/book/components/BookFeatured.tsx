'use client';

import { useState } from 'react';
import { useProducts } from '@/features/products/hooks/useProducts';
import { BookProductCard } from './BookProductCard';
import { BOOK_FEATURED_TABS } from '@/data/book-products';

function ProductCardSkeleton() {
  return (
    <div style={{ border: '1px solid #ececec', borderRadius: '8px', padding: '16px' }}>
      <div className="animate-shimmer" style={{ height: '300px', borderRadius: '6px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto 14px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '44px', borderRadius: '40px' }} />
    </div>
  );
}

export function BookFeatured() {
  const [activeTab, setActiveTab] = useState<string>(BOOK_FEATURED_TABS[0]);
  const { data, isLoading } = useProducts({ limit: 30 }, { endpoint: '/api/book-products' });

  const products = (data?.products ?? []).filter((p) => p.category === activeTab).slice(0, 8);

  return (
    <section>
      <div className="container-main">
        <div className="bkf-head">
          <h2 className="bkf-title">Featured Products</h2>
          <div className="bkf-tabs">
            {BOOK_FEATURED_TABS.map((tab) => (
              <button
                key={tab}
                className={`bkf-tab ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bkf-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product) => <BookProductCard key={product.id} product={product} />)}
        </div>
      </div>

      <style>{`
        .bkf-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 34px;
        }
        .bkf-title { font-size: clamp(22px, 2.6vw, 28px); font-weight: 600; color: #2a2a2a; }
        .bkf-tabs { display: flex; gap: 26px; flex-wrap: wrap; }
        .bkf-tab {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: #999;
          padding: 4px 0;
          position: relative;
          transition: color 200ms ease;
        }
        .bkf-tab.is-active { color: #e0294a; }
        .bkf-tab.is-active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -4px;
          height: 2px;
          background: #e0294a;
        }
        .bkf-tab:hover { color: #e0294a; }

        .bkf-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .bkf-grid > * { min-width: 0; }
        @media (min-width: 750px) { .bkf-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
        @media (min-width: 992px) { .bkf-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; } }
      `}</style>
    </section>
  );
}
