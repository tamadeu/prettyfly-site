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
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

const categories = [
  { id: 'c1', label: 'Phone Case',    image: '/phone-case/products/products8.webp', href: '/phone-case/shop?category=Phone%20Case' },
  { id: 'c2', label: 'Leather Cases', image: '/phone-case/products/products1.webp', href: '/phone-case/shop?category=Leather%20Cases' },
  { id: 'c3', label: 'Slim Cases',    image: '/phone-case/products/products3.webp', href: '/phone-case/shop?category=Slim%20Cases' },
  { id: 'c4', label: 'Wallet Cases',  image: '/phone-case/products/products7.webp', href: '/phone-case/shop?category=Wallet%20Cases' },
  { id: 'c5', label: 'Mobile Phone',  image: '/phone-case/products/products2.webp', href: '/phone-case/shop' },
  /* repeats so loop has enough slides at every breakpoint */
  { id: 'c6', label: 'Phone Case',    image: '/phone-case/products/products8.webp', href: '/phone-case/shop?category=Phone%20Case' },
  { id: 'c7', label: 'Leather Cases', image: '/phone-case/products/products1.webp', href: '/phone-case/shop?category=Leather%20Cases' },
];

export function PCCategoriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pcc-section">
      <div className="container-main">

        {/* Header */}
        <div className="pcc-header">
          <h2 className="pcc-heading">Shop by categories</h2>
          <Link href="/phone-case/shop" className="pcc-view-all">
            View All Categories <IconArrow />
          </Link>
        </div>

        {/* Slider — jwps-slider-outer pattern */}
        <div className="pcc-slider-outer">
          <div style={{ overflow: 'hidden', padding: '4px 0 8px' }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => { swiperRef.current = s; }}
              slidesPerView={2}
              breakpoints={{
                480:  { slidesPerView: 2,  spaceBetween: 16 },
                750:  { slidesPerView: 3,  spaceBetween: 20 },
                992:  { slidesPerView: 4,  spaceBetween: 20 },
                1200: { slidesPerView: 5,  spaceBetween: 24 },
              }}
              spaceBetween={14}
              loop
              speed={600}
              style={{ overflow: 'visible' }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <Link href={cat.href} className="pcc-card">
                    <div className="pcc-card-img">
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(min-width: 1200px) 20vw, (min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                      />
                    </div>
                    <p className="pcc-card-label">{cat.label}</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            className="pcc-nav pcc-nav-prev"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            className="pcc-nav pcc-nav-next"
          >
            <IconChevronRight />
          </button>
        </div>

      </div>

      <style>{`
        /* ── Header ── */
        .pcc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: clamp(20px, 2.5vw, 28px);
        }
        .pcc-heading {
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .pcc-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          font-weight: 400;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          white-space: nowrap;
          transition: opacity 200ms ease;
        }
        .pcc-view-all:hover { opacity: 0.65; }

        /* ── Slider outer ── */
        .pcc-slider-outer {
          position: relative;
        }

        /* ── Card ── */
        .pcc-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .pcc-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          margin-bottom: 14px;
        }
        .pcc-card-label {
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 700;
          color: #111;
          margin: 0;
          text-align: center;
        }

        /* ── Nav — identical to jwps-nav ── */
        .pcc-nav {
          position: absolute;
          top: 42%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease;
        }
        .pcc-nav-prev { left: -22px; }
        .pcc-nav-next { right: -22px; }
        .pcc-nav:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }

        @media (max-width: 749px) {
          .pcc-nav { display: none; }
        }
      `}</style>
    </section>
  );
}
