'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const target = new Date('2026-12-31T23:59:59').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff % 86400000) / 3600000),
        min: Math.floor((diff % 3600000) / 60000),
        sec: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { val: time.days, label: 'Days' },
    { val: time.hrs, label: 'Hrs' },
    { val: time.min, label: 'Min' },
    { val: time.sec, label: 'Sec' },
  ];

  return (
    <div className="gcb-timer">
      {items.map((t, i) => (
        <Fragment key={t.label}>
          <div className="gcb-timer-cell">
            <div className="gcb-timer-val">{String(t.val).padStart(2, '0')}</div>
            <div className="gcb-timer-label">{t.label}</div>
          </div>
          {i < items.length - 1 && <div className="gcb-timer-divider" aria-hidden="true" />}
        </Fragment>
      ))}

      <style>{`
        .gcb-timer {
          display: flex;
          align-items: center;
          gap: clamp(10px, 2.5vw, 18px);
        }
        .gcb-timer-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          min-width: clamp(30px, 7.5vw, 44px);
        }
        .gcb-timer-val {
          font-size: clamp(16px, 5vw, 26px);
          font-weight: 700;
          color: #1f3a1f;
          line-height: 1;
          letter-spacing: -0.2px;
          font-variant-numeric: tabular-nums;
        }
        .gcb-timer-label {
          font-size: clamp(9px, 2.2vw, 12px);
          color: #6b7280;
          letter-spacing: 0.2px;
        }
        .gcb-timer-divider {
          width: 1px;
          height: clamp(20px, 5vw, 30px);
          background-color: #d8cfbd;
        }

        @media (min-width: 992px) {
          .gcb-timer { gap: 22px; }
          .gcb-timer-val { font-size: 28px; }
          .gcb-timer-cell { min-width: 44px; }
          .gcb-timer-label { font-size: 13px; }
        }
      `}</style>
    </div>
  );
}

const thumbnails = [
  '/grocery-shop/products/products10.webp',
  '/grocery-shop/products/products6.webp',
  '/grocery-shop/products/products12.webp',
];

export function GroceryCountdownBanner() {
  return (
    <section className="gcb-section">
      <div className="container-main">
        <div className="gcb-wrap">
          <div className="gcb-left">
            <div className="gcb-thumbs">
              {thumbnails.map((src, i) => (
                <div key={i} className="gcb-thumb">
                  <Image src={src} alt={`Deal ${i + 1}`} fill style={{ objectFit: 'contain' }} sizes="110px" />
                </div>
              ))}
            </div>
            <div className="gcb-text">
              <p className="gcb-title">Special Weekend Deal</p>
              <p className="gcb-subtitle">Save an Extra 20%!</p>
              <Link href="/shop" className="gcb-cta">
                Shop Now
                <IconArrowRight size={18} />
              </Link>
            </div>
          </div>
          <CountdownTimer />
        </div>
      </div>

      <style>{`
        .gcb-wrap {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: clamp(14px, 3.5vw, 20px);
          background-color: #fff3e6;
          border-radius: 14px;
          padding: clamp(16px, 4vw, 24px);
        }

        .gcb-left {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 3vw, 18px);
          flex: 1;
          min-width: 0;
        }

        .gcb-thumbs {
          display: flex;
          gap: clamp(6px, 1.8vw, 10px);
        }
        .gcb-thumb {
          position: relative;
          width: clamp(52px, 13vw, 72px);
          height: clamp(52px, 13vw, 72px);
          background-color: #fff;
          border-radius: 14px;
          padding: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: transform 300ms ease;
        }
        .gcb-thumb:hover {
          transform: translateY(-3px) rotate(-4deg);
        }

        .gcb-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 4px;
        }
        .gcb-title {
          font-size: clamp(14px, 4vw, 18px);
          font-weight: 600;
          color: #1f1f1f;
          line-height: 1.3;
          margin: 0 0 4px;
          letter-spacing: -0.1px;
        }
        .gcb-subtitle {
          font-size: clamp(14px, 4vw, 18px);
          font-weight: 400;
          color: #555;
          line-height: 1.4;
          margin: 0 0 10px;
        }

        .gcb-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(13px, 3.6vw, 16px);
          font-weight: 600;
          color: #1f1f1f;
          text-decoration: none;
          border-bottom: 1.5px solid #1f1f1f;
          padding: 0 0 4px;
          width: fit-content;
        }

        @media (max-width: 749px) {
          .gcb-wrap { flex-direction: column; align-items: center; gap: 20px; }
          .gcb-left { flex-direction: column; align-items: center; gap: 16px; }
        }

        @media (min-width: 750px) {
          .gcb-wrap { flex-wrap: nowrap; justify-content: space-between; padding: 16px 28px; }
          .gcb-left { flex-wrap: nowrap; justify-content: flex-start; gap: 24px; }
          .gcb-text { align-items: flex-start; text-align: left; }
          .gcb-thumb { width: 80px; height: 80px; }
        }

        @media (min-width: 992px) {
          .gcb-wrap { height: 160px; gap: 32px; padding: 16px 32px; }
          .gcb-left { gap: 28px; }
          .gcb-thumb { width: 90px; height: 90px; }
        }
      `}</style>
    </section>
  );
}
