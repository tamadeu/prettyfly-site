'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

import 'swiper/css';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

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

const pad = (n: number) => String(n).padStart(2, '0');

function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date('2027-12-31T00:00:00').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff % 86_400_000) / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [String(time.d), pad(time.h), pad(time.m), pad(time.s)];

  return (
    <div className="fwfc-cd-wrap">
      <span className="fwfc-cd-label">
        <span className="fwfc-cd-hurry">Hurry up!</span> Offer ends in:
      </span>
      <div className="fwfc-cd-cells">
        {cells.map((val, i) => (
          <span key={i} className="fwfc-cd-cell">{val}</span>
        ))}
      </div>
    </div>
  );
}

export function FootwearFeaturedCollection() {
  const { data, isLoading } = useProducts({ limit: 12 }, { endpoint: '/api/footwear-products' });
  const products = data?.products ?? [];
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section>
      <div className="container-main">
        <div className="fwfc-head">
          <h2 className="fwfc-title">Featured Collection</h2>
          <Countdown />
        </div>

        <div className="fwfc-slider-wrap">
          {isLoading ? (
            <div className="fwfc-skeleton-grid">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <div className="animate-shimmer" style={{ aspectRatio: '3 / 4', borderRadius: '4px', marginBottom: '14px' }} />
                  <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
                  <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto', borderRadius: '4px' }} />
                </div>
              ))}
            </div>
          ) : (
            <>
              <Swiper
                modules={[Navigation]}
                onSwiper={setSwiperInstance}
                slidesPerView={1.3}
                spaceBetween={14}
                breakpoints={{
                  480: { slidesPerView: 2, spaceBetween: 16 },
                  750: { slidesPerView: 3, spaceBetween: 20 },
                  992: { slidesPerView: 4, spaceBetween: 24 },
                }}
                speed={600}
                style={{ overflow: 'hidden' }}
              >
                {products.map((product, i) => (
                  <SwiperSlide key={product.id}>
                    <HomeProductCard
                      product={product}
                      index={i}
                      hrefBase="/products"
                      showCountdown={false}
                      showScrollText={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="fwfc-nav fwfc-nav-prev">
                <IconArrowLeftS size={18} />
              </button>
              <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="fwfc-nav fwfc-nav-next">
                <IconArrowRightS size={18} />
              </button>
            </>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/shop" className="fwfc-viewall">
            View All
            <IconArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .fwfc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .fwfc-title { font-size: 30px; font-weight: 700; color: #222; }

        .fwfc-cd-wrap { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
        .fwfc-cd-label { font-size: 15px; color: #777; }
        .fwfc-cd-hurry { color: #1aa39a; font-weight: 600; }
        .fwfc-cd-cells { display: flex; gap: 8px; }
        .fwfc-cd-cell {
          min-width: 42px;
          padding: 8px 6px;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
          border-radius: 3px;
          font-variant-numeric: tabular-nums;
        }

        .fwfc-slider-wrap { position: relative; }

        .fwfc-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        /* Show the full shoe inside the card box (overrides shared object-fit). */
        .fwfc-slider-wrap .fc-card > a:first-child img {
          object-fit: contain !important;
        }

        /* Slider nav arrows */
        .fwfc-nav {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #e5e5e5;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          opacity: 0;
          transition: opacity 300ms ease, background-color 250ms ease, color 250ms ease, border-color 250ms ease;
        }
        .fwfc-nav-prev { left: -8px; }
        .fwfc-nav-next { right: -8px; }
        .fwfc-slider-wrap:hover .fwfc-nav { opacity: 1; }
        .fwfc-nav:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
        }

        .fwfc-viewall {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 30px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .fwfc-viewall:hover { background-color: #222; color: #fff; }

        @media (min-width: 750px) {
          .fwfc-skeleton-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .fwfc-skeleton-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }
        @media (max-width: 749px) {
          .fwfc-head { flex-direction: column; align-items: flex-start; gap: 14px; }
          .fwfc-cd-cell { min-width: 36px; font-size: 13px; padding: 7px 5px; }
          .fwfc-nav { display: none; }
        }
      `}</style>
    </section>
  );
}
