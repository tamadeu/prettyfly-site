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

interface SkinCareBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const data: SkinCareBlogPost[] = [
  { id: 'skb-1', title: 'The Ultimate Morning Skincare Routine for Glowing Skin', slug: 'morning-skincare-routine', image: '/skin-care/blog/blog2.webp' },
  { id: 'skb-2', title: 'Vitamin C vs Retinol: Which Serum Is Right for You?', slug: 'vitamin-c-vs-retinol', image: '/skin-care/blog/blog3.webp' },
  { id: 'skb-3', title: 'How to Build a Minimalist Skincare Routine That Works', slug: 'minimalist-skincare-routine', image: '/skin-care/blog/blog1.webp' },
  { id: 'skb-4', title: 'The Science Behind Hyaluronic Acid and Deep Hydration', slug: 'hyaluronic-acid-hydration', image: '/skin-care/blog/blog2.webp' },
  { id: 'skb-5', title: "Night Creams vs Day Creams: What's the Difference?", slug: 'night-vs-day-creams', image: '/skin-care/blog/blog3.webp' },
  { id: 'skb-6', title: 'SPF Every Day: Why Sun Protection Is Non-Negotiable', slug: 'spf-every-day', image: '/skin-care/blog/blog1.webp' },
];

export function SkinCareBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="skblog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        <div className="skblog-heading-wrap">
          <h2 className="skblog-heading">Latest Beauty Tips</h2>
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
                  <div className="skblog-card">
                    <Link href={`/skin-care/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="skblog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>
                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/skin-care/blog/${post.slug}`} className="skblog-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/skin-care/blog/${post.slug}`}
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="skblog-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="skblog-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .skblog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .skblog-heading {
          font-size: 24px;
          font-weight: 600;
          color: #222;
        }

        .skblog-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .skblog-card-title {
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

        .skblog-card:hover .skblog-card-img { transform: scale(1.05); }
        .skblog-card:hover .skblog-card-title { background-size: 100% 1.5px !important; }

        .skblog-nav-prev,
        .skblog-nav-next {
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
        .skblog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .skblog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .skblog-section:hover .skblog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .skblog-section:hover .skblog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .skblog-nav-prev:hover,
        .skblog-nav-next:hover { background-color: #000; border-color: #000; color: #fff; }

        @media (min-width: 750px) {
          .skblog-heading { font-size: 28px; }
          .skblog-card { height: 460px; }
          .skblog-card-title { font-size: 20px; }
        }

        @media (min-width: 992px) {
          .skblog-heading { font-size: 32px; }
          .skblog-card { height: 500px; }
          .skblog-card-title { font-size: 24px; }
          .skblog-nav-prev { left: -22px; }
          .skblog-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
