'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { PlumbingProductCard } from './PlumbingProductCard';

import 'swiper/css';

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function PlumbingBestSelling() {
  const { data } = useProducts({ limit: 30 }, { endpoint: '/api/plumbing-supplies-products' });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const products = (data?.products ?? []).filter((p) => p.category === 'Plumbing Supplies');

  return (
    <section className="plbs-section">
      <div className="container-main">
        <div className="plbs-head">
          <h2 className="plbs-title">Best Selling Products</h2>
          <Link href="/shop" className="plbs-view-all">
            View All
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>

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
                <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                  <PlumbingProductCard product={product} index={i} href="/products/casual-chambray-shirt" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{ border: '1px solid #ececec', borderRadius: '8px', padding: '16px' }}>
                  <div className="animate-shimmer" style={{ height: '235px', borderRadius: '6px', marginBottom: '14px' }} />
                  <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
                  <div className="animate-shimmer" style={{ height: '44px', borderRadius: '40px', marginTop: '14px' }} />
                </div>
              ))}
            </div>
          )}

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="plbs-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="plbs-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .plbs-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .plbs-title {
          font-size: clamp(22px, 2.6vw, 28px);
          font-weight: 600;
          color: #1c2230;
        }
        .plbs-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          font-weight: 500;
          color: #1c2230;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 200ms ease;
        }
        .plbs-view-all:hover { color: #0a2540; }

        .plbs-nav-prev,
        .plbs-nav-next {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #1c2230;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 400ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .plbs-nav-prev { left: -6px; }
        .plbs-nav-next { right: -6px; }
        .plbs-section:hover .plbs-nav-prev { opacity: 1; }
        .plbs-section:hover .plbs-nav-next { opacity: 1; }
        .plbs-nav-prev:hover,
        .plbs-nav-next:hover { background-color: #0a2540; border-color: #0a2540; color: #fff; }

        @media (max-width: 749px) {
          .plbs-nav-prev, .plbs-nav-next { display: none !important; }
        }
      `}</style>
    </section>
  );
}
