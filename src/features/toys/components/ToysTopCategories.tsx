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

/* ── Category Data — matches the screenshot's 6 circular cards ── */
const categories = [
  { id: 'baby', label: 'Baby toys', items: 12, image: '/toys/top-catrgories-slider/top-categories-1.webp', href: '/shop?category=Baby Toys' },
  { id: 'kids-1', label: 'Kids Toys', items: 11, image: '/toys/top-catrgories-slider/top-categories-2.webp', href: '/shop?category=Kids Toys' },
  { id: 'stacking', label: 'Stacking Toys', items: 11, image: '/toys/top-catrgories-slider/top-categories-3.webp', href: '/shop?category=Stacking Toys' },
  { id: 'motor', label: 'Motor Toys', items: 11, image: '/toys/top-catrgories-slider/top-categories-4.webp', href: '/shop?category=Motor Toys' },
  { id: 'teething', label: 'Teething Toys', items: 11, image: '/toys/top-catrgories-slider/top-categories-5.webp', href: '/shop?category=Teething Toys' },
  { id: 'kids-2', label: 'Kids Toys', items: 11, image: '/toys/top-catrgories-slider/top-categories-6.webp', href: '/shop?category=Kids Toys' },
];

/* Swiper's loop mode needs more real slides than the widest slidesPerView
   (6, at ≥992px) — with exactly 6 categories and slidesPerView===6 there was
   nothing left to loop into, so Swiper silently disabled looping (this was
   the "slider not working" bug). Tripling the data set (same technique as
   ToysBrandLogos' marquee) gives it 18 real slides to loop through while the
   visual density per breakpoint (3/4/6 visible) stays unchanged. */
const loopedCategories = [...categories, ...categories, ...categories];

/* ── Component ── */
export function ToysTopCategories() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="tycat-section">
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: '#222' }}>Top Categories</h2>
        </div>

        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            slidesPerView={3}
            breakpoints={{
              750: { slidesPerView: 4 },
              992: { slidesPerView: 6 },
            }}
            spaceBetween={20}
            loop={true}
            speed={600}
            style={{ overflow: 'hidden' }}
          >
            {loopedCategories.map((cat, i) => (
              <SwiperSlide key={`${cat.id}-${i}`}>
                <Link href={cat.href} className="tycat-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="tycat-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="tycat-img"
                      style={{ objectFit: 'contain', transition: 'transform 500ms ease' }}
                      sizes="(max-width: 749px) 33vw, 16vw"
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span className="tycat-label">{cat.label}</span>
                    <p className="tycat-count">{cat.items} Items</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows — hidden by default, appear on section hover */}
          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous categories" className="tycat-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next categories" className="tycat-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .tycat-img-wrap {
          position: relative;
          width: 100%;
          max-width: 222px;
          aspect-ratio: 1 / 1;
          background-color: transparent;
          overflow: hidden;
          margin: 0 auto 16px;
          border-radius: 50%;
          padding: 20%;
        }
        .tycat-card:hover .tycat-img { transform: scale(1.08); }

        .tycat-label {
          font-size: 17px;
          font-weight: 700;
          color: #222;
          display: inline-block;
          transition: color 200ms ease;
        }
        .tycat-card:hover .tycat-label { color: #1B9E91; }
        .tycat-count {
          font-size: 15px;
          color: #888;
          margin-top: 2px;
        }

        /* Slider nav arrows */
        .tycat-nav-prev,
        .tycat-nav-next {
          position: absolute;
          top: 36%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
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
        .tycat-nav-prev { left: -8px; }
        .tycat-nav-next { right: -8px; }
        .tycat-section:hover .tycat-nav-prev { opacity: 1; }
        .tycat-section:hover .tycat-nav-next { opacity: 1; }
        .tycat-nav-prev:hover,
        .tycat-nav-next:hover {
          background-color: #000;
          border-color: #000;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
