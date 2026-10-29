'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

const ACCENT = '#1a2b5e';

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

const categories = [
  { id: 'blazer',  label: 'Blazer',  items: 12, image: '/elegant-fashion/product-collection/product-collection1.png',      href: '/shop?category=Blazer' },
  { id: 'cap',     label: 'Cap',     items: 8,  image: '/elegant-fashion/product-collection/product-collection2.png',      href: '/shop?category=Cap' },
  { id: 'jacket',  label: 'Jacket',  items: 15, image: '/elegant-fashion/product-collection/product-collection3.png',      href: '/shop?category=Jacket' },
  { id: 'pants',   label: 'Pants',   items: 10, image: '/elegant-fashion/product-collection/product-collection4.png',      href: '/shop?category=Pants' },
  { id: 'tshirt',  label: 'T-Shirt', items: 20, image: '/elegant-fashion/product-collection/product-collection5.webp', href: '/shop?category=T-Shirt' },
  { id: 'women',   label: 'Women',   items: 18, image: '/elegant-fashion/product-collection/product-collection7.png',      href: '/shop?category=Women' },
  { id: 'men',     label: 'Men',     items: 14, image: '/elegant-fashion/product-collection/product-collection8.png',  href: '/shop?category=Men' },
  { id: 'bags',    label: 'Bags',    items: 9,  image: '/elegant-fashion/product-collection/product-collection10.png',      href: '/shop?category=Bags' },
  { id: 'sports',  label: 'Sports',  items: 7,  image: '/elegant-fashion/product-collection/product-collection11.webp',    href: '/shop?category=Sports' },
];

export function ElegantFashionCategoriesSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeId, setActiveId] = useState<string>('bags');

  return (
    <section className="efcat-section">
      <div className="container-main">
        <div className="efcat-heading-row">
          <h2 className="efcat-heading">Shop by Categories</h2>
          <div className="efcat-arrows">
            <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="efcat-nav-btn">
              <IconArrowLeft size={18} />
            </button>
            <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="efcat-nav-btn">
              <IconArrowRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={setSwiperInstance}
          slidesPerView={2.5}
          breakpoints={{
            480: { slidesPerView: 3.5 },
            750: { slidesPerView: 4 },
            992: { slidesPerView: 6 },
            1200: { slidesPerView: 7 },
          }}
          spaceBetween={12}
          speed={600}
          style={{ overflow: 'hidden' }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link
                href={cat.href}
                className={`efcat-card${activeId === cat.id ? ' is-active' : ''}`}
                onClick={() => setActiveId(cat.id)}
              >
                <div className="efcat-img-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    quality={90}
                    style={{ objectFit: 'contain', padding: '10px' }}
                    sizes="120px"
                  />
                </div>
                <span className="efcat-label">{cat.label}</span>
                <span className="efcat-count">{cat.items} Items</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .efcat-section { padding: 0; }
        .efcat-heading-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .efcat-heading {
          font-size: clamp(20px, 4vw, 24px);
          font-weight: 700;
          color: #111;
        }
        .efcat-arrows { display: flex; gap: 8px; }
        .efcat-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background: #fff;
          color: ${ACCENT};
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .efcat-nav-btn:hover {
          background: ${ACCENT};
          border-color: ${ACCENT};
          color: #fff;
        }

        .efcat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px 8px;
          border-radius: 10px;
          background: #f7f8fa;
          text-decoration: none;
          transition: background 280ms ease, transform 280ms ease;
          gap: 8px;
        }
        .efcat-card:hover { background: ${ACCENT}; transform: translateY(-3px); }
        .efcat-card.is-active { background: ${ACCENT}; }

        .efcat-img-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
        }
        .efcat-card:hover .efcat-img-wrap img,
        .efcat-card.is-active .efcat-img-wrap img {
          filter: brightness(0) invert(1);
        }

        .efcat-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #222;
          text-align: center;
          line-height: 1.2;
          transition: color 280ms ease;
        }
        .efcat-count {
          display: block;
          font-size: 12px;
          color: #888;
          text-align: center;
          transition: color 280ms ease;
        }
        .efcat-card:hover .efcat-label,
        .efcat-card.is-active .efcat-label,
        .efcat-card:hover .efcat-count,
        .efcat-card.is-active .efcat-count {
          color: #fff;
        }

        @media (min-width: 750px) {
          .efcat-heading-row { margin-bottom: 30px; }
          .efcat-img-wrap { width: 72px; height: 72px; }
          .efcat-label { font-size: 14px; }
          .efcat-nav-btn { width: 40px; height: 40px; }
        }
        @media (min-width: 992px) {
          .efcat-heading-row { margin-bottom: 36px; }
          .efcat-img-wrap { width: 80px; height: 80px; }
          .efcat-card { padding: 20px 12px; }
        }
      `}</style>
    </section>
  );
}
