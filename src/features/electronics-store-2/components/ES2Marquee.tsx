import Image from 'next/image';

const ITEMS = [
  { src: '/electronics store/scrolling-logo/scrolling-logo1.webp', name: 'VIGOR' },
  { src: '/electronics store/scrolling-logo/scrolling-logo2.webp', name: 'KINGS' },
  { src: '/electronics store/scrolling-logo/scrolling-logo3.webp', name: 'VINEUS' },
  { src: '/electronics store/scrolling-logo/scrolling-logo4.webp', name: 'PIXELS' },
  { src: '/electronics store/scrolling-logo/scrolling-logo1.webp', name: 'RADIUS' },
  { src: '/electronics store/scrolling-logo/scrolling-logo2.webp', name: 'PIXELS' },
];
const TRACK = [...ITEMS, ...ITEMS];

export function ES2Marquee() {
  return (
    <section className="es2mq-section">
      <div className="es2mq-track">
        {TRACK.map((item, i) => (
          <span key={i} className="es2mq-item">
            <Image
              src={item.src}
              alt={item.name}
              width={28}
              height={28}
              className="es2mq-img"
            />
            <span className="es2mq-name">{item.name}</span>
          </span>
        ))}
      </div>

      <style>{`
        .es2mq-section {
          background: #f5f5f5;
          height: 80px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .es2mq-track {
          display: flex;
          white-space: nowrap;
          animation: es2mqScroll 24s linear infinite;
        }

        .es2mq-section:hover .es2mq-track {
          animation-play-state: paused;
        }

        .es2mq-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding-right: 60px;
        }

        .es2mq-img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .es2mq-name {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #555;
        }

        @keyframes es2mqScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
