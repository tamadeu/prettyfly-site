function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="#e84d1c" width={20} height={20}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

const REPEAT = 8;

export function PizzaShopTextMarquee() {
  return (
    <section className="ps-mq" aria-hidden="true">
      <div className="ps-mq-track">
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span key={i} className="ps-mq-item">
            A Personal Touch
            <IconStar />
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span key={`d-${i}`} className="ps-mq-item" aria-hidden="true">
            A Personal Touch
            <IconStar />
          </span>
        ))}
      </div>

      <style>{`
        .ps-mq {
          background: #111;
          border-top: 1px solid #2a2a2a;
          border-bottom: 1px solid #2a2a2a;
          overflow: hidden;
          padding-block: clamp(16px, 2.5vw, 24px);
        }
        .ps-mq-track {
          display: flex;
          gap: clamp(24px, 3vw, 40px);
          animation: ps-mq-scroll 20s linear infinite;
          width: max-content;
        }
        .ps-mq-track:hover { animation-play-state: paused; }
        .ps-mq-item {
          display: inline-flex;
          align-items: center;
          gap: clamp(10px, 1.5vw, 16px);
          font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          flex-shrink: 0;
        }
        @keyframes ps-mq-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
