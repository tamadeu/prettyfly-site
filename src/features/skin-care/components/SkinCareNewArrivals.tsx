'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { skinCareProducts } from '@/data/skin-care-products';

const TABS = ['Featured', 'New Arrivals', 'Bestsellers', 'On Sale'] as const;
type Tab = typeof TABS[number];

function getProductsForTab(tab: Tab) {
  switch (tab) {
    case 'New Arrivals':
      return skinCareProducts.filter((p) => p.badge === 'new').slice(0, 8);
    case 'Bestsellers':
      return [...skinCareProducts].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
    case 'On Sale':
      return skinCareProducts.filter((p) => p.badge === 'sale').slice(0, 8);
    default:
      return skinCareProducts.slice(0, 8);
  }
}

export function SkinCareNewArrivals() {
  const [activeTab, setActiveTab] = useState<Tab>('Featured');
  const products = getProductsForTab(activeTab);

  return (
    <section className="sk-arrivals">
      <div className="container-main">
        <div className="sk-arrivals-header">
          <h2 className="sk-arrivals-title">New Arrivals</h2>
          <div className="sk-arrivals-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`sk-tab-btn${activeTab === tab ? ' is-active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="sk-arrivals-grid">
          {products.map((product, index) => (
            <HomeProductCard
              key={product.id}
              product={product}
              index={index}
              hrefBase="/products"
            />
          ))}
        </div>

        <div className="sk-arrivals-footer">
          <Link href="/shop" className="sk-arrivals-cta">
            View All Products
          </Link>
        </div>
      </div>

      <style>{`
        .sk-arrivals-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .sk-arrivals-title {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .sk-arrivals-tabs {
          display: flex;
          gap: clamp(12px, 2vw, 24px);
          flex-wrap: wrap;
        }
        .sk-tab-btn {
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
        .sk-tab-btn.is-active {
          font-weight: 600;
          color: #111;
          border-bottom-color: #111;
        }
        .sk-tab-btn:hover:not(.is-active) { color: #333; }

        .sk-arrivals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 750px) {
          .sk-arrivals-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .sk-arrivals-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        .sk-arrivals-footer {
          display: flex;
          justify-content: center;
          margin-top: 36px;
        }
        .sk-arrivals-cta {
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
          transition: background-color 260ms ease, color 260ms ease;
        }
        .sk-arrivals-cta:hover {
          background-color: #111;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
