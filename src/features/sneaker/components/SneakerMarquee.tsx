'use client';

const ITEMS = [
  'Shoes',
  'Explore Trendy Accessories',
  'Welcome to store',
  'Running Shoes Collection',
  'Express your sole',
  'Walk with purpose',
  'Trending Shoes',
];

function Dot() {
  return (
    <span
      aria-hidden="true"
      style={{ color: '#e84d1c', fontSize: 'clamp(18px, 1.6vw, 22px)', lineHeight: 1, flexShrink: 0 }}
    >
      •
    </span>
  );
}

function MarqueeTrack() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className="sn-mq-track"
        style={{ display: 'flex', alignItems: 'center', width: 'max-content', gap: 'clamp(16px, 1.8vw, 28px)' }}
      >
        {repeated.map((text, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(16px, 1.8vw, 28px)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(15px, 1.6vw, 20px)',
                fontWeight: 500,
                color: '#222',
                letterSpacing: '0.02em',
              }}
            >
              {text}
            </span>
            <Dot />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SneakerMarquee() {
  return (
    <section
      className="sn-mq-section"
      style={{
        backgroundColor: '#f8f8f8',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderTop: '1px solid #ebebeb',
        borderBottom: '1px solid #ebebeb',
      }}
    >
      <MarqueeTrack />

      <style>{`
        @keyframes sn-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .sn-mq-track {
          animation: sn-marquee 36s linear infinite;
        }
        .sn-mq-section:hover .sn-mq-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
