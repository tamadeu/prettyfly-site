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

const slides = [
  {
    id: 1,
    title: 'Elegant Living\nFurniture',
    subtitle: 'Discover timeless pieces crafted for modern living spaces.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/furniture/hero-slider/hero-slider1.webp',
  },
  {
    id: 2,
    title: 'Sleep in\nStyle & Comfort',
    subtitle: 'Luxurious bedroom furniture designed for rest and relaxation.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/furniture/hero-slider/hero-slider2.webp',
  },
  {
    id: 3,
    title: 'Work Smarter,\nLive Better',
    subtitle: 'Functional and beautiful office furniture for every workspace.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/furniture/hero-slider/hero-slider3.webp',
  },
];

export function FurnitureHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="fuh-section">
      <div className="fuh-wrap">
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
              <div className={`fuh-slide${i === 0 ? ' fuh-slide-first' : ''}`}>
                <div className="fuh-slide-image">
                  <Image
                    src={slide.image}
                    alt={slide.title.replace('\n', ' ')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>

                <div className="fuh-slide-content container-main">
                  <div
                    key={`stack-${animKey}-${i}`}
                    className={`fuh-stack ${activeIndex === i ? 'is-active' : ''}`}
                  >
                    <h1 className="fuh-title">
                      {slide.title.split('\n').map((line, k) => (
                        <span key={k} className="fuh-title-line">{line}</span>
                      ))}
                    </h1>
                    <p className="fuh-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="fuh-cta">
                      {slide.cta}
                      <IconArrowRight size={22} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous slide"
          className="fuh-arrow fuh-arrow-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <IconArrowLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="fuh-arrow fuh-arrow-next"
          onClick={() => swiperInstance?.slideNext()}
        >
          <IconArrowRight size={20} />
        </button>

        <div className="fuh-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className={`fuh-dot ${activeIndex === i ? 'is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fuhFloatIn {
          0%   { opacity: 0; transform: translate3d(0, 20px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .fuh-stack > .fuh-title,
        .fuh-stack > .fuh-subtitle,
        .fuh-stack > .fuh-cta {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .fuh-stack.is-active > .fuh-title {
          animation: fuhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
        }
        .fuh-stack.is-active > .fuh-subtitle {
          animation: fuhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 240ms forwards;
        }
        .fuh-stack.is-active > .fuh-cta {
          animation: fuhFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 380ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .fuh-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .fuh-stack > .fuh-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Section — clips swiper loop overflow at all sizes ── */
        .fuh-section { overflow-x: hidden; }

        .fuh-wrap {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          background: #f0ede8;
        }
        .fuh-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .fuh-slide-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .fuh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .fuh-slide-content > .fuh-stack {
          max-width: 540px;
        }
        .fuh-title {
          font-size: 30px;
          font-weight: 700;
          color: #111;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -0.3px;
        }
        .fuh-title-line { display: block; }
        .fuh-subtitle {
          font-size: 17px;
          color: #111;
          margin-bottom: 32px;
          max-width: 400px;
          line-height: 1.65;
        }
        .fuh-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.04em;
          padding: 17px 36px;
          border: none;
          border-radius: 4px;
          text-decoration: none;
          transition: background 260ms ease, transform 260ms ease;
        }
        .fuh-cta:hover { background: #c8a45a; transform: translateY(-2px); }

        /* ── First hero slide only — white text, white/black CTA ── */
        .fuh-slide-first .fuh-title,
        .fuh-slide-first .fuh-subtitle {
          color: rgb(255, 255, 255);
        }
        .fuh-slide-first .fuh-cta {
          background: #FFFFFF;
          color: #000000;
        }

        .fuh-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          color: #222;
          border: 1px solid rgba(0,0,0,0.12);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background 220ms ease, border-color 220ms ease, color 220ms ease;
        }
        .fuh-arrow:hover { background: #c8a45a; border-color: #c8a45a; color: #fff; }
        .fuh-arrow-prev { left: 20px; }
        .fuh-arrow-next { right: 20px; }

        .fuh-pagination {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
          will-change: transform;
        }
        .fuh-dot {
          width: 16px;
          height: 16px;
          padding: 0;
          border-radius: 50%;
          background: transparent;
          border: 1.5px solid rgba(0,0,0,0.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 350ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .fuh-dot span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0,0,0,0.25);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .fuh-dot:hover span { background: #111; }
        .fuh-dot.is-active { border-color: #c8a45a; }
        .fuh-dot.is-active span { background: #c8a45a; transform: scale(0.85); }

        /* ── < 749px — image on top, content below (Pet Food pattern) ──
           Wrap height = fluid image zone + fixed 280px content/pagination area.
           Swiper must have a pixel height to resolve — calc() gives it one.
           overflow: visible lets the static content area flow below the image. */
        @media (max-width: 749px) {
          .fuh-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 280px);
            overflow: visible;
          }
          /* Force all Swiper internals to respect the calculated height */
          .fuh-wrap .swiper,
          .fuh-wrap .swiper-wrapper,
          .fuh-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .fuh-slide {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
          }
          /* Image becomes a positioned-relative block at top of slide */
          .fuh-slide-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
            z-index: 1;
          }
          .fuh-slide-image img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
          }
          /* Content flows as static below the image */
          .fuh-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-block: 28px 56px;
            align-items: flex-start;
            justify-content: center;
            text-align: center;
            background: #f0ede8;
            z-index: 2;
          }
          .fuh-slide-content > .fuh-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 100%;
          }
          .fuh-title {
            font-size: clamp(20px, 5.4vw, 30px);
            margin-bottom: clamp(10px, 2.4vw, 14px);
            text-align: center;
          }
          .fuh-title-line { white-space: normal; }
          .fuh-subtitle {
            font-size: clamp(12px, 3.4vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
            max-width: 100%;
          }
          .fuh-cta {
            font-size: clamp(12px, 3.4vw, 16px);
            padding: clamp(10px, 2.6vw, 14px) clamp(20px, 5.5vw, 36px);
            gap: clamp(6px, 1.6vw, 10px);
          }
          .fuh-arrow { display: none; }
          /* Pagination floats inside the 56px bottom-padding zone of the content */
          .fuh-pagination { bottom: 20px; }
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .fuh-title { font-size: 42px; }
          .fuh-subtitle { font-size: 18px; }
        }

        /* ── ≥ 992px — desktop ── */
        @media (min-width: 992px) {
          .fuh-wrap { height: 760px; }
          .fuh-title { font-size: 54px; margin-bottom: 22px; }
          .fuh-subtitle { font-size: 18px; margin-bottom: 36px; }
          .fuh-slide-content > .fuh-stack { max-width: 580px; }
        }

        /* ── ≥ 1200px — wide ── */
        @media (min-width: 1200px) {
          .fuh-title { font-size: 62px; letter-spacing: -0.5px; }
        }
      `}</style>
    </section>
  );
}
