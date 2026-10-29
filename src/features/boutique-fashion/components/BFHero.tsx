'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

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

const slides = [
  {
    id: 1,
    title: 'Autumn / Summer\nFashion Style',
    subtitle: 'Introducing the Ambaz boutique autumn / summer fashion collection',
    cta: 'Shop Collection',
    href: '/boutique-fashion/shop',
    image: '/boutique-fashion/hero-slider/hero-slider1.webp',
  },
  {
    id: 2,
    title: 'New Arrivals\nCollection',
    subtitle: 'Discover the latest boutique fashion trends curated just for you',
    cta: 'Shop Collection',
    href: '/boutique-fashion/shop',
    image: '/boutique-fashion/hero-slider/hero-slider2.webp',
  },
  {
    id: 3,
    title: 'Timeless Style\nFor Every Season',
    subtitle: 'Premium fabrics, effortless silhouettes, and looks that last',
    cta: 'Shop Collection',
    href: '/boutique-fashion/shop',
    image: '/boutique-fashion/hero-slider/hero-slider3.webp',
  },
];

export function BFHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="bfh-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
            <div className="bfh-slide-wrap">
              {/* Full-bleed background image — same pattern as fashion HeroSlider */}
              <div className="bfh-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              {/* Content overlay — absolute over image, left-aligned */}
              <div className="bfh-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="bfh-slide-text"
                  style={{
                    animation: activeIndex === i ? 'bfhFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="bfh-slide-title">{slide.title}</h1>
                  <p className="bfh-slide-subtitle">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="bfh-cta"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
                  >
                    {slide.cta}
                    <IconArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous slide" className="bfh-nav-prev">
        <IconArrowLeftS size={24} />
      </button>
      <button onClick={() => swiperInstance?.slideNext()} aria-label="Next slide" className="bfh-nav-next">
        <IconArrowRightS size={24} />
      </button>

      {/* Pagination dots */}
      <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10 }}>
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
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0, cursor: 'pointer',
              transition: 'all 300ms ease',
            }}
          >
            <span style={{
              width: activeIndex === i ? '8px' : '10px',
              height: activeIndex === i ? '8px' : '10px',
              borderRadius: '50%',
              backgroundColor: activeIndex === i ? '#222' : '#bbb',
              display: 'block',
              transition: 'all 300ms ease',
            }} />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes bfhFadeInDown {
          0%   { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bfhFadeInDownAlt {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .bfh-slide-text > * {
          animation-name: bfhFadeInDownAlt;
          animation-duration: 1.2s;
          animation-fill-mode: both;
        }
        .swiper-slide-active .bfh-slide-text > .bfh-slide-title {
          animation-delay: 0.6s;
        }

        .bfh-slide-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          overflow: hidden;
        }
        .bfh-slide-img-wrap {
          position: absolute;
          inset: 0;
        }
        .bfh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .bfh-slide-text { max-width: 520px; }
        .bfh-slide-title {
          font-size: 50px;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 16px;
          white-space: pre-line;
        }
        .bfh-slide-subtitle {
          font-size: 20px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .bfh-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #000;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 200ms ease;
        }

        /* ── Nav buttons ── */
        .bfh-nav-prev,
        .bfh-nav-next {
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
        .bfh-nav-prev {
          left: 40px;
          transform: translateY(-50%) translateX(-50px);
          background-color: rgba(0,0,0,0.35);
        }
        .bfh-nav-next {
          right: 40px;
          transform: translateY(-50%) translateX(50px);
          background-color: #000;
        }
        .bfh-section:hover .bfh-nav-prev {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .bfh-section:hover .bfh-nav-next {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .bfh-nav-prev:hover,
        .bfh-nav-next:hover {
          background-color: #333 !important;
        }

        /* ── Mobile: image stacks above, content below ── */
        @media (max-width: 749px) {
          .bfh-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 260px) !important;
          }
          .bfh-section .swiper-wrapper,
          .bfh-section .swiper-slide {
            height: 100% !important;
          }
          .bfh-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .bfh-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .bfh-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .bfh-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .bfh-slide-title {
            font-size: clamp(22px, 5.5vw, 32px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
          }
          .bfh-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .bfh-nav-prev,
          .bfh-nav-next { display: none !important; }
        }
      `}</style>
    </section>
  );
}
