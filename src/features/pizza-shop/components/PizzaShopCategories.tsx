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
  { id: 'bbq-pizza', label: 'BBQ Pizza', items: 6, image: '/pizza/categories-slider/categories-slider1.webp', href: '/pizza/shop?category=BBQ%20Pizza' },
  { id: 'beef-pizza', label: 'Beef Pizza', items: 4, image: '/pizza/categories-slider/categories-slider2.webp', href: '/pizza/shop?category=Beef%20Pizza' },
  { id: 'chicken-pizza', label: 'Chicken Pizza', items: 6, image: '/pizza/categories-slider/categories-slider3.webp', href: '/pizza/shop?category=Chicken%20Pizza' },
  { id: 'greek-pizza', label: 'Greek Pizza', items: 4, image: '/pizza/categories-slider/categories-slider4.webp', href: '/pizza/shop?category=Greek%20Pizza' },
  { id: 'veggie-pizza', label: 'Veggie Pizza', items: 4, image: '/pizza/categories-slider/categories-slider5.webp', href: '/pizza/shop?category=Veggie%20Pizza' },
];

export function PizzaShopCategories() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="ps-cat-section">
      <div className="container-main">
        {/* Heading row */}
        <div className="ps-cat-heading-row">
          <h2 className="ps-cat-heading">Shop by Categories</h2>
          <div className="ps-cat-arrows">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous categories"
              className="ps-cat-nav-btn"
            >
              <IconArrowLeftS size={18} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next categories"
              className="ps-cat-nav-btn"
            >
              <IconArrowRightS size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          slidesPerView={2}
          breakpoints={{
            750: { slidesPerView: 4 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
          }}
          spaceBetween={16}
          loop
          speed={600}
          style={{ overflow: 'hidden' }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href={cat.href} className="ps-cat-card">
                <div className="ps-cat-card-img-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    quality={95}
                    style={{ objectFit: 'cover' }}
                    sizes="(min-width: 1200px) 240px, (min-width: 992px) 210px, (min-width: 750px) 180px, 150px"
                  />
                </div>
                <span className="ps-cat-card-label">{cat.label}</span>
                <span className="ps-cat-card-items">{cat.items} Items</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* ── Mobile base ── */
        .ps-cat-heading-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (max-width: 520px) {
          .ps-cat-heading-row {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
          }
          .ps-cat-arrows { display: none; }
        }
        .ps-cat-heading {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }
        .ps-cat-arrows {
          display: flex;
          gap: 8px;
        }
        .ps-cat-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #3a3a3a;
          background-color: transparent;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 250ms ease, border-color 250ms ease;
        }
        .ps-cat-nav-btn:hover {
          background-color: #e84d1c;
          border-color: #e84d1c;
        }

        .ps-cat-card {
          display: grid;
          grid-template-rows: auto auto auto;
          justify-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          padding: 0;
          transition: transform 250ms ease;
        }
        .ps-cat-card:hover { transform: translateY(-3px); }

        .ps-cat-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          max-width: 100%;
          margin-bottom: 16px;
          overflow: hidden;
        }
        .ps-cat-card-img-wrap img {
          transition: transform 500ms ease;
        }
        .ps-cat-card:hover .ps-cat-card-img-wrap img {
          transform: scale(1.05);
        }

        .ps-cat-card-label {
          display: block;
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.1px;
          margin-bottom: 4px;
        }
        .ps-cat-card-items {
          display: block;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .ps-cat-heading { font-size: 26px; }
          .ps-cat-heading-row { margin-bottom: 28px; }
          .ps-cat-card-img-wrap { margin-bottom: 18px; }
          .ps-cat-card-label { font-size: 18px; }
        }

        /* ── ≥ 992px — small desktop ── */
        @media (min-width: 992px) {
          .ps-cat-heading { font-size: 30px; }
          .ps-cat-heading-row { margin-bottom: 32px; }
          .ps-cat-card-img-wrap { margin-bottom: 20px; }
          .ps-cat-card-label { font-size: 19px; }
          .ps-cat-card-items { font-size: 15px; }
          .ps-cat-nav-btn { width: 40px; height: 40px; }
        }

        /* ── ≥ 1200px — large desktop ── */
        @media (min-width: 1200px) {
          .ps-cat-heading { font-size: 32px; }
          .ps-cat-card-img-wrap { margin-bottom: 22px; }
          .ps-cat-card-label { font-size: 20px; }
        }
      `}</style>
    </section>
  );
}
