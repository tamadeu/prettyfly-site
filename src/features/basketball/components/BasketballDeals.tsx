'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

/* Live countdown — targets a far-future date so it keeps ticking. */
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
    <div className="bbdeals-countdown">
      {[
        { val: String(time.days), label: 'Days' },
        { val: pad(time.hours),   label: 'Hrs'  },
        { val: pad(time.minutes), label: 'Min'  },
        { val: pad(time.seconds), label: 'Sec'  },
      ].map(({ val, label }) => (
        <div key={label} className="bbdeals-cd-cell">
          <span className="bbdeals-cd-val">{val}</span>
          <span className="bbdeals-cd-lbl">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function BasketballDeals() {
  return (
    <section className="bbdeals-section">
      <div className="bbdeals-img-wrap">
        <Image
          src="/basketball/img-with-text/img-with-text-1.webp"
          alt="Deals of the day"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
          sizes="100vw"
        />
      </div>

      <div className="bbdeals-content container-main">
        <div className="bbdeals-text">
          <h2 className="bbdeals-heading">Deals of the day</h2>
          <p className="bbdeals-desc">
            Pair text with an image to focus on your chosen product, collection, or blog post.
          </p>
          <CountdownTimer />
          <Link href="/shop" className="bbdeals-cta">
            SHOP NOW
            <IconChevronRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        .bbdeals-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: #e6edf0;
        }
        .bbdeals-img-wrap { position: absolute; inset: 0; }
        .bbdeals-content {
          position: relative;
          z-index: 2;
          min-height: 640px;
          display: flex;
          align-items: center;
        }
        .bbdeals-text { max-width: 460px; }
        .bbdeals-heading {
          font-size: clamp(26px, 3vw, 36px);
          font-weight: 700;
          color: #1f2730;
          margin-bottom: 14px;
        }
        .bbdeals-desc {
          font-size: clamp(14px, 1.1vw, 16px);
          color: #5a6470;
          line-height: 1.6;
          margin-bottom: 26px;
          max-width: 420px;
        }

        .bbdeals-countdown {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 28px;
        }
        .bbdeals-cd-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #c2ccd2;
          border-radius: 4px;
          background: transparent;
          width: 62px;
          height: 62px;
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .bbdeals-cd-val {
          font-size: 20px;
          font-weight: 700;
          color: #1f2730;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .bbdeals-cd-lbl {
          font-size: 12px;
          font-weight: 400;
          color: #6b7681;
          margin-top: 5px;
          line-height: 1;
        }

        .bbdeals-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 14.5px 29.5px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 200ms ease, transform 200ms ease;
        }
        .bbdeals-cta:hover { background-color: #333; transform: translateY(-2px); }

        @media (max-width: 749px) {
          .bbdeals-section { background-color: #e6edf0; }
          .bbdeals-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(220px, 55vw, 360px);
          }
          .bbdeals-content {
            min-height: auto;
            padding-top: 28px;
            padding-bottom: 36px;
          }
          .bbdeals-text { max-width: 100%; }
          .bbdeals-cd-cell { width: 56px; height: 56px; }
          .bbdeals-cd-val { font-size: 17px; }
        }
      `}</style>
    </section>
  );
}
