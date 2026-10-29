'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

/* ── Icons ── */

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* ── Category Data ── */

const categories = [
  { id: 'backpack-fashion', label: 'Backpack Fashion', items: 12, image: '/backpack/shop-by-categories/shop-by-categories-1.avif', href: '/shop?category=Backpack%20Fashion' },
  { id: 'travel-backpack', label: 'Travel Backpack', items: 12, image: '/backpack/shop-by-categories/shop-by-categories-2.avif', href: '/shop?category=Travel%20Backpack' },
  { id: 'travel-backpack-2', label: 'Travel Backpack', items: 12, image: '/backpack/shop-by-categories/shop-by-categories-3.avif', href: '/shop?category=Travel%20Backpack' },
  { id: 'camping-backpack', label: 'Camping Backpack', items: 12, image: '/backpack/shop-by-categories/shop-by-categories-4.avif', href: '/shop?category=Camping%20Backpack' },
  { id: 'school-backpack', label: 'School Backpack', items: 12, image: '/backpack/shop-by-categories/shop-by-categories-5.avif', href: '/shop?category=School%20Backpack' },
  /* repeats so loop has enough slides at every breakpoint (Phone Case pattern) */
  { id: 'backpack-fashion-2', label: 'Backpack Fashion', items: 12, image: '/backpack/shop-by-categories/shop-by-categories-1.avif', href: '/shop?category=Backpack%20Fashion' },
  { id: 'travel-backpack-3', label: 'Travel Backpack', items: 12, image: '/backpack/shop-by-categories/shop-by-categories-2.avif', href: '/shop?category=Travel%20Backpack' },
];

/* ── Component ── */

export function BackpackCategories() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="bp-cat-section">
      <div className="container-main">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>
            Shop by categories
          </h2>
          <p style={{ fontSize: '15px', color: '#777', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            Shop by categories to easily discover a variety of styles, sizes, and designs
            tailored to your everyday journey and adventure needs.
          </p>
        </div>

        {/* Slider */}
        <div style={{ position: 'relative', marginTop: '40px' }}>
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              750: { slidesPerView: 3, spaceBetween: 20 },
              992: { slidesPerView: 4, spaceBetween: 20 },
              1200: { slidesPerView: 5, spaceBetween: 24 },
            }}
            spaceBetween={14}
            loop
            speed={600}
            style={{ overflow: 'hidden' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link href={cat.href} className="bp-cat-card" aria-label={`Shop ${cat.label}`}>
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="bp-cat-card-img"
                    style={{ objectFit: 'cover', transition: 'transform 600ms ease' }}
                    sizes="(max-width: 749px) 70vw, 20vw"
                  />
                  <div className="bp-cat-overlay" />
                  <div className="bp-cat-meta">
                    <span className="bp-cat-label">{cat.label}</span>
                    <span className="bp-cat-items">{cat.items} Items</span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows — appear on section hover */}
          <button
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous categories"
            className="bp-cat-nav-prev"
          >
            <IconArrowLeftS size={20} />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next categories"
            className="bp-cat-nav-next"
          >
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .bp-cat-card {
          position: relative;
          display: block;
          width: 100%;
          height: 380px;
          overflow: hidden;
          border-radius: 4px;
          background-color: #f5f5f5;
          text-decoration: none;
        }
        .bp-cat-card:hover .bp-cat-card-img {
          transform: scale(1.06);
        }
        .bp-cat-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 100%);
        }
        .bp-cat-meta {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .bp-cat-label {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }
        .bp-cat-items {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
        }

        .bp-cat-nav-prev,
        .bp-cat-nav-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          opacity: 0;
          transition: opacity 400ms ease, background-color 250ms ease, color 250ms ease;
        }
        .bp-cat-nav-prev { left: 10px; }
        .bp-cat-nav-next { right: 10px; }
        .bp-cat-section:hover .bp-cat-nav-prev { opacity: 1; }
        .bp-cat-section:hover .bp-cat-nav-next { opacity: 1; }
        .bp-cat-nav-prev:hover,
        .bp-cat-nav-next:hover { background-color: #000; color: #fff; }

        @media (max-width: 749px) {
          .bp-cat-card { height: 320px; }
          .bp-cat-nav-prev, .bp-cat-nav-next { display: none !important; }
        }
      `}</style>
    </section>
  );
}
