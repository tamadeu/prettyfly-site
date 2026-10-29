'use client';

/* Ported 1:1 from PCTrustBadges.tsx (class="pctb-section") — layout,
   typography, spacing, icon sizes, alignment, and responsive behavior
   must stay pixel-identical per spec. Class prefix renamed pctb-* ->
   pdtb-*; only copy swapped for POD (content already matched verbatim). */

function IconBoxCheck() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width={44} height={44}>
      <path d="M24 6L8 15V33L24 42L40 33V15L24 6Z" stroke="#222" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 15L24 24L40 15" stroke="#222" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M24 24V42" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="38" cy="12" r="8" fill="#fff" stroke="#222" strokeWidth="1.8" />
      <path d="M34.5 12L37 14.5L41.5 9.5" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCard() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width={44} height={44}>
      <rect x="4" y="11" width="40" height="26" rx="4" stroke="#222" strokeWidth="1.8" />
      <path d="M4 18H44" stroke="#222" strokeWidth="1.8" />
      <rect x="10" y="27" width="8" height="3" rx="1.5" fill="#222" />
      <rect x="21" y="27" width="8" height="3" rx="1.5" fill="#222" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width={44} height={44}>
      <path d="M24 5L8 11V25C8 33.5 15 41 24 44C33 41 40 33.5 40 25V11L24 5Z" stroke="#222" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17 24L22 29L32 19" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const badges = [
  {
    id: 'free-shipping',
    icon: <IconBoxCheck />,
    title: 'Free Shipping & Return',
    desc: 'Free Shipping for all order over $100',
  },
  {
    id: 'secure-payment',
    icon: <IconCard />,
    title: 'Secure Payment',
    desc: 'Pay with Multiple Credit Cards',
  },
  {
    id: 'money-guarantee',
    icon: <IconShieldCheck />,
    title: 'Money Guarantee',
    desc: 'Within 30 days for an exchange.',
  },
];

export function PodTrustBadges() {
  return (
    <section className="pdtb-section">
      <div className="container-main">
        <div className="pdtb-row">
          {badges.map((b) => (
            <div key={b.id} className="pdtb-item">
              <div className="pdtb-icon">{b.icon}</div>
              <h4 className="pdtb-title">{b.title}</h4>
              <p className="pdtb-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pdtb-section {
          background: #fff;
        }

        .pdtb-row {
          display: flex;
          align-items: stretch;
        }

        .pdtb-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: clamp(32px, 4vw, 52px) clamp(16px, 2.5vw, 32px);
          gap: 0;
        }

        .pdtb-icon {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pdtb-title {
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700;
          color: #111;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .pdtb-desc {
          font-size: clamp(13px, 1.1vw, 16px);
          color: #888;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 749px) {
          .pdtb-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
