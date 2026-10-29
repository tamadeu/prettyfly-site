'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

/* ── Nav Icons ── */
function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" /></svg>);
}
function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* ── Blog Data ── */
const posts = [
  { id: 'b1', image: '/backpack/blog/blog-1.webp', title: 'Explore the history of backpack design, how it has evolved', href: '/blog' },
  { id: 'b2', image: '/backpack/blog/blog-2.webp', title: 'Provide tips space in your backpack, including packing', href: '/blog' },
  { id: 'b3', image: '/backpack/blog/blog-3.webp', title: 'Practical tips on cleaning, repairing, and maintaining backpacks', href: '/blog' },
];

/* ── Component ── */

export function BackpackBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  /* Swiper loop needs more slides than `slidesPerView` (reaches 3 on desktop).
     With 3 posts, loop silently disables and navigation breaks — Default Fashion
     loops fine only because its blog data has enough posts. Repeat the posts so
     loop has enough slides; the visible content is unchanged. */
  const slides = [...posts, ...posts];

  return (
    <section className="bp-blog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#1a1a1a' }}>Latest Blog</h2>
        </div>

        {/* Slider */}
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
              {slides.map((post, idx) => (
                <SwiperSlide key={`${post.id}-${idx}`}>
                  <div className="bp-blog-card" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', overflow: 'hidden', backgroundColor: '#fff', height: '470px', display: 'flex', flexDirection: 'column' }}>
                    {/* Image */}
                    <Link href={post.href} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="bp-blog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    {/* Content */}
                    <div style={{ padding: '20px 22px 24px' }}>
                      <Link
                        href={post.href}
                        className="bp-blog-card-title"
                        style={{
                          display: 'inline',
                          fontSize: '20px',
                          fontWeight: 700,
                          color: '#1a1a1a',
                          textDecoration: 'none',
                          lineHeight: 1.4,
                          backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a)',
                          backgroundSize: '0% 1.5px',
                          backgroundPosition: '0 100%',
                          backgroundRepeat: 'no-repeat',
                          transition: 'background-size 400ms ease',
                        }}
                      >
                        {post.title}
                      </Link>

                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={post.href}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#222',
                            textDecoration: 'none',
                          }}
                        >
                          Load more
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

          {/* Nav arrows */}
          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="bp-blog-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="bp-blog-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .bp-blog-card:hover .bp-blog-card-img { transform: scale(1.05); }
        .bp-blog-card:hover .bp-blog-card-title { background-size: 100% 1.5px !important; }

        .bp-blog-nav-prev,
        .bp-blog-nav-next {
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
        .bp-blog-nav-prev { left: 8px; }
        .bp-blog-nav-next { right: 8px; }
        .bp-blog-section:hover .bp-blog-nav-prev { opacity: 1; }
        .bp-blog-section:hover .bp-blog-nav-next { opacity: 1; }
        .bp-blog-nav-prev:hover,
        .bp-blog-nav-next:hover { background-color: #000; border-color: #000; color: #fff; }

        @media (max-width: 749px) {
          .bp-blog-nav-prev, .bp-blog-nav-next { display: none !important; }
        }
      `}</style>
    </section>
  );
}
