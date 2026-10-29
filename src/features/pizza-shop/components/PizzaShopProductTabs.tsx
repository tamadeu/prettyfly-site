'use client';

import { useEffect, useRef, useState } from 'react';
import { pizzaProducts } from '@/data/pizza-products';
import { PizzaProductCard, PizzaProductCardStyles } from './PizzaProductCard';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const INITIAL_LIMIT = 8;
const REVEAL_DELAY_MS = 600;

const tabs = [
  { id: 'featured',     label: 'Featured'    },
  { id: 'new-arrivals', label: 'New Arrivals' },
  { id: 'bestseller',   label: 'Bestsellers'  },
  { id: 'popular',      label: 'Popular'      },
];

export function PizzaShopProductTabs() {
  const [activeTab,   setActiveTab]   = useState('featured');
  const [showAll,     setShowAll]     = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered          = pizzaProducts.filter((p) => p.tags.includes(activeTab));
  const visibleProducts   = showAll ? filtered : filtered.slice(0, INITIAL_LIMIT);
  const hasMore           = filtered.length > INITIAL_LIMIT;
  const showViewAllButton = hasMore && !showAll;

  useEffect(() => {
    setShowAll(false);
    setIsRevealing(false);
    if (revealTimerRef.current) {
      clearTimeout(revealTimerRef.current);
      revealTimerRef.current = null;
    }
  }, [activeTab]);

  useEffect(() => {
    return () => { if (revealTimerRef.current) clearTimeout(revealTimerRef.current); };
  }, []);

  const handleViewAll = () => {
    if (isRevealing || showAll) return;
    setIsRevealing(true);
    revealTimerRef.current = setTimeout(() => {
      setShowAll(true);
      setIsRevealing(false);
      revealTimerRef.current = null;
    }, REVEAL_DELAY_MS);
  };

  return (
    <section className="ppt-section">
      <div className="container-main">
        {/* Heading row */}
        <div className="ppt-heading-row">
          <h2 className="ppt-heading">Product Tabs</h2>
          <div className="ppt-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`ppt-tab${activeTab === tab.id ? ' is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="ppt-grid">
          {visibleProducts.length === 0 ? (
            <div className="ppt-empty">No products in this category yet.</div>
          ) : (
            visibleProducts.map((product, i) => {
              const isNewlyRevealed = showAll && i >= INITIAL_LIMIT;
              const delayIndex = isNewlyRevealed ? i - INITIAL_LIMIT : i;
              return (
                <div
                  key={product.id}
                  style={{
                    animation: 'pptFadeUp 400ms ease forwards',
                    animationDelay: `${delayIndex * 40}ms`,
                    opacity: 0,
                    minWidth: 0,
                  }}
                >
                  <PizzaProductCard
                    product={product}
                    showCountdown={i === 0 && activeTab === 'featured' && product.badge === 'sale'}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* View all */}
        {showViewAllButton && (
          <div className="ppt-view-all-wrap">
            <button
              type="button"
              className={`ppt-view-all${isRevealing ? ' is-loading' : ''}`}
              onClick={handleViewAll}
              disabled={isRevealing}
              aria-live="polite"
              aria-busy={isRevealing}
            >
              {isRevealing ? (
                <>
                  <span className="ppt-spinner" aria-hidden="true" />
                  Loading...
                </>
              ) : (
                <>
                  View All
                  <IconArrowRight size={13} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <PizzaProductCardStyles />

      <style>{`
        /* ── Heading row ── */
        .ppt-heading-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          margin-bottom: 36px;
        }
        @media (max-width: 749px) { .ppt-tabs { justify-content: center; } }
        .ppt-heading {
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.2px;
        }

        /* ── Tabs ── */
        .ppt-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
        }
        .ppt-tab {
          position: relative;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          padding: 8px 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 200ms ease;
        }
        .ppt-tab::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 1.5px;
          background: #e84d1c;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ppt-tab:hover { color: #fff; }
        .ppt-tab.is-active { color: #e84d1c; font-weight: 500; }
        .ppt-tab.is-active::after { transform: scaleX(1); }

        /* ── Grid ── */
        .ppt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .ppt-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: rgba(255,255,255,0.4);
          font-size: 14px;
          background-color: rgb(10,10,10);
          border-radius: 10px;
        }

        /* ── View all button ── */
        .ppt-view-all-wrap { text-align: center; margin-top: 36px; }
        .ppt-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 150px;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          color: #e84d1c;
          padding: 10px 24px;
          border: 1.5px solid #e84d1c;
          border-radius: 40px;
          background-color: transparent;
          cursor: pointer;
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease, transform 250ms ease;
        }
        .ppt-view-all:hover:not(:disabled) {
          background-color: #e84d1c;
          color: #fff;
          transform: translateY(-1px);
        }
        .ppt-view-all.is-loading {
          background-color: #e84d1c;
          border-color: #e84d1c;
          color: #fff;
          cursor: wait;
        }
        .ppt-view-all:disabled { opacity: 1; }

        .ppt-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: pptSpin 0.7s linear infinite;
          display: inline-block;
        }

        /* ── Animations ── */
        @keyframes pptFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pptSpin {
          to { transform: rotate(360deg); }
        }

        /* ── Breakpoints ── */
        @media (min-width: 750px) {
          .ppt-heading-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 48px;
          }
          .ppt-heading { font-size: 28px; }
          .ppt-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
        }
        @media (min-width: 992px) {
          .ppt-heading-row { margin-bottom: 56px; }
          .ppt-heading { font-size: 30px; }
          .ppt-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .ppt-tab { font-size: 18px; }
          .ppt-tabs { gap: 40px; }
        }
        @media (min-width: 1200px) {
          .ppt-heading { font-size: 32px; }
        }
      `}</style>
    </section>
  );
}
