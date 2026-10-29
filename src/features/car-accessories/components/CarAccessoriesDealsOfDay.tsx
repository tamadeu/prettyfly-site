'use client';

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { carAccessoriesProducts } from '@/data/car-accessories-products';

const DEALS_END = new Date('2027-06-01T00:00:00');

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(() => Math.max(0, target.getTime() - Date.now()));
  useEffect(() => {
    const id = setInterval(() => setDiff(Math.max(0, target.getTime() - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);
  const s = Math.floor(diff / 1000);
  return {
    days:    Math.floor(s / 86400),
    hours:   Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function pad(n: number) { return String(n).padStart(2, '0'); }

export function CarAccessoriesDealsOfDay() {
  const { days, hours, minutes, seconds } = useCountdown(DEALS_END);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="ca-dod-section">
      <div className="container-main">

        {/* Header: heading left | timer right */}
        <div className="ca-dod-header">
          <h2 className="ca-dod-heading">Deals of the day</h2>

          <div className="ca-dod-timer-row">
            <span className="ca-dod-timer-label">Hurry up! Offer ends in:</span>
            <div className="ca-dod-boxes">
              <div className="ca-dod-box">{pad(days)}</div>
              <div className="ca-dod-box">{pad(hours)}</div>
              <div className="ca-dod-box">{pad(minutes)}</div>
              <div className="ca-dod-box">{pad(seconds)}</div>
            </div>
          </div>
        </div>

        {/* Slider wrapper — nav buttons are absolutely positioned at the sides */}
        <div className="ca-dod-slider-wrap">

          <button
            className="ca-dod-arr ca-dod-arr--prev"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={(s) => { swiperRef.current = s; }}
            slidesPerView={4}
            spaceBetween={24}
            loop
            breakpoints={{
              0:   { slidesPerView: 1, spaceBetween: 16 },
              750: { slidesPerView: 2, spaceBetween: 16 },
              992: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {carAccessoriesProducts.map((product, i) => (
              <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                <HomeProductCard
                  product={product}
                  hrefBase="/car-accessories/product"
                  imageHeight="345px"
                  index={i}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="ca-dod-arr ca-dod-arr--next"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </button>

        </div>
      </div>

      <style>{`
        .ca-dod-section { background-color: #fff; }

        /* ── Header ── */
        .ca-dod-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }
        .ca-dod-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 25px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.2px;
          margin: 0;
        }

        /* ── Timer ── */
        .ca-dod-timer-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ca-dod-timer-label {
          font-size: 13px;
          color: #555;
          white-space: nowrap;
        }
        .ca-dod-boxes { display: flex; gap: 5px; }
        .ca-dod-box {
          background-color: #5b72d6;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          border-radius: 5px;
          min-width: 36px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.5px;
          font-family: inherit;
        }

        /* ── Slider wrapper — provides positioning context for side arrows ── */
        .ca-dod-slider-wrap {
          position: relative;
        }

        /* ── Side navigation arrows ── */
        .ca-dod-arr {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #555;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.10);
          transition: border-color 200ms ease, color 200ms ease, box-shadow 200ms ease;
        }
        .ca-dod-arr--prev { left: -22px; }
        .ca-dod-arr--next { right: -22px; }
        .ca-dod-arr:hover {
          border-color: #5b72d6;
          color: #5b72d6;
          box-shadow: 0 4px 14px rgba(91, 114, 214, 0.22);
        }

        /* Disable default Swiper nav (we use custom buttons) */
        .ca-dod-section .swiper-button-prev,
        .ca-dod-section .swiper-button-next { display: none; }

        .ca-dod-section .swiper-slide { height: auto; }

        /* ── Mobile: hide side arrows, they don't fit ── */
        @media (max-width: 749px) {
          .ca-dod-arr { display: none; }
          .ca-dod-header { flex-direction: column; align-items: flex-start; }
        }

        /* ── Tablet ── */
        @media (min-width: 750px) and (max-width: 991px) {
          .ca-dod-arr--prev { left: -18px; }
          .ca-dod-arr--next { right: -18px; }
        }
      `}</style>
    </section>
  );
}
