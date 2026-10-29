'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { fromIndex, records, text, type CmsContent } from '../cms';

function IconArrowLeftS({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* Same content across all three slides (per spec); only the model image differs. */
const defaultSlides = [1, 2, 3].map((n) => ({
  id: n,
  title: 'Eleve o nível do seu\ntreino',
  subtitle: 'Melhore seu desempenho com roupas esportivas estilosas e de alta qualidade.',
  cta: 'Ver coleção',
  href: '/shop',
  image: `/active-wear/hero-slider/hero-slider-${n}.webp`,
}));

export function ActiveWearHero({ content }: { content?: CmsContent }) {
  const cmsSlides = records(content?.slides);
  const slides = cmsSlides.length
    ? cmsSlides.map((s, i) => ({
        id: i + 1,
        title: text(s.title, defaultSlides[0].title),
        subtitle: text(s.subtitle, defaultSlides[0].subtitle),
        cta: text(s.button_label, defaultSlides[0].cta),
        href: text(s.button_url, defaultSlides[0].href),
        image: text(s.image, fromIndex(defaultSlides, i).image),
      }))
    : defaultSlides;
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="awh-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
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
        style={{ width: '100%', height: '730px' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="awh-slide-wrap">
              {/* Full-bleed background image — same pattern as fashion HeroSlider */}
              <div className="awh-slide-img-wrap">
                <Image
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>

              {/* Content overlay — absolute over image, left-aligned */}
              <div className="awh-slide-content container-main">
                <div
                  key={`content-${animKey}-${i}`}
                  className="awh-slide-text"
                  style={{
                    animation: activeIndex === i ? 'awhFadeInDown 800ms ease-out forwards' : 'none',
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                >
                  <h1 className="awh-slide-title">{slide.title}</h1>
                  <p className="awh-slide-subtitle">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="awh-cta"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
                  >
                    {slide.cta}
                    <IconArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <button onClick={() => swiperInstance?.slidePrev()} aria-label="Slide anterior" className="awh-nav-prev">
        <IconArrowLeftS size={24} />
      </button>
      <button onClick={() => swiperInstance?.slideNext()} aria-label="Próximo slide" className="awh-nav-next">
        <IconArrowRightS size={24} />
      </button>

      {/* Pagination dots */}
      <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstance?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: activeIndex === i ? '18px' : '10px',
              height: activeIndex === i ? '18px' : '10px',
              borderRadius: '50%',
              border: activeIndex === i ? '1.5px solid #222' : 'none',
              backgroundColor: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0, cursor: 'pointer',
              transition: 'all 300ms ease',
            }}
          >
            <span style={{
              width: activeIndex === i ? '8px' : '9px',
              height: activeIndex === i ? '8px' : '9px',
              borderRadius: '50%',
              backgroundColor: activeIndex === i ? '#222' : '#333',
              display: 'block',
              transition: 'all 300ms ease',
            }} />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes awhFadeInDown {
          0%   { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes awhFadeInDownAlt {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .swiper-slide-active .awh-slide-text > * {
          animation-name: awhFadeInDownAlt;
          animation-duration: 1.2s;
          animation-fill-mode: both;
        }
        .swiper-slide-active .awh-slide-text > .awh-slide-title {
          animation-delay: 0.6s;
        }

        .awh-slide-wrap {
          position: relative;
          width: 100%;
          height: 730px;
          overflow: hidden;
          background-color: #e9eae6;
        }
        .awh-slide-img-wrap {
          position: absolute;
          inset: 0;
        }
        .awh-slide-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .awh-slide-text { max-width: 520px; }
        .awh-slide-title {
          font-size: 50px;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 16px;
          white-space: pre-line;
        }
        .awh-slide-subtitle {
          font-size: 20px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .awh-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #000;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 0;
          text-decoration: none;
          transition: background-color 200ms ease;
        }

        /* ── Nav buttons — always visible: translucent-gray prev, solid-black next ── */
        .awh-nav-prev,
        .awh-nav-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 250ms ease;
        }
        .awh-nav-prev {
          left: 24px;
          background-color: rgba(120,120,120,0.55);
        }
        .awh-nav-next {
          right: 24px;
          background-color: #111;
        }
        .awh-nav-prev:hover { background-color: rgba(90,90,90,0.75); }
        .awh-nav-next:hover { background-color: #333; }

        /* ── Mobile: image stacks above, content below ── */
        @media (max-width: 749px) {
          .awh-section .swiper {
            height: calc(clamp(240px, 58vw, 420px) + 260px) !important;
          }
          .awh-section .swiper-wrapper,
          .awh-section .swiper-slide {
            height: 100% !important;
          }
          .awh-slide-wrap {
            height: 100%;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .awh-slide-img-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(240px, 58vw, 420px);
            flex-shrink: 0;
            overflow: hidden;
          }
          .awh-slide-content {
            position: static;
            width: 100%;
            flex: 1;
            padding-top: 24px;
            padding-bottom: 56px;
            align-items: flex-start;
            justify-content: center;
            z-index: auto;
          }
          .awh-slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            width: 100%;
          }
          .awh-slide-title {
            font-size: clamp(22px, 5.5vw, 32px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
            text-align: center;
          }
          .awh-slide-subtitle {
            font-size: clamp(13px, 3.2vw, 15px);
            margin-bottom: clamp(16px, 4vw, 22px);
            text-align: center;
          }
          .awh-nav-prev,
          .awh-nav-next { display: none !important; }
        }
      `}</style>
    </section>
  );
}
