'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { megastoreProducts } from '@/data/megastore-products';

import 'swiper/css';

function IconArrowLeft({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* 10 products feed the slider (16 in dataset — slice picks a varied set) */
const sliderProducts = megastoreProducts.slice(0, 10);

export function MegastoreFeaturedCollection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="ms-fcol">
      <div className="container-main">
        <div className="ms-fcol-head">
          <h2 className="ms-fcol-title">Featured Collection</h2>
          <Link href="/megastore/categories" className="ms-fcol-viewall">
            <span>View All Categories</span>
            <IconArrowRight />
          </Link>
        </div>

        <div className="ms-fcol-slider-wrap" style={{ position: 'relative', minWidth: 0 }}>
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 12 },
              750: { slidesPerView: 3, spaceBetween: 16 },
              992: { slidesPerView: 4, spaceBetween: 18 },
              1200: { slidesPerView: 5, spaceBetween: 20 },
            }}
            spaceBetween={10}
            loop
            speed={600}
            style={{ overflow: 'hidden' }}
          >
            {sliderProducts.map((product, i) => (
              <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                <div
                  className="ms-fcol-card"
                  style={{
                    background: '#fff',
                    borderRadius: 10,
                    overflow: 'hidden',
                    padding: 14,
                    height: '100%',
                    boxSizing: 'border-box',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                    transition: 'box-shadow 250ms ease, transform 250ms ease',
                  }}
                >
                  <HomeProductCard
                    product={product}
                    index={i}
                    hrefBase="/megastore/product"
                    showCountdown={false}
                    showScrollText={false}
                    imageHeight="290px"
                    themeColor="#f26522"
                    countdownBg="#f26522"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous products"
            className="ms-fcol-nav ms-fcol-nav-prev"
          >
            <IconArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next products"
            className="ms-fcol-nav ms-fcol-nav-next"
          >
            <IconArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        /* Force the card surface to white — HomeProductCard sets its image-link bg to #f5f5f5 */
        .ms-fcol-card,
        .ms-fcol-card .fc-card,
        .ms-fcol-card .fc-card a {
          background-color: #fff !important;
          background: #fff !important;
        }
        .ms-fcol-card:hover {
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .ms-fcol-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(18px, 2vw, 28px);
          gap: 16px;
          flex-wrap: wrap;
        }
        .ms-fcol-title {
          font-size: clamp(22px, 1.9vw, 30px);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.4px;
        }
        .ms-fcol-viewall {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(13px, 1vw, 15px);
          font-weight: 500;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 200ms ease;
        }
        .ms-fcol-viewall:hover { color: #f26522; }

        /* ── Slider nav arrows (hover-to-reveal, matches MegastoreSliderBanner) ── */
        .ms-fcol-nav {
          position: absolute;
          top: 50%;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #fff;
          color: #222;
          border: 1.5px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          transform: translateY(-50%) translateX(0);
          transition:
            opacity 350ms ease,
            transform 300ms ease,
            background-color 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }
        .ms-fcol-nav-prev { left: 10px; transform: translateY(-50%) translateX(-6px); }
        .ms-fcol-nav-next { right: 10px; transform: translateY(-50%) translateX(6px); }

        .ms-fcol-slider-wrap:hover .ms-fcol-nav {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        .ms-fcol-nav:hover {
          background-color: #f26522;
          border-color: #f26522;
          color: #fff;
        }
        .ms-fcol-nav:focus-visible {
          outline: 2px solid #f26522;
          outline-offset: 2px;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        /* ── < 480px — tighten image height for 2-up narrow cards ── */
        @media (max-width: 479px) {
          .ms-fcol-card .fc-card > a:first-child {
            height: clamp(120px, 34vw, 180px) !important;
          }
        }
      `}</style>
    </section>
  );
}
