'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

const ACCENT = '#c9173c';

function IconArrowLeft({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const categories = [
  {
    id: 'matte-lipstain',
    label: 'Matte Lipstain',
    items: 13,
    image: '/lipstain/categories-mega-menu-slider/categories-mega-menu-slider5.avif',
    href: '/shop?category=Matte%20Lipstain',
  },
  {
    id: 'oil-lipstain',
    label: 'Oil Lipstain',
    items: 12,
    image: '/lipstain/categories-mega-menu-slider/categories-mega-menu-slider1.webp',
    href: '/shop?category=Oil%20Lipstain',
  },
  {
    id: 'lip-stain',
    label: 'Lip Stain',
    items: 12,
    image: '/lipstain/categories-mega-menu-slider/categories-mega-menu-slider2.avif',
    href: '/shop?category=Lip%20Stain',
  },
  {
    id: 'gel-lipstain',
    label: 'Gel Lipstain',
    items: 14,
    image: '/lipstain/categories-mega-menu-slider/categories-mega-menu-slider3.avif',
    href: '/shop?category=Gel%20Lipstain',
  },
  {
    id: 'gloss-lipstain',
    label: 'Gloss Lipstain',
    items: 14,
    image: '/lipstain/categories-mega-menu-slider/categories-mega-menu-slider4.avif',
    href: '/shop?category=Gloss%20Lipstain',
  },
];

export function LipstainCategoriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="lscat-section">
      <div className="container-main">
        <h2 className="lscat-heading">Shop by categories</h2>
        <p className="lscat-subtitle">
          Shop by categories to easily discover a variety of lipstick shades, finishes, and formulas
          tailored to your style and beauty needs.
        </p>

        <div className="lscat-slider-wrap">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous categories"
            className="lscat-nav-btn lscat-nav-prev"
          >
            <IconArrowLeft size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={(s) => { swiperRef.current = s; }}
            slidesPerView={2}
            breakpoints={{
              750: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            spaceBetween={16}
            loop
            speed={600}
            style={{ overflow: 'hidden', width: '100%' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link href={cat.href} className="lscat-card">
                  <div className="lscat-card-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      quality={95}
                      style={{ objectFit: 'cover' }}
                      sizes="(min-width: 1200px) 20vw, (min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                    />
                  </div>
                  <span className="lscat-card-label">{cat.label}</span>
                  <span className="lscat-card-items">{cat.items} Items</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next categories"
            className="lscat-nav-btn lscat-nav-next"
          >
            <IconArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .lscat-section {
          padding-top: 8px;
        }

        .lscat-heading {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          text-align: center;
          margin-bottom: 14px;
        }

        .lscat-subtitle {
          font-size: clamp(13px, 1.3vw, 15px);
          color: #666;
          text-align: center;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto clamp(28px, 3.5vw, 48px);
        }

        .lscat-slider-wrap {
          position: relative;
        }

        .lscat-nav-btn {
          position: absolute;
          top: 37%;
          transform: translateY(-50%);
          z-index: 10;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid #e5e5e5;
          background-color: #fff;
          color: #111;
          cursor: pointer;
          display: none;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          opacity: 0;
          transition: background-color 240ms ease, border-color 240ms ease, color 240ms ease, box-shadow 240ms ease, opacity 240ms ease;
        }
        .lscat-nav-btn:hover {
          background-color: ${ACCENT};
          border-color: ${ACCENT};
          color: #fff;
          box-shadow: 0 4px 14px rgba(201,23,60,0.28);
        }
        .lscat-slider-wrap:hover .lscat-nav-btn { opacity: 1; }
        .lscat-nav-prev { left: 10px; }
        .lscat-nav-next { right: 10px; }

        .lscat-card {
          display: grid;
          grid-template-rows: auto auto auto;
          justify-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          padding: 0;
          transition: transform 250ms ease;
        }
        .lscat-card:hover { transform: translateY(-3px); }

        .lscat-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          margin-bottom: 14px;
          overflow: hidden;
          border-radius: 50%;
        }
        .lscat-card-img-wrap img {
          transition: transform 500ms ease;
        }
        .lscat-card:hover .lscat-card-img-wrap img {
          transform: scale(1.05);
        }

        .lscat-card-label {
          display: block;
          font-size: clamp(15px, 1.4vw, 19px);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.1px;
          margin-bottom: 4px;
          transition: color 250ms ease;
        }
        .lscat-card:hover .lscat-card-label { color: ${ACCENT}; }

        .lscat-card-items {
          display: block;
          font-size: clamp(13px, 1.1vw, 15px);
          color: #888;
        }

        @media (min-width: 750px) {
          .lscat-nav-btn { display: flex; }
        }
        @media (min-width: 992px) {
          .lscat-nav-btn { width: 44px; height: 44px; }
          .lscat-nav-prev { left: 12px; }
          .lscat-nav-next { right: 12px; }
        }
      `}</style>
    </section>
  );
}
