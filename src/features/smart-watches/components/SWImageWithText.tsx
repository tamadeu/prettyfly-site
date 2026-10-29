'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

export function SWImageWithText() {
  return (
    <section className="swiwt-section">
      <div className="container-main">
        <div className="swiwt-grid">

          {/* Left: text content */}
          <div className="swiwt-text">
            <h2 className="swiwt-title">Watches That Define You</h2>
            <p className="swiwt-desc">
              Explore our collection of watches that showcase your individuality and style, making
              every moment a statement of who you are.
            </p>
            <Link
              href="/smart-watches/shop"
              className="swiwt-cta"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111'; }}
            >
              Shop Collection <IconArrowRight size={14} />
            </Link>
          </div>

          {/* Right: overlapping images + circular badge */}
          <div className="swiwt-images">
            {/* Back image (lower right) */}
            <div className="swiwt-img-back">
              <Image
                src="/smart-watches/img-with-text/down-img-with-text.webp"
                alt="Watch lifestyle 2"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 992px) 30vw, 60vw"
              />
            </div>
            {/* Front image (upper left) */}
            <div className="swiwt-img-front">
              <Image
                src="/smart-watches/img-with-text/up-img-with-text.webp"
                alt="Watch lifestyle 1"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 992px) 22vw, 45vw"
              />
            </div>

            {/* Circular rotating text badge */}
            <div className="swiwt-badge">
              <svg viewBox="0 0 120 120" width="120" height="120">
                <defs>
                  <path
                    id="swiwt-circle"
                    d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text fontSize="10.5" fontFamily="inherit" fill="#111" letterSpacing="2.8" fontWeight="500">
                  <textPath href="#swiwt-circle">
                    WELCOME TO OUR STORE • WELCOME TO OUR STORE •
                  </textPath>
                </text>
                <g transform="translate(60,60)">
                  <svg viewBox="0 0 24 24" width="22" height="22" x="-11" y="-11" fill="none" stroke="#111" strokeWidth="1.8">
                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" />
                  </svg>
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .swiwt-section { width: 100%; }

        .swiwt-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        .swiwt-text {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .swiwt-title {
          font-size: clamp(24px, 3vw, 44px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin-bottom: clamp(16px, 1.5vw, 24px);
        }
        .swiwt-desc {
          font-size: clamp(13px, 1.1vw, 16px);
          color: #555;
          line-height: 1.7;
          margin-bottom: clamp(24px, 2.5vw, 36px);
          max-width: 480px;
        }
        .swiwt-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 13px 26px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 200ms ease;
          align-self: flex-start;
        }

        /* Right: overlapping image stack */
        .swiwt-images {
          position: relative;
          height: clamp(300px, 50vw, 520px);
        }
        .swiwt-img-back {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 65%;
          height: 75%;
          border-radius: 8px;
          overflow: hidden;
        }
        .swiwt-img-front {
          position: absolute;
          left: 0;
          top: 0;
          width: 55%;
          height: 68%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .swiwt-badge {
          position: absolute;
          right: 36%;
          top: -34px;
          animation: swiwtSpin 14s linear infinite;
          z-index: 10;
        }
        @keyframes swiwtSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (min-width: 992px) {
          .swiwt-grid {
            grid-template-columns: 1fr 1fr;
            gap: clamp(40px, 5vw, 80px);
          }
          .swiwt-images { height: clamp(380px, 40vw, 560px); }
        }
        @media (max-width: 749px) {
          .swiwt-badge { width: 90px; height: 90px; right: 8%; }
          .swiwt-badge svg { width: 90px; height: 90px; }
        }
      `}</style>
    </section>
  );
}
