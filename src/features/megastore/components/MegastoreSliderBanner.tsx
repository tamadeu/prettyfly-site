'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { megastoreProducts } from '@/data/megastore-products';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

import 'swiper/css';

/* Countdown to a fixed future date — reads as Days / Hrs / Min / Sec */
const COUNTDOWN_TARGET_MS = new Date('2026-11-01T00:00:00').getTime();

function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, COUNTDOWN_TARGET_MS - Date.now());
      setTime({
        days: Math.floor(diff / 86_400_000),
        hrs: Math.floor((diff / 3_600_000) % 24),
        min: Math.floor((diff / 60_000) % 60),
        sec: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="ms-sb-cd">
      <span className="ms-sb-cd-label">Hurry up! Offer ends in:</span>
      <span className="ms-sb-cd-box">{time.days}</span>
      <span className="ms-sb-cd-box">{pad(time.hrs)}</span>
      <span className="ms-sb-cd-box">{pad(time.min)}</span>
      <span className="ms-sb-cd-box">{pad(time.sec)}</span>
    </div>
  );
}

function IconArrowLeft({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* 8 products feed the slider */
const sliderProducts = megastoreProducts.slice(0, 8);

export function MegastoreSliderBanner() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="ms-sb">
      <div className="container-main">
        <div className="ms-sb-head">
          <h2 className="ms-sb-title">Daily Special Deals</h2>
          <CountdownTimer />
        </div>

        <div className="ms-sb-grid">
          {/* ── LEFT — product card slider (70%) ── */}
          <div className="ms-sb-slider-wrap" style={{ position: 'relative', minWidth: 0 }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView={2}
              breakpoints={{
                750: { slidesPerView: 3, spaceBetween: 16 },
                992: { slidesPerView: 4, spaceBetween: 20 },
              }}
              spaceBetween={10}
              loop
              speed={600}
              style={{ overflow: 'hidden', height: '100%' }}
            >
              {sliderProducts.map((product, i) => (
                <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                  <div
                    className="ms-sb-card"
                    style={{
                      background: '#fff',
                      borderRadius: 10,
                      overflow: 'hidden',
                      padding: 14,
                      height: '100%',
                      boxSizing: 'border-box',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                      transition: 'box-shadow 250ms ease, transform 250ms ease',
                    }}
                  >
                    <HomeProductCard
                      product={product}
                      index={i}
                      hrefBase="/megastore/product"
                      showCountdown={false}
                      showScrollText={false}
                      imageHeight="270px"
                      themeColor="#f26522"
                      countdownBg="#f26522"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous products"
              className="ms-sb-nav ms-sb-nav-prev"
            >
              <IconArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next products"
              className="ms-sb-nav ms-sb-nav-next"
            >
              <IconArrowRight size={18} />
            </button>
          </div>

          {/* ── RIGHT — banner (30%) ── */}
          <Link
            href="/megastore/shop"
            className="ms-sb-banner"
            style={{
              position: 'relative',
              display: 'block',
              borderRadius: 12,
              overflow: 'hidden',
              backgroundColor: '#f5f5f5',
              transition: 'transform 350ms ease, box-shadow 350ms ease',
            }}
          >
            <Image
              src="/megastore/product-slider-with-banner/product-slider-with-banner1.webp"
              alt="Featured collection"
              fill
              sizes="(max-width: 991px) 100vw, 30vw"
              style={{ objectFit: 'cover' }}
              className="ms-sb-banner-img"
            />
          </Link>
        </div>
      </div>

      <style>{`
        /* Force the entire product card surface — outer wrap, inner .fc-card, image link wrapper —
           to be #fff. HomeProductCard sets the image link's background to #f5f5f5 via inline style;
           we override it with !important here. Scoped to .ms-sb-card so other sections that use
           HomeProductCard keep their default look. */
        .ms-sb-card,
        .ms-sb-card .fc-card,
        .ms-sb-card .fc-card a {
          background-color: #fff !important;
          background: #fff !important;
        }

        /* Hover lift on each card */
        .ms-sb-card:hover {
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        /* ── Countdown timer (next to the heading) ── */
        .ms-sb-cd {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .ms-sb-cd-label {
          font-size: 14px;
          color: #444;
          font-weight: 500;
          margin-right: 4px;
        }
        .ms-sb-cd-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          height: 36px;
          padding: 0 8px;
          background-color: #f26522;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          border-radius: 4px;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .ms-sb-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ms-sb-title {
          font-size: clamp(22px, 1.9vw, 30px);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.4px;
        }
        .ms-sb-viewall {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 200ms ease;
        }
        .ms-sb-viewall:hover { color: #f26522; }

        /* ── Mobile-first: stack ── */
        .ms-sb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
        }

        /* ── Banner ── */
        .ms-sb-banner {
          position: relative;
          height: 320px;
          border-radius: 12px;
          overflow: hidden;
        }
        .ms-sb-banner-img {
          transition: transform 700ms ease !important;
        }
        .ms-sb-banner:hover .ms-sb-banner-img {
          transform: scale(1.04);
        }

        /* ── Slider nav arrows (match grocery's hover-to-fade-in pattern) ── */
        .ms-sb-nav {
          position: absolute;
          top: 50%;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #fff;
          color: #222;
          border: 1.5px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          transform: translateY(-50%) translateX(0);
          transition:
            opacity 350ms ease,
            transform 300ms ease,
            background-color 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }
        .ms-sb-nav-prev { left: 10px; transform: translateY(-50%) translateX(-6px); }
        .ms-sb-nav-next { right: 10px; transform: translateY(-50%) translateX(6px); }

        .ms-sb-slider-wrap:hover .ms-sb-nav {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        .ms-sb-nav:hover {
          background-color: #f26522;
          border-color: #f26522;
          color: #fff;
        }
        .ms-sb-nav:focus-visible {
          outline: 2px solid #f26522;
          outline-offset: 2px;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        /* ── ≤ 749px — centered heading ── */
        @media (max-width: 749px) {
          .ms-sb-head  { flex-direction: column; align-items: center; text-align: center; gap: 10px; }
          .ms-sb-title { text-align: center; }
          .ms-sb-cd    { justify-content: center; }
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .ms-sb-banner { height: 380px; }
        }

        /* ── ≥ 992px — desktop: 70/30 split, both columns 440px tall.
              Use fr units (not %) so the gap is subtracted from available space
              instead of pushing the grid past the container's right edge. */
        @media (min-width: 992px) {
          .ms-sb-grid {
            grid-template-columns: 7fr 3fr;
            gap: 24px;
            height: 440px;
          }
          .ms-sb-slider-wrap { height: 440px; }
          .ms-sb-banner { height: 440px; }
        }
      `}</style>
    </section>
  );
}
