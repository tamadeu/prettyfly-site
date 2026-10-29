'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconRadioDot({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

function IconArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

function IconArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3647L8.22192 16.9505L13.1717 12.0007Z" />
    </svg>
  );
}

const tabs = [
  {
    id: 'perfect',
    title: 'Perfect Furniture Solutions',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/furniture/tab/tab1.webp',
  },
  {
    id: 'interior',
    title: 'Interior Furniture for Every Home',
    description: 'From cozy studios to sprawling villas, our versatile furniture range adapts seamlessly to any interior style, scale, and budget.',
    mediaSrc: '/furniture/tab/tab2.webp',
  },
  {
    id: 'modern',
    title: 'Modern Living Essentials',
    description: 'Contemporary designs meet timeless craftsmanship — our modern essentials collection is built to last while looking effortlessly on-trend.',
    mediaSrc: '/furniture/tab/tab3.webp',
  },
];

export function FurnitureTabContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="futab-section">
      <div className="container-main futab-container">
        <div className="futab-grid">

          {/* LEFT — content area */}
          <div className="futab-content">

            {/* Eyebrow */}
            <div className="futab-eyebrow">
              <IconRadioDot size={13} />
              POPULAR
            </div>

            {/* Tab list */}
            <div className="futab-tabs-list">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(i)}
                  className="futab-row"
                >
                  <h3 className="futab-row-title">{tab.title}</h3>
                  <span className={`futab-arrow-btn${activeTab === i ? ' is-active' : ''}`}>
                    <IconArrowUpRight size={16} />
                  </span>
                </div>
              ))}
            </div>

            {/* Description — crossfades with active tab */}
            <div className="futab-desc-wrap">
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  className="futab-desc"
                  style={{
                    opacity: activeTab === i ? 1 : 0,
                    transform: activeTab === i ? 'translateY(0)' : 'translateY(6px)',
                    position: i === 0 ? 'relative' : 'absolute',
                    top: i === 0 ? 'auto' : 0,
                    transition: 'opacity 450ms ease, transform 450ms ease',
                  }}
                >
                  {tab.description}
                </p>
              ))}
            </div>

            {/* CTA */}
            <Link href="/shop" className="futab-cta">
              SHOP NOW <IconArrowRight size={13} />
            </Link>

          </div>

          {/* RIGHT — image area */}
          <div className="futab-media">
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: activeTab === i ? 1 : 0,
                  transform: activeTab === i ? 'scale(1)' : 'scale(1.03)',
                  transition: 'opacity 600ms ease, transform 600ms ease',
                  pointerEvents: activeTab === i ? 'auto' : 'none',
                }}
              >
                <Image
                  src={tab.mediaSrc}
                  alt={tab.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(min-width: 750px) 50vw, 100vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        /* ── Section wrapper ── */
        .futab-container {
          padding-inline: 0;
        }
        .futab-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        /* ── Left: content ── */
        .futab-content {
          background: rgb(244, 249, 252);
          display: flex;
          flex-direction: column;
          padding: 40px 28px;
        }

        /* Eyebrow */
        .futab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background: #c8a45a;
          padding: 5px 14px;
          border-radius: 100px;
          align-self: flex-start;
          margin-bottom: 28px;
        }

        /* Tab rows */
        .futab-tabs-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 28px;
        }
        .futab-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #d8dde3;
          cursor: pointer;
          gap: 16px;
        }
        .futab-row:first-child {
          border-top: 1px solid #d8dde3;
        }
        .futab-row-title {
          font-size: clamp(17px, 2.3vw, 24px);
          font-weight: 600;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        /* Arrow button */
        .futab-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid #c8c8c8;
          color: #aaa;
          background: transparent;
          transition: background 280ms ease, color 280ms ease, border-color 280ms ease;
        }
        .futab-arrow-btn.is-active {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        /* Description */
        .futab-desc-wrap {
          position: relative;
          min-height: 72px;
          margin-bottom: 28px;
        }
        .futab-desc {
          font-size: 13px;
          color: #777;
          line-height: 1.75;
          margin: 0;
        }

        /* CTA */
        .futab-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 22px;
          border-radius: 2px;
          text-decoration: none;
          align-self: flex-start;
          transition: background 240ms ease;
        }
        .futab-cta:hover { background: #c8a45a; }

        /* ── Right: media ── */
        .futab-media {
          position: relative;
          height: clamp(280px, 60vw, 460px);
          overflow: hidden;
          background: #e8e0d5;
        }

        /* ── Desktop: 50/50 side by side ── */
        @media (min-width: 750px) {
          .futab-grid {
            grid-template-columns: 1fr 1fr;
            min-height: 560px;
          }
          .futab-content {
            padding: 48px 44px;
            justify-content: center;
          }
          .futab-eyebrow { margin-top: -20px; }
          .futab-media { height: auto; min-height: 560px; }
        }
        @media (min-width: 992px) {
          .futab-grid { min-height: 560px; }
          .futab-content { padding: 56px 52px; }
          .futab-media { min-height: 560px; }
          .futab-row-title { font-size: 24px; }
        }
      `}</style>
    </section>
  );
}
