'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="ca-video-section">
      <div className="ca-video-grid">
        <div className="ca-video-text">
          <div className="ca-video-text-inner">
            <h2 className="ca-video-title">From warehouse to driveway</h2>
            <p className="ca-video-lead">
              See how we source genuine and aftermarket parts from certified manufacturers, quality-check every shipment in our fulfillment centers, and deliver them to your door with fast, trackable shipping.
            </p>
            <div className="ca-video-features">
              {[
                { title: 'Certified sourcing', desc: 'Every part is sourced from certified manufacturers and passes multi-point inspection before reaching our warehouse.' },
                { title: 'Fitment guaranteed', desc: 'We verify compatibility data for every vehicle and stand behind every fitment claim with a full return guarantee.' },
                { title: 'Fast, trackable delivery', desc: 'Same-day dispatch on most orders placed before 2PM. Real-time tracking from warehouse to your driveway.' },
              ].map((item, i) => (
                <div key={i} className="ca-video-feature">
                  <div className="ca-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="ca-video-feature-title">{item.title}</p>
                    <p className="ca-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ca-video-media">
          {!playing ? (
            <>
              <Image src="/car-accessories/banner/banner1.webp" alt="Video thumbnail" fill style={{ objectFit: 'cover' }} sizes="50vw" />

              <button
                onClick={() => setPlaying(true)}
                className="ca-about-play-btn"
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

export default function CarAccessoriesAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: '#eef4fa', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/car-accessories-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="about-sections">
        {/* ══════════════════════════════════
            2. HERO — Image with Text
           ══════════════════════════════════ */}
        <div className="container-main">
          <div className="ca-hero-grid">
            <div className="ca-hero-media">
              <div className="ca-hero-img">
                <Image src="/car-accessories/shop-mega-menu/shop-mega-menu1.webp" alt="About AutoPro" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="50vw" />
              </div>

              <div className="ca-hero-badge">
                <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'aboutRotateText 10s linear infinite' }}>
                  <defs>
                    <path id="caAboutCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  </defs>
                  <text fontSize="9" fontWeight="600" fill="#222" letterSpacing="5.5">
                    <textPath href="#caAboutCirclePath">Quality Parts Fast Delivery</textPath>
                  </text>
                </svg>
                <div className="ca-hero-badge-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ca-hero-text">
              <h2 className="ca-hero-title">Quality Parts for Every Vehicle</h2>
              <p className="ca-hero-body">
                We started AutoPro because every driver deserves reliable, high-quality auto parts without the dealership markup. Our catalog covers everything from everyday accessories to performance upgrades — all tested for fit, quality, and longevity.
              </p>
              <Link
                href="/car-accessories/shop"
                className="ca-hero-cta"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#5b72d6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#222'; }}
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════
            3. MULTICOLUMN — "What we stand for"
           ══════════════════════════════════ */}
        <div className="container-main">
          <h2 className="ca-multi-heading">What we stand for</h2>
          <div className="ca-multi-grid">
            {[
              { img: '/car-accessories/categories-mega-menu/categories-mega-menu2.webp', title: 'OEM Quality', desc: 'Every part meets or exceeds original equipment specifications — from fit and finish to safety standards.' },
              { img: '/car-accessories/categories-mega-menu/categories-mega-menu5.webp', title: 'Fitment Guarantee', desc: 'We verify compatibility for every year, make, and model. If it does not fit, we cover return shipping — no questions asked.' },
              { img: '/car-accessories/categories-mega-menu/categories-mega-menu1.webp', title: 'Expert Support', desc: 'Our team of automotive specialists is here to help you find the right part and answer technical questions before you order.' },
            ].map((card) => (
              <div key={card.title} className="ca-multi-card">
                <div className="ca-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                </div>
                <h3 className="ca-multi-card-title">{card.title}</h3>
                <p className="ca-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            4. VIDEO BANNER
           ══════════════════════════════════ */}
        <VideoBannerSection />

        {/* ══════════════════════════════════
            5. TESTIMONIALS
           ══════════════════════════════════ */}
        <div className="about-testimonial-wrap">
          <TestimonialSection />
        </div>

        {/* ══════════════════════════════════
            6. MARQUEE
           ══════════════════════════════════ */}
        <div className="about-marquee-wrap">
          <Marquee text="Welcome to store" />
        </div>
      </div>

      <style>{`
        .ca-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .ca-hero-media { position: relative; }
        .ca-hero-img {
          position: relative;
          width: 100%;
          height: 510px;
          overflow: hidden;
          background-color: #eef4fa;
        }
        .ca-hero-badge {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ca-hero-badge-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #222;
        }
        .ca-hero-text { padding-left: 0; }
        .ca-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .ca-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .ca-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #222;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease;
        }
        .ca-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          align-items: stretch;
        }
        .ca-video-section {
          background-color: rgb(247, 248, 252);
          margin: 0;
        }
        .ca-video-text {
          display: flex;
          align-items: center;
        }
        .ca-video-text-inner { padding: 60px 80px 60px 100px; }
        .ca-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
          margin-bottom: 16px;
        }
        .ca-video-lead {
          font-size: 17px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .ca-video-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ca-video-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .ca-video-feature-icon {
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
        .ca-video-feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
        }
        .ca-video-feature-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
        }
        .ca-video-media {
          position: relative;
          height: 650px;
          overflow: hidden;
          background-color: #f0f0f0;
        }
        .ca-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .ca-multi-card { text-align: center; }
        .ca-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
        }
        .ca-multi-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
        }
        .ca-multi-card-desc {
          font-size: 16px;
          color: #777;
          line-height: 1.7;
          max-width: 340px;
          margin: 0 auto;
        }
        .ca-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        @media (min-width: 992px) {
          .ca-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .ca-hero-text { padding-left: 70px; }
          .ca-video-grid { grid-template-columns: 1fr 1fr; }
          .ca-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 991px) {
          .ca-hero-badge {
            top: -70px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          .ca-video-media { order: -1; }
          .ca-video-text-inner {
            padding: clamp(40px, 6vw, 60px) clamp(32px, 6vw, 80px);
          }
        }
        @media (max-width: 749px) {
          .ca-hero-img { height: 350px; }
          .ca-hero-title { font-size: clamp(28px, 7vw, 40px); }
          .ca-hero-body { font-size: clamp(14px, 4vw, 17px); }
          .ca-hero-cta {
            padding: clamp(12px, 3.5vw, 16px) clamp(20px, 5vw, 32px);
            font-size: clamp(13px, 3.5vw, 15px);
          }
          .ca-video-media { height: 350px; }
          .ca-video-text-inner {
            padding: clamp(24px, 6vw, 40px) clamp(16px, 5vw, 32px);
          }
          .ca-video-title {
            font-size: clamp(22px, 5.5vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
          }
          .ca-video-lead {
            font-size: clamp(13px, 3.8vw, 17px);
            margin-bottom: clamp(20px, 5vw, 34px);
          }
          .ca-video-features { gap: clamp(12px, 3vw, 20px); }
          .ca-video-feature-icon {
            width: clamp(26px, 6vw, 32px);
            height: clamp(26px, 6vw, 32px);
          }
          .ca-video-feature-title { font-size: clamp(14px, 4vw, 18px); }
          .ca-video-feature-desc { font-size: clamp(12px, 3.5vw, 15px); }
          .ca-multi-heading {
            font-size: clamp(26px, 5.5vw, 40px);
            margin-bottom: clamp(30px, 6vw, 50px);
          }
          .ca-multi-card-title { font-size: clamp(18px, 4.5vw, 24px); }
          .about-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
        @keyframes aboutRotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ca-about-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }
        .about-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .about-testimonial-wrap section {
          background-color: #fff !important;
          min-height: clamp(320px, 100vw, 750px);
          padding-bottom: 0 !important;
        }
        .about-marquee-wrap section { background-color: #fff !important; }
      `}</style>
    </>
  );
}
