'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Target: next Saturday 23:59:59 */
function getTarget(): number {
  const d = new Date();
  const daysUntilSat = ((6 - d.getDay()) + 7) % 7 || 7;
  d.setDate(d.getDate() + daysUntilSat);
  d.setHours(23, 59, 59, 0);
  return d.getTime();
}

const TARGET = getTarget();

function pad(n: number) { return String(n).padStart(2, '0'); }

const IMAGES = [
  '/phone-case/products/products1.webp',
  '/phone-case/products/products2.webp',
  '/phone-case/products/products3.webp',
];

export function PCWeekendDeal() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    function tick() {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pcwd-section">
      <div className="container-main">
        <div className="pcwd-strip">

          {/* Left: three product images */}
          <div className="pcwd-images">
            {IMAGES.map((src, i) => (
              <div key={i} className="pcwd-img-box">
                <Image
                  src={src}
                  alt={`Weekend deal product ${i + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="110px"
                />
              </div>
            ))}
          </div>

          {/* Centre: promo text */}
          <div className="pcwd-content">
            <p className="pcwd-eyebrow">Special Weekend Deal</p>
            <p className="pcwd-title">Save an Extra 20%!</p>
            <Link href="/phone-case/shop" className="pcwd-link">
              Shop Now
              <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13} aria-hidden="true">
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
              </svg>
            </Link>
          </div>

          {/* Right: countdown */}
          <div className="pcwd-countdown">
            <div className="pcwd-unit">
              <span className="pcwd-num">{pad(time.d)}</span>
              <span className="pcwd-label">Days</span>
            </div>
            <div className="pcwd-divider" aria-hidden="true" />
            <div className="pcwd-unit">
              <span className="pcwd-num">{pad(time.h)}</span>
              <span className="pcwd-label">Hrs</span>
            </div>
            <div className="pcwd-divider" aria-hidden="true" />
            <div className="pcwd-unit">
              <span className="pcwd-num">{pad(time.m)}</span>
              <span className="pcwd-label">Min</span>
            </div>
            <div className="pcwd-divider" aria-hidden="true" />
            <div className="pcwd-unit">
              <span className="pcwd-num">{pad(time.s)}</span>
              <span className="pcwd-label">Sec</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .pcwd-section {
          background: #fff;
        }

        /* ── Dark rounded strip — fixed 160px height ── */
        .pcwd-strip {
          background: #242424;
          border-radius: 12px;
          display: flex;
          align-items: center;
          height: 160px;
          gap: clamp(24px, 3.5vw, 56px);
          padding: 0 clamp(28px, 3.5vw, 48px);
        }

        /* ── Three product thumbnails ── */
        .pcwd-images {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }
        .pcwd-img-box {
          position: relative;
          width: 110px;
          height: 110px;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* ── Promo text ── */
        .pcwd-content {
          flex: 1;
          min-width: 0;
        }
        .pcwd-eyebrow {
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 6px;
          line-height: 1.4;
        }
        .pcwd-title {
          font-size: clamp(18px, 1.8vw, 22px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .pcwd-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(255,255,255,0.6);
          transition: text-decoration-color 200ms ease;
        }
        .pcwd-link:hover {
          text-decoration-color: #fff;
        }

        /* ── Countdown ── */
        .pcwd-countdown {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-shrink: 0;
        }
        .pcwd-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .pcwd-num {
          font-size: clamp(28px, 2.8vw, 36px);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .pcwd-label {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1;
        }
        .pcwd-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.18);
          flex-shrink: 0;
        }

        /* ── Mobile ── */
        @media (max-width: 749px) {
          .pcwd-strip {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            gap: 20px;
            padding: 28px 20px;
          }
          .pcwd-img-box { width: 80px; height: 80px; }
          .pcwd-countdown { align-self: stretch; justify-content: space-between; gap: 8px; }
          .pcwd-divider { height: 36px; }
        }
      `}</style>
    </section>
  );
}
