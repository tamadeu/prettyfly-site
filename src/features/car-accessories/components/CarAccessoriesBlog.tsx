'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { carAccessoriesBlogPosts as data } from '@/data/car-accessories-blog';

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

export function CarAccessoriesBlog() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="ca-blog-section">
      <div className="container-main">
        <div className="ca-blog-heading-wrap">
          <h2 className="ca-blog-heading">Latest Blog</h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden', padding: '8px 0 14px' }}>
            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => { swiperRef.current = s; }}
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
                  <div className="ca-blog-card">
                    <Link href={`/car-accessories/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#e5e5e5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="ca-blog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/car-accessories/blog/${post.slug}`} className="ca-blog-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/car-accessories/blog/${post.slug}`}
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

          <button onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous" className="ca-blog-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} aria-label="Next" className="ca-blog-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .ca-blog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .ca-blog-heading {
          font-size: 24px;
          font-weight: 600;
          color: #222;
        }

        .ca-blog-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .ca-blog-card-title {
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

        .ca-blog-card:hover .ca-blog-card-img { transform: scale(1.05); }
        .ca-blog-card:hover .ca-blog-card-title { background-size: 100% 1.5px !important; }

        .ca-blog-nav-prev,
        .ca-blog-nav-next {
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
        .ca-blog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .ca-blog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .ca-blog-section:hover .ca-blog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .ca-blog-section:hover .ca-blog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .ca-blog-nav-prev:hover,
        .ca-blog-nav-next:hover { background-color: #5b72d6; border-color: #5b72d6; color: #fff; }

        @media (max-width: 749px) {
          .ca-blog-nav-prev { left: 8px; opacity: 1; pointer-events: auto; transform: translateY(-50%) translateX(0); }
          .ca-blog-nav-next { right: 8px; opacity: 1; pointer-events: auto; transform: translateY(-50%) translateX(0); }
        }

        @media (min-width: 750px) {
          .ca-blog-heading { font-size: 28px; }
          .ca-blog-card { height: 460px; }
          .ca-blog-card-title { font-size: 20px; }
        }
        @media (min-width: 992px) {
          .ca-blog-heading { font-size: 32px; }
          .ca-blog-card { height: 500px; }
          .ca-blog-card-title { font-size: 24px; }
          .ca-blog-nav-prev { left: -22px; }
          .ca-blog-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
