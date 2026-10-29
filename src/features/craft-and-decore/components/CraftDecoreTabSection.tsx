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

function IconPlay({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
    </svg>
  );
}

const tabs = [
  {
    id: 'potters-hand-making',
    title: "Potter's Hand Making",
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/craft-and-decore/tab/tab-1.webp',
  },
  {
    id: 'video-heading',
    title: 'Video Heading',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/craft-and-decore/tab/tab-2.webp',
  },
  {
    id: 'craft-decor',
    title: 'Craft & Decor',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/craft-and-decore/tab/tab-3.webp',
  },
];

export function CraftDecoreTabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="container-main">
        <div className="cdts-grid">

          {/* LEFT: Media */}
          <div className="cdts-media" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
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
            {/* Only the middle tab ("Video Heading") is a video — the play
                button is a functional affordance for that tab specifically,
                not decorative chrome for every tab's static image. */}
            {activeTab === 1 && (
              <button type="button" className="cdts-play-btn" aria-label="Play video">
                <IconPlay size={22} />
              </button>
            )}
          </div>

          {/* RIGHT: Content */}
          <div className="cdts-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginBottom: '32px' }}>
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 0',
                    borderBottom: '1px solid #e5e5e5',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(18px, 4vw, 28px)',
                      fontWeight: 600,
                      color: activeTab === i ? '#171712' : '#888',
                      transition: 'color 250ms ease',
                    }}
                  >
                    {tab.title}
                  </h3>

                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: activeTab === i ? 'none' : '1.5px solid #e0e0e0',
                      backgroundColor: activeTab === i ? '#171712' : 'transparent',
                      color: activeTab === i ? '#fff' : '#222',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 300ms ease',
                      flexShrink: 0,
                    }}
                  >
                    <IconArrowUpRight size={18} />
                  </span>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', minHeight: '80px', marginBottom: '32px' }}>
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    fontSize: '15px',
                    color: '#777',
                    lineHeight: 1.7,
                    transition: 'opacity 500ms ease, transform 500ms ease',
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
              <Link
                href="/shop"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#171712',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '14px 28px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'background-color 250ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#a9673f'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#171712'; }}
              >
                Shop Now
                <IconArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .cdts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .cdts-media {
          height: clamp(300px, 80vw, 500px);
        }
        .cdts-content {
          padding: 32px 0 0;
        }
        .cdts-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.9);
          color: #171712;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 3;
          transition: transform 250ms ease, background-color 250ms ease;
        }
        .cdts-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08);
          background-color: #fff;
        }

        @media (min-width: 750px) {
          .cdts-media { height: 600px; }
          .cdts-content { padding: 24px 0 0 40px; }
        }

        @media (min-width: 992px) {
          .cdts-grid { grid-template-columns: 1fr 1fr; }
          .cdts-media { height: 750px; }
          .cdts-content { height: 750px; padding: 0 40px 0 60px; }
        }
      `}</style>
    </section>
  );
}
