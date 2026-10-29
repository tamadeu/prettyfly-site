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
    id: 'protection',
    title: 'Military-Grade Drop Protection',
    description: 'Engineered with reinforced corners and shock-absorbing materials, our cases withstand drops from up to 6 feet. Your phone stays pristine no matter where life takes you.',
    mediaSrc: '/phone-case/tab/tab1.webp',
  },
  {
    id: 'style',
    title: 'Slim Yet Protective Design',
    description: 'Ultra-thin profiles that never compromise on protection. Slide effortlessly into pockets while maintaining full access to every port, button, and camera.',
    mediaSrc: '/phone-case/tab/tab2.webp',
  },
  {
    id: 'lifestyle',
    title: 'Made for Your Lifestyle',
    description: 'From minimalist clear cases to bold artistic prints, every design is crafted to express your personality while keeping your device safe around the clock.',
    mediaSrc: '/phone-case/tab/tab3.webp',
  },
];

export function PCTabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pctab-section">
      <div className="container-main">
        <div className="pctab-grid">

          {/* LEFT — content area */}
          <div className="pctab-content">

            {/* Eyebrow */}
            <div className="pctab-eyebrow">
              <IconRadioDot size={13} />
              TRENDING
            </div>

            {/* Tab list */}
            <div className="pctab-tabs-list">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(i)}
                  className="pctab-row"
                >
                  <h3 className="pctab-row-title">{tab.title}</h3>
                  <span className={`pctab-arrow-btn${activeTab === i ? ' is-active' : ''}`}>
                    <IconArrowUpRight size={16} />
                  </span>
                </div>
              ))}
            </div>

            {/* Description — crossfades with active tab */}
            <div className="pctab-desc-wrap">
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  className="pctab-desc"
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
            <Link href="/phone-case/shop" className="pctab-cta">
              SHOP NOW <IconArrowRight size={13} />
            </Link>

          </div>

          {/* RIGHT — image area */}
          <div className="pctab-media">
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
        .pctab-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        /* ── Left: content ── */
        .pctab-content {
          background: rgb(244, 244, 244);
          display: flex;
          flex-direction: column;
          padding: 40px 28px;
        }

        /* Eyebrow */
        .pctab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background: #111;
          padding: 5px 14px;
          border-radius: 100px;
          align-self: flex-start;
          margin-bottom: 28px;
        }

        /* Tab rows */
        .pctab-tabs-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 28px;
        }
        .pctab-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #d8dde3;
          cursor: pointer;
          gap: 16px;
        }
        .pctab-row:first-child {
          border-top: 1px solid #d8dde3;
        }
        .pctab-row-title {
          font-size: clamp(17px, 2.3vw, 24px);
          font-weight: 600;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        /* Arrow button */
        .pctab-arrow-btn {
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
        .pctab-arrow-btn.is-active {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        /* Description */
        .pctab-desc-wrap {
          position: relative;
          min-height: 72px;
          margin-bottom: 28px;
        }
        .pctab-desc {
          font-size: 13px;
          color: #777;
          line-height: 1.75;
          margin: 0;
        }

        /* CTA */
        .pctab-cta {
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
        .pctab-cta:hover { background: #444; }

        /* ── Right: media ── */
        .pctab-media {
          position: relative;
          height: clamp(280px, 60vw, 570px);
          overflow: hidden;
          background: #e8e8e8;
        }

        /* ── Desktop: 50/50 side by side ── */
        @media (min-width: 750px) {
          .pctab-grid {
            grid-template-columns: 1fr 1fr;
            min-height: 570px;
          }
          .pctab-content {
            padding: 48px 44px;
            justify-content: center;
          }
          .pctab-eyebrow { margin-top: -20px; }
          .pctab-media { height: auto; min-height: 570px; }
        }
        @media (min-width: 992px) {
          .pctab-grid { min-height: 570px; }
          .pctab-content { padding: 56px 52px; }
          .pctab-media { min-height: 570px; }
          .pctab-row-title { font-size: 24px; }
        }
      `}</style>
    </section>
  );
}
