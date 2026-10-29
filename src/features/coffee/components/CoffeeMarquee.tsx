'use client';

/* Forked from Jewelry2Marquee's scrolling-track structure, but with an
   inline star-accordion SVG instead of the Jewelry-2 /scrooling-img/ image
   assets, which don't exist for Coffee. Matches the screenshot: a single
   consistent outlined-star icon between every item, alternating solid text
   with stroke-only text. */

const REPEAT = 14;
const TEXT = 'A Personal Touch';

function StarIcon() {
  return (
    <svg
      className="icon icon-accordion"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width={50}
      height={50}
    >
      <path
        fillRule="evenodd"
        d="M10 2.62639L8.54072 7.33639C8.34848 7.95687 7.79714 8.37696 7.17504 8.37696H2.45272L6.27316 11.2879C6.77645 11.6714 6.98704 12.3511 6.7948 12.9716L5.33552 17.6816L9.15596 14.7706C9.65925 14.3872 10.3408 14.3872 10.844 14.7706L14.6645 17.6816L13.2052 12.9716C13.013 12.3511 13.2236 11.6714 13.7268 11.2879L17.5473 8.37696H12.825C12.2029 8.37696 11.6515 7.95687 11.4593 7.33639L10 2.62639ZM10.4552 0.846855C10.3119 0.384382 9.68806 0.384382 9.54477 0.846855L7.63027 7.02616C7.56619 7.23298 7.38241 7.37301 7.17504 7.37301H0.979572C0.515888 7.37301 0.323098 7.99527 0.698226 8.28109L5.71047 12.1001C5.87823 12.2279 5.94843 12.4545 5.88435 12.6613L3.96984 18.8406C3.82656 19.3031 4.33129 19.6877 4.70642 19.4019L9.71865 15.5828C9.88642 15.455 10.1136 15.455 10.2813 15.5828L15.2936 19.4019C15.6687 19.6877 16.1734 19.3031 16.0302 18.8406L14.1157 12.6613C14.0516 12.4545 14.1218 12.2279 14.2895 12.1001L19.3018 8.28109C19.6769 7.99527 19.4841 7.37301 19.0204 7.37301H12.825C12.6176 7.37301 12.4338 7.23298 12.3697 7.02616L10.4552 0.846855Z"
      />
    </svg>
  );
}

const VARIANTS = [
  { textClass: 'cfmq-text-solid' },
  { textClass: 'cfmq-text-stroke' },
];

export function CoffeeMarquee() {
  const items = Array.from({ length: REPEAT });

  return (
    <section className="cfmq-section" aria-hidden="true">
      <div className="cfmq-track">
        {[0, 1].map((set) => (
          <div key={set} className="cfmq-inner" aria-hidden={set === 1 ? true : undefined}>
            {items.map((_, i) => {
              const v = VARIANTS[i % VARIANTS.length];
              return (
                <span key={i} className="cfmq-item">
                  <span className="cfmq-star"><StarIcon /></span>
                  <span className={`cfmq-text ${v.textClass}`}>{TEXT}</span>
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <style>{`
        .cfmq-section {
          overflow: hidden;
          background: transparent;
          height: 170px;
          display: flex;
          align-items: center;
        }
        .cfmq-section:hover .cfmq-track { animation-play-state: paused; }

        .cfmq-track {
          display: flex;
          width: max-content;
          animation: cfMarqScroll 45s linear infinite;
          will-change: transform;
        }
        .cfmq-inner { display: flex; align-items: center; flex-shrink: 0; }

        .cfmq-item {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          padding: 0 32px;
          white-space: nowrap;
        }
        .cfmq-star {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          color: #c8874a;
          flex-shrink: 0;
        }
        .cfmq-star svg { display: block; }

        .cfmq-text {
          font-size: 50px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .cfmq-text-solid { color: #2a2118; }
        .cfmq-text-stroke {
          color: #0000;
          -webkit-text-stroke: 0.09rem #2a2118;
          text-stroke: 0.09rem #2a2118;
        }

        @keyframes cfMarqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
