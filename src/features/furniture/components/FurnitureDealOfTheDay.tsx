'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const END_DATE = new Date('2027-12-31T23:59:59Z');

function getRemaining() {
  const diff = Math.max(0, END_DATE.getTime() - Date.now());
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hrs  = Math.floor((totalSec % 86400) / 3600);
  const min  = Math.floor((totalSec % 3600) / 60);
  const sec  = totalSec % 60;
  return { days, hrs, min, sec };
}

function CountCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="fudd-cell">
      <span className="fudd-num">{value}</span>
      <span className="fudd-label">{label}</span>
    </div>
  );
}

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3647L8.22192 16.9505L13.1717 12.0007Z" />
    </svg>
  );
}

export function FurnitureDealOfTheDay() {
  const [time, setTime] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="fudd-section">
      <div className="container-main fudd-container">
        <div className="fudd-inner">

          {/* Left: heading */}
          <div className="fudd-text">
            <h2 className="fudd-heading">
              Limited Time Offer With Up To 40%<br />
              Off On Your Favorite Products!
            </h2>
          </div>

          {/* Center: countdown */}
          <div className="fudd-countdown">
            <CountCell value={time.days} label="Days" />
            <CountCell value={time.hrs}  label="Hrs" />
            <CountCell value={time.min}  label="Min" />
            <CountCell value={time.sec}  label="Sec" />
          </div>

          {/* Right: CTA */}
          <div className="fudd-cta-wrap">
            <Link href="/shop" className="fudd-cta">
              Shop now <IconArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        .fudd-section {
          background: rgb(244, 249, 252);
        }
        .fudd-container {
          display: flex;
          align-items: center;
          padding-block: 40px;
        }
        .fudd-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        /* ── Heading ── */
        .fudd-heading {
          font-size: clamp(16px, 2.8vw, 22px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.4;
          margin: 0;
        }

        /* ── Countdown ── */
        .fudd-countdown {
          display: flex;
          align-items: stretch;
          gap: 8px;
        }
        .fudd-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 1.5px solid #c8c8c8;
          width: 74px;
          height: 74px;
          flex-shrink: 0;
        }
        .fudd-num {
          font-size: clamp(20px, 3.2vw, 28px);
          font-weight: 700;
          color: #111;
          line-height: 1;
        }
        .fudd-label {
          font-size: 12px;
          font-weight: 400;
          color: #888;
          letter-spacing: 0.02em;
        }

        /* ── CTA button ── */
        .fudd-cta-wrap { display: flex; justify-content: center; }
        .fudd-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 400;
          padding: 14px 28px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 220ms ease;
        }
        .fudd-cta:hover { background: #c8a45a; }

        /* ── Mobile: scale cells to fit any viewport ≥ 320px ── */
        @media (max-width: 749px) {
          .fudd-cell {
            width: clamp(58px, 18vw, 74px);
            height: clamp(58px, 18vw, 74px);
          }
          .fudd-countdown { gap: clamp(5px, 1.8vw, 8px); }
        }

        /* ── Desktop: row layout ── */
        @media (min-width: 750px) {
          .fudd-container { height: 240px; padding-block: 0; }
          .fudd-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            gap: 32px;
          }
          .fudd-text { max-width: 380px; flex-shrink: 0; }
          .fudd-cta-wrap { justify-content: flex-end; flex-shrink: 0; }
          .fudd-heading { font-size: clamp(17px, 2vw, 22px); }
        }
      `}</style>
    </section>
  );
}
