'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import 'swiper/css';

function IconChevronLeft({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconChevronRight({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function ProductSkeleton() {
  return (
    <div className="es2bs-card-wrap">
      <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '8px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '13px', width: '45%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '12px', width: '55%', margin: '0 auto', borderRadius: '4px' }} />
    </div>
  );
}

export function ES2BestsellingProducts() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const { data, isLoading } = useProducts(
    { limit: 12 },
    { endpoint: '/api/electronics-store-products' },
  );

  const products = data?.products ?? [];

  return (
    <section className="es2bs-section">
      <div className="container-main">

        {/* ── Header ── */}
        <div className="es2bs-header">
          <h2 className="es2bs-heading">Bestselling Products</h2>
          <Link href="/shop" className="es2bs-view-all">
            View All <IconArrowRight size={13} />
          </Link>
        </div>

        {/* ── Slider wrapper ── */}
        <div className="es2bs-slider-wrap">

          <button
            className="es2bs-nav es2bs-nav--prev"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous products"
          >
            <IconChevronLeft size={20} />
          </button>

          {isLoading ? (
            <div className="es2bs-skeleton-grid">
              {Array.from({ length: 4 }).map((_, i) => <ProductSkeleton key={i} />)}
            </div>
          ) : (
            /* overflow: visible so card shadows aren't clipped by Swiper */
            <div className="es2bs-swiper-outer">
              <Swiper
                modules={[Navigation]}
                onSwiper={setSwiper}
                slidesPerView={2}
                spaceBetween={14}
                breakpoints={{
                  750: { slidesPerView: 3, spaceBetween: 20 },
                  992: { slidesPerView: 4, spaceBetween: 20 },
                }}
                loop={products.length > 4}
                speed={520}
                grabCursor
                style={{ overflow: 'visible' }}
              >
                {products.map((product, i) => (
                  <SwiperSlide key={product.id}>
                    <div className="es2bs-card-wrap">
                      <HomeProductCard
                        product={product}
                        index={i}
                        hrefBase="/products"
                        showCountdown={false}
                        showScrollText={false}
                        imageHeight="370px"
                        themeColor="#2b6be6"
                        countdownBg="#2b6be6"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <button
            className="es2bs-nav es2bs-nav--next"
            onClick={() => swiper?.slideNext()}
            aria-label="Next products"
          >
            <IconChevronRight size={20} />
          </button>

        </div>

      </div>

      <style>{`
        .es2bs-section { width: 100%; }

        /* ── Header ── */
        .es2bs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }
        .es2bs-heading {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }
        .es2bs-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 17px;
          font-weight: 500;
          color: #555;
          text-decoration: underline;
          text-underline-offset: 3px;
          white-space: nowrap;
          transition: color 200ms ease;
        }
        .es2bs-view-all:hover { color: #111; }

        /* ── Slider wrapper ── */
        .es2bs-slider-wrap {
          position: relative;
        }

        /* Clips horizontal slide overflow while letting shadows breathe vertically */
        .es2bs-swiper-outer {
          overflow: hidden;
          padding-block: 10px;
          margin-block: -10px;
        }

        /* ── Card wrapper — identical to .es2ts-card-wrap ── */
        .es2bs-card-wrap {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          padding: 14px;
          box-sizing: border-box;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: box-shadow 250ms ease, transform 250ms ease;
        }
        .es2bs-card-wrap:hover {
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }
        /* Force inner HomeProductCard image bg to white */
        .es2bs-card-wrap,
        .es2bs-card-wrap .fc-card,
        .es2bs-card-wrap .fc-card > a:first-child {
          background-color: #fff !important;
          background: #fff !important;
        }

        /* Circular nav arrows */
        .es2bs-nav {
          position: absolute;
          top: 38%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #ddd;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
          transition: background 200ms ease, border-color 200ms ease;
        }
        .es2bs-nav:hover { background: #f0f0f0; border-color: #bbb; }
        .es2bs-nav--prev { left: 0; }
        .es2bs-nav--next { right: 0; }

        /* Skeleton fallback grid */
        .es2bs-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

/* ── Responsive ── */
        @media (min-width: 750px) {
          .es2bs-skeleton-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .es2bs-skeleton-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }
        @media (max-width: 749px) {
          .es2bs-nav { display: none; }
          .es2bs-header { margin-bottom: 24px; }
          .es2bs-promo-grid { grid-template-columns: 1fr; }
          .es2bs-card-wrap .fc-card > a:first-child {
            height: clamp(120px, 34vw, 220px) !important;
          }
        }
      `}</style>
    </section>
  );
}
