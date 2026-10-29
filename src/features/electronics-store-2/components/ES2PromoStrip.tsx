'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconPlay({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const VIDEO_SRC = '/megastore/video/video.mp4';

const thumbs = [
  { src: '/electronics store/products/product-1.webp', alt: 'Laptop'    },
  { src: '/electronics store/products/product-6.webp', alt: 'Earphones' },
  { src: '/electronics store/products/product-9.webp', alt: 'Headphones' },
];

export function ES2PromoStrip() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play().catch(() => {});
    }
  }, [isPlaying]);

  return (
    <section className="es2ps-section">
      <div className="container-main">
        <div
          className="es2ps-card"
          style={{
            backgroundColor: '#232f3f',
            borderRadius: 16,
            overflow: 'hidden',
            height: 220,
            display: 'flex',
            alignItems: 'center',
            paddingInline: 'clamp(20px, 2vw, 40px)',
          }}
        >
          <div className="es2ps-row">

            {/* ── LEFT: 3 product thumbs + Weekend Deal text ── */}
            <div className="es2ps-left">
              <div className="es2ps-thumbs">
                {thumbs.map((t) => (
                  <span key={t.src} className="es2ps-thumb">
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
              <div className="es2ps-text">
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 8px' }}>
                  Special Weekend Deal
                </h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', margin: '0 0 8px' }}>
                  Save an Extra 20%!
                </p>
                <Link
                  href="/shop"
                  className="es2ps-cta"
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
                  <span>Shop Now</span>
                  <IconArrowRight />
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Video area + content text ── */}
            <div className="es2ps-right">
              <div
                className="es2ps-video"
                style={{
                  position: 'relative',
                  width: 300,
                  height: 160,
                  borderRadius: 12,
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundColor: '#000',
                }}
              >
                {!isPlaying ? (
                  <>
                    <Image
                      src="/electronics store/hero-slider/hero-slider-2.webp"
                      alt="New arrivals video preview"
                      fill
                      sizes="300px"
                      style={{ objectFit: 'cover' }}
                    />
                    <button
                      className="es2ps-play"
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play video"
                    >
                      <IconPlay size={26} />
                    </button>
                  </>
                ) : (
                  <video
                    ref={videoRef}
                    src={VIDEO_SRC}
                    controls
                    playsInline
                    onEnded={() => setIsPlaying(false)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                )}
              </div>

              <div className="es2ps-text">
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#fff',
                    margin: '0 0 10px',
                    letterSpacing: '-0.2px',
                  }}
                >
                  New Arrivals
                </h3>
                <p
                  className="es2ps-desc"
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.85)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Discover new arrivals with a 15% discount on fresh products!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .es2ps-row {
          display: flex;
          align-items: center;
          gap: clamp(20px, 2.4vw, 40px);
          width: 100%;
        }

        .es2ps-left {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: clamp(16px, 1.6vw, 28px);
        }

        .es2ps-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: clamp(20px, 2vw, 32px);
          justify-content: flex-end;
        }

        .es2ps-thumbs {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .es2ps-thumb {
          position: relative;
          width: 80px;
          height: 80px;
          background: #fff;
          border-radius: 6px;
          overflow: hidden;
          padding: 8px;
          box-sizing: border-box;
          display: block;
        }

        .es2ps-text { min-width: 0; }

        .es2ps-cta:hover { color: #2b6be6; }

        .es2ps-desc {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Play button */
        .es2ps-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.96);
          border: 2px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #232f3f;
          padding-left: 4px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(2px);
          transition: background 220ms ease, transform 220ms ease, box-shadow 220ms ease;
          cursor: pointer;
        }
        .es2ps-video:hover .es2ps-play {
          background: #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
          transform: translate(-50%, -50%) scale(1.06);
        }

        /* Tablet */
        @media (max-width: 991px) {
          .es2ps-card {
            height: auto !important;
            padding: 28px clamp(16px, 3vw, 32px) !important;
          }
          .es2ps-row {
            flex-direction: column;
            align-items: stretch;
            gap: 28px;
          }
          .es2ps-right { justify-content: flex-start; }
        }

        /* Mobile */
        @media (max-width: 749px) {
          .es2ps-row {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            text-align: center;
          }
          .es2ps-left,
          .es2ps-right {
            flex-direction: column;
            align-items: center;
            gap: 14px;
            width: 100%;
          }
          .es2ps-thumbs { justify-content: center; }
          .es2ps-text   { text-align: center; }
          .es2ps-video  {
            width: 100% !important;
            max-width: 100% !important;
            height: clamp(160px, 45vw, 220px) !important;
          }
        }
      `}</style>
    </section>
  );
}
