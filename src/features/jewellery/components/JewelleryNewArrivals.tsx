'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { jewelleryProducts } from '@/data/jewellery-products';

const TABS = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'] as const;
type Tab = typeof TABS[number];

function getProductsForTab(tab: Tab) {
  if (tab === 'All') return jewelleryProducts.slice(0, 8);
  return jewelleryProducts.filter((p) => p.category === tab).slice(0, 8);
}

export function JewelleryNewArrivals() {
  const [activeTab, setActiveTab] = useState<Tab>('All');
  const products = getProductsForTab(activeTab);

  return (
    <section className="jw-arrivals">
      <div className="container-main">
        <div className="jw-arrivals-header">
          <h2 className="jw-arrivals-title">New Arrivals</h2>
          <div className="jw-arrivals-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`jw-arr-tab${activeTab === tab ? ' is-active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="jw-arrivals-grid">
          {products.map((product, index) => (
            <HomeProductCard
              key={product.id}
              product={product}
              index={index}
              hrefBase="/products"
            />
          ))}
        </div>

        <div className="jw-arrivals-footer">
          <Link href="/shop" className="jw-arrivals-cta">
            View All Products
          </Link>
        </div>
      </div>

      <style>{`
        .jw-arrivals-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .jw-arrivals-title {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .jw-arrivals-tabs {
          display: flex;
          gap: clamp(12px, 2vw, 24px);
          flex-wrap: wrap;
        }
        .jw-arr-tab {
          background: none;
          border: none;
          cursor: pointer;
          font-size: clamp(13px, 1.1vw, 15px);
          font-weight: 400;
          color: #777;
          padding: 4px 0;
          border-bottom: 2px solid transparent;
          transition: all 200ms ease;
          white-space: nowrap;
          font-family: inherit;
        }
        .jw-arr-tab.is-active {
          font-weight: 600;
          color: #111;
          border-bottom-color: #b89b6e;
        }
        .jw-arr-tab:hover:not(.is-active) { color: #333; }

        .jw-arrivals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 750px) {
          .jw-arrivals-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .jw-arrivals-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .jw-arrivals-footer {
          display: flex;
          justify-content: center;
          margin-top: 36px;
        }
        .jw-arrivals-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #111;
          border: 1.5px solid #111;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 13px 36px;
          border-radius: 2px;
          text-decoration: none;
          transition: background-color 260ms ease, color 260ms ease, border-color 260ms ease;
        }
        .jw-arrivals-cta:hover {
          background-color: #b89b6e;
          border-color: #b89b6e;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
