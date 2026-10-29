'use client';

import { useState } from 'react';
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

const categories = [
  { id: 'sports',    label: 'Sports',    items: 11, image: '/sneaker/categories-mega-menu-slider/categories-mega-menu-slider2.webp',   href: '/shop?category=Sports' },
  { id: 'sneakers',  label: 'Sneakers',  items: 12, image: '/sneaker/categories-mega-menu-slider/categories-mega-menu-slider5.webp',   href: '/shop?category=Sneakers' },
  { id: 'footwear',  label: 'Footwear',  items: 11, image: '/sneaker/categories-mega-menu-slider/categories-mega-menu-slider6.webp',   href: '/shop?category=Footwear' },
  { id: 'running',   label: 'Running',   items: 12, image: '/sneaker/categories-mega-menu-slider/categories-mega-menu-slider8.webp',   href: '/shop?category=Running' },
  { id: 'casual',    label: 'Casual',    items: 14, image: '/sneaker/categories-mega-menu-slider/categories-mega-menu-slider9.webp',   href: '/shop?category=Casual' },
  { id: 'loafers',   label: 'Loafers',   items: 9,  image: '/sneaker/categories-mega-menu-slider/categories-mega-menu-slider3.webp',  href: '/shop?category=Loafers' },
  { id: 'boots',     label: 'Boots',     items: 8,  image: '/sneaker/categories-mega-menu-slider/categories-mega-menu-slider4.webp',  href: '/shop?category=Boots' },
];

export function SneakerCategoriesSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="sncat-section">
      <div className="container-main">

        {/* Heading row */}
        <div className="sncat-heading-row">
          <h2 className="sncat-heading">Shop by Categories</h2>
          <div className="sncat-nav-wrap">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous categories"
              className="sncat-nav-btn"
            >
              <IconArrowLeft size={16} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next categories"
              className="sncat-nav-btn"
            >
              <IconArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="sncat-slider-wrap">
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2 },
              750: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            spaceBetween={16}
            loop
            speed={600}
            style={{ overflow: 'hidden' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link href={cat.href} className="sncat-card">
                  <div className="sncat-card-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(min-width: 992px) 25vw, (min-width: 750px) 33vw, (min-width: 480px) 50vw, 85vw"
                    />
                  </div>

                  <div className="sncat-card-info">
                    <div className="sncat-card-text">
                      <p className="sncat-card-label">{cat.label}</p>
                      <p className="sncat-card-count">{cat.items} Items</p>
                    </div>
                    <span className="sncat-card-arrow">
                      <IconArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style>{`
        .sncat-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .sncat-heading {
          font-size: 22px;
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }
        .sncat-nav-wrap {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .sncat-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #222;
          background: transparent;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
        }
        .sncat-nav-btn:hover {
          background-color: #e84d1c;
          border-color: #e84d1c;
          color: #fff;
        }

        .sncat-slider-wrap {
          overflow: visible;
        }

        .sncat-card {
          display: block;
          background-color: #f5f5f5;
          border-radius: 10px;
          overflow: hidden;
          text-decoration: none;
          transition: box-shadow 250ms ease;
        }
        .sncat-card:hover {
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.10);
        }

        .sncat-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background-color: #f5f5f5;
        }

        .sncat-card-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 18px;
          background-color: #f5f5f5;
        }

        .sncat-card-text {
          min-width: 0;
        }

        .sncat-card-label {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          margin: 0 0 3px;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sncat-card-count {
          font-size: 13px;
          color: #888;
          margin: 0;
          line-height: 1;
        }

        .sncat-card-arrow {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #111;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color 250ms ease;
        }
        .sncat-card:hover .sncat-card-arrow {
          background-color: #e84d1c;
        }

        @media (min-width: 750px) {
          .sncat-heading { font-size: 26px; }
          .sncat-heading-row { margin-bottom: 28px; }
          .sncat-card-label { font-size: 17px; }
          .sncat-card-info { padding: 17px 20px; }
        }

        @media (min-width: 992px) {
          .sncat-heading { font-size: 28px; }
          .sncat-heading-row { margin-bottom: 32px; }
          .sncat-nav-btn { width: 40px; height: 40px; }
          .sncat-card-label { font-size: 17px; }
          .sncat-card-count { font-size: 13px; }
          .sncat-card-info { padding: 18px 20px; }
          .sncat-card-arrow { width: 40px; height: 40px; }
        }

        @media (min-width: 1200px) {
          .sncat-heading { font-size: 30px; }
        }
      `}</style>
    </section>
  );
}
