import Image from 'next/image';

function IconShieldCheck({ size = 56 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const badges = [
  {
    id: 'shipping',
    imgSrc: '/elegant-fashion/promotion/promotion1.webp',
    title: 'Free Shipping & Return',
    desc: 'Free shipping for all orders over $135',
  },
  {
    id: 'support',
    imgSrc: '/elegant-fashion/promotion/promotion2.webp',
    title: 'Customer Support 24/7',
    desc: 'Instant access to perfect support everyday',
  },
  {
    id: 'secure',
    imgSrc: null,
    title: '100% Secure Payment',
    desc: 'We ensure secure payment for customers',
  },
];

export function ElegantFashionTrustBadges() {
  return (
    <section className="eftr-section">
      <div className="container-main">
        <div className="eftr-grid">
          {badges.map((badge) => (
            <div key={badge.id} className="eftr-card">
              <div className="eftr-icon">
                {badge.imgSrc ? (
                  <Image
                    src={badge.imgSrc}
                    alt={badge.title}
                    width={56}
                    height={56}
                    style={{ objectFit: 'contain', width: '56px', height: '56px' }}
                  />
                ) : (
                  <IconShieldCheck size={56} />
                )}
              </div>
              <div className="eftr-body">
                <h3 className="eftr-title">{badge.title}</h3>
                <p className="eftr-desc">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .eftr-section { padding: 0; }

        .eftr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .eftr-card {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          background: #f7f8fa;
          border-radius: 16px;
        }

        .eftr-icon {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a1e33;
        }

        .eftr-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .eftr-title {
          font-size: clamp(15px, 1.5vw, 18px);
          font-weight: 700;
          color: #0a1e33;
          margin: 0;
          line-height: 1.3;
        }

        .eftr-desc {
          font-size: clamp(13px, 1.1vw, 14px);
          color: #64748b;
          font-weight: 500;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 749px) {
          .eftr-grid { grid-template-columns: 1fr; gap: 12px; }
          .eftr-card { padding: 16px 20px; }
        }
      `}</style>
    </section>
  );
}
