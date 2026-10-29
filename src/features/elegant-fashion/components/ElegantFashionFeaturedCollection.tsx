'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

import 'swiper/css';

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

function ProductCardSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3/4', borderRadius: '8px', marginBottom: '12px' }} />
      <div className="animate-shimmer" style={{ height: '15px', width: '70%', marginBottom: '8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '13px', width: '40%', borderRadius: '4px' }} />
    </div>
  );
}


export function ElegantFashionFeaturedCollection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const { data, isLoading } = useProducts({ limit: 10 }, { endpoint: '/api/elegant-fashion-products' });
  const products = data?.products ?? [];

  return (
    <section className="effc-section">
      <div className="container-main">
        {/* Header */}
        <div className="effc-heading-row">
          <h2 className="effc-heading">Featured Collection</h2>
          <Link href="/shop" className="effc-view-all">
            Shop All Products <IconArrowRight size={14} />
          </Link>
        </div>

        {/* Product Swiper */}
        <div className="effc-slider-wrap">
          <Swiper
            onSwiper={setSwiperInstance}
            slidesPerView={1.5}
            breakpoints={{
              480: { slidesPerView: 2 },
              750: { slidesPerView: 2.5 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            spaceBetween={16}
            speed={600}
            style={{ overflow: 'hidden', paddingBottom: '8px' }}
          >
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <SwiperSlide key={i}><ProductCardSkeleton /></SwiperSlide>
                ))
              : products.map((product, i) => (
                  <SwiperSlide key={product.id}>
                    <HomeProductCard product={product} index={i} />
                  </SwiperSlide>
                ))}
          </Swiper>

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="effc-arrow effc-arrow-prev">
            <IconArrowLeft size={18} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="effc-arrow effc-arrow-next">
            <IconArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .effc-section { background: #fff; }

        .effc-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .effc-heading {
          font-size: clamp(20px, 4vw, 28px);
          font-weight: 700;
          color: #111;
        }
        .effc-view-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #1a2b5e;
          text-decoration: none;
          transition: gap 200ms ease;
        }
        .effc-view-all:hover { gap: 10px; }

        .effc-slider-wrap {
          position: relative;
        }

        .effc-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #e0e0e0;
          color: #1a2b5e;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          opacity: 0;
          transition: background 220ms ease, color 220ms ease, border-color 220ms ease, opacity 220ms ease;
        }
        .effc-section:hover .effc-arrow { opacity: 1; }
        .effc-arrow:hover { background: #1a2b5e; color: #fff; border-color: #1a2b5e; }
        .effc-arrow-prev { left: 8px; }
        .effc-arrow-next { right: 8px; }

        @media (min-width: 750px) {
          .effc-heading-row { margin-bottom: 32px; }
        }
        @media (min-width: 992px) {
          .effc-heading-row { margin-bottom: 36px; }
        }
      `}</style>
    </section>
  );
}
