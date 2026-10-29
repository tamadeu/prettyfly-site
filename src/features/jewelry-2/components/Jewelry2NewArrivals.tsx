'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

/* Tab label "Dimond" kept verbatim from the source screenshot (Rule #1 —
   no creative correction of the mockup's copy). */
const TABS = ['Shop All', 'Dimond', 'Pearl', 'Silver', 'Rose Gold'];

function IconChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function ProductCardSkeleton() {
  return (
    <div style={{ border: '1px solid #ececec', borderRadius: '8px', padding: '16px' }}>
      <div className="animate-shimmer" style={{ height: '260px', borderRadius: '6px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto', borderRadius: '4px' }} />
    </div>
  );
}

export function Jewelry2NewArrivals() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
  const { data, isLoading } = useProducts({ limit: 40 }, { endpoint: '/api/jewelry-2-products' });

  const all = data?.products ?? [];
  const products = (activeTab === 'Shop All' ? all : all.filter((p) => p.category === activeTab)).slice(0, 8);

  return (
    <section className="jzna-section">
      <div className="container-main">
        <div className="jzna-head">
          <h2 className="jzna-title">New Arrivals</h2>
          <div className="jzna-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`jzna-tab ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="jzna-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <HomeProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  hrefBase="/products"
                  showCountdown={false}
                  showScrollText={false}
                />
              ))}
        </div>

        <div className="jzna-viewall-wrap">
          <Link href="/shop" className="jzna-viewall">
            View all
            <IconChevronRight size={20} />
          </Link>
        </div>
      </div>

      <style>{`
        .jzna-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 30px;
        }
        .jzna-title { font-size: clamp(22px, 2.6vw, 28px); font-weight: 700; color: #111; }
        .jzna-tabs { display: flex; gap: 34px; flex-wrap: wrap; }
        .jzna-tab {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
          color: #888;
          padding: 4px 0;
          position: relative;
          transition: color 200ms ease;
        }
        .jzna-tab.is-active { color: #111; font-weight: 600; }
        .jzna-tab.is-active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -4px;
          height: 2px;
          background: #111;
        }
        .jzna-tab:hover { color: #111; }

        .jzna-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .jzna-grid > * { min-width: 0; }

        /* Fixed 350×350 product image box — object-fit: contain so every
           photo fits entirely inside the box (no cropping/stretching/
           overflow), regardless of its native aspect ratio. max-width:100%
           keeps it from overflowing narrower grid columns on small screens.
           !important is required to beat HomeProductCard's own inline
           style + its ≤749px media-query overrides. */
        .jzna-grid .fc-card > a:first-child {
          width: 350px !important;
          max-width: 100% !important;
          height: auto !important;
          aspect-ratio: 1 / 1 !important;
          margin: 0 auto 14px !important;
        }
        .jzna-grid .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: #f5f5f5;
        }

        .jzna-viewall-wrap { display: flex; justify-content: center; margin-top: 32px; }
        .jzna-viewall {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 160px;
          height: 50px;
          box-sizing: border-box;
          border: 1px solid #111;
          border-radius: 0;
          background: #fff;
          color: #111;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 200ms ease, border-color 200ms ease;
        }
        .jzna-viewall svg { color: #111; flex-shrink: 0; transition: transform 200ms ease; }
        .jzna-viewall:hover { background: #f5f5f5; border-color: #000; }
        .jzna-viewall:hover svg { transform: translateX(3px); }

        @media (min-width: 750px) { .jzna-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
        @media (min-width: 992px) { .jzna-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; } }
      `}</style>
    </section>
  );
}
