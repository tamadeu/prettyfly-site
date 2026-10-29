'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { pizzaProducts } from '@/data/pizza-products';
import { PizzaProductCard, PizzaProductCardStyles } from './PizzaProductCard';

import 'swiper/css';

function IconArrowLeft({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconPlay({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
    </svg>
  );
}

const featuredProducts = pizzaProducts.filter((p) => p.tags.includes('featured'));
const firstSaleIdx     = featuredProducts.findIndex((p) => p.badge === 'sale');

const YOUTUBE_ID = '_9VUPq3SxOc';

export function PizzaShopFeaturedCollection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setVideoOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [videoOpen]);

  return (
    <section className="ps-fc">
      <div className="container-main">
        {/* ── Heading row ── */}
        <div className="ps-fc-head">
          <h2 className="ps-fc-title">Featured Collection</h2>
          <Link href="/pizza/shop" className="ps-fc-viewall">
            View All
            <IconArrowRight size={16} />
          </Link>
        </div>

        {/* ── Product slider ── */}
        <div className="ps-fc-slider-wrap" style={{ position: 'relative', minWidth: 0 }}>
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            slidesPerView={2}
            breakpoints={{
              750:  { slidesPerView: 3, spaceBetween: 18 },
              992:  { slidesPerView: 4, spaceBetween: 20 },
            }}
            spaceBetween={14}
            loop
            speed={600}
            style={{ overflow: 'hidden' }}
          >
            {featuredProducts.map((product, i) => (
              <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                <PizzaProductCard
                  product={product}
                  showCountdown={i === firstSaleIdx}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous products"
            className="ps-fc-nav ps-fc-nav-prev"
          >
            <IconArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next products"
            className="ps-fc-nav ps-fc-nav-next"
          >
            <IconArrowRight size={18} />
          </button>
        </div>

        {/* ── Video thumbnail → inline player ── */}
        <div className="ps-fc-video-thumb">
          {videoOpen ? (
            <>
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Pizza crafting video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
              <button
                type="button"
                className="ps-fc-close-btn"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
              >
                <IconClose size={16} />
              </button>
            </>
          ) : (
            <>
              <Image
                src="/pizza/video/video1.webp"
                alt="Watch our pizza crafting story"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority={false}
              />
              <button
                type="button"
                className="ps-fc-play-btn"
                aria-label="Play video"
                onClick={() => setVideoOpen(true)}
              >
                <IconPlay size={30} />
              </button>
            </>
          )}
        </div>
      </div>

      <PizzaProductCardStyles />

      <style>{`
        .ps-fc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ps-fc-title {
          font-size: clamp(22px, 2vw, 30px);
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: -0.3px;
        }
        .ps-fc-viewall {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: #e84d1c;
          text-decoration: none;
          transition: gap 200ms ease;
        }
        .ps-fc-viewall:hover { gap: 10px; }

        /* ── Slider nav arrows ── */
        .ps-fc-nav {
          position: absolute;
          top: 40%;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: rgba(10,10,10,0.92);
          color: #fff;
          border: 1.5px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
          transform: translateY(-50%) translateX(0);
          transition:
            opacity 350ms ease,
            transform 300ms ease,
            background-color 220ms ease,
            border-color 220ms ease;
        }
        .ps-fc-nav-prev { left: 10px;  transform: translateY(-50%) translateX(-6px); }
        .ps-fc-nav-next { right: 10px; transform: translateY(-50%) translateX(6px);  }
        .ps-fc-slider-wrap:hover .ps-fc-nav {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }
        .ps-fc-nav:hover { background-color: #e84d1c; border-color: #e84d1c; }
        .ps-fc-nav:focus-visible {
          outline: 2px solid #e84d1c;
          outline-offset: 2px;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        /* ── Video thumbnail ── */
        .ps-fc-video-thumb {
          position: relative;
          margin-top: 40px;
          aspect-ratio: 16 / 7;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
        }
        .ps-fc-video-thumb:hover .ps-fc-play-btn {
          transform: translate(-50%, -50%) scale(1.08);
        }

        /* Play button */
        .ps-fc-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #000;
          border: none;
          color: #e84d1c;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          padding-left: 4px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 280ms ease;
        }
        .ps-fc-play-btn:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.75);
        }

        /* ── Inline close button (shown while video plays) ── */
        .ps-fc-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 10;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 200ms ease;
        }
        .ps-fc-close-btn:hover { background: rgba(0,0,0,0.85); }

        /* ── Responsive ── */
        @media (min-width: 750px) {
          .ps-fc-head { margin-bottom: 36px; }
          .ps-fc-video-thumb { margin-top: 48px; }
        }
        @media (min-width: 992px) {
          .ps-fc-head { margin-bottom: 40px; }
          .ps-fc-video-thumb { margin-top: 56px; }
          .ps-fc-play-btn { width: 76px; height: 76px; }
        }
        @media (max-width: 749px) {
          .ps-fc-video-thumb {
            aspect-ratio: 16 / 9;
            border-radius: 10px;
          }
          .ps-fc-play-btn { width: 56px; height: 56px; }
          .ps-fc-modal-close { top: -40px; }
        }
      `}</style>
    </section>
  );
}
