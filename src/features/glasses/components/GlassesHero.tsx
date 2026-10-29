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
    title: 'Fresh Looks for\nEvery Season',
    subtitle: 'Explore our durable and stylish eyewear for every occasion.',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/glasses/hero-slider/hero-slider-1.webp',
  },
  {
    id: 2,
    title: 'See the World\nin Style',
    subtitle: 'Premium frames and sunglasses crafted for a perfect fit.',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/glasses/hero-slider/hero-slider-2.webp',
  },
  {
    id: 3,
    title: 'Eyewear That\nDefines You',
    subtitle: 'Discover timeless designs with lightweight, all-day comfort.',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/glasses/hero-slider/hero-slider-3.webp',
  },
];

/* ── Hero Slider Component ── */

export function GlassesHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="glh-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
            <div className="glh-slide-wrap">
              {/* Background Image */}
              <div className="glh-slide-img-wrap">
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
              <div className="glh-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="glh-slide-text"
                  style={{
                    animation: activeIndex === i ? 'glhFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="glh-slide-title">{slide.title}</h1>
                  <p className="glh-slide-subtitle">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="glh-cta"
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

      {/* Navigation Arrows — hidden by default, slide in on section hover */}
      <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous slide" className="glh-nav-prev">
        <IconArrowLeftS size={24} />
      </button>
      <button onClick={() => swiperInstance?.slideNext()} aria-label="Next slide" className="glh-nav-next">
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
        @keyframes glhFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glhInnerFadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .glh-section .swiper-slide-active .glh-slide-text > * {
          animation-name: glhInnerFadeInDown;
          animation-duration: 1.2s;
          animation-fill-mode: both;
        }
        .glh-section .swiper-slide-active .glh-slide-text > .glh-slide-title {
          animation-delay: 0.6s;
        }

        /* ── Slide inner structure (desktop base) ── */
        .glh-slide-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          background-color: #efe4d4;
          overflow: hidden;
        }
        .glh-slide-img-wrap { position: absolute; inset: 0; }
        .glh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .glh-slide-text { max-width: 520px; }
        .glh-slide-title {
          font-size: 56px;
          font-weight: 700;
          color: #222;
          line-height: 1.15;
          margin-bottom: 16px;
          white-space: pre-line;
        }
        .glh-slide-subtitle {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 420px;
        }
        .glh-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background-color: #000;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 15px 31.5px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 200ms ease;
        }

        /* ── Mobile: image on top, content below ── */
        @media (max-width: 749px) {
          .glh-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 260px) !important;
          }
          .glh-section .swiper-wrapper,
          .glh-section .swiper-slide { height: 100% !important; }
          .glh-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .glh-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .glh-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .glh-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .glh-slide-title {
            font-size: clamp(24px, 6vw, 34px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
            white-space: pre-line;
          }
          .glh-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .glh-nav-prev,
          .glh-nav-next { display: none !important; }
        }

        /* ── Nav buttons — desktop only ── */
        .glh-nav-prev,
        .glh-nav-next {
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
        }
        .glh-nav-prev {
          left: 40px;
          transform: translateY(-50%) translateX(-50px);
          background-color: rgba(0, 0, 0, 0.35);
        }
        .glh-nav-next {
          right: 40px;
          transform: translateY(-50%) translateX(50px);
          background-color: #000;
        }
        .glh-section:hover .glh-nav-prev {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .glh-section:hover .glh-nav-next {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .glh-nav-prev:hover,
        .glh-nav-next:hover {
          background-color: #333 !important;
        }
      `}</style>
    </section>
  );
}
