'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';
import { HeadphonesInstagram } from '@/features/headphones/components/HeadphonesInstagram';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="hp-ab-video-section">
      <div className="hp-ab-video-grid">
        <div className="hp-ab-video-text">
          <div className="hp-ab-video-text-inner">
            <h2 className="hp-ab-video-title">Engineered for every ear</h2>
            <p className="hp-ab-video-lead">
              See how we design, tune, and test every headphone — from driver selection and acoustic chamber geometry through real-world listening sessions with audiophiles and casual listeners alike.
            </p>
            <div className="hp-ab-video-features">
              {[
                { title: 'Precision driver tuning', desc: 'Every driver is hand-matched and tuned to our frequency response target before it leaves the bench.' },
                { title: 'Acoustic chamber design', desc: 'Our engineers iterate dozens of housing prototypes to balance bass extension, soundstage, and isolation.' },
                { title: 'Real-world listening tests', desc: 'Each model passes a panel of 50+ listeners across genres — because specs tell half the story.' },
              ].map((item, i) => (
                <div key={i} className="hp-ab-video-feature">
                  <div className="hp-ab-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="hp-ab-video-feature-title">{item.title}</p>
                    <p className="hp-ab-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hp-ab-video-media">
          {!playing ? (
            <>
              <Image
                src="/headphones/shop-the-look/shop-the-look1.webp"
                alt="Video thumbnail"
                fill
                style={{ objectFit: 'cover' }}
                sizes="50vw"
              />
              <button
                onClick={() => setPlaying(true)}
                className="hp-ab-play-btn"
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

export default function HeadphonesAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/headphones-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="hp-ab-sections">
        {/* 2. HERO — Image + Text */}
        <div className="container-main">
          <div className="hp-ab-hero-grid">
            <div className="hp-ab-hero-media">
              <div className="hp-ab-hero-img">
                <Image
                  src="/headphones/banner/banner1.webp"
                  alt="About Ambaz Audio"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="50vw"
                />
              </div>
              <div className="hp-ab-hero-badge">
                <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'hpAbRotateText 10s linear infinite' }}>
                  <defs>
                    <path id="hpAbCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  </defs>
                  <text fontSize="9" fontWeight="600" fill="#222" letterSpacing="4.5">
                    <textPath href="#hpAbCirclePath">Premium AudioAmbaz Store</textPath>
                  </text>
                </svg>
                <div className="hp-ab-hero-badge-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM12 7C13.1 7 14 7.9 14 9C14 9.74 13.59 10.39 12.99 10.74C12.99 10.74 12.99 10.74 12.99 10.74L13 11H11L11.01 10.74C10.41 10.39 10 9.74 10 9C10 7.9 10.9 7 12 7ZM13 13V17H11V13H13Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="hp-ab-hero-text">
              <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#5de8ff', marginBottom: '14px' }}>Our Story</p>
              <h2 className="hp-ab-hero-title">Sound That Moves You</h2>
              <p className="hp-ab-hero-body">
                Ambaz Audio was founded by a team of engineers and musicians who believed that exceptional sound shouldn&apos;t require an exceptional budget. We build headphones and earphones for everyone who takes their listening seriously — from commuters to audiophiles, gamers to producers.
              </p>
              <p className="hp-ab-hero-body" style={{ marginBottom: '32px' }}>
                Every product we ship starts with one question: does it disappear on your head and let the music fill the room? If the answer isn&apos;t yes, it goes back to the bench.
              </p>
              <Link
                href="/headphones/shop"
                className="hp-ab-hero-cta"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#5de8ff'; e.currentTarget.style.color = '#001a2a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.color = '#fff'; }}
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. STATS — What we stand for */}
        <div className="container-main">
          <h2 className="hp-ab-multi-heading">What we stand for</h2>
          <div className="hp-ab-multi-grid">
            {[
              {
                img: '/headphones/categories-mega-menu/categories-mega-menu4.webp',
                title: 'Hi-Res Certified',
                desc: 'Every model is independently tested and certified for Hi-Res Audio — 40 kHz+ response, no compromise.',
              },
              {
                img: '/headphones/categories-mega-menu/categories-mega-menu2.webp',
                title: 'Built to Last',
                desc: 'Aluminium headbands, braided cables, and replaceable ear cushions — designed for years of daily use.',
              },
              {
                img: '/headphones/categories-mega-menu/categories-mega-menu1.webp',
                title: 'Loved by Listeners',
                desc: 'Over 200,000 customers rate our products 4.8 stars — and our support team answers every ticket within 24 hours.',
              },
            ].map((card) => (
              <div key={card.title} className="hp-ab-multi-card">
                <div className="hp-ab-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                </div>
                <h3 className="hp-ab-multi-card-title">{card.title}</h3>
                <p className="hp-ab-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. VIDEO BANNER */}
        <VideoBannerSection />

        {/* 5. TESTIMONIALS */}
        <div className="hp-ab-testimonial-wrap">
          <TestimonialSection />
        </div>

        {/* 6. MARQUEE */}
        <div className="hp-ab-marquee-wrap">
          <Marquee text="Welcome to store" />
        </div>

        {/* 7. INSTAGRAM */}
        <div className="hp-ab-gallery-wrap">
          <HeadphonesInstagram />
        </div>
      </div>

      <style>{`
        /* -- Page-wide section spacing -- */
        .hp-ab-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* -- Hero -- */
        .hp-ab-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .hp-ab-hero-media { position: relative; }
        .hp-ab-hero-img {
          position: relative;
          width: 100%;
          height: 510px;
          overflow: hidden;
          background-color: #f5f5f5;
        }
        .hp-ab-hero-badge {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hp-ab-hero-badge-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #222;
        }
        .hp-ab-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .hp-ab-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .hp-ab-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease;
        }

        /* -- Multicolumn -- */
        .hp-ab-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .hp-ab-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .hp-ab-multi-card { text-align: center; }
        .hp-ab-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
        }
        .hp-ab-multi-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
        }
        .hp-ab-multi-card-desc {
          font-size: 16px;
          color: #777;
          line-height: 1.7;
          max-width: 340px;
          margin: 0 auto;
        }

        /* -- Video Banner -- */
        .hp-ab-video-section {
          background-color: rgb(247, 248, 252);
        }
        .hp-ab-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          align-items: stretch;
        }
        .hp-ab-video-text {
          display: flex;
          align-items: center;
        }
        .hp-ab-video-text-inner { padding: 60px 80px 60px 100px; }
        .hp-ab-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
          margin-bottom: 16px;
        }
        .hp-ab-video-lead {
          font-size: 17px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .hp-ab-video-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .hp-ab-video-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .hp-ab-video-feature-icon {
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
        .hp-ab-video-feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
        }
        .hp-ab-video-feature-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
        }
        .hp-ab-video-media {
          position: relative;
          height: 650px;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        /* -- Desktop layout -- */
        @media (min-width: 992px) {
          .hp-ab-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .hp-ab-hero-text { padding-left: 70px; }
          .hp-ab-video-grid { grid-template-columns: 1fr 1fr; }
          .hp-ab-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* -- Tablet overrides -- */
        @media (max-width: 991px) {
          .hp-ab-hero-badge {
            top: -70px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          .hp-ab-video-media { order: -1; }
          .hp-ab-video-text-inner {
            padding: clamp(40px, 6vw, 60px) clamp(32px, 6vw, 80px);
          }
        }

        /* -- Mobile overrides -- */
        @media (max-width: 749px) {
          .hp-ab-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
          .hp-ab-hero-img { height: 350px; }
          .hp-ab-hero-title { font-size: clamp(28px, 7vw, 40px); }
          .hp-ab-hero-body { font-size: clamp(14px, 4vw, 17px); }
          .hp-ab-hero-cta {
            padding: clamp(12px, 3.5vw, 16px) clamp(20px, 5vw, 32px);
            font-size: clamp(13px, 3.5vw, 15px);
          }
          .hp-ab-multi-heading {
            font-size: clamp(26px, 5.5vw, 40px);
            margin-bottom: clamp(30px, 6vw, 50px);
          }
          .hp-ab-multi-card-title { font-size: clamp(18px, 4.5vw, 24px); }
          .hp-ab-video-media { height: 350px; }
          .hp-ab-video-text-inner {
            padding: clamp(24px, 6vw, 40px) clamp(16px, 5vw, 32px);
          }
          .hp-ab-video-title {
            font-size: clamp(22px, 5.5vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
          }
          .hp-ab-video-lead {
            font-size: clamp(13px, 3.8vw, 17px);
            margin-bottom: clamp(20px, 5vw, 34px);
          }
          .hp-ab-video-features { gap: clamp(12px, 3vw, 20px); }
          .hp-ab-video-feature-icon {
            width: clamp(26px, 6vw, 32px);
            height: clamp(26px, 6vw, 32px);
          }
          .hp-ab-video-feature-title { font-size: clamp(14px, 4vw, 18px); }
          .hp-ab-video-feature-desc { font-size: clamp(12px, 3.5vw, 15px); }
        }

        /* -- Animations -- */
        @keyframes hpAbRotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hp-ab-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }

        /* -- Shared section overrides -- */
        .hp-ab-testimonial-wrap section {
          background-color: #fff !important;
          min-height: clamp(320px, 100vw, 750px);
          padding-bottom: 0 !important;
        }
        .hp-ab-marquee-wrap section { background-color: #fff !important; }
        .hp-ab-gallery-wrap .hp-ig-section { background-color: #fff !important; }
        .hp-ab-gallery-wrap .hp-ig-nav-prev { left: 12px; }
        .hp-ab-gallery-wrap .hp-ig-nav-next { right: 12px; }
        .hp-ab-gallery-wrap .hp-ig-nav-prev,
        .hp-ab-gallery-wrap .hp-ig-nav-next {
          opacity: 0;
          transition: opacity 250ms ease, background 200ms ease, color 200ms ease;
        }
        .hp-ab-gallery-wrap .hp-ig-slider-wrap:hover .hp-ig-nav-prev,
        .hp-ab-gallery-wrap .hp-ig-slider-wrap:hover .hp-ig-nav-next {
          opacity: 1;
        }
        @media (hover: none) {
          .hp-ab-gallery-wrap .hp-ig-nav-prev,
          .hp-ab-gallery-wrap .hp-ig-nav-next {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
