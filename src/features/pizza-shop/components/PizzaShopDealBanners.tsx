'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const YOUTUBE_ID = '_9VUPq3SxOc';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconPlay({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconClose({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
    </svg>
  );
}

const thumbs = [
  { src: '/pizza/products/products1.webp', alt: 'BBQ Pizza'     },
  { src: '/pizza/products/products6.webp', alt: 'Chicken Pizza' },
  { src: '/pizza/products/products7.webp', alt: 'Veggie Pizza'  },
];

export function PizzaShopDealBanners() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="ps-db">
      <div className="container-main">
        <div
          className="ps-db-card"
          style={{
            backgroundColor: 'rgb(20,20,20)',
            borderRadius: 16,
            overflow: 'hidden',
            height: 220,
            display: 'flex',
            alignItems: 'center',
            paddingInline: 'clamp(20px, 2vw, 40px)',
          }}
        >
          <div className="ps-db-row">

            {/* ── LEFT: image preview + Fresh Arrivals text ── */}
            <div className="ps-db-left">
              <div
                className="ps-db-video"
                style={{
                  position: 'relative',
                  width: 300,
                  height: 160,
                  borderRadius: 12,
                  overflow: 'hidden',
                  flexShrink: 0,
                  cursor: videoOpen ? 'default' : 'pointer',
                }}
                onClick={() => { if (!videoOpen) setVideoOpen(true); }}
              >
                {videoOpen ? (
                  <>
                    <iframe
                      src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                      title="Pizza video"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                    />
                    <button
                      type="button"
                      aria-label="Close video"
                      onClick={(e) => { e.stopPropagation(); setVideoOpen(false); }}
                      style={{
                        position: 'absolute',
                        top: 6,
                        right: 6,
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.65)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                      }}
                    >
                      <IconClose size={14} />
                    </button>
                  </>
                ) : (
                  <>
                    <Image
                      src="/pizza/banner/banner2.webp"
                      alt="Fresh pizza arrivals"
                      fill
                      sizes="300px"
                      style={{ objectFit: 'cover' }}
                    />
                    <span
                      aria-hidden
                      className="ps-db-play"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.18)',
                        border: '2px solid rgba(255, 255, 255, 0.85)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        paddingLeft: 4,
                        backdropFilter: 'blur(2px)',
                        transition: 'background 220ms ease, transform 220ms ease',
                      }}
                    >
                      <IconPlay size={26} />
                    </span>
                  </>
                )}
              </div>

              <div className="ps-db-text">
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#fff',
                    margin: '0 0 10px',
                    letterSpacing: '-0.2px',
                  }}
                >
                  Fresh Arrivals
                </h3>
                <p
                  className="ps-db-desc"
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.85)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Discover our freshly baked new arrivals — stone-baked daily with premium ingredients.
                </p>
              </div>
            </div>

            {/* ── RIGHT: 3 product thumbs + Weekend Deal text ── */}
            <div className="ps-db-right">
              <div className="ps-db-thumbs">
                {thumbs.map((t) => (
                  <span key={t.src} className="ps-db-thumb">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="80px"
                      style={{ objectFit: 'contain' }}
                    />
                  </span>
                ))}
              </div>
              <div className="ps-db-text">
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#fff',
                    margin: '0 0 8px',
                  }}
                >
                  Weekend Pizza Deal
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.85)',
                    margin: '0 0 8px',
                  }}
                >
                  Save an Extra 15%!
                </p>
                <Link
                  href="/pizza/shop"
                  className="ps-db-cta"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#fff',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                    transition: 'color 200ms ease',
                  }}
                >
                  <span>Order Now</span>
                  <IconArrowRight />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .ps-db-row {
          display: flex;
          align-items: center;
          gap: clamp(20px, 2.4vw, 40px);
          width: 100%;
        }

        .ps-db-left {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: clamp(20px, 2vw, 32px);
        }

        .ps-db-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: clamp(16px, 1.6vw, 28px);
          justify-content: flex-end;
        }

        .ps-db-thumbs {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .ps-db-thumb {
          position: relative;
          width: 80px;
          height: 80px;
          background: rgb(30,30,30);
          border: 1px solid #2a2a2a;
          border-radius: 6px;
          overflow: hidden;
          padding: 8px;
          box-sizing: border-box;
          display: block;
        }

        .ps-db-text { min-width: 0; }
        .ps-db-cta:hover { color: #e84d1c; }

        .ps-db-desc {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ps-db-video:hover .ps-db-play {
          background: rgba(255, 255, 255, 0.32) !important;
          transform: translate(-50%, -50%) scale(1.06) !important;
        }

        /* < 992px — card grows to fit, halves stack */
        @media (max-width: 991px) {
          .ps-db-card {
            height: auto !important;
            padding: 28px clamp(16px, 3vw, 32px) !important;
          }
          .ps-db-row {
            flex-direction: column;
            align-items: stretch;
            gap: 28px;
          }
          .ps-db-right { justify-content: flex-start; }
        }

        /* < 750px — centered stack */
        @media (max-width: 749px) {
          .ps-db-row {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            text-align: center;
          }
          .ps-db-left,
          .ps-db-right {
            flex-direction: column;
            align-items: center;
            gap: 14px;
            width: 100%;
          }
          .ps-db-thumbs { justify-content: center; }
          .ps-db-text   { text-align: center; }
          .ps-db-video  {
            width: 100% !important;
            max-width: 100% !important;
            height: clamp(160px, 45vw, 220px);
          }
        }
      `}</style>
    </section>
  );
}
