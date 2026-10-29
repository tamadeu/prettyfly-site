'use client';

const ITEM = 'Welcome to store';
const REPEATED = Array.from({ length: 20 }, () => ITEM);

export function FurnitureMarquee() {
  return (
    <section className="fumq-section">
      <div className="fumq-track-wrap">
        <div className="fumq-track">
          {REPEATED.map((text, i) => (
            <span key={i} className="fumq-item">
              <span className="fumq-dot">•</span>
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .fumq-section {
          background: rgb(244, 249, 252);
          overflow: hidden;
          height: 80px;
          display: flex;
          align-items: center;
        }
        .fumq-track-wrap {
          overflow: hidden;
          width: 100%;
        }
        .fumq-track {
          display: flex;
          width: max-content;
          animation: fumqScroll 34s linear infinite;
          will-change: transform;
        }
        .fumq-track:hover { animation-play-state: paused; }
        @keyframes fumqScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fumq-item {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 0 36px;
          font-size: clamp(12px, 1.3vw, 14px);
          font-weight: 500;
          color: #111;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .fumq-dot {
          color: #111;
          font-size: 18px;
          line-height: 1;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
