'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { PizzaShopTextMarquee } from '@/features/pizza-shop/components/PizzaShopTextMarquee';
import { PizzaShopInstagram } from '@/features/pizza-shop/components/PizzaShopInstagram';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="ps-video-section">
      <div className="ps-video-grid">
        <div className="ps-video-text">
          <div className="ps-video-text-inner">
            <h2 className="ps-video-title">From oven to your door</h2>
            <p className="ps-video-lead">
              Watch how we hand-stretch every base, fire our stone ovens to 900°F, and load each pizza with locally sourced toppings — then deliver it to you hot in under 45 minutes.
            </p>
            <div className="ps-video-features">
              {[
                { title: '900°F stone baking', desc: 'Our stone ovens hit extreme temperatures — giving every crust that signature char, crunch, and depth of flavour you can\'t fake.' },
                { title: '48-hour fermented dough', desc: 'Slow fermentation builds complex flavour and aids digestion. Real pizza takes time — and ours always does.' },
                { title: 'Locally sourced toppings', desc: 'Fresh produce from partner farms, hand-pulled mozzarella, and meats from suppliers we know by name.' },
              ].map((item, i) => (
                <div key={i} className="ps-video-feature">
                  <div className="ps-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e84d1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="ps-video-feature-title">{item.title}</p>
                    <p className="ps-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ps-video-media">
          {!playing ? (
            <>
              <Image
                src="/pizza/full-width-banner/banner3.webp"
                alt="Our stone oven kitchen"
                fill
                style={{ objectFit: 'cover' }}
                sizes="50vw"
              />
              <button
                onClick={() => setPlaying(true)}
                className="ps-about-play-btn"
                style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 5,
                  background: 'rgba(255,255,255,0.12)',
                  border: '2px solid rgba(255,255,255,0.85)',
                  cursor: 'pointer', padding: 0,
                  width: '8rem', height: '8rem', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  color: '#fff',
                  backdropFilter: 'blur(4px)',
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

export default function PizzaAboutPage() {
  return (
    <div style={{ background: '#000000' }}>

      {/* ── Breadcrumb header ── */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#444' }}>/</span>
            <span style={{ color: '#fff' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff' }}>About us</h1>
        </div>
      </div>

      <div className="about-sections">

        {/* ── Hero — Image + Text ── */}
        <div className="container-main">
          <div className="ps-about-hero-grid">
            <div className="ps-about-hero-media">
              <div className="ps-about-hero-img">
                <Image
                  src="/pizza/products/products1.webp"
                  alt="Our stone-baked pizza"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="50vw"
                />
              </div>
              <div className="ps-about-hero-badge">
                <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'aboutRotateText 10s linear infinite' }}>
                  <defs>
                    <path id="psAboutCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  </defs>
                  <text fontSize="9" fontWeight="600" fill="#e84d1c" letterSpacing="4.2">
                    <textPath href="#psAboutCirclePath">Stone Baked · Fresh Daily ·</textPath>
                  </text>
                </svg>
                <div className="ps-about-hero-badge-icon">
                  <svg viewBox="0 0 24 24" fill="#e84d1c" width="26" height="26">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ps-about-hero-text">
              <h2 className="ps-about-hero-title">Handcrafted with passion, baked with love since 2012</h2>
              <p className="ps-about-hero-body">
                Ambaz Pizza started as a single stone oven in Brooklyn, run by two friends who believed great pizza deserved great ingredients. Today we operate three kitchen locations across New York — but our recipe, our values, and our obsession with quality haven&apos;t changed one bit.
              </p>
              <Link
                href="/pizza/shop"
                className="ps-about-hero-cta"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c73d12'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#e84d1c'; }}
              >
                Order Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Multicolumn — "What we stand for" ── */}
        <div className="container-main">
          <h2 className="ps-about-multi-heading">What we stand for</h2>
          <div className="ps-about-multi-grid">
            {[
              {
                img: '/pizza/products/products1.webp',
                title: 'Stone-Baked Quality',
                desc: 'Every pizza is hand-stretched and fired in our 900°F stone ovens — giving you that perfect char, crunch, and authentic flavour in every bite.',
              },
              {
                img: '/pizza/products/products6.webp',
                title: 'Fresh Every Day',
                desc: 'Our dough is prepared daily using a 48-hour slow-ferment recipe. Fresh ingredients arrive every morning — no shortcuts, no compromises.',
              },
              {
                img: '/pizza/products/products7.webp',
                title: 'Locally Sourced',
                desc: 'We partner with local farms and trusted suppliers. Every topping — from vine-ripened tomatoes to hand-pulled mozzarella — is chosen for flavour.',
              },
            ].map((card) => (
              <div key={card.title} className="ps-about-multi-card">
                <div className="ps-about-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                </div>
                <h3 className="ps-about-multi-card-title">{card.title}</h3>
                <p className="ps-about-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Video Banner ── */}
        <VideoBannerSection />

        {/* ── Testimonials ── */}
        <div className="ps-about-testimonial-wrap">
          <TestimonialSection />
        </div>

        {/* ── Marquee ── */}
        <div className="ps-about-marquee-wrap">
          <PizzaShopTextMarquee />
        </div>

        {/* ── Instagram ── */}
        <div className="ps-about-gallery-wrap">
          <PizzaShopInstagram />
        </div>

      </div>

      <style>{`
        /* ── Page-wide section spacing ── */
        .about-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* ── Hero ── */
        .ps-about-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .ps-about-hero-media { position: relative; }
        .ps-about-hero-img {
          position: relative;
          width: 100%;
          height: 510px;
          overflow: hidden;
          background-color: #1a1a1a;
        }
        .ps-about-hero-badge {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ps-about-hero-badge-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .ps-about-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .ps-about-hero-body {
          font-size: 17px;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .ps-about-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #e84d1c;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease;
        }

        /* ── Multicolumn ── */
        .ps-about-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          margin-bottom: 50px;
        }
        .ps-about-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .ps-about-multi-card { text-align: center; }
        .ps-about-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #1a1a1a;
        }
        .ps-about-multi-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }
        .ps-about-multi-card-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          max-width: 340px;
          margin: 0 auto;
        }

        /* ── Video Banner ── */
        .ps-video-section { background-color: rgb(20,20,20); }
        .ps-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          align-items: stretch;
        }
        .ps-video-text {
          display: flex;
          align-items: center;
        }
        .ps-video-text-inner { padding: 60px 80px 60px 100px; }
        .ps-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }
        .ps-video-lead {
          font-size: 17px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .ps-video-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ps-video-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .ps-video-feature-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #e84d1c;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ps-video-feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }
        .ps-video-feature-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }
        .ps-video-media {
          position: relative;
          height: 650px;
          overflow: hidden;
          background-color: #111;
        }
        .ps-about-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.5) !important;
        }

        /* ── Testimonials dark override ── */
        .ps-about-testimonial-wrap section {
          background-color: rgb(20,20,20) !important;
          min-height: clamp(320px, 100vw, 750px);
          padding-bottom: 0 !important;
        }
        .ps-about-testimonial-wrap h2 { color: #fff !important; }
        .ps-about-testimonial-wrap .ts-card {
          background-color: #2a2a2a !important;
          box-shadow: 0 2px 16px rgba(0,0,0,0.35) !important;
        }
        .ps-about-testimonial-wrap .ts-card h4 { color: #fff !important; }
        .ps-about-testimonial-wrap .ts-card p { color: rgba(255,255,255,0.6) !important; }

        /* ── ≥ 992px ── */
        @media (min-width: 992px) {
          .ps-about-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .ps-about-hero-text { padding-left: 70px; }
          .ps-video-grid { grid-template-columns: 1fr 1fr; }
          .ps-about-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── ≤ 991px (tablet + mobile) ── */
        @media (max-width: 991px) {
          .ps-about-hero-badge {
            top: -70px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          .ps-video-media { order: -1; }
          .ps-video-text-inner {
            padding: clamp(40px, 6vw, 60px) clamp(32px, 6vw, 80px);
          }
        }

        /* ── ≤ 749px (mobile) ── */
        @media (max-width: 749px) {
          .about-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
          .ps-about-hero-img { height: 350px; }
          .ps-about-hero-title { font-size: clamp(28px, 7vw, 40px); }
          .ps-about-hero-body { font-size: clamp(14px, 4vw, 17px); }
          .ps-about-hero-cta {
            padding: clamp(12px, 3.5vw, 16px) clamp(20px, 5vw, 32px);
            font-size: clamp(13px, 3.5vw, 15px);
          }
          .ps-about-multi-heading {
            font-size: clamp(26px, 5.5vw, 40px);
            margin-bottom: clamp(30px, 6vw, 50px);
          }
          .ps-about-multi-card-title { font-size: clamp(18px, 4.5vw, 24px); }
          .ps-video-media { height: 350px; }
          .ps-video-text-inner {
            padding: clamp(24px, 6vw, 40px) clamp(16px, 5vw, 32px);
          }
          .ps-video-title {
            font-size: clamp(22px, 5.5vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
          }
          .ps-video-lead {
            font-size: clamp(13px, 3.8vw, 17px);
            margin-bottom: clamp(20px, 5vw, 34px);
          }
          .ps-video-features { gap: clamp(12px, 3vw, 20px); }
          .ps-video-feature-icon {
            width: clamp(26px, 6vw, 32px);
            height: clamp(26px, 6vw, 32px);
          }
          .ps-video-feature-title { font-size: clamp(14px, 4vw, 18px); }
          .ps-video-feature-desc { font-size: clamp(12px, 3.5vw, 15px); }
        }

        @keyframes aboutRotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
