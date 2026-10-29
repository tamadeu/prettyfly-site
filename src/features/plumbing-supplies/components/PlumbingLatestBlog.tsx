'use client';

import { useRef } from 'react';
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

const posts = [
  { id: 1, slug: 'choosing-the-right-pipes-for-your-home', title: 'Choosing the Right Pipes for Your Home', image: '/plumbing-supplies/blog/blog-1.webp' },
  { id: 2, slug: 'essential-plumbing-tools-every-homeowner-needs', title: 'Essential Plumbing Tools Every Homeowner Needs', image: '/plumbing-supplies/blog/blog-2.webp' },
  { id: 3, slug: 'fixing-a-leaky-faucet-step-by-step', title: 'Fixing a Leaky Faucet: A Step-by-Step Guide', image: '/plumbing-supplies/blog/blog-3.webp' },
  { id: 4, slug: 'understanding-water-pressure-and-fittings', title: 'Understanding Water Pressure and Fittings', image: '/plumbing-supplies/blog/blog-1.webp' },
  { id: 5, slug: 'maintenance-tips-to-prevent-costly-repairs', title: 'Maintenance Tips to Prevent Costly Repairs', image: '/plumbing-supplies/blog/blog-2.webp' },
  { id: 6, slug: 'choosing-durable-valves-for-long-lasting-plumbing', title: 'Choosing Durable Valves for Long-Lasting Plumbing', image: '/plumbing-supplies/blog/blog-3.webp' },
];

export function PlumbingLatestBlog() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="plbl-section">
      <div className="container-main">
        <div className="plbl-heading-wrap">
          <h2 className="plbl-heading">Latest Blog</h2>
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
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="plbl-card">
                    <Link href="/blog" style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#e5e5e5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="plbl-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href="/blog" className="plbl-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href="/blog"
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

          <button onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous" className="plbl-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} aria-label="Next" className="plbl-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .plbl-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .plbl-heading {
          font-size: 24px;
          font-weight: 600;
          color: #222;
        }

        .plbl-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .plbl-card-title {
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

        .plbl-card:hover .plbl-card-img { transform: scale(1.05); }
        .plbl-card:hover .plbl-card-title { background-size: 100% 1.5px !important; }

        .plbl-nav-prev,
        .plbl-nav-next {
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
        .plbl-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .plbl-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .plbl-section:hover .plbl-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .plbl-section:hover .plbl-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .plbl-nav-prev:hover,
        .plbl-nav-next:hover { background-color: #0a2540; border-color: #0a2540; color: #fff; }

        @media (max-width: 749px) {
          .plbl-nav-prev { left: 8px; opacity: 1; pointer-events: auto; transform: translateY(-50%) translateX(0); }
          .plbl-nav-next { right: 8px; opacity: 1; pointer-events: auto; transform: translateY(-50%) translateX(0); }
        }

        @media (min-width: 750px) {
          .plbl-heading { font-size: 28px; }
          .plbl-card { height: 460px; }
          .plbl-card-title { font-size: 20px; }
        }
        @media (min-width: 992px) {
          .plbl-heading { font-size: 32px; }
          .plbl-card { height: 500px; }
          .plbl-card-title { font-size: 24px; }
          .plbl-nav-prev { left: -22px; }
          .plbl-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
