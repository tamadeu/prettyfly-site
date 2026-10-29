'use client';

const SPARKLE_COLOR = '#e4a03a';
const ACCENT = '#c9173c';

function IconSparkle({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill={SPARKLE_COLOR} width={size} height={size}>
      <path d="M12 2C12 2 12.8 7.2 15 10C17.2 12.8 22 12 22 12C22 12 17.2 12.8 15 16C12.8 19.2 12 24 12 24C12 24 11.2 19.2 9 16C6.8 12.8 2 12 2 12C2 12 6.8 12.2 9 10C11.2 7.8 12 2 12 2Z" />
    </svg>
  );
}

const labels = [
  'A PERSONAL TOUCH',
  'BOLD COLOR',
  'LONG-WEAR FORMULA',
  'A PERSONAL TOUCH',
  'BOLD COLOR',
  'LONG-WEAR FORMULA',
  'A PERSONAL TOUCH',
  'BOLD COLOR',
  'LONG-WEAR FORMULA',
  'A PERSONAL TOUCH',
  'BOLD COLOR',
  'LONG-WEAR FORMULA',
];

const track = [...labels, ...labels];

export function LipstainMarquee() {
  return (
    <section className="lsmq-section">
      <div className="lsmq-strip">
        <div className="lsmq-track" aria-hidden="true">
          {track.map((label, i) => (
            <span key={i} className="lsmq-item">
              <span className={`lsmq-text${i % 2 !== 0 ? ' lsmq-outlined' : ''}`}>
                {label}
              </span>
              <span className="lsmq-sparkle">
                <IconSparkle size={22} />
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes lsmqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .lsmq-section {
          overflow: hidden;
          background: #fff;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .lsmq-strip {
          overflow: hidden;
          white-space: nowrap;
          padding: 22px 0;
        }

        .lsmq-track {
          display: inline-flex;
          align-items: center;
          gap: clamp(16px, 2.5vw, 32px);
          will-change: transform;
          animation: lsmqScroll 28s linear infinite;
        }
        .lsmq-strip:hover .lsmq-track {
          animation-play-state: paused;
        }

        .lsmq-item {
          display: inline-flex;
          align-items: center;
          gap: clamp(12px, 1.8vw, 22px);
          flex-shrink: 0;
        }

        .lsmq-text {
          font-size: clamp(22px, 3.2vw, 38px);
          font-weight: 700;
          font-style: italic;
          color: ${ACCENT};
          white-space: nowrap;
          letter-spacing: 0.01em;
          line-height: 1;
        }

        .lsmq-outlined {
          color: transparent;
          -webkit-text-stroke: 1.5px ${ACCENT};
        }

        .lsmq-sparkle {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        @media (min-width: 750px) {
          .lsmq-strip { padding: 26px 0; }
        }
        @media (min-width: 992px) {
          .lsmq-strip { padding: 30px 0; }
        }
      `}</style>
    </section>
  );
}
