'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

/* ── Icons ── */
function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* ── Category Data ── */
const categories = [
  { id: 'optical', label: 'Optical Glasses', items: 12, image: '/glasses/categories-mega-menu/categories-mega-menu-1.webp', href: '/shop?category=Optical Glasses' },
  { id: 'luxury', label: 'Luxury Eyewear', items: 12, image: '/glasses/categories-mega-menu/categories-mega-menu-2.webp', href: '/shop?category=Luxury Eyewear' },
  { id: 'unisex', label: 'Unisex glasses', items: 12, image: '/glasses/categories-mega-menu/categories-mega-menu-3.webp', href: '/shop?category=Unisex Glasses' },
  { id: 'sunglasses', label: 'Sunglasses', items: 12, image: '/glasses/categories-mega-menu/categories-mega-menu-4.webp', href: '/shop?category=Sunglasses' },
  { id: 'fashion', label: 'Fashion Glasses', items: 12, image: '/glasses/categories-mega-menu/categories-mega-menu-5.webp', href: '/shop?category=Fashion Glasses' },
];

/* ── Component ── */
export function GlassesTopCategories() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="glcat-section">
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: '#222' }}>Top Categories</h2>
        </div>

        <div style={{ position: 'relative' }}>
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
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link href={cat.href} className="glcat-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="glcat-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="glcat-img"
                      style={{ objectFit: 'contain', transition: 'transform 500ms ease' }}
                      sizes="(max-width: 749px) 50vw, 25vw"
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span className="glcat-label">{cat.label}</span>
                    <p className="glcat-count">{cat.items} Items</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows — hidden by default, appear on section hover */}
          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous categories" className="glcat-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next categories" className="glcat-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .glcat-img-wrap {
          position: relative;
          width: 100%;
          max-width: 350px;
          aspect-ratio: 1 / 1;
          background-color: #f5f5f5;
          overflow: hidden;
          margin: 0 auto 18px;
          border-radius: 4px;
        }
        .glcat-card:hover .glcat-img { transform: scale(1.05); }

        .glcat-label {
          font-size: 17px;
          font-weight: 700;
          color: #222;
          display: inline-block;
          transition: color 200ms ease;
        }
        .glcat-card:hover .glcat-label { color: #F15B41; }
        .glcat-count {
          font-size: 14px;
          color: #888;
          margin-top: 4px;
        }

        /* Slider nav arrows */
        .glcat-nav-prev,
        .glcat-nav-next {
          position: absolute;
          top: 42%;
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
          transition: opacity 400ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .glcat-nav-prev { left: 8px; }
        .glcat-nav-next { right: 8px; }
        .glcat-section:hover .glcat-nav-prev { opacity: 1; }
        .glcat-section:hover .glcat-nav-next { opacity: 1; }
        .glcat-nav-prev:hover,
        .glcat-nav-next:hover {
          background-color: #000;
          border-color: #000;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
