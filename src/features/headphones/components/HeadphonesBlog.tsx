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

interface HeadphonesBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const data: HeadphonesBlogPost[] = [
  { id: 'hp-blog-1', title: 'Over-Ear vs In-Ear: Which Headphones Are Right for You?', slug: 'over-ear-vs-in-ear', image: '/headphones/blog/blog1.webp' },
  { id: 'hp-blog-2', title: 'The Complete Guide to Active Noise Cancellation', slug: 'active-noise-cancellation-guide', image: '/headphones/blog/blog2.webp' },
  { id: 'hp-blog-3', title: 'Hi-Res Audio: Is It Worth the Upgrade?', slug: 'hi-res-audio-worth-it', image: '/headphones/blog/blog3.webp' },
  { id: 'hp-blog-4', title: 'Best Headphones for Gaming in 2025: Our Top Picks', slug: 'best-gaming-headphones-2025', image: '/headphones/blog/blog1.webp' },
  { id: 'hp-blog-5', title: 'How to Extend the Battery Life of Your Wireless Headphones', slug: 'extend-wireless-headphone-battery', image: '/headphones/blog/blog2.webp' },
  { id: 'hp-blog-6', title: 'Wired vs Wireless Headphones: The Honest Comparison', slug: 'wired-vs-wireless-headphones', image: '/headphones/blog/blog3.webp' },
];

export function HeadphonesBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="hpblog-section" style={{ backgroundColor: '#0b0b0b' }}>
      <div className="container-main">
        <div className="hpblog-heading-wrap">
          <h2 className="hpblog-heading">Latest Blog</h2>
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
                  <div className="hpblog-card">
                    <Link href={`/headphones/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="hpblog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/headphones/blog/${post.slug}`} className="hpblog-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/headphones/blog/${post.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'rgba(255,255,255,0.6)',
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="hpblog-nav-prev">
            <IconArrowLeft size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="hpblog-nav-next">
            <IconArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .hpblog-section {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .hpblog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .hpblog-heading {
          font-size: 24px;
          font-weight: 600;
          color: #fff;
        }

        .hpblog-card {
          box-shadow: 0 2px 16px rgba(0,0,0,0.3);
          border-radius: 10px;
          overflow: hidden;
          background-color: #1a1a1a;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .hpblog-card-title {
          display: inline;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          line-height: 1.5;
          background-image: linear-gradient(#fff, #fff);
          background-size: 0% 1.5px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 400ms ease;
        }

        .hpblog-card:hover .hpblog-card-img { transform: scale(1.05); }
        .hpblog-card:hover .hpblog-card-title { background-size: 100% 1.5px !important; }

        .hpblog-nav-prev,
        .hpblog-nav-next {
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #333;
          background-color: #1a1a1a;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 400ms ease, transform 400ms ease, background-color 250ms ease, border-color 250ms ease;
        }
        .hpblog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .hpblog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .hpblog-section:hover .hpblog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .hpblog-section:hover .hpblog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .hpblog-nav-prev:hover,
        .hpblog-nav-next:hover { background-color: #fff; border-color: #fff; color: #111; }

        @media (min-width: 750px) {
          .hpblog-heading { font-size: 28px; }
          .hpblog-card { height: 460px; }
          .hpblog-card-title { font-size: 20px; }
        }
        @media (min-width: 992px) {
          .hpblog-heading { font-size: 32px; }
          .hpblog-card { height: 500px; }
          .hpblog-card-title { font-size: 24px; }
          .hpblog-nav-prev { left: -22px; }
          .hpblog-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
