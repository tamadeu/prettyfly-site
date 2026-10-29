'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

/* Hero Slider — same layout, structure, animations, interactions and
   responsive behavior as BackpackHero.tsx (fade-crossfade Swiper, full-bleed
   cover image, hover-reveal nav arrows with the asymmetric gray/black +
   rotate-180 trick, ring+dot pagination). Only the content/images/data are
   Toys-specific, per the "match Backpack, swap content" instruction. */

/* ── Remix Icon Arrows ── */

function IconArrowRightS({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* ── Slide Data — Toys content/images ── */

const slides = [
  {
    id: 1,
    title: 'Embrace the Magic\nOf Baby Toys!',
    subtitle: 'Explore our durable and stylish backpacks for every journey.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/toys/hero-slider/slider1.webp',
  },
  {
    id: 2,
    title: 'Bright Colors,\nBig Smiles',
    subtitle: 'Playful, safe and vibrant toys designed for curious little hands.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/toys/hero-slider/slider2.webp',
  },
  {
    id: 3,
    title: 'Made for\nLittle Adventurers',
    subtitle: 'Motor toys and playsets built to keep imaginations moving.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/toys/hero-slider/slider3.webp',
  },
];

/* Nav-button styling is slide-dependent:
   • Slide 1 → left gray, right black (default)
   • Slide 3 → swapped (left black, right gray) */
const NAV_GRAY = 'rgba(0, 0, 0, 0.35)';
const NAV_BLACK = '#000';

/* ── Hero Slider Component ── */

export function ToysHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="tyh-hero-slider-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setAnimKey((k) => k + 1);
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={800}
        slidesPerView={1}
        style={{ width: '100%', height: '730px' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="tyh-hero-slide-wrap">
              {/* Background Image */}
              <div className="tyh-hero-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              {/* Content overlay — left aligned */}
              <div className="tyh-hero-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="tyh-hero-slide-text"
                  style={{
                    animation: activeIndex === i ? 'tyhHeroFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="tyh-hero-slide-title">
                    {slide.title}
                  </h1>
                  <p className="tyh-hero-slide-subtitle">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.href}
                    className="tyh-hero-slide-cta"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
                  >
                    {slide.cta}
                    <IconArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows — hidden by default, slide in on section hover. */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        aria-label="Previous slide"
        className="tyh-hero-nav-prev"
        style={{ backgroundColor: activeIndex === 0 ? NAV_GRAY : NAV_BLACK }}
      >
        <IconArrowRightS size={24} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        className="tyh-hero-nav-next"
        style={{ backgroundColor: activeIndex === 2 ? NAV_GRAY : NAV_BLACK }}
      >
        <IconArrowRightS size={24} />
      </button>

      {/* Custom Pagination — dot inside thin circle for active */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstance?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: activeIndex === i ? '18px' : '10px',
              height: activeIndex === i ? '18px' : '10px',
              borderRadius: '50%',
              border: activeIndex === i ? '1.5px solid #222' : 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 300ms ease',
            }}
          >
            <span
              style={{
                width: activeIndex === i ? '8px' : '10px',
                height: activeIndex === i ? '8px' : '10px',
                borderRadius: '50%',
                backgroundColor: activeIndex === i ? '#222' : '#bbb',
                display: 'block',
                transition: 'all 300ms ease',
              }}
            />
          </button>
        ))}
      </div>

      {/* Hero slider styles */}
      <style>{`
        @keyframes tyhHeroFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes tyhFadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .tyh-hero-slide-text > * {
          -webkit-animation-name: tyhFadeInDown;
          animation-name: tyhFadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .tyh-hero-slide-text > .tyh-hero-slide-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Slide inner structure (desktop base) ── */
        .tyh-hero-slide-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          background-color: #f5f0eb;
          overflow: hidden;
        }
        .tyh-hero-slide-img-wrap {
          position: absolute;
          inset: 0;
        }
        .tyh-hero-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .tyh-hero-slide-text {
          max-width: 640px;
        }
        .tyh-hero-slide-title {
          font-size: 56px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.15;
          margin-bottom: 16px;
          white-space: pre-line;
        }
        .tyh-hero-slide-subtitle {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .tyh-hero-slide-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #000;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 15px 30px;
          text-decoration: none;
          transition: background-color 200ms ease;
        }

        /* ── Mobile: image on top, content below ── */
        @media (max-width: 749px) {
          .tyh-hero-slider-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 260px) !important;
          }
          .tyh-hero-slider-section .swiper-wrapper,
          .tyh-hero-slider-section .swiper-slide {
            height: 100% !important;
          }
          .tyh-hero-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .tyh-hero-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .tyh-hero-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .tyh-hero-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .tyh-hero-slide-title {
            font-size: clamp(26px, 7vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
            white-space: pre-line;
          }
          .tyh-hero-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .tyh-hero-nav-prev,
          .tyh-hero-nav-next {
            display: none !important;
          }
        }

        /* ── Nav buttons — desktop only ── */
        .tyh-hero-nav-prev,
        .tyh-hero-nav-next {
          position: absolute;
          top: 50%;
          z-index: 10;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 400ms ease, opacity 400ms ease, background-color 250ms ease;
          opacity: 0;
          font-size: 24px;
        }
        .tyh-hero-nav-prev {
          left: 40px;
          transform: translateY(-50%) translateX(-50px) rotate(180deg);
          background-color: rgba(0, 0, 0, 0.35);
        }
        .tyh-hero-nav-next {
          right: 40px;
          transform: translateY(-50%) translateX(50px);
          background-color: #000;
        }
        .tyh-hero-slider-section:hover .tyh-hero-nav-prev {
          opacity: 1;
          transform: translateY(-50%) translateX(0) rotate(180deg);
        }
        .tyh-hero-slider-section:hover .tyh-hero-nav-next {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .tyh-hero-nav-prev:hover,
        .tyh-hero-nav-next:hover {
          background-color: #333 !important;
        }
      `}</style>
    </section>
  );
}
