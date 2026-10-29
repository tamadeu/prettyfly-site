'use client';

const REPEAT = 14;
const TEXT = 'Welcome to store';

function IconSparkle({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z" />
    </svg>
  );
}

/* Alternating solid-fill / stroke-only text, matching the reference screenshot
   (each [star, text] pair alternates as one unit across the strip). */
const VARIANTS = ['cdmq-text-solid', 'cdmq-text-stroke'];

export function CraftDecoreMarquee() {
  const items = Array.from({ length: REPEAT });

  return (
    <section className="cdmq-section" aria-hidden="true">
      <div className="cdmq-track">
        {[0, 1].map((set) => (
          <div key={set} className="cdmq-inner" aria-hidden={set === 1 ? true : undefined}>
            {items.map((_, i) => (
              <span key={i} className="cdmq-item">
                <span className="cdmq-star">
                  <IconSparkle size={20} />
                </span>
                <span className={`cdmq-text ${VARIANTS[i % VARIANTS.length]}`}>{TEXT}</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .cdmq-section {
          overflow: hidden;
          background: #f4efe6;
          height: 90px;
          display: flex;
          align-items: center;
        }
        .cdmq-section:hover .cdmq-track { animation-play-state: paused; }

        .cdmq-track {
          display: flex;
          width: max-content;
          animation: cdMarqScroll 30s linear infinite;
          will-change: transform;
        }
        .cdmq-inner { display: flex; align-items: center; flex-shrink: 0; }

        .cdmq-item {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 0 20px;
          white-space: nowrap;
        }
        .cdmq-star {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          flex-shrink: 0;
          color: #a9673f;
        }

        .cdmq-text {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 0.01em;
        }
        .cdmq-text-solid {
          color: #171712;
        }
        .cdmq-text-stroke {
          color: #0000;
          -webkit-text-stroke: 0.06rem #171712;
          text-stroke: 0.06rem #171712;
        }

        @keyframes cdMarqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (min-width: 750px) {
          .cdmq-section { height: 110px; }
        }
      `}</style>
    </section>
  );
}
