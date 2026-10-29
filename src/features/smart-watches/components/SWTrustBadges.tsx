'use client';

function IconTruck({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={size} height={size}>
      <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function IconShield({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconRefresh({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={size} height={size}>
      <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" />
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
    </svg>
  );
}

const badges = [
  {
    id: 'shipping',
    Icon: IconTruck,
    title: 'Free Shipping',
    desc: 'Free shipping on all order above $80',
  },
  {
    id: 'payment',
    Icon: IconShield,
    title: 'Secure Payment',
    desc: '100% secure payment guarantee',
  },
  {
    id: 'returns',
    Icon: IconRefresh,
    title: 'Money Guarantee',
    desc: '30-day money back guarantee',
  },
];

export function SWTrustBadges() {
  return (
    <section className="swtb-section">
      <div className="container-main">
        <div className="swtb-grid">
          {badges.map((b) => (
            <div key={b.id} className="swtb-card">
              <div className="swtb-icon">
                <b.Icon size={36} />
              </div>
              <div className="swtb-text">
                <h4 className="swtb-title">{b.title}</h4>
                <p className="swtb-desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .swtb-section {
          background: #f8f8f8;
          padding-block: clamp(28px, 3vw, 44px);
        }
        .swtb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2vw, 32px);
          align-items: center;
        }
        .swtb-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: clamp(16px, 2vw, 24px);
        }
        .swtb-icon {
          flex-shrink: 0;
          color: #111;
        }
        .swtb-title {
          font-size: clamp(14px, 1.2vw, 18px);
          font-weight: 700;
          color: #111;
          margin: 0 0 4px;
        }
        .swtb-desc {
          font-size: clamp(12px, 0.9vw, 14px);
          color: #777;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 749px) {
          .swtb-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .swtb-card { border-bottom: 1px solid #eee; padding-bottom: 20px; }
          .swtb-card:last-child { border-bottom: none; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .swtb-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
