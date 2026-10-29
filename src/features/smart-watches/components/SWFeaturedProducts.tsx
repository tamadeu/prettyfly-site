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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function ProductSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '8px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '13px', width: '45%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '12px', width: '55%', margin: '0 auto', borderRadius: '4px' }} />
    </div>
  );
}

export function SWFeaturedProducts() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const { data, isLoading } = useProducts(
    { limit: 12 },
    { endpoint: '/api/smart-watches-products' },
  );

  const products = data?.products ?? [];

  return (
    <section className="swfp-section">
      <div className="container-main">

        {/* ── Header ── */}
        <div className="swfp-header">
          <h2 className="swfp-heading">Featured Products</h2>
          <Link href="/smart-watches/shop" className="swfp-view-all">
            View All <IconArrowRight size={13} />
          </Link>
        </div>

        {/* ── Slider wrapper — arrows sit at left/right edges ── */}
        <div className="swfp-slider-wrap">

          <button
            className="swfp-nav swfp-nav--prev"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous products"
          >
            <IconChevronLeft size={20} />
          </button>

          {isLoading ? (
            <div className="swfp-skeleton-grid">
              {Array.from({ length: 4 }).map((_, i) => <ProductSkeleton key={i} />)}
            </div>
          ) : (
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiper}
              slidesPerView={2}
              spaceBetween={14}
              breakpoints={{
                750: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 24 },
              }}
              loop={products.length > 4}
              speed={520}
              grabCursor
              style={{ overflow: 'hidden' }}
            >
              {products.map((product, i) => (
                <SwiperSlide key={product.id}>
                  <HomeProductCard
                    product={product}
                    index={i}
                    hrefBase="/smart-watches/product"
                    showCountdown={false}
                    showScrollText={false}
                    imageHeight="350px"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            className="swfp-nav swfp-nav--next"
            onClick={() => swiper?.slideNext()}
            aria-label="Next products"
          >
            <IconChevronRight size={20} />
          </button>

        </div>
      </div>

      <style>{`
        .swfp-section { width: 100%; }

        /* ── Header ── */
        .swfp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }
        .swfp-heading {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }
        .swfp-view-all {
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
        .swfp-view-all:hover { color: #111; }

        /* ── Slider wrapper ── */
        .swfp-slider-wrap {
          position: relative;
        }

        /* Circular nav arrows — sit at card left/right edges, centered on image */
        .swfp-nav {
          position: absolute;
          /* ~40% from top centres on the 3:4-ratio image area within the full card */
          top: 40%;
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
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          transition: background 200ms ease, border-color 200ms ease, color 200ms ease;
        }
        .swfp-nav:hover { background: #f0f0f0; border-color: #bbb; }
        .swfp-nav--prev { left: 0; }
        .swfp-nav--next { right: 0; }

        /* Skeleton fallback grid */
        .swfp-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        /* ── Responsive ── */
        @media (min-width: 750px) {
          .swfp-skeleton-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .swfp-skeleton-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }
        @media (max-width: 749px) {
          .swfp-nav { display: none; }
          .swfp-header { margin-bottom: 24px; }
        }
      `}</style>
    </section>
  );
}
