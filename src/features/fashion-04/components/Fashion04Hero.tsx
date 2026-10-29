'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

/* ── Icons ── */
function IconArrowLeftS({ size = 22 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 22 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* ── Slides — imagery only from /fashion-04/ ── */
const slides = [
  { id: 1, title: 'The Power of Personal Style!', href: '/shop', image: '/fashion-04/hero-slider/hero-slider-1.webp' },
  { id: 2, title: 'Discover Your Perfect Pair!', href: '/shop', image: '/fashion-04/hero-slider/hero-slider-2.webp' },
  { id: 3, title: 'Elevate Your Fashion Style!', href: '/shop', image: '/fashion-04/hero-slider/hero-slider-3.webp' },
  { id: 4, title: 'Redefine Your Wardrobe!', href: '/shop', image: '/fashion-04/hero-slider/hero-slider-4.webp' },
  { id: 5, title: 'Timeless Everyday Looks!', href: '/shop', image: '/fashion-04/hero-slider/hero-slider-5.webp' },
  { id: 6, title: 'Make Every Day Stylish!', href: '/shop', image: '/fashion-04/hero-slider/hero-slider-6.webp' },
];

export function Fashion04Hero() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="f4hero-section">
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
            <div className="f4hero-slide">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 749px) 100vw, (max-width: 991px) 50vw, 33vw"
                priority={i < 3}
                className="f4hero-img"
              />

              <div className="f4hero-overlay" />

              <div className="f4hero-content">
                <h2 className="f4hero-title">{slide.title}</h2>
                <Link href={slide.href} className="f4hero-btn">Shop Now</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Side arrows */}
      <button onClick={() => swiper?.slidePrev()} aria-label="Previous slide" className="f4hero-nav f4hero-nav-prev">
        <IconArrowLeftS size={22} />
      </button>
      <button onClick={() => swiper?.slideNext()} aria-label="Next slide" className="f4hero-nav f4hero-nav-next">
        <IconArrowRightS size={22} />
      </button>

      <style>{`
        .f4hero-section {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .f4hero-slide {
          position: relative;
          width: 100%;
          height: 710px;
          background-color: #efeae4;
          overflow: hidden;
        }
        .f4hero-img { transition: transform 700ms ease; }
        .f4hero-slide:hover .f4hero-img { transform: scale(1.04); }

        /* Bottom scrim so white text stays legible on light imagery */
        .f4hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.45) 100%);
          z-index: 1;
        }

        .f4hero-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: clamp(28px, 5vw, 56px);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          padding: 0 20px;
          text-align: center;
        }
        .f4hero-title {
          color: #fff;
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 700;
          line-height: 1.25;
          text-shadow: 0 1px 8px rgba(0,0,0,0.35);
          max-width: 90%;
        }
        .f4hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          color: #111;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 34px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease, transform 250ms ease;
        }
        .f4hero-btn:hover {
          background-color: #111;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Side arrows */
        .f4hero-nav {
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
        .f4hero-nav-prev { left: 16px; }
        .f4hero-nav-next { right: 16px; }
        .f4hero-nav:hover { background-color: #111; color: #fff; }

        @media (max-width: 749px) {
          .f4hero-nav { width: 38px; height: 38px; }
          .f4hero-nav-prev { left: 8px; }
          .f4hero-nav-next { right: 8px; }
        }
      `}</style>
    </section>
  );
}
