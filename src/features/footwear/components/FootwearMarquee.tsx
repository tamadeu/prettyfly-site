'use client';

type Phrase = string | { text: string; bold: boolean };

const PHRASES: Phrase[] = [
  'Running Shoes Collection',
  'Express your sole',
  'Walk with purpose',
  'Trending Shoes',
  'GREAT–FREE RETURNS PRODUCT WITHIN 10 DAYS',
  { text: 'Explore Trendy Accessories', bold: true },
  'Welcome to store',
];

export function FootwearMarquee() {
  /* Render the phrase set twice so the -50% translate loops seamlessly. */
  const items = [...PHRASES, ...PHRASES];

  return (
    <section className="fw-marquee">
      <div className="fw-marquee-track">
        {items.map((p, i) => {
          const text = typeof p === 'string' ? p : p.text;
          const bold = typeof p === 'string' ? false : p.bold;
          return (
            <span key={i} className={`fw-marquee-item${bold ? ' is-bold' : ''}`}>
              {text}
            </span>
          );
        })}
      </div>

      <style>{`
        .fw-marquee {
          overflow: hidden;
          background-color: #f8fafb;
          height: 100px;
          display: flex;
          align-items: center;
        }
        .fw-marquee-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: fwMarqueeScroll 18s linear infinite;
        }
        .fw-marquee:hover .fw-marquee-track {
          animation-play-state: paused;
        }
        @keyframes fwMarqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fw-marquee-item {
          position: relative;
          font-size: 20px;
          font-weight: 400;
          color: #222;
          margin-right: 56px;
          display: inline-block;
        }
        .fw-marquee-item.is-bold {
          font-weight: 700;
        }
        .fw-marquee-item::after {
          position: absolute;
          content: "";
          width: 8px;
          height: 8px;
          background: #222;
          border-radius: 100%;
          right: -28px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
}
