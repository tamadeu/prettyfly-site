'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { petFoodProducts } from '@/data/pet-food-products';

const END_DATE = new Date('2027-10-04T12:00:00Z');

function getRemaining() {
  const now = new Date();
  const diff = Math.max(0, END_DATE.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff % 86400000) / 3600000);
  const min = Math.floor((diff % 3600000) / 60000);
  const sec = Math.floor((diff % 60000) / 1000);
  return { days, hrs, min, sec };
}

const thumbs = petFoodProducts.slice(0, 3);

export function PetFoodCountdown() {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { value: t.days, label: 'Days' },
    { value: t.hrs, label: 'Hrs' },
    { value: t.min, label: 'Min' },
    { value: t.sec, label: 'Sec' },
  ];

  return (
    <section className="pf-count-section">
      <div className="container-main">
        <div className="pf-count-card">
          <div className="pf-count-thumbs">
            {thumbs.map((p) => (
              <div key={p.id} className="pf-count-thumb">
                <Image src={p.images[0]?.src || ''} alt={p.name} fill style={{ objectFit: 'contain' }} sizes="(min-width: 992px) 105px, 80px" />
              </div>
            ))}
          </div>

          <div className="pf-count-text">
            <p className="pf-count-title">Limited Stock,</p>
            <p className="pf-count-subtitle">Unbeatable prices!</p>
            <p className="pf-count-tag">Limited only up to 60%!</p>
          </div>

          <div className="pf-count-clock">
            {cells.map((c, i) => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="pf-count-cell">
                  <span className="pf-count-val">{String(c.value).padStart(2, '0')}</span>
                  <span className="pf-count-lbl">{c.label}</span>
                </div>
                {i < cells.length - 1 && (
                  <span className="pf-count-sep" aria-hidden="true">
                    <span className="pf-count-sep-dot" />
                    <span className="pf-count-sep-dot" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .pf-count-section { padding: 0; }
        /* Mobile base (0–749px): stacked image → content → countdown, all
           centered, everything inside the section padding. Sizes use clamp()
           so they scale fluidly without overflowing. */
        .pf-count-card {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-items: center;
          text-align: center;
          gap: clamp(14px, 3vw, 24px);
          padding: clamp(18px, 4vw, 28px);
          background: #ccf3ff;
          border-radius: 12px;
          min-height: 160px;
          box-sizing: border-box;
          overflow: hidden;
        }
        /* Thumbnails — clean, no backdrop chip. Shrink fluidly so the row
           never spills past the card width. */
        .pf-count-thumbs {
          display: flex;
          gap: clamp(8px, 2vw, 14px);
          justify-content: center;
          flex-wrap: nowrap;
          max-width: 100%;
        }
        .pf-count-thumb {
          position: relative;
          width: clamp(54px, 14vw, 80px);
          height: clamp(54px, 14vw, 80px);
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 1;
        }
        .pf-count-text { text-align: center; max-width: 100%; }
        .pf-count-title {
          font-size: clamp(16px, 4.2vw, 20px);
          font-weight: 800;
          color: rgb(10, 66, 83);
          line-height: 1.2;
        }
        /* 2nd and 3rd lines share the same style — medium weight, matched size */
        .pf-count-subtitle,
        .pf-count-tag {
          font-size: clamp(13px, 3.6vw, 16px);
          font-weight: 500;
          color: rgb(10, 66, 83);
          line-height: 1.35;
          margin: 0;
        }
        /* Countdown: horizontal row of 4 cells + separators. Allow wrap as
           a safety valve on tiny viewports but prefer a single row. */
        .pf-count-clock {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.8vw, 14px);
          justify-content: center;
          flex-shrink: 0;
          flex-wrap: nowrap;
          max-width: 100%;
        }
        .pf-count-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: clamp(44px, 12vw, 60px);
          flex-shrink: 1;
        }
        /* Softer numbers — was 800, dropped to 600 */
        .pf-count-val {
          font-size: clamp(18px, 5.2vw, 26px);
          font-weight: 600;
          color: rgb(10, 66, 83);
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .pf-count-lbl {
          font-size: clamp(10px, 2.8vw, 13px);
          font-weight: 500;
          color: rgb(10, 66, 83);
          margin-top: 5px;
          text-transform: capitalize;
        }
        /* Colon-style separator — symmetric top + bottom dots. Horizontal
           margin scales so the separators don't hog the limited width. */
        .pf-count-sep {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0 clamp(2px, 0.8vw, 10px);
          /* Align the pair with the digit baseline (label sits below the digit,
             so shift up a touch to center between digit rows). */
          transform: translateY(-7px);
        }
        .pf-count-sep-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgb(10, 66, 83);
          display: block;
        }

        @media (min-width: 750px) {
          .pf-count-thumb { width: 90px; height: 90px; }
          .pf-count-title { font-size: 22px; }
          .pf-count-subtitle,
          .pf-count-tag { font-size: 17px; }
          .pf-count-val { font-size: 28px; }
          .pf-count-sep { gap: 9px; }
          .pf-count-sep-dot { width: 5px; height: 5px; }
          .pf-count-cell { min-width: 66px; }
          .pf-count-clock { gap: 16px; }
        }

        /* ≥ 992px — lock to exactly 160px, 3-col strip layout */
        @media (min-width: 992px) {
          .pf-count-card {
            grid-template-columns: auto 1fr auto;
            justify-items: stretch;
            text-align: left;
            gap: 28px;
            padding: 20px 40px;
            height: 160px;
            min-height: 160px;
          }
          .pf-count-text { text-align: left; }
          .pf-count-thumbs { gap: 16px; justify-content: flex-start; }
          .pf-count-thumb { width: 105px; height: 105px; }
          .pf-count-title { font-size: 24px; }
          .pf-count-subtitle,
          .pf-count-tag { font-size: 18px; }
          .pf-count-val { font-size: 32px; }
          .pf-count-sep { margin: 0 12px; gap: 10px; transform: translateY(-8px); }
          .pf-count-sep-dot { width: 5px; height: 5px; }
          .pf-count-lbl { font-size: 14px; margin-top: 6px; }
          .pf-count-cell { min-width: 72px; }
          .pf-count-clock { gap: 18px; }
        }

        /* 992–1199px — left half stacks thumbs over text; right half holds the clock.
           Card grows to 280px to fit the stacked left column comfortably. */
        @media (min-width: 992px) and (max-width: 1199px) {
          .pf-count-card {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
              "thumbs clock"
              "text   clock";
            column-gap: 28px;
            row-gap: 18px;
            padding: 30px 36px;
            height: 280px;
            min-height: 280px;
            align-items: start;
          }
          .pf-count-thumbs { grid-area: thumbs; align-self: end; }
          .pf-count-text   { grid-area: text;   align-self: start; }
          .pf-count-clock  {
            grid-area: clock;
            align-self: center;
            justify-self: start;
          }
        }
      `}</style>
    </section>
  );
}
