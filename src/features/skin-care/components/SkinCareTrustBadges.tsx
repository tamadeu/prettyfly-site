'use client';

import Image from 'next/image';

const badges = [
  {
    id: 'free-shipping',
    icon: '/skin-care/promotion/promotion1.webp',
    title: 'Free Shipping',
    desc: 'On all orders over $50',
  },
  {
    id: 'online-support',
    icon: '/skin-care/promotion/promotion2.webp',
    title: 'Online Support',
    desc: '24/7 skincare guidance & help',
  },
  {
    id: 'money-guarantee',
    icon: '/skin-care/promotion/promotion1.webp',
    title: 'Money Guarantee',
    desc: '30-day hassle-free returns',
  },
];

export function SkinCareTrustBadges() {
  return (
    <section className="sktb-section">
      <div className="container-main sktb-grid">
        {badges.map((badge, i) => (
          <div key={badge.id} className="sktb-item">
            {i > 0 && <div className="sktb-divider" />}
            <div className="sktb-icon">
              <Image
                src={badge.icon}
                alt={badge.title}
                width={48}
                height={48}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div>
              <p className="sktb-title">{badge.title}</p>
              <p className="sktb-desc">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sktb-section {
          background: #fafaf9;
          border-top: 1px solid #ece8e4;
          border-bottom: 1px solid #ece8e4;
          padding: 36px 0;
        }
        .sktb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          position: relative;
        }
        @media (min-width: 750px) {
          .sktb-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }
        }

        .sktb-item {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          padding: 0 clamp(16px, 2.5vw, 32px);
        }
        @media (max-width: 749px) {
          .sktb-item { padding: 0; }
        }

        .sktb-divider {
          display: none;
        }
        @media (min-width: 750px) {
          .sktb-divider {
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 60%;
            background: #e0dbd6;
          }
        }

        .sktb-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sktb-title {
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 700;
          color: #111;
          margin: 0 0 3px;
        }
        .sktb-desc {
          font-size: clamp(12px, 1vw, 14px);
          color: #777;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
