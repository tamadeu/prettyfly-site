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
  {
    id: 'jwb-1',
    title: 'How to Choose the Perfect Engagement Ring: A Complete Guide',
    slug: 'choose-perfect-engagement-ring',
    image: '/jewelry/blog/blog1.webp',
    date: 'May 2025',
    category: 'Rings',
  },
  {
    id: 'jwb-2',
    title: 'The Art of Layering Necklaces: Styling Tips from Our Jewellers',
    slug: 'layering-necklaces-styling-tips',
    image: '/jewelry/blog/blog2.webp',
    date: 'Apr 2025',
    category: 'Necklaces',
  },
  {
    id: 'jwb-3',
    title: 'Gold vs Platinum: Which Metal Is Right for Your Jewellery?',
    slug: 'gold-vs-platinum-jewellery',
    image: '/jewelry/blog/blog3.webp',
    date: 'Mar 2025',
    category: 'Education',
  },
  {
    id: 'jwb-4',
    title: 'Caring for Your Fine Jewellery: Expert Advice',
    slug: 'caring-for-fine-jewellery',
    image: '/jewelry/blog/blog1.webp',
    date: 'Feb 2025',
    category: 'Care',
  },
];

export function JewelleryBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="jwblog-section">
      <div className="container-main">
        <div className="jwblog-heading-wrap">
          <h2 className="jwblog-heading">Latest Blog</h2>
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
                  <div className="jwblog-card">
                    <Link href={`/jewellery/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="jwblog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                      <span className="jwblog-category-tag">{post.category}</span>
                    </Link>
                    <div style={{ padding: '20px 20px 24px' }}>
                      <p className="jwblog-date">{post.date}</p>
                      <Link href={`/jewellery/blog/${post.slug}`} className="jwblog-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/jewellery/blog/${post.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#b89b6e',
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="jwblog-nav jwblog-nav-prev">
            <IconArrowLeft size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="jwblog-nav jwblog-nav-next">
            <IconArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .jwblog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .jwblog-heading {
          font-size: clamp(22px, 2.8vw, 32px);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .jwblog-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 8px;
          overflow: hidden;
          background-color: #fff;
          height: 440px;
          display: flex;
          flex-direction: column;
        }
        .jwblog-card:hover .jwblog-card-img { transform: scale(1.05); }
        .jwblog-card:hover .jwblog-card-title { background-size: 100% 1.5px !important; }

        .jwblog-category-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          background: #b89b6e;
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .jwblog-date {
          font-size: 12px;
          color: #aaa;
          font-weight: 500;
          margin: 0 0 8px;
          letter-spacing: 0.04em;
        }
        .jwblog-card-title {
          display: inline;
          font-size: clamp(17px, 1.6vw, 22px);
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

        .jwblog-nav {
          position: absolute;
          top: 35%;
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
        .jwblog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .jwblog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }
        .jwblog-section:hover .jwblog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .jwblog-section:hover .jwblog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }
        .jwblog-nav:hover { background-color: #b89b6e; border-color: #b89b6e; color: #fff; }

        @media (min-width: 750px) {
          .jwblog-card { height: 460px; }
        }

        @media (max-width: 749px) {
          .jwblog-nav { display: none; }
        }
        @media (min-width: 992px) {
          .jwblog-nav-prev { left: -22px; }
          .jwblog-nav-next { right: -22px; }
          .jwblog-card { height: 500px; }
        }
      `}</style>
    </section>
  );
}
