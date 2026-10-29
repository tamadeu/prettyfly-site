function IconPackage() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconHeadphones() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function IconCreditCard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const badges = [
  {
    icon: <IconPackage />,
    title: 'Free Shipping & Return',
    desc: 'Free Shipping for all order over $100',
  },
  {
    icon: <IconHeadphones />,
    title: 'Online Support',
    desc: '24 hours a day, 7 days a week',
  },
  {
    icon: <IconCreditCard />,
    title: 'Secure Payment',
    desc: 'Pay with Multiple Credit Cards',
  },
  {
    icon: <IconShieldCheck />,
    title: 'Money Guarantee',
    desc: 'Within 30 days for an exchange.',
  },
];

export function ES2TrustBadges() {
  return (
    <section className="es2tb-section">
      <div className="container-main">
        <div className="es2tb-grid">
          {badges.map((badge, i) => (
            <div key={i} className="es2tb-card">
              <span className="es2tb-icon">{badge.icon}</span>
              <div className="es2tb-text">
                <p className="es2tb-title">{badge.title}</p>
                <p className="es2tb-desc">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .es2tb-section {
          background: #f8f8f8;
          padding-block: clamp(28px, 3vw, 44px);
        }

        .es2tb-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        @media (max-width: 991px) {
          .es2tb-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 749px) {
          .es2tb-grid {
            grid-template-columns: 1fr;
          }
        }

        .es2tb-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: clamp(16px, 2vw, 24px);
        }

        .es2tb-icon {
          flex-shrink: 0;
          color: #111;
          display: flex;
          align-items: center;
        }

        .es2tb-text {
          display: flex;
          flex-direction: column;
        }

        .es2tb-title {
          font-size: clamp(14px, 1.2vw, 18px);
          font-weight: 700;
          color: #111;
          margin: 0 0 4px;
          line-height: 1.3;
        }

        .es2tb-desc {
          font-size: clamp(12px, 0.9vw, 14px);
          color: #777;
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
