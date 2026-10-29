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

/* ── Category Data — circular tiles. Imagery only from /fashion-04/ ── */
const categories = [
  { id: 'knit', label: 'Knit Wears', items: 17, image: '/fashion-04/categories-mega-menu/categories-mega-menu1.webp', href: '/shop?category=Knit%20Wears' },
  { id: 'formal', label: 'Formal Wear', items: 16, image: '/fashion-04/categories-mega-menu/categories-mega-menu2.webp', href: '/shop?category=Formal%20Wear' },
  { id: 'tops', label: 'Tops', items: 11, image: '/fashion-04/categories-mega-menu/categories-mega-menu3.webp', href: '/shop?category=Tops' },
  { id: 'sweaters', label: 'Sweaters', items: 19, image: '/fashion-04/categories-mega-menu/categories-mega-menu4.webp', href: '/shop?category=Sweaters' },
  { id: 'luxury', label: 'Luxury', items: 19, image: '/fashion-04/categories-mega-menu/categories-mega-menu5.webp', href: '/shop?category=Dresses' },
  { id: 'dresses', label: 'Dresses', items: 22, image: '/fashion-04/categories-mega-menu/categories-mega-menu1.webp', href: '/shop?category=Dresses' },
  { id: 'bottoms', label: 'Bottoms', items: 14, image: '/fashion-04/categories-mega-menu/categories-mega-menu3.webp', href: '/shop?category=Bottoms' },
];

export function Fashion04Categories() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="f4cat-section">
      <div className="container-main">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#222', marginBottom: '12px' }}>
            Shop by categories
          </h2>
          <p style={{ fontSize: '15px', color: '#777', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Unmatched design—superior performance and customer satisfaction in one.
          </p>
        </div>

        {/* Slider */}
        <div style={{ position: 'relative', marginTop: '40px' }}>
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3 },
              750: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
            spaceBetween={24}
            loop
            speed={600}
            style={{ overflow: 'hidden' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link href={cat.href} className="f4cat-card" aria-label={`Shop ${cat.label}`}>
                  {/* Circular Image */}
                  <div className="f4cat-img-wrap">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="f4cat-img"
                      style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                      sizes="(max-width: 749px) 50vw, 20vw"
                    />
                  </div>

                  {/* Label + item count (centered) */}
                  <div style={{ textAlign: 'center', marginTop: '18px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: '#222', display: 'inline-block' }}>
                      {cat.label}
                    </span>
                    <p style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>
                      {cat.items} Items
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows — hidden by default, appear on section hover */}
          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous categories" className="f4cat-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next categories" className="f4cat-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .f4cat-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .f4cat-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f3f3f3;
        }
        .f4cat-card:hover .f4cat-img { transform: scale(1.06); }
        .f4cat-card:hover span { color: #F15B41; }
        .f4cat-card span { transition: color 250ms ease; }

        /* Slider nav arrows */
        .f4cat-nav-prev,
        .f4cat-nav-next {
          position: absolute;
          top: 38%;
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
        .f4cat-nav-prev { left: -10px; }
        .f4cat-nav-next { right: -10px; }
        .f4cat-section:hover .f4cat-nav-prev { opacity: 1; }
        .f4cat-section:hover .f4cat-nav-next { opacity: 1; }
        .f4cat-nav-prev:hover,
        .f4cat-nav-next:hover { background-color: #000; border-color: #000; color: #fff; }

        @media (max-width: 749px) {
          .f4cat-nav-prev, .f4cat-nav-next { display: none; }
        }
      `}</style>
    </section>
  );
}
