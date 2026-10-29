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

interface ElegantFashionBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const data: ElegantFashionBlogPost[] = [
  { id: 'ef-blog-1', title: 'Building a Timeless Capsule Wardrobe for Every Season', slug: 'timeless-capsule-wardrobe', image: '/elegant-fashion/blog/blog1.webp' },
  { id: 'ef-blog-2', title: 'The Art of Dressing for Every Occasion with Confidence', slug: 'dressing-for-every-occasion', image: '/elegant-fashion/blog/blog2.webp' },
  { id: 'ef-blog-3', title: 'Sustainable Luxury: How to Shop Fashion Responsibly', slug: 'sustainable-luxury-fashion', image: '/elegant-fashion/blog/blog3.webp' },
  { id: 'ef-blog-4', title: 'How to Style Knitwear for an Elevated, Polished Look', slug: 'style-knitwear-elevated-look', image: '/elegant-fashion/blog/blog1.webp' },
  { id: 'ef-blog-5', title: 'Accessorising with Intention: Less Is More', slug: 'accessorising-with-intention', image: '/elegant-fashion/blog/blog2.webp' },
  { id: 'ef-blog-6', title: 'Fabric Knowledge: Choosing Quality Materials That Last', slug: 'fabric-knowledge-quality-materials', image: '/elegant-fashion/blog/blog3.webp' },
];

export function ElegantFashionBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="efblog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        <div className="efblog-heading-wrap">
          <h2 className="efblog-heading">Latest Blog</h2>
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
                  <div className="efblog-card">
                    <Link href={`/elegant-fashion/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="efblog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/elegant-fashion/blog/${post.slug}`} className="efblog-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/elegant-fashion/blog/${post.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#111',
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="efblog-nav-prev">
            <IconArrowLeft size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="efblog-nav-next">
            <IconArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .efblog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .efblog-heading {
          font-size: 24px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.01em;
        }

        .efblog-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .efblog-card-title {
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

        .efblog-card:hover .efblog-card-img { transform: scale(1.05); }
        .efblog-card:hover .efblog-card-title { background-size: 100% 1.5px !important; }

        .efblog-nav-prev,
        .efblog-nav-next {
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          background-color: #fff;
          color: #111;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 400ms ease, transform 400ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease;
        }
        .efblog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .efblog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .efblog-section:hover .efblog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .efblog-section:hover .efblog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .efblog-nav-prev:hover,
        .efblog-nav-next:hover { background-color: #111; border-color: #111; color: #fff; }

        @media (min-width: 750px) {
          .efblog-heading { font-size: 28px; }
          .efblog-card { height: 460px; }
          .efblog-card-title { font-size: 20px; }
        }
        @media (min-width: 992px) {
          .efblog-heading { font-size: 32px; }
          .efblog-card { height: 500px; }
          .efblog-card-title { font-size: 24px; }
          .efblog-nav-prev { left: -22px; }
          .efblog-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
