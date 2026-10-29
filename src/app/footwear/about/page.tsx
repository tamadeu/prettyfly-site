'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';
import { FootwearInstagram } from '@/features/footwear/components/FootwearInstagram';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fwa-video-section">
      <div className="fwa-video-grid">
        <div className="fwa-video-text">
          <div className="fwa-video-text-inner">
            <h2 className="fwa-video-title">From last to laces</h2>
            <p className="fwa-video-lead">
              Every pair starts on a hand-shaped last and ends with a real-world wear test. See how we engineer all-day comfort and lasting style into every shoe we ship.
            </p>
            <div className="fwa-video-features">
              {[
                { title: 'All-day cushioning', desc: 'Each pair is built on a responsive foam midsole tuned for thousands of steps — tested mile after mile.' },
                { title: 'Premium materials only', desc: 'We use full-grain leather, breathable engineered knit, and durable rubber outsoles — nothing cheap.' },
                { title: 'True-to-size fit guarantee', desc: 'Every last is graded across the full size run so your usual size fits right out of the box.' },
              ].map((item, i) => (
                <div key={i} className="fwa-video-feature">
                  <div className="fwa-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="fwa-video-feature-title">{item.title}</p>
                    <p className="fwa-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fwa-video-media">
          {!playing ? (
            <>
              <Image src="/footwear/products/products3.webp" alt="Video thumbnail" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <button
                onClick={() => setPlaying(true)}
                className="fwa-play-btn"
                style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  zIndex: 5, background: '#fff', border: '2px solid #222',
                  cursor: 'pointer', padding: 0,
                  width: '8rem', height: '8rem', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)', color: '#222',
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
              title="About our footwear"
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

export default function FootwearAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/footwear-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="fwa-sections">
        <div className="container-main">
          <div className="fwa-hero-grid">
            <div className="fwa-hero-media">
              <div className="fwa-hero-img">
                <Image
                  src="/footwear/banner/banner-1.webp"
                  alt="About Footwear Shop"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="50vw"
                />
              </div>
            </div>

            <div className="fwa-hero-text">
              <h2 className="fwa-hero-title">Comfort Meets Style</h2>
              <p className="fwa-hero-body">
                We started Footwear Shop because we believed you should never have to choose between comfort and looking great. Every pair we make is a commitment to both — no compromises, from your morning commute to a night out.
              </p>
              <Link href="/shop" className="fwa-hero-cta"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111'; }}
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-main">
          <h2 className="fwa-multi-heading">What we stand for</h2>
          <div className="fwa-multi-grid">
            {[
              { img: '/footwear/products/products1.webp', title: 'All-Day Comfort', desc: 'Our shoes are built on cushioned midsoles tuned for thousands of steps — so you can stay on your feet without the ache.' },
              { img: '/footwear/products/products3.webp', title: 'Premium Design', desc: 'Beautiful silhouettes that reflect who you are. Made with quality leathers, breathable knits, and thoughtful finishing.' },
              { img: '/footwear/products/products6.webp', title: 'Perfect Fit', desc: 'Every last is graded across the full size run so buttons of comfort align — true to size, secure, and supportive.' },
            ].map((card) => (
              <div key={card.title} className="fwa-multi-card">
                <div className="fwa-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'contain' }} sizes="33vw" />
                </div>
                <h3 className="fwa-multi-card-title">{card.title}</h3>
                <p className="fwa-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <VideoBannerSection />

        <div className="fwa-testimonial-wrap">
          <TestimonialSection />
        </div>

        <div className="fwa-marquee-wrap">
          <Marquee text="PREMIUM FOOTWEAR · FREE SHIPPING · 30-DAY RETURNS · ALL-DAY COMFORT" />
        </div>

        <div className="fwa-gallery-wrap">
          <FootwearInstagram />
        </div>
      </div>

      <style>{`
        .fwa-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .fwa-hero-media { position: relative; }
        .fwa-hero-img {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          background-color: #f5f5f5;
          border-radius: 10px;
        }
        .fwa-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .fwa-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .fwa-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 250ms ease;
        }

        .fwa-video-section {
          background-color: #f9f9f9;
          margin: 0;
        }
        .fwa-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: stretch;
        }
        .fwa-video-text { display: flex; align-items: center; }
        .fwa-video-text-inner { padding: clamp(40px, 6vw, 80px); }
        .fwa-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
          margin-bottom: 16px;
        }
        .fwa-video-lead {
          font-size: 17px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .fwa-video-features { display: flex; flex-direction: column; gap: 20px; }
        .fwa-video-feature { display: flex; align-items: flex-start; gap: 14px; }
        .fwa-video-feature-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #222;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .fwa-video-feature-title { font-size: 18px; font-weight: 600; color: #222; margin-bottom: 4px; }
        .fwa-video-feature-desc { font-size: 15px; color: #777; line-height: 1.6; }
        .fwa-video-media {
          position: relative;
          height: 600px;
          overflow: hidden;
          background-color: #f0f0f0;
        }
        .fwa-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }

        .fwa-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .fwa-multi-card { text-align: center; }
        .fwa-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .fwa-multi-card-title { font-size: 24px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .fwa-multi-card-desc { font-size: 16px; color: #777; line-height: 1.7; max-width: 340px; margin: 0 auto; }
        .fwa-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .fwa-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .fwa-testimonial-wrap section { background-color: #fff !important; }
        .fwa-marquee-wrap section { background-color: #fff !important; }

        @media (min-width: 992px) {
          .fwa-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .fwa-hero-text { padding-left: 70px; }
          .fwa-video-grid { grid-template-columns: 1fr 1fr; }
          .fwa-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 749px) {
          .fwa-hero-img { height: 320px; }
          .fwa-hero-title { font-size: clamp(26px, 7vw, 40px); }
          .fwa-video-media { order: -1; height: 300px; }
          .fwa-video-title { font-size: clamp(22px, 5.5vw, 38px); }
          .fwa-multi-heading { font-size: clamp(26px, 5.5vw, 40px); margin-bottom: clamp(30px, 6vw, 50px); }
          .fwa-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
      `}</style>
    </>
  );
}
