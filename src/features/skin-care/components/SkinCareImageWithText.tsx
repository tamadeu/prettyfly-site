'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tabs = [
  {
    id: 'body-hand',
    label: 'Body & Hand Care',
    image: '/skin-care/tab/tab1.webp',
    heading: 'Nourish Every Inch',
    body: 'Indulge your skin with deeply hydrating formulas that soften, smooth and protect from head to toe. Our body and hand care range uses botanical extracts and essential oils for lasting moisture.',
  },
  {
    id: 'cleansers',
    label: 'Cleansers & Toner',
    image: '/skin-care/tab/tab2.webp',
    heading: 'Purify & Refresh',
    body: 'Gentle yet effective cleansers that remove impurities without stripping your skin. Paired with balancing toners that prep your complexion for the next steps in your routine.',
  },
  {
    id: 'serums',
    label: 'Serums & Essences',
    image: '/skin-care/tab/tab3.webp',
    heading: 'Target & Transform',
    body: 'High-potency serums and essences delivering concentrated actives deep into the skin. From vitamin C brightening to hyaluronic acid hydration — choose your skin goal.',
  },
];

export function SkinCareImageWithText() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="skiwt-section">
      <div className="container-main skiwt-inner">
        {/* Left: dynamic image — all tabs in DOM, opacity cross-fade */}
        <div className="skiwt-img-wrap">
          <div className="skiwt-img-container">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: activeTab === tab.id ? 1 : 0,
                  transition: 'opacity 500ms ease',
                }}
              >
                <Image
                  src={tab.image}
                  alt={tab.heading}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: tabs + content */}
        <div className="skiwt-content">
          <p className="skiwt-eyebrow">Our Range</p>
          <h2 className="skiwt-title">Explore Our Collections</h2>

          {/* Tab buttons */}
          <div className="skiwt-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`skiwt-tab-btn${activeTab === tab.id ? ' is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Accordion content (single visible pane) */}
          <div key={activeTab} className="skiwt-pane">
            <h3 className="skiwt-pane-heading">{current.heading}</h3>
            <p className="skiwt-pane-body">{current.body}</p>
          </div>

          <Link href="/shop" className="skiwt-cta">
            Shop Collection &rsaquo;
          </Link>
        </div>
      </div>

      <style>{`
        .skiwt-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }
        @media (min-width: 750px) {
          .skiwt-inner {
            grid-template-columns: 1fr 1fr;
            gap: 56px;
          }
        }
        @media (min-width: 992px) {
          .skiwt-inner { gap: 72px; }
        }

        .skiwt-img-wrap { width: 100%; }
        .skiwt-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 4px;
        }
        .skiwt-img-container img {
          transition: transform 600ms ease;
        }
        .skiwt-img-container:hover img { transform: scale(1.03); }

        .skiwt-content {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .skiwt-eyebrow {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8919a;
          margin: 0 0 10px;
        }
        .skiwt-title {
          font-size: clamp(20px, 2.5vw, 34px);
          font-weight: 700;
          color: #111;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
        }

        .skiwt-tabs {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid #e5e5e5;
          margin-bottom: 24px;
        }
        .skiwt-tab-btn {
          text-align: left;
          background: none;
          border: none;
          border-bottom: 1px solid #e5e5e5;
          padding: 14px 0;
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 500;
          color: #888;
          cursor: pointer;
          font-family: inherit;
          transition: color 200ms ease;
          position: relative;
        }
        .skiwt-tab-btn::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          height: 2px;
          width: 0;
          background: #111;
          transition: width 300ms ease;
        }
        .skiwt-tab-btn.is-active {
          color: #111;
          font-weight: 700;
        }
        .skiwt-tab-btn.is-active::after { width: 40px; }

        @keyframes skiwt-fade-up {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skiwt-pane {
          margin-bottom: 28px;
          animation: skiwt-fade-up 320ms ease both;
        }
        .skiwt-pane-heading {
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700;
          color: #111;
          margin: 0 0 10px;
        }
        .skiwt-pane-body {
          font-size: clamp(13px, 1.2vw, 15px);
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .skiwt-cta {
          display: inline-flex;
          align-items: center;
          background: #111;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 13px 32px;
          border-radius: 2px;
          text-decoration: none;
          width: fit-content;
          transition: background-color 260ms ease;
        }
        .skiwt-cta:hover { background-color: #b8919a; }
      `}</style>
    </section>
  );
}
