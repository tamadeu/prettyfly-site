'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { groceryProducts } from '@/data/grocery-products';
import { GroceryProductCard } from './GroceryProductCard';

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

const collectionProducts = groceryProducts.slice(0, 8);

export function GroceryFeaturedCollection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="gfc-section">
      <div className="container-main">
        <div className="gfc-heading-row">
          <h2 className="gfc-heading">Featured Collection</h2>
          <Link href="/shop" className="gfc-view-all">
            View All
            <IconArrowRight size={16} />
          </Link>
        </div>

        <div className="gfc-grid">
          {/* Left: Banner — 30% */}
          <div className="gfc-banner">
            <Image
              src="/grocery-shop/banner/banner4.webp"
              alt="Fresh Fruits — New Collection"
              fill
              className="gfc-banner-img"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 991px) 100vw, 30vw"
            />
            <div className="gfc-banner-content">
              <h3 className="gfc-banner-title">Fresh Fruits</h3>
              <p className="gfc-banner-subtitle">NEW COLLECTION</p>
              <Link href="/shop" className="gfc-banner-cta">SHOP NOW</Link>
            </div>
          </div>

          {/* Right: Slider — 70% */}
          <div className="gfc-slider-wrap">
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView={2}
              breakpoints={{
                750: { slidesPerView: 2, spaceBetween: 16 },
                992: { slidesPerView: 3, spaceBetween: 20 },
              }}
              spaceBetween={10}
              loop
              speed={600}
              style={{ overflow: 'hidden' }}
            >
              {collectionProducts.map((product, i) => (
                <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                  <GroceryProductCard product={product} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous products"
              className="gfc-nav gfc-nav-prev"
            >
              <IconArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next products"
              className="gfc-nav gfc-nav-next"
            >
              <IconArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .gfc-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .gfc-heading {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.2px;
        }
        .gfc-view-all {
          font-size: 17px;
          font-weight: 500;
          color: #222;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding-bottom: 3px;
          border-bottom: 1.5px solid #222;
          transition: color 200ms ease, border-color 200ms ease;
        }
        .gfc-view-all:hover {
          color: #1B8057;
          border-color: #1B8057;
        }

        /* ── Mobile-first: single column stack ── */
        .gfc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
        }

        /* ── Banner ── */
        .gfc-banner {
          position: relative;
          height: 320px;
          border-radius: 12px;
          overflow: hidden;
        }
        .gfc-banner-img {
          transition: transform 700ms ease;
        }
        .gfc-banner:hover .gfc-banner-img {
          transform: scale(1.04);
        }
        .gfc-banner-content {
          position: absolute;
          top: 28px;
          left: 28px;
          right: 28px;
          z-index: 2;
        }
        .gfc-banner-title {
          font-size: 30px;
          font-weight: 700;
          color: #1f1f1f;
          margin: 0 0 18px;
          letter-spacing: -0.3px;
        }
        .gfc-banner-subtitle {
          font-size: 15px;
          font-weight: 500;
          color: #555;
          letter-spacing: 1.4px;
          margin: 0 0 24px;
        }
        .gfc-banner-cta {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          color: #1f1f1f;
          letter-spacing: 1px;
          text-decoration: none;
          border-bottom: 1.5px solid #1f1f1f;
          padding: 0 0 4px;
        }

        /* ── Slider ── */
        .gfc-slider-wrap {
          position: relative;
          min-width: 0;
        }

        .gfc-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) translateX(0);
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
          transition:
            opacity 350ms ease,
            transform 300ms ease,
            background-color 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }
        .gfc-nav-prev {
          left: 10px;
          transform: translateY(-50%) translateX(-6px);
        }
        .gfc-nav-next {
          right: 10px;
          transform: translateY(-50%) translateX(6px);
        }

        /* Hover on the slider area fades buttons in smoothly */
        .gfc-slider-wrap:hover .gfc-nav {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        .gfc-nav:hover {
          background-color: #1B8057;
          border-color: #1B8057;
          color: #fff;
        }
        .gfc-nav:focus-visible {
          outline: 2px solid #1B8057;
          outline-offset: 2px;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        /* ── ≥ 750px — tablet: 2 slides handled by Swiper breakpoints; banner gets a bit taller ── */
        @media (min-width: 750px) {
          .gfc-heading { font-size: 28px; }
          .gfc-banner { height: 380px; }
        }

        /* ── ≥ 992px — desktop: 30 / 70 split, banner 490px, slider 3-up ── */
        @media (min-width: 992px) {
          .gfc-heading { font-size: 30px; }
          .gfc-grid { grid-template-columns: 30% 70%; gap: 24px; }
          .gfc-banner { height: 490px; }
          .gfc-banner-content { top: 32px; left: 32px; right: 32px; }
          .gfc-banner-title { font-size: 34px; margin-bottom: 20px; }
          .gfc-banner-subtitle { font-size: 16px; }
          .gfc-banner-cta { font-size: 17px; }
        }
      `}</style>
    </section>
  );
}
