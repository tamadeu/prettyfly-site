'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { carAccessoriesProducts } from '@/data/car-accessories-products';

const tabs = [
  { id: 'accessories', label: 'Accessories', category: 'Accessories' },
  { id: 'wheels',      label: 'Wheels',      category: 'Wheels' },
  { id: 'auto-parts',  label: 'Auto Parts',  category: 'Auto Parts' },
  { id: 'brakes',      label: 'Brakes',      category: 'Brakes' },
];

export function CarAccessoriesProducts() {
  const [activeTab, setActiveTab] = useState('accessories');

  const activeCategory = tabs.find((t) => t.id === activeTab)?.category ?? 'Accessories';
  const products = carAccessoriesProducts
    .filter((p) => p.category === activeCategory)
    .slice(0, 8);

  return (
    <section className="ca-prod-section">
      <div className="container-main">

        {/* Heading row — heading left, tabs right */}
        <div className="ca-prod-top-row">
          <h2 className="ca-prod-heading">Our Products</h2>
          <div className="ca-prod-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`ca-prod-tab${activeTab === tab.id ? ' is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8-card grid */}
        <div className="ca-prod-grid">
          {products.map((product, i) => (
            <div
              key={`${activeTab}-${product.id}`}
              style={{ animation: 'caProdFadeIn 300ms ease forwards', animationDelay: `${i * 40}ms`, opacity: 0 }}
            >
              <HomeProductCard
                product={product}
                hrefBase="/car-accessories/product"
                imageHeight="345px"
                index={i}
              />
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="ca-prod-bottom">
          <Link href="/car-accessories/shop" className="ca-prod-view-all">
            View All
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14} aria-hidden="true">
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>

      </div>

      <style>{`
        .ca-prod-section { background-color: #fff; }

        /* ── Top row: heading left, tabs right ── */
        .ca-prod-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }
        .ca-prod-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.3px;
          margin: 0;
        }

        /* ── Tabs ── */
        .ca-prod-tabs {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .ca-prod-tab {
          font-size: 15px;
          font-weight: 500;
          color: #666;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 220ms ease;
          position: relative;
        }
        .ca-prod-tab::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -3px;
          height: 2px;
          background-color: #5b72d6;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ca-prod-tab:hover { color: #5b72d6; }
        .ca-prod-tab.is-active { color: #5b72d6; font-weight: 600; }
        .ca-prod-tab.is-active::after { transform: scaleX(1); }

        /* ── 4-column grid (2 rows = 8 cards) ── */
        .ca-prod-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        @media (min-width: 750px) {
          .ca-prod-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        }
        @media (min-width: 992px) {
          .ca-prod-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; }
        }

        @keyframes caProdFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── View All button ── */
        .ca-prod-bottom {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        .ca-prod-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #fff;
          color: #111;
          font-size: 15px;
          font-weight: 600;
          padding: 12px 36px;
          border: 1.5px solid #111;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .ca-prod-view-all:hover {
          background-color: #111;
          color: #fff;
        }

        /* ── Mobile ── */
        @media (max-width: 749px) {
          .ca-prod-top-row { flex-direction: column; align-items: flex-start; }
          .ca-prod-tabs { gap: 16px; }
        }
      `}</style>
    </section>
  );
}
