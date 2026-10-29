'use client';

import Image from 'next/image';

const REPEAT = 14;
const TEXT = 'A Personal Touch';

/* Alternating star images from /public/jewelry-2/scrooling-img/ (folder name
   typo preserved — the files exist on disk with this exact name, per project
   convention of not "fixing" asset folder names). Per the reference
   screenshot each [icon, text] pair alternates as one unit:
     Star_2 (large 4-point sparkle) + normal solid-fill text
     Star_1 (smaller dense sunburst) + a hollow "stroke-only" text (transparent
       fill + text-stroke outline — confirmed via the reference DevTools
       inspector showing `color: #0000` + `-webkit-text-stroke`)
   repeated across the strip. */
const VARIANTS = [
  { src: '/jewelry-2/scrooling-img/Star_2.png', size: 110, textClass: 'jzmq-text-solid' },
  { src: '/jewelry-2/scrooling-img/Star_1.webp', size: 76, textClass: 'jzmq-text-stroke' },
];

export function Jewelry2Marquee() {
  const items = Array.from({ length: REPEAT });

  return (
    <section className="jzmq-section" aria-hidden="true">
      <div className="jzmq-track">
        {[0, 1].map((set) => (
          <div key={set} className="jzmq-inner" aria-hidden={set === 1 ? true : undefined}>
            {items.map((_, i) => {
              const v = VARIANTS[i % VARIANTS.length];
              return (
                <span key={i} className="jzmq-item">
                  <span className="jzmq-star">
                    <Image src={v.src} alt="" width={v.size} height={v.size} />
                  </span>
                  <span className={`jzmq-text ${v.textClass}`}>{TEXT}</span>
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <style>{`
        .jzmq-section {
          overflow: hidden;
          background: rgb(250, 244, 235);
          height: 165px;
          display: flex;
          align-items: center;
        }
        .jzmq-section:hover .jzmq-track { animation-play-state: paused; }

        .jzmq-track {
          display: flex;
          width: max-content;
          animation: jzMarqScroll 35s linear infinite;
          will-change: transform;
        }
        .jzmq-inner { display: flex; align-items: center; flex-shrink: 0; }

        .jzmq-item {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          padding: 0 28px;
          white-space: nowrap;
        }
        .jzmq-star { display: inline-flex; align-items: center; justify-content: center; line-height: 0; flex-shrink: 0; }
        .jzmq-star img { display: block; }

        .jzmq-text {
          font-family: var(--font-playfair, 'Playfair Display'), serif;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .jzmq-text-solid {
          color: #171717;
        }
        .jzmq-text-stroke {
          color: #0000;
          -webkit-text-stroke: 0.1rem #171717;
          text-stroke: 0.1rem #171717;
        }

        @keyframes jzMarqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
