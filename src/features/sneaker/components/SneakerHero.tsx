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
    title: ['Running Shoes', 'Collection'],
    subtitle: "Introducing the Ambuz women's autumn / summer Fashion",
    cta: 'Shop Collection',
    href: '/shop',
    image: '/sneaker/hero-slider/hero-slider1.webp',
  },
  {
    id: 2,
    title: ['Born to Run', 'Further'],
    subtitle: 'Engineered for speed. Designed for the street.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/sneaker/hero-slider/hero-slider2.webp',
  },
  {
    id: 3,
    title: ['Wear the Streets', 'Boldly'],
    subtitle: 'Premium sneakers crafted for every stride.',
    cta: 'Shop Collection',
    href: '/shop',
    image: '/sneaker/hero-slider/hero-slider3.webp',
  },
];

export function SneakerHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="sn-hero-section">
      <div className="sn-hero-wrap">
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
              <div className="sn-hero-slide">
                <div className="sn-hero-slide-image">
                  <Image
                    src={slide.image}
                    alt={slide.title.join(' ')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>

                <div className="sn-hero-slide-content container-main">
                  <div
                    key={`stack-${animKey}-${i}`}
                    className={`sn-hero-stack ${activeIndex === i ? 'is-active' : ''}`}
                  >
                    <h1 className="sn-hero-title">
                      {slide.title.map((line, k) => (
                        <span key={k} className="sn-hero-title-line">{line}</span>
                      ))}
                    </h1>
                    <p className="sn-hero-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="sn-hero-cta">
                      {slide.cta}
                      <IconArrowRight size={16} />
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
          className="sn-hero-arrow sn-hero-arrow-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <IconArrowLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="sn-hero-arrow sn-hero-arrow-next"
          onClick={() => swiperInstance?.slideNext()}
        >
          <IconArrowRight size={20} />
        </button>

        <div className="sn-hero-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className={`sn-hero-dot ${activeIndex === i ? 'is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes snHeroFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .sn-hero-stack > .sn-hero-title,
        .sn-hero-stack > .sn-hero-subtitle,
        .sn-hero-stack > .sn-hero-cta {
          opacity: 0;
          transform: translate3d(0, -14px, 0);
          will-change: transform, opacity;
        }
        .sn-hero-stack.is-active > .sn-hero-title {
          animation: snHeroFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
        }
        .sn-hero-stack.is-active > .sn-hero-subtitle {
          animation: snHeroFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 240ms forwards;
        }
        .sn-hero-stack.is-active > .sn-hero-cta {
          animation: snHeroFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 380ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .sn-hero-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .sn-hero-stack > .sn-hero-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .sn-hero-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          overflow: hidden;
          background: #f5f0e6;
        }
        .sn-hero-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .sn-hero-slide-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .sn-hero-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .sn-hero-slide-content > .sn-hero-stack {
          max-width: 520px;
        }
        .sn-hero-title {
          font-size: 32px;
          font-weight: 700;
          color: #111;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.2px;
        }
        .sn-hero-title-line {
          display: block;
          white-space: nowrap;
        }
        .sn-hero-subtitle {
          font-size: 14px;
          color: #555;
          margin-bottom: 28px;
          max-width: 420px;
          line-height: 1.6;
        }
        .sn-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 260ms ease, transform 260ms ease;
        }
        .sn-hero-cta:hover {
          background-color: #333;
          transform: translateY(-1px);
        }

        .sn-hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: opacity 220ms ease;
        }
        .sn-hero-arrow:hover { opacity: 0.85; }
        .sn-hero-arrow-prev {
          left: 20px;
          background: rgba(0, 0, 0, 0.1);
          color: #111;
        }
        .sn-hero-arrow-next {
          right: 20px;
          background: #e84d1c;
          color: #fff;
        }

        .sn-hero-pagination {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .sn-hero-dot {
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
          transition: border-color 300ms ease;
        }
        .sn-hero-dot span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .sn-hero-dot:hover span { background: #111; }
        .sn-hero-dot.is-active { border-color: #111; }
        .sn-hero-dot.is-active span { background: #111; transform: scale(0.85); }

        @media (max-width: 749px) {
          .sn-hero-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 280px);
            overflow: visible;
            background: #f5f0e6;
          }
          .sn-hero-slide-image { background: #f5f0e6; }
          .sn-hero-wrap .swiper,
          .sn-hero-wrap .swiper-wrapper,
          .sn-hero-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .sn-hero-slide {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
          }
          .sn-hero-slide-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            z-index: 1;
          }
          .sn-hero-slide-content {
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
          .sn-hero-slide-content > .sn-hero-stack {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .sn-hero-title {
            font-size: clamp(20px, 5.6vw, 32px);
            margin-bottom: clamp(10px, 2.4vw, 14px);
            text-align: center;
          }
          .sn-hero-title-line { white-space: normal; }
          .sn-hero-subtitle {
            font-size: clamp(11px, 3vw, 14px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
            max-width: 100%;
          }
          .sn-hero-cta {
            font-size: clamp(11px, 3vw, 14px);
            padding: clamp(10px, 2.6vw, 13px) clamp(20px, 5.5vw, 28px);
          }
          .sn-hero-arrow { display: none; }
          .sn-hero-pagination { bottom: 20px; }
        }

        @media (min-width: 750px) {
          .sn-hero-title { font-size: 44px; }
        }
        @media (min-width: 992px) {
          .sn-hero-title { font-size: 56px; margin-bottom: 20px; }
          .sn-hero-subtitle { font-size: 15px; margin-bottom: 32px; }
          .sn-hero-slide-content > .sn-hero-stack { max-width: 560px; }
        }
        @media (min-width: 1200px) {
          .sn-hero-title { font-size: 64px; letter-spacing: -0.4px; }
        }
      `}</style>
    </section>
  );
}
