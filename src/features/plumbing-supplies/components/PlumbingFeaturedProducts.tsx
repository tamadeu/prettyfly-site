'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { PlumbingProductCard } from './PlumbingProductCard';
import { PLUMBING_FEATURED_TABS } from '@/data/plumbing-supplies-products';

function IconArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

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

export function PlumbingFeaturedProducts() {
  const [activeTab, setActiveTab] = useState<string>(PLUMBING_FEATURED_TABS[0]);
  const { data, isLoading } = useProducts({ limit: 30 }, { endpoint: '/api/plumbing-supplies-products' });

  const products = (data?.products ?? []).filter((p) => p.category === activeTab).slice(0, 8);

  return (
    <section>
      <div className="container-main">
        {/* Heading row: title left, tabs right */}
        <div className="plfp-head">
          <h2 className="plfp-title">Featured Products</h2>
          <div className="plfp-tabs">
            {PLUMBING_FEATURED_TABS.map((tab) => (
              <button
                key={tab}
                className={`plfp-tab ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="plfp-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <PlumbingProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  href="/products/casual-chambray-shirt"
                  showCountdown={!!product.countdownEnd}
                />
              ))
          }
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/shop" className="plfp-view-all">
            View all
            <span className="plfp-va-arrow"><IconArrowRight size={18} /></span>
          </Link>
        </div>
      </div>

      <style>{`
        .plfp-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 34px;
        }
        .plfp-title {
          font-size: clamp(22px, 2.6vw, 28px);
          font-weight: 600;
          color: #1c2230;
        }
        .plfp-tabs {
          display: flex;
          gap: 45px;
          flex-wrap: wrap;
        }
        .plfp-tab {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
          color: #8a9199;
          padding: 4px 0;
          position: relative;
          transition: color 200ms ease;
        }
        .plfp-tab.is-active { color: #0a2540; }
        .plfp-tab.is-active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 2px;
          background: #0a2540;
        }
        .plfp-tab:hover { color: #0a2540; }

        .plfp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .plfp-grid > * { min-width: 0; }
        @media (min-width: 750px) {
          .plfp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .plfp-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .plfp-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 44px;
          font-size: 18px;
          font-weight: 500;
          color: #1c2230;
          border: 1px solid #1c2230;
          border-radius: 2px;
          text-decoration: none;
          background: none;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .plfp-va-arrow {
          display: inline-flex;
          align-items: center;
          color: #000;
          transition: color 250ms ease;
        }
        .plfp-view-all:hover { background-color: #1c2230; color: #fff; }
        .plfp-view-all:hover .plfp-va-arrow { color: #fff; }
      `}</style>
    </section>
  );
}
