'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

function IconArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

function IconTarget({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

const tabs = [
  {
    id: 'discover',
    title: 'Discover Your Perfect Watch',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/smart-watches/tab/tab1.webp',
  },
  {
    id: 'story',
    title: 'Your Watch, Your Story',
    description: 'Every timepiece tells a story. Find the watch that speaks to your personality — from minimalist elegance to bold sporty designs.',
    mediaSrc: '/smart-watches/tab/tab2.webp',
  },
  {
    id: 'elevate',
    title: 'Elevate Your Style Today',
    description: 'Upgrade your look with a watch that complements every outfit. Explore our curated collections for every occasion and lifestyle.',
    mediaSrc: '/smart-watches/tab/tab3.webp',
  },
];

export function SWTabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="swtab-section">
      <div className="container-main">
        <div className="swtab-grid">

          {/* LEFT: Tab list + desc + CTA */}
          <div className="swtab-content">
            {/* TRENDING badge */}
            <div className="swtab-badge">
              <IconTarget size={12} />
              <span>TRENDING</span>
            </div>

            {/* Tab rows */}
            <div className="swtab-list">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(i)}
                  className="swtab-row"
                >
                  <h3 className="swtab-title" style={{ color: activeTab === i ? '#111' : '#888' }}>
                    {tab.title}
                  </h3>
                  <span
                    className="swtab-arrow"
                    style={{
                      backgroundColor: activeTab === i ? '#111' : 'transparent',
                      border: activeTab === i ? 'none' : '1.5px solid #e0e0e0',
                      color: activeTab === i ? '#fff' : '#222',
                    }}
                  >
                    <IconArrowUpRight size={18} />
                  </span>
                </div>
              ))}
            </div>

            {/* Description — fades */}
            <div className="swtab-desc-wrap">
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  className="swtab-desc"
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    opacity: activeTab === i ? 1 : 0,
                    transform: activeTab === i ? 'translateY(0)' : 'translateY(8px)',
                    pointerEvents: activeTab === i ? 'auto' : 'none',
                  }}
                >
                  {tab.description}
                </p>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/smart-watches/shop"
              className="swtab-cta"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111'; }}
            >
              SHOP NOW <IconArrowRight size={15} />
            </Link>
          </div>

          {/* RIGHT: Crossfade image */}
          <div className="swtab-media">
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'opacity 600ms ease, transform 600ms ease',
                  opacity: activeTab === i ? 1 : 0,
                  transform: activeTab === i ? 'scale(1)' : 'scale(1.03)',
                  pointerEvents: activeTab === i ? 'auto' : 'none',
                  zIndex: activeTab === i ? 2 : 1,
                }}
              >
                <Image
                  src={tab.mediaSrc}
                  alt={tab.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="50vw"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .swtab-section { width: 100%; }

        /* One rounded card — overflow:hidden clips the image's corners */
        .swtab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          background: rgb(244, 244, 244);
          border-radius: 12px;
          overflow: hidden;
        }

        /* ── Content: carries its own padding ── */
        .swtab-content {
          display: flex;
          flex-direction: column;
          padding: clamp(28px, 4vw, 48px);
          order: 2;
        }
        .swtab-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #555;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 40px;
          padding: 5px 12px;
          margin-bottom: 24px;
          align-self: flex-start;
        }
        .swtab-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }
        .swtab-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #ddd;
          cursor: pointer;
        }
        .swtab-title {
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 700;
          transition: color 250ms ease;
        }

        /* Square arrow — matches first screenshot */
        .swtab-arrow {
          width: 40px; height: 40px;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background-color 300ms ease, border 300ms ease, color 300ms ease;
        }
        .swtab-desc-wrap {
          position: relative;
          min-height: 72px;
          margin-bottom: 28px;
        }
        .swtab-desc {
          top: 0; left: 0; right: 0;
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .swtab-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.5px;
          align-self: flex-start;
          transition: background 200ms ease;
        }

        /* ── Media: flush inside the rounded card ── */
        .swtab-media {
          position: relative;
          height: clamp(280px, 70vw, 480px);
          overflow: hidden;
          background: #e8e8e8;
          order: 1;
        }

        /* ── Desktop: side-by-side, image flush to card edges ── */
        @media (min-width: 992px) {
          .swtab-grid {
            grid-template-columns: 1fr 1fr;
            align-items: stretch;
          }
          .swtab-content {
            order: 1;
            justify-content: center;
            /* height set here drives the row; media stretches to match */
            min-height: 620px;
          }
          .swtab-media {
            order: 2;
            /* Stretch to grid row height — position:absolute children fill it */
            height: auto;
            min-height: 620px;
          }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .swtab-media { height: 480px; }
        }
      `}</style>
    </section>
  );
}
