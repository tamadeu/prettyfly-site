'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function IconBox({ size = 46 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconHeadset({ size = 46 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4zM3 19a2 2 0 0 0 2 2h1v-6H3v4z" />
    </svg>
  );
}

function IconShieldCheck({ size = 46 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const badges = [
  { id: 'shipping', Icon: IconBox, title: 'Free Shipping & Return', desc: 'Free shipping for all orders over $135' },
  { id: 'support', Icon: IconHeadset, title: 'Customer Support 24/7', desc: 'Instant access to perfect support everyday' },
  { id: 'secure', Icon: IconShieldCheck, title: '100% Secure Payment', desc: 'We ensure secure payment for customers' },
];

export function PetFoodTrustBadges() {
  return (
    <section className="pf-trust-section">
      <div className="container-main">
        {/* Desktop (≥992px) — static 3-column row, no slider chrome */}
        <div className="pf-trust-grid">
          {badges.map(({ Icon, title, desc, id }) => (
            <div key={id} className="pf-trust-card">
              <span className="pf-trust-icon"><Icon /></span>
              <div>
                <h3 className="pf-trust-title">{title}</h3>
                <p className="pf-trust-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet (<992px) — slider, one badge per view. No pagination. */}
        <div className="pf-trust-slider-wrap">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop
            speed={500}
            style={{ overflow: 'hidden' }}
          >
            {badges.map(({ Icon, title, desc, id }) => (
              <SwiperSlide key={id}>
                <div className="pf-trust-card pf-trust-card--slide">
                  <span className="pf-trust-icon"><Icon /></span>
                  <div>
                    <h3 className="pf-trust-title">{title}</h3>
                    <p className="pf-trust-desc">{desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .pf-trust-section { padding: 0; }

        /* Card visuals — shared between desktop grid and mobile slider */
        .pf-trust-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0;
        }
        .pf-trust-card--slide {
          justify-content: center;
          text-align: left;
          padding: 4px 12px;
        }
        .pf-trust-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgb(10, 66, 83);
          flex-shrink: 0;
        }
        .pf-trust-title {
          font-size: 20px;
          font-weight: 700;
          color: rgb(10, 66, 83);
          margin-bottom: 6px;
          line-height: 1.2;
        }
        .pf-trust-desc {
          font-size: 16px;
          color: rgb(10, 66, 83);
          line-height: 1.5;
        }

        /* Mobile-first — slider shown, grid hidden */
        .pf-trust-grid {
          display: none;
        }
        .pf-trust-slider-wrap {
          position: relative;
        }

        /* ≥ 992px — static row, slider hidden */
        @media (min-width: 992px) {
          .pf-trust-grid {
            display: grid;
            grid-template-columns: repeat(3, auto);
            justify-content: space-around;
            gap: 24px;
            justify-items: center;
          }
          .pf-trust-slider-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}
