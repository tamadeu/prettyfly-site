'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
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

const slides = [
  {
    id: 1,
    bg: '#fdf5f0',
    eyebrow: 'Natural Beauty',
    title: ['Unleash the Power', 'of Natural Beauty'],
    subtitle: 'Discover our curated collection of premium skincare formulated with nature\'s finest ingredients.',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/skin-care/hero-slider/hero-slider1.webp',
  },
  {
    id: 2,
    bg: '#f5f0f7',
    eyebrow: 'Premium Collection',
    title: ['Discover Your', 'Best Self'],
    subtitle: 'Expertly crafted serums, creams and oils that transform your skin from the inside out.',
    cta: 'SHOP NOW',
    href: '/shop?sort=newest',
    image: '/skin-care/hero-slider/hero-slider2.webp',
  },
  {
    id: 3,
    bg: '#fef9f0',
    eyebrow: 'Glow Collection',
    title: ['Radiant Skin,', 'Effortless Glow'],
    subtitle: 'Lightweight, fast-absorbing formulas that leave your skin feeling fresh, smooth and luminous.',
    cta: 'SHOP NOW',
    href: '/shop?category=Face%20Oils',
    image: '/skin-care/hero-slider/hero-slider3.webp',
  },
];

export function SkinCareHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="skh-hero-section">
      <div className="skh-hero-wrap">
        <Swiper
          modules={[EffectFade]}
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
              <div className="skh-slide">
                <div className="skh-slide-bg" style={{ backgroundColor: slide.bg }} />
                <div className="skh-slide-image">
                  <Image
                    src={slide.image}
                    alt={slide.title.join(' ')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center right' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="skh-slide-overlay" style={{ background: `linear-gradient(105deg, ${slide.bg}f0 0%, ${slide.bg}c0 40%, ${slide.bg}00 72%)` }} />
                <div className="skh-slide-content container-main">
                  <div
                    key={`stack-${animKey}-${i}`}
                    className={`skh-stack ${activeIndex === i ? 'is-active' : ''}`}
                  >
                    <p className="skh-eyebrow">{slide.eyebrow}</p>
                    <h1 className="skh-title">
                      {slide.title.map((line, k) => (
                        <span key={k} className="skh-title-line">{line}</span>
                      ))}
                    </h1>
                    <p className="skh-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="skh-cta">
                      {slide.cta}
                      <IconArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button type="button" aria-label="Previous slide" className="skh-arrow skh-arrow-prev" onClick={() => swiperInstance?.slidePrev()}>
          <IconArrowLeft size={20} />
        </button>
        <button type="button" aria-label="Next slide" className="skh-arrow skh-arrow-next" onClick={() => swiperInstance?.slideNext()}>
          <IconArrowRight size={20} />
        </button>

        <div className="skh-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className={`skh-dot ${activeIndex === i ? 'is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes skhFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .skh-stack > .skh-eyebrow,
        .skh-stack > .skh-title,
        .skh-stack > .skh-subtitle,
        .skh-stack > .skh-cta {
          opacity: 0;
          transform: translate3d(0, -14px, 0);
          will-change: transform, opacity;
        }
        .skh-stack.is-active > .skh-eyebrow {
          animation: skhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
        }
        .skh-stack.is-active > .skh-title {
          animation: skhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
        }
        .skh-stack.is-active > .skh-subtitle {
          animation: skhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 320ms forwards;
        }
        .skh-stack.is-active > .skh-cta {
          animation: skhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 440ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .skh-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .skh-stack > .skh-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .skh-hero-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          overflow: hidden;
          background: #fdf5f0;
        }
        .skh-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .skh-slide-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .skh-slide-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .skh-slide-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
        .skh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 3;
        }
        .skh-slide-content > .skh-stack {
          max-width: 560px;
        }
        .skh-eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b8919a;
          margin-bottom: 14px;
        }
        .skh-title {
          font-size: 32px;
          font-weight: 700;
          color: #111;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.3px;
        }
        .skh-title-line {
          display: block;
          white-space: nowrap;
        }
        .skh-subtitle {
          font-size: 14px;
          color: #555;
          margin-bottom: 30px;
          max-width: 420px;
          line-height: 1.65;
        }
        .skh-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #111;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: background-color 260ms ease, transform 260ms ease;
        }
        .skh-cta:hover {
          background-color: #b8919a;
          transform: translateY(-1px);
        }

        .skh-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.80);
          color: #222;
          border: 1px solid rgba(0,0,0,0.10);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .skh-arrow:hover { background: #111; color: #fff; border-color: #111; }
        .skh-arrow-prev { left: 14px; }
        .skh-arrow-next { right: 14px; }

        .skh-pagination {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .skh-dot {
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
        .skh-dot span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.28);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .skh-dot:hover span { background: rgba(0,0,0,0.55); }
        .skh-dot.is-active { border-color: #b8919a; }
        .skh-dot.is-active span { background: #b8919a; transform: scale(0.85); }

        @media (max-width: 749px) {
          .skh-hero-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 280px);
            overflow: visible;
            background: #fff;
          }
          .skh-hero-wrap .swiper,
          .skh-hero-wrap .swiper-wrapper,
          .skh-hero-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .skh-slide {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
          }
          .skh-slide-bg {
            position: absolute;
            inset: 0;
            height: clamp(280px, 58vw, 420px);
          }
          .skh-slide-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            z-index: 1;
          }
          .skh-slide-overlay { display: none; }
          .skh-slide-content {
            position: static;
            inset: auto;
            width: 100%;
            flex: 1;
            padding: 28px 16px 56px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            z-index: 2;
            background: #fff;
          }
          .skh-slide-content > .skh-stack {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .skh-eyebrow {
            font-size: clamp(10px, 2.6vw, 13px);
            margin-bottom: 8px;
            text-align: center;
          }
          .skh-title {
            font-size: clamp(20px, 5.6vw, 32px);
            margin-bottom: clamp(10px, 2.4vw, 14px);
            text-align: center;
          }
          .skh-title-line { white-space: normal; }
          .skh-subtitle {
            font-size: clamp(11px, 3vw, 14px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
            max-width: 100%;
          }
          .skh-cta {
            font-size: clamp(11px, 3vw, 13px);
            padding: clamp(11px, 2.8vw, 14px) clamp(22px, 5.5vw, 32px);
          }
          .skh-arrow { display: none; }
          .skh-pagination { bottom: 20px; }
        }

        @media (min-width: 750px) {
          .skh-title { font-size: 44px; }
        }
        @media (min-width: 992px) {
          .skh-eyebrow { font-size: 14px; margin-bottom: 20px; }
          .skh-title { font-size: 60px; margin-bottom: 24px; }
          .skh-subtitle { font-size: 15px; margin-bottom: 36px; }
          .skh-slide-content > .skh-stack { max-width: 600px; }
        }
        @media (min-width: 1200px) {
          .skh-title { font-size: 68px; letter-spacing: -0.5px; }
        }
      `}</style>
    </section>
  );
}
