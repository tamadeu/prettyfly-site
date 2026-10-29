'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProducts } from '@/features/products/hooks/useProducts';
import { BookProductCard } from './BookProductCard';

import 'swiper/css';

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

export function BookBestsellers() {
  const { data } = useProducts({ limit: 30 }, { endpoint: '/api/book-products' });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const products = data?.products ?? [];

  return (
    <section className="bkbs-section">
      <div className="container-main">
        <div className="bkbs-head">
          <h2 className="bkbs-title">Bestsellers Products</h2>
          <Link href="/shop" className="bkbs-view-all">
            View All Categories
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
          </Link>
        </div>

        <div style={{ position: 'relative' }}>
          {products.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView={2}
              breakpoints={{ 750: { slidesPerView: 3 }, 992: { slidesPerView: 4 } }}
              spaceBetween={24}
              loop
              speed={600}
              style={{ overflow: 'hidden' }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                  <BookProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{ border: '1px solid #ececec', borderRadius: '8px', padding: '16px' }}>
                  <div className="animate-shimmer" style={{ height: '300px', borderRadius: '6px', marginBottom: '14px' }} />
                  <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
                  <div className="animate-shimmer" style={{ height: '44px', borderRadius: '40px', marginTop: '14px' }} />
                </div>
              ))}
            </div>
          )}

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="bkbs-nav-prev"><IconArrowLeftS size={20} /></button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="bkbs-nav-next"><IconArrowRightS size={20} /></button>
        </div>
      </div>

      <style>{`
        .bkbs-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; }
        .bkbs-title { font-size: clamp(22px, 2.6vw, 28px); font-weight: 600; color: #2a2a2a; }
        .bkbs-view-all {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 14px; font-weight: 500; color: #2a2a2a;
          text-decoration: underline; text-underline-offset: 4px;
          transition: color 200ms ease;
        }
        .bkbs-view-all:hover { color: #e0294a; }

        .bkbs-nav-prev, .bkbs-nav-next {
          position: absolute; top: 40%; transform: translateY(-50%); z-index: 10;
          width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid #e0e0e0;
          background: #fff; color: #2a2a2a; cursor: pointer;
          display: flex; align-items: center; justify-content: center; opacity: 0;
          transition: opacity 400ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .bkbs-nav-prev { left: -6px; }
        .bkbs-nav-next { right: -6px; }
        .bkbs-section:hover .bkbs-nav-prev { opacity: 1; }
        .bkbs-section:hover .bkbs-nav-next { opacity: 1; }
        .bkbs-nav-prev:hover, .bkbs-nav-next:hover { background: #e0294a; border-color: #e0294a; color: #fff; }
        @media (max-width: 749px) { .bkbs-nav-prev, .bkbs-nav-next { display: none !important; } }
      `}</style>
    </section>
  );
}
