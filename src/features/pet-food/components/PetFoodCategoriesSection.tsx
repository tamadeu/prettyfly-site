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
  { id: 'kitten-food', label: 'Kitten Food', items: 10, image: '/pet-food/categories-mega-menu/categories-mega-menu1.webp', href: '/pet-food/shop?category=Kitten%20Food' },
  { id: 'pet-food', label: 'Pet Food', items: 10, image: '/pet-food/categories-mega-menu/categories-mega-menu3.webp', href: '/pet-food/shop?category=Pet%20Food' },
  { id: 'puppy-food', label: 'Puppy Food', items: 10, image: '/pet-food/categories-mega-menu/categories-mega-menu4.webp', href: '/pet-food/shop?category=Puppy%20Food' },
  { id: 'cat-food', label: 'Cat Food', items: 10, image: '/pet-food/categories-mega-menu/categories-mega-menu5.webp', href: '/pet-food/shop?category=Cat%20Food' },
  { id: 'dogs-food', label: 'Dogs Food', items: 10, image: '/pet-food/categories-mega-menu/categories-mega-menu2.webp', href: '/pet-food/shop?category=Dogs%20Food' },
  { id: 'dry-food', label: 'Dry Food', items: 8, image: '/pet-food/categories-mega-menu/categories-mega-menu1.webp', href: '/pet-food/shop?category=Dry%20Food' },
  { id: 'wet-food', label: 'Wet Food', items: 9, image: '/pet-food/categories-mega-menu/categories-mega-menu3.webp', href: '/pet-food/shop?category=Wet%20Food' },
];

export function PetFoodCategoriesSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="pfc-section">
      <div className="container-main">
        {/* Heading row */}
        <div className="pfc-heading-row">
          <h2 className="pfc-heading">Shop by Categories</h2>
          <div className="pfc-arrows">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous categories"
              className="pfc-nav-btn"
            >
              <IconArrowLeftS size={18} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next categories"
              className="pfc-nav-btn"
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
            750: { slidesPerView: 4 },
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
              <Link href={cat.href} className="pfc-card">
                <div className="pfc-card-img-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    quality={95}
                    style={{ objectFit: 'contain' }}
                    sizes="(min-width: 1200px) 240px, (min-width: 992px) 210px, (min-width: 750px) 180px, 150px"
                  />
                </div>
                <span className="pfc-card-label">{cat.label}</span>
                <span className="pfc-card-items">{cat.items} Items</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* ── Mobile base ── */
        .pfc-heading-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        /* ≤ 520px — centered heading, nav arrows hidden */
        @media (max-width: 520px) {
          .pfc-heading-row {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
          }
          .pfc-arrows {
            display: none;
          }
        }
        .pfc-heading {
          font-size: 22px;
          font-weight: 700;
          color: rgb(10, 66, 83);
          line-height: 1.2;
        }
        .pfc-arrows {
          display: flex;
          gap: 8px;
        }
        .pfc-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #e5e5e5;
          background-color: #fff;
          color: rgb(10, 66, 83);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .pfc-nav-btn:hover {
          background-color: rgb(10, 66, 83);
          border-color: rgb(10, 66, 83);
          color: #fff;
        }

        /* Clean card — no background, no padding. The image itself is
           the visual chip. Hover lifts the whole card slightly. */
        .pfc-card {
          display: grid;
          grid-template-rows: auto auto auto;
          justify-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          padding: 0;
          transition: transform 250ms ease;
        }
        .pfc-card:hover { transform: translateY(-3px); }

        .pfc-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          /* No crop — image is laid out with objectFit: contain so the full
             frame always fits inside the square, preserving aspect ratio. */
          max-width: 100%;
          margin-bottom: 16px;
          overflow: hidden;
        }
        .pfc-card-img-wrap img {
          transition: transform 500ms ease;
        }
        .pfc-card:hover .pfc-card-img-wrap img {
          transform: scale(1.05);
        }

        .pfc-card-label {
          display: block;
          font-size: 17px;
          font-weight: 700;
          color: rgb(10, 66, 83);
          letter-spacing: -0.1px;
          margin-bottom: 4px;
        }
        .pfc-card-items {
          display: block;
          font-size: 14px;
          color: #888;
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .pfc-heading { font-size: 26px; }
          .pfc-heading-row { margin-bottom: 28px; }
          .pfc-card-img-wrap { max-width: 100%; margin-bottom: 18px; }
          .pfc-card-label { font-size: 18px; }
        }

        /* ── ≥ 992px — small desktop ── */
        @media (min-width: 992px) {
          .pfc-heading { font-size: 30px; }
          .pfc-heading-row { margin-bottom: 32px; }
          .pfc-card-img-wrap { max-width: 100%; margin-bottom: 20px; }
          .pfc-card-label { font-size: 19px; }
          .pfc-card-items { font-size: 15px; }
          .pfc-nav-btn { width: 40px; height: 40px; }
        }

        /* ── ≥ 1200px — large desktop ── */
        @media (min-width: 1200px) {
          .pfc-heading { font-size: 32px; }
          .pfc-card-img-wrap { max-width: 100%; margin-bottom: 22px; }
          .pfc-card-label { font-size: 20px; }
        }
      `}</style>
    </section>
  );
}
