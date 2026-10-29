'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

function IconArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const TABS = [
  {
    id: 1,
    year: '2007',
    image: '/plumbing-supplies/img-with-text-slider/img-with-text-slider-1.webp',
    heading: 'Enter the market',
    subheading: 'Product Range Expansion',
    body: 'Successfully expanded the inventory to include over 1,000 high-quality plumbing supplies, from pipes and fittings to fixtures and tools, catering to both DIY enthusiasts and professional plumbers.',
  },
  {
    id: 2,
    year: '2012',
    image: '/plumbing-supplies/img-with-text-slider/img-with-text-slider-2.webp',
    heading: 'Expanding Our Range',
    subheading: 'A Growing Catalog',
    body: 'By 2012 we had grown into a full-service supplier — taps, valves, pipes, fittings and fasteners — serving both homeowners and busy contractors with fast, dependable delivery nationwide.',
  },
  {
    id: 3,
    year: '2014',
    image: '/plumbing-supplies/img-with-text-slider/img-with-text-slider-3.webp',
    heading: 'Trusted by Professionals',
    subheading: 'Industry Recognition',
    body: 'Our commitment to quality earned the trust of professional plumbers across the country. In 2014 we became a preferred partner for repair teams who need parts that last the first time.',
  },
  {
    id: 4,
    year: '2022',
    image: '/plumbing-supplies/img-with-text-slider/img-with-text-slider-4.webp',
    heading: 'Exceptional Customer Service',
    subheading: 'Customers Satisfaction',
    body: 'Achieved a customer satisfaction rating of over 95%, recognized for outstanding service through various channels, quick response times, and a hassle-free return policy.',
  },
];

export function PlumbingMilestones() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pltl-section">
      <div className="container-main">
        {/* Heading */}
        <div className="pltl-head">
          <h2 className="pltl-heading">Remarkable milestones</h2>
          <p className="pltl-sub">
            Our designs effortlessly combine the exceptional features and performance of active
            sportswear with the comfort and ease needed for casual, everyday walks and strolls.
          </p>
        </div>

        {/* Timeline progress row */}
        <div className="pltl-timeline">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              className={`pltl-step ${i === active ? 'pltl-step-active' : ''}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
            >
              <span className="pltl-dot">{i + 1}</span>
              <span className="pltl-year">{t.year}</span>
            </button>
          ))}
        </div>

        {/* Slider */}
        <Swiper
          onSwiper={(s) => { swiperRef.current = s; }}
          onSlideChange={(s) => setActive(s.realIndex)}
          slidesPerView={1}
          initialSlide={0}
          loop
          className="pltl-swiper"
        >
          {TABS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="pltl-content">
                <div className="pltl-img-col">
                  <div className="pltl-img-wrap">
                    <Image
                      src={t.image}
                      alt={t.heading}
                      fill
                      className="pltl-img"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 749px) 90vw, 45vw"
                    />
                  </div>
                </div>

                <div className="pltl-text">
                  <h3 className="pltl-text-title">{t.heading}</h3>
                  <p className="pltl-text-sub">{t.subheading}</p>
                  <p className="pltl-text-body">{t.body}</p>
                  <Link href="/shop" className="pltl-cta">
                    Explore More
                    <IconArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .pltl-section { padding: 0; background: #fff; }
        .pltl-head { text-align: center; max-width: 640px; margin: 0 auto clamp(36px, 5vw, 56px); }
        .pltl-heading { font-size: clamp(26px, 4vw, 38px); font-weight: 700; color: #1c2230; margin-bottom: 14px; }
        .pltl-sub { font-size: 15px; color: #6b7079; line-height: 1.7; }

        .pltl-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          margin-bottom: clamp(40px, 5vw, 60px);
        }
        .pltl-timeline::before {
          content: '';
          position: absolute;
          top: 18px;
          left: 12.5%;
          right: 12.5%;
          border-top: 2px dotted #b7c2d2;
          z-index: 0;
        }
        .pltl-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          z-index: 1;
          padding: 0;
        }
        .pltl-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #cfcfcf;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 500;
          color: #999;
          transition: all 0.25s ease;
        }
        .pltl-step-active .pltl-dot { border-color: #0a2540; background: #0a2540; color: #fff; }
        .pltl-year {
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #8a9199;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .pltl-step-active .pltl-year { color: #1c2230; font-weight: 700; }

        .pltl-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 4vw, 64px);
          align-items: center;
        }
        .pltl-img-col { min-width: 0; }
        .pltl-img-wrap {
          position: relative;
          height: 480px;
          overflow: hidden;
          border-radius: 0;
          background: #f0f0f0;
        }
        .pltl-img { transition: transform 0.6s ease; }
        .pltl-img-wrap:hover .pltl-img { transform: scale(1.05); }
        .pltl-text { display: flex; flex-direction: column; max-width: 490px; }
        .pltl-text-title { font-size: clamp(22px, 2.6vw, 28px); font-weight: 700; color: #1c2230; margin: 0 0 12px; line-height: 1.2; }
        .pltl-text-sub { font-size: clamp(17px, 2vw, 20px); font-weight: 500; color: #4a5563; margin: 0 0 28px; }
        .pltl-text-body { font-size: 15px; color: #7a828c; margin: 0 0 26px; line-height: 1.7; }
        .pltl-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0a2540;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 15px 30px;
          border-radius: 2px;
          text-decoration: none;
          width: fit-content;
          transition: background 0.25s ease;
        }
        .pltl-cta:hover { background: #061a30; }

        @media (max-width: 991px) {
          .pltl-content { grid-template-columns: 1fr; gap: 32px; }
          .pltl-img-wrap { height: clamp(320px, 55vw, 480px); }
          .pltl-text { max-width: none; }
        }
        @media (max-width: 749px) {
          .pltl-timeline { grid-template-columns: repeat(4, 1fr); }
          .pltl-timeline::before { left: 12.5%; right: 12.5%; }
          .pltl-year { font-size: 12px; }
        }
      `}</style>
    </section>
  );
}
