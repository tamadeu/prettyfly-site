'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

function IconArrowLeftS({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const slides = [
  {
    id: 1,
    title: 'Running Shoes\nCollection',
    subtitle: "Introducing the Ambuz women's autumn / summer Fashion",
    cta: 'Shop Now',
    href: '/shop',
    image: '/footwear/hero-slider/hero-slider-1.webp',
  },
  {
    id: 2,
    title: 'Step Into\nThe Future',
    subtitle: 'Engineered cushioning and street-ready style in every stride',
    cta: 'Shop Now',
    href: '/shop',
    image: '/footwear/hero-slider/hero-slider-2.webp',
  },
  {
    id: 3,
    title: 'Walk With\nPurpose',
    subtitle: 'Discover the latest drops built for comfort and performance',
    cta: 'Shop Now',
    href: '/shop',
    image: '/footwear/hero-slider/hero-slider-3.webp',
  },
];

export function FootwearHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="fwh-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
        style={{ width: '100%', height: '830px' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="fwh-slide-wrap">
              <div className="fwh-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              <div className="fwh-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="fwh-slide-text"
                  style={{
                    animation: activeIndex === i ? 'fwhFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="fwh-slide-title">{slide.title}</h1>
                  <p className="fwh-slide-subtitle">{slide.subtitle}</p>
                  <Link href={slide.href} className="fwh-cta">
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous slide" className="fwh-nav fwh-nav-prev">
        <IconArrowLeftS size={24} />
      </button>
      <button onClick={() => swiperInstance?.slideNext()} aria-label="Next slide" className="fwh-nav fwh-nav-next">
        <IconArrowRightS size={24} />
      </button>

      <div className="fwh-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstance?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`fwh-dot ${activeIndex === i ? 'is-active' : ''}`}
          >
            <span />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes fwhFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .fwh-slide-wrap {
          position: relative;
          width: 100%;
          height: 830px;
          background-color: #0a0a14;
          overflow: hidden;
        }
        .fwh-slide-img-wrap { position: absolute; inset: 0; }
        .fwh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .fwh-slide-text { max-width: 540px; }
        .fwh-slide-title {
          font-size: 56px;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 18px;
          white-space: pre-line;
        }
        .fwh-slide-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.82);
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .fwh-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 34px;
          border: 1px solid rgba(255,255,255,0.85);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          background-color: transparent;
          transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease;
        }
        .fwh-cta:hover {
          background-color: #fff;
          color: #111;
          border-color: #fff;
        }

        /* Dots */
        .fwh-dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .fwh-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: none;
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          padding: 0; cursor: pointer;
          transition: all 300ms ease;
        }
        .fwh-dot span {
          width: 10px; height: 10px; border-radius: 50%;
          background-color: rgba(255,255,255,0.5);
          display: block; transition: all 300ms ease;
        }
        .fwh-dot.is-active {
          width: 18px; height: 18px;
          border: 1.5px solid #fff;
        }
        .fwh-dot.is-active span {
          width: 8px; height: 8px; background-color: #fff;
        }

        /* Nav arrows */
        .fwh-nav {
          position: absolute;
          top: 50%;
          z-index: 10;
          width: 52px; height: 52px;
          border-radius: 50%;
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          background-color: rgba(255,255,255,0.12);
          backdrop-filter: blur(2px);
          transition: transform 400ms ease, opacity 400ms ease, background-color 250ms ease;
          opacity: 0;
        }
        .fwh-nav-prev { left: 40px; transform: translateY(-50%) translateX(-50px); }
        .fwh-nav-next { right: 40px; transform: translateY(-50%) translateX(50px); }
        .fwh-section:hover .fwh-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .fwh-section:hover .fwh-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }
        .fwh-nav:hover { background-color: #fff; color: #111; }

        @media (max-width: 749px) {
          .fwh-section .swiper { height: clamp(420px, 92vw, 600px) !important; }
          .fwh-slide-wrap { height: 100%; }
          .fwh-slide-content { align-items: center; }
          .fwh-slide-title { font-size: clamp(30px, 8vw, 48px); margin-bottom: 12px; }
          .fwh-slide-subtitle { font-size: clamp(13px, 3.4vw, 16px); margin-bottom: 22px; }
          .fwh-cta { padding: 12px 26px; font-size: 13px; }
          .fwh-nav { display: none !important; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .fwh-section .swiper { height: 660px !important; }
          .fwh-slide-wrap { height: 660px; }
          .fwh-slide-title { font-size: 44px; }
        }
      `}</style>
    </section>
  );
}
