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

interface LipstainBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const data: LipstainBlogPost[] = [
  { id: 'ls-blog-1', title: 'How to Make Your Lip Color Last All Day', slug: 'make-lip-color-last-all-day', image: '/lipstain/blog/blog1.webp' },
  { id: 'ls-blog-2', title: 'Finding Your Perfect Red: The Ultimate Lip Color Guide', slug: 'perfect-red-lip-color-guide', image: '/lipstain/blog/blog2.webp' },
  { id: 'ls-blog-3', title: 'Lip Stain vs Lipstick vs Lip Gloss: What Is the Difference?', slug: 'lip-stain-vs-lipstick-vs-gloss', image: '/lipstain/blog/blog3.webp' },
  { id: 'ls-blog-4', title: 'The Best Lip Care Routine for a Smooth, Hydrated Pout', slug: 'lip-care-routine-hydrated', image: '/lipstain/blog/blog1.webp' },
  { id: 'ls-blog-5', title: 'Autumn Lip Trends: The Shades Defining the Season', slug: 'autumn-lip-trends', image: '/lipstain/blog/blog2.webp' },
  { id: 'ls-blog-6', title: 'Clean Beauty Lips: What Ingredients to Look For', slug: 'clean-beauty-lips-ingredients', image: '/lipstain/blog/blog3.webp' },
];

export function LipstainBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="lsblog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        <div className="lsblog-heading-wrap">
          <h2 className="lsblog-heading">Latest Blog</h2>
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
                  <div className="lsblog-card">
                    <Link href={`/lipstain/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="lsblog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/lipstain/blog/${post.slug}`} className="lsblog-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/lipstain/blog/${post.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#c9173c',
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="lsblog-nav-prev">
            <IconArrowLeft size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="lsblog-nav-next">
            <IconArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .lsblog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .lsblog-heading {
          font-size: 24px;
          font-weight: 600;
          color: #222;
        }

        .lsblog-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .lsblog-card-title {
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

        .lsblog-card:hover .lsblog-card-img { transform: scale(1.05); }
        .lsblog-card:hover .lsblog-card-title { background-size: 100% 1.5px !important; }

        .lsblog-nav-prev,
        .lsblog-nav-next {
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
        .lsblog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .lsblog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .lsblog-section:hover .lsblog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .lsblog-section:hover .lsblog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .lsblog-nav-prev:hover,
        .lsblog-nav-next:hover { background-color: #c9173c; border-color: #c9173c; color: #fff; }

        @media (min-width: 750px) {
          .lsblog-heading { font-size: 28px; }
          .lsblog-card { height: 460px; }
          .lsblog-card-title { font-size: 20px; }
        }
        @media (min-width: 992px) {
          .lsblog-heading { font-size: 32px; }
          .lsblog-card { height: 500px; }
          .lsblog-card-title { font-size: 24px; }
          .lsblog-nav-prev { left: -22px; }
          .lsblog-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
