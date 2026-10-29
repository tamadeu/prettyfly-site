'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

const TABS = [
  { id: 'featured',     label: 'Featured',    sort: 'featured'    },
  { id: 'new-arrivals', label: 'New Arrivals', sort: 'newest'      },
  { id: 'bestsellers',  label: 'Bestsellers',  sort: 'bestseller'  },
  { id: 'popular',      label: 'Popular',      sort: 'popular'     },
];

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3647L8.22192 16.9505L13.1717 12.0007Z" />
    </svg>
  );
}

export function FurnitureTrendingProducts() {
  const [activeTab, setActiveTab] = useState(0);
  const sort = TABS[activeTab].sort;

  const { data, isLoading } = useProducts(
    { limit: 8, sort },
    { endpoint: '/api/furniture-products' },
  );

  const products = data?.products ?? [];

  return (
    <section className="futp-section">
      <div className="container-main">

        {/* Centered heading */}
        <h2 className="futp-heading">Trending Products</h2>

        {/* Centered tabs */}
        <div className="futp-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`futp-tab${i === activeTab ? ' futp-tab--active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="futp-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="futp-skeleton" />
              ))
            : products.map((product, idx) => (
                <HomeProductCard
                  key={product.id}
                  product={product}
                  hrefBase="/products"
                  index={idx}
                />
              ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/shop" className="futp-view-all">
            View all <IconArrowRight size={18} />
          </Link>
        </div>

      </div>

      <style>{`
        /* ── Heading ── */
        .futp-heading {
          font-size: clamp(22px, 2.4vw, 32px);
          font-weight: 700;
          color: #111;
          text-align: center;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        /* ── Tabs row ── */
        .futp-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        /* ── Individual tab ── */
        .futp-tab {
          font-size: 15px;
          font-weight: 400;
          color: #888;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 8px 20px;
          cursor: pointer;
          line-height: 1.3;
          white-space: nowrap;
          transition: color 200ms ease, border-color 200ms ease, font-weight 200ms ease;
        }
        .futp-tab:hover {
          color: #c8a45a;
        }
        .futp-tab--active {
          color: #111;
          font-weight: 700;
          border-bottom-color: #111;
        }

        /* ── Product grid ── */
        .futp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        /* ── Skeleton loader ── */
        .futp-skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: futpSkeleton 1.4s infinite;
          border-radius: 10px;
          aspect-ratio: 3/4;
        }
        @keyframes futpSkeleton {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── View All button ── */
        .futp-view-all {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 600;
          color: #111;
          border: 1.5px solid #111;
          padding: 14px 56px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 220ms ease, color 220ms ease, border-color 220ms ease;
        }
        .futp-view-all:hover {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        /* ── Responsive ── */
        @media (min-width: 750px) {
          .futp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .futp-tab  { font-size: 16px; padding: 8px 24px; }
        }
        @media (min-width: 992px) {
          .futp-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
          .futp-tab  { font-size: 16px; padding: 10px 28px; }
        }
      `}</style>
    </section>
  );
}
