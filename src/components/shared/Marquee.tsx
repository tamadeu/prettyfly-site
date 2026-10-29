'use client';

interface MarqueeProps {
  text: string;
  repeat?: number;
}

export function Marquee({ text, repeat = 12 }: MarqueeProps) {
  return (
    <section style={{ overflow: 'hidden', backgroundColor: '#f8fafb', height: '100px', display: 'flex', alignItems: 'center' }}>
      <div className="marquee-track">
        {Array.from({ length: repeat * 2 }).map((_, i) => (
          <span key={i} className="marquee-item">
            {text}
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marqueeScroll 30s linear infinite;
          width: max-content;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-item {
          position: relative;
          font-size: 20px;
          font-weight: 500;
          color: #222;
          margin-right: 56px;
          display: inline-block;
          padding-right: 0;
        }

        .marquee-item::after {
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
