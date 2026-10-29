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

/* Same slider skeleton as BackpackHero.tsx (fade-effect Swiper, staggered
   CSS-keyframe reveal, alternating nav-button contrast, identical mobile
   breakpoint) — only content/images/colors are Craft and Decore's own. Title/
   subtitle/pagination are recolored white and the CTA flipped to a white pill
   because these hero photos are dark full-bleed images (Backpack's source
   photos are light, hence its dark-on-light defaults) — see
   feedback_hero_no_bg_color and the "Theming — what to swap per storefront"
   convention used by every skill MD in this project. */

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
    title: 'Crafted with Love,\nMade by Hand',
    subtitle: 'Timeless elegance to your home with this decorative traditional pot.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/craft-and-decore/hero-slider/hero-slider-1.webp',
  },
  {
    id: 2,
    title: 'Artistry Rooted in\nTradition',
    subtitle: 'Every piece carries the hand and heart of its maker.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/craft-and-decore/hero-slider/hero-slider-2.webp',
  },
  {
    id: 3,
    title: 'Bring Warmth to\nEvery Corner',
    subtitle: 'Earthy textures and timeless shapes for a home with character.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/craft-and-decore/hero-slider/hero-slider-3.webp',
  },
];

/* Nav-button styling is slide-dependent, mirroring BackpackHero:
   • Slide 1 → left gray, right accent (default)
   • Last slide → swapped (left accent, right gray) */
const NAV_GRAY = 'rgba(0, 0, 0, 0.35)';
const NAV_ACCENT = 'rgba(0, 0, 0, 0.55)';

/* ── Hero Slider Component ── */

export function CraftDecoreHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="cdh-hero-slider-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
            <div className="cdh-hero-slide-wrap">
              {/* Background Image */}
              <div className="cdh-hero-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              {/* Content overlay — left aligned */}
              <div className="cdh-hero-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="cdh-hero-slide-text"
                  style={{
                    animation: activeIndex === i ? 'cdhHeroFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="cdh-hero-slide-title">
                    {slide.title.split('\n').map((line, idx) => (
                      <span key={idx} className="cdh-hero-slide-title-line">{line}</span>
                    ))}
                  </h1>
                  <p className="cdh-hero-slide-subtitle">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.href}
                    className="cdh-hero-slide-cta"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#a9673f'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#171712'; }}
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

      {/* Navigation Arrows — hidden by default, slide in on section hover. */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        aria-label="Previous slide"
        className="cdh-hero-nav-prev"
        style={{ backgroundColor: activeIndex === 0 ? NAV_GRAY : NAV_ACCENT }}
      >
        <IconArrowRightS size={24} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        className="cdh-hero-nav-next"
        style={{ backgroundColor: activeIndex === slides.length - 1 ? NAV_GRAY : NAV_ACCENT }}
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
                backgroundColor: activeIndex === i ? '#fff' : 'rgba(255,255,255,0.55)',
                display: 'block',
                transition: 'all 300ms ease',
              }}
            />
          </button>
        ))}
      </div>

      {/* Hero slider styles */}
      <style>{`
        @keyframes cdhHeroFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes cdhFadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .cdh-hero-slide-text > * {
          -webkit-animation-name: cdhFadeInDown;
          animation-name: cdhFadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .cdh-hero-slide-text > .cdh-hero-slide-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Slide inner structure (desktop base) ── */
        .cdh-hero-slide-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          background-color: #0b0b0b;
          overflow: hidden;
        }
        .cdh-hero-slide-img-wrap {
          position: absolute;
          inset: 0;
        }
        .cdh-hero-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .cdh-hero-slide-text {
          max-width: 640px;
        }
        .cdh-hero-slide-title {
          font-size: 50px;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .cdh-hero-slide-title-line {
          display: block;
        }
        .cdh-hero-slide-title-line + .cdh-hero-slide-title-line {
          margin-top: 25px;
        }
        .cdh-hero-slide-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .cdh-hero-slide-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #fff;
          color: #171712;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 15px 27.5px;
          border-radius: 0;
          text-decoration: none;
          transition: background-color 200ms ease, color 200ms ease;
        }

        /* ── Mobile: image on top, content below ── */
        @media (max-width: 749px) {
          .cdh-hero-slider-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 260px) !important;
          }
          .cdh-hero-slider-section .swiper-wrapper,
          .cdh-hero-slider-section .swiper-slide {
            height: 100% !important;
          }
          .cdh-hero-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .cdh-hero-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .cdh-hero-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .cdh-hero-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .cdh-hero-slide-title {
            font-size: clamp(26px, 7vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
          }
          .cdh-hero-slide-title-line + .cdh-hero-slide-title-line {
            margin-top: clamp(10px, 2.5vw, 16px);
          }
          .cdh-hero-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .cdh-hero-nav-prev,
          .cdh-hero-nav-next {
            display: none !important;
          }
        }

        /* ── Nav buttons — desktop only ── */
        .cdh-hero-nav-prev,
        .cdh-hero-nav-next {
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
        .cdh-hero-nav-prev {
          left: 40px;
          transform: translateY(-50%) translateX(-50px) rotate(180deg);
          background-color: rgba(0, 0, 0, 0.35);
        }
        .cdh-hero-nav-next {
          right: 40px;
          transform: translateY(-50%) translateX(50px);
          background-color: rgba(0, 0, 0, 0.55);
        }
        .cdh-hero-slider-section:hover .cdh-hero-nav-prev {
          opacity: 1;
          transform: translateY(-50%) translateX(0) rotate(180deg);
        }
        .cdh-hero-slider-section:hover .cdh-hero-nav-next {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .cdh-hero-nav-prev:hover,
        .cdh-hero-nav-next:hover {
          background-color: #a9673f !important;
        }
      `}</style>
    </section>
  );
}
