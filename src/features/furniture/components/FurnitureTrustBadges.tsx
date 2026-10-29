'use client';

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
    imgSrc: '/furniture/promotion/promotion1.webp',
    title: 'Free Shipping & Return',
    desc: 'Free Shipping for all order over $100',
  },
  {
    id: 'support',
    imgSrc: '/furniture/promotion/promotion2.webp',
    title: 'Online Support',
    desc: '24 hours a day, 7 days a week',
  },
  {
    id: 'secure',
    imgSrc: null,
    title: 'Money Guarantee',
    desc: 'Within 30 days for an exchange.',
  },
];

export function FurnitureTrustBadges() {
  return (
    <section className="futb-section">
      <div className="container-main">
        <div className="futb-grid">
          {badges.map((badge) => (
            <div key={badge.id} className="futb-badge">
              <div className="futb-icon-wrap">
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
              <h3 className="futb-title">{badge.title}</h3>
              <p className="futb-desc">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .futb-section {
          padding: clamp(32px, 4vw, 52px) 0;
          background: #fff;
        }
        .futb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .futb-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          padding: 0 16px;
        }
        .futb-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          flex-shrink: 0;
          width: 64px;
          height: 64px;
        }
        .futb-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          line-height: 1.25;
          margin: 0;
        }
        .futb-desc {
          font-size: 16px;
          color: #111;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 749px) {
          .futb-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .futb-badge {
            padding: 0;
          }
          .futb-title { font-size: clamp(17px, 4.5vw, 20px); }
          .futb-desc  { font-size: clamp(14px, 3.8vw, 16px); }
        }

        @media (min-width: 750px) {
          .futb-title { font-size: 21px; }
          .futb-grid  { gap: 32px; }
        }

        @media (min-width: 992px) {
          .futb-title { font-size: 22px; }
          .futb-desc  { font-size: 17px; }
          .futb-grid  { gap: 48px; }
          .futb-icon-wrap { width: 70px; height: 70px; }
        }
      `}</style>
    </section>
  );
}
