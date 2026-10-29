'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* "Tab" section — ported from the shared Tab Content Section skill
   (skill/tab-content-section.md): left column crossfades between three
   tab images (750px tall) while the right column's rows act as
   hover-activated tabs (dark filled arrow + full-color title when active,
   ghost arrow + muted title when inactive). Class prefix: jzfs-. */

function IconArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const TABS = [
  {
    id: 'latest-collection',
    title: 'Shop Our Latest Collection',
    description:
      'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    image: '/jewelry-2/tab/tab-1.webp',
  },
  {
    id: 'dazzling-jewelry',
    title: 'Dazzling Jewelry Awaits',
    description:
      'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    image: '/jewelry-2/tab/tab-2.webp',
  },
  {
    id: 'jewelry-dazzles',
    title: 'Jewelry That Dazzles',
    description:
      'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    image: '/jewelry-2/tab/tab-3.webp',
  },
];

export function Jewelry2FeaturedSplit() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="jzfs-section">
      <div className="container-main">
        <div className="jzfs-grid">
          {/* LEFT — crossfading tab media */}
          <div className="jzfs-image-col">
            {TABS.map((tab, i) => (
              <div
                key={tab.id}
                className="jzfs-image-layer"
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
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 991px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* RIGHT — hover-activated tab rows + description + CTA */}
          <div className="jzfs-text-col">
            <div className="jzfs-rows">
              {TABS.map((tab, i) => (
                <div
                  key={tab.id}
                  className="jzfs-row"
                  onMouseEnter={() => setActiveTab(i)}
                >
                  <span className="jzfs-row-label">
                    {tab.title}
                  </span>
                  <span
                    className="jzfs-row-btn"
                    style={{
                      background: activeTab === i ? '#111' : '#f0f0f0',
                      color: activeTab === i ? '#fff' : '#111',
                    }}
                  >
                    <IconArrowUpRight size={16} />
                  </span>
                </div>
              ))}
            </div>

            <div className="jzfs-copy-wrap">
              {TABS.map((tab, i) => (
                <p
                  key={tab.id}
                  className="jzfs-copy"
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

            <Link href="/shop" className="jzfs-cta">
              Shop Collection <IconChevronRight />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .jzfs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        .jzfs-image-col {
          position: relative;
          height: clamp(260px, 60vw, 420px);
          border-radius: 4px;
          overflow: hidden;
          background: #f2f2f2;
        }
        .jzfs-image-layer {
          position: absolute;
          inset: 0;
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .jzfs-text-col { display: flex; flex-direction: column; justify-content: center; }
        .jzfs-rows { border-top: 1px solid #e5e5e5; margin-bottom: 24px; }
        .jzfs-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          border-bottom: 1px solid #e5e5e5;
          cursor: pointer;
        }
        .jzfs-row-label {
          font-family: var(--font-playfair, 'Playfair Display'), serif;
          font-size: clamp(19px, 4.2vw, 28px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: 0;
          color: #171717;
        }
        .jzfs-row-btn {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 300ms ease, color 300ms ease;
        }

        .jzfs-copy-wrap { position: relative; min-height: 60px; margin: 22px 0 26px; }
        .jzfs-copy {
          top: 0; left: 0; right: 0;
          font-size: 16px;
          font-weight: 400;
          color: #555;
          line-height: 1.6;
          letter-spacing: 0;
          max-width: 480px;
          transition: opacity 500ms ease, transform 500ms ease;
        }

        .jzfs-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0;
          padding: 14px 30px;
          text-decoration: none;
          border-radius: 4px;
          width: fit-content;
          transition: background-color 200ms ease;
        }
        .jzfs-cta:hover { background: #333; }

        @media (min-width: 992px) {
          .jzfs-grid { grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
          .jzfs-image-col { height: 750px; }
        }
      `}</style>
    </section>
  );
}
