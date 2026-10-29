'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconChevronLeft({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconChevronRight({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const categories = [
  { id: 'smart',   label: 'Smart Watch',    image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu1.webp', href: '/smart-watches/shop?category=Smart+Watch' },
  { id: 'luxury',  label: 'Luxury Watches', image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu2.webp', href: '/smart-watches/shop?category=Luxury+Watches' },
  { id: 'digital', label: 'Digital Watches',image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu3.webp', href: '/smart-watches/shop?category=Digital+Watches' },
  { id: 'sports',  label: 'Sports Watches', image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu4.webp', href: '/smart-watches/shop?category=Sports+Watches' },
  { id: 'classic', label: 'Classic Watches',image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu5.webp', href: '/smart-watches/shop' },
];

export function SWCategoriesSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="swcat-section">
      <div className="container-main">

        {/* ── Header ── */}
        <div className="swcat-header">
          <h2 className="swcat-heading">Shop by categories</h2>
          <Link href="/smart-watches/categories" className="swcat-view-all">
            View All Categories <IconChevronRight size={16} />
          </Link>
        </div>

        {/* ── Slider wrapper — arrows sit at left/right edges ── */}
        <div className="swcat-slider-wrap">

          <button
            className="swcat-nav swcat-nav--prev"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous categories"
          >
            <IconChevronLeft size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiper}
            slidesPerView={2}
            spaceBetween={14}
            breakpoints={{
              750: { slidesPerView: 3, spaceBetween: 20 },
              992: { slidesPerView: 4, spaceBetween: 20 },
            }}
            loop={categories.length > 4}
            speed={520}
            grabCursor
            style={{ overflow: 'hidden' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link href={cat.href} className="swcat-card">
                  <div className="swcat-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      quality={95}
                      style={{ objectFit: 'contain' }}
                      sizes="(min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                    />
                  </div>
                  <span className="swcat-label">{cat.label}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swcat-nav swcat-nav--next"
            onClick={() => swiper?.slideNext()}
            aria-label="Next categories"
          >
            <IconChevronRight size={20} />
          </button>

        </div>
      </div>

      <style>{`
        .swcat-section { width: 100%; }

        /* ── Header ── */
        .swcat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          gap: 16px;
        }
        .swcat-heading {
          font-size: clamp(20px, 2.2vw, 32px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }
        .swcat-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 17px;
          font-weight: 500;
          color: #333;
          text-decoration: underline;
          text-underline-offset: 3px;
          white-space: nowrap;
          transition: color 200ms ease;
        }
        .swcat-view-all:hover { color: #000; }

        /* ── Slider wrapper ── */
        .swcat-slider-wrap { position: relative; }

        /* Circular nav arrows — same pattern as Featured Products */
        .swcat-nav {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #ddd;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          transition: background 200ms ease, border-color 200ms ease;
        }
        .swcat-nav:hover { background: #f0f0f0; border-color: #bbb; }
        .swcat-nav--prev { left: 0; }
        .swcat-nav--next { right: 0; }

        /* ── Card ── */
        .swcat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          transition: transform 250ms ease;
        }
        .swcat-card:hover { transform: translateY(-4px); }

        .swcat-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #f5f5f5;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        .swcat-img-wrap img { transition: transform 500ms ease; }
        .swcat-card:hover .swcat-img-wrap img { transform: scale(1.05); }

        .swcat-label {
          font-size: clamp(14px, 1.2vw, 18px);
          font-weight: 700;
          color: #111;
          line-height: 1.3;
        }

        /* ── Responsive ── */
        @media (max-width: 749px) {
          .swcat-nav { display: none; }
          .swcat-header { margin-bottom: 20px; }
        }
      `}</style>
    </section>
  );
}
