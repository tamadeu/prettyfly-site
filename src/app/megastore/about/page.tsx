'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="ms-about-video-section">
      <div className="ms-about-video-grid">
        <div className="ms-about-video-text">
          <div className="ms-about-video-text-inner">
            <h2 className="ms-about-video-title">Engineered for everyday excellence</h2>
            <p className="ms-about-video-lead">
              See how we curate every device — from the silicon up. We pick clean, durable hardware, vet supplier QA, and ship with full warranty support so your gear works the day it arrives and the day after.
            </p>
            <div className="ms-about-video-features">
              {[
                { title: 'Hand-tested before ship', desc: 'Every premium-tier device powers up, runs self-test, and passes a manual checklist before it leaves the warehouse.' },
                { title: 'Authorised supply chain', desc: 'Sourced direct from manufacturers and authorised distributors — so your warranty registration always holds up.' },
                { title: 'White-glove delivery on big items', desc: 'Televisions, desktops, and home audio ship in cushioned cold-pack-equivalent crating with optional in-home setup.' },
              ].map((item, i) => (
                <div key={i} className="ms-about-video-feature">
                  <div className="ms-about-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="ms-about-video-feature-title">{item.title}</p>
                    <p className="ms-about-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ms-about-video-media">
          {!playing ? (
            <>
              <Image src="/megastore/banner/banner2.webp" alt="Video thumbnail" fill style={{ objectFit: 'cover' }} sizes="50vw" />

              <button
                onClick={() => setPlaying(true)}
                className="ms-about-play-btn"
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

const ICON_BASE = '/megastore/featured-categories';

export default function MegastoreAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/megastore-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="ms-about-sections">
        {/* Hero — Image with Text */}
        <div className="container-main">
          <div className="ms-about-hero-grid">
            <div className="ms-about-hero-media">
              <div className="ms-about-hero-img">
                <Image src="/megastore/banner/banner1.webp" alt="About our megastore" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="50vw" />
              </div>

              <div className="ms-about-hero-badge">
                <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'msAboutRotateText 10s linear infinite' }}>
                  <defs>
                    <path id="msAboutCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  </defs>
                  <text fontSize="9" fontWeight="600" fill="#222" letterSpacing="5.5">
                    <textPath href="#msAboutCirclePath">Premium Tech Trusted Brands</textPath>
                  </text>
                </svg>
                <div className="ms-about-hero-badge-heart">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.775 26.0125C15.35 26.1625 14.65 26.1625 14.225 26.0125C10.6 24.775 2.5 19.6125 2.5 10.8625C2.5 7 5.6125 3.875 9.45 3.875C11.725 3.875 13.7375 4.975 15 6.675C16.2625 4.975 18.2875 3.875 20.55 3.875C24.3875 3.875 27.5 7 27.5 10.8625C27.5 19.6125 19.4 24.775 15.775 26.0125Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ms-about-hero-text">
              <h2 className="ms-about-hero-title">Real Tech for Real People</h2>
              <p className="ms-about-hero-body">
                We started Ambaz Megastore because everyone deserves dependable electronics from people who actually use them. Every product is hand-picked, warranty-backed, and shipped with the documentation and accessories the manufacturer intended — no surprises, no resold opens.
              </p>
              <Link
                href="/megastore/shop"
                className="ms-about-hero-cta"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f26522'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#222'; }}
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Multicolumn — What we stand for */}
        <div className="container-main">
          <h2 className="ms-about-multi-heading">What we stand for</h2>
          <div className="ms-about-multi-grid">
            {[
              { img: `${ICON_BASE}/featured-categories3.webp`, title: 'Authentic Products', desc: 'Sourced direct from manufacturers and authorised distributors. Every device ships sealed with manufacturer warranty intact.' },
              { img: `${ICON_BASE}/featured-categories2.png`, title: 'Curated Selection', desc: 'We test, evaluate, and only stock devices that meet our durability, performance, and value bar — no warehouse-clearance fillers.' },
              { img: `${ICON_BASE}/featured-categories7.webp`, title: 'Real Support', desc: 'Our team uses what we sell. Questions about compatibility, setup, or warranty get answered by people who have actually opened the box.' },
            ].map((card) => (
              <div key={card.title} className="ms-about-multi-card">
                <div className="ms-about-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'contain', padding: '20px' }} sizes="33vw" />
                </div>
                <h3 className="ms-about-multi-card-title">{card.title}</h3>
                <p className="ms-about-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Banner */}
        <VideoBannerSection />

        {/* Testimonials (shared, white bg override) */}
        <div className="ms-about-testimonial-wrap">
          <TestimonialSection />
        </div>

        {/* Marquee */}
        <div className="ms-about-marquee-wrap">
          <Marquee text="Welcome to Megastore" />
        </div>
      </div>

      <style>{`
        .ms-about-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .ms-about-hero-media { position: relative; }
        .ms-about-hero-img {
          position: relative;
          width: 100%;
          height: 510px;
          overflow: hidden;
          background-color: #eef4fa;
        }
        .ms-about-hero-badge {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ms-about-hero-badge-heart {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #222;
        }
        .ms-about-hero-text { padding-left: 0; }
        .ms-about-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .ms-about-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .ms-about-hero-cta {
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
        .ms-about-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          align-items: stretch;
        }
        .ms-about-video-section {
          background-color: rgb(247, 248, 252);
          margin: 0;
        }
        .ms-about-video-text {
          display: flex;
          align-items: center;
        }
        .ms-about-video-text-inner { padding: 60px 80px 60px 100px; }
        .ms-about-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
          margin-bottom: 16px;
        }
        .ms-about-video-lead {
          font-size: 17px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .ms-about-video-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ms-about-video-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .ms-about-video-feature-icon {
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
        .ms-about-video-feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
        }
        .ms-about-video-feature-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
        }
        .ms-about-video-media {
          position: relative;
          height: 650px;
          overflow: hidden;
          background-color: #f0f0f0;
        }
        .ms-about-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .ms-about-multi-card { text-align: center; }
        .ms-about-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
        }
        .ms-about-multi-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
        }
        .ms-about-multi-card-desc {
          font-size: 16px;
          color: #777;
          line-height: 1.7;
          max-width: 340px;
          margin: 0 auto;
        }
        .ms-about-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        @media (min-width: 992px) {
          .ms-about-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .ms-about-hero-text { padding-left: 70px; }
          .ms-about-video-grid { grid-template-columns: 1fr 1fr; }
          .ms-about-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 991px) {
          .ms-about-hero-badge {
            top: -70px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          .ms-about-video-media { order: -1; }
          .ms-about-video-text-inner {
            padding: clamp(40px, 6vw, 60px) clamp(32px, 6vw, 80px);
          }
        }
        @media (max-width: 749px) {
          .ms-about-hero-img { height: 350px; }
          .ms-about-hero-title { font-size: clamp(28px, 7vw, 40px); }
          .ms-about-hero-body { font-size: clamp(14px, 4vw, 17px); }
          .ms-about-hero-cta {
            padding: clamp(12px, 3.5vw, 16px) clamp(20px, 5vw, 32px);
            font-size: clamp(13px, 3.5vw, 15px);
          }
          .ms-about-video-media { height: 350px; }
          .ms-about-video-text-inner {
            padding: clamp(24px, 6vw, 40px) clamp(16px, 5vw, 32px);
          }
          .ms-about-video-title {
            font-size: clamp(22px, 5.5vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
          }
          .ms-about-video-lead {
            font-size: clamp(13px, 3.8vw, 17px);
            margin-bottom: clamp(20px, 5vw, 34px);
          }
          .ms-about-video-features { gap: clamp(12px, 3vw, 20px); }
          .ms-about-video-feature-icon {
            width: clamp(26px, 6vw, 32px);
            height: clamp(26px, 6vw, 32px);
          }
          .ms-about-video-feature-title { font-size: clamp(14px, 4vw, 18px); }
          .ms-about-video-feature-desc { font-size: clamp(12px, 3.5vw, 15px); }
          .ms-about-multi-heading {
            font-size: clamp(26px, 5.5vw, 40px);
            margin-bottom: clamp(30px, 6vw, 50px);
          }
          .ms-about-multi-card-title { font-size: clamp(18px, 4.5vw, 24px); }
          .ms-about-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
        @keyframes msAboutRotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ms-about-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }
        .ms-about-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .ms-about-testimonial-wrap section {
          background-color: #fff !important;
          min-height: clamp(320px, 100vw, 750px);
          padding-bottom: 0 !important;
        }
        .ms-about-marquee-wrap section { background-color: #fff !important; }
      `}</style>
    </>
  );
}
