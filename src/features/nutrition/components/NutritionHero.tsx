'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

function IconArrowLeft({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* 3-word + 1-word split kept in data so lines don't reflow on viewport change. */
const slides = [
  {
    id: 1,
    eyebrow: 'Stance Supplements',
    titleLinesA: ['Nutrition that'],
    titleLinesB: ['sticks', 'with you'],
    subtitle: 'A taste that keeps you coming back for more.',
    cta: 'SHOP NOW',
    href: '/nutrition/shop',
    image: '/nutrition/hero-slider/hero-slider3.webp',
  },
  {
    id: 2,
    eyebrow: 'Daily Performance',
    titleLinesA: ['Fuel made'],
    titleLinesB: ['for', 'every session'],
    subtitle: 'Third-party tested. Clean-label. Built for progress.',
    cta: 'SHOP NOW',
    href: '/nutrition/shop',
    image: '/nutrition/hero-slider/hero-slider2.webp',
  },
  {
    id: 3,
    eyebrow: 'Pro Formulas',
    titleLinesA: ['Strength that'],
    titleLinesB: ['starts', 'at the jar'],
    subtitle: 'Precision blends to lift, recover, repeat.',
    cta: 'SHOP NOW',
    href: '/nutrition/shop',
    image: '/nutrition/hero-slider/hero-slider1.webp',
  },
];

export function NutritionHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="nh-hero-section">
      <div className="nh-hero-wrap">
        <Swiper
          modules={[EffectFade, Pagination]}
          onSwiper={setSwiperInstance}
          onSlideChange={(s) => {
            setActiveIndex(s.realIndex);
            setAnimKey((k) => k + 1);
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={1200}
          slidesPerView={1}
          style={{ width: '100%', height: '100%' }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.id}>
              <div className="nh-slide">
                <div className="nh-slide-image">
                  <Image
                    src={slide.image}
                    alt={[...slide.titleLinesA, ...slide.titleLinesB].join(' ')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center right' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>

                <div className="nh-slide-content container-main">
                  <div
                    key={`stack-${animKey}-${i}`}
                    className={`nh-stack ${activeIndex === i ? 'is-active' : ''}`}
                  >
                    <p className="nh-eyebrow">{slide.eyebrow}</p>
                    <h1 className="nh-title">
                      {slide.titleLinesA.map((l, k) => (
                        <span key={`a-${k}`} className="nh-title-line">{l}</span>
                      ))}
                      <span className="nh-title-line">
                        {slide.titleLinesB.map((w, k) => (
                          <span key={`b-${k}`} className={k === 1 ? 'nh-title-accent' : undefined}>
                            {k > 0 ? ' ' : ''}{w}
                          </span>
                        ))}
                      </span>
                    </h1>
                    <p className="nh-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="nh-cta">{slide.cta}</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Side arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          className="nh-arrow nh-arrow-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <IconArrowLeft size={24} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="nh-arrow nh-arrow-next"
          onClick={() => swiperInstance?.slideNext()}
        >
          <IconArrowRight size={24} />
        </button>

        {/* Dot pagination */}
        <div className="nh-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className={`nh-dot ${activeIndex === i ? 'is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nhFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .nh-stack > .nh-eyebrow,
        .nh-stack > .nh-title,
        .nh-stack > .nh-subtitle,
        .nh-stack > .nh-cta {
          opacity: 0;
          transform: translate3d(0, -14px, 0);
          will-change: transform, opacity;
        }
        .nh-stack.is-active > .nh-eyebrow {
          animation: nhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
        }
        .nh-stack.is-active > .nh-title {
          animation: nhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
        }
        .nh-stack.is-active > .nh-subtitle {
          animation: nhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 320ms forwards;
        }
        .nh-stack.is-active > .nh-cta {
          animation: nhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 440ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .nh-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .nh-stack > .nh-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .nh-hero-wrap {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #0b0b0b;
        }
        .nh-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .nh-slide-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .nh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .nh-slide-content > .nh-stack {
          max-width: 560px;
        }
        .nh-eyebrow {
          font-size: 25px;
          font-weight: 500;
          letter-spacing: 0.4px;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 12px;
        }
        .nh-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.4px;
        }
        .nh-title-line {
          display: block;
          white-space: nowrap;
        }
        .nh-title-accent {
          color: rgb(140, 255, 100);
        }
        .nh-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 24px;
          max-width: 420px;
          line-height: 1.6;
        }
        .nh-cta {
          display: inline-flex;
          align-items: center;
          background-color: rgb(140, 255, 100);
          color: #0e1a0a;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 13px 34px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 260ms ease, color 260ms ease, transform 260ms ease, box-shadow 260ms ease;
          box-shadow: 0 4px 14px rgba(140, 255, 100, 0.3);
        }
        .nh-cta:hover {
          background-color: #fff;
          color: #000;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* Arrows */
        .nh-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgb(140, 255, 100);
          color: #0e1a0a;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 220ms ease, transform 220ms ease;
        }
        .nh-arrow:hover { background: #fff; color: #0e1a0a; }
        .nh-arrow-prev { left: 14px; }
        .nh-arrow-next { right: 14px; }

        /* Dot pagination */
        .nh-pagination {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .nh-dot {
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
          transition: border-color 350ms ease;
        }
        .nh-dot span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .nh-dot:hover span { background: #fff; }
        .nh-dot.is-active { border-color: rgb(140, 255, 100); }
        .nh-dot.is-active span { background: rgb(140, 255, 100); transform: scale(0.85); }

        @media (max-width: 749px) {
          .nh-hero-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 280px);
            overflow: visible;
            background: #fff;
          }
          .nh-slide-image { background: #0b0b0b; }
          .nh-hero-wrap .swiper,
          .nh-hero-wrap .swiper-wrapper,
          .nh-hero-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .nh-slide {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
          }
          .nh-slide-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            z-index: 1;
          }
          .nh-slide-content {
            position: static;
            inset: auto;
            width: 100%;
            flex: 1;
            padding: 28px 16px 56px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            z-index: 2;
          }
          .nh-slide-content > .nh-stack {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .nh-eyebrow {
            font-size: clamp(10px, 2.8vw, 13px);
            margin-bottom: 8px;
            text-align: center;
          }
          .nh-title {
            font-size: clamp(20px, 5.6vw, 32px);
            margin-bottom: clamp(10px, 2.4vw, 14px);
            text-align: center;
          }
          .nh-title-line { white-space: normal; }
          .nh-subtitle {
            font-size: clamp(11px, 3vw, 14px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
            max-width: 100%;
          }
          .nh-cta {
            font-size: clamp(11px, 3vw, 14px);
            padding: clamp(10px, 2.6vw, 13px) clamp(20px, 5.5vw, 34px);
          }
          /* Text on white background — switch from light to dark palette */
          .nh-eyebrow { color: #666; }
          .nh-title { color: #111; }
          .nh-title-accent { color: #2a7d00; }
          .nh-subtitle { color: #555; }
          .nh-arrow { display: none; }
          .nh-pagination { bottom: 20px; }
        }

        @media (min-width: 750px) {
          .nh-title { font-size: 44px; }
        }
        @media (min-width: 992px) {
          .nh-eyebrow { margin-bottom: 18px; }
          .nh-title { font-size: 60px; margin-bottom: 24px; }
          .nh-subtitle { margin-bottom: 32px; }
          .nh-slide-content > .nh-stack { max-width: 600px; }
        }
        @media (min-width: 1200px) {
          .nh-title { font-size: 68px; letter-spacing: -0.6px; }
        }
      `}</style>
    </section>
  );
}
