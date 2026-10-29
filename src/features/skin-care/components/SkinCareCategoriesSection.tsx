'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

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

const categories = [
  {
    id: 'oil-cleanser',
    label: 'Oil Cleanser',
    items: 12,
    image: '/skin-care/categories-mega-menu-slider/categories-mega-menu-slider1.webp',
    href: '/shop?category=Face%20Oils',
  },
  {
    id: 'skin-care',
    label: 'Skin Care',
    items: 15,
    image: '/skin-care/categories-mega-menu-slider/categories-mega-menu-slider2.webp',
    href: '/shop',
  },
  {
    id: 'face-powder',
    label: 'Face Powder',
    items: 10,
    image: '/skin-care/categories-mega-menu-slider/categories-mega-menu-slider3.webp',
    href: '/shop?category=Makeup',
  },
  {
    id: 'face-cream',
    label: 'Face Cream',
    items: 8,
    image: '/skin-care/categories-mega-menu-slider/categories-mega-menu-slider4.webp',
    href: '/shop?category=Face%20Creams',
  },
  {
    id: 'serums',
    label: 'Serums',
    items: 9,
    image: '/skin-care/categories-mega-menu-slider/categories-mega-menu-slider5.webp',
    href: '/shop?category=Serums',
  },
];

export function SkinCareCategoriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="skcat-section">
      <div className="container-main">

        {/* Centered heading */}
        <h2 className="skcat-heading">Best Skin Care</h2>

        {/* Slider wrapper — arrows are positioned relative to this */}
        <div className="skcat-slider-wrap">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous categories"
            className="skcat-nav-btn skcat-nav-prev"
          >
            <IconArrowLeftS size={20} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(s) => { swiperRef.current = s; }}
            slidesPerView={2}
            breakpoints={{
              750: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            spaceBetween={16}
            loop
            speed={700}
            autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            style={{ overflow: 'hidden', width: '100%' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link href={cat.href} className="skcat-card">
                  <div className="skcat-card-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      quality={95}
                      style={{ objectFit: 'cover' }}
                      sizes="(min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                    />
                  </div>
                  <span className="skcat-card-label">{cat.label}</span>
                  <span className="skcat-card-items">{cat.items} Items</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next categories"
            className="skcat-nav-btn skcat-nav-next"
          >
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .skcat-heading {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          text-align: center;
          margin-bottom: clamp(24px, 3vw, 40px);
        }

        /* Slider wrapper — arrows sit absolute inside this */
        .skcat-slider-wrap {
          position: relative;
        }

        /* Nav buttons — absolutely centered on the image portion */
        .skcat-nav-btn {
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
        .skcat-nav-btn:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }
        /* Arrows show on section hover */
        .skcat-slider-wrap:hover .skcat-nav-btn { opacity: 1; }
        /* Arrows overlay the first/last card edges, fully inside the container */
        .skcat-nav-prev { left: 10px; }
        .skcat-nav-next { right: 10px; }

        /* Cards */
        .skcat-card {
          display: grid;
          grid-template-rows: auto auto auto;
          justify-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          padding: 0;
          transition: transform 250ms ease;
        }
        .skcat-card:hover { transform: translateY(-3px); }

        .skcat-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          margin-bottom: 14px;
          overflow: hidden;
          border-radius: 4px;
        }
        .skcat-card-img-wrap img {
          transition: transform 500ms ease;
        }
        .skcat-card:hover .skcat-card-img-wrap img {
          transform: scale(1.05);
        }

        .skcat-card-label {
          display: block;
          font-size: clamp(15px, 1.4vw, 19px);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.1px;
          margin-bottom: 4px;
          transition: color 250ms ease;
        }
        .skcat-card:hover .skcat-card-label { color: #b8919a; }

        .skcat-card-items {
          display: block;
          font-size: clamp(13px, 1.1vw, 15px);
          color: #888;
        }

        /* Show arrows on tablet/desktop — no padding needed, they overlay the cards */
        @media (min-width: 750px) {
          .skcat-nav-btn { display: flex; }
        }
        @media (min-width: 992px) {
          .skcat-nav-btn { width: 44px; height: 44px; }
          .skcat-nav-prev { left: 12px; }
          .skcat-nav-next { right: 12px; }
        }
      `}</style>
    </section>
  );
}
