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

const collections = [
  { id: 'herbalife', label: 'Herbalife', items: 11, image: '/nutrition/categories-slider/categories-slider1.webp', href: '/nutrition/shop?category=Herbalife' },
  { id: 'muscletech', label: 'MuscleTech', items: 11, image: '/nutrition/categories-slider/categories-slider3.webp', href: '/nutrition/shop?category=MuscleTech' },
  { id: 'proteins', label: 'Proteins', items: 11, image: '/nutrition/categories-slider/categories-slider4.webp', href: '/nutrition/shop?category=Proteins' },
  { id: 'vitamins', label: 'Vitamins', items: 11, image: '/nutrition/categories-slider/categories-slider5.webp', href: '/nutrition/shop?category=Vitamins' },
  { id: 'ensure-plus', label: 'Ensure Plus', items: 11, image: '/nutrition/categories-slider/categories-slider6.webp', href: '/nutrition/shop?category=Ensure%20Plus' },
  { id: 'proteins-2', label: 'Proteins', items: 9, image: '/nutrition/categories-slider/categories-slider2.webp', href: '/nutrition/shop?category=Proteins' },
];

export function NutritionShopByCollection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="nsc-section">
      <div className="container-main">
        <div className="nsc-heading-row">
          <h2 className="nsc-heading">Shop by Collection</h2>
          <div className="nsc-arrows">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous collections"
              className="nsc-nav-btn"
            >
              <IconArrowLeftS size={18} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next collections"
              className="nsc-nav-btn"
            >
              <IconArrowRightS size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          slidesPerView={2}
          breakpoints={{
            750: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          spaceBetween={24}
          loop
          speed={600}
          style={{ overflow: 'hidden' }}
        >
          {collections.map((c) => (
            <SwiperSlide key={c.id}>
              <Link href={c.href} className="nsc-tile">
                <div className="nsc-circle">
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    quality={95}
                    style={{ objectFit: 'contain' }}
                    sizes="(min-width: 1200px) 280px, (min-width: 992px) 250px, (min-width: 750px) 215px, 180px"
                  />
                </div>
                <span className="nsc-label">{c.label}</span>
                <span className="nsc-count">{c.items} Items</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .nsc-section { padding: 0; }
        .nsc-heading-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .nsc-heading {
          font-size: 26px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.3px;
        }
        .nsc-arrows { display: flex; gap: 8px; }
        .nsc-nav-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
        }
        .nsc-nav-btn:hover {
          background-color: rgb(140, 255, 100);
          border-color: rgb(140, 255, 100);
          color: #0e1a0a;
        }

        .nsc-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          padding: 0;
          transition: transform 250ms ease;
        }
        .nsc-tile:hover { transform: translateY(-3px); }

        .nsc-circle {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          max-width: 180px;
          border-radius: 50%;
          overflow: hidden;
          background: #f4f5f7;
          margin-bottom: 16px;
        }
        .nsc-circle img { transition: transform 500ms ease; }
        .nsc-tile:hover .nsc-circle img { transform: scale(1.06); }

        .nsc-label {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #222;
          margin-bottom: 4px;
        }
        .nsc-count {
          display: block;
          font-size: 13px;
          color: #888;
        }

        @media (max-width: 749px) {
          .nsc-heading-row {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .nsc-heading { text-align: center; font-size: clamp(20px, 5.5vw, 26px); }
        }

        @media (min-width: 750px) {
          .nsc-heading { font-size: 32px; }
          .nsc-circle { max-width: 215px; }
        }
        @media (min-width: 992px) {
          .nsc-heading { font-size: 38px; }
          .nsc-circle { max-width: 250px; }
          .nsc-label { font-size: 18px; }
          .nsc-count { font-size: 14px; }
        }
        @media (min-width: 1200px) {
          .nsc-heading { font-size: 40px; }
          .nsc-circle { max-width: 280px; }
          .nsc-label { font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
