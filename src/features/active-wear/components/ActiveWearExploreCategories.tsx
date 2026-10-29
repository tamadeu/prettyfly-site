'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import { fromIndex, records, text, type CmsContent } from '../cms';

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}
function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* Explore everything — category tiles in a slider. Imagery only from /active-wear/. */
const defaultCategories = [
  { id: 'active', label: 'Roupas esportivas', image: '/active-wear/product-categories/product-categories-1.avif', href: '/shop?category=Active%20Wears' },
  { id: 'leggings', label: 'Leggings', image: '/active-wear/product-categories/product-categories-2.webp', href: '/shop?category=Leggings' },
  { id: 'joggers', label: 'Calças jogger', image: '/active-wear/product-categories/product-categories-3.avif', href: '/shop?category=Joggers' },
  { id: 'bras', label: 'Tops esportivos', image: '/active-wear/product-categories/product-categories-4.avif', href: '/shop?category=Sports%20Bras' },
  { id: 'yoga', label: 'Yoga', image: '/active-wear/product-categories/product-categories-5.avif', href: '/shop?category=Yoga' },
  /* repeats so loop has enough slides at every breakpoint (matches Phone Case) */
  { id: 'active2', label: 'Roupas esportivas', image: '/active-wear/product-categories/product-categories-1.avif', href: '/shop?category=Active%20Wears' },
  { id: 'leggings2', label: 'Leggings', image: '/active-wear/product-categories/product-categories-2.webp', href: '/shop?category=Leggings' },
];

export function ActiveWearExploreCategories({ content }: { content?: CmsContent }) {
  const cmsItems = records(content?.items);
  const categories = cmsItems.length
    ? cmsItems.map((c, i) => ({
        id: `cms-${i}`,
        label: text(c.name, fromIndex(defaultCategories, i).label),
        image: text(c.image, fromIndex(defaultCategories, i).image),
        href: text(c.url, '/shop'),
      }))
    : defaultCategories;
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="awexp-section">
      <div className="container-main">
        {/* Heading row */}
        <div className="awexp-head">
          <h2 className="awexp-title">{text(content?.title, 'Explore todas as opções')}</h2>
          <Link href={text(content?.link_url, '/shop')} className="awexp-all">
            {text(content?.link_label, 'Ver todas as categorias')}
            <IconArrowRight size={16} />
          </Link>
        </div>

        {/* Slider — Phone Case slider behavior */}
        <div className="awexp-slider-outer">
          <div style={{ overflow: 'hidden', padding: '4px 0 8px' }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView={2}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                750: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 20 },
                1200: { slidesPerView: 5, spaceBetween: 24 },
              }}
              spaceBetween={14}
              loop
              speed={600}
              style={{ overflow: 'visible' }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <Link href={cat.href} className="awexp-card" aria-label={`Comprar ${cat.label}`}>
                    <div className="awexp-img-wrap">
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        className="awexp-img"
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                        sizes="(min-width: 1200px) 20vw, (min-width: 992px) 25vw, (min-width: 750px) 33vw, 50vw"
                      />
                    </div>
                    <div className="awexp-footer">
                      <span className="awexp-label">{cat.label}</span>
                      <span className="awexp-arrow">
                        <IconArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Nav buttons */}
          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Categorias anteriores" className="awexp-nav awexp-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Próximas categorias" className="awexp-nav awexp-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .awexp-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: clamp(24px, 3vw, 40px);
        }
        .awexp-title {
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #1a1a1a;
        }
        .awexp-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(13px, 1.1vw, 15px);
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          border-bottom: 1.5px solid #1a1a1a;
          padding-bottom: 2px;
          white-space: nowrap;
          transition: gap 200ms ease;
        }
        .awexp-all:hover { gap: 10px; }

        .awexp-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background-color: #f1f1f0;
          padding: clamp(16px, 1.6vw, 22px);
          transition: box-shadow 250ms ease, transform 250ms ease;
        }
        .awexp-card:hover {
          box-shadow: 0 10px 26px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        .awexp-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }
        .awexp-img { transition: transform 500ms ease; }
        .awexp-card:hover .awexp-img { transform: scale(1.05); }

        .awexp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: clamp(10px, 1.4vw, 16px);
        }
        .awexp-label {
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 600;
          color: #1a1a1a;
        }
        .awexp-arrow {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #111;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 250ms ease, transform 250ms ease;
        }
        .awexp-card:hover .awexp-arrow {
          background-color: #333;
          transform: translateX(3px);
        }

        /* ── Slider outer + nav buttons (Phone Case behavior) ── */
        .awexp-slider-outer { position: relative; }
        .awexp-nav {
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
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease;
        }
        .awexp-nav-prev { left: -22px; }
        .awexp-nav-next { right: -22px; }
        .awexp-nav:hover {
          background-color: #111;
          border-color: #111;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }

        @media (max-width: 749px) {
          .awexp-nav { display: none; }
        }
      `}</style>
    </section>
  );
}
