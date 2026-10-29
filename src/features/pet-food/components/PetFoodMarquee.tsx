'use client';

interface PetFoodMarqueeProps {
  text?: string;
  repeat?: number;
}

/**
 * Two-layer marquee:
 *   • Top   — styled bar, right → left, teal text on #ccf3ff
 *   • Bottom — transparent bar, left → right, hollow outlined text
 *
 * Both tracks share the same -50% keyframe. The bottom layer reverses the
 * animation direction so it scrolls the opposite way.
 */
export function PetFoodMarquee({
  text = 'LIMITED-TIME PET FOOD DISCOUNTS!',
  repeat = 12,
}: PetFoodMarqueeProps) {
  const items = Array.from({ length: repeat * 2 });

  return (
    <section className="pf-marq" aria-hidden="true">
      <div className="pf-marq-top">
        <div className="pf-marq-track">
          {items.map((_, i) => (
            <span key={`t-${i}`} className="pf-marq-item">
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="pf-marq-bottom">
        <div className="pf-marq-track pf-marq-track-reverse">
          {items.map((_, i) => (
            <span key={`b-${i}`} className="pf-marq-item pf-marq-item-hollow">
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .pf-marq { width: 100%; overflow: hidden; }

        .pf-marq-top {
          background: #ccf3ff;
          overflow: hidden;
          padding: 18px 0;
        }
        .pf-marq-bottom {
          background: transparent;
          overflow: hidden;
          padding: 14px 0;
          margin-top: 20px;
        }

        .pf-marq-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: pfMarqScroll 60s linear infinite;
          will-change: transform;
        }
        /* Bottom layer — reverse direction → scrolls left → right */
        .pf-marq-track-reverse {
          animation-direction: reverse;
        }

        @keyframes pfMarqScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .pf-marq-item {
          position: relative;
          font-size: 24px;
          font-weight: 600;
          color: rgb(10 66 83 / 75%);
          margin-right: 56px;
          display: inline-block;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }
        .pf-marq-item::after {
          position: absolute;
          content: '';
          width: 6px;
          height: 6px;
          background: rgb(10 66 83 / 75%);
          border-radius: 100%;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
        }

        /* Bottom row — transparent fill + teal outline stroke for the hollow look */
        .pf-marq-item-hollow {
          font-size: 25px;
          color: #00000000;
          -webkit-text-stroke: 1px rgb(10 66 83 / 60%);
        }
        .pf-marq-item-hollow::after {
          background: rgb(10 66 83 / 45%);
          -webkit-text-stroke: 0;
        }
      `}</style>
    </section>
  );
}
