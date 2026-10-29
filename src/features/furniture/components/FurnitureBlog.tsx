'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

function IconArrowLeft({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRight({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const posts = [
  { id: 'fu-blog-1', title: 'How to Choose the Perfect Sofa for Your Living Room', slug: 'choose-perfect-sofa', image: '/furniture/blog/blog3.webp' },
  { id: 'fu-blog-2', title: 'Top Interior Design Trends for 2025 Homes', slug: 'interior-design-trends-2025', image: '/furniture/blog/blog2.webp' },
  { id: 'fu-blog-3', title: 'How to Care for Your Wooden Furniture: Expert Tips', slug: 'wooden-furniture-care-guide', image: '/furniture/blog/blog1.webp' },
  { id: 'fu-blog-4', title: 'Creating a Cozy Bedroom Retreat on Any Budget', slug: 'cozy-bedroom-retreat', image: '/furniture/blog/blog3.webp' },
  { id: 'fu-blog-5', title: 'The Art of Mixing Vintage and Modern Furniture Styles', slug: 'vintage-modern-furniture-mix', image: '/furniture/blog/blog2.webp' },
];

export function FurnitureBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="fubl-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        <div className="fubl-heading-wrap">
          <h2 className="fubl-heading">Latest Blog</h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden', padding: '8px 0 14px' }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView={1}
              breakpoints={{
                750: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              spaceBetween={24}
              loop
              speed={600}
              style={{ overflow: 'visible' }}
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="fubl-card">
                    <Link href={`/furniture/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="fubl-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/furniture/blog/${post.slug}`} className="fubl-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/furniture/blog/${post.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#c8a45a',
                            textDecoration: 'none',
                          }}
                        >
                          Read more
                          <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="fubl-nav-prev">
            <IconArrowLeft size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="fubl-nav-next">
            <IconArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .fubl-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .fubl-heading {
          font-size: 24px;
          font-weight: 700;
          color: #111;
        }

        .fubl-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }
        .fubl-card:hover .fubl-card-img { transform: scale(1.05); }

        .fubl-card-title {
          display: inline;
          font-size: 18px;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          line-height: 1.5;
          background-image: linear-gradient(#111, #111);
          background-size: 0% 1.5px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 400ms ease;
        }
        .fubl-card:hover .fubl-card-title { background-size: 100% 1.5px; }

        .fubl-nav-prev,
        .fubl-nav-next {
          position: absolute;
          top: 35%;
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
        /* Keep arrows strictly inside the slider wrapper — no negative offsets that
           bleed past the container edge and create a horizontal scrollbar. */
        .fubl-nav-prev { left: 8px; }
        .fubl-nav-next { right: 8px; }
        .fubl-section:hover .fubl-nav-prev { opacity: 1; }
        .fubl-section:hover .fubl-nav-next { opacity: 1; }
        .fubl-nav-prev:hover,
        .fubl-nav-next:hover { background-color: #c8a45a; border-color: #c8a45a; color: #fff; }

        @media (min-width: 750px) {
          .fubl-heading { font-size: 28px; }
          .fubl-card { height: 460px; }
          .fubl-card-title { font-size: 20px; }
        }
        @media (min-width: 992px) {
          .fubl-heading { font-size: 32px; }
          .fubl-card { height: 500px; }
          .fubl-card-title { font-size: 22px; }
        }
      `}</style>
    </section>
  );
}
