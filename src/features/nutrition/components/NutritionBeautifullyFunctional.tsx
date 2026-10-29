'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconTarget({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-3a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

function IconArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.40889 18.0091L5.99468 16.5949L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

function IconPlay({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5839C19.6057 11.737 19.6678 12.0475 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z" />
    </svg>
  );
}

type Tab = {
  id: string;
  title: string;
  description: string;
  kind: 'image' | 'video';
  media: string;
  videoSrc?: string;
};

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/RgKAFK5djSk';

const tabs: Tab[] = [
  {
    id: 'protein',
    title: 'Protein Supplements',
    description:
      'Clean-label whey, plant, and casein blends built to support recovery and lean-mass goals without fillers.',
    kind: 'image',
    media: '/nutrition/video-with-tab/video-with-tab1.webp',
  },
  {
    id: 'pre-workout',
    title: 'Pre-workout stimulant',
    description:
      'Third-party tested pre-workouts formulated for measured energy, focus, and pump — no crash afterwards.',
    kind: 'video',
    media: '/nutrition/video-with-tab/video-with-tab2.webp',
    videoSrc: `${VIDEO_EMBED_URL}?autoplay=1&rel=0`,
  },
  {
    id: 'mass',
    title: 'Mass Supplements',
    description:
      'High-calorie mass gainers with quality protein and complex carbs to fuel strength and size.',
    kind: 'image',
    media: '/nutrition/video-with-tab/video-with-tab3.webp',
  },
];

