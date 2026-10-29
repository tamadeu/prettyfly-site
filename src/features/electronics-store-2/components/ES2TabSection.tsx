'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import type { Product } from '@/types/product';

/* â”€â”€ Tabs â”€â”€ */

const TABS = ['Show All', 'Laptop', 'Monitor', 'Speaker', 'Headphone'];

/* â”€â”€ Helpers â”€â”€ */

function getVisible(products: Product[], tab: string, tabIndex: number): Product[] {
  if (tab === 'Show All') return products.slice(0, 8);
  const matching = products.filter((p) => p.category === tab);
  if (matching.length >= 8) return matching.slice(0, 8);
  /* Rotate the "others" pool by tab index so each tab shows a different set */
  const others = products.filter((p) => p.category !== tab);
  const offset = (tabIndex * 2) % Math.max(others.length, 1);
  const rotated = [...others.slice(offset), ...others.slice(0, offset)];
  return [...matching, ...rotated].slice(0, 8);
}

/* â”€â”€ Component â”€â”€ */

export function ES2TabSection() {
  const [activeTab, setActiveTab] = useState('Show All');

  const { data, isLoading } = useProducts(
    { limit: 50 },
    { endpoint: '/api/electronics-store-products' },
  );

  const allProducts = data?.products ?? [];
  const tabIndex = TABS.indexOf(activeTab);
  const visible = getVisible(allProducts, activeTab, tabIndex);

  return (
    <section className="es2ts-section">
      <div className="container-main">

        {/* â”€â”€ Header row â”€â”€ */}
        <div className="es2ts-header">
          <h2 className="es2ts-heading">Product Tabs</h2>
          <div className="es2ts-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`es2ts-tab${activeTab === tab ? ' es2ts-tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* â”€â”€ Product grid â”€â”€ */}
        {isLoading ? (
          <div className="es2ts-loading">Loadingâ€¦</div>
        ) : (
          <div className="es2ts-grid">
            {visible.map((product, i) => (
              <div key={product.id} className="es2ts-card-wrap">
                <HomeProductCard
                  product={product}
                  index={i}
                  hrefBase="/products"
                  showCountdown={false}
                  showScrollText={false}
                  imageHeight="370px"
                  themeColor="#2b6be6"
                  countdownBg="#2b6be6"
                />
              </div>
            ))}
          </div>
        )}

        {/* â”€â”€ View All CTA â”€â”€ */}
        <div className="es2ts-cta-wrap">
          <Link href="/shop" className="es2ts-cta">
            View all
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} style={{ flexShrink: 0 }}>
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>

      </div>

      <style>{`
        /* â”€â”€ Section â”€â”€ */
        .es2ts-section { width: 100%; }

        /* â”€â”€ Header row â”€â”€ */
        .es2ts-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }
        .es2ts-heading {
          font-size: clamp(26px, 2.6vw, 32px);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.3px;
        }

        /* â”€â”€ Tabs â”€â”€ */
        .es2ts-tabs {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          align-items: center;
        }
        .es2ts-tab {
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-size: 20px;
          color: #555;
          cursor: pointer;
          padding: 0 0 4px;
          font-family: inherit;
          font-weight: 400;
          white-space: nowrap;
          transition: color 200ms ease, border-color 200ms ease;
        }
        .es2ts-tab:hover { color: #2b6be6; }
        .es2ts-tab--active {
          color: #2b6be6;
          border-bottom-color: #2b6be6;
          font-weight: 500;
        }

        /* â”€â”€ 4-col product grid â”€â”€ */
        .es2ts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* â”€â”€ Card wrapper â€” mirrors .ms-fp-card-wrap exactly â”€â”€ */
        .es2ts-card-wrap {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          padding: 14px;
          box-sizing: border-box;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: box-shadow 250ms ease, transform 250ms ease;
        }
        .es2ts-card-wrap:hover {
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        /* Force HomeProductCard inner image bg to white (overrides default #f5f5f5) */
        .es2ts-card-wrap,
        .es2ts-card-wrap .fc-card,
        .es2ts-card-wrap .fc-card > a:first-child {
          background-color: #fff !important;
          background: #fff !important;
        }

        /* â”€â”€ Loading â”€â”€ */
        .es2ts-loading {
          text-align: center;
          padding: 60px 0;
          color: #888;
          font-size: 15px;
        }

        /* â”€â”€ View All CTA â”€â”€ */
        .es2ts-cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 36px;
        }
        .es2ts-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid rgba(18, 18, 18);
          padding: 14px 56px;
          border-radius: 6px;
          color: rgba(18, 18, 18);
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease;
        }
        .es2ts-cta:hover {
          background-color: rgba(18, 18, 18);
          border-color: rgba(18, 18, 18);
          color: #fff;
        }

        /* â”€â”€ Responsive â”€â”€ */
        @media (min-width: 750px) and (max-width: 991px) {
          .es2ts-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 749px) {
          .es2ts-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .es2ts-header { flex-direction: column; align-items: flex-start; }
          .es2ts-tabs { gap: 20px; }
          /* Tighten image height at mobile to match megastore pattern */
          .es2ts-card-wrap .fc-card > a:first-child {
            height: clamp(120px, 34vw, 220px) !important;
          }
        }
      `}</style>
    </section>
  );
}
