'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { jewelleryProducts } from '@/data/jewellery-products';

const DEAL_END = new Date(Date.now() + 48 * 60 * 60 * 1000);

const dealProducts = [
  jewelleryProducts.find((p) => p.id === 'jw-2')!,
  jewelleryProducts.find((p) => p.id === 'jw-5')!,
  jewelleryProducts.find((p) => p.id === 'jw-7')!,
  jewelleryProducts.find((p) => p.id === 'jw-11')!,
];

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  });
  return time;
}

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, '0')}</>;
}

export function JewelleryDealsOfTheDay() {
  const { h, m, s } = useCountdown(DEAL_END);

  return (
    <section className="jwdeal-section">
      <div className="container-main">
        <div className="jwdeal-grid">
          {/* LEFT: image + countdown */}
          <div className="jwdeal-left">
            <div className="jwdeal-img-wrap">
              <Image
                src="/jewelry/img-with-text/img-with-text1.webp"
                alt="Deals of the day"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 992px) 40vw, 100vw"
              />
              <div className="jwdeal-img-overlay" />
              <div className="jwdeal-img-content">
                <p className="jwdeal-eyebrow">Limited Time</p>
                <h2 className="jwdeal-img-title">Deals of<br />the Day</h2>
                <div className="jwdeal-timer">
                  <div className="jwdeal-unit">
                    <span className="jwdeal-digits"><Pad n={h} /></span>
                    <span className="jwdeal-label">Hours</span>
                  </div>
                  <span className="jwdeal-sep">:</span>
                  <div className="jwdeal-unit">
                    <span className="jwdeal-digits"><Pad n={m} /></span>
                    <span className="jwdeal-label">Mins</span>
                  </div>
                  <span className="jwdeal-sep">:</span>
                  <div className="jwdeal-unit">
                    <span className="jwdeal-digits"><Pad n={s} /></span>
                    <span className="jwdeal-label">Secs</span>
                  </div>
                </div>
                <Link href="/shop?badge=sale" className="jwdeal-cta">
                  Shop All Deals
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: 4 product cards */}
          <div className="jwdeal-products">
            {dealProducts.map((product, index) => (
              <HomeProductCard
                key={product.id}
                product={product}
                index={index}
                hrefBase="/products"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .jwdeal-section { background-color: #f8f5f0; }

        .jwdeal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 750px) {
          .jwdeal-grid { grid-template-columns: 2fr 3fr; gap: 32px; align-items: start; }
        }
        @media (min-width: 992px) {
          .jwdeal-grid { grid-template-columns: 5fr 7fr; gap: 40px; }
        }

        .jwdeal-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 4px;
        }
        .jwdeal-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%);
          z-index: 1;
        }
        .jwdeal-img-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: clamp(20px, 4vw, 36px);
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .jwdeal-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b89b6e;
          margin: 0;
        }
        .jwdeal-img-title {
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .jwdeal-timer {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .jwdeal-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 4px;
          padding: 8px 14px;
          min-width: 54px;
        }
        .jwdeal-digits {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .jwdeal-label {
          font-size: 10px;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
        }
        .jwdeal-sep {
          font-size: 22px;
          font-weight: 700;
          color: rgba(255,255,255,0.55);
          line-height: 1;
          margin-bottom: 14px;
        }
        .jwdeal-cta {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          background-color: #b89b6e;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 12px 26px;
          border-radius: 2px;
          text-decoration: none;
          transition: background-color 240ms ease, transform 240ms ease;
        }
        .jwdeal-cta:hover { background-color: #a0845a; transform: translateY(-1px); }

        .jwdeal-products {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 992px) {
          .jwdeal-products { gap: 20px; }
        }
      `}</style>
    </section>
  );
}
