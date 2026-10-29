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

  const cells = [
    { val: String(time.days),    label: 'Days' },
    { val: String(time.hours),   label: 'Hrs'  },
    { val: String(time.minutes), label: 'Min'  },
    { val: String(time.seconds), label: 'Sec'  },
  ];

  return (
    <div className="pllto-countdown">
      {cells.map(({ val, label }, i) => (
        <div key={label} className="pllto-cd-group">
          <div className="pllto-cd-cell">
            <span className="pllto-cd-val">{val}</span>
            <span className="pllto-cd-lbl">{label}</span>
          </div>
          {i < cells.length - 1 && <span className="pllto-cd-sep">:</span>}
        </div>
      ))}
    </div>
  );
}

export function PlumbingLimitedTimeOffer() {
  return (
    <section className="pllto-section">
      <div className="container-main">
        <div className="pllto-card">
        <div className="pllto-grid">
          <h2 className="pllto-heading">
            Limited Time Offer With Up To 40% Off
            <br />
            On Your Favorite Products!
          </h2>

          <div className="pllto-cta-wrap">
            <Link
              href="/shop"
              className="pllto-cta"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#061a30'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0a2540'; }}
            >
              Shop Now
              <IconArrowRight size={19} />
            </Link>
          </div>

          <CountdownTimer />
        </div>
        </div>
      </div>

      <style>{`
        .pllto-section { padding: 40px 0; }
        .pllto-card {
          background-color: #f3f5f7;
          border-radius: 12px;
          padding: clamp(24px, 6vw, 36px) clamp(18px, 5vw, 28px);
        }
        .pllto-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
        }
        .pllto-heading {
          font-size: clamp(22px, 5vw, 32px);
          font-weight: 700;
          color: #1c2230;
          line-height: 1.3;
        }
        .pllto-cta {
          display: inline-flex;
          align-items: center;
          gap: clamp(6px, 1.6vw, 9px);
          background-color: #0a2540;
          color: #fff;
          font-size: clamp(14px, 3.4vw, 17px);
          font-weight: 500;
          padding: clamp(11px, 2.6vw, 15px) clamp(20px, 4.5vw, 30px);
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 250ms ease;
          white-space: nowrap;
        }
        /* Icon scales with the button text (1.12em ≈ the desktop 19px @ 17px). */
        .pllto-cta svg { width: 1.12em; height: 1.12em; }

        .pllto-countdown { display: flex; align-items: center; gap: clamp(5px, 1.8vw, 12px); }
        .pllto-cd-group { display: flex; align-items: center; gap: clamp(5px, 1.8vw, 12px); }
        .pllto-cd-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: clamp(38px, 11vw, 56px);
        }
        .pllto-cd-val {
          font-size: clamp(20px, 6vw, 42px);
          font-weight: 700;
          color: #1c2230;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .pllto-cd-lbl { font-size: clamp(11px, 3vw, 14px); color: #9aa0a8; margin-top: clamp(6px, 2vw, 9px); }
        .pllto-cd-sep {
          font-size: clamp(14px, 3.4vw, 30px);
          font-weight: 400;
          color: #c2c8d0;
          transform: translateY(clamp(-13px, -2.2vw, -8px));
        }

        @media (min-width: 992px) {
          .pllto-card {
            height: 280px;
            padding: 0 48px;
            display: flex;
            align-items: center;
          }
          .pllto-grid {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-areas: "heading countdown" "cta countdown";
            align-items: center;
            text-align: left;
            gap: 26px 40px;
          }
          .pllto-heading { grid-area: heading; font-size: 32px; align-self: end; }
          .pllto-cta-wrap { grid-area: cta; align-self: start; }
          .pllto-countdown { grid-area: countdown; justify-self: end; }
        }
      `}</style>
    </section>
  );
}
