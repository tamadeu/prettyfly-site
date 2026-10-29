'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Icons ── */

function IconArrowUpRight({ size = 18 }: { size?: number }) {
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

function IconPlay({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z" />
    </svg>
  );
}

/* Generic fashion clip (same source as the Active Wear / Footwear video sections). */
const VIDEO_EMBED = 'https://www.youtube.com/embed/_9VUPq3SxOc?autoplay=1&rel=0';

const tabs = [
  {
    id: 'bomber',
    title: 'The Bomber Jackets',
    description: 'A bomber jacket is a short, waist-length jacket with a fitted or elastic waistband and cuffs. Typically featuring a front zipper, the jacket is often made from leather, nylon, or polyester.',
    image: '/fashion-03/tab/tab-1.webp',
  },
  {
    id: 'sweaters',
    title: 'Sweaters & Cardigans',
    description: 'Sweaters and cardigans are cozy knitted essentials. Cardigans open at the front while sweaters pull over the head — both layer effortlessly across the seasons.',
    image: '/fashion-03/tab/tab-2.webp',
  },
  {
    id: 'corduroy',
    title: 'Corduroy Shirts',
    description: 'Corduroy shirts are versatile and stylish garments made from corduroy fabric, which is characterized by its distinct ridged, velvet-like texture.',
    image: '/fashion-03/tab/tab-3.webp',
  },
];

/* Only the second tab ("Sweaters & Cardigans") carries the play button / video. */
const VIDEO_TAB = 1;

export function Fashion03TabContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Switching to any other tab hides the play button and stops the video.
  const selectTab = (i: number) => {
    setActiveTab(i);
    if (i !== VIDEO_TAB) setPlaying(false);
  };

  return (
    <section>
      <div className="container-main">
        <div className="f3-tab-grid">

          {/* ═══ LEFT: Media — play button / inline video only on the second tab ═══ */}
          <div className="f3-tab-media">
            {playing && activeTab === VIDEO_TAB ? (
              <iframe
                className="f3-tab-iframe"
                src={VIDEO_EMBED}
                title="Fashion feature video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                {tabs.map((tab, i) => (
                  <div
                    key={tab.id}
                    className="f3-tab-media-layer"
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

                {activeTab === VIDEO_TAB && (
                  <button
                    type="button"
                    className="f3-tab-play"
                    aria-label="Play video"
                    onClick={() => setPlaying(true)}
                  >
                    <IconPlay size={26} />
                  </button>
                )}
              </>
            )}
          </div>

          {/* ═══ RIGHT: Tabs + description + CTA ═══ */}
          <div className="f3-tab-content">
            <div className="f3-tab-list">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className="f3-tab-row"
                  onMouseEnter={() => selectTab(i)}
                  onClick={() => selectTab(i)}
                >
                  <h3 className="f3-tab-row-title">{tab.title}</h3>
                  <span
                    className="f3-tab-row-arrow"
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

            <div className="f3-tab-desc-wrap">
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  className="f3-tab-desc"
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
              <Link href="/shop" className="f3-tab-cta">
                Shop Collection
                <IconChevron size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .f3-tab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }

        /* Media — sharp corners (no border-radius). */
        .f3-tab-media {
          position: relative;
          overflow: hidden;
          background-color: #f1f1f1;
          height: clamp(320px, 80vw, 520px);
        }
        .f3-tab-media-layer {
          position: absolute;
          inset: 0;
          transition: opacity 600ms ease, transform 600ms ease;
        }

        .f3-tab-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .f3-tab-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 28px;
        }
        .f3-tab-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #e5e5e5;
          cursor: pointer;
        }
        .f3-tab-row-title {
          font-size: clamp(20px, 2.3vw, 26px);
          font-weight: 600;
          color: #111;
          line-height: 1.2;
        }
        .f3-tab-row-arrow {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 280ms ease, color 280ms ease;
        }
        .f3-tab-desc-wrap {
          position: relative;
          min-height: 84px;
          margin-bottom: 30px;
        }
        .f3-tab-desc {
          top: 0;
          left: 0;
          right: 0;
          font-size: 15px;
          color: #9a8c7b;
          line-height: 1.7;
          max-width: 480px;
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .f3-tab-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #000;
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease;
        }
        .f3-tab-cta:hover { background-color: #fc5732; }

        /* ── Play button + inline video ── */
        .f3-tab-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          z-index: 3;
        }
        .f3-tab-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: none;
          background-color: rgba(255,255,255,0.92);
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 250ms ease, background-color 250ms ease;
        }
        .f3-tab-play::before,
        .f3-tab-play::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.55);
          animation: f3TabPulse 2400ms ease-out infinite;
        }
        .f3-tab-play::after { animation-delay: 1200ms; }
        .f3-tab-play:hover {
          transform: translate(-50%, -50%) scale(1.08);
          background-color: #fff;
        }
        @keyframes f3TabPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        @media (min-width: 750px) {
          .f3-tab-media { height: 600px; }
        }

        @media (min-width: 992px) {
          .f3-tab-grid { grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
          .f3-tab-media { height: 770px; }
          .f3-tab-content { height: 770px; }
        }
      `}</style>
    </section>
  );
}
