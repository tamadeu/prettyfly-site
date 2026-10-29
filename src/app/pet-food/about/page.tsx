'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';
import { PetFoodInstagram } from '@/features/pet-food/components/PetFoodInstagram';


/* Uncommented 2026-04-25 — section #4 (Video Banner) is now active on the about page.
   Responsive rollout pending. See blueprint/about.page/responsive-rollout-plan.md */
function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="pf-video-section">
      <div className="pf-video-grid">
        <div className="pf-video-text">
          <div className="pf-video-text-inner">
            <h2 className="pf-video-title">From farm to bowl</h2>
            <p className="pf-video-lead">
              See how we source clean proteins and whole-food ingredients, batch-cook recipes in small kitchens, and deliver them to your door in cold-chain packaging.
            </p>
            <div className="pf-video-features">
              {[
                { title: 'Clean protein sourcing', desc: 'Traceable meats and fish from partner farms and fisheries — never rendered or mystery-blended.' },
                { title: 'Kitchen-batched', desc: 'Slow-cooked in small batches to preserve nutrients and flavor your pet can smell.' },
                { title: 'Cold-chain delivery', desc: 'Chilled shipping on refrigerated formulas so freshness arrives intact — not cooked on a hot porch.' },
              ].map((item, i) => (
                <div key={i} className="pf-video-feature">
                  <div className="pf-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="pf-video-feature-title">{item.title}</p>
                    <p className="pf-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pf-video-media">
          {!playing ? (
            <>
              <Image src="/pet-food/video-with-text/video-with-text1.webp" alt="Video thumbnail" fill style={{ objectFit: 'cover' }} sizes="50vw" />

              <button
                onClick={() => setPlaying(true)}
                className="about-play-btn"
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

export default function PetFoodAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: '#eef4fa', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/pet-food-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="about-sections">
      {/* ----------------------------------
          2. HERO — Image with Text  (active — responsive in progress)
             see blueprint/about.page/hero-img-with-text.md
         ---------------------------------- */}
      <div className="container-main">
        <div className="pf-hero-grid">
          <div className="pf-hero-media">
            <div className="pf-hero-img">
              <Image src="/pet-food/img-with-text/img-with-text1.webp" alt="About our pet food" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="50vw" />
            </div>

            <div className="pf-hero-badge">
              <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'aboutRotateText 10s linear infinite' }}>
                <defs>
                  <path id="aboutCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text fontSize="9" fontWeight="600" fill="#222" letterSpacing="5.5">
                  <textPath href="#aboutCirclePath">Clean IngredientsHappy Pets</textPath>
                </text>
              </svg>
              <div className="pf-hero-badge-heart">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.775 26.0125C15.35 26.1625 14.65 26.1625 14.225 26.0125C10.6 24.775 2.5 19.6125 2.5 10.8625C2.5 7 5.6125 3.875 9.45 3.875C11.725 3.875 13.7375 4.975 15 6.675C16.2625 4.975 18.2875 3.875 20.55 3.875C24.3875 3.875 27.5 7 27.5 10.8625C27.5 19.6125 19.4 24.775 15.775 26.0125Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pf-hero-text">
            <h2 className="pf-hero-title">Real Food for Real Companions</h2>
            <p className="pf-hero-body">
              We started Ambaz Pet because our own dogs deserved more than mystery kibble. Every recipe uses traceable proteins, whole-food ingredients, and zero artificial preservatives — the stuff you can read off the bag.
            </p>
            <Link
              href="/pet-food/shop"
              className="pf-hero-cta"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0a3a5c'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#222'; }}
            >
              Shop Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ----------------------------------
          3. MULTICOLUMN — "What we stand for"  (active — responsive pending)
             see blueprint/about.page/responsive-rollout-plan.md
         ---------------------------------- */}
      <div className="container-main">
        <h2 className="pf-multi-heading">What we stand for</h2>
        <div className="pf-multi-grid">
          {[
            { img: '/pet-food/categories-slider/categories-slider1.webp', title: 'Vet Approved', desc: 'Every formula is developed in partnership with board-certified veterinary nutritionists — no guesswork.' },
            { img: '/pet-food/categories-slider/categories-slider3.webp', title: 'Clean Ingredients', desc: 'Real meat or fish is the first ingredient. No rendered by-products, no artificial colors or preservatives.' },
            { img: '/pet-food/categories-slider/categories-slider4.webp', title: 'Made with Love', desc: 'Hand-batched in small kitchens by people who live with pets — and would not feed our own what we would not feed yours.' },
          ].map((card) => (
            <div key={card.title} className="pf-multi-card">
              <div className="pf-multi-card-img">
                <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} sizes="33vw" />
              </div>
              <h3 className="pf-multi-card-title">{card.title}</h3>
              <p className="pf-multi-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------
          4. VIDEO BANNER — "From farm to bowl"  (active — responsive pending)
             see blueprint/about.page/responsive-rollout-plan.md
         ---------------------------------- */}
      <VideoBannerSection />

      {/* ----------------------------------
          5. TESTIMONIALS  (active — responsive pending)
             shared <TestimonialSection /> with white-bg override
             see blueprint/about.page/responsive-rollout-plan.md
         ---------------------------------- */}
      <div className="about-testimonial-wrap">
        <TestimonialSection />
      </div>

      {/* ----------------------------------
          6. MARQUEE — "Welcome to store"  (active — responsive pending)
             see blueprint/about.page/responsive-rollout-plan.md
         ---------------------------------- */}
      <div className="about-marquee-wrap">
        <Marquee text="Welcome to store" />
      </div>

      {/* ----------------------------------
          7. GALLERY — PetFoodInstagram slider  (active — responsive pending)
             see blueprint/about.page/responsive-rollout-plan.md
         ---------------------------------- */}
      <div className="about-gallery-wrap">
        <PetFoodInstagram />
      </div>
      </div>

      <style>{`
        .pf-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .pf-hero-media { position: relative; }
        .pf-hero-img {
          position: relative;
          width: 100%;
          height: 510px;
          overflow: hidden;
          background-color: #eef4fa;
        }
        .pf-hero-badge {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pf-hero-badge-heart {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #222;
        }
        .pf-hero-text { padding-left: 0; }
        .pf-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .pf-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .pf-hero-cta {
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
        .pf-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          align-items: stretch;
        }
        .pf-video-section {
          background-color: rgb(247, 248, 252);
          margin: 0;
        }
        .pf-video-text {
          display: flex;
          align-items: center;
        }
        .pf-video-text-inner { padding: 60px 80px 60px 100px; }
        .pf-video-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
          margin-bottom: 16px;
        }
        .pf-video-lead {
          font-size: 17px;
          color: #777;
          line-height: 1.7;
          margin-bottom: 34px;
        }
        .pf-video-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pf-video-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .pf-video-feature-icon {
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
        .pf-video-feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
        }
        .pf-video-feature-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
        }
        .pf-video-media {
          position: relative;
          height: 650px;
          overflow: hidden;
          background-color: #f0f0f0;
        }
        .pf-multi-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .pf-multi-card { text-align: center; }
        .pf-multi-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
        }
        .pf-multi-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
        }
        .pf-multi-card-desc {
          font-size: 16px;
          color: #777;
          line-height: 1.7;
          max-width: 340px;
          margin: 0 auto;
        }
        .pf-multi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        @media (min-width: 992px) {
          .pf-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .pf-hero-text { padding-left: 70px; }
          .pf-video-grid { grid-template-columns: 1fr 1fr; }
          .pf-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }
        /* 320-991 cross-band overrides (see blueprint/about.page/*.md) */
        @media (max-width: 991px) {
          /* Hero badge re-anchor */
          .pf-hero-badge {
            top: -70px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          /* Video Banner — flip stack so video sits on top of content */
          .pf-video-media { order: -1; }
          .pf-video-text-inner {
            padding: clamp(40px, 6vw, 60px) clamp(32px, 6vw, 80px);
          }
        }
        /* 320-749 mobile overrides (see blueprint/about.page/*.md) */
        @media (max-width: 749px) {
          /* Hero */
          .pf-hero-img { height: 350px; }
          .pf-hero-title { font-size: clamp(28px, 7vw, 40px); }
          .pf-hero-body { font-size: clamp(14px, 4vw, 17px); }
          .pf-hero-cta {
            padding: clamp(12px, 3.5vw, 16px) clamp(20px, 5vw, 32px);
            font-size: clamp(13px, 3.5vw, 15px);
          }
          /* Video Banner */
          .pf-video-media { height: 350px; }
          .pf-video-text-inner {
            padding: clamp(24px, 6vw, 40px) clamp(16px, 5vw, 32px);
          }
          .pf-video-title {
            font-size: clamp(22px, 5.5vw, 38px);
            margin-bottom: clamp(10px, 2.5vw, 16px);
          }
          .pf-video-lead {
            font-size: clamp(13px, 3.8vw, 17px);
            margin-bottom: clamp(20px, 5vw, 34px);
          }
          .pf-video-features { gap: clamp(12px, 3vw, 20px); }
          .pf-video-feature-icon {
            width: clamp(26px, 6vw, 32px);
            height: clamp(26px, 6vw, 32px);
          }
          .pf-video-feature-title { font-size: clamp(14px, 4vw, 18px); }
          .pf-video-feature-desc { font-size: clamp(12px, 3.5vw, 15px); }
          /* Multicolumn */
          .pf-multi-heading {
            font-size: clamp(26px, 5.5vw, 40px);
            margin-bottom: clamp(30px, 6vw, 50px);
          }
          .pf-multi-card-title { font-size: clamp(18px, 4.5vw, 24px); }
          /* Section gap shrinks to 60px on mobile */
          .about-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
        @keyframes aboutRotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .about-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }
        /* Page-wide section spacing — 80px at =750, 60px below (see responsive-rollout-plan.md) */
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
        .about-gallery-wrap .pfi-section { background-color: #fff !important; }
        /* Gallery — pull slider nav buttons inside the container (see gallery.md) */
        .about-gallery-wrap .pfi-nav-prev { left: 12px; }
        .about-gallery-wrap .pfi-nav-next { right: 12px; }
        /* Gallery — hide nav buttons by default, reveal smoothly on slider hover */
        .about-gallery-wrap .pfi-nav-prev,
        .about-gallery-wrap .pfi-nav-next {
          opacity: 0;
          transition: opacity 250ms ease, background 200ms ease, color 200ms ease;
        }
        .about-gallery-wrap .pfi-slider-wrap:hover .pfi-nav-prev,
        .about-gallery-wrap .pfi-slider-wrap:hover .pfi-nav-next {
          opacity: 1;
        }
        /* Touch devices have no hover — always show nav buttons */
        @media (hover: none) {
          .about-gallery-wrap .pfi-nav-prev,
          .about-gallery-wrap .pfi-nav-next {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
