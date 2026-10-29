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

interface PetFoodBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const data: PetFoodBlogPost[] = [
  { id: 'pf-blog-1', title: 'How to Read a Pet Food Label: A Complete Guide', slug: 'how-to-read-pet-food-label', image: '/pet-food/blog/blog1.webp' },
  { id: 'pf-blog-2', title: 'Raw vs Kibble: What Science Says About Pet Nutrition', slug: 'raw-vs-kibble-nutrition', image: '/pet-food/blog/blog2.webp' },
  { id: 'pf-blog-3', title: "The Top 5 Ingredients to Avoid in Your Pet's Food", slug: 'ingredients-to-avoid-pet-food', image: '/pet-food/blog/blog3.webp' },
  { id: 'pf-blog-4', title: 'Senior Pets and Diet: Adjusting Nutrition as Your Pet Ages', slug: 'senior-pet-diet-nutrition', image: '/pet-food/blog/blog1.webp' },
  { id: 'pf-blog-5', title: 'Grain-Free Diets for Dogs: Benefits, Risks, and Alternatives', slug: 'grain-free-diets-dogs', image: '/pet-food/blog/blog2.webp' },
  { id: 'pf-blog-6', title: 'Homemade Pet Treats: Healthy Recipes Your Pet Will Love', slug: 'homemade-pet-treats-recipes', image: '/pet-food/blog/blog3.webp' },
];

export function PetFoodBlog() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="pfblog-section" style={{ backgroundColor: '#fff' }}>
      <div className="container-main">
        <div className="pfblog-heading-wrap">
          <h2 className="pfblog-heading">Latest Blog</h2>
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
                  <div className="pfblog-card">
                    <Link href={`/pet-food/blog/${post.slug}`} style={{ display: 'block', position: 'relative', flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="pfblog-card-img"
                        style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                        sizes="(max-width: 749px) 100vw, 33vw"
                      />
                    </Link>

                    <div style={{ padding: '20px 20px 24px' }}>
                      <Link href={`/pet-food/blog/${post.slug}`} className="pfblog-card-title">
                        {post.title}
                      </Link>
                      <div style={{ marginTop: '14px' }}>
                        <Link
                          href={`/pet-food/blog/${post.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'rgb(10, 66, 83)',
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

          <button onClick={() => swiperInstance?.slidePrev()} aria-label="Previous" className="pfblog-nav-prev">
            <IconArrowLeft size={20} />
          </button>
          <button onClick={() => swiperInstance?.slideNext()} aria-label="Next" className="pfblog-nav-next">
            <IconArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .pfblog-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .pfblog-heading {
          font-size: 24px;
          font-weight: 600;
          color: #222;
        }

        .pfblog-card {
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
          height: 420px;
          display: flex;
          flex-direction: column;
        }

        .pfblog-card-title {
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

        .pfblog-card:hover .pfblog-card-img { transform: scale(1.05); }
        .pfblog-card:hover .pfblog-card-title { background-size: 100% 1.5px !important; }

        .pfblog-nav-prev,
        .pfblog-nav-next {
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
        .pfblog-nav-prev { left: -10px; transform: translateY(-50%) translateX(-20px); }
        .pfblog-nav-next { right: -10px; transform: translateY(-50%) translateX(20px); }

        .pfblog-section:hover .pfblog-nav-prev { opacity: 1; transform: translateY(-50%) translateX(0); }
        .pfblog-section:hover .pfblog-nav-next { opacity: 1; transform: translateY(-50%) translateX(0); }

        .pfblog-nav-prev:hover,
        .pfblog-nav-next:hover { background-color: rgb(10,66,83); border-color: rgb(10,66,83); color: #fff; }

        @media (min-width: 750px) {
          .pfblog-heading { font-size: 28px; }
          .pfblog-card { height: 460px; }
          .pfblog-card-title { font-size: 20px; }
        }
        @media (min-width: 992px) {
          .pfblog-heading { font-size: 32px; }
          .pfblog-card { height: 500px; }
          .pfblog-card-title { font-size: 24px; }
          .pfblog-nav-prev { left: -22px; }
          .pfblog-nav-next { right: -22px; }
        }
      `}</style>
    </section>
  );
}
