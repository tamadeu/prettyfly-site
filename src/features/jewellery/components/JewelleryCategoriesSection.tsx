'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const categories = [
  {
    id: 'necklaces',
    label: 'Necklaces',
    items: 11,
    image: '/jewelry/categories-mega-menu-slider/categories-mega-menu-slider2.webp',
    href: '/shop?category=Necklaces',
  },
  {
    id: 'bracelets',
    label: 'Bracelets',
    items: 11,
    image: '/jewelry/categories-mega-menu-slider/categories-mega-menu-slider4.webp',
    href: '/shop?category=Bracelets',
  },
  {
    id: 'rings',
    label: 'Jewelry',
    items: 11,
    image: '/jewelry/categories-mega-menu-slider/categories-mega-menu-slider1.webp',
    href: '/shop?category=Rings',
  },
  {
    id: 'earrings',
    label: 'Earrings',
    items: 11,
    image: '/jewelry/categories-mega-menu-slider/categories-mega-menu-slider3.webp',
    href: '/shop?category=Earrings',
  },
  {
    id: 'fine',
    label: 'Fine Jewellery',
    items: 13,
    image: '/jewelry/categories-mega-menu-slider/categories-mega-menu-slider5.webp',
    href: '/shop',
  },
];

export function JewelleryCategoriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="jwcat-section">
      <div className="container-main">

        {/* Header row: heading+subtitle left, arrows right */}
        <div className="jwcat-header">
          <div className="jwcat-header-text">
            <h2 className="jwcat-heading">Shop by collection</h2>
            <p className="jwcat-subtitle">
              A jewelry collection: where artistry meets emotion through exquisite pieces.
            </p>
          </div>
          <div className="jwcat-nav-group">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              className="jwcat-nav-btn"
            >
              <IconChevronLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              className="jwcat-nav-btn"
            >
              <IconChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(s) => { swiperRef.current = s; }}
          slidesPerView={2}
          breakpoints={{
            600: { slidesPerView: 2 },
            750: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          spaceBetween={24}
          loop
          speed={600}
          style={{ overflow: 'hidden', width: '100%' }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href={cat.href} className="jwcat-card">
                <div className="jwcat-img-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                  />
                </div>
                <span className="jwcat-label">{cat.label}</span>
                <span className="jwcat-count">{cat.items} Items</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style>{`
        .jwcat-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: clamp(24px, 3vw, 40px);
        }
        .jwcat-heading {
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
        }
        .jwcat-subtitle {
          font-size: clamp(13px, 1.1vw, 15px);
          color: #777;
          line-height: 1.6;
          margin: 0;
          max-width: 480px;
        }
        .jwcat-nav-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          padding-top: 6px;
        }
        .jwcat-nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid #d0d0d0;
          background: #fff;
          color: #111;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 240ms ease, border-color 240ms ease, color 240ms ease;
          flex-shrink: 0;
        }
        .jwcat-nav-btn:hover {
          background: #111;
          border-color: #111;
          color: #fff;
        }

        .jwcat-card {
          display: block;
          text-decoration: none;
          color: inherit;
          text-align: center;
        }
        .jwcat-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 4px;
          margin-bottom: 14px;
        }
        .jwcat-img-wrap img { transition: transform 500ms ease; }
        .jwcat-card:hover .jwcat-img-wrap img { transform: scale(1.05); }

        .jwcat-label {
          display: block;
          font-size: clamp(14px, 1.3vw, 18px);
          font-weight: 700;
          color: #111;
          margin-bottom: 5px;
          transition: color 240ms ease;
        }
        .jwcat-card:hover .jwcat-label { color: #b89b6e; }

        .jwcat-count {
          display: block;
          font-size: clamp(12px, 1vw, 14px);
          color: #888;
        }

        @media (max-width: 749px) {
          .jwcat-nav-group { display: none; }
          .jwcat-header { margin-bottom: 20px; }
        }
      `}</style>
    </section>
  );
}
