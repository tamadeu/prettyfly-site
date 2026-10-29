'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { jewelleryProducts } from '@/data/jewellery-products';

import 'swiper/css';

const PRODUCTS = jewelleryProducts;

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

export function JewelleryProductSlider() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section>
      <div className="container-main">

        {/* Heading */}
        <div className="jwps-heading-wrap">
          <h2 className="jwps-heading">New Arrivals</h2>
        </div>

        {/* Slider */}
        <div className="jwps-slider-outer">
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
                  <HomeProductCard
                    product={product}
                    hrefBase="/products"
                    index={i}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous"
            className="jwps-nav jwps-nav-prev"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next"
            className="jwps-nav jwps-nav-next"
          >
            <IconChevronRight />
          </button>
        </div>

      </div>

      <style>{`
        .jwps-heading-wrap {
          text-align: center;
          margin-bottom: clamp(24px, 3vw, 40px);
        }
        .jwps-heading {
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .jwps-slider-outer {
          position: relative;
        }

        .jwps-nav {
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
        .jwps-nav-prev { left: -22px; }
        .jwps-nav-next { right: -22px; }
        .jwps-nav:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }

        @media (max-width: 749px) {
          .jwps-nav { display: none; }
        }
      `}</style>
    </section>
  );
}
