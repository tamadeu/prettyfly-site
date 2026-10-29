'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

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

interface SneakerBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const data: SneakerBlogPost[] = [
  { id: 'sn-blog-1', title: 'The Ultimate Guide to Choosing Your Perfect Running Shoe', slug: 'choosing-running-shoe', image: '/sneaker/blog/blog1.webp' },
  { id: 'sn-blog-2', title: 'Street Style 2025: How Sneakers Became Fashion Statements', slug: 'street-style-sneakers-2025', image: '/sneaker/blog/blog2.webp' },
  { id: 'sn-blog-3', title: 'How to Care for Your Premium Sneakers: A Complete Guide', slug: 'sneaker-care-guide', image: '/sneaker/blog/blog3.webp' },
  { id: 'sn-blog-4', title: 'Top 10 Performance Sneakers for Every Type of Runner', slug: 'top-10-performance-sneakers', image: '/sneaker/blog/blog1.webp' },
  { id: 'sn-blog-5', title: 'Limited Edition Drops: What Makes a Sneaker Truly Iconic', slug: 'limited-edition-drops-iconic', image: '/sneaker/blog/blog2.webp' },
  { id: 'sn-blog-6', title: 'Trail vs Road: Picking the Right Shoe for Your Terrain', slug: 'trail-vs-road-running-shoes', image: '/sneaker/blog/blog3.webp' },
];

export function SneakerBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="snblog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        <div className="snblog-heading-wrap">
          <h2 className="snblog-heading">Latest Blog</h2>
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
              {data.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="snblog-card">
                    <Link href={`/sneaker/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="snblog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/sneaker/blog/${post.slug}`} className="snblog-card-title">
                        {post.title}
                      </Link>

                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/sneaker/blog/${post.slug}`}
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="snblog-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="snblog-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .snblog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .snblog-heading {
          font-size: 24px;
          font-weight: 600;
          color: #222;
        }

        .snblog-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .snblog-card-title {
          display: inline;
          font-size: 18px;
          font-weight: 600;
          color: #222;
          text-decoration: none;
          line-height: 1.5;
          background-image: linear-gradient(#222, #222);
          background-size: 0% 1.5px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 400ms ease;
        }

        .snblog-card:hover .snblog-card-img {
          transform: scale(1.05);
        }

        .snblog-card:hover .snblog-card-title {
          background-size: 100% 1.5px !important;
        }

        .snblog-nav-prev,
        .snblog-nav-next {
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
        .snblog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .snblog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .snblog-section:hover .snblog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .snblog-section:hover .snblog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .snblog-nav-prev:hover,
        .snblog-nav-next:hover { background-color: #e84d1c; border-color: #e84d1c; color: #fff; }

        @media (min-width: 750px) {
          .snblog-heading { font-size: 28px; }
          .snblog-card { height: 460px; }
          .snblog-card-title { font-size: 20px; }
        }

        @media (min-width: 992px) {
          .snblog-heading { font-size: 32px; }
          .snblog-card { height: 500px; }
          .snblog-card-title { font-size: 24px; }
          .snblog-nav-prev { left: -22px; }
          .snblog-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
