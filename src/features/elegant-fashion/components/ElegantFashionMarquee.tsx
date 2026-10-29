'use client';

import Image from 'next/image';

/* All 6 images from the scrolling img folder — used exactly as provided */
const scrollImages = [
  '/elegant-fashion/scrolling/scrolling1.webp',
  '/elegant-fashion/scrolling/scrolling2.webp',
  '/elegant-fashion/scrolling/scrolling3.webp',
  '/elegant-fashion/scrolling/scrolling4.webp',
  '/elegant-fashion/scrolling/scrolling5.webp',
  '/elegant-fashion/scrolling/scrolling6.webp',
];

const topLabels = ['JACKET', 'SUMMER', 'KNITWEAR', 'BLAZER', 'T-SHIRT', 'DRESS'];

/* Single phrase repeated — alternating normal / outlined creates the two-tone effect */
const bottomLabels = [
  'LIMITED-TIME FASHION DISCOUNTS!',
  'LIMITED-TIME FASHION DISCOUNTS!',
  'LIMITED-TIME FASHION DISCOUNTS!',
  'LIMITED-TIME FASHION DISCOUNTS!',
  'LIMITED-TIME FASHION DISCOUNTS!',
  'LIMITED-TIME FASHION DISCOUNTS!',
];

/* One set: text (alternating outlined) → pill image → text → pill image … */
const topSet = topLabels.flatMap((label, i) => [
  { kind: 'text' as const, label, outlined: i % 2 !== 0 },
  { kind: 'image' as const, src: scrollImages[i], alt: label },
]);

/* Duplicate both tracks for seamless infinite loop */
const topTrack    = [...topSet,       ...topSet];
const bottomTrack = [...bottomLabels, ...bottomLabels, ...bottomLabels];

export function ElegantFashionMarquee() {
  return (
    <section className="efmq-section">

      {/* ── Top strip: text + pill images ── */}
      <div className="efmq-strip efmq-strip-top">
        <div className="efmq-track efmq-track-fwd" aria-hidden="true">
          {topTrack.map((item, i) =>
            item.kind === 'text' ? (
              <span key={i} className={`efmq-top-text${item.outlined ? ' efmq-outlined' : ''}`}>
                {item.label}
              </span>
            ) : (
              <span key={i} className="efmq-pill">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="72px"
                />
              </span>
            )
          )}
        </div>
      </div>

      {/* ── Bottom strip: text only, alternating normal / outlined ── */}
      <div className="efmq-strip efmq-strip-bottom">
        <div className="efmq-track efmq-track-rev" aria-hidden="true">
          {bottomTrack.map((label, i) => (
            <span key={i} className="efmq-bottom-item">
              <span className={`efmq-bottom-text${i % 2 !== 0 ? ' efmq-outlined' : ''}`}>
                {label}
              </span>
              <span className="efmq-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes efmqFwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes efmqRev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        .efmq-section {
          overflow: hidden;
          background: #fff;
        }

        .efmq-strip {
          overflow: hidden;
          white-space: nowrap;
        }
        .efmq-strip-top    { padding: 20px 0; }
        .efmq-strip-bottom { padding: 16px 0; }

        .efmq-track {
          display: inline-flex;
          align-items: center;
          gap: clamp(20px, 3vw, 40px);
          will-change: transform;
        }
        /* Scrolling speeds */
        .efmq-track-fwd { animation: efmqFwd 24s linear infinite; }
        .efmq-track-rev { animation: efmqRev 24s linear infinite; }
        .efmq-strip:hover .efmq-track { animation-play-state: paused; }

        /* Top row text */
        .efmq-top-text {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #111;
          white-space: nowrap;
          flex-shrink: 0;
          line-height: 1;
        }

        /* Outlined / stroked variant — exact spec */
        .efmq-outlined {
          color: transparent;
          -webkit-text-stroke-color: rgba(var(--color-foreground));
          -webkit-text-stroke-width: .1rem;
        }

        /* Pill-shaped landscape images — width wide, height = text cap-height */
        .efmq-pill {
          position: relative;
          width: clamp(100px, 10vw, 140px);
          height: clamp(44px, 4.2vw, 56px);
          border-radius: 9999px;
          overflow: hidden;
          flex-shrink: 0;
          display: inline-block;
          vertical-align: middle;
        }

        /* Bottom row */
        .efmq-bottom-item {
          display: inline-flex;
          align-items: center;
          gap: clamp(16px, 2vw, 28px);
          flex-shrink: 0;
        }
        .efmq-bottom-text {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #111;
          white-space: nowrap;
        }
        .efmq-dot {
          color: #bbb;
          font-size: 20px;
          flex-shrink: 0;
        }

        @media (min-width: 750px) {
          .efmq-strip-top    { padding: 24px 0; }
          .efmq-strip-bottom { padding: 18px 0; }
        }
        @media (min-width: 992px) {
          .efmq-strip-top    { padding: 28px 0; }
          .efmq-strip-bottom { padding: 20px 0; }
        }
      `}</style>
    </section>
  );
}
