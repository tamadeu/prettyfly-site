'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

/* Basketball hero slider — rebuilt on the Fashion 03 hero skeleton (structure,
   fade transitions, staggered text animation, hover-reveal nav arrows with a
   per-slide color swap, custom pagination dots). Only the content and images are
   Basketball's, and the palette matches the orange screenshot (white headline,
   white pill CTA, white dots). Pagination CSS/module intentionally omitted — the
   `swiper/css/pagination` path is broken in Swiper 12 (CLAUDE.md) and the dots
   are hand-rolled, so the module is unused. */

/* ── Remix Icon Arrows ── */

function IconArrowLeftS({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

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

/* ── Slide Data ──
   Same content across all three slides (per screenshot); only the model image
   differs. Each hero image is a full orange scene with the model baked into the
   right side and empty space on the left for the overlaid white headline + CTA. */

const slides = [1, 2, 3].map((n) => ({
  id: n,
  title: 'Where Style Meets\nPerformance',
  subtitle: 'Stylish gear designed for peak performance.',
  cta: 'SHOP NOW',
  href: '/shop',
  image: `/basketball/hero-slider/hero-slider-${n}.webp`,
}));

/* Nav-button styling is slide-dependent (mirrors Fashion 03's per-slide swap):
   • Slide 1 → left translucent, right white (matches screenshot)
   • Slide 2 → both white
   • Slide 3 → swapped (left white, right translucent) */
const NAV_TRANSLUCENT = 'rgba(0, 0, 0, 0.18)';
const NAV_WHITE = '#fff';

/* ── Hero Slider Component ── */

export function BasketballHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="bbh-hero-slider-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, EffectFade]}
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
            <div className="bbh-hero-slide-wrap">
              {/* Background Image */}
              <div className="bbh-hero-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center right' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              {/* Content overlay — left aligned */}
              <div className="bbh-hero-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="bbh-hero-slide-text"
                  style={{
                    animation: activeIndex === i ? 'bbhHeroFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="bbh-hero-slide-title">
                    {slide.title}
                  </h1>
                  <p className="bbh-hero-slide-subtitle">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#fff',
                      color: '#111',
                      fontSize: '15px',
                      fontWeight: 600,
                      letterSpacing: '0.3px',
                      padding: '15px 30px',
                      borderRadius: '40px',
                      textDecoration: 'none',
                      transition: 'background-color 200ms ease, color 200ms ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#111'; }}
                  >
                    {slide.cta}
                    <IconArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows — hidden by default, slide in on section hover.
          Background/icon swap per active slide (see NAV_TRANSLUCENT/NAV_WHITE note). */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        aria-label="Previous slide"
        className="bbh-hero-nav-prev"
        style={{
          backgroundColor: activeIndex === 0 ? NAV_TRANSLUCENT : NAV_WHITE,
          color: activeIndex === 0 ? '#fff' : '#111',
        }}
      >
        <IconArrowLeftS size={22} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        className="bbh-hero-nav-next"
        style={{
          backgroundColor: activeIndex === 2 ? NAV_TRANSLUCENT : NAV_WHITE,
          color: activeIndex === 2 ? '#fff' : '#111',
        }}
      >
        <IconArrowRightS size={22} />
      </button>

      {/* Custom Pagination — dot inside thin circle for active */}
      <div
        style={{
          position: 'absolute',
          bottom: '26px',
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
              border: activeIndex === i ? '1.5px solid #fff' : 'none',
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
                backgroundColor: activeIndex === i ? '#fff' : 'rgba(255,255,255,0.6)',
                display: 'block',
                transition: 'all 300ms ease',
              }}
            />
          </button>
        ))}
      </div>

      {/* Hero slider styles */}
      <style>{`
        @keyframes bbhHeroFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bbhFadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .bbh-hero-slide-text > * {
          -webkit-animation-name: bbhFadeInDown;
          animation-name: bbhFadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .bbh-hero-slide-text > .bbh-hero-slide-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Slide inner structure (desktop base) ── */
        .bbh-hero-slide-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          background-color: #e8521f;
          overflow: hidden;
        }
        .bbh-hero-slide-img-wrap {
          position: absolute;
          inset: 0;
        }
        .bbh-hero-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .bbh-hero-slide-text {
          max-width: 500px;
        }
        .bbh-hero-slide-title {
          font-size: clamp(34px, 4vw, 54px);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 16px;
          white-space: pre-line;
        }
        .bbh-hero-slide-subtitle {
          font-size: clamp(15px, 1.3vw, 17px);
          font-weight: 500;
          color: #fff;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        /* ── Mobile: image on top, content below ── */
        @media (max-width: 749px) {
          .bbh-hero-slider-section .swiper {
            height: calc(clamp(240px, 60vw, 420px) + 250px) !important;
          }
          .bbh-hero-slider-section .swiper-wrapper,
          .bbh-hero-slider-section .swiper-slide {
            height: 100% !important;
          }
          .bbh-hero-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .bbh-hero-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 60vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .bbh-hero-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 52px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
            background-color: #e8521f;
          }
          .bbh-hero-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .bbh-hero-slide-title {
            font-size: clamp(24px, 6vw, 34px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
            white-space: pre-line;
          }
          .bbh-hero-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
            white-space: normal;
          }
          .bbh-hero-nav-prev,
          .bbh-hero-nav-next {
            display: none !important;
          }
        }

        /* ── Nav buttons — desktop only, slide-in on hover ── */
        .bbh-hero-nav-prev,
        .bbh-hero-nav-next {
          position: absolute;
          top: 50%;
          z-index: 10;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 400ms ease, opacity 400ms ease, background-color 250ms ease, color 250ms ease;
          opacity: 0;
        }
        .bbh-hero-nav-prev {
          left: 40px;
          transform: translateY(-50%) translateX(-50px);
        }
        .bbh-hero-nav-next {
          right: 40px;
          transform: translateY(-50%) translateX(50px);
        }
        .bbh-hero-slider-section:hover .bbh-hero-nav-prev {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .bbh-hero-slider-section:hover .bbh-hero-nav-next {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .bbh-hero-nav-prev:hover,
        .bbh-hero-nav-next:hover {
          background-color: #e84d1c !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}
