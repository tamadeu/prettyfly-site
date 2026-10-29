'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DEAL = {
  name: 'Aero Flex Cover',
  price: 20,
  compareAtPrice: 30,
  discount: '33% OFF',
  description: 'Ultra-thin yet military-grade protection. Drop tested. Style-approved.',
  href: '/phone-case/product/pc-aero-flex-cover',
  image: '/phone-case/products/products1.webp',
  thumbnails: [
    '/phone-case/products/products1.webp',
    '/phone-case/products/products2.webp',
    '/phone-case/products/products3.webp',
    '/phone-case/products/products4.webp',
  ],
  endTime: (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(23, 59, 59, 0);
    return d.getTime();
  })(),
};

function pad(n: number) { return String(n).padStart(2, '0'); }

export function PCDealOfTheDay() {
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    function tick() {
      const diff = Math.max(0, DEAL.endTime - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ h, m, s });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pcdod-section">
      <div className="container-main">
        <div className="pcdod-strip">

          {/* Left: thumbnails */}
          <div className="pcdod-thumbs">
            {DEAL.thumbnails.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveThumbnail(i)}
                className={`pcdod-thumb-btn ${activeThumbnail === i ? 'is-active' : ''}`}
                aria-label={`View image ${i + 1}`}
              >
                <Image src={src} alt="" fill style={{ objectFit: 'cover', borderRadius: '6px' }} />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="pcdod-main-img">
            <Image
              src={DEAL.thumbnails[activeThumbnail]}
              alt={DEAL.name}
              fill
              sizes="(max-width: 749px) 80vw, 260px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Center: text */}
          <div className="pcdod-content">
            <span className="pcdod-eyebrow">Deal Of The Day</span>
            <h2 className="pcdod-name">{DEAL.name}</h2>
            <p className="pcdod-desc">{DEAL.description}</p>
            <div className="pcdod-price">
              <span className="pcdod-sale">${DEAL.price}</span>
              <span className="pcdod-orig">${DEAL.compareAtPrice}</span>
              <span className="pcdod-badge">{DEAL.discount}</span>
            </div>
          </div>

          {/* Right: countdown + CTA */}
          <div className="pcdod-right">
            <p className="pcdod-ends">Ends In</p>
            <div className="pcdod-clock">
              <div className="pcdod-unit">
                <span className="pcdod-num">{pad(timeLeft.h)}</span>
                <span className="pcdod-label">HRS</span>
              </div>
              <span className="pcdod-sep">:</span>
              <div className="pcdod-unit">
                <span className="pcdod-num">{pad(timeLeft.m)}</span>
                <span className="pcdod-label">MIN</span>
              </div>
              <span className="pcdod-sep">:</span>
              <div className="pcdod-unit">
                <span className="pcdod-num">{pad(timeLeft.s)}</span>
                <span className="pcdod-label">SEC</span>
              </div>
            </div>
            <Link href={DEAL.href} className="pcdod-cta">
              Shop Now
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        .pcdod-section {
          background: #111;
        }

        .pcdod-strip {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.5vw, 40px);
          min-height: 180px;
          paddingBlock: clamp(24px, 3vw, 40px);
        }

        .pcdod-thumbs {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }

        .pcdod-thumb-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          background: #222;
          padding: 0;
          transition: border-color 200ms ease;
          flex-shrink: 0;
        }
        .pcdod-thumb-btn.is-active { border-color: #fff; }
        .pcdod-thumb-btn:hover { border-color: rgba(255,255,255,0.5); }

        .pcdod-main-img {
          position: relative;
          width: clamp(120px, 15vw, 220px);
          height: clamp(120px, 15vw, 220px);
          flex-shrink: 0;
        }

        .pcdod-content {
          flex: 1;
          min-width: 0;
        }

        .pcdod-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 8px;
        }

        .pcdod-name {
          font-size: clamp(18px, 2vw, 26px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
          line-height: 1.2;
        }

        .pcdod-desc {
          font-size: clamp(12px, 1vw, 14px);
          color: #aaa;
          line-height: 1.6;
          margin: 0 0 14px;
        }

        .pcdod-price {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pcdod-sale {
          font-size: clamp(18px, 1.8vw, 24px);
          font-weight: 700;
          color: #fff;
        }

        .pcdod-orig {
          font-size: clamp(13px, 1.1vw, 16px);
          color: #777;
          text-decoration: line-through;
        }

        .pcdod-badge {
          font-size: 11px;
          font-weight: 700;
          color: #111;
          background: #f5c842;
          padding: 3px 8px;
          border-radius: 3px;
        }

        .pcdod-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .pcdod-ends {
          font-size: 12px;
          font-weight: 500;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }

        .pcdod-clock {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pcdod-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .pcdod-num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: rgba(255,255,255,0.08);
          border-radius: 6px;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.5px;
        }

        .pcdod-label {
          font-size: 9px;
          font-weight: 600;
          color: #777;
          letter-spacing: 0.5px;
        }

        .pcdod-sep {
          font-size: 20px;
          font-weight: 700;
          color: #555;
          align-self: flex-start;
          padding-top: 14px;
        }

        .pcdod-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: #111;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 220ms ease, color 220ms ease;
        }
        .pcdod-cta:hover { background: #e5e5e5; }

        @media (max-width: 749px) {
          .pcdod-strip {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 32px 0;
          }

          .pcdod-thumbs { flex-direction: row; }

          .pcdod-main-img {
            width: clamp(140px, 50vw, 220px);
            height: clamp(140px, 50vw, 220px);
          }

          .pcdod-price { justify-content: center; }

          .pcdod-right { width: 100%; }
        }
      `}</style>
    </section>
  );
}
