'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* Each title is explicitly split into two lines: 3 words + 1 word.
   The split is fixed in data — it will never re-wrap based on viewport width. */
const slides = [
  {
    id: 1,
    titleLines: ['Freshness They Truly', 'Crave'],
    subtitle: 'Vet-approved nutrition for every bowl — get 20% off your first order.',
    cta: 'Shop now',
    href: '/pet-food/shop',
    image: '/pet-food/hero-slider-and-banner/hero-slider-and-banner4.webp',
  },
  {
    id: 2,
    titleLines: ['Healthy Food Happy', 'Pets'],
    subtitle: 'Wholesome meals delivered straight to your door, every week.',
    cta: 'Shop now',
    href: '/pet-food/shop',
    image: '/pet-food/hero-slider-and-banner/hero-slider-and-banner3.webp',
  },
];

const sideBanners = [
  {
    id: 'banner-1',
    title: 'Extra 20% Off All Supplies',
    cta: 'SHOP NOW',
    href: '/pet-food/shop',
    image: '/pet-food/hero-slider-and-banner/hero-slider-and-banner1.avif',
    textColor: 'rgb(10, 66, 83)',
  },
  {
    id: 'banner-2',
    title: 'Top-rated Food Your Pet Loves',
    cta: 'SHOP NOW',
    href: '/pet-food/shop',
    image: '/pet-food/hero-slider-and-banner/hero-slider-and-banner2.avif',
    textColor: 'rgb(10, 66, 83)',
  },
];

