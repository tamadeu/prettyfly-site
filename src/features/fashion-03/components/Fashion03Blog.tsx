'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import blogPosts from '@/data/blog.json';
import type { BlogPost } from '@/types/common';

import 'swiper/css';

const FASHION03_BLOG_IMAGES = [
  '/fashion-03/blog/blog1.webp',
  '/fashion-03/blog/blog2.webp',
  '/fashion-03/blog/blog3.webp',
  '/fashion-03/blog/blog4.webp',
  '/fashion-03/blog/blog5.webp',
  '/fashion-03/blog/blog6.webp',
];

const data = (blogPosts as BlogPost[]).map((post, i) => ({
  ...post,
  image: FASHION03_BLOG_IMAGES[i] ?? post.image,
}));

function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }).toUpperCase();
}

/* ── Meta Icons ── */

function IconCalendar({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H8V15H6V13ZM6 16H8V18H6V16Z" />
    </svg>
  );
}

function IconUser({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" />
    </svg>
  );
}

/* ── Nav Icons ── */

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* ── Component ── */

export function Fashion03Blog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="f3-blog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#222' }}>Latest Blog</h2>
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
              {data.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="f3-blog-card" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', height: '500px', display: 'flex', flexDirection: 'column' }}>
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="f3-blog-card-img"
                      style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                      sizes="(max-width: 749px) 100vw, 33vw"
                    />
                  </Link>

                  {/* Content */}
                  <div style={{ padding: '20px 20px 24px' }}>
                    {/* Meta row: date + author */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '14px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', color: '#777' }}>
                        <IconCalendar size={15} />
                        {formatBlogDate(post.date)}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#777' }}>
                        <IconUser size={15} />
                        {post.author}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="f3-blog-card-title"
                      style={{
                        display: 'inline',
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#222',
                        textDecoration: 'none',
                        lineHeight: 1.5,
                        backgroundImage: 'linear-gradient(#222, #222)',
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
                        href={`/blog/${post.slug}`}
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

          {/* Nav arrows — same as Categories, hidden by default */}
          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="f3-blog-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="f3-blog-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>

        {/* View all — pill outline button, centered below the blog items */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Link href="/blog" className="f3-blog-viewall">
            View all
            <IconArrowRightS size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .f3-blog-card:hover .f3-blog-card-img {
          transform: scale(1.05);
        }

        .f3-blog-card:hover .f3-blog-card-title {
          background-size: 100% 1.5px !important;
        }

        /* View all — outline pill */
        .f3-blog-viewall {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 44px;
          font-size: 17px;
          font-weight: 500;
          color: rgb(17, 17, 17);
          background-color: #fff;
          border: 1px solid rgb(17, 17, 17);
          border-radius: 40px;
          text-decoration: none;
          transition: border-color 250ms ease, background-color 250ms ease, color 250ms ease;
        }
        .f3-blog-viewall:hover {
          border-color: #222;
          background-color: #222;
          color: #fff;
        }

        .f3-blog-nav-prev,
        .f3-blog-nav-next {
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
          transition: opacity 400ms ease, transform 400ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .f3-blog-nav-prev { left: 8px; transform: translateY(-50%); }
        .f3-blog-nav-next { right: 8px; transform: translateY(-50%); }

        .f3-blog-section:hover .f3-blog-nav-prev { opacity: 1; }
        .f3-blog-section:hover .f3-blog-nav-next { opacity: 1; }

        .f3-blog-nav-prev:hover,
        .f3-blog-nav-next:hover { background-color: #000; border-color: #000; color: #fff; }
      `}</style>
    </section>
  );
}
