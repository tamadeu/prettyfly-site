'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/utils/formatPrice';
import { useProducts } from '@/features/products/hooks/useProducts';
import { useUIStore } from '@/store/uiStore';

function IconBag({ size = 16 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M9 6H15C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6ZM7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6H20C20.5523 6 21 6.44772 21 7V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V7C3 6.44772 3.44772 6 4 6H7ZM5 8V20H19V8H5ZM9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10H17C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10H9Z" /></svg>);
}

const pad = (n: number) => String(n).padStart(2, '0');

function DealsCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const target = new Date('2027-01-01T00:00:00').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bkd-countdown">
      <span className="bkd-cd-label">Hurry up! Offer ends in:</span>
      {[String(time.days), pad(time.hours), pad(time.minutes), pad(time.seconds)].map((val, i) => (
        <span key={i} className="bkd-cd-cell">{val}</span>
      ))}
    </div>
  );
}

/* Deterministic mock stock so the progress bars vary per card without Math.random. */
const AVAILABLE = [442, 450, 410, 362];
const SOLD = 150;

export function BookDeals() {
  const { data } = useProducts({ limit: 12 }, { endpoint: '/api/book-products' });
  const { openQuickView } = useUIStore();
  const products = (data?.products ?? []).slice(0, 4);

  return (
    <section className="bkd-section">
      <div className="container-main">
        <div className="bkd-head">
          <h2 className="bkd-title">Deals of the week</h2>
          <DealsCountdown />
        </div>

        <div className="bkd-grid">
          {products.map((product, i) => {
            const available = AVAILABLE[i % AVAILABLE.length];
            const pct = Math.round((SOLD / (SOLD + available)) * 100);
            return (
              <div key={product.id} className="bkd-card">
                <Link href={`/products/${product.slug}`} className="bkd-img">
                  <Image src={product.images[0]?.src || ''} alt={product.name} fill style={{ objectFit: 'contain' }} sizes="180px" />
                  {product.badge && <span className="bkd-badge" data-badge={product.badge}>{product.badge}</span>}
                </Link>
                <div className="bkd-info">
                  <Link href={`/products/${product.slug}`} className="bkd-name">{product.name}</Link>
                  <div className="bkd-price-row">
                    {product.compareAtPrice && <span className="bkd-compare">{formatPrice(product.compareAtPrice)}</span>}
                    <span className="bkd-price">{formatPrice(product.price)}</span>
                  </div>
                  <div className="bkd-progress">
                    <div className="bkd-progress-labels">
                      <span>Sold: {SOLD}</span>
                      <span>Available: {available}</span>
                    </div>
                    <div className="bkd-progress-track">
                      <div className="bkd-progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <button type="button" className="bkd-quick-add" onClick={() => openQuickView(product)}>
                    <IconBag size={16} /> Quick Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .bkd-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 34px;
        }
        .bkd-title { font-size: clamp(22px, 2.6vw, 30px); font-weight: 700; color: #2a2a2a; }
        .bkd-countdown { display: flex; align-items: center; gap: 8px; }
        .bkd-cd-label { font-size: 15px; color: #7a6a6e; margin-right: 4px; }
        .bkd-cd-cell {
          min-width: 40px; height: 38px; padding: 0 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: #e0294a; color: #fff; font-size: 15px; font-weight: 600;
          border-radius: 4px; font-variant-numeric: tabular-nums;
        }

        .bkd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 750px) { .bkd-grid { grid-template-columns: 1fr 1fr; } }

        .bkd-card {
          display: flex;
          gap: 20px;
          border: 1px solid #ececec;
          border-radius: 10px;
          padding: 18px;
          background: #fff;
          transition: box-shadow 220ms ease, border-color 220ms ease;
        }
        .bkd-card:hover { border-color: #f0cdd4; box-shadow: 0 6px 18px rgba(224,41,74,0.06); }
        .bkd-img {
          position: relative;
          width: clamp(120px, 16vw, 180px);
          flex-shrink: 0;
          background: #f6f6f6;
          border-radius: 8px;
          overflow: hidden;
          display: block;
        }
        .bkd-badge {
          position: absolute; top: 10px; left: 10px;
          background: #e0294a; color: #fff; font-size: 11px; font-weight: 600;
          padding: 3px 10px; border-radius: 3px; text-transform: capitalize;
        }
        .bkd-badge[data-badge="new"] { background: #1c2230; }
        .bkd-info { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
        .bkd-name { font-size: 16px; font-weight: 600; color: #2a2a2a; text-decoration: none; transition: color 180ms ease; }
        .bkd-name:hover { color: #e0294a; }
        .bkd-price-row { display: flex; align-items: center; gap: 8px; }
        .bkd-compare { font-size: 14px; color: #999; text-decoration: line-through; }
        .bkd-price { font-size: 16px; font-weight: 700; color: #2a2a2a; }
        .bkd-progress-labels { display: flex; justify-content: space-between; font-size: 13px; color: #555; margin-bottom: 6px; }
        .bkd-progress-track { height: 5px; background: #eee; border-radius: 5px; overflow: hidden; }
        .bkd-progress-fill { height: 100%; background: #e0294a; border-radius: 5px; }
        .bkd-quick-add {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          padding: 0;
          margin-top: 2px;
          font-size: 15px;
          font-weight: 500;
          color: #2a2a2a;
          cursor: pointer;
          width: fit-content;
          transition: color 180ms ease;
        }
        .bkd-quick-add:hover { color: #e0294a; }

        @media (max-width: 749px) {
          .bkd-head { justify-content: center; text-align: center; }
        }
      `}</style>
    </section>
  );
}
