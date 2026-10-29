'use client';

import { useMemo, useState } from 'react';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import type { Product } from '@/types/product';

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

const tabs = [
  { id: 'featured', label: 'Featured' },
  { id: 'new-arrivals', label: 'New Arrivals' },
  { id: 'bestsellers', label: 'Bestsellers' },
  { id: 'popular', label: 'Popular' },
];

function sortForTab(products: Product[], tab: string): Product[] {
  const list = [...products];
  switch (tab) {
    case 'new-arrivals':
      return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case 'bestsellers':
      return list.sort((a, b) => b.reviewCount - a.reviewCount);
    case 'popular':
      return list.sort((a, b) => b.rating - a.rating);
    default:
      return list;
  }
}

export function CraftDecoreTrendingProducts() {
  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/craft-and-decore-products' });
  const [activeTab, setActiveTab] = useState('featured');

  const products = useMemo(
    () => sortForTab(data?.products.slice(0, 8) || [], activeTab),
    [data, activeTab]
  );

  return (
    <section className="cdtp-section">
      <div className="container-main">
        <h2 className="cdtp-heading">Trending Products</h2>

        <div className="cdtp-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cdtp-tab ${activeTab === tab.id ? 'is-active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="cdtp-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <HomeProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  showCountdown={false}
                  showScrollText={false}
                  hrefBase="/products"
                  imageHeight="345px"
                />
              ))
          }
        </div>
      </div>

      <style>{`
        .cdtp-heading {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 600;
          color: #171712;
          text-align: center;
          margin-bottom: 24px;
        }
        .cdtp-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 28px;
          margin-bottom: 32px;
        }
        .cdtp-tab {
          position: relative;
          font-size: 16px;
          font-weight: 500;
          color: #888;
          padding: 8px 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 220ms ease;
        }
        .cdtp-tab::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 1.5px;
          background-color: #171712;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cdtp-tab:hover { color: #171712; }
        .cdtp-tab.is-active {
          color: #171712;
          font-weight: 600;
        }
        .cdtp-tab.is-active::after { transform: scaleX(1); }

        .cdtp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .cdtp-grid > * { min-width: 0; }

        /* Product image box: fixed 345x345 on desktop/tablet, contained (no
           crop/stretch), capped to the grid cell's own width when narrower
           than 345px so it never overflows its column. Mobile (<750px) keeps
           HomeProductCard's own fluid clamp() + contain treatment. */
        @media (min-width: 750px) {
          .cdtp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .cdtp-grid .fc-card > a:first-child {
            width: 345px;
            height: 345px;
            max-width: 100%;
            aspect-ratio: auto;
            margin-left: auto;
            margin-right: auto;
          }
          .cdtp-grid .fc-card > a:first-child img {
            object-fit: contain !important;
            background-color: #f5f5f5;
          }
        }
        @media (min-width: 992px) {
          .cdtp-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }
      `}</style>
    </section>
  );
}
