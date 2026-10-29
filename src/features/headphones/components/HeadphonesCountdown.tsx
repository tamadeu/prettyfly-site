'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const pad = (n: number) => String(n).padStart(2, '0');

function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2029-01-01T00:00:00').getTime();
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
    <div className="hp-cdt-wrap">
      {[
        { val: String(time.days), label: 'Days' },
        { val: pad(time.hours),   label: 'Hrs'  },
        { val: pad(time.minutes), label: 'Min'  },
        { val: pad(time.seconds), label: 'Sec'  },
      ].map(({ val, label }) => (
        <div key={label} className="hp-cdt-cell">
          <span className="hp-cdt-val">{val}</span>
          <span className="hp-cdt-lbl">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function HeadphonesCountdown() {
  return (
    <section className="hp-cd-section">
      <div className="container-main hp-cd-inner">

        {/* Left: text */}
        <div className="hp-cd-left">
          <h2
            style={{
              fontSize: 'clamp(18px, 2.2vw, 30px)',
              fontWeight: 700,
              color: '#fff',
              margin: '0 0 clamp(6px, 0.8vw, 12px)',
              lineHeight: 1.2,
            }}
          >
            Limited Stock, Shop Now!
          </h2>
          <p
            style={{
              fontSize: 'clamp(12px, 1vw, 15px)',
              color: 'rgba(255,255,255,0.7)',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Grab the hottest electronics at unbeatable prices!
            <br />
            <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Limited time only</strong>
            {' '}— save up to 60% now!
          </p>
        </div>

        {/* Center: countdown timer */}
        <div className="hp-cd-timer">
          <CountdownTimer />
        </div>

        {/* Right: CTA */}
        <div className="hp-cd-right">
          <Link
            href="/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#fff',
              color: '#111',
              fontSize: 'clamp(12px, 1vw, 15px)',
              fontWeight: 600,
              padding: 'clamp(10px, 1vw, 14px) clamp(20px, 2vw, 32px)',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'background-color 250ms ease, color 250ms ease, transform 200ms ease',
              minHeight: '44px',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.85)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Shop Collection
            <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3647L8.22192 16.9505L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .hp-cd-section {
          background: #1a1e2e;
          padding: clamp(28px, 4vw, 56px) 0;
        }

        /* ── Layout: mobile stacked ── */
        .hp-cd-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(20px, 3vw, 32px);
        }

        /* ── Countdown: fixed-size cells (no layout shift) ── */
        .hp-cdt-wrap {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .hp-cdt-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 4px;
          /* Fixed dimensions prevent any resize when numbers tick */
          width: 60px;
          height: 58px;
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .hp-cdt-val {
          font-size: 19px;
          font-weight: 600;
          color: #fff;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .hp-cdt-lbl {
          font-size: 11px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 4px;
          line-height: 1;
        }

        /* ── Desktop: row layout ── */
        @media (min-width: 992px) {
          .hp-cd-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .hp-cd-left  { flex: 1; }
          .hp-cd-timer { flex: 0 0 auto; margin-right: 80px; }
          .hp-cd-right { flex: 0 0 auto; }
          .hp-cdt-cell { width: 66px; height: 64px; }
          .hp-cdt-val  { font-size: 21px; }
          .hp-cdt-lbl  { font-size: 12px; }
        }

        /* ── Small phones ── */
        @media (max-width: 480px) {
          .hp-cdt-wrap { gap: 6px; }
          .hp-cdt-cell { width: 52px; height: 52px; }
          .hp-cdt-val  { font-size: 16px; }
          .hp-cdt-lbl  { font-size: 10px; }
        }
      `}</style>
    </section>
  );
}
