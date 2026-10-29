'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { phoneCaseProducts } from '@/data/phone-case-products';

import 'swiper/css';

const PRODUCTS = phoneCaseProducts.slice(0, 8);

function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function PCNewArrivals() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pcna-section">
      <div className="container-main">

        {/* Heading row: title left, View All right */}
        <div className="pcna-header">
          <h2 className="pcna-title">New Arrivals</h2>
          <Link href="/phone-case/shop" className="pcna-view-all">
            View All
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14} aria-hidden="true">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </Link>
        </div>

        {/* Slider — jwps-slider-outer pattern */}
        <div className="pcna-slider-outer">
          <div style={{ overflow: 'hidden', padding: '4px 0 8px' }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => { swiperRef.current = s; }}
              slidesPerView={2}
              breakpoints={{
                600: { slidesPerView: 2 },
                750: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
              spaceBetween={24}
              loop
              speed={600}
              style={{ overflow: 'visible' }}
            >
              {PRODUCTS.map((product, i) => (
                <SwiperSlide key={product.id}>
                  <HomeProductCard
                    product={product}
                    hrefBase="/phone-case/product"
                    index={i}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            className="pcna-nav pcna-nav-prev"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            className="pcna-nav pcna-nav-next"
          >
            <IconChevronRight />
          </button>
        </div>

      </div>

      <style>{`
        /* ── Header ── */
        .pcna-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: clamp(24px, 3vw, 40px);
        }
        .pcna-title {
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .pcna-view-all {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          white-space: nowrap;
          border: 1px solid #ccc;
          padding: 6px 14px;
          border-radius: 4px;
          transition: border-color 200ms ease, color 200ms ease;
        }
        .pcna-view-all:hover { border-color: #111; color: #111; }

        /* ── Slider outer — identical to jwps-slider-outer ── */
        .pcna-slider-outer {
          position: relative;
        }

        /* ── Nav buttons — identical to jwps-nav ── */
        .pcna-nav {
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
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease;
        }
        .pcna-nav-prev { left: -22px; }
        .pcna-nav-next { right: -22px; }
        .pcna-nav:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }

        @media (max-width: 749px) {
          .pcna-nav { display: none; }
        }
      `}</style>
    </section>
  );
}
