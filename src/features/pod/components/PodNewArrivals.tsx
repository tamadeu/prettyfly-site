'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

import 'swiper/css';

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

function ProductCardSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3 / 4', borderRadius: '4px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto 8px', borderRadius: '4px' }} />
    </div>
  );
}

export function PodNewArrivals() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  /* page: 2 pulls the catalog's second set of 8 (the "extra" products) so
     New Arrivals shows a distinct set from Featured Products above, not a
     duplicate. limit: 8 also keeps the slide count above the max
     slidesPerView (4 at ≥992px) so Swiper's loop mode works correctly —
     matching the fix used on every other padded slider in this project. */
  const { data, isLoading } = useProducts({ limit: 8, page: 2 }, { endpoint: '/api/pod-products' });

  const products = data?.products.slice(0, 8) || [];

  return (
    <section className="pdna-section">
      <div className="container-main">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 600, color: '#222' }}>New Arrivals</h2>
          <Link
            href="/shop?sort=newest"
            style={{ fontSize: '14px', fontWeight: 500, color: '#222', textDecoration: 'underline', textUnderlineOffset: '3px', whiteSpace: 'nowrap' }}
          >
            View All →
          </Link>
        </div>

        <div style={{ position: 'relative' }}>
          {isLoading ? (
            <div className="pdna-grid">
              {Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)}
            </div>
          ) : (
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView={2}
              breakpoints={{
                750: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
              spaceBetween={20}
              loop
              speed={600}
              style={{ overflow: 'hidden' }}
            >
              {products.map((product, i) => (
                <SwiperSlide key={product.id}>
                  <HomeProductCard product={product} index={i} imageHeight="350px" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="pdna-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="pdna-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .pdna-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .pdna-grid > * { min-width: 0; }
        @media (min-width: 750px) {
          .pdna-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }

        /* 350x350 product-image boxes: capped/centered square, image
           contained (never stretched or cropped) inside it. The shared
           HomeProductCard's own ≤749px media query overrides the height
           back to a fluid clamp, so this only governs tablet/desktop. */
        .pdna-section .fc-card > a:first-child {
          max-width: 350px;
          width: 100%;
          margin: 0 auto 14px;
        }
        .pdna-section .fc-card > a:first-child img {
          object-fit: contain !important;
          background-color: #f5f5f5;
        }

        .pdna-nav-prev, .pdna-nav-next {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #222;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 400ms ease, transform 400ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .pdna-nav-prev { left: -8px; }
        .pdna-nav-next { right: -8px; }
        .pdna-section:hover .pdna-nav-prev,
        .pdna-section:hover .pdna-nav-next { opacity: 1; }
        .pdna-nav-prev:hover, .pdna-nav-next:hover { background-color: #000; border-color: #000; color: #fff; }

        @media (max-width: 749px) {
          .pdna-nav-prev, .pdna-nav-next { display: none; }
        }
      `}</style>
    </section>
  );
}
