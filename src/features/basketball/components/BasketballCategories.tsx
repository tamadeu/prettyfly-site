'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* Explore everything — category tiles in a slider. Imagery only from /basketball/. */
const categories = [
  { id: 'basketball', label: 'Basketball', count: '12 Items', image: '/basketball/explore-everything/explore-everything-1.webp', href: '/shop?category=Basketball' },
  { id: 'sport-club', label: 'Sport club', count: '12 Items', image: '/basketball/explore-everything/explore-everything-2.webp', href: '/shop?category=Sport%20club' },
  { id: 'baseball', label: 'Baseball', count: '12 Items', image: '/basketball/explore-everything/explore-everything-3.webp', href: '/shop?category=Baseball' },
  { id: 'sportspress', label: 'SportsPress', count: '12 Items', image: '/basketball/explore-everything/explore-everything-4.webp', href: '/shop' },
  { id: 'sneaker', label: 'Sneaker', count: '12 Items', image: '/basketball/explore-everything/explore-everything-5.webp', href: '/shop' },
  { id: 'football', label: 'Football', count: '12 Items', image: '/basketball/explore-everything/explore-everything-6.webp', href: '/shop?category=Football' },
];

export function BasketballCategories() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="bbcat-section">
      <div className="container-main">
        {/* Heading row */}
        <div className="bbcat-head">
          <h2 className="bbcat-title">Explore everything</h2>
          <div className="bbcat-nav-group">
            <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous categories" className="bbcat-nav">
              <IconArrowLeftS size={20} />
            </button>
            <button onClick={() => swiperInstance?.slideNext()} aria-label="Next categories" className="bbcat-nav">
              <IconArrowRightS size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          slidesPerView={1.5}
          breakpoints={{
            480: { slidesPerView: 2.5, spaceBetween: 16 },
            750: { slidesPerView: 3.5, spaceBetween: 20 },
            992: { slidesPerView: 4.5, spaceBetween: 24 },
          }}
          spaceBetween={14}
          loop
          speed={600}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href={cat.href} className="bbcat-card" aria-label={`Shop ${cat.label}`}>
                <div className="bbcat-img-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="bbcat-img"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 1200px) 20vw, (min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                  />
                </div>
                <div className="bbcat-footer">
                  <span className="bbcat-label">{cat.label}</span>
                  <span className="bbcat-count">{cat.count}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .bbcat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: clamp(24px, 3vw, 40px);
        }
        .bbcat-title {
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #1a1a1a;
        }
        .bbcat-nav-group { display: flex; align-items: center; gap: 12px; }
        .bbcat-nav {
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
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .bbcat-nav:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
        }

        .bbcat-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .bbcat-img-wrap {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 4px;
        }
        .bbcat-img { transition: transform 500ms ease; }
        .bbcat-card:hover .bbcat-img { transform: scale(1.05); }

        .bbcat-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          margin-top: clamp(12px, 1.4vw, 18px);
          text-align: center;
        }
        .bbcat-label {
          font-size: clamp(15px, 1.2vw, 18px);
          font-weight: 600;
          color: #1a1a1a;
          transition: color 200ms ease;
        }
        .bbcat-card:hover .bbcat-label { color: #e8521f; }
        .bbcat-count {
          font-size: clamp(13px, 1vw, 14px);
          color: #888;
        }

        @media (max-width: 749px) {
          .bbcat-nav { width: 38px; height: 38px; }
        }
      `}</style>
    </section>
  );
}
