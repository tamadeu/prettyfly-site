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

/* Jewelry 2 hero slider — ported 1:1 from BackpackHero.tsx (same structure,
   layout, functionality, animations and behavior). Only the slide content
   (copy, images) differs, per the Backpack homepage. */

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

/* ── Slide Data ── */

const slides = [
  {
    id: 1,
    title: 'Discover Your\nSignature Style',
    subtitle: 'Tailored jewelry crafted for radiant, timeless style every day.',
    cta: 'Shop Now',
    href: '/shop',
    video: '/jewelry-2/hero-banner/hero-slider-1.mp4',
  },
  {
    id: 2,
    title: 'Discover Your\nSignature Style',
    subtitle: 'Tailored jewelry crafted for radiant, timeless style every day.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/jewelry-2/hero-banner/hero-slider-2.webp',
  },
  {
    id: 3,
    title: 'Discover Your\nSignature Style',
    subtitle: 'Tailored jewelry crafted for radiant, timeless style every day.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/jewelry-2/hero-banner/hero-slider-3.webp',
  },
];

/* Nav-button styling is slide-dependent:
   • Slide 1 → left gray, right black (default)
   • Slide 3 → swapped (left black, right gray) */
const NAV_GRAY = 'rgba(0, 0, 0, 0.35)';
const NAV_BLACK = '#000';

/* ── Hero Slider Component ── */

export function Jewelry2Hero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="jzh-hero-slider-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
        style={{ width: '100%', height: '810px' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="jzh-hero-slide-wrap">
              {/* Background Image / Video */}
              <div className="jzh-hero-slide-img-wrap">
                {slide.video ? (
                  <video
                    className="jzh-hero-slide-video"
                    src={slide.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={slide.image!}
                    alt={slide.title.replace('\n', ' ')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                )}
              </div>

              {/* Content overlay — left aligned */}
              <div className="jzh-hero-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="jzh-hero-slide-text"
                  style={{
                    animation: activeIndex === i ? 'jzhHeroFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="jzh-hero-slide-title">
                    {slide.title}
                  </h1>
                  <p className="jzh-hero-slide-subtitle">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.href}
                    className="jzh-hero-slide-cta"
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
        className="jzh-hero-nav-prev"
        style={{ backgroundColor: activeIndex === 0 ? NAV_GRAY : NAV_BLACK }}
      >
        <IconArrowRightS size={24} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        className="jzh-hero-nav-next"
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
        @keyframes jzhHeroFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes jzhFadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .jzh-hero-slide-text > * {
          -webkit-animation-name: jzhFadeInDown;
          animation-name: jzhFadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .jzh-hero-slide-text > .jzh-hero-slide-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Slide inner structure (desktop base) ── */
        .jzh-hero-slide-wrap {
          position: relative;
          width: 100%;
          height: 810px;
          background-color: #f5f0eb;
          overflow: hidden;
        }
        .jzh-hero-slide-img-wrap {
          position: absolute;
          inset: 0;
        }
        .jzh-hero-slide-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .jzh-hero-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .jzh-hero-slide-text {
          max-width: 640px;
        }
        .jzh-hero-slide-title {
          font-size: 56px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.15;
          margin-bottom: 16px;
          white-space: pre-line;
        }
        .jzh-hero-slide-subtitle {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .jzh-hero-slide-cta {
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
          .jzh-hero-slider-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 340px) !important;
          }
          .jzh-hero-slider-section .swiper-wrapper,
          .jzh-hero-slider-section .swiper-slide {
            height: 100% !important;
          }
          .jzh-hero-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .jzh-hero-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .jzh-hero-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .jzh-hero-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .jzh-hero-slide-title {
            font-size: clamp(26px, 7vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
            white-space: pre-line;
          }
          .jzh-hero-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .jzh-hero-nav-prev,
          .jzh-hero-nav-next {
            display: none !important;
          }
        }

        /* ── Nav buttons — desktop only ── */
        .jzh-hero-nav-prev,
        .jzh-hero-nav-next {
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
        .jzh-hero-nav-prev {
          left: 40px;
          transform: translateY(-50%) translateX(-50px) rotate(180deg);
          background-color: rgba(0, 0, 0, 0.35);
        }
        .jzh-hero-nav-next {
          right: 40px;
          transform: translateY(-50%) translateX(50px);
          background-color: #000;
        }
        .jzh-hero-slider-section:hover .jzh-hero-nav-prev {
          opacity: 1;
          transform: translateY(-50%) translateX(0) rotate(180deg);
        }
        .jzh-hero-slider-section:hover .jzh-hero-nav-next {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .jzh-hero-nav-prev:hover,
        .jzh-hero-nav-next:hover {
          background-color: #333 !important;
        }
      `}</style>
    </section>
  );
}
