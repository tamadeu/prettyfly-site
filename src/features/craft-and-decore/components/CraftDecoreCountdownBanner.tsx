'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
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
    const target = new Date('2026-11-27T00:00:00').getTime();
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
    <div className="cdcb-countdown">
      {[
        { val: String(time.days), label: 'Days' },
        { val: pad(time.hours),   label: 'Hrs'  },
        { val: pad(time.minutes), label: 'Min'  },
        { val: pad(time.seconds), label: 'Sec'  },
      ].map(({ val, label }, i, arr) => (
        <div key={label} className="cdcb-cd-group">
          <div className="cdcb-cd-cell">
            <span className="cdcb-cd-val">{val}</span>
            <span className="cdcb-cd-lbl">{label}</span>
          </div>
          {i < arr.length - 1 && <span className="cdcb-cd-divider" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export function CraftDecoreCountdownBanner() {
  return (
    <section className="cdcb-section">
      <div className="container-main">
        <div className="cdcb-wrap">
          <div className="cdcb-content">
            <span className="cdcb-eyebrow">SALES UP TO 50% OFF</span>
            <h2 className="cdcb-heading">Huge Savings Until Black Friday!</h2>
            <Link href="/shop" className="cdcb-cta">
              Shop now
              <IconArrowRight size={20} />
            </Link>
          </div>
          <CountdownTimer />
        </div>
      </div>

      <style>{`
        .cdcb-wrap {
          background-color: #f4efe6;
          border-radius: 8px;
          padding: clamp(28px, 6vw, 40px) clamp(20px, 5vw, 48px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 28px;
        }
        .cdcb-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cdcb-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #6b6b7a;
          margin-bottom: 10px;
        }
        .cdcb-heading {
          font-size: 32px;
          font-weight: 600;
          color: #171712;
          line-height: 1.3;
          margin-bottom: 18px;
        }
        .cdcb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #171712;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 11px 25px;
          border-radius: 0;
          text-decoration: none;
          transition: background-color 250ms ease, font-size 250ms ease, padding 250ms ease;
        }
        .cdcb-cta:hover { background-color: #a9673f; }

        .cdcb-countdown {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.6vw, 12px);
        }
        .cdcb-cd-group {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.6vw, 12px);
        }
        .cdcb-cd-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 44px;
        }
        .cdcb-cd-val {
          font-size: 32px;
          font-weight: 700;
          color: #171712;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .cdcb-cd-lbl {
          font-size: 12px;
          color: #888;
          margin-top: 4px;
        }
        .cdcb-cd-divider {
          width: 1px;
          height: clamp(28px, 6vw, 38px);
          background-color: #d8cfbd;
        }

        /* ≥750px: fixed-height row layout — typography scales up
           proportionally to fill the taller 280px band in a balanced way. */
        @media (min-width: 750px) {
          .cdcb-wrap {
            height: 280px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: left;
          }
          .cdcb-content { align-items: flex-start; }
          .cdcb-eyebrow { font-size: 14px; margin-bottom: 14px; }
          .cdcb-heading { margin-bottom: 24px; }
          .cdcb-cta { font-size: 17px; padding: 15px 33px; }
          .cdcb-countdown { gap: clamp(10px, 2vw, 18px); }
          .cdcb-cd-group { gap: clamp(10px, 2vw, 18px); }
          .cdcb-cd-cell { min-width: 58px; }
          .cdcb-cd-lbl { font-size: 14px; margin-top: 6px; }
          .cdcb-cd-divider { height: clamp(36px, 5vw, 52px); }
        }
      `}</style>
    </section>
  );
}
