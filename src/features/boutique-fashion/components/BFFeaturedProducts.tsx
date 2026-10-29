'use client';

import { useState } from 'react';
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

const TABS = [
  { id: 'all',   label: 'Shop All' },
  { id: 'Tops',  label: 'Tops' },
  { id: 'Women', label: 'Women' },
  { id: 'Men',   label: 'Men' },
  { id: 'Shoes', label: 'Shoes' },
];

function ProductSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '4px', marginBottom: '12px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '70%', margin: '0 auto 6px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '12px', width: '40%', margin: '0 auto', borderRadius: '4px' }} />
    </div>
  );
}

export function BFFeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');
  const { data, isLoading } = useProducts(
    { limit: 20, category: activeTab === 'all' ? undefined : activeTab },
    { endpoint: '/api/boutique-fashion-products' },
  );

  const products = data?.products.slice(0, 8) ?? [];

  return (
    <section>
      <div className="container-main">
        {/* Heading row + tabs */}
        <div className="bffp-header">
          <h2 className="bffp-heading">Featured Products</h2>
          <nav className="bffp-tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeTab === t.id}
                onClick={() => setActiveTab(t.id)}
                className={`bffp-tab${activeTab === t.id ? ' bffp-tab--active' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Product grid */}
        <div className="bffp-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
            : products.map((product, i) => (
                <div key={product.id} className="bffp-card-wrap" style={{ animationDelay: `${i * 40}ms` }}>
                  <HomeProductCard
                    product={product}
                    index={i}
                    hrefBase="/boutique-fashion/product"
                    showCountdown={false}
                    showScrollText={false}
                  />
                </div>
              ))
          }
        </div>

        {/* View all button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/boutique-fashion/shop" className="bffp-view-all">
            View all
            <IconArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .bffp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }
        .bffp-heading {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #111;
          white-space: nowrap;
        }
        .bffp-tabs {
          display: flex;
          gap: 0;
          flex-wrap: wrap;
        }
        .bffp-tab {
          background: none;
          border: none;
          font-size: 15px;
          font-weight: 500;
          color: #888;
          cursor: pointer;
          padding: 6px 18px;
          position: relative;
          transition: color 200ms ease;
          white-space: nowrap;
        }
        .bffp-tab::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 18px;
          right: 18px;
          height: 2px;
          background: #111;
          transform: scaleX(0);
          transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bffp-tab--active {
          color: #111;
        }
        .bffp-tab--active::after { transform: scaleX(1); }

        .bffp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .bffp-grid > * { min-width: 0; }

        .bffp-card-wrap {
          animation: bffpFadeIn 380ms ease both;
        }
        @keyframes bffpFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .bffp-view-all {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 15px;
          font-weight: 500;
          color: #111;
          border: 1.5px solid #111;
          padding: 12px 32px;
          border-radius: 40px;
          text-decoration: none;
          transition: background 220ms ease, color 220ms ease;
        }
        .bffp-view-all:hover { background: #111; color: #fff; }

        @media (min-width: 750px) {
          .bffp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .bffp-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }
        @media (max-width: 749px) {
          .bffp-header { flex-direction: column; align-items: flex-start; }
          .bffp-tabs { gap: 0; }
          .bffp-tab { font-size: 13px; padding: 6px 12px; }
        }
      `}</style>
    </section>
  );
}
