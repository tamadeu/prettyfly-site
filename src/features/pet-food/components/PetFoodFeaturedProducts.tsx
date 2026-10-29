'use client';

import { useState, useMemo } from 'react';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { petFoodProducts } from '@/data/pet-food-products';

type TabKey = 'featured' | 'new' | 'bestsellers' | 'popular';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'featured', label: 'Featured' },
  { key: 'new', label: 'New Arrivals' },
  { key: 'bestsellers', label: 'Bestsellers' },
  { key: 'popular', label: 'Popular' },
];

export function PetFoodFeaturedProducts() {
  const [active, setActive] = useState<TabKey>('featured');

  const products = useMemo(() => {
    const list = [...petFoodProducts];
    switch (active) {
      case 'new':
        return list.filter((p) => p.badge === 'new').concat(list).slice(0, 8);
      case 'bestsellers':
        return list.sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
      case 'popular':
        return list.sort((a, b) => b.rating - a.rating).slice(0, 8);
      default:
        return list.slice(0, 8);
    }
  }, [active]);

  return (
    <section className="pf-feat-section">
      <div className="container-main">
        <div className="pf-feat-header">
          <h2 className="pf-feat-title">Featured Products</h2>
          <div className="pf-feat-tabs" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={active === t.key}
                onClick={() => setActive(t.key)}
                className={`pf-feat-tab ${active === t.key ? 'is-active' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pf-feat-grid">
          {products.map((p, i) => (
            <HomeProductCard
              key={`${active}-${p.id}`}
              product={p}
              index={i}
              hrefBase="/pet-food/product"
              /* Screenshot: countdown sits on the third card (the sale tile).
                 No scrolling marquee anywhere on pet-food. */
              showCountdown={i === 2}
              showScrollText={false}
              imageHeight="340px"
              themeColor="rgb(10, 66, 83)"
              countdownBg="rgb(10, 66, 83)"
            />
          ))}
        </div>
      </div>

      <style>{`
        .pf-feat-section { padding: 0; }
        /* More air between heading row and the grid below.
           Below 750px the header stacks so tabs sit under the heading,
           everything centered horizontally. */
        .pf-feat-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          margin-bottom: 36px;
        }
        @media (max-width: 749px) {
          .pf-feat-tabs { justify-content: center; }
        }
        @media (min-width: 750px) {
          .pf-feat-header {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 48px;
          }
        }
        .pf-feat-title {
          font-size: 26px;
          font-weight: 700;
          color: rgb(10, 66, 83);
        }
        /* Cleaner tab row — larger type, lighter weight, roomier spacing */
        .pf-feat-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
        }
        .pf-feat-tab {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          font-weight: 400;
          color: rgb(10, 66, 83);
          padding: 8px 0;
          transition: color 200ms ease;
        }
        .pf-feat-tab::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 1.5px;
          background: #0a3a5c;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pf-feat-tab:hover { color: rgb(10, 66, 83); }
        .pf-feat-tab.is-active { color: rgb(10, 66, 83); font-weight: 500; }
        .pf-feat-tab.is-active::after { transform: scaleX(1); }

        .pf-feat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }
        /* 0–555px — force 2 cards per row (below auto-fit's 250px minmax
           would collapse to 1). Slightly tighter gap for narrow phones. */
        @media (max-width: 555px) {
          .pf-feat-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
        @media (min-width: 992px) {
          .pf-feat-header { margin-bottom: 56px; }
          .pf-feat-title { font-size: 30px; }
          .pf-feat-tabs { gap: 40px; }
          .pf-feat-tab { font-size: 18px; }
          .pf-feat-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
