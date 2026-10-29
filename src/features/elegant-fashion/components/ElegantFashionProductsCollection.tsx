'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconChevronLeft({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const categories = [
  { id: 'blazer',  label: 'Blazer',  image: '/elegant-fashion/product-collection/product-collection1.png',      href: '/shop?category=Blazer' },
  { id: 'cap',     label: 'Cap',     image: '/elegant-fashion/product-collection/product-collection2.png',      href: '/shop?category=Cap' },
  { id: 'jacket',  label: 'Jacket',  image: '/elegant-fashion/product-collection/product-collection3.png',      href: '/shop?category=Jacket' },
  { id: 'pants',   label: 'Pants',   image: '/elegant-fashion/product-collection/product-collection4.png',      href: '/shop?category=Pants' },
  { id: 'tshirt',  label: 'T-Shirt', image: '/elegant-fashion/product-collection/product-collection5.webp', href: '/shop?category=T-Shirt' },
  { id: 'women',   label: 'Women',   image: '/elegant-fashion/product-collection/product-collection7.png',      href: '/shop?category=Women' },
  { id: 'men',     label: 'Men',     image: '/elegant-fashion/product-collection/product-collection8.png',  href: '/shop?category=Men' },
  { id: 'bags',    label: 'Bags',    image: '/elegant-fashion/product-collection/product-collection10.png',      href: '/shop?category=Bags' },
  { id: 'sports',  label: 'Sports',  image: '/elegant-fashion/product-collection/product-collection11.webp',    href: '/shop?category=Sports' },
];

/* Duplicate so Swiper loop has enough slides at every breakpoint */
const slides = [...categories, ...categories, ...categories];

export function ElegantFashionProductsCollection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="efpc-section">
      <div className="container-main">
        <div className="efpc-slider-wrap">
          <Swiper
            onSwiper={setSwiperInstance}
            slidesPerView={3}
            breakpoints={{
              480: { slidesPerView: 4 },
              640: { slidesPerView: 5 },
              750: { slidesPerView: 7 },
              992: { slidesPerView: 9 },
              1200: { slidesPerView: 10 },
            }}
            spaceBetween={12}
            loop
            speed={500}
            style={{ overflow: 'hidden' }}
          >
            {slides.map((cat, i) => (
              <SwiperSlide key={`${cat.id}-${i}`}>
                <Link href={cat.href} className="efpc-card">
                  <div className="efpc-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      quality={90}
                      style={{ objectFit: 'contain' }}
                      sizes="58px"
                    />
                  </div>
                  <span className="efpc-label">{cat.label}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous categories"
            className="efpc-nav efpc-nav-prev"
          >
            <IconChevronLeft size={16} />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next categories"
            className="efpc-nav efpc-nav-next"
          >
            <IconChevronRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .efpc-section {
          background: #fff;
          padding: 12px 0;
        }
        .efpc-slider-wrap {
          position: relative;
        }

        .efpc-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          height: 90px;
          background: #f7f8fa;
          border-radius: 8px;
          text-decoration: none;
          transition: background 220ms ease;
        }
        .efpc-card:hover { background: #eef0f6; }

        .efpc-img-wrap {
          position: relative;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
        }
        .efpc-img-wrap img {
          width: 27px;
          height: 27px;
        }

        .efpc-label {
          font-size: 12px;
          font-weight: 500;
          color: #333;
          text-align: center;
          line-height: 1;
          white-space: nowrap;
        }
        .efpc-card:hover .efpc-label { color: #1a2b5e; }

        .efpc-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e0e0e0;
          color: #555;
          cursor: pointer;
          opacity: 0;
          transition: opacity 200ms ease, background 200ms ease, color 200ms ease, border-color 200ms ease;
        }
        .efpc-slider-wrap:hover .efpc-nav { opacity: 1; }
        .efpc-nav-prev { left: 8px; }
        .efpc-nav-next { right: 8px; }
        .efpc-nav:hover {
          background: #1a2b5e;
          color: #fff;
          border-color: #1a2b5e;
        }
      `}</style>
    </section>
  );
}
