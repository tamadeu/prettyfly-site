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

const categories = [
  { id: 'pottery', label: 'Pottery', items: 10, image: '/craft-and-decore/shop-categories-slider/shop-categories-slider-1.webp', href: '/shop?category=Pottery' },
  { id: 'craft-decor', label: 'Craft & Decor', items: 11, image: '/craft-and-decore/shop-categories-slider/shop-categories-slider-2.webp', href: '/shop?category=Craft%20%26%20Decor' },
  { id: 'clay-pot', label: 'Clay Pot', items: 11, image: '/craft-and-decore/shop-categories-slider/shop-categories-slider-3.webp', href: '/shop?category=Clay%20Pot' },
  { id: 'hand-crafts', label: 'Hand Crafts', items: 11, image: '/craft-and-decore/shop-categories-slider/shop-categories-slider-4.webp', href: '/shop?category=Hand%20Crafts' },
  { id: 'metal-crafts', label: 'Metal Crafts', items: 10, image: '/craft-and-decore/shop-categories-slider/shop-categories-slider-5.webp', href: '/shop?category=Metal%20Crafts' },
  /* repeats so loop has enough slides at every breakpoint (Phone Case
     categories-slider precedent) — without this, Swiper's loop mode has too
     few slides at the 5-per-view breakpoint and silently breaks navigation. */
  { id: 'pottery-2', label: 'Pottery', items: 10, image: '/craft-and-decore/shop-categories-slider/shop-categories-slider-1.webp', href: '/shop?category=Pottery' },
  { id: 'craft-decor-2', label: 'Craft & Decor', items: 11, image: '/craft-and-decore/shop-categories-slider/shop-categories-slider-2.webp', href: '/shop?category=Craft%20%26%20Decor' },
];

export function CraftDecoreCategoriesSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="cdcat-section">
      <div className="container-main">
        <h2 className="cdcat-heading">Shop by collection</h2>

        <div className="cdcat-slider-outer">
          <div style={{ overflow: 'hidden', padding: '6px 0' }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => { swiperRef.current = s; }}
              slidesPerView={2}
              breakpoints={{
                480:  { slidesPerView: 2, spaceBetween: 16 },
                750:  { slidesPerView: 3, spaceBetween: 20 },
                992:  { slidesPerView: 4, spaceBetween: 20 },
                1200: { slidesPerView: 5, spaceBetween: 24 },
              }}
              spaceBetween={14}
              loop
              speed={600}
              style={{ overflow: 'visible' }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <Link href={cat.href} className="cdcat-card">
                    <div className="cdcat-img-wrap">
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        quality={95}
                        style={{ objectFit: 'cover' }}
                        sizes="(min-width: 1200px) 20vw, (min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                      />
                    </div>
                    <span className="cdcat-label">{cat.label}</span>
                    <span className="cdcat-items">{cat.items} Items</span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous categories"
            className="cdcat-nav-btn cdcat-nav-prev"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next categories"
            className="cdcat-nav-btn cdcat-nav-next"
          >
            <IconChevronRight />
          </button>
        </div>
      </div>

      <style>{`
        .cdcat-heading {
          font-size: 22px;
          font-weight: 700;
          color: #171712;
          line-height: 1.2;
          text-align: center;
          margin-bottom: 24px;
        }
        .cdcat-slider-outer {
          position: relative;
        }
        .cdcat-card {
          display: grid;
          grid-template-rows: auto auto auto;
          justify-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          padding: 0;
          transition: transform 250ms ease;
        }
        .cdcat-card:hover { transform: translateY(-3px); }

        .cdcat-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f0ece5;
          margin-bottom: 14px;
        }
        .cdcat-img-wrap img {
          transition: transform 500ms ease;
        }
        .cdcat-card:hover .cdcat-img-wrap img {
          transform: scale(1.08);
        }

        .cdcat-label {
          display: block;
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 700;
          color: #171712;
          letter-spacing: -0.1px;
          margin-bottom: 4px;
        }
        .cdcat-items {
          display: block;
          font-size: 13px;
          color: #888;
        }

        /* Nav — hidden by default, revealed on section hover, matching the
           same hover-reveal behavior as this homepage's other sliders
           (Shop the Look, New Arrivals). */
        .cdcat-nav-btn {
          position: absolute;
          top: 42%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #171712;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: opacity 220ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease;
        }
        .cdcat-slider-outer:hover .cdcat-nav-btn {
          opacity: 1;
          pointer-events: auto;
        }
        .cdcat-nav-prev { left: -22px; }
        .cdcat-nav-next { right: -22px; }
        .cdcat-nav-btn:hover {
          background-color: #171712;
          border-color: #171712;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }

        @media (max-width: 749px) {
          .cdcat-nav-btn { display: none; }
        }

        @media (min-width: 750px) {
          .cdcat-heading { font-size: 26px; margin-bottom: 28px; }
        }

        @media (min-width: 992px) {
          .cdcat-heading { font-size: 30px; margin-bottom: 32px; }
          .cdcat-items { font-size: 14px; }
        }
      `}</style>
    </section>
  );
}
