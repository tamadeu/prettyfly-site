'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

import 'swiper/css';

/* ── Nav Icons ── */
function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}
function IconArrowRight({ size = 16 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

const pad = (n: number) => String(n).padStart(2, '0');

/* Offer countdown — heading-row timer ("Hurry up! Offer ends in"). */
function DealsCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2027-01-01T00:00:00').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bpd-countdown">
      <span className="bpd-cd-label">Hurry up! Offer ends in:</span>
      {[
        String(time.days),
        pad(time.hours),
        pad(time.minutes),
        pad(time.seconds),
      ].map((val, i) => (
        <span key={i} className="bpd-cd-cell">{val}</span>
      ))}
    </div>
  );
}

/* ── Component ── */

export function BackpackDeals() {
  const { data } = useProducts({ limit: 12 }, { endpoint: '/api/backpack-products' });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const products = data?.products ?? [];

  return (
    <section className="bpd-section">
      <div className="container-main">
        {/* Heading row: title left · countdown right */}
        <div className="bpd-head">
          <h2 className="bpd-title">Deals Products</h2>
          <DealsCountdown />
        </div>

        {/* Slider */}
        <div style={{ position: 'relative' }}>
          {products.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView={2}
              breakpoints={{
                750: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
              spaceBetween={24}
              loop
              speed={600}
              style={{ overflow: 'hidden' }}
            >
              {products.map((product, i) => (
                <SwiperSlide key={product.id}>
                  <HomeProductCard product={product} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '4px', marginBottom: '14px' }} />
                  <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
                  <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto', borderRadius: '4px' }} />
                </div>
              ))}
            </div>
          )}

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="bpd-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="bpd-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>

        {/* View All */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/shop" className="bpd-viewall">
            View All
            <IconArrowRight size={17} />
          </Link>
        </div>
      </div>

      <style>{`
        .bpd-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 40px;
        }
        .bpd-title {
          font-size: 34px;
          font-weight: 700;
          color: #1a1a1a;
        }
        .bpd-countdown {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bpd-cd-label {
          font-size: 15px;
          color: #555;
          margin-right: 4px;
        }
        .bpd-cd-cell {
          min-width: 40px;
          height: 38px;
          padding: 0 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          border-radius: 4px;
          font-variant-numeric: tabular-nums;
        }

        .bpd-nav-prev,
        .bpd-nav-next {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          opacity: 0;
          transition: opacity 400ms ease, background-color 250ms ease, color 250ms ease;
        }
        .bpd-nav-prev { left: 8px; }
        .bpd-nav-next { right: 8px; }
        .bpd-section:hover .bpd-nav-prev { opacity: 1; }
        .bpd-section:hover .bpd-nav-next { opacity: 1; }
        .bpd-nav-prev:hover,
        .bpd-nav-next:hover { background-color: #000; color: #fff; }

        .bpd-viewall {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 37px;
          font-size: 16px;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .bpd-viewall:hover { background-color: #222; color: #fff; }

        @media (max-width: 749px) {
          .bpd-head { justify-content: center; text-align: center; }
          .bpd-title { font-size: clamp(24px, 7vw, 32px); }
          .bpd-nav-prev, .bpd-nav-next { display: none !important; }
        }
      `}</style>
    </section>
  );
}
