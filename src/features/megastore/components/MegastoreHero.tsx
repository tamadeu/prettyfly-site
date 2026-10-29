'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const slides = [
  {
    id: 1,
    titleLines: ['Headphones that', 'Fit Your Style'],
    subtitle: 'Harmonize Your Spirits with a Giggling Rhythm',
    cta: 'Shop now',
    href: '/megastore/shop',
    image: '/megastore/hero-slider-and-banner/hero-slider-and-banner4.webp',
  },
  {
    id: 2,
    titleLines: ['Smart Tech for', 'Modern Living'],
    subtitle: 'Premium electronics curated for everyday excellence.',
    cta: 'Shop now',
    href: '/megastore/shop',
    image: '/megastore/hero-slider-and-banner/hero-slider-and-banner5.webp',
  },
  {
    id: 3,
    titleLines: ['Power Up Your', 'Workspace'],
    subtitle: 'Laptops, monitors and accessories with up to 40% off this week.',
    cta: 'Shop now',
    href: '/megastore/shop',
    image: '/megastore/hero-slider-and-banner/hero-slider-and-banner6.webp',
  },
];

const largeBanner = {
  title: 'AirPods Pro',
  subtitle: 'Superior audio quality',
  cta: 'Shop Now',
  href: '/megastore/product/apple-airpods-pro',
  image: '/megastore/hero-slider-and-banner/hero-slider-and-banner1.webp',
};

const miniBanners = [
  {
    id: 'smartphone',
    title: 'Smartphone',
    subtitle: 'Masterpiece in Mobile Technology',
    cta: 'Learn more',
    href: '/megastore/product/iphone-15-pro-max',
    image: '/megastore/hero-slider-and-banner/hero-slider-and-banner2.avif',
  },
  {
    id: 'homepod',
    title: 'HomePod',
    subtitle: 'Immersive, high-fidelity audio',
    cta: 'Learn more',
    href: '/megastore/product/home-pod-speaker',
    image: '/megastore/hero-slider-and-banner/hero-slider-and-banner3.avif',
  },
];

