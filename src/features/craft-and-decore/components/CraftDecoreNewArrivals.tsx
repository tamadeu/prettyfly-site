'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { craftAndDecoreProducts } from '@/data/craft-and-decore-products';

import 'swiper/css';

const PRODUCTS = craftAndDecoreProducts.slice(0, 8);

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

export function CraftDecoreNewArrivals() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section>
      <div className="container-main">
        <div className="cdna-heading-wrap">
          <h2 className="cdna-heading">New Arrivals</h2>
        </div>

        <div className="cdna-slider-outer">
          <div style={{ overflow: 'hidden', padding: '4px 0 8px' }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
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
                  <HomeProductCard product={product} hrefBase="/products" index={i} showCountdown={false} showScrollText={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="cdna-nav cdna-nav-prev">
            <IconChevronLeft />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="cdna-nav cdna-nav-next">
            <IconChevronRight />
          </button>
        </div>
      </div>

      <style>{`
        .cdna-heading-wrap { text-align: center; margin-bottom: clamp(24px, 3vw, 40px); }
        .cdna-heading { font-size: clamp(22px, 2.8vw, 36px); font-weight: 700; color: #171712; margin: 0; letter-spacing: -0.02em; }

        .cdna-slider-outer { position: relative; }

        .cdna-slider-outer .fc-card > a:first-child {
          width: 100% !important;
          max-width: 345px;
          height: auto !important;
          aspect-ratio: 1 / 1 !important;
          margin-left: auto;
          margin-right: auto;
        }
        .cdna-slider-outer .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: #f5f5f5;
        }
        .cdna-nav {
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #171712;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          opacity: 0;
          pointer-events: none;
          transition: opacity 300ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease;
        }
        .cdna-slider-outer:hover .cdna-nav { opacity: 1; pointer-events: auto; }
        .cdna-nav-prev { left: -22px; }
        .cdna-nav-next { right: -22px; }
        .cdna-nav:hover { background-color: #a9673f; border-color: #a9673f; color: #fff; box-shadow: 0 4px 14px rgba(0,0,0,0.15); }

        @media (max-width: 749px) { .cdna-nav { display: none; } }
      `}</style>
    </section>
  );
}
