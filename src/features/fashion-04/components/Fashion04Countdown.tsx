'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

/* Same live countdown as the Default Fashion homepage's Limited Time Offer
   promo banner — Days/Hrs/Min/Sec cells ticking down to 2029-01-01. */
function Countdown() {
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
    <div className="f4cd-timer">
      {[
        { val: String(time.days), label: 'Days' },
        { val: pad(time.hours),   label: 'Hrs'  },
        { val: pad(time.minutes), label: 'Min'  },
        { val: pad(time.seconds), label: 'Sec'  },
      ].map(({ val, label }) => (
        <div key={label} className="f4cd-cell">
          <span className="f4cd-val">{val}</span>
          <span className="f4cd-lbl">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function Fashion04Countdown() {
  return (
    <section>
      <div className="container-main">
        <div className="f4cd-bar">
          <div className="f4cd-text">
            <h3 className="f4cd-heading">Countdown timer</h3>
            <p className="f4cd-desc">
              Pair text with an image to focus on your chosen product, collection, or blog post.
            </p>
          </div>

          <div className="f4cd-center">
            <Countdown />
          </div>

          <div className="f4cd-cta-wrap">
            <Link href="/shop" className="f4cd-cta">
              Shop Now
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .f4cd-bar {
          background-color: #f6f8fa;
          padding: clamp(28px, 4vw, 44px) clamp(20px, 4vw, 56px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }
        .f4cd-heading {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 700;
          color: #222;
          margin-bottom: 10px;
        }
        .f4cd-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
          max-width: 360px;
        }
        .f4cd-timer { display: flex; gap: 8px; align-items: center; }
        .f4cd-cell {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          border: 1px solid #d4d4d4; border-radius: 4px;
          width: 60px; height: 58px; box-sizing: border-box; flex-shrink: 0;
        }
        .f4cd-val { font-size: 19px; font-weight: 600; color: #222; line-height: 1; font-variant-numeric: tabular-nums; }
        .f4cd-lbl { font-size: 11px; font-weight: 400; color: #888; margin-top: 4px; line-height: 1; }

        .f4cd-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 16px; font-weight: 600; color: #222;
          text-decoration: none;
          border-bottom: 1.5px solid #222;
          padding-bottom: 3px;
          transition: color 200ms ease, border-color 200ms ease;
        }
        .f4cd-cta:hover { color: #F15B41; border-color: #F15B41; }

        /* Desktop: 3-column bar — text | countdown | cta */
        @media (min-width: 992px) {
          .f4cd-bar {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            text-align: left;
            gap: 32px;
          }
          .f4cd-center { display: flex; justify-content: center; }
          .f4cd-cta-wrap { display: flex; justify-content: flex-end; }
          .f4cd-heading { margin-bottom: 12px; }
        }
      `}</style>
    </section>
  );
}
