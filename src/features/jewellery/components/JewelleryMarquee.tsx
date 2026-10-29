'use client';

const REPEAT = 14;
const TEXT = 'Welcome to store';

export function JewelleryMarquee() {
  const items = Array.from({ length: REPEAT });

  return (
    <section className="jwmarq-section" aria-hidden="true">
      <div className="jwmarq-track">
        {[0, 1].map((set) => (
          <div key={set} className="jwmarq-inner" aria-hidden={set === 1 ? true : undefined}>
            {items.map((_, i) => (
              <span key={i} className="jwmarq-item">
                {TEXT}
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .jwmarq-section {
          overflow: hidden;
          background: #fdf5ee;
          height: 90px;
          display: flex;
          align-items: center;
        }
        .jwmarq-section:hover .jwmarq-track {
          animation-play-state: paused;
        }

        .jwmarq-track {
          display: flex;
          width: max-content;
          animation: jwMarqScroll 35s linear infinite;
          will-change: transform;
        }
        .jwmarq-inner {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .jwmarq-item {
          font-size: 15px;
          font-weight: 500;
          color: #222;
          letter-spacing: 0.06em;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          padding: 0 28px;
          position: relative;
        }
        .jwmarq-item::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #222;
        }

        @keyframes jwMarqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
