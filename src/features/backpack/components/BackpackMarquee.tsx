'use client';

/* Multi-phrase marquee — scrolls a fixed set of phrases with dot separators,
   matching the screenshot ("Walk with purpose • Trending Shoes • …"). */

const phrases = [
  'Walk with purpose',
  'Trending Shoes',
  'Explore Trendy Accessories',
  'Welcome to store',
  'Running Shoes Collection',
  'Express your sole',
];

export function BackpackMarquee() {
  // Duplicate the phrase list so the -50% scroll loops seamlessly.
  const track = [...phrases, ...phrases];

  return (
    <section style={{ overflow: 'hidden', backgroundColor: '#f6f6f6', height: '92px', display: 'flex', alignItems: 'center' }}>
      <div className="bp-marquee-track">
        {track.map((phrase, i) => (
          <span key={i} className="bp-marquee-item">
            {phrase}
          </span>
        ))}
      </div>

      <style>{`
        .bp-marquee-track {
          display: flex;
          white-space: nowrap;
          animation: bpMarqueeScroll 30s linear infinite;
          width: max-content;
        }
        @keyframes bpMarqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bp-marquee-item {
          position: relative;
          font-size: 18px;
          font-weight: 500;
          color: #333;
          margin-right: 64px;
          display: inline-block;
        }
        .bp-marquee-item::after {
          position: absolute;
          content: "";
          width: 7px;
          height: 7px;
          background: #333;
          border-radius: 100%;
          right: -34px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
}
