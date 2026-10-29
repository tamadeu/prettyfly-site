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
    bg: '#f4b3aa',
    title: ['Unleash Your', 'Lip Power'],
    subtitle: 'Unleash bold, vibrant lips with powerful, lasting color',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/lipstain/hero-banner/hero-banner1.webp',
  },
  {
    id: 2,
    bg: '#e8e4e2',
    title: ['Express Yourself', 'With Color'],
    subtitle: 'Tailored skincare for radiant, healthy skin every day.',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/lipstain/hero-banner/hero-banner2.webp',
  },
  {
    id: 3,
    bg: '#f4f2f0',
    title: ['Upgrade Your', 'Lip Game'],
    subtitle: 'Boost performance with stylish, high quality activewear.',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/lipstain/hero-banner/hero-banner3.webp',
  },
];

export function LipstainHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="lsh-hero-section">
      <div className="lsh-hero-wrap">
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
              <div className="lsh-slide">
                <div className="lsh-slide-bg" style={{ backgroundColor: slide.bg }} />
                <div className="lsh-slide-image">
                  <Image
                    src={slide.image}
                    alt={slide.title.join(' ')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center right' }}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="lsh-slide-overlay" style={{ background: `linear-gradient(105deg, ${slide.bg}f8 0%, ${slide.bg}d0 38%, ${slide.bg}60 58%, ${slide.bg}00 72%)` }} />
                <div className="lsh-slide-content container-main">
                  <div
                    key={`stack-${animKey}-${i}`}
                    className={`lsh-stack ${activeIndex === i ? 'is-active' : ''}`}
                  >
                    <h1 className="lsh-title">
                      {slide.title.map((line, k) => (
                        <span key={k} className="lsh-title-line">{line}</span>
                      ))}
                    </h1>
                    <p className="lsh-subtitle">{slide.subtitle}</p>
                    <Link href={slide.href} className="lsh-cta">
                      {slide.cta}
                      <IconArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button type="button" aria-label="Previous slide" className="lsh-arrow lsh-arrow-prev" onClick={() => swiperInstance?.slidePrev()}>
          <IconArrowLeft size={20} />
        </button>
        <button type="button" aria-label="Next slide" className="lsh-arrow lsh-arrow-next" onClick={() => swiperInstance?.slideNext()}>
          <IconArrowRight size={20} />
        </button>

        <div className="lsh-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className={`lsh-dot ${activeIndex === i ? 'is-active' : ''}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');

        @keyframes lshFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -14px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .lsh-stack > .lsh-title,
        .lsh-stack > .lsh-subtitle,
        .lsh-stack > .lsh-cta {
          opacity: 0;
          transform: translate3d(0, -14px, 0);
          will-change: transform, opacity;
        }
        .lsh-stack.is-active > .lsh-title {
          animation: lshFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
        }
        .lsh-stack.is-active > .lsh-subtitle {
          animation: lshFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 240ms forwards;
        }
        .lsh-stack.is-active > .lsh-cta {
          animation: lshFloatIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 380ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .lsh-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .lsh-stack > .lsh-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        .lsh-hero-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          overflow: hidden;
          background: #f4b3aa;
        }
        .lsh-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .lsh-slide-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .lsh-slide-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .lsh-slide-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
        .lsh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 3;
        }
        .lsh-slide-content > .lsh-stack {
          max-width: 560px;
        }
        .lsh-title {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
          font-size: 52px;
          font-weight: 700;
          color: #111;
          line-height: 1.1;
          margin-bottom: 18px;
          letter-spacing: -0.3px;
        }
        .lsh-title-line {
          display: block;
          white-space: nowrap;
        }
        .lsh-subtitle {
          font-size: 14px;
          color: #555;
          margin-bottom: 32px;
          max-width: 420px;
          line-height: 1.65;
        }
        .lsh-cta {
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
        .lsh-cta:hover {
          background-color: #333;
          transform: translateY(-1px);
        }

        .lsh-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.80);
          color: #222;
          border: 1px solid rgba(0,0,0,0.12);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 220ms ease, color 220ms ease, box-shadow 220ms ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .lsh-arrow:hover { background: #111; color: #fff; border-color: #111; }
        .lsh-arrow-prev { left: 14px; }
        .lsh-arrow-next { right: 14px; }

        .lsh-pagination {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .lsh-dot {
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
        .lsh-dot span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.28);
          display: block;
          transition: background-color 300ms ease, transform 300ms ease;
        }
        .lsh-dot:hover span { background: rgba(0,0,0,0.55); }
        .lsh-dot.is-active { border-color: #111; }
        .lsh-dot.is-active span { background: #111; transform: scale(0.85); }

        @media (max-width: 749px) {
          .lsh-hero-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 260px);
            overflow: visible;
            background: #fff;
          }
          .lsh-hero-wrap .swiper,
          .lsh-hero-wrap .swiper-wrapper,
          .lsh-hero-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .lsh-slide {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
          }
          .lsh-slide-bg {
            position: absolute;
            inset: 0;
            height: clamp(280px, 58vw, 420px);
          }
          .lsh-slide-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            z-index: 1;
          }
          .lsh-slide-overlay { display: none; }
          .lsh-slide-content {
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
          .lsh-slide-content > .lsh-stack {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .lsh-title {
            font-size: clamp(28px, 7.5vw, 44px);
            margin-bottom: clamp(10px, 2.4vw, 16px);
            text-align: center;
          }
          .lsh-title-line { white-space: normal; }
          .lsh-subtitle {
            font-size: clamp(12px, 3vw, 14px);
            margin-bottom: clamp(18px, 4vw, 24px);
            text-align: center;
            max-width: 100%;
          }
          .lsh-cta {
            font-size: clamp(11px, 3vw, 13px);
            padding: clamp(11px, 2.8vw, 14px) clamp(22px, 5.5vw, 32px);
          }
          .lsh-arrow { display: none; }
          .lsh-pagination { bottom: 20px; }
        }

        @media (min-width: 750px) {
          .lsh-title { font-size: 58px; }
        }
        @media (min-width: 992px) {
          .lsh-title { font-size: 70px; margin-bottom: 22px; }
          .lsh-subtitle { font-size: 15px; margin-bottom: 36px; }
          .lsh-slide-content > .lsh-stack { max-width: 600px; }
        }
        @media (min-width: 1200px) {
          .lsh-title { font-size: 80px; letter-spacing: -0.5px; }
        }
      `}</style>
    </section>
  );
}