export function MegastoreHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="msh-hero-section">
      <div className="container-main">
        <div className="msh-hero-grid">
          {/* Main slider — 75% */}
          <div className="msh-hero-slider-wrap" style={{ position: 'relative' }}>
            <Swiper
              modules={[EffectFade]}
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
              style={{ width: '100%', height: '100%' }}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={slide.id}>
                  <div className="msh-slide">
                    <div className="msh-slide-image-wrap" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                      <Image
                        src={slide.image}
                        alt={slide.titleLines.join(' ')}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        sizes="(max-width: 991px) 100vw, 70vw"
                        priority={i === 0}
                      />
                    </div>

                    <div className="msh-slide-content">
                      <div
                        key={`content-${animKey}-${i}`}
                        className={`msh-slide-stack ${activeIndex === i ? 'is-active' : ''}`}
                      >
                        <h1 className="msh-slide-title">
                          {slide.titleLines.map((line, idx) => (
                            <span key={idx} className="msh-slide-title-line">{line}</span>
                          ))}
                        </h1>
                        <p className="msh-slide-subtitle">{slide.subtitle}</p>
                        <Link href={slide.href} className="msh-slide-btn">
                          {slide.cta}
                          <IconArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination — fixed-size dots, dot-inside-thin-circle */}
            <div className="msh-pagination">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperInstance?.slideToLoop(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`msh-dot ${activeIndex === i ? 'is-active' : ''}`}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>

          {/* Side banners — 25% (1 large on top + 2 mini below) */}
          <div className="msh-side-banners">
            <Link href={largeBanner.href} className="msh-side-large" style={{ position: 'relative', display: 'block' }}>
              <div className="msh-side-image-wrap" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                <Image
                  src={largeBanner.image}
                  alt={largeBanner.title}
                  fill
                  className="msh-side-image"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 991px) 100vw, 25vw"
                />
              </div>
              <div className="msh-side-content">
                <h3 className="msh-side-title">{largeBanner.title}</h3>
                <p className="msh-side-sub">{largeBanner.subtitle}</p>
                <span className="msh-side-cta">{largeBanner.cta}</span>
              </div>
            </Link>

            <div className="msh-mini-row">
              {miniBanners.map((b) => (
                <Link key={b.id} href={b.href} className="msh-mini" aria-label={b.title} style={{ position: 'relative', display: 'block' }}>
                  <div className="msh-mini-image-wrap" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="msh-mini-image"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 991px) 50vw, 12vw"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* 30px gap between sticky header and hero section */
        .msh-hero-section {
          padding-top: 30px;
        }

        /* Float-down stagger reveal */
        @keyframes mshFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -18px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .msh-slide-stack > .msh-slide-title,
        .msh-slide-stack > .msh-slide-subtitle,
        .msh-slide-stack > .msh-slide-btn {
          opacity: 0;
          transform: translate3d(0, -18px, 0);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .msh-slide-stack.is-active > .msh-slide-btn {
          animation: mshFloatIn 1200ms cubic-bezier(0.22, 1, 0.36, 1) 150ms forwards;
        }
        .msh-slide-stack.is-active > .msh-slide-subtitle {
          animation: mshFloatIn 1200ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards;
        }
        .msh-slide-stack.is-active > .msh-slide-title {
          animation: mshFloatIn 1200ms cubic-bezier(0.22, 1, 0.36, 1) 470ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .msh-slide-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .msh-slide-stack > .msh-slide-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Mobile base ── */
        .msh-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: stretch;
        }

        .msh-hero-slider-wrap {
          position: relative;
          height: 380px;
          border-radius: 12px;
          overflow: hidden;
        }

        .msh-slide {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          border-radius: 12px;
        }

        .msh-slide-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .msh-slide-content {
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 24px;
          z-index: 3;
        }

        .msh-slide-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        .msh-slide-title-line {
          display: block;
          white-space: nowrap;
        }

        .msh-slide-subtitle {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 32px;
          line-height: 1.7;
        }

        .msh-slide-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: #fff;
          color: #111;
          font-size: 16px;
          font-weight: 500;
          padding: 14px 36px;
          border-radius: 40px;
          text-decoration: none;
          transition: all 250ms ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
        }
        .msh-slide-btn:hover {
          background-color: #232f3f;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(35, 47, 63, 0.35);
        }

        /* Pagination dots */
        .msh-pagination {
          position: absolute;
          bottom: 26px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 14px;
          z-index: 5;
          will-change: transform;
        }
        .msh-dot {
          width: 20px;
          height: 20px;
          padding: 0;
          border-radius: 50%;
          border: 1.5px solid transparent;
          background-color: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 550ms cubic-bezier(0.22, 1, 0.36, 1);
          -webkit-tap-highlight-color: transparent;
        }
        .msh-dot span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.55);
          display: block;
          transform: scale(1);
          transform-origin: center;
          will-change: transform, background-color;
          transition: transform 550ms cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 450ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .msh-dot:hover span { background-color: #fff; }
        .msh-dot.is-active { border-color: #fff; }
        .msh-dot.is-active span {
          background-color: #fff;
          transform: scale(0.8);
        }

        /* ── Side banners — mobile base: stack vertically ── */
        .msh-side-banners {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          gap: 16px;
          height: auto;
        }

        /* ── Large banner (top) ── */
        .msh-side-large {
          position: relative;
          display: block;
          border-radius: 12px;
          overflow: hidden;
          height: 240px;
          color: #fff;
          text-decoration: none;
          transition: transform 350ms ease, box-shadow 350ms ease;
        }
        .msh-side-large:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
        }
        .msh-side-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .msh-side-image {
          transition: transform 600ms ease;
        }
        .msh-side-large:hover .msh-side-image {
          transform: scale(1.06);
        }
        .msh-side-content {
          position: absolute;
          top: 24px;
          left: 28px;
          right: 28px;
          z-index: 2;
          color: #fff;
          max-width: calc(100% - 56px);
          overflow: hidden;
          word-break: break-word;
        }
        .msh-side-title {
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 4px;
          letter-spacing: -0.2px;
          color: #fff;
        }
        .msh-side-sub {
          font-size: 13px;
          color: #fff;
          margin: 0 0 12px;
          line-height: 1.4;
        }
        .msh-side-cta {
          display: inline-block;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
          letter-spacing: 0.4px;
          padding-bottom: 3px;
          border-bottom: 1.5px solid currentColor;
          transition: letter-spacing 250ms ease;
        }
        .msh-side-large:hover .msh-side-cta { letter-spacing: 1px; }

        /* ── Mini row (bottom — 2 cards side by side) ── */
        .msh-mini-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .msh-mini {
          position: relative;
          display: block;
          border-radius: 12px;
          overflow: hidden;
          height: 200px;
          color: #fff;
          text-decoration: none;
          transition: transform 350ms ease, box-shadow 350ms ease;
        }
        .msh-mini:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
        }
        .msh-mini-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .msh-mini-image {
          transition: transform 600ms ease;
        }
        .msh-mini:hover .msh-mini-image {
          transform: scale(1.06);
        }
        .msh-mini-content {
          position: absolute;
          top: 18px;
          left: 18px;
          right: 18px;
          z-index: 2;
          color: #fff;
          text-align: center;
          overflow: hidden;
        }
        .msh-mini-title {
          font-size: clamp(13px, 2.2vw, 17px);
          font-weight: 700;
          margin: 0 0 4px;
          letter-spacing: -0.2px;
        }
        .msh-mini-sub {
          font-size: clamp(10px, 1.4vw, 11px);
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 8px;
          line-height: 1.4;
        }
        .msh-mini-cta {
          display: inline-block;
          font-size: clamp(10px, 1.5vw, 12px);
          font-weight: 500;
          color: #fff;
          padding-bottom: 1.5px;
          border-bottom: 1.5px solid currentColor;
          letter-spacing: 0.3px;
          transition: letter-spacing 250ms ease;
        }
        .msh-mini:hover .msh-mini-cta { letter-spacing: 0.9px; }

        /* ── < 750px — stacked: image on top, content + pagination below ── */
        @media (max-width: 749px) {
          .msh-hero-section { padding-top: 16px; }

          /* Total wrapper = image area + content area */
          .msh-hero-slider-wrap {
            height: calc(clamp(185px, 52vw, 280px) + 240px);
            overflow: hidden;
            border-radius: 0;
          }
          /* Swiper internals fill the full wrapper */
          .msh-hero-slider-wrap .swiper,
          .msh-hero-slider-wrap .swiper-wrapper,
          .msh-hero-slider-wrap .swiper-slide,
          .msh-slide {
            height: 100% !important;
            width: 100% !important;
          }

          /* Image: top portion only — own border-radius + overflow clip */
          .msh-slide-image-wrap {
            position: absolute;
            top: 0; left: 0; right: 0;
            height: clamp(185px, 52vw, 280px);
            border-radius: 12px;
            overflow: hidden;
            z-index: 1;
          }
          .msh-slide-image-wrap img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
          }

          /* Content: below image, vertically centered in the gap above pagination */
          .msh-slide-content {
            position: absolute;
            top: clamp(185px, 52vw, 280px);
            left: 0; right: 0;
            bottom: 52px;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
          }
          .msh-slide-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
          }
          .msh-slide-title {
            font-size: clamp(20px, 5.5vw, 28px);
            color: #111;
            margin-bottom: clamp(6px, 1.8vw, 10px);
            letter-spacing: -0.3px;
          }
          .msh-slide-title-line { white-space: normal; }
          .msh-slide-subtitle {
            font-size: clamp(12px, 3.2vw, 15px);
            color: #555;
            margin-bottom: clamp(12px, 3vw, 18px);
            line-height: 1.5;
          }
          .msh-slide-btn {
            background-color: #f26522;
            color: #fff;
            font-size: clamp(12px, 3.2vw, 15px);
            padding: clamp(10px, 2.4vw, 14px) clamp(24px, 6vw, 36px);
            gap: 8px;
            box-shadow: none;
          }
          .msh-slide-btn:hover {
            background-color: #d95510;
            color: #fff;
            transform: none;
            box-shadow: none;
          }

          /* Pagination: dark dots at the very bottom of the wrapper */
          .msh-pagination { bottom: 14px; }
          .msh-dot span { background-color: rgba(0, 0, 0, 0.2); }
          .msh-dot.is-active { border-color: #333; }
          .msh-dot.is-active span { background-color: #333; }
          .msh-dot:hover span { background-color: #555; }
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .msh-side-large { height: 260px; }
          .msh-mini { height: 220px; }
          .msh-slide-title { font-size: 40px; }
          .msh-slide-content { padding: 0 40px; }
        }

        /* ── ≥ 992px — desktop: 65/35 split, total 720px tall ── */
        @media (min-width: 992px) {
          .msh-hero-grid {
            grid-template-columns: 13fr 7fr; /* 65/35 split, gap-aware via fr units */
            height: 720px;
          }
          .msh-hero-slider-wrap, .msh-slide { height: 720px; }
          .msh-side-banners {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 16px;
            height: 720px;
          }
          .msh-side-large { height: 100%; }
          .msh-mini-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            height: 100%;
          }
          .msh-mini { height: 100%; }
          .msh-slide-content { width: 55%; padding: 0 50px; }
          .msh-slide-title { font-size: 52px; margin-bottom: 28px; }
          .msh-slide-subtitle { font-size: 18px; margin-bottom: 40px; }
          .msh-side-title { font-size: 22px; }
          .msh-mini-title { font-size: 18px; }
        }

        /* ── ≥ 1200px — large desktop ── */
        @media (min-width: 1200px) {
          .msh-slide-content { width: 50%; padding: 0 60px; }
          .msh-slide-title { font-size: 60px; line-height: 1.25; margin-bottom: 32px; letter-spacing: -0.8px; }
          .msh-slide-subtitle { font-size: 19px; line-height: 1.75; margin-bottom: 44px; }
          .msh-slide-btn { font-size: 17px; padding: 16px 44px; }
          .msh-side-title { font-size: 24px; }
          .msh-mini-title { font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
