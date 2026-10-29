'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'best-selling', label: 'Best Selling', count: 12 },
  { id: 'new-arrivals', label: 'New Arrivals', count: 12 },
  { id: 'top-rating',   label: 'Top Rating',   count: 12 },
  { id: 'accessories',  label: 'Accessories',  count: 12 },
];

const floatLeft = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

const floatRight = {
  animate: {
    y: [0, 14, 0],
    transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.6 },
  },
};

export function ElegantFashionTabSection() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const activeTab = hoveredTab ?? 'best-selling';

  return (
    <section className="eftab-section">
      <div className="container-main eftab-inner">

        {/* ── Left: 2 stacked images (floating up) ── */}
        <motion.div
          className="eftab-left"
          variants={floatLeft}
          animate="animate"
        >
          <div className="eftab-img-wrap">
            <Image
              src="/elegant-fashion/featured-collection-tab/featured-collection-tab1.webp"
              alt="Fashion collection"
              fill
              style={{ objectFit: 'cover' }}
              sizes="250px"
            />
          </div>
          <div className="eftab-img-wrap">
            <Image
              src="/elegant-fashion/featured-collection-tab/featured-collection-tab2.webp"
              alt="Fashion collection"
              fill
              style={{ objectFit: 'cover' }}
              sizes="250px"
            />
          </div>
        </motion.div>

        {/* ── Center: tab list ── */}
        <div className="eftab-center">
          <ul className="eftab-list" onMouseLeave={() => setHoveredTab(null)}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id}>
                  <button
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    className={`eftab-btn${isActive ? ' is-active' : ''}`}
                  >
                    <span className="eftab-text-wrap">
                      <span className="eftab-line eftab-line-1">{tab.label}</span>
                      <span className="eftab-line eftab-line-2">{tab.label}</span>
                    </span>
                    <sup className="eftab-count">({tab.count})</sup>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── Right: tall portrait image (floating down) ── */}
        <motion.div
          className="eftab-right"
          variants={floatRight}
          animate="animate"
        >
          <div className="eftab-img-tall">
            <Image
              src="/elegant-fashion/featured-collection-tab/featured-collection-tab3.webp"
              alt="Fashion collection"
              fill
              style={{ objectFit: 'cover' }}
              sizes="315px"
            />
          </div>
        </motion.div>

      </div>

      <style>{`
        .eftab-section {
          background: #0a1e33;
          height: 750px;
          overflow: hidden;
        }

        .eftab-inner {
          display: grid;
          grid-template-columns: 1fr;
          height: 100%;
          align-items: center;
          gap: 32px;
        }

        /* ── Left column ── */
        .eftab-left {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          height: 100%;
        }

        .eftab-img-wrap {
          position: relative;
          width: 250px;
          height: 215px;
          flex-shrink: 0;
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── Center column ── */
        .eftab-center {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .eftab-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: center;
        }

        /* ── Tab button ── */
        .eftab-btn {
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          color: rgba(148, 163, 184, 1);
          transition: color 300ms ease;
        }
        .eftab-btn:hover   { color: #fff; }
        .eftab-btn.is-active { color: #fff; }

        /* ── Two-line clip animation ── */
        .eftab-text-wrap {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .eftab-line {
          display: block;
          font-size: clamp(26px, 4.4vw, 50px);
          font-weight: 500;
          line-height: 1.25;
          white-space: nowrap;
          transition: transform 440ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .eftab-line-2 {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(100%);
        }
        .eftab-btn:hover .eftab-line-1 { transform: translateY(-100%); }
        .eftab-btn:hover .eftab-line-2 { transform: translateY(0%); }

        .eftab-btn.is-active .eftab-text-wrap {
          border-bottom: 2px solid #fff;
        }

        .eftab-count {
          font-size: clamp(11px, 1.1vw, 14px);
          font-weight: 400;
          color: rgba(148, 163, 184, 0.75);
          flex-shrink: 0;
          line-height: 1;
        }
        .eftab-btn.is-active .eftab-count { color: rgba(255, 255, 255, 0.6); }

        /* ── Right column ── */
        .eftab-right {
          display: none;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
        }
        .eftab-img-tall {
          position: relative;
          width: 315px;
          height: 390px;
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── Desktop: equal 3-column grid ── */
        @media (min-width: 992px) {
          .eftab-inner { grid-template-columns: 1fr 1fr 1fr; }
          .eftab-left  { display: flex; }
          .eftab-right { display: flex; }
        }

        @media (max-width: 991px) {
          .eftab-section { height: auto; padding-block: 64px; }
        }
      `}</style>
    </section>
  );
}
