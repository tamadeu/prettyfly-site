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
    eyebrow: 'New Collection',
    titleLinesA: ['Elevate Your Audio'],
    titleLinesB: ['Experience'],
    subtitle: 'Enjoy rich sound, deep bass, and clear highs with these headphones.',
    cta: 'Shop now',
    href: '/shop',
    image: '/headphones/hero-slider/hero-slider1.webp',
  },
  {
    id: 2,
    eyebrow: 'Best Sellers',
    titleLinesA: ['Next-Level Sound'],
    titleLinesB: ['For', 'Everyone'],
    subtitle: 'Discover headphones built for every moment — gaming, studio, or commute.',
    cta: 'Shop now',
    href: '/shop',
    image: '/headphones/hero-slider/hero-slider2.webp',
  },
  {
    id: 3,
    eyebrow: 'Limited Offer',
    titleLinesA: ['Pure Audio'],
    titleLinesB: ['Pure', 'Perfection'],
    subtitle: 'Hi-Res certified, noise-cancelling headphones at unbeatable prices.',
    cta: 'Shop now',
    href: '/shop',
    image: '/headphones/hero-slider/hero-slider3.webp',
  },
];

export function HeadphonesHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="hph-hero-section">
      <div className="hph-hero-wrap">
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
              <div className="hph-slide">
                <div className="hph-slide-image">
                  <Image
                    src={slide.image}
                    alt={[...slide.titleLinesA, ...slide.titleLinesB].join(' ')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>

                <div className="hph-slide-content container-main">
                  <div
                    key={`stack-${animKey}-${i}`}
                    className={`hph-stack ${activeIndex === i ? 'is-active' : ''}`}
                  >
                    <h1 className="hph-title">
                      {slide.titleLinesA.map((l, k) => (
                        <span key={`a-${k}`} className="hph-title-line">{l}</span>
                      ))}
                      <span className="hph-title-line">
                        {slide.titleLinesB.map((w, k) => (
                          <span key={`b-${k}`} className={k === 0 ? 'hph-title-accent' : undefined}>
                            {k > 0 ? ' ' : ''}{w}
                          </span>
                        ))}
                      </span>
                    </h1>
                    <p className="hph-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="hph-cta">{slide.cta}<IconArrowRight size={17} /></Link>
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
          className="hph-arrow hph-arrow-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <IconArrowLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="hph-arrow hph-arrow-next"
          onClick={() => swiperInstance?.slideNext()}
        >
          <IconArrowRight size={20} />
        </button>

        {/* Dot pagination */}
        <div className="hph-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className={`hph-dot ${activeIndex === i ? 'is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .hph-hero-section {
          padding: 20px 20px 0;
        }
        @keyframes hphFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .hph-stack > .hph-eyebrow,
        .hph-stack > .hph-title,
        .hph-stack > .hph-subtitle,
        .hph-stack > .hph-cta {
          opacity: 0;
          transform: translate3d(0, -14px, 0);
          will-change: transform, opacity;
        }
        .hph-stack.is-active > .hph-eyebrow {
          animation: hphFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
        }
        .hph-stack.is-active > .hph-title {
          animation: hphFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
        }
        .hph-stack.is-active > .hph-subtitle {
          animation: hphFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 320ms forwards;
        }
        .hph-stack.is-active > .hph-cta {
          animation: hphFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 440ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .hph-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .hph-stack > .hph-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .hph-hero-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          overflow: hidden;
          background: #0b0b0b;
          border-radius: 16px;
        }
        .hph-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hph-slide-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .hph-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .hph-slide-content > .hph-stack {
          max-width: 560px;
        }
        .hph-eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.4px;
          color: #d9d9d9;
          margin-bottom: 12px;
        }
        .hph-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.4px;
        }
        .hph-title-line {
          display: block;
          white-space: nowrap;
        }
        .hph-title-accent {
          color: #fff;
        }
        .hph-subtitle {
          font-size: 20px;
          color: rgba(255,255,255,1);
          margin-bottom: 24px;
          max-width: 420px;
          line-height: 1.6;
        }
        .hph-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background-color: #fff;
          color: #111;
          font-size: 16px;
          font-weight: 500;
          min-width: 210px;
          padding: 13px 28px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 260ms ease, transform 260ms ease;
        }
        .hph-cta:hover {
          background-color: #f0f0f0;
          transform: translateY(-1px);
        }

        /* Arrows */
        .hph-arrow { display: none; }
        .hph-arrow-prev { left: 14px; }
        .hph-arrow-next { right: 14px; }

        /* Dot pagination */
        .hph-pagination {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .hph-dot {
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
        .hph-dot span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .hph-dot:hover span { background: #fff; }
        .hph-dot.is-active { border-color: rgba(255,255,255,0.8); }
        .hph-dot.is-active span { background: #fff; transform: scale(0.85); }

        @media (max-width: 749px) {
          .hph-hero-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 280px);
            overflow: visible;
            background: #0b0b0b;
          }
          .hph-pagination { bottom: 300px; }
          .hph-slide-image { background: #0b0b0b; }
          .hph-hero-wrap .swiper,
          .hph-hero-wrap .swiper-wrapper,
          .hph-hero-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .hph-slide {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
          }
          .hph-slide-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            z-index: 1;
          }
          .hph-slide-content {
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
          .hph-slide-content > .hph-stack {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .hph-eyebrow {
            font-size: clamp(10px, 2.8vw, 13px);
            margin-bottom: 8px;
            text-align: center;
            color: rgba(255,255,255,0.75);
          }
          .hph-title {
            font-size: clamp(18px, 5vw, 28px);
            margin-bottom: clamp(10px, 2.4vw, 14px);
            text-align: center;
            color: #fff;
          }
          .hph-title-line { white-space: normal; }
          .hph-title-accent { color: #fff; }
          .hph-subtitle {
            font-size: clamp(11px, 3vw, 14px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
            max-width: 100%;
            color: rgba(255,255,255,0.75);
          }
          .hph-cta {
            font-size: clamp(11px, 3vw, 14px);
            padding: clamp(10px, 2.6vw, 13px) clamp(20px, 5.5vw, 34px);
          }
          .hph-arrow { display: none; }
        }

        @media (min-width: 750px) {
          .hph-title { font-size: 40px; }
        }
        @media (min-width: 992px) {
          .hph-eyebrow { font-size: 14px; margin-bottom: 18px; }
          .hph-title { font-size: 52px; margin-bottom: 24px; }
          .hph-subtitle { font-size: 20px; margin-bottom: 32px; }
          .hph-slide-content > .hph-stack { max-width: 600px; }
        }
        @media (min-width: 1200px) {
          .hph-title { font-size: 60px; letter-spacing: -0.6px; }
        }
      `}</style>
    </section>
  );
}
