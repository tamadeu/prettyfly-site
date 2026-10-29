'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const END_DATE = new Date('2027-06-01T00:00:00Z');

function getRemaining() {
  const diff = Math.max(0, END_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hrs:  Math.floor((diff % 86400000) / 3600000),
    min:  Math.floor((diff % 3600000)  / 60000),
    sec:  Math.floor((diff % 60000)    / 1000),
  };
}

function IconChevronRight({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function SWDealBanner() {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { value: t.days, label: 'Days' },
    { value: t.hrs,  label: 'Hrs'  },
    { value: t.min,  label: 'Min'  },
    { value: t.sec,  label: 'Sec'  },
  ];

  const expired = t.days === 0 && t.hrs === 0 && t.min === 0 && t.sec === 0;

  return (
    <section className="swdb-section">
      <div className="container-main swdb-inner">

        {/* Left: text */}
        <div className="swdb-text">
          <h2 className="swdb-title">Limited Stock, Shop Now!</h2>
          <p className="swdb-desc">
            Grab the hottest electronics at unbeatable prices! Limited time only—
            save up to 60% now!
          </p>
        </div>

        {/* Center: countdown / expired */}
        <div className="swdb-center">
          {expired ? (
            <p className="swdb-expired">Offer closed!</p>
          ) : (
            <div className="swdb-clock">
              {cells.map((c) => (
                <div key={c.label} className="swdb-cell">
                  <span className="swdb-val">{String(c.value).padStart(2, '0')}</span>
                  <span className="swdb-lbl">{c.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: CTA */}
        <div className="swdb-cta-wrap">
          <Link
            href="/smart-watches/shop"
            className="swdb-cta"
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8edf5'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; }}
          >
            Shop Collection <IconChevronRight size={18} />
          </Link>
        </div>

      </div>

      <style>{`
        .swdb-section {
          background: rgb(27, 43, 62);
          height: 210px;
          display: flex;
          align-items: center;
        }
        .swdb-inner {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: clamp(24px, 3vw, 48px);
          width: 100%;
        }

        /* ── Left text ── */
        .swdb-text {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .swdb-title {
          font-size: clamp(20px, 2.2vw, 32px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }
        .swdb-desc {
          font-size: clamp(13px, 1.1vw, 16px);
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
          max-width: 380px;
        }

        /* ── Center: expired fallback ── */
        .swdb-center { text-align: center; }
        .swdb-expired {
          font-size: clamp(18px, 2vw, 26px);
          font-weight: 700;
          color: #fff;
        }

        /* ── Countdown: boxed cells like screenshot ── */
        .swdb-clock {
          display: flex;
          align-items: center;
          gap: clamp(5px, 2vw, 10px);
        }
        .swdb-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          width: clamp(52px, 15vw, 72px);
          height: clamp(48px, 13vw, 66px);
          flex-shrink: 0;
          box-sizing: border-box;
        }
        .swdb-val {
          font-size: clamp(18px, 5vw, 26px);
          font-weight: 700;
          color: #111;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          margin-bottom: clamp(2px, 0.6vw, 4px);
        }
        .swdb-lbl {
          font-size: clamp(10px, 2.2vw, 12px);
          font-weight: 400;
          color: #888;
          line-height: 1;
        }

        /* ── Right CTA ── */
        .swdb-cta-wrap {
          display: flex;
          justify-content: flex-end;
        }
        .swdb-cta {
          display: inline-flex;
          align-items: center;
          gap: clamp(6px, 0.8vw, 8px);
          border: 1.5px solid #fff;
          color: rgb(27, 43, 62);
          font-size: clamp(13px, 1.2vw, 18px);
          font-weight: 600;
          padding: clamp(9px, 1vw, 15px) clamp(14px, 1.5vw, 26px);
          border-radius: 4px;
          text-decoration: none;
          background: #fff;
          transition: background-color 200ms ease;
          white-space: nowrap;
        }
        .swdb-cta svg {
          width: clamp(14px, 1.6vw, 18px);
          height: clamp(14px, 1.6vw, 18px);
        }

        /* ── Responsive ── */
        @media (max-width: 749px) {
          .swdb-section { height: auto; padding: clamp(24px, 6vw, 40px) 0; }
          .swdb-inner { grid-template-columns: 1fr; text-align: center; }
          .swdb-desc { max-width: 100%; }
          .swdb-clock { justify-content: center; }
          .swdb-cta-wrap { justify-content: center; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .swdb-section { height: auto; padding: 40px 0; }
          .swdb-inner { grid-template-columns: 1fr auto; grid-template-rows: auto auto; }
          .swdb-cta-wrap { grid-column: 1 / -1; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
