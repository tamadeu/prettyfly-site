'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconArrowLeft({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const BASE_CATEGORIES = [
  { id: 'living',  label: 'Living & Dining', image: '/furniture/shop-by-categories/shop-by-categories1.webp', href: '/shop?category=Living+%26+Dining' },
  { id: 'bedroom', label: 'Bedroom',         image: '/furniture/shop-by-categories/shop-by-categories2.webp', href: '/shop?category=Bedroom' },
  { id: 'office',  label: 'Office',          image: '/furniture/shop-by-categories/shop-by-categories3.webp', href: '/shop?category=Office' },
];

// Triple the slides so Swiper loop has enough duplicates at any slidesPerView
const categories = [...BASE_CATEGORIES, ...BASE_CATEGORIES, ...BASE_CATEGORIES];

export function FurnitureCategoriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="fucat-section">
      <div className="container-main">

        {/* Heading */}
        <h2 className="fucat-heading">Shop By Categories</h2>

        {/* Slider wrapper — arrows are absolutely positioned inside this */}
        <div className="fucat-slider-wrap">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            slidesPerView={1}
            breakpoints={{
              600: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            spaceBetween={16}
            loop
            speed={600}
            style={{ width: '100%' }}
          >
            {categories.map((cat, idx) => (
              <SwiperSlide key={`${cat.id}-${idx}`}>
                <Link href={cat.href} className="fucat-card">
                  <div className="fucat-card-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(min-width: 992px) 33vw, (min-width: 600px) 50vw, 100vw"
                    />
                  </div>
                  <span className="fucat-label">{cat.label}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows overlaid on the banner edges */}
          <button
            type="button"
            aria-label="Previous categories"
            className="fucat-arrow fucat-arrow-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IconArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next categories"
            className="fucat-arrow fucat-arrow-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IconArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .fucat-heading {
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 700;
          color: #111;
          text-align: center;
          margin-bottom: clamp(24px, 3vw, 40px);
          letter-spacing: -0.01em;
        }

        /* Relative container so arrows can be absolutely positioned */
        .fucat-slider-wrap {
          position: relative;
        }

        /* Arrow buttons — sit on top of the banner edges */
        .fucat-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #d0d0d0;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
        }
        .fucat-arrow:hover {
          background: #c8a45a;
          border-color: #c8a45a;
          color: #fff;
          box-shadow: 0 4px 14px rgba(200,164,90,0.30);
        }
        .fucat-arrow-prev { left: 12px; }
        .fucat-arrow-next { right: 12px; }

        /* Card */
        .fucat-card {
          display: block;
          position: relative;
          height: 650px;
          overflow: hidden;
          background: #e8e0d5;
          text-decoration: none;
        }
        .fucat-card-img-wrap {
          position: absolute;
          inset: 0;
        }
        .fucat-card-img-wrap img {
          transition: transform 600ms ease;
        }
        .fucat-card:hover .fucat-card-img-wrap img {
          transform: scale(1.04);
        }

        /* Label badge — bottom center */
        .fucat-label {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          color: #111;
          font-size: 14px;
          font-weight: 500;
          padding: 9px 28px;
          white-space: nowrap;
          border-radius: 2px;
          transition: background 260ms ease, color 260ms ease;
          pointer-events: none;
        }
        .fucat-card:hover .fucat-label {
          background: #c8a45a;
          color: #fff;
        }

        @media (max-width: 749px) {
          .fucat-card { height: clamp(320px, 70vw, 520px); }
          .fucat-arrow { width: 34px; height: 34px; }
        }

        @media (min-width: 750px) {
          .fucat-card { height: clamp(420px, 55vw, 600px); }
          .fucat-arrow { width: 42px; height: 42px; }
        }

        @media (min-width: 992px) {
          .fucat-card { height: 650px; }
        }
      `}</style>
    </section>
  );
}
