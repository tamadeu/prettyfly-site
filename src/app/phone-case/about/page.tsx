'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';
import { PCInstagram } from '@/features/phone-case/components/PCInstagram';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="pca-video-section">
      <div className="pca-video-grid">
        <div className="pca-video-text">
          <div className="pca-video-text-inner">
            <h2 className="pca-video-title">From design to delivery</h2>
            <p className="pca-video-lead">
              Every case starts with a design sketch and ends with rigorous drop testing. See how we engineer protection and style into every product we ship.
            </p>
            <div className="pca-video-features">
              {[
                { title: 'Military-grade protection', desc: 'Each case is tested to MIL-STD-810G standards — drop tested from multiple angles and heights.' },
                { title: 'Premium materials only', desc: 'We use aerospace-grade polycarbonate, genuine leather, and flexible TPU — nothing cheap.' },
                { title: 'Precision fit guarantee', desc: 'Every cutout is laser-calibrated to ±0.1mm — buttons click, ports align, cameras are unobstructed.' },
              ].map((item, i) => (
                <div key={i} className="pca-video-feature">
                  <div className="pca-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="pca-video-feature-title">{item.title}</p>
                    <p className="pca-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pca-video-media">
          {!playing ? (
            <>
              <Image src="/phone-case/products/products3.webp" alt="Video thumbnail" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <button
                onClick={() => setPlaying(true)}
                className="pca-play-btn"
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
              title="About our phone cases"
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

export default function PhoneCaseAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/phone-case-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="pca-sections">
        <div className="container-main">
          <div className="pca-hero-grid">
            <div className="pca-hero-media">
              <div className="pca-hero-img">
                <Image
                  src="/phone-case/products/products5.webp"
                  alt="About Phone Case Shop"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="50vw"
                />
              </div>
            </div>

            <div className="pca-hero-text">
              <h2 className="pca-hero-title">Protection Meets Style</h2>
              <p className="pca-hero-body">
                We started Phone Case Shop because we believed you should never have to choose between protecting your device and expressing your personality. Every case we make is a commitment to both — no compromises.
              </p>
              <Link href="/phone-case/shop" className="pca-hero-cta"
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
          <h2 className="pca-multi-heading">What we stand for</h2>
          <div className="pca-multi-grid">
            {[
              { img: '/phone-case/products/products1.webp', title: 'Drop Protection', desc: 'Our cases are tested to withstand 6-foot drops on concrete from every angle — so you can live life without fear.' },
              { img: '/phone-case/products/products3.webp', title: 'Premium Design', desc: 'Beautiful cases that reflect who you are. Made with precision-machined materials and thoughtful finishing touches.' },
              { img: '/phone-case/products/products6.webp', title: 'Perfect Fit', desc: 'Every model is laser-precision engineered so buttons click cleanly, ports align perfectly, and cameras stay clear.' },
            ].map((card) => (
              <div key={card.title} className="pca-multi-card">
                <div className="pca-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'contain' }} sizes="33vw" />
                </div>
                <h3 className="pca-multi-card-title">{card.title}</h3>
                <p className="pca-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <VideoBannerSection />

        <div className="pca-testimonial-wrap">
          <TestimonialSection />
        </div>

        <div className="pca-marquee-wrap">
          <Marquee text="PREMIUM PHONE CASES · FREE SHIPPING · 30-DAY RETURNS · MILITARY-GRADE PROTECTION" />
        </div>

        <div className="pca-gallery-wrap">
          <PCInstagram />
        </div>
      </div>

      <style>{`
        .pca-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .pca-hero-media { position: relative; }
        .pca-hero-img {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          background-color: #f5f5f5;
          border-radius: 10px;
        }
        .pca-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .pca-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .pca-hero-cta {
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

        .pca-video-section {
          background-color: #f9f9f9;
          margin: 0;
        }
        .pca-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: stretch;
        }
        .pca-video-text { display: flex; align-items: center; }
        .pca-video-text-inner { padding: clamp(40px, 6vw, 80px); }
        .pca-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
          margin-bottom: 16px;
        }
        .pca-video-lead {
          font-size: 17px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .pca-video-features { display: flex; flex-direction: column; gap: 20px; }
        .pca-video-feature { display: flex; align-items: flex-start; gap: 14px; }
        .pca-video-feature-icon {
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
        .pca-video-feature-title { font-size: 18px; font-weight: 600; color: #222; margin-bottom: 4px; }
        .pca-video-feature-desc { font-size: 15px; color: #777; line-height: 1.6; }
        .pca-video-media {
          position: relative;
          height: 600px;
          overflow: hidden;
          background-color: #f0f0f0;
        }
        .pca-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }

        .pca-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .pca-multi-card { text-align: center; }
        .pca-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .pca-multi-card-title { font-size: 24px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .pca-multi-card-desc { font-size: 16px; color: #777; line-height: 1.7; max-width: 340px; margin: 0 auto; }
        .pca-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .pca-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .pca-testimonial-wrap section { background-color: #fff !important; }
        .pca-marquee-wrap section { background-color: #fff !important; }

        @media (min-width: 992px) {
          .pca-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .pca-hero-text { padding-left: 70px; }
          .pca-video-grid { grid-template-columns: 1fr 1fr; }
          .pca-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 749px) {
          .pca-hero-img { height: 320px; }
          .pca-hero-title { font-size: clamp(26px, 7vw, 40px); }
          .pca-video-media { order: -1; height: 300px; }
          .pca-video-title { font-size: clamp(22px, 5.5vw, 38px); }
          .pca-multi-heading { font-size: clamp(26px, 5.5vw, 40px); margin-bottom: clamp(30px, 6vw, 50px); }
          .pca-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
      `}</style>
    </>
  );
}
