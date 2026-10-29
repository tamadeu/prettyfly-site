'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="pg-about-video-section">
      <div className="pg-about-video-grid">
        <div className="pg-about-video-text">
          <div className="pg-about-video-text-inner">
            <h2 className="pg-about-video-title">From seed to doorstep</h2>
            <p className="pg-about-video-lead">
              See how we source premium plants from certified nurseries, quality-check every shipment in our climate-controlled facilities, and deliver them to your door with expert care and fast, trackable shipping.
            </p>
            <div className="pg-about-video-features">
              {[
                { title: 'Expert sourcing', desc: 'Every plant is grown by certified nurseries and passes a full health inspection before reaching our distribution centre.' },
                { title: 'Alive on arrival', desc: 'We guarantee every plant arrives healthy and true to its description — or we replace it free of charge, no questions asked.' },
                { title: 'Eco-friendly packaging', desc: 'All plants ship in recycled, compostable packaging designed to keep roots moist and foliage protected in transit.' },
              ].map((item, i) => (
                <div key={i} className="pg-about-video-feature">
                  <div className="pg-about-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="pg-about-video-feature-title">{item.title}</p>
                    <p className="pg-about-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pg-about-video-media">
          {!playing ? (
            <>
              <Image src="/plant-and-garden/tab/tab2.webp" alt="Video thumbnail" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <button
                onClick={() => setPlaying(true)}
                className="pg-about-play-btn"
                style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  zIndex: 5, background: '#fff', border: '2px solid #222',
                  cursor: 'pointer', padding: 0,
                  width: '8rem', height: '8rem', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  color: '#222',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z" />
                </svg>
              </button>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/a2zZzAr1e_c?autoplay=1&rel=0"
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function PlantGardenAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f7f2', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/plant-garden-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="pg-about-sections">
        {/* Hero — Image with Text */}
        <div className="container-main">
          <div className="pg-about-hero-grid">
            <div className="pg-about-hero-media">
              <div className="pg-about-hero-img">
                <Image src="/plant-and-garden/tab/tab1.webp" alt="About Green Garden Co." fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="50vw" />
              </div>
              <div className="pg-about-hero-badge">
                <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'pgAboutRotateText 10s linear infinite' }}>
                  <defs>
                    <path id="pgAboutCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  </defs>
                  <text fontSize="9" fontWeight="600" fill="#3a7d44" letterSpacing="4.5">
                    <textPath href="#pgAboutCirclePath">Grow Green Live Better</textPath>
                  </text>
                </svg>
                <div className="pg-about-hero-badge-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#3a7d44">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-13 2S2 19.5 2 22h2c.5-3 2.5-9 13-14Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pg-about-hero-text">
              <h2 className="pg-about-hero-title">Plants That Thrive, Gardens That Inspire</h2>
              <p className="pg-about-hero-body">
                We started Green Garden Co. because every home deserves a touch of green. Our curated collection of indoor and outdoor plants, quality pots, garden tools, and seeds is sourced from specialist nurseries — selected for health, variety, and longevity so your garden grows the way you envision it.
              </p>
              <Link
                href="/plant-garden/shop"
                className="pg-about-hero-cta"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2d6235'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#3a7d44'; }}
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Multicolumn — "What we stand for" */}
        <div className="container-main">
          <h2 className="pg-about-multi-heading">What we stand for</h2>
          <div className="pg-about-multi-grid">
            {[
              {
                img: '/plant-and-garden/categories-mega-menu/categories-mega-menu1.webp',
                title: 'Healthy Plants',
                desc: 'Every plant is inspected by our horticulturists before shipping — root system, foliage health, and pest-free certification all checked.',
              },
              {
                img: '/plant-and-garden/categories-mega-menu/categories-mega-menu2.webp',
                title: 'Alive on Arrival',
                desc: 'Our climate-aware packaging keeps plants moist, ventilated, and protected from temperature swings during transit — every time.',
              },
              {
                img: '/plant-and-garden/categories-mega-menu/categories-mega-menu3.webp',
                title: 'Expert Guidance',
                desc: 'Each plant ships with a care card, and our team of plant experts is available to answer any question from watering schedules to repotting.',
              },
            ].map((card) => (
              <div key={card.title} className="pg-about-multi-card">
                <div className="pg-about-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                </div>
                <h3 className="pg-about-multi-card-title">{card.title}</h3>
                <p className="pg-about-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Banner */}
        <VideoBannerSection />

        {/* Testimonials */}
        <div className="pg-about-testimonial-wrap">
          <TestimonialSection />
        </div>

        {/* Marquee */}
        <div className="pg-about-marquee-wrap">
          <Marquee text="Welcome to store" />
        </div>
      </div>

      <style>{`
        .pg-about-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .pg-about-hero-media { position: relative; }
        .pg-about-hero-img {
          position: relative;
          width: 100%;
          height: 510px;
          overflow: hidden;
          background-color: #f5f7f2;
        }
        .pg-about-hero-badge {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pg-about-hero-badge-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .pg-about-hero-text { padding-left: 0; }
        .pg-about-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .pg-about-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .pg-about-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #3a7d44;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease;
        }
        .pg-about-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          align-items: stretch;
        }
        .pg-about-video-section {
          background-color: #f5f7f2;
          margin: 0;
        }
        .pg-about-video-text {
          display: flex;
          align-items: center;
        }
        .pg-about-video-text-inner { padding: 60px 80px 60px 100px; }
        .pg-about-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
          margin-bottom: 16px;
        }
        .pg-about-video-lead {
          font-size: 17px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .pg-about-video-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pg-about-video-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .pg-about-video-feature-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #3a7d44;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .pg-about-video-feature-icon svg { stroke: #3a7d44; }
        .pg-about-video-feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
        }
        .pg-about-video-feature-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
        }
        .pg-about-video-media {
          position: relative;
          height: 650px;
          overflow: hidden;
          background-color: #e8eef0;
        }
        .pg-about-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .pg-about-multi-card { text-align: center; }
        .pg-about-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
        }
        .pg-about-multi-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
        }
        .pg-about-multi-card-desc {
          font-size: 16px;
          color: #777;
          line-height: 1.7;
          max-width: 340px;
          margin: 0 auto;
        }
        .pg-about-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        @media (min-width: 992px) {
          .pg-about-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .pg-about-hero-text { padding-left: 70px; }
          .pg-about-video-grid { grid-template-columns: 1fr 1fr; }
          .pg-about-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 991px) {
          .pg-about-hero-badge {
            top: -70px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          .pg-about-video-media { order: -1; }
          .pg-about-video-text-inner {
            padding: clamp(40px, 6vw, 60px) clamp(32px, 6vw, 80px);
          }
        }
        @media (max-width: 749px) {
          .pg-about-hero-img { height: 350px; }
          .pg-about-hero-title { font-size: clamp(28px, 7vw, 40px); }
          .pg-about-hero-body { font-size: clamp(14px, 4vw, 17px); }
          .pg-about-hero-cta {
            padding: clamp(12px, 3.5vw, 16px) clamp(20px, 5vw, 32px);
            font-size: clamp(13px, 3.5vw, 15px);
          }
          .pg-about-video-media { height: 350px; }
          .pg-about-video-text-inner {
            padding: clamp(24px, 6vw, 40px) clamp(16px, 5vw, 32px);
          }
          .pg-about-video-title {
            font-size: clamp(22px, 5.5vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
          }
          .pg-about-video-lead {
            font-size: clamp(13px, 3.8vw, 17px);
            margin-bottom: clamp(20px, 5vw, 34px);
          }
          .pg-about-video-features { gap: clamp(12px, 3vw, 20px); }
          .pg-about-video-feature-icon {
            width: clamp(26px, 6vw, 32px);
            height: clamp(26px, 6vw, 32px);
          }
          .pg-about-video-feature-title { font-size: clamp(14px, 4vw, 18px); }
          .pg-about-video-feature-desc { font-size: clamp(12px, 3.5vw, 15px); }
          .pg-about-multi-heading {
            font-size: clamp(26px, 5.5vw, 40px);
            margin-bottom: clamp(30px, 6vw, 50px);
          }
          .pg-about-multi-card-title { font-size: clamp(18px, 4.5vw, 24px); }
          .pg-about-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
        @keyframes pgAboutRotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .pg-about-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }
        .pg-about-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .pg-about-testimonial-wrap section {
          background-color: #fff !important;
          min-height: clamp(320px, 100vw, 750px);
          padding-bottom: 0 !important;
        }
        .pg-about-marquee-wrap section { background-color: #fff !important; }
      `}</style>
    </>
  );
}
