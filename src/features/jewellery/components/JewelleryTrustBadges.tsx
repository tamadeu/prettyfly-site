'use client';

function IconShipping() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.5 44.775C57.55 46.65 57.05 48.425 56.15 49.95C55.65 50.85 54.975 51.6751 54.225 52.3501C52.5 53.9501 50.225 54.925 47.7 55C44.05 55.075 40.825 53.2001 39.05 50.3251C38.1 48.8501 37.525 47.0751 37.5 45.2001C37.425 42.0501 38.825 39.2 41.075 37.325C42.775 35.925 44.925 35.05 47.275 35C52.8 34.875 57.375 39.25 57.5 44.775Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43.6 45.0751L46.1251 47.475L51.3501 42.4249" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.92505 18.6001L30 31.3751L51.925 18.675" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30.0001 54.025V31.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54.025 22.925V37.0751C54.025 37.2001 54.025 37.3 54 37.425C52.25 35.9 50 35 47.5 35C45.15 35 42.975 35.8251 41.25 37.2001C38.95 39.0251 37.5 41.85 37.5 45C37.5 46.875 38.025 48.65 38.95 50.15C39.175 50.55 39.45 50.9251 39.75 51.2751L35.175 53.8001C32.325 55.4001 27.675 55.4001 24.825 53.8001L11.475 46.4C8.44999 44.725 5.97504 40.5251 5.97504 37.0751V22.925C5.97504 19.475 8.44999 15.2751 11.475 13.6001L24.825 6.2C27.675 4.6 32.325 4.6 35.175 6.2L48.525 13.6001C51.55 15.2751 54.025 19.475 54.025 22.925Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7 46.225V38.925C13.7 36.5 15.6 34.325 18.3 34.325C20.725 34.325 22.9 36.225 22.9 38.925V45.95C22.9 50.825 18.8499 54.8751 13.9749 54.8751C9.09994 54.8751 5.04992 50.8 5.04992 45.95V30.55C4.77492 16.5 15.875 5.125 29.925 5.125C43.975 5.125 55.0499 16.5 55.0499 30.275V45.6751C55.0499 50.5501 51 54.6001 46.125 54.6001C41.25 54.6001 37.2 50.5501 37.2 45.6751V38.6501C37.2 36.2251 39.1 34.05 41.8 34.05C44.225 34.05 46.3999 35.9501 46.3999 38.6501V46.225" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38.8249 22.8H36.7999C36.2499 22.8 35.7249 23.125 35.4749 23.6L33.5999 27.35C33.3249 27.9 32.5499 27.9 32.2749 27.35L27.6749 18.175C27.3999 17.65 26.6499 17.625 26.3749 18.15L24.2749 22.025C24.0249 22.5 23.5249 22.8 22.9749 22.8H21.1499" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGuarantee() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.225 5.57502L13.75 10.275C10.875 11.35 8.52502 14.75 8.52502 17.8V36.375C8.52502 39.325 10.475 43.2 12.85 44.975L23.6 53C27.125 55.65 32.925 55.65 36.45 53L47.2 44.975C49.575 43.2 51.525 39.325 51.525 36.375V17.8C51.525 14.725 49.175 11.325 46.3 10.25L33.825 5.57502C31.7 4.80002 28.3 4.80002 26.225 5.57502Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.625 29.6751L26.65 33.7001L37.4 22.9501" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BADGES = [
  {
    id: 'tb1',
    Icon: IconShipping,
    title: 'Free Shipping & Return',
    body: 'Free Shipping for all order over $100',
  },
  {
    id: 'tb2',
    Icon: IconSupport,
    title: 'Online Support',
    body: '24 hours a day, 7 days a week',
  },
  {
    id: 'tb3',
    Icon: IconGuarantee,
    title: 'Money Guarantee',
    body: 'Within 30 days for an exchange.',
  },
];

export function JewelleryTrustBadges() {
  return (
    <section className="jwtb-section">
      <div className="container-main">
        <div className="jwtb-grid">
          {BADGES.map(({ id, Icon, title, body }) => (
            <div key={id} className="jwtb-item">
              <div className="jwtb-icon">
                <Icon />
              </div>
              <div className="jwtb-text">
                <p className="jwtb-title">{title}</p>
                <p className="jwtb-body">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .jwtb-section {
          background: #fff;
        }

        .jwtb-grid {
          display: flex;
          align-items: stretch;
        }

        .jwtb-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px 32px;
        }

        .jwtb-icon {
          flex-shrink: 0;
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .jwtb-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .jwtb-title {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        .jwtb-body {
          font-size: 15px;
          color: #111;
          line-height: 1.5;
          margin: 0;
          font-weight: 400;
        }

        /* ── Tablet: tighter padding ── */
        @media (min-width: 750px) and (max-width: 991px) {
          .jwtb-item {
            padding: 24px 20px;
            gap: 14px;
          }
          .jwtb-icon svg {
            width: 48px !important;
            height: 48px !important;
          }
          .jwtb-title { font-size: 16px; }
          .jwtb-body  { font-size: 14px; }
        }

        /* ── Mobile: single column ── */
        @media (max-width: 749px) {
          .jwtb-grid {
            flex-direction: column;
          }
          .jwtb-item {
            padding: 22px 0;
          }
          .jwtb-icon svg {
            width: 48px !important;
            height: 48px !important;
          }
          .jwtb-title { font-size: 16px; }
          .jwtb-body  { font-size: 14px; }
        }
      `}</style>
    </section>
  );
}
