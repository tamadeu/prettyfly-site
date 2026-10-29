'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

/* Self-contained "Customers Feedback" section — fully isolated glasses data
   and avatars (from /glasses/instagram). Mirrors the shared TestimonialSection
   layout: avatar → name → role → text → stars + faint chat-quote glyph. */

interface Feedback {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

const feedback: Feedback[] = [
  {
    id: 'gl-fb-1',
    name: 'Darakha Eman',
    role: 'Verified Buyer',
    avatar: '/glasses/instagram/instagram-1.avif',
    rating: 5,
    text: 'Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.',
  },
  {
    id: 'gl-fb-2',
    name: 'Jhone Doe',
    role: 'Verified Buyer',
    avatar: '/glasses/instagram/instagram-2.avif',
    rating: 5,
    text: 'Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.',
  },
  {
    id: 'gl-fb-3',
    name: 'Samule Das',
    role: 'Verified Buyer',
    avatar: '/glasses/instagram/instagram-3.avif',
    rating: 5,
    text: 'Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.',
  },
];

function ChatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="46" viewBox="0 0 52.472 45.687" style={{ opacity: 0.11 }}>
      <path d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z" transform="translate(-62.5 -118.975)" fill="currentColor" />
    </svg>
  );
}

const TOTAL_DOTS = 4;

export function GlassesTestimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = feedback.length;
  /* Doubled so Swiper `loop` (needed for continuous autoplay) has enough
     slides to cycle even when 3 are shown per view on desktop. */
  const carousel = [...feedback, ...feedback];
  const currentPage = Math.min(TOTAL_DOTS - 1, Math.floor((activeIndex * TOTAL_DOTS) / Math.max(1, total)));
  const goToPage = (page: number) => {
    const target = Math.round((page * total) / TOTAL_DOTS);
    swiperInstance?.slideToLoop(Math.min(target, total - 1));
  };

  return (
    <section style={{ backgroundColor: '#fff', padding: 'clamp(48px, 6vw, 80px) 0' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 600, color: '#222' }}>Customers Feedback</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          slidesPerView={1}
          breakpoints={{
            750: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          spaceBetween={24}
          speed={600}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          style={{ overflow: 'hidden' }}
        >
          {carousel.map((item, idx) => (
            <SwiperSlide key={`${item.id}-${idx}`} style={{ height: 'auto' }}>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  padding: '40px 30px 30px',
                  textAlign: 'center',
                  position: 'relative',
                  height: '360px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 20px',
                    border: '3px solid #f0f0f0',
                    position: 'relative',
                    backgroundColor: '#f5f5f5',
                    flexShrink: 0,
                  }}
                >
                  <Image src={item.avatar} alt={item.name} fill style={{ objectFit: 'cover' }} sizes="90px" />
                </div>

                <h4 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '4px' }}>{item.name}</h4>
                <p style={{ fontSize: '15px', color: '#999', marginBottom: '16px' }}>{item.role}</p>
                <p style={{ fontSize: '16px', color: '#888', lineHeight: '28px', flex: 1 }}>{item.text}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                  <div style={{ display: 'flex', gap: '4px', flex: 1, justifyContent: 'center' }}>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} style={{ fontSize: '22px', color: si < item.rating ? '#F5C518' : '#ddd' }}>★</span>
                    ))}
                  </div>
                  <div style={{ color: '#ccc', flexShrink: 0 }}>
                    <ChatIcon />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '36px' }}>
          {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: currentPage === i ? '16px' : '10px',
                height: currentPage === i ? '16px' : '10px',
                borderRadius: '50%',
                border: currentPage === i ? '2px solid #222' : '2px solid #ccc',
                backgroundColor: 'transparent',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
