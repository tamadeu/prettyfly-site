'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function IconArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2027-01-01T00:00:00').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        days:    Math.floor(diff / 86_400_000),
        hours:   Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000)  / 60_000),
        seconds: Math.floor((diff % 60_000)      / 1_000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="gllto-countdown">
      {[
        { val: String(time.days), label: 'Days' },
        { val: pad(time.hours),   label: 'Hrs'  },
        { val: pad(time.minutes), label: 'Min'  },
        { val: pad(time.seconds), label: 'Sec'  },
      ].map(({ val, label }) => (
        <div key={label} className="gllto-cd-cell">
          <span className="gllto-cd-val">{val}</span>
          <span className="gllto-cd-lbl">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function GlassesLimitedTimeOffer() {
  return (
    <section className="gllto-section">
      <div className="container-main">
        <div className="gllto-grid">
          <div className="gllto-copy">
            <h2 className="gllto-heading">Limited Time Offer: Stylish Glasses</h2>
            <p className="gllto-sub">Upgrade your look with stylish glasses at unbeatable prices!</p>
            <Link
              href="/shop"
              className="gllto-cta"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
            >
              Shop Collection
              <IconArrowRight size={19} />
            </Link>
          </div>

          <CountdownTimer />
        </div>
      </div>

      <style>{`
        .gllto-section {
          background-color: rgb(245, 250, 187);
          padding: clamp(40px, 6vw, 72px) 0;
        }

        /* ── Mobile: stacked, centered ── */
        .gllto-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 28px;
        }
        .gllto-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .gllto-heading {
          font-size: clamp(24px, 5vw, 34px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.25;
        }
        .gllto-sub {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #4a4a2a;
          line-height: 1.5;
        }
        .gllto-cta {
          display: inline-flex;
          align-items: center;
          gap: clamp(6px, 1.6vw, 12px);
          background-color: #000;
          color: #fff;
          font-size: clamp(14px, 1.6vw, 18px);
          font-weight: 500;
          padding: clamp(11px, 1.6vw, 16px) clamp(18px, 2.4vw, 26px);
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease;
          white-space: nowrap;
        }

        /* ── Countdown cells ── */
        .gllto-countdown {
          display: flex;
          gap: clamp(6px, 1.4vw, 12px);
          align-items: center;
        }
        .gllto-cd-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #b9bb70;
          border-radius: 4px;
          width: clamp(58px, 7vw, 76px);
          height: clamp(58px, 7vw, 76px);
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .gllto-cd-val {
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .gllto-cd-lbl {
          font-size: clamp(11px, 1.3vw, 14px);
          font-weight: 400;
          color: #6a6a3a;
          margin-top: clamp(4px, 0.7vw, 6px);
          line-height: 1;
        }

        /* ── Desktop: copy left, countdown right, fixed 320px band ── */
        @media (min-width: 992px) {
          .gllto-section {
            height: 320px;
            padding: 0;
            display: flex;
            align-items: center;
          }
          .gllto-section > .container-main { width: 100%; }
          .gllto-grid {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            gap: 40px;
          }
          .gllto-copy {
            align-items: flex-start;
            gap: 20px;
          }
          .gllto-sub { max-width: 460px; }
        }
      `}</style>
    </section>
  );
}
