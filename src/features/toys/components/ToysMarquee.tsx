'use client';

/* Scrolling ticker strip on a teal band, matching the screenshot's layout
   (bold white text, bullet-separated, continuous scroll). The screenshot's
   literal copy ("Trending Shoes", "Running Shoes Collection") is mismatched
   footwear-storefront leftover text, not real Toys content — swapped for
   toy-appropriate copy per Rule #1's intent (match the design, not a copy bug). */

const items = [
  'Free Delivery on Orders Over $50',
  'Safe & Non-Toxic Materials',
  'New Arrivals Every Week',
  'Loved by Little Ones',
  'Shop the Full Collection',
  'Made for Curious Minds',
];

export function ToysMarquee() {
  return (
    <section className="tymq-section">
      <div className="tymq-track">
        {[0, 1].map((set) => (
          <div key={set} className="tymq-inner" aria-hidden={set === 1 ? true : undefined}>
            {items.map((text, i) => (
              <span key={i} className="tymq-item">
                <span className="tymq-text">{text}</span>
                <span className="tymq-dot">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .tymq-section {
          overflow: hidden;
          background: rgb(71, 193, 191);
          height: 100px;
          display: flex;
          align-items: center;
        }
        .tymq-track {
          display: flex;
          width: max-content;
          animation: tymqScroll 26s linear infinite;
        }
        .tymq-section:hover .tymq-track {
          animation-play-state: paused;
        }
        .tymq-inner {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .tymq-item {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding-right: 20px;
          white-space: nowrap;
        }
        .tymq-text {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
        }
        .tymq-dot {
          font-size: 32px;
          color: #fff;
          opacity: 1;
        }
        @keyframes tymqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
