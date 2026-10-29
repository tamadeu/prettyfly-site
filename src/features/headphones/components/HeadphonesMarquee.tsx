'use client';

const ITEMS = [
  { text: 'Payment Secure',         solid: false },
  { text: 'Premium Audio Quality!', solid: true  },
  { text: '24/7 Customer Support',  solid: false },
  { text: 'Free Shipping',          solid: true  },
  { text: 'Hi-Res Audio Certified', solid: false },
  { text: '2-Year Warranty',        solid: true  },
];

function SignalIcon() {
  return (
    <svg viewBox="0 0 28 22" width={26} height={22} fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.9 }}>
      <path d="M8 2C4.5 6 4.5 16 8 20"        stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11.5 6C9.5 9 9.5 13 11.5 16"  stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="11" r="2.2"         fill="#fff"/>
      <path d="M16.5 6C18.5 9 18.5 13 16.5 16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 2C23.5 6 23.5 16 20 20"    stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={reverse ? 'hp-mq-track-rev' : 'hp-mq-track'}
        style={{ display: 'flex', alignItems: 'center', width: 'max-content' }}
      >
        {repeated.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(16px, 1.8vw, 28px)',
              paddingRight: 'clamp(16px, 1.8vw, 28px)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                fontWeight: item.solid ? 700 : 500,
                color: item.solid ? '#fff' : 'transparent',
                ...(item.solid ? {} : { WebkitTextStroke: '1.5px #fff' }),
                letterSpacing: item.solid ? '-0.01em' : '0.05em',
              }}
            >
              {item.text}
            </span>
            <SignalIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeadphonesMarquee() {
  return (
    <section
      className="hp-mq-section"
      style={{
        backgroundColor: '#111',
        padding: 'clamp(16px, 2vw, 26px) 0',
        overflow: 'hidden',
      }}
    >
      <MarqueeTrack />

      <style>{`
        @keyframes hp-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes hp-marquee-rev {
          0%   { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .hp-mq-track {
          animation: hp-marquee 40s linear infinite;
        }
        .hp-mq-track-rev {
          animation: hp-marquee-rev 40s linear infinite;
        }
        .hp-mq-section:hover .hp-mq-track,
        .hp-mq-section:hover .hp-mq-track-rev {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
