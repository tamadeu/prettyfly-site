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

function IconCheckCircle({ size = 46 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const badges = [
  { id: 'shipping', Icon: IconBox,         title: 'Free Shipping & Return', desc: 'Free Shipping for all order over $100' },
  { id: 'support',  Icon: IconHeadset,     title: 'Online Support',         desc: '24 hours a day, 7 days a week' },
  { id: 'secure',   Icon: IconShieldCheck, title: 'Secure Payment',         desc: 'Pay with Multiple Credit Cards' },
  { id: 'money',    Icon: IconCheckCircle, title: 'Money Guarantee',        desc: 'Within 30 days for an exchange.' },
];

export function BFTrustBadges() {
  return (
    <section className="bftrust-section">
      <div className="container-main">
        {/* Desktop (≥992px) — static 4-column row */}
        <div className="bftrust-grid">
          {badges.map(({ Icon, title, desc, id }) => (
            <div key={id} className="bftrust-card">
              <span className="bftrust-icon"><Icon /></span>
              <div>
                <h3 className="bftrust-title">{title}</h3>
                <p className="bftrust-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet (<992px) — Swiper */}
        <div className="bftrust-slider-wrap">
          <Swiper slidesPerView={1} spaceBetween={16} loop speed={500} style={{ overflow: 'hidden' }}>
            {badges.map(({ Icon, title, desc, id }) => (
              <SwiperSlide key={id}>
                <div className="bftrust-card bftrust-card--slide">
                  <span className="bftrust-icon"><Icon /></span>
                  <div>
                    <h3 className="bftrust-title">{title}</h3>
                    <p className="bftrust-desc">{desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .bftrust-section { padding: 0; }
        .bftrust-card {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .bftrust-card--slide {
          justify-content: center;
          padding: 4px 12px;
        }
        .bftrust-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #222;
          flex-shrink: 0;
        }
        .bftrust-title {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 5px;
          line-height: 1.2;
        }
        .bftrust-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }

        .bftrust-grid { display: none; }
        .bftrust-slider-wrap { position: relative; }

        @media (min-width: 992px) {
          .bftrust-grid {
            display: grid;
            grid-template-columns: repeat(4, auto);
            justify-content: space-around;
            gap: 24px;
            justify-items: center;
          }
          .bftrust-slider-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}
