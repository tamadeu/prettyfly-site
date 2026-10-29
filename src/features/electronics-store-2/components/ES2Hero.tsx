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

/* ── Slide Data ── */

const slides = [
  {
    id: 1,
    title: 'Elevate Your Fitness\nSmart Tech',
    subtitle: 'Experience unmatched sound quality with sleek, comfortable design.',
    cta: 'Shop now',
    href: '/shop',
    image: '/electronics store/hero-slider/hero-slider-1.webp',
  },
  {
    id: 2,
    title: 'Take Your Music\nEverywhere',
    subtitle: 'Experience unmatched sound quality with sleek, comfortable design.',
    cta: 'Shop now',
    href: '/shop',
    image: '/electronics store/hero-slider/hero-slider-2.webp',
  },
  {
    id: 3,
    title: 'Power Up Your\nDigital Life',
    subtitle: 'Find the perfect tech for work, play, and everything in between.',
    cta: 'Shop now',
    href: '/shop',
    image: '/electronics store/hero-slider/hero-slider-3.webp',
  },
];

/* ── Hero Slider Component ── */

export function ES2Hero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="es2h-slider-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
        style={{ width: '100%', height: '800px' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="es2h-slide-wrap">
              {/* Full-width background image — the image IS the background */}
              <div className="es2h-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              {/* Content overlay — left side */}
              <div className="es2h-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="es2h-slide-text"
                  style={{
                    animation: activeIndex === i ? 'es2hFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="es2h-slide-title">
                    {slide.title}
                  </h1>
                  <p className="es2h-slide-subtitle">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.href}
                    className="es2h-slide-cta"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a55c9'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2b6be6'; }}
                  >
                    {slide.cta}
                    <IconArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows — hidden by default, slide in on section hover */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        aria-label="Previous slide"
        className="es2h-nav-prev"
      >
        <IconArrowLeftS size={24} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        className="es2h-nav-next"
      >
        <IconArrowRightS size={24} />
      </button>

      {/* Custom Pagination — ring + inner dot for active, plain dot for inactive */}
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
              border: activeIndex === i ? '1.5px solid #2b6be6' : 'none',
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
                backgroundColor: activeIndex === i ? '#2b6be6' : '#bbb',
                display: 'block',
                transition: 'all 300ms ease',
              }}
            />
          </button>
        ))}
      </div>

      {/* Hero slider styles */}
      <style>{`
        @keyframes es2hFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes es2hSlideIn {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .es2h-slide-text > * {
          -webkit-animation-name: es2hSlideIn;
          animation-name: es2hSlideIn;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .es2h-slide-text > .es2h-slide-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Slide inner structure (desktop base) ── */
        .es2h-slide-wrap {
          position: relative;
          width: 100%;
          height: 800px;
          overflow: hidden;
        }

        /* Full-width background image — the image itself is the complete background */
        .es2h-slide-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .es2h-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .es2h-slide-text {
          max-width: 560px;
        }
        .es2h-slide-title {
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin-bottom: 20px;
          white-space: pre-line;
        }
        .es2h-slide-subtitle {
          font-size: 20px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 36px;
          max-width: 460px;
        }
        .es2h-slide-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #2b6be6;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          padding: 13px 44px;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 200ms ease;
        }

        /* ── Mobile: image and content stack vertically, matching the
           other homepages' hero pattern — the image becomes a normal,
           un-cropped block-flow element (not an absolute full-bleed bg),
           and the content moves to a static block below it instead of
           overlaying the photo. ── */
        @media (max-width: 749px) {
          .es2h-slider-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 260px) !important;
          }
          .es2h-slider-section .swiper-wrapper,
          .es2h-slider-section .swiper-slide {
            height: 100% !important;
          }
          .es2h-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .es2h-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .es2h-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .es2h-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .es2h-slide-title {
            font-size: clamp(24px, 6vw, 36px);
            margin-bottom: clamp(8px, 2vw, 14px);
            text-align: center;
            white-space: pre-line;
          }
          .es2h-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 16px);
            margin-bottom: clamp(14px, 3.5vw, 20px);
            text-align: center;
            max-width: 100%;
          }
          .es2h-slide-cta {
            font-size: 15px;
            padding: 12px 28px;
          }
          .es2h-nav-prev,
          .es2h-nav-next {
            display: none !important;
          }
        }

        /* ── Nav buttons — desktop only ── */
        .es2h-nav-prev,
        .es2h-nav-next {
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
          transition: transform 400ms ease, opacity 400ms ease, background-color 250ms ease;
          opacity: 0;
          font-size: 24px;
        }
        .es2h-nav-prev {
          left: clamp(16px, 2vw, 32px);
          transform: translateY(-50%) translateX(-50px);
          background-color: #2b6be6;
          color: #fff;
        }
        .es2h-nav-next {
          right: clamp(16px, 2vw, 32px);
          transform: translateY(-50%) translateX(50px);
          background-color: #2b6be6;
          color: #fff;
        }
        .es2h-slider-section:hover .es2h-nav-prev {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .es2h-slider-section:hover .es2h-nav-next {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .es2h-nav-prev:hover {
          background-color: #111 !important;
        }
        .es2h-nav-next:hover {
          background-color: #111 !important;
        }
      `}</style>
    </section>
  );
}
