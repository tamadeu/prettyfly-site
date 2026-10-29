'use client';

interface NutritionMarqueeProps {
  text?: string;
  repeat?: number;
}

export function NutritionMarquee({
  text = 'LIMITED-TIME NUTRITION DISCOUNTS!',
  repeat = 12,
}: NutritionMarqueeProps) {
  const items = Array.from({ length: repeat * 2 });

  return (
    <section className="nm-section" aria-hidden="true">
      <div className="nm-track">
        {items.map((_, i) => (
          <span key={i} className="nm-item">
            {text}
          </span>
        ))}
      </div>

      <style>{`
        .nm-section {
          --duration: 50s;
          background: #8cff64;
          overflow: hidden;
          padding-top: 20px;
          padding-bottom: 20px;
          width: 100%;
        }
        .nm-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation-name: scrolling-left;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-duration: var(--duration);
          animation-play-state: running;
          will-change: transform, width;
        }
        @keyframes scrolling-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nm-item {
          position: relative;
          font-size: 24px;
          font-weight: 700;
          color: rgb(18 18 18 / 75%);
          letter-spacing: 0.6px;
          margin-right: 64px;
          display: inline-block;
        }
        .nm-item::after {
          position: absolute;
          content: '';
          width: 6px;
          height: 6px;
          background: rgb(18 18 18 / 75%);
          border-radius: 100%;
          right: -34px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
}