export function NutritionBeautifullyFunctional() {
  const [activeId, setActiveId] = useState<string>('pre-workout');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[1];

  const setActive = (id: string) => {
    if (id !== activeId) {
      setIsPlaying(false); // Switching tabs stops any playing video
      setActiveId(id);
    }
  };

  return (
    <section className="nbf-section">
      <div className="container-main">
        <h2 className="nbf-heading">Beautifully Functional</h2>

        <div className="nbf-grid">
          {/* Left — tabs + per-tab description */}
          <div className="nbf-left">
            <span className="nbf-badge">
              <IconTarget size={13} />
              Badge
            </span>

            <ul className="nbf-tabs" role="tablist">
              {tabs.map((t) => (
                <li
                  key={t.id}
                  className="nbf-tab"
                  role="presentation"
                  onMouseEnter={() => setActive(t.id)}
                  onFocusCapture={() => setActive(t.id)}
                >
                  <button
                    type="button"
                    className={`nbf-tab-btn ${activeId === t.id ? 'is-active' : ''}`}
                    role="tab"
                    aria-selected={activeId === t.id}
                    aria-controls="nbf-media-panel"
                  >
                    <span className="nbf-tab-title">{t.title}</span>
                    <span className="nbf-tab-arrow" aria-hidden="true">
                      <IconArrowUpRight size={16} />
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <p className="nbf-copy" key={active.id}>{active.description}</p>

            <Link href="/nutrition/shop" className="nbf-cta">Shop Now</Link>
          </div>

          {/* Right — image or video based on active tab */}
          <div className="nbf-right" id="nbf-media-panel" role="tabpanel">
            {tabs.map((t) => {
              const showThisTab = activeId === t.id;
              const showVideoFrame = t.kind === 'video' && showThisTab && isPlaying && t.videoSrc;

              return (
                <div
                  key={t.id}
                  className={`nbf-media ${showThisTab ? 'is-active' : ''}`}
                  aria-hidden={!showThisTab}
                >
                  {t.kind === 'image' ? (
                    <Image
                      src={t.media}
                      alt={t.title}
                      fill
                      sizes="(min-width: 992px) 50vw, 100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <>
                      {/* Thumbnail layer (visible until play is clicked) */}
                      <Image
                        src={t.media}
                        alt={t.title}
                        fill
                        sizes="(min-width: 992px) 50vw, 100vw"
                        style={{
                          objectFit: 'cover',
                          opacity: showVideoFrame ? 0 : 1,
                          transition: 'opacity 350ms ease',
                        }}
                      />
                      {showVideoFrame && (
                        <iframe
                          className="nbf-video-frame"
                          src={t.videoSrc}
                          title={t.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                      {!showVideoFrame && (
                        <button
                          className="nbf-play"
                          type="button"
                          aria-label={`Play ${t.title} video`}
                          onClick={() => setIsPlaying(true)}
                        >
                          <IconPlay size={22} />
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .nbf-section { padding: 0; }
        .nbf-heading {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          color: #0e1a0a;
          letter-spacing: -0.3px;
          margin-bottom: 36px;
        }

        .nbf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        .nbf-left {
          background: #f2f3f2;
          border-radius: 24px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 992px) {
          .nbf-left {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
        .nbf-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          background: #e6e7e6;
          color: #0e1a0a;
          padding: 6px 14px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .nbf-tabs {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
        }
        .nbf-tab-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 4px;
          border: none;
          background: transparent;
          border-top: 1px solid #d9dbd9;
          cursor: pointer;
          text-align: left;
          transition: padding-left 320ms cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 320ms ease;
        }
        .nbf-tab:last-child .nbf-tab-btn {
          border-bottom: 1px solid #d9dbd9;
        }
        .nbf-tab-btn.is-active {
          padding-left: 8px;
        }
        .nbf-tab-title {
          font-size: 22px;
          font-weight: 700;
          color: #0e1a0a;
          letter-spacing: -0.2px;
          transition: color 280ms ease;
        }
        .nbf-tab-btn.is-active .nbf-tab-title {
          color: #0e1a0a;
        }
        .nbf-tab-arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #dcdedc;
          color: #0e1a0a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 320ms ease,
                      color 320ms ease,
                      transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0;
        }
        .nbf-tab-btn.is-active .nbf-tab-arrow {
          background: rgb(140, 255, 100);
          color: #0e1a0a;
          transform: translate(3px, -3px);
        }

        @keyframes nbfCopyIn {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .nbf-copy {
          font-size: 13px;
          color: #5a6a63;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 460px;
          animation: nbfCopyIn 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .nbf-cta {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgb(140, 255, 100);
          color: #0e1a0a;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 13px 34px;
          border-radius: 40px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(140, 255, 100, 0.3);
        }
        .nbf-cta:hover {
          background: #fff;
          color: #000;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .nbf-right {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          min-height: 420px;
          background: #dedede;
        }
        @media (min-width: 992px) {
          .nbf-right {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
        .nbf-media {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.02);
          pointer-events: none;
          transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1),
                      transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nbf-media.is-active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        .nbf-video-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          z-index: 2;
        }
        .nbf-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.88);
          color: rgb(140, 255, 100);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.15);
          transition: transform 300ms ease, background-color 300ms ease;
          pointer-events: auto;
          z-index: 3;
        }
        .nbf-play:hover {
          transform: translate(-50%, -50%) scale(1.08);
          background: #fff;
        }

        @media (min-width: 750px) {
          .nbf-heading { font-size: 30px; }
          .nbf-left { padding: 48px 44px; }
          .nbf-tab-title { font-size: 25px; }
        }

        @media (min-width: 992px) {
          .nbf-heading { font-size: 32px; margin-bottom: 40px; }
          .nbf-grid {
            grid-template-columns: 1fr 1fr;
            height: 700px;
            gap: 0;
          }
          .nbf-left {
            height: 100%;
            padding: 56px;
            justify-content: center;
          }
          .nbf-right {
            height: 100%;
            min-height: 0;
          }
          .nbf-tab-title { font-size: 28px; }
          .nbf-tab-arrow { width: 46px; height: 46px; }
          .nbf-copy { font-size: 14px; }
          .nbf-play { width: 80px; height: 80px; }
        }
      `}</style>
    </section>
  );
}
