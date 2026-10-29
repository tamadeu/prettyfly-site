'use client';

/* Single scrolling feature strip on a light band — alternating filled /
   outlined (text-stroke) words, matching the glasses screenshot. */

const phrases = [
  'Satisfaction Guaranteed',
  '24/7 Customer Support',
  'Returns & Exchanges',
  'Premium Quality',
  'Secure Payment',
];

/* One set → duplicated for a seamless -50% loop. `outlined` alternates so
   adjacent words are always fill / stroke / fill / stroke. */
const oneSet = phrases.map((label, i) => ({ label, outlined: i % 2 !== 0 }));
const track = [...oneSet, ...oneSet];

export function GlassesMarquee() {
  return (
    <section className="glmq-section">
      <div className="glmq-strip">
        <div className="glmq-track" aria-hidden="true">
          {track.map((item, i) => (
            <span key={i} className={`glmq-text${item.outlined ? ' glmq-outlined' : ''}`}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes glmqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .glmq-section {
          overflow: hidden;
          background: #f5f5f5;
        }
        .glmq-strip {
          overflow: hidden;
          white-space: nowrap;
          padding: clamp(18px, 2.4vw, 26px) 0;
        }
        .glmq-track {
          display: inline-flex;
          align-items: center;
          gap: clamp(28px, 4vw, 60px);
          padding-left: clamp(28px, 4vw, 60px);
          will-change: transform;
          animation: glmqScroll 28s linear infinite;
        }
        .glmq-strip:hover .glmq-track { animation-play-state: paused; }

        .glmq-text {
          font-size: clamp(22px, 3vw, 38px);
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #1a1a1a;
          white-space: nowrap;
          flex-shrink: 0;
          line-height: 1;
        }
        .glmq-outlined {
          color: transparent;
          -webkit-text-stroke-color: #222;
          -webkit-text-stroke-width: 0.1rem;
        }
      `}</style>
    </section>
  );
}
