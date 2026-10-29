'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

import 'swiper/css';

/* ── Remix Icons — the View All arrow is sized in `em` so it always
   exactly matches the button's font-size. ── */
function IconArrowRight({ size = '1em' }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} style={{ display: 'block', flexShrink: 0 }}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}
function IconChevronLeft({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}
function IconChevronRight({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const END_DATE = new Date('2027-10-04T12:00:00Z');

function getRemaining() {
  const diff = Math.max(0, END_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hrs: Math.floor((diff % 86400000) / 3600000),
    min: Math.floor((diff % 3600000) / 60000),
    sec: Math.floor((diff % 60000) / 1000),
  };
}

/* ── Deals Products — section heading + top-right live countdown, now a
   Swiper slider matching the same slider mechanics/nav/breakpoints used
   across the site's other homepage product sliders (Phone Case's
   PCNewArrivals.tsx is the reference: 2/3/4 slidesPerView, 24px gap, loop,
   hover-independent circular prev/next buttons). Fetches 8 products (not 4)
   so loop mode has enough real slides at slidesPerView=4. ── */

export function ToysDealsProducts() {
  const [t, setT] = useState(getRemaining);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const { data, isLoading } = useProducts({ limit: 8 }, { endpoint: '/api/toys-products' });
  const products = data?.products.slice(0, 8) || [];

  const cells = [
    { value: t.days, label: 'Days' },
    { value: t.hrs, label: 'Hrs' },
    { value: t.min, label: 'Min' },
    { value: t.sec, label: 'Sec' },
  ];

  return (
    <section className="tydp-section">
      <div className="container-main">
        <div className="tydp-header">
          <h2 className="tydp-heading">Deals Products</h2>
          <div className="tydp-countdown-wrap">
            <span className="tydp-countdown-label">Hurry up! Offer ends in:</span>
            <div className="tydp-clock">
              {cells.map((c) => (
                <div key={c.label} className="tydp-cell">
                  <span className="tydp-val">{c.value}</span>
                  <span className="tydp-lbl">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tydp-slider-outer">
          <div style={{ overflow: 'hidden', padding: '4px 0 8px' }}>
            {isLoading ? (
              <div className="tydp-grid">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <div className="animate-shimmer" style={{ aspectRatio: '3 / 4', borderRadius: '4px', marginBottom: '14px' }} />
                  </div>
                ))}
              </div>
            ) : (
              <Swiper
                modules={[Navigation]}
                onSwiper={(s) => { swiperRef.current = s; }}
                slidesPerView={2}
                breakpoints={{
                  600: { slidesPerView: 2 },
                  750: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                spaceBetween={20}
                loop
                speed={600}
                style={{ overflow: 'visible' }}
              >
                {products.map((product, i) => (
                  <SwiperSlide key={product.id}>
                    <HomeProductCard
                      product={product}
                      index={i}
                      showCountdown={false}
                      showScrollText={false}
                      imageHeight="345px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            className="tydp-nav tydp-nav-prev"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            className="tydp-nav tydp-nav-next"
          >
            <IconChevronRight />
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/shop" className="tydp-view-all">
            View All
            <IconArrowRight />
          </Link>
        </div>
      </div>

      <style>{`
        .tydp-header {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }
        .tydp-heading {
          font-size: clamp(22px, 2.6vw, 28px);
          font-weight: 700;
          color: #222;
        }
        .tydp-countdown-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .tydp-countdown-label {
          font-size: 14px;
          color: #666;
        }
        .tydp-clock {
          display: flex;
          gap: 8px;
        }
        .tydp-cell {
          background-color: #111;
          color: #fff;
          border-radius: 4px;
          padding: 6px 12px;
          text-align: center;
          min-width: 44px;
        }
        .tydp-val {
          display: block;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
        }
        .tydp-lbl {
          display: none;
        }

        /* Loading-state grid (skeletons only — the real slider replaces this) */
        .tydp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        @media (min-width: 750px) {
          .tydp-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }

        /* ── Slider outer — same pattern as Phone Case's pcna-slider-outer ── */
        .tydp-slider-outer {
          position: relative;
        }
        .tydp-slider-outer .fc-card > a:first-child {
          background-color: transparent !important;
        }
        .tydp-slider-outer .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: transparent !important;
        }

        /* ── Nav buttons — hidden by default, revealed on section hover,
           matching the same treatment as the Top Categories slider (and
           Glasses'/other homepages' hover-reveal product sliders). ── */
        .tydp-nav {
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          opacity: 0;
          transition: opacity 250ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease;
        }
        .tydp-nav-prev { left: -22px; }
        .tydp-nav-next { right: -22px; }
        .tydp-section:hover .tydp-nav { opacity: 1; }
        .tydp-nav:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 749px) {
          .tydp-nav { display: none; }
        }

        @media (min-width: 750px) {
          .tydp-header { flex-direction: row; align-items: center; justify-content: space-between; }
        }

        .tydp-view-all {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 30px;
          font-size: 15px;
          line-height: 1;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          border-radius: 40px;
          text-decoration: none;
          background: none;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .tydp-view-all:hover { background-color: #222; color: #fff; }
      `}</style>
    </section>
  );
}
