'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

/* Ported 1:1 from Fashion04Hero.tsx (design/layout/animation/responsive
   behavior must stay pixel-identical per spec) — only copy, hrefs, and
   images swapped for POD. Class prefix renamed f4hero-* -> pdhero-*; every
   selector, breakpoint, and timing value below is unchanged. */

function IconArrowLeftS({ size = 22 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 22 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* Padded to 4 slides so the loop stays above the max slidesPerView (3 at
   ≥992px) — only 3 unique POD hero images exist, so slide 4 repeats the
   first with different copy, mirroring how every other padded slider in
   this project (e.g. Socks Instagram) stays above its max slidesPerView. */
const slides = [
  { id: 1, title: 'Wear Your Imagination T-Shirts!', href: '/shop', image: '/pod/hero-slider/hero-slider-1.webp' },
  { id: 2, title: 'Personalized Mugs for Every Mood!', href: '/shop', image: '/pod/hero-slider/hero-slider-2.webp' },
  { id: 3, title: 'Your Dream Design, Your Bag!', href: '/shop', image: '/pod/hero-slider/hero-slider-3.webp' },
  { id: 4, title: 'Print What You Love!', href: '/shop', image: '/pod/hero-slider/hero-slider-1.webp' },
];

export function PodHero() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="pdhero-section">
      <Swiper
        modules={[Autoplay]}
        onSwiper={setSwiper}
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={{
          750: { slidesPerView: 2, spaceBetween: 12 },
          992: { slidesPerView: 3, spaceBetween: 14 },
        }}
        loop
        speed={700}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="pdhero-slide">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 749px) 100vw, (max-width: 991px) 50vw, 33vw"
                priority={i < 3}
                className="pdhero-img"
              />

              <div className="pdhero-overlay" />

              <div className="pdhero-content">
                <h2 className="pdhero-title">{slide.title}</h2>
                <Link href={slide.href} className="pdhero-btn">Shop Now</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Side arrows */}
      <button onClick={() => swiper?.slidePrev()} aria-label="Previous slide" className="pdhero-nav pdhero-nav-prev">
        <IconArrowLeftS size={22} />
      </button>
      <button onClick={() => swiper?.slideNext()} aria-label="Next slide" className="pdhero-nav pdhero-nav-next">
        <IconArrowRightS size={22} />
      </button>

      <style>{`
        .pdhero-section {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .pdhero-slide {
          position: relative;
          width: 100%;
          height: 710px;
          background-color: #efeae4;
          overflow: hidden;
        }
        .pdhero-img { transition: transform 700ms ease; }
        .pdhero-slide:hover .pdhero-img { transform: scale(1.04); }

        /* Bottom scrim so white text stays legible on light imagery */
        .pdhero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.45) 100%);
          z-index: 1;
        }

        .pdhero-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: clamp(28px, 5vw, 56px);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(12px, 1.6vw, 20px);
          padding: 0 20px;
          text-align: center;
        }
        .pdhero-title {
          color: #fff;
          font-size: clamp(22px, 2.4vw, 32px);
          font-weight: 700;
          line-height: 1.3;
          text-shadow: 0 1px 8px rgba(0,0,0,0.35);
          max-width: 90%;
        }
        .pdhero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          color: #111;
          font-size: clamp(13px, 1.4vw, 16px);
          font-weight: 600;
          padding: clamp(11px, 1.6vw, 15px) clamp(24px, 3.4vw, 40px);
          border-radius: 0;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease, transform 250ms ease;
        }
        .pdhero-btn:hover {
          background-color: #111;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Side arrows */
        .pdhero-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          transition: background-color 250ms ease, color 250ms ease;
        }
        .pdhero-nav-prev { left: 16px; }
        .pdhero-nav-next { right: 16px; }
        .pdhero-nav:hover { background-color: #111; color: #fff; }

        @media (max-width: 749px) {
          .pdhero-nav { width: 38px; height: 38px; }
          .pdhero-nav-prev { left: 8px; }
          .pdhero-nav-next { right: 8px; }
        }
      `}</style>
    </section>
  );
}
