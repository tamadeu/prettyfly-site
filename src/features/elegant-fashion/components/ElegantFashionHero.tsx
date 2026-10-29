'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const BASE_SLIDES = [
  {
    id: 1,
    title: 'High-quality Knitwear',
    subtitle: 'Buy and get 10% off on selected items',
    cta: 'Shop now',
    href: '/shop',
    image: '/elegant-fashion/hero-slider-and-banner/hero-slider-and-banner1.webp',
  },
  {
    id: 2,
    title: 'New Season Arrivals',
    subtitle: 'Discover the latest trends in fashion',
    cta: 'Shop now',
    href: '/shop?sort=newest',
    image: '/elegant-fashion/hero-slider-and-banner/hero-slider-and-banner2.webp',
  },
  {
    id: 3,
    title: 'Elegance Redefined',
    subtitle: 'Luxury styles for every occasion',
    cta: 'Shop now',
    href: '/shop?category=Dress',
    image: '/elegant-fashion/hero-slider-and-banner/hero-slider-and-banner3.webp',
  },
];

const TOTAL = BASE_SLIDES.length;

/* Triple the array so Swiper has plenty of real slides for the loop
   to clone from at every breakpoint with centeredSlides. */
const SLIDES = [...BASE_SLIDES, ...BASE_SLIDES, ...BASE_SLIDES];

export function ElegantFashionHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="efh-section">
      <div className="efh-swiper-wrap">
        <Swiper
          onSwiper={(s) => {
            setSwiperInstance(s);
            /* Start from the middle copy so loop has room in both directions */
            s.slideTo(TOTAL, 0);
          }}
          onSlideChange={(s) => setActiveIndex(s.realIndex % TOTAL)}
          slidesPerView={1.15}
          centeredSlides
          spaceBetween={16}
          loop
          speed={700}
          breakpoints={{
            640:  { slidesPerView: 1.2,  spaceBetween: 18 },
            992:  { slidesPerView: 1.32, spaceBetween: 22 },
            1200: { slidesPerView: 1.38, spaceBetween: 24 },
          }}
          style={{ width: '100%', height: '100%' }}
        >
          {SLIDES.map((slide, i) => {
            const realI = i % TOTAL;
            return (
              <SwiperSlide key={`${slide.id}-${i}`}>
                <div className="efh-slide">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                    priority={i === TOTAL}
                  />
                  <div className="efh-overlay" />
                  <div className={`efh-content${activeIndex === realI ? ' is-active' : ''}`}>
                    <h1 className="efh-title">{slide.title}</h1>
                    <p className="efh-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="efh-cta">
                      {slide.cta} <IconArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Pagination dots — inside the slider, bottom-center */}
        <div className="efh-pagination">
          {BASE_SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideTo(TOTAL + i)}
              className={`efh-dot${activeIndex === i ? ' is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .efh-section {
          padding: 0;
        }

        .efh-swiper-wrap {
          position: relative;
          height: 650px;
          overflow: hidden;
        }

        .efh-slide {
          position: relative;
          width: 100%;
          height: 650px;
          border-radius: 16px;
          overflow: hidden;
        }

        .efh-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1;
        }

        .efh-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(24px, 4vw, 56px);
          gap: clamp(10px, 1.6vw, 16px);
          pointer-events: none;
          visibility: hidden;
        }
        .efh-content.is-active {
          pointer-events: auto;
          visibility: visible;
        }
        /* All content children drop in from above when slide is active */
        .efh-content.is-active > * {
          animation-name: fadeInDown;
          animation-duration: 1.2s;
          animation-fill-mode: both;
        }
        /* Main title enters after subtitle and CTA for a dramatic reveal */
        .efh-content.is-active .efh-title {
          animation-delay: .6s;
        }
        .swiper-slide-active .efh-content > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .efh-content > .efh-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .efh-title {
          font-size: clamp(22px, 3vw, 44px);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin: 0;
          letter-spacing: -0.3px;
        }
        .efh-subtitle {
          font-size: clamp(12px, 1.2vw, 16px);
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          line-height: 1.5;
        }
        .efh-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          color: #111;
          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 600;
          padding: 13px 30px;
          border-radius: 9999px;
          text-decoration: none;
          margin-top: 4px;
          transition: background 240ms ease, color 240ms ease, transform 240ms ease;
        }
        .efh-cta:hover {
          background: rgb(0, 31, 63);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Pagination */
        .efh-pagination {
          position: absolute;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }
        .efh-dot {
          width: 16px;
          height: 16px;
          padding: 0;
          border-radius: 50%;
          background: transparent;
          border: 1.5px solid transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 300ms ease;
        }
        .efh-dot span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .efh-dot:hover span { background: #fff; }
        .efh-dot.is-active { border-color: #fff; }
        .efh-dot.is-active span { background: #fff; transform: scale(0.85); }

        /* Mobile */
        @media (max-width: 639px) {
          .efh-section { padding: 0; }
          .efh-swiper-wrap { height: clamp(320px, 78vw, 480px); }
          .efh-slide { height: clamp(320px, 78vw, 480px); border-radius: 12px; }
          .efh-title { font-size: clamp(18px, 5vw, 24px); }
          .efh-subtitle { font-size: clamp(11px, 3vw, 13px); }
          .efh-cta { font-size: 12px; padding: 10px 22px; }
          .efh-pagination { bottom: 14px; }
        }
      `}</style>
    </section>
  );
}
