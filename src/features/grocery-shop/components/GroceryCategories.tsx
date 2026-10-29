'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconArrowLeftS({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const categories = [
  { id: 'drinks', label: 'Drinks & Juice', items: 13, image: '/grocery-shop/categories-slider/categories-slider1.webp', href: '/shop' },
  { id: 'fruits', label: 'Fresh Fruits', items: 13, image: '/grocery-shop/categories-slider/categories-slider2.webp', href: '/shop' },
  { id: 'grocery', label: 'Grocery store', items: 13, image: '/grocery-shop/categories-slider/categories-slider3.webp', href: '/shop' },
  { id: 'vegetables', label: 'Vegetables', items: 13, image: '/grocery-shop/categories-slider/categories-slider4.webp', href: '/shop' },
  { id: 'seafood', label: 'Seafood', items: 12, image: '/grocery-shop/categories-slider/categories-slider5.webp', href: '/shop' },
  { id: 'meats', label: 'Meats', items: 9, image: '/grocery-shop/categories-slider/categories-slider1.webp', href: '/shop' },
  { id: 'dairy', label: 'Milk & Dairies', items: 14, image: '/grocery-shop/categories-slider/categories-slider2.webp', href: '/shop' },
];

export function GroceryCategories() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="gc-section">
      <div className="container-main">
        {/* Heading row */}
        <div className="gc-heading-row">
          <h2 className="gc-heading">Shop by Categories</h2>
          <div className="gc-arrows">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous categories"
              className="gc-nav-btn"
            >
              <IconArrowLeftS size={18} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next categories"
              className="gc-nav-btn"
            >
              <IconArrowRightS size={18} />
            </button>
          </div>
        </div>

        {/* Slider — mobile-first slide counts */}
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          slidesPerView={2}
          breakpoints={{
            750: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          spaceBetween={16}
          loop
          speed={600}
          style={{ overflow: 'hidden' }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href={cat.href} className="gc-card">
                <div className="gc-card-img-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    quality={95}
                    style={{ objectFit: 'contain' }}
                    sizes="(min-width: 1200px) 80px, (min-width: 992px) 72px, (min-width: 750px) 68px, 60px"
                  />
                </div>
                <span className="gc-card-label">{cat.label}</span>
                <span className="gc-card-items">{cat.items} Items</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* ── Mobile base ── */
        .gc-heading-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .gc-heading {
          font-size: 22px;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
        }
        .gc-arrows {
          display: flex;
          gap: 8px;
        }
        .gc-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #e5e5e5;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .gc-nav-btn:hover {
          background-color: #1B8057;
          border-color: #1B8057;
          color: #fff;
        }

        .gc-card {
          display: grid;
          grid-template-rows: auto auto auto;
          justify-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          background-color: rgb(248, 250, 251);
          border-radius: 12px;
          padding: 3rem 2rem 2rem; /* 30px 20px 20px — mobile */
        }

        .gc-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          max-width: 60px;
          margin-bottom: 1.8rem;
        }

        .gc-card-label {
          display: block;
          font-size: 17px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.1px;
          margin-bottom: 4px;
        }
        .gc-card-items {
          display: block;
          font-size: 14px;
          color: #888;
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .gc-heading { font-size: 26px; }
          .gc-heading-row { margin-bottom: 28px; }
          .gc-card { padding: 4rem 2.5rem 2.5rem; }
          .gc-card-img-wrap { max-width: 68px; }
          .gc-card-label { font-size: 18px; }
        }

        /* ── ≥ 992px — small desktop ── */
        @media (min-width: 992px) {
          .gc-heading { font-size: 30px; }
          .gc-heading-row { margin-bottom: 32px; }
          .gc-card { padding: 5rem 3rem 3rem; } /* 50px 30px 30px — spec */
          .gc-card-img-wrap { max-width: 72px; margin-bottom: 2rem; }
          .gc-card-label { font-size: 19px; }
          .gc-card-items { font-size: 15px; }
          .gc-nav-btn { width: 40px; height: 40px; }
        }

        /* ── ≥ 1200px — large desktop ── */
        @media (min-width: 1200px) {
          .gc-heading { font-size: 32px; }
          .gc-card-img-wrap { max-width: 80px; }
          .gc-card-label { font-size: 20px; }
        }
      `}</style>
    </section>
  );
}
