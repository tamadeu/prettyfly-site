'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { megastoreProducts } from '@/data/megastore-products';

import 'swiper/css';
import 'swiper/css/navigation';

function IconArrowLeftS({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const TARGET = new Date('2027-09-15T00:00:00Z').getTime();

function useCountdown() {
  const [time, setTime] = useState(() => calc());
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff / 3600000) % 24);
  const mins = Math.floor((diff / 60000) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hrs, mins, secs };
}

export function MegastoreDailyDeals() {
  const { days, hrs, mins, secs } = useCountdown();
  const products = megastoreProducts.slice(0, 8);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="ms-deals">
      <div className="container-main">
        <div className="ms-deals-head">
          <h2 className="ms-deals-title">Daily Special Deals</h2>
          <div className="ms-deals-timer">
            <span className="ms-deals-timer-label">Hurry up! Offer ends in:</span>
            <div className="ms-deals-cells">
              {[
                { v: days, l: 'Days' },
                { v: hrs,  l: 'Hrs' },
                { v: mins, l: 'Min' },
                { v: secs, l: 'Sec' },
              ].map((c) => (
                <span key={c.l} className="ms-deals-cell">
                  <span className="ms-deals-cell-value">{String(c.v).padStart(2, '0')}</span>
                  <span className="ms-deals-cell-label">{c.l}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="ms-deals-row">
          {/* Slider */}
          <div className="ms-deals-slider-wrap">
            <button
              className="ms-deals-arrow ms-deals-arrow-prev"
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <IconArrowLeftS />
            </button>
            <button
              className="ms-deals-arrow ms-deals-arrow-next"
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <IconArrowRightS />
            </button>

            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => { swiperRef.current = s; }}
              spaceBetween={16}
              slidesPerView={1.4}
              breakpoints={{
                550: { slidesPerView: 2.3 },
                750: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
              speed={500}
              loop={false}
            >
              {products.map((p, i) => (
                <SwiperSlide key={p.id}>
                  <HomeProductCard
                    product={p}
                    index={i}
                    hrefBase="/megastore/product"
                    showCountdown={false}
                    showScrollText={false}
                    imageHeight="220px"
                    themeColor="#f26522"
                    countdownBg="#f26522"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Side promo card */}
          <Link href="/megastore/shop" className="ms-deals-promo">
            <Image
              src="/megastore/hero-slider-and-banner/hero-slider-and-banner2.avif"
              alt="Mega Electronics Sale"
              fill
              sizes="(max-width: 991px) 100vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="ms-deals-promo-overlay">
              <span className="ms-deals-promo-eyebrow">Deals Up to 40% Off!</span>
              <h3 className="ms-deals-promo-title">
                Mega <span className="ms-deals-promo-accent">Electronics</span> Sale
              </h3>
              <span className="ms-deals-promo-cta">
                <span>Shop Now</span>
                <IconArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .ms-deals-head {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(12px, 1.4vw, 18px);
          margin-bottom: clamp(20px, 2.4vw, 32px);
        }
        @media (min-width: 750px) {
          .ms-deals-head {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }
        }

        .ms-deals-title {
          font-size: clamp(20px, 1.7vw, 26px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }

        .ms-deals-timer {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.2vw, 16px);
          flex-wrap: wrap;
        }
        .ms-deals-timer-label {
          font-size: clamp(12px, 0.95vw, 14px);
          color: #444;
        }
        .ms-deals-cells {
          display: flex;
          gap: clamp(4px, 0.6vw, 8px);
        }
        .ms-deals-cell {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          min-width: clamp(36px, 3.4vw, 44px);
          padding: clamp(4px, 0.6vw, 8px) clamp(6px, 0.8vw, 10px);
          background-color: #f26522;
          color: #fff;
          border-radius: 4px;
          font-weight: 700;
        }
        .ms-deals-cell-value {
          font-size: clamp(13px, 1.05vw, 16px);
          line-height: 1;
        }
        .ms-deals-cell-label {
          font-size: clamp(9px, 0.7vw, 11px);
          font-weight: 600;
          letter-spacing: 0.4px;
          opacity: 0.95;
        }

        .ms-deals-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(14px, 1.6vw, 22px);
        }
        @media (min-width: 992px) {
          .ms-deals-row { grid-template-columns: 4fr 1fr; }
        }

        .ms-deals-slider-wrap {
          position: relative;
        }
        .ms-deals-arrow {
          position: absolute;
          top: 28%;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e5e5e5;
          color: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          transition: background 200ms ease, color 200ms ease, transform 200ms ease;
        }
        .ms-deals-arrow:hover { background: #f26522; color: #fff; border-color: #f26522; transform: translateY(-2px); }
        .ms-deals-arrow-prev { left: -10px; }
        .ms-deals-arrow-next { right: -10px; }

        .ms-deals-promo {
          position: relative;
          display: block;
          border-radius: 4px;
          overflow: hidden;
          min-height: clamp(220px, 22vw, 360px);
          color: #fff;
          background-color: #1a1f3a;
          text-decoration: none;
          transition: transform 280ms ease, box-shadow 280ms ease;
        }
        .ms-deals-promo:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.16);
        }
        .ms-deals-promo :global(img) { opacity: 0.55; }
        .ms-deals-promo-overlay {
          position: absolute;
          inset: 0;
          padding: clamp(20px, 2vw, 28px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, rgba(45,18,95,0.7) 0%, rgba(20,10,55,0.85) 100%);
        }
        .ms-deals-promo-eyebrow {
          font-size: clamp(11px, 0.85vw, 13px);
          font-weight: 600;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.78);
          margin-bottom: 6px;
        }
        .ms-deals-promo-title {
          font-size: clamp(20px, 1.7vw, 26px);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 clamp(14px, 1.6vw, 20px);
        }
        .ms-deals-promo-accent {
          color: #f26522;
          font-style: italic;
        }
        .ms-deals-promo-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: clamp(8px, 1vw, 11px) clamp(14px, 1.6vw, 20px);
          background-color: #fff;
          color: #1a1f3a;
          font-size: clamp(12px, 0.95vw, 14px);
          font-weight: 600;
          border-radius: 4px;
          width: fit-content;
          transition: color 200ms ease, transform 200ms ease;
        }
        .ms-deals-promo:hover .ms-deals-promo-cta {
          color: #f26522;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
