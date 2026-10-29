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
    title: 'Upgrade Your Home\nPlumbing Today',
    subtitle: 'Professional-Grade Plumbing Supplies for Homeowners and Contractors',
    cta: 'Shop now',
    href: '/shop',
    image: '/plumbing-supplies/hero-slider/hero-slider-1.webp',
  },
  {
    id: 2,
    title: 'Quality Fittings\nThat Last',
    subtitle: 'Durable taps, pipes and valves built to handle every job with ease.',
    cta: 'Shop now',
    href: '/shop',
    image: '/plumbing-supplies/hero-slider/hero-slider-2.webp',
  },
  {
    id: 3,
    title: 'Everything for\nYour Plumbing',
    subtitle: 'Trusted tools and parts from top brands, delivered fast to your door.',
    cta: 'Shop now',
    href: '/shop',
    image: '/plumbing-supplies/hero-slider/hero-slider-3.webp',
  },
];

export function PlumbingHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="plh-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
        style={{ width: '100%', height: '740px' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="plh-slide-wrap">
              <div className="plh-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              <div className="plh-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="plh-slide-text"
                  style={{
                    animation: activeIndex === i ? 'plhFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="plh-slide-title">{slide.title}</h1>
                  <p className="plh-slide-subtitle">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="plh-cta"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#061a30'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0a2540'; }}
                  >
                    {slide.cta}
                    <IconArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous slide" className="plh-nav-prev">
        <IconArrowLeftS size={24} />
      </button>
      <button onClick={() => swiperInstance?.slideNext()} aria-label="Next slide" className="plh-nav-next">
        <IconArrowRightS size={24} />
      </button>

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
              border: activeIndex === i ? '1.5px solid #0a2540' : 'none',
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
                backgroundColor: activeIndex === i ? '#0a2540' : '#b7bcc4',
                display: 'block',
                transition: 'all 300ms ease',
              }}
            />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes plhFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes plhInnerFadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .plh-section .swiper-slide-active .plh-slide-text > * {
          animation-name: plhInnerFadeInDown;
          animation-duration: 1.2s;
          animation-fill-mode: both;
        }
        .plh-section .swiper-slide-active .plh-slide-text > .plh-slide-title {
          animation-delay: 0.6s;
        }

        .plh-slide-wrap {
          position: relative;
          width: 100%;
          height: 740px;
          background-color: #efeae1;
          overflow: hidden;
        }
        .plh-slide-img-wrap { position: absolute; inset: 0; }
        .plh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .plh-slide-text { max-width: 640px; }
        .plh-slide-title {
          font-size: 54px;
          font-weight: 700;
          color: #1a1d24;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin-bottom: 20px;
          white-space: pre-line;
        }
        .plh-slide-subtitle {
          font-size: 18px;
          font-weight: 400;
          color: #4a4f57;
          line-height: 1.6;
          letter-spacing: 0;
          margin-bottom: 34px;
          max-width: 620px;
        }
        .plh-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background-color: #0a2540;
          color: #fff;
          font-size: 17px;
          font-weight: 500;
          letter-spacing: 0;
          padding: 14px 29px;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 200ms ease;
        }

        @media (max-width: 749px) {
          .plh-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 260px) !important;
          }
          .plh-section .swiper-wrapper,
          .plh-section .swiper-slide { height: 100% !important; }
          .plh-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .plh-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .plh-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .plh-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .plh-slide-title {
            font-size: clamp(24px, 6vw, 34px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
            white-space: pre-line;
          }
          .plh-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .plh-nav-prev,
          .plh-nav-next { display: none !important; }
        }

        .plh-nav-prev,
        .plh-nav-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background-color: #0a2540;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 250ms ease;
        }
        .plh-nav-prev { left: 24px; }
        .plh-nav-next { right: 24px; }
        .plh-nav-prev:hover,
        .plh-nav-next:hover {
          background-color: #061a30;
        }
      `}</style>
    </section>
  );
}