export function PetFoodHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="pfh-hero-section">
      <div className="container-main">
        <div className="pfh-hero-grid">
          {/* Main slider — 75% */}
          <div className="pfh-hero-slider-wrap">
            <Swiper
              modules={[EffectFade, Pagination]}
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
                  <div className="pfh-slide">
                    <div className="pfh-slide-image-wrap">
                      <Image
                        src={slide.image}
                        alt={slide.titleLines.join(' ')}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        sizes="(max-width: 991px) 100vw, 70vw"
                        priority={i === 0}
                      />
                    </div>

                    <div className="pfh-slide-content">
                      <div
                        key={`content-${animKey}-${i}`}
                        className={`pfh-slide-stack ${activeIndex === i ? 'is-active' : ''}`}
                      >
                        <h1 className="pfh-slide-title">
                          {slide.titleLines.map((line, idx) => (
                            <span key={idx} className="pfh-slide-title-line">{line}</span>
                          ))}
                        </h1>
                        <p className="pfh-slide-subtitle">{slide.subtitle}</p>
                        <Link href={slide.href} className="pfh-slide-btn">
                          {slide.cta}
                          <IconArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination — always visible, dot-inside-thin-circle */}
            <div className="pfh-pagination">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperInstance?.slideToLoop(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`pfh-dot ${activeIndex === i ? 'is-active' : ''}`}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>

          {/* Side banners — 25% */}
          <div className="pfh-side-banners">
            {sideBanners.map((banner) => (
              <Link key={banner.id} href={banner.href} className="pfh-side-banner">
                <div className="pfh-side-image-wrap">
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    className="pfh-side-image"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 991px) 100vw, 30vw"
                  />
                </div>
                <div className="pfh-side-content" style={{ color: banner.textColor }}>
                  <h3 className="pfh-side-title">{banner.title}</h3>
                  <span className="pfh-side-cta">{banner.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Gentle float-down from above — short travel, long duration, smooth fade */
        @keyframes pfhFloatIn {
          0%   { opacity: 0; transform: translate3d(0, -18px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        /* Staggered reveal — button first, then description, then title.
           The animKey remount replays the animation on every slide change. */
        .pfh-slide-stack > .pfh-slide-title,
        .pfh-slide-stack > .pfh-slide-subtitle,
        .pfh-slide-stack > .pfh-slide-btn {
          opacity: 0;
          transform: translate3d(0, -18px, 0);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .pfh-slide-stack.is-active > .pfh-slide-btn {
          animation: pfhFloatIn 1200ms cubic-bezier(0.22, 1, 0.36, 1) 150ms forwards;
        }
        .pfh-slide-stack.is-active > .pfh-slide-subtitle {
          animation: pfhFloatIn 1200ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards;
        }
        .pfh-slide-stack.is-active > .pfh-slide-title {
          animation: pfhFloatIn 1200ms cubic-bezier(0.22, 1, 0.36, 1) 470ms forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .pfh-slide-stack > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .swiper-slide-active .pfh-slide-stack > .pfh-slide-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Mobile base ── */
        .pfh-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: stretch;
        }

        .pfh-hero-slider-wrap {
          position: relative;
          height: 380px;
          border-radius: 12px;
          overflow: hidden;
        }

        .pfh-slide {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          border-radius: 12px;
        }

        .pfh-slide-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .pfh-slide-content {
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 24px;
          z-index: 3;
        }

        .pfh-slide-title {
          font-size: 32px;
          font-weight: 700;
          color: rgb(10, 66, 83);
          line-height: 1.25;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        /* Each line is a block span that never wraps — the 3/1-word split is fixed */
        .pfh-slide-title-line {
          display: block;
          white-space: nowrap;
        }

        .pfh-slide-subtitle {
          font-size: 17px;
          color: rgb(10, 66, 83);
          margin-bottom: 32px;
          line-height: 1.7;
        }

        .pfh-slide-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: rgb(10, 66, 83);
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          padding: 14px 36px;
          border-radius: 40px;
          text-decoration: none;
          transition: all 250ms ease;
          box-shadow: 0 2px 10px rgba(10, 66, 83, 0.25);
        }
        .pfh-slide-btn:hover {
          background-color: rgb(6, 46, 60);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(10, 66, 83, 0.35);
        }

        /* Pagination — always visible, fixed-size dots that morph smoothly (no layout shift) */
        .pfh-pagination {
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
        .pfh-dot {
          width: 20px;
          height: 20px;
          padding: 0;
          border-radius: 50%;
          border: 1.5px solid rgb(10, 66, 83);
          background-color: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 550ms cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 550ms cubic-bezier(0.22, 1, 0.36, 1);
          border-color: transparent;
          -webkit-tap-highlight-color: transparent;
        }
        .pfh-dot span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #bbb;
          display: block;
          transform: scale(1);
          transform-origin: center;
          will-change: transform, background-color;
          transition: transform 550ms cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 450ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pfh-dot:hover span {
          background-color: #888;
        }
        .pfh-dot.is-active {
          border-color: rgb(10, 66, 83);
        }
        .pfh-dot.is-active span {
          background-color: rgb(10, 66, 83);
          transform: scale(0.8);
        }

        /* Side banners — mobile base: stack 1 col */
        .pfh-side-banners {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          gap: 16px;
          height: auto;
        }

        .pfh-side-banner {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          display: block;
          text-decoration: none;
          height: 260px;
          transition: transform 350ms ease, box-shadow 350ms ease;
        }
        .pfh-side-banner:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.08);
        }

        .pfh-side-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .pfh-side-image {
          transition: transform 600ms ease;
        }
        .pfh-side-banner:hover .pfh-side-image {
          transform: scale(1.06);
        }

        .pfh-side-content {
          position: absolute;
          top: 30px;
          left: 32px;
          right: 32px;
          z-index: 2;
        }

        .pfh-side-title {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 14px;
          color: inherit;
          white-space: normal;
          overflow-wrap: break-word;
          letter-spacing: -0.2px;
          max-width: 100%;
        }

        .pfh-side-cta {
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          color: inherit;
          letter-spacing: 0.4px;
          padding-bottom: 3px;
          border-bottom: 1.5px solid currentColor;
          transition: letter-spacing 250ms ease, opacity 250ms ease;
        }
        .pfh-side-banner:hover .pfh-side-cta {
          letter-spacing: 1px;
        }

        /* ── < 750px — hero restructure: image on top, content below,
              pagination floating at the bottom. Explicit container height
              so Swiper's % heights resolve (otherwise the swiper collapses
              when its parent is height:auto). Image + content still live
              inside each SwiperSlide so they swap together on every slide
              change. ── */
        @media (max-width: 749px) {
          /* Wrap height = fluid image area + fixed ~280px content/pagination.
             clamp() lets both shrink smoothly as the viewport narrows. */
          .pfh-hero-slider-wrap {
            height: calc(clamp(280px, 58vw, 420px) + 280px);
            width: 100%;
            border-radius: 0;
            overflow: visible;
          }
          /* Swiper internals must also be 100% tall or the fade effect
             collapses to 0 when our container height changes. */
          .pfh-hero-slider-wrap .swiper,
          .pfh-hero-slider-wrap .swiper-wrapper,
          .pfh-hero-slider-wrap .swiper-slide {
            height: 100% !important;
            width: 100% !important;
          }
          .pfh-slide {
            height: 100%;
            width: 100%;
            border-radius: 0;
            overflow: visible;
            display: flex;
            flex-direction: column;
            position: relative;
          }
          .pfh-slide-image-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(280px, 58vw, 420px);
            flex-shrink: 0;
            border-radius: 12px;
            overflow: hidden;
            z-index: 1;
          }
          /* Explicit image sizing as a belt-and-braces guarantee on top of
             next/image's fill prop — some layout collapses have been seen
             when the parent's position/height cascade is unusual. */
          .pfh-slide-image-wrap img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
          }
          .pfh-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding: 28px 16px 56px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            text-align: center;
            z-index: 2;
          }
          .pfh-slide-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .pfh-slide-title {
            font-size: clamp(20px, 5.4vw, 30px);
            margin-bottom: clamp(10px, 2.4vw, 14px);
            text-align: center;
          }
          .pfh-slide-title-line { white-space: normal; }
          .pfh-slide-subtitle {
            font-size: clamp(12px, 3.4vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .pfh-slide-btn {
            font-size: clamp(12px, 3.4vw, 16px);
            padding: clamp(10px, 2.6vw, 14px) clamp(20px, 5.5vw, 36px);
            gap: clamp(6px, 1.6vw, 12px);
          }
          /* Pagination stays absolute inside the wrap (wrap has a fixed
             height now), floats near the bottom of the content area. */
          .pfh-pagination {
            bottom: 20px;
          }
        }

        /* ── ≥ 750px — tablet: side banners go side-by-side ── */
        @media (min-width: 750px) {
          .pfh-side-banners {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .pfh-side-banner { height: 240px; }
          .pfh-slide-title { font-size: 40px; }
          .pfh-slide-content { padding: 0 40px; }
        }

        /* ── ≥ 992px — desktop: switch to 75/25 side-by-side.
           Using fr units (not %) so the 16px gap doesn't push the right
           banner past the container edge. */
        @media (min-width: 992px) {
          .pfh-hero-grid { grid-template-columns: 3fr 1fr; }
          .pfh-hero-slider-wrap, .pfh-slide { height: 650px; }
          .pfh-side-banners {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            height: 650px;
          }
          .pfh-side-banner { height: 100%; }
          .pfh-slide-content { width: 55%; padding: 0 50px; }
          .pfh-slide-title { font-size: 52px; margin-bottom: 28px; }
          .pfh-slide-subtitle { font-size: 18px; margin-bottom: 40px; }
          .pfh-side-title { font-size: 17px; }
        }

        /* ── ≥ 1200px — large desktop: final typography scale ── */
        @media (min-width: 1200px) {
          .pfh-slide-content { width: 50%; padding: 0 60px; }
          .pfh-slide-title { font-size: 60px; line-height: 1.25; margin-bottom: 32px; letter-spacing: -0.8px; }
          .pfh-slide-subtitle { font-size: 19px; line-height: 1.75; margin-bottom: 44px; }
          .pfh-slide-btn { font-size: 17px; padding: 16px 44px; }
          .pfh-side-title { font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
