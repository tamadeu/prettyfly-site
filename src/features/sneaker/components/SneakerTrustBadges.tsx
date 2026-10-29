'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function IconBox({ size = 46 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconHeadset({ size = 46 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function IconShieldCheck({ size = 46 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

interface TrustBadge {
  id: string;
  Icon: ({ size }: { size?: number }) => React.JSX.Element;
  title: string;
  desc: string;
}

const badges: TrustBadge[] = [
  { id: 'shipping', Icon: IconBox,         title: 'Free Shipping & Return', desc: 'Free shipping for all orders over $99' },
  { id: 'support',  Icon: IconHeadset,     title: 'Customer Support 24/7',  desc: 'Instant access to expert support everyday' },
  { id: 'secure',   Icon: IconShieldCheck, title: '100% Secure Payment',    desc: 'We ensure secure payment for customers' },
];

export function SneakerTrustBadges() {
  return (
    <section className="sntrust-section">
      <div className="container-main">

        {/* Desktop: static 3-col row */}
        <div className="sntrust-grid">
          {badges.map(({ id, Icon, title, desc }) => (
            <div key={id} className="sntrust-card">
              <span className="sntrust-icon"><Icon size={46} /></span>
              <div>
                <h3 className="sntrust-title">{title}</h3>
                <p className="sntrust-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Swiper 1-up loop */}
        <div className="sntrust-slider-wrap">
          <Swiper slidesPerView={1} spaceBetween={16} loop speed={500} style={{ overflow: 'hidden' }}>
            {badges.map(({ id, Icon, title, desc }) => (
              <SwiperSlide key={id}>
                <div className="sntrust-card sntrust-card--slide">
                  <span className="sntrust-icon"><Icon size={46} /></span>
                  <div>
                    <h3 className="sntrust-title">{title}</h3>
                    <p className="sntrust-desc">{desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style>{`
        .sntrust-section { padding: 0; }

        .sntrust-grid {
          display: none;
          grid-template-columns: repeat(3, auto);
          justify-content: space-around;
          justify-items: center;
          gap: 24px;
        }
        .sntrust-slider-wrap { display: block; }

        .sntrust-card {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .sntrust-card--slide {
          padding: 4px 12px;
          justify-content: center;
        }
        .sntrust-icon {
          color: #e84d1c;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sntrust-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin-bottom: 6px;
        }
        .sntrust-desc {
          font-size: 16px;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        @media (min-width: 992px) {
          .sntrust-grid { display: grid; }
          .sntrust-slider-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}
