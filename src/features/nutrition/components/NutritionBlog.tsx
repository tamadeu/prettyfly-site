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

interface NutritionBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const data: NutritionBlogPost[] = [
  { id: 'nb-1', title: 'How daily protein intake supports strength and recovery', slug: 'daily-protein-intake', image: '/nutrition/blog/blog1.webp' },
  { id: 'nb-2', title: 'The science behind pre-workout stimulants, explained', slug: 'pre-workout-science', image: '/nutrition/blog/blog2.webp' },
  { id: 'nb-3', title: 'Mass gainers vs whey protein — which should you pick?', slug: 'mass-gainers-vs-whey', image: '/nutrition/blog/blog3.webp' },
  { id: 'nb-4', title: 'Clean-label supplements: what to look for on the jar', slug: 'clean-label-supplements', image: '/nutrition/blog/blog1.webp' },
  { id: 'nb-5', title: 'Everyday vitamins that actually move the needle', slug: 'everyday-vitamins', image: '/nutrition/blog/blog2.webp' },
  { id: 'nb-6', title: 'Fueling endurance: carbs, hydration, and recovery stacks', slug: 'fueling-endurance', image: '/nutrition/blog/blog3.webp' },
];

export function NutritionBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="nb-blog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#222' }}>Latest Blog</h2>
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
                  <div className="nb-blog-card" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', height: '500px', display: 'flex', flexDirection: 'column' }}>
                    <Link href={`/nutrition/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="nb-blog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link
                        href={`/nutrition/blog/${post.slug}`}
                        className="nb-blog-card-title"
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
                          href={`/nutrition/blog/${post.slug}`}
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="nb-blog-nav-prev">
            <IconArrowLeftS size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="nb-blog-nav-next">
            <IconArrowRightS size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .nb-blog-card:hover .nb-blog-card-img {
          transform: scale(1.05);
        }

        .nb-blog-card:hover .nb-blog-card-title {
          background-size: 100% 1.5px !important;
        }

        .nb-blog-nav-prev,
        .nb-blog-nav-next {
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
        .nb-blog-nav-prev { left: -22px; transform: translateY(-50%) translateX(-20px); }
        .nb-blog-nav-next { right: -22px; transform: translateY(-50%) translateX(20px); }

        .nb-blog-section:hover .nb-blog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .nb-blog-section:hover .nb-blog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .nb-blog-nav-prev:hover,
        .nb-blog-nav-next:hover { background-color: #000; border-color: #000; color: #fff; }
      `}</style>
    </section>
  );
}
