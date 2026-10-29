'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { coffeeProducts } from '@/data/coffee-products';

import 'swiper/css';

const PRODUCTS = coffeeProducts.slice(0, 8);

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

export function CoffeeNewArrivals() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="cfna-section">
      <div className="container-main">
        <div className="cfna-heading-wrap">
          <h2 className="cfna-heading">New Arrivals</h2>
          <p className="cfna-subtitle">Express yourself—fashionable, refined, and effortlessly unique styles await.</p>
        </div>

        <div className="cfna-slider-outer">
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="cfna-nav cfna-nav-prev">
            <IconChevronLeft />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="cfna-nav cfna-nav-next">
            <IconChevronRight />
          </button>
        </div>
      </div>

      <style>{`
        .cfna-heading-wrap { text-align: center; margin-bottom: clamp(24px, 3vw, 36px); }
        .cfna-heading { font-size: clamp(22px, 2.6vw, 30px); font-weight: 700; color: #2a2118; margin-bottom: 10px; }
        .cfna-subtitle { font-size: 14px; color: #8a7c6a; }

        .cfna-slider-outer { position: relative; }

        .cfna-slider-outer .fc-card > a:first-child {
          width: 100% !important;
          height: auto !important;
          aspect-ratio: 1 / 1 !important;
        }
        .cfna-slider-outer .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: #f5f0e8;
        }
        .cfna-nav {
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e5d8c4;
          background-color: #fff;
          color: #2a2118;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease;
        }
        .cfna-nav-prev { left: -22px; }
        .cfna-nav-next { right: -22px; }
        .cfna-nav:hover { background-color: #c8874a; border-color: #c8874a; color: #fff; box-shadow: 0 4px 14px rgba(200,135,74,0.25); }

        @media (max-width: 749px) { .cfna-nav { display: none; } }
      `}</style>
    </section>
  );
}
