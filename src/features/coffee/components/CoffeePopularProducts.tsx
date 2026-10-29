'use client';

import { useMemo, useState } from 'react';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { coffeeProducts } from '@/data/coffee-products';

/* Tabbed grid matching the "Popular Product" screenshot: 4 generic sort tabs
   (not categories) driving an 8-item HomeProductCard grid — closer to
   Jewelry2NewArrivals' tabs+HomeProductCard pattern than the horizontal-card
   popular-products-tab.md skill, since this screenshot uses the standard
   vertical product card (badges, swatches, hover Quick Add) throughout. */

const FIRST_EIGHT = coffeeProducts.slice(0, 8);

const TABS = [
  { id: 'featured', label: 'Featured' },
  { id: 'new-arrivals', label: 'New Arrivals' },
  { id: 'bestsellers', label: 'Bestsellers' },
  { id: 'popular', label: 'Popular' },
] as const;

export function CoffeePopularProducts() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>('featured');

  const productsByTab = useMemo(() => ({
    featured: FIRST_EIGHT,
    'new-arrivals': [...FIRST_EIGHT].sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0)),
    bestsellers: [...FIRST_EIGHT].sort((a, b) => (b.badge === 'sale' ? 1 : 0) - (a.badge === 'sale' ? 1 : 0)),
    popular: [...FIRST_EIGHT].reverse(),
  }), []);

  const products = productsByTab[activeTab];

  return (
    <section className="cfpp-section">
      <div className="container-main">
        <div className="cfpp-heading-wrap">
          <h2 className="cfpp-heading">Popular Product</h2>
          <div className="cfpp-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`cfpp-tab ${activeTab === tab.id ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="cfpp-grid">
          {products.map((product, i) => (
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
      </div>

      <style>{`
        .cfpp-heading-wrap { text-align: center; margin-bottom: clamp(24px, 3vw, 36px); }
        .cfpp-heading { font-size: clamp(22px, 2.6vw, 30px); font-weight: 700; color: #2a2118; margin-bottom: 16px; }
        .cfpp-tabs { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
        .cfpp-tab {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: #888;
          padding: 6px 0;
          position: relative;
          transition: color 200ms ease;
        }
        .cfpp-tab.is-active { color: #c8874a; font-weight: 600; }
        .cfpp-tab.is-active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #c8874a;
        }
        .cfpp-tab:hover { color: #c8874a; }

        .cfpp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .cfpp-grid > * { min-width: 0; }

        .cfpp-grid .fc-card > a:first-child {
          width: 100% !important;
          height: auto !important;
          aspect-ratio: 1 / 1 !important;
        }
        .cfpp-grid .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: #f5f5f5;
        }

        @media (min-width: 750px) { .cfpp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
        @media (min-width: 992px) { .cfpp-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; } }
      `}</style>
    </section>
  );
}
