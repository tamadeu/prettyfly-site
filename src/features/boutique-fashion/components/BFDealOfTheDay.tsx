'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const END_DATE = new Date('2027-01-01T00:00:00Z');

function getRemaining() {
  const diff = Math.max(0, END_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hrs:  Math.floor((diff % 86400000) / 3600000),
    min:  Math.floor((diff % 3600000)  / 60000),
    sec:  Math.floor((diff % 60000)    / 1000),
  };
}

function IconChevronRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function BFDealOfTheDay() {
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

  return (
    <section className="bfdod-section">
      {/* Full-bleed image — same pattern as hero slider */}
      <div className="bfdod-img-wrap">
        <Image
          src="/boutique-fashion/deal-of-the-day/bg-banner1.webp"
          alt="Deal of the Day"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Content overlay — left-aligned, on top of image */}
      <div className="bfdod-overlay container-main">
        <div className="bfdod-content">
          <h2 className="bfdod-title">Deal of The Day</h2>
          <p className="bfdod-copy">
            Explore our considered collection for the new season.
          </p>

          {/* Countdown — each cell has its own individual border */}
          <div className="bfdod-clock">
            {cells.map((c) => (
              <div key={c.label} className="bfdod-cell">
                <span className="bfdod-val">{c.value}</span>
                <span className="bfdod-lbl">{c.label}</span>
              </div>
            ))}
          </div>

          <Link href="/boutique-fashion/shop" className="bfdod-cta">
            Shop now <IconChevronRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        /* ── Section — full-bleed, 630px ── */
        .bfdod-section {
          position: relative;
          width: 100%;
          height: 630px;
          overflow: hidden;
        }
        .bfdod-img-wrap {
          position: absolute;
          inset: 0;
        }

        /* ── Overlay — same pattern as hero slide content ── */
        .bfdod-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .bfdod-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 480px;
        }

        /* ── Typography ── */
        .bfdod-title {
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .bfdod-copy {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 26px;
        }

        /* ── Countdown — 4 separate individually-bordered boxes ── */
        .bfdod-clock {
          display: inline-flex;
          gap: 10px;
          margin-bottom: 36px;
        }
        .bfdod-cell {
          padding: 12px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          min-width: 72px;
          border: 1.5px solid #ccc;
          border-radius: 4px;
          background: transparent;
        }
        .bfdod-val {
          font-size: 24px;
          font-weight: 700;
          color: #111;
          line-height: 1;
          display: block;
          text-align: center;
        }
        .bfdod-lbl {
          font-size: 12px;
          font-weight: 400;
          color: #888;
          letter-spacing: 0.2px;
        }

        /* ── CTA — rectangular black button ── */
        .bfdod-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 13px 26px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 200ms ease;
        }
        .bfdod-cta:hover { background: #333; }

        /* ── Mobile ── */
        @media (max-width: 749px) {
          .bfdod-section { height: auto; }
          .bfdod-img-wrap { position: relative; inset: auto; height: clamp(280px, 65vw, 420px); }
          .bfdod-overlay {
            position: static;
            inset: auto;
            padding-block: 36px 48px;
            align-items: flex-start;
          }
          .bfdod-content { max-width: 100%; }
          .bfdod-title { font-size: clamp(22px, 6vw, 28px); }
          .bfdod-cell { min-width: 60px; padding: 10px 14px; }
          .bfdod-val { font-size: 20px; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .bfdod-section { height: 480px; }
          .bfdod-cell { min-width: 62px; padding: 10px 16px; }
          .bfdod-val { font-size: 21px; }
        }
      `}</style>
    </section>
  );
}
