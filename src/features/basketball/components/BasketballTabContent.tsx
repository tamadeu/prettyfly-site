'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconArrowUpRight({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}
function IconChevron({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const tabs = [
  {
    id: 'jackets',
    title: 'The sports jackets',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    image: '/basketball/tab/tab-1.webp',
  },
  {
    id: 'workout',
    title: 'Daily workout',
    description: 'Gear engineered to keep up with every drill and sprint — breathable, supportive and built to move with you from warm-up to cool-down.',
    image: '/basketball/tab/tab-2.webp',
  },
  {
    id: 'accessories',
    title: 'Sports Accessories',
    description: 'Complete your kit with the essentials — grips, bands and accessories designed to help you train harder and play your best game.',
    image: '/basketball/tab/tab-3.webp',
  },
];

export function BasketballTabContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="container-main">
        <div className="bbtab-grid">

          {/* ═══ LEFT: crossfading media ═══ */}
          <div className="bbtab-media">
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                className="bbtab-media-layer"
                style={{
                  opacity: activeTab === i ? 1 : 0,
                  transform: activeTab === i ? 'scale(1)' : 'scale(1.03)',
                  pointerEvents: activeTab === i ? 'auto' : 'none',
                  zIndex: activeTab === i ? 2 : 1,
                }}
              >
                <Image
                  src={tab.image}
                  alt={tab.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* ═══ RIGHT: Tabs + description + CTA ═══ */}
          <div className="bbtab-content">
            <div className="bbtab-list">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className="bbtab-row"
                  onMouseEnter={() => setActiveTab(i)}
                  onClick={() => setActiveTab(i)}
                >
                  <h3 className="bbtab-row-title">{tab.title}</h3>
                  <span
                    className="bbtab-row-arrow"
                    style={{
                      backgroundColor: activeTab === i ? '#111' : '#f0f0f0',
                      color: activeTab === i ? '#fff' : '#222',
                    }}
                  >
                    <IconArrowUpRight size={18} />
                  </span>
                </div>
              ))}
            </div>

            <div className="bbtab-desc-wrap">
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  className="bbtab-desc"
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

            <div>
              <Link href="/shop" className="bbtab-cta">
                Shop Collection
                <IconChevron size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .bbtab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        .bbtab-media {
          position: relative;
          overflow: hidden;
          background-color: #efece8;
          height: clamp(360px, 90vw, 560px);
          border-radius: 4px;
        }
        .bbtab-media-layer {
          position: absolute;
          inset: 0;
          transition: opacity 600ms ease, transform 600ms ease;
        }

        .bbtab-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .bbtab-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 28px;
        }
        .bbtab-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #e5e5e5;
          cursor: pointer;
        }
        .bbtab-row:first-child { border-top: 1px solid #e5e5e5; }
        .bbtab-row-title {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }
        .bbtab-row-arrow {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 280ms ease, color 280ms ease;
        }
        .bbtab-desc-wrap {
          position: relative;
          min-height: 90px;
          margin-bottom: 28px;
        }
        .bbtab-desc {
          top: 0;
          left: 0;
          right: 0;
          font-size: 15px;
          color: #777;
          line-height: 1.7;
          max-width: 620px;
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .bbtab-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease, transform 250ms ease;
        }
        .bbtab-cta:hover { background-color: #333; transform: translateY(-2px); }

        @media (min-width: 992px) {
          .bbtab-grid { grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
          .bbtab-media { height: 560px; }
        }
      `}</style>
    </section>
  );
}
