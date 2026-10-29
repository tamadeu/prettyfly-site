'use client';

/* Scrolling ticker strip — alternating solid / ghost-outline text on a
   cream band, matching the screenshot's "Satisfaction Guaranteed" strip. */

const items = [
  'Satisfaction Guaranteed',
  '24/7 Customer Support',
  'Returns & Exchanges',
  'Premium Quality',
  'Secure Payment',
];

export function SocksMarquee() {
  return (
    <section className="sxmq-section">
      <div className="sxmq-track">
        {[0, 1].map((set) => (
          <div key={set} className="sxmq-inner" aria-hidden={set === 1 ? true : undefined}>
            {items.map((text, i) => (
              <span
                key={i}
                className={i % 2 === 0 ? 'sxmq-item sxmq-item--solid' : 'sxmq-item sxmq-item--ghost'}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .sxmq-section {
          overflow: hidden;
          background: #f1ece1;
          height: 105px;
          display: flex;
          align-items: center;
        }
        .sxmq-track {
          display: flex;
          width: max-content;
          animation: sxmqScroll 28s linear infinite;
        }
        .sxmq-section:hover .sxmq-track {
          animation-play-state: paused;
        }
        .sxmq-inner {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .sxmq-item {
          font-size: clamp(23px, 3vw, 34px);
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
          margin-right: 56px;
        }
        .sxmq-item--solid {
          color: #151515;
        }
        .sxmq-item--ghost {
          color: transparent;
          -webkit-text-stroke: 1px #b9b2a4;
        }
        @supports not (-webkit-text-stroke: 1px #b9b2a4) {
          .sxmq-item--ghost { color: #b9b2a4; }
        }
        @keyframes sxmqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
