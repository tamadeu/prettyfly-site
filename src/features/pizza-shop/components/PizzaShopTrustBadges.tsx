import Image from 'next/image';

const badges = [
  {
    title: 'Free Shipping & Return',
    subtitle: 'Free shipping for all orders over $135',
    src: '/pizza/promotion/promotion1.webp',
  },
  {
    title: 'Customer Support 24/7',
    subtitle: 'Instant access to perfect support everyday',
    src: '/pizza/promotion/promotion2.webp',
  },
  {
    title: '100% Secure Payment',
    subtitle: 'We ensure secure payment for customers',
    src: '/pizza/promotion/promotion3.png',
  },
];

export function PizzaShopTrustBadges() {
  return (
    <section className="ps-trust container-main">
      {badges.map((b, i) => (
        <div key={i} className="ps-trust-card">
          <div className="ps-trust-icon">
            <Image src={b.src} alt={b.title} width={28} height={28} style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="ps-trust-text">
            <strong className="ps-trust-title">{b.title}</strong>
            <span className="ps-trust-sub">{b.subtitle}</span>
          </div>
        </div>
      ))}

      <style>{`
        .ps-trust {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 2vw, 24px);
          padding-block: clamp(20px, 3vw, 32px);
        }
        .ps-trust-card {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.5vw, 18px);
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          padding: clamp(14px, 2vw, 22px) clamp(16px, 2vw, 24px);
        }
        .ps-trust-icon {
          flex-shrink: 0;
          width: clamp(44px, 5vw, 56px);
          height: clamp(44px, 5vw, 56px);
          border-radius: 50%;
          background: #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ps-trust-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .ps-trust-title {
          font-size: clamp(14px, 1.3vw, 17px);
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }
        .ps-trust-sub {
          font-size: clamp(12px, 1vw, 14px);
          color: #fff;
          line-height: 1.5;
        }
        @media (max-width: 749px) {
          .ps-trust { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
