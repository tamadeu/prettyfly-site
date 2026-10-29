'use client';

/* Basketball trust badges — Free Shipping & Return / Online Support / Money
   Guarantee (matches the screenshot). Isolated fork (bbtb- prefix). */

function IconFreeShipping({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38.3334 29.85C38.3667 31.1 38.0333 32.2834 37.4333 33.3C37.1 33.9 36.65 34.4501 36.15 34.9001C35 35.9667 33.4833 36.6167 31.8 36.6667C29.3667 36.7167 27.2167 35.4667 26.0333 33.5501C25.4 32.5667 25.0167 31.3834 25 30.1334C24.95 28.0334 25.8833 26.1334 27.3833 24.8834C28.5167 23.9501 29.95 23.3667 31.5167 23.3334C35.2 23.2501 38.25 26.1667 38.3334 29.85Z" strokeMiterlimit="10" />
      <path d="M29.0667 30.0501L30.7501 31.65L34.2334 28.2833" />
      <path d="M5.28333 12.4001L20 20.9168L34.6166 12.4501" />
      <path d="M20.0001 36.0167V20.9" />
      <path d="M36.0166 15.2833V24.7166C36.0166 24.8 36.0167 24.8666 36 24.9499C34.8333 23.9332 33.3333 23.3333 31.6666 23.3333C30.1 23.3333 28.65 23.8833 27.5 24.8C25.9666 26.0166 25 27.8999 25 29.9999C25 31.2499 25.35 32.4333 25.9666 33.4333C26.1166 33.6999 26.3 33.95 26.5 34.1833L23.45 35.8666C21.55 36.9333 18.45 36.9333 16.55 35.8666L7.64997 30.9333C5.63331 29.8166 3.98334 27.0166 3.98334 24.7166V15.2833C3.98334 12.9833 5.63331 10.1833 7.64997 9.06662L16.55 4.13325C18.45 3.06659 21.55 3.06659 23.45 4.13325L32.35 9.06662C34.3667 10.1833 36.0166 12.9833 36.0166 15.2833Z" />
    </svg>
  );
}

function IconOnlineSupport({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.13332 30.8166V25.95C9.13332 24.3333 10.4 22.8833 12.2 22.8833C13.8166 22.8833 15.2666 24.15 15.2666 25.95V30.6333C15.2666 33.8833 12.5666 36.5833 9.31663 36.5833C6.06663 36.5833 3.36662 33.8667 3.36662 30.6333V20.3666C3.18328 10.9999 10.5833 3.41663 19.95 3.41663C29.3166 3.41663 36.7 11 36.7 20.1833V30.45C36.7 33.7 34 36.4 30.75 36.4C27.5 36.4 24.8 33.7 24.8 30.45V25.7667C24.8 24.15 26.0666 22.7 27.8666 22.7C29.4833 22.7 30.9333 23.9667 30.9333 25.7667V30.8166" />
      <path d="M25.8834 15.2H24.5334C24.1668 15.2 23.8168 15.4167 23.6501 15.7333L22.4001 18.2333C22.2168 18.6 21.7001 18.6 21.5168 18.2333L18.4501 12.1167C18.2668 11.7667 17.7668 11.75 17.5834 12.1L16.1834 14.6833C16.0168 15 15.6834 15.2 15.3168 15.2H14.1001" />
    </svg>
  );
}

function IconMoneyGuarantee({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 3.95002C18.875 2.78335 21.1417 2.78335 22.5333 3.95002L25.6833 6.65002C26.2833 7.16669 27.4 7.58335 28.2 7.58335H31.5833C33.7 7.58335 35.4333 9.31669 35.4333 11.4334V14.8167C35.4333 15.6 35.85 16.7334 36.3667 17.3334L39.0667 20.4834C40.2333 21.8584 40.2333 24.125 39.0667 25.5167" transform="scale(0.83)" />
      <path d="M15 20.5L18.3333 23.8333L25 17.1666" />
      <path d="M20 3.33337C10.8 3.33337 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20" />
    </svg>
  );
}

const badges = [
  { icon: <IconFreeShipping />, title: 'Free Shipping & Return', description: 'Free Shipping for all order over $100' },
  { icon: <IconOnlineSupport />, title: 'Online Support', description: '24 hours a day, 7 days a week' },
  { icon: <IconMoneyGuarantee />, title: 'Money Guarantee', description: 'Within 30 days for an exchange.' },
];

export function BasketballTrustBadges() {
  return (
    <section className="bbtb-section">
      <div className="container-main">
        <div className="bbtb-grid">
          {badges.map((badge) => (
            <div key={badge.title} className="bbtb-item">
              <div className="bbtb-icon">{badge.icon}</div>
              <div className="bbtb-text">
                <p className="bbtb-title">{badge.title}</p>
                <p className="bbtb-desc">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bbtb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bbtb-item {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .bbtb-icon {
          flex-shrink: 0;
          color: #222;
          display: flex;
          align-items: center;
        }
        .bbtb-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .bbtb-title {
          font-size: clamp(18px, 1.6vw, 22px);
          font-weight: 700;
          color: #222;
          margin: 0;
          line-height: 1.3;
        }
        .bbtb-desc {
          font-size: clamp(14px, 1.2vw, 16px);
          color: #888;
          margin: 0;
          line-height: 1.45;
        }

        @media (max-width: 991px) {
          .bbtb-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </section>
  );
}
