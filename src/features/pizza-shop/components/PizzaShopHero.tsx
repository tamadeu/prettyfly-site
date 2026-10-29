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

type TitlePart = { text: string; accent?: boolean };

const slides: Array<{
  id: number;
  eyebrow: string;
  title: TitlePart[][];
  subtitle: string;
  cta: string;
  href: string;
  image: string;
}> = [
  {
    id: 1,
    eyebrow: '',
    title: [
      [{ text: 'Enjoy ' }, { text: 'Healthy', accent: true }, { text: ' and' }],
      [{ text: 'Delicious Food' }],
    ],
    subtitle: 'Serve meals tailored to specific dietary requirements.',
    cta: 'Shop Now',
    href: '/pizza/shop',
    image: '/pizza/hero-banner/hero-banner2.webp',
  },
  {
    id: 2,
    eyebrow: '',
    title: [
      [{ text: 'Taste the' }],
      [{ text: 'Authentic ' }, { text: 'Pizza Flavor', accent: true }],
    ],
    subtitle: 'Freshly baked with premium toppings and hand-tossed dough.',
    cta: 'ORDER NOW',
    href: '/pizza/shop',
    image: '/pizza/hero-banner/hero-banner3.webp',
  },
  {
    id: 3,
    eyebrow: '',
    title: [
      [{ text: 'Crafted with' }],
      [{ text: 'Passion ' }, { text: 'For Every Bite', accent: true }],
    ],
    subtitle: 'Explore our signature recipes loved by thousands daily.',
    cta: 'SHOP NOW',
    href: '/pizza/shop',
    image: '/pizza/hero-banner/hero-banner1.webp',
  },
];

export function PizzaShopHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="psh-hero-section">
      <div className="psh-hero-wrap">
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
              <div className="psh-slide">
                <div className="psh-slide-image">
                  <Image
                    src={slide.image}
                    alt={slide.title.flat().map(p => p.text).join('')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>

                <div className="psh-slide-content container-main">
                  <div
                    key={`stack-${animKey}-${i}`}
                    className={`psh-stack ${activeIndex === i ? 'is-active' : ''}`}
                  >
                    {slide.eyebrow && <p className="psh-eyebrow">{slide.eyebrow}</p>}
                    <h1 className="psh-title">
                      {slide.title.map((line, li) => (
                        <span key={li} className="psh-title-line">
                          {line.map((part, pi) =>
                            part.accent
                              ? <span key={pi} className="psh-title-accent">{part.text}</span>
                              : <span key={pi}>{part.text}</span>
                          )}
                        </span>
                      ))}
                    </h1>
                    <p className="psh-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="psh-cta">{slide.cta}</Link>
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
          className="psh-arrow psh-arrow-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <IconArrowLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="psh-arrow psh-arrow-next"
          onClick={() => swiperInstance?.slideNext()}
        >
          <IconArrowRight size={20} />
        </button>

        {/* Dot pagination */}
        <div className="psh-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className={`psh-dot ${activeIndex === i ? 'is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pshFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .psh-stack > .psh-eyebrow,
        .psh-stack > .psh-title,
        .psh-stack > .psh-subtitle,
        .psh-stack > .psh-cta {
          opacity: 0;
          transform: translate3d(0, -14px, 0);
          will-change: transform, opacity;
        }
        .psh-stack.is-active > .psh-eyebrow {
          animation: pshFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
        }
        .psh-stack.is-active > .psh-title {
          animation: pshFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
        }
        .psh-stack.is-active > .psh-subtitle {
          animation: pshFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 320ms forwards;
        }
        .psh-stack.is-active > .psh-cta {
          animation: pshFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 440ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .psh-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .psh-stack > .psh-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .psh-hero-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          overflow: hidden;
          background: #111;
        }
        .psh-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .psh-slide-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .psh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .psh-slide-content > .psh-stack {
          max-width: 560px;
        }
        .psh-eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.4px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 12px;
        }
        .psh-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.4px;
        }
        .psh-title-line {
          display: block;
          white-space: nowrap;
        }
        .psh-title-accent {
          color: #e84d1c;
        }
        .psh-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 24px;
          max-width: 420px;
          line-height: 1.6;
        }
        .psh-cta {
          display: inline-flex;
          align-items: center;
          background-color: #e84d1c;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 13px 34px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 260ms ease, transform 260ms ease, box-shadow 260ms ease;
          box-shadow: 0 4px 14px rgba(232, 77, 28, 0.35);
        }
        .psh-cta:hover {
          background-color: #c73d12;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(232, 77, 28, 0.45);
        }

        /* Arrows */
        .psh-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 220ms ease, transform 220ms ease;
        }
        .psh-arrow:hover { background: #e84d1c; }
        .psh-arrow-prev { left: 14px; }
        .psh-arrow-next { right: 14px; background: #e84d1c; }
        .psh-arrow-next:hover { background: #c73d12; }

        /* Dot pagination */
        .psh-pagination {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .psh-dot {
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
        .psh-dot span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.45);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .psh-dot:hover span { background: #fff; }
        .psh-dot.is-active { border-color: #e84d1c; }
        .psh-dot.is-active span { background: #e84d1c; transform: scale(0.85); }

        /* ── Mobile: image stacks above text panel ── */
        @media (max-width: 749px) {
          .psh-hero-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 280px);
            overflow: visible;
            background: #000;
          }
          .psh-slide-image { background: #111; }
          .psh-hero-wrap .swiper,
          .psh-hero-wrap .swiper-wrapper,
          .psh-hero-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .psh-slide {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
          }
          .psh-slide-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            z-index: 1;
          }
          .psh-slide-content {
            position: static;
            inset: auto;
            width: 100%;
            flex: 1;
            padding: 28px 16px 56px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            z-index: 2;
            background: #000;
          }
          .psh-slide-content > .psh-stack {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .psh-eyebrow {
            font-size: clamp(10px, 2.8vw, 13px);
            margin-bottom: 8px;
            text-align: center;
          }
          .psh-title {
            font-size: clamp(20px, 5.6vw, 32px);
            margin-bottom: clamp(10px, 2.4vw, 14px);
            text-align: center;
          }
          .psh-title-line { white-space: normal; }
          .psh-subtitle {
            font-size: clamp(11px, 3vw, 14px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
            max-width: 100%;
          }
          .psh-cta {
            font-size: clamp(11px, 3vw, 14px);
            padding: clamp(10px, 2.6vw, 13px) clamp(20px, 5.5vw, 34px);
          }
          .psh-arrow { display: none; }
          .psh-pagination { bottom: 20px; }
        }

        @media (min-width: 750px) {
          .psh-title { font-size: 44px; }
        }
        @media (min-width: 992px) {
          .psh-eyebrow { font-size: 14px; margin-bottom: 18px; }
          .psh-title { font-size: 60px; margin-bottom: 24px; }
          .psh-subtitle { margin-bottom: 32px; }
          .psh-slide-content > .psh-stack { max-width: 600px; }
        }
        @media (min-width: 1200px) {
          .psh-title { font-size: 68px; letter-spacing: -0.6px; }
        }
      `}</style>
    </section>
  );
}
