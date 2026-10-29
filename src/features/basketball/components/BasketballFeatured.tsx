'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

const BB_ENDPOINT = '/api/basketball-products';

const TABS = ['Shop All', 'Basketball', 'Baseball', 'Sport club', 'Football'] as const;
type Tab = (typeof TABS)[number];

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

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

export function BasketballFeatured() {
  const { data, isLoading } = useProducts({ limit: 60 }, { endpoint: BB_ENDPOINT });
  const [activeTab, setActiveTab] = useState<Tab>('Shop All');

  const all = data?.products || [];
  const matching = activeTab === 'Shop All' ? all : all.filter((p) => p.category === activeTab);
  const filtered = matching.slice(0, 8);

  return (
    <section>
      <div className="container-main">
        {/* Heading row: title left, tabs right */}
        <div className="bbfeat-head">
          <h2 className="bbfeat-title">Featured Products</h2>
          <div className="bbfeat-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`bbfeat-tab ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bbfeat-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : filtered.map((product, i) => (
                <HomeProductCard key={product.id} product={product} index={i} imageHeight="345px" />
              ))
          }
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/shop" className="bbfeat-viewall">
            View all
            <IconArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        .bbfeat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: clamp(24px, 3vw, 40px);
        }
        .bbfeat-title {
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #1a1a1a;
        }
        .bbfeat-tabs {
          display: flex;
          align-items: center;
          gap: clamp(14px, 1.8vw, 26px);
          flex-wrap: wrap;
        }
        .bbfeat-tab {
          background: none;
          border: none;
          padding: 4px 0;
          font-size: 18px;
          font-weight: 500;
          color: #777;
          cursor: pointer;
          position: relative;
          transition: color 200ms ease;
        }
        .bbfeat-tab::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background-color: #111;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 250ms ease;
        }
        .bbfeat-tab:hover { color: #111; }
        .bbfeat-tab.is-active { color: #111; font-weight: 600; }
        .bbfeat-tab.is-active::after { transform: scaleX(1); }

        .bbfeat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .bbfeat-grid > * { min-width: 0; }
        /* Product shots vary in dimension — contain them within the fixed 345px
           square image box so nothing overflows or is cropped incorrectly; the
           card's light backdrop letterboxes cleanly. Scoped to Basketball. */
        .bbfeat-grid .fc-card > a:first-child img {
          object-fit: contain !important;
        }
        @media (min-width: 750px) {
          .bbfeat-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .bbfeat-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .bbfeat-viewall {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 32px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          border-radius: 40px;
          text-decoration: none;
          background: none;
          cursor: pointer;
          transition: background-color 250ms ease, color 250ms ease, gap 250ms ease;
        }
        .bbfeat-viewall:hover { background-color: #222; color: #fff; gap: 12px; }
      `}</style>
    </section>
  );
}
