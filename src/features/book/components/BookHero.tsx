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
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 22 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

const slides = [
  {
    id: 1,
    title: 'Enchanting designs\nfor the refined',
    subtitle: 'Books are written works composed of words, organized.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/book/hero-slider/hero-slider-1.webp',
  },
  {
    id: 2,
    title: 'Stories that\nstay with you',
    subtitle: 'Discover handpicked titles across every genre and mood.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/book/hero-slider/hero-slider-2.webp',
  },
  {
    id: 3,
    title: 'Your next great\nread awaits',
    subtitle: 'Bestsellers, new arrivals and timeless classics in one place.',
    cta: 'Shop Now',
    href: '/shop',
    image: '/book/hero-slider/hero-slider-3.webp',
  },
];

export function BookHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="bkhero-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => { setActiveIndex(swiper.realIndex); setAnimKey((k) => k + 1); }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={800}
        slidesPerView={1}
        style={{ width: '100%', height: '640px' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="bkhero-slide-wrap">
              <div className="bkhero-slide-img-wrap">
                <Image src={slide.image} alt={slide.title.replace('\n', ' ')} fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="100vw" priority={i === 0} />
              </div>
              <div className="bkhero-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="bkhero-slide-text"
                  style={{ animation: activeIndex === i ? 'bkheroFadeInDown 800ms ease-out forwards' : 'none', opacity: activeIndex === i ? 1 : 0 }}
                >
                  <h1 className="bkhero-slide-title">{slide.title}</h1>
                  <p className="bkhero-slide-subtitle">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="bkhero-cta"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b81f3b'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#e0294a'; }}
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous slide" className="bkhero-nav-prev"><IconArrowLeftS size={22} /></button>
      <button onClick={() => swiperInstance?.slideNext()} aria-label="Next slide" className="bkhero-nav-next"><IconArrowRightS size={22} /></button>

      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstance?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: activeIndex === i ? '26px' : '10px',
              height: '10px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: activeIndex === i ? '#e0294a' : '#f0b6c1',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 300ms ease',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bkheroFadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bkheroInner {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .bkhero-section .swiper-slide-active .bkhero-slide-text > * {
          animation-name: bkheroInner;
          animation-duration: 1.1s;
          animation-fill-mode: both;
        }
        .bkhero-section .swiper-slide-active .bkhero-slide-text > .bkhero-slide-title { animation-delay: 0.5s; }

        .bkhero-slide-wrap {
          position: relative;
          width: 100%;
          height: 640px;
          background-color: #d9edfb;
          overflow: hidden;
        }
        .bkhero-slide-img-wrap { position: absolute; inset: 0; }
        .bkhero-slide-content { position: absolute; inset: 0; display: flex; align-items: center; z-index: 2; }
        .bkhero-slide-text { max-width: 540px; }
        .bkhero-slide-title {
          font-size: 52px;
          font-weight: 700;
          color: #333;
          line-height: 1.15;
          margin-bottom: 16px;
          white-space: pre-line;
        }
        .bkhero-slide-subtitle { font-size: 17px; color: #555; line-height: 1.6; margin-bottom: 28px; max-width: 440px; }
        .bkhero-cta {
          display: inline-flex;
          align-items: center;
          background-color: #e0294a;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 15px 34px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 200ms ease;
        }

        @media (max-width: 749px) {
          .bkhero-section .swiper { height: calc(clamp(220px, 56vw, 380px) + 250px) !important; }
          .bkhero-section .swiper-wrapper, .bkhero-section .swiper-slide { height: 100% !important; }
          .bkhero-slide-wrap { height: 100%; overflow: visible; display: flex; flex-direction: column; }
          .bkhero-slide-img-wrap { position: relative; inset: auto; width: 100%; height: clamp(220px, 56vw, 380px); flex-shrink: 0; overflow: hidden; }
          .bkhero-slide-content { position: static; width: 100%; flex: 1; padding-top: 24px; padding-bottom: 48px; align-items: flex-start; justify-content: center; z-index: auto; }
          .bkhero-slide-text { display: flex; flex-direction: column; align-items: center; max-width: 100%; width: 100%; }
          .bkhero-slide-title { font-size: clamp(24px, 6vw, 34px); margin-bottom: clamp(10px, 2.5vw, 16px); text-align: center; }
          .bkhero-slide-subtitle { font-size: clamp(13px, 3.2vw, 15px); margin-bottom: clamp(16px, 4vw, 22px); text-align: center; }
          .bkhero-nav-prev, .bkhero-nav-next { display: none !important; }
        }

        .bkhero-nav-prev, .bkhero-nav-next {
          position: absolute;
          top: 50%;
          z-index: 10;
          width: 46px;
          height: 46px;
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
        .bkhero-nav-prev { left: 40px; transform: translateY(-50%) translateX(-40px); background-color: rgba(224, 41, 74, 0.4); }
        .bkhero-nav-next { right: 40px; transform: translateY(-50%) translateX(40px); background-color: #e0294a; }
        .bkhero-section:hover .bkhero-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .bkhero-section:hover .bkhero-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }
        .bkhero-nav-prev:hover, .bkhero-nav-next:hover { background-color: #b81f3b !important; }
      `}</style>
    </section>
  );
}
