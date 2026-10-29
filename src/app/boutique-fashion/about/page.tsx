'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';
import { BFInstagram } from '@/features/boutique-fashion/components/BFInstagram';

function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="bfa-video-section">
      <div className="bfa-video-grid">
        <div className="bfa-video-text">
          <div className="bfa-video-text-inner">
            <h2 className="bfa-video-title">From sketch to wardrobe</h2>
            <p className="bfa-video-lead">
              We design every piece with intention — sourcing natural fabrics, partnering with ethical manufacturers, and perfecting fit before anything reaches you.
            </p>
            <div className="bfa-video-features">
              {[
                { title: 'Ethically sourced fabrics', desc: 'GOTS-certified organic cotton, recycled fibres, and linen blends from partners we visit in person.' },
                { title: 'Small-batch production', desc: 'Shorter runs mean higher quality control and less waste — we never overproduce to force a sale.' },
                { title: 'Perfect fit guarantee', desc: 'Every silhouette is fit-tested across five body types before release so it looks great on real people, not just models.' },
              ].map((item, i) => (
                <div key={i} className="bfa-video-feature">
                  <div className="bfa-video-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="bfa-video-feature-title">{item.title}</p>
                    <p className="bfa-video-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bfa-video-media">
          {!playing ? (
            <>
              <Image src="/boutique-fashion/products/products3.png" alt="Video thumbnail" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <button onClick={() => setPlaying(true)} className="bfa-play-btn" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 5, background: '#fff', border: '2px solid #222', cursor: 'pointer', padding: 0, width: '8rem', height: '8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', color: '#222' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z" />
                </svg>
              </button>
            </>
          ) : (
            <iframe src="https://www.youtube.com/embed/a2zZzAr1e_c?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media" allowFullScreen style={{ width: '100%', height: '100%', border: 'none' }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function BoutiqueFashionAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="bfa-sections">
        <div className="container-main">
          <div className="bfa-hero-grid">
            <div className="bfa-hero-media">
              <div className="bfa-hero-img">
                <Image src="/boutique-fashion/banners/banners1.webp" alt="About Boutique Fashion" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="50vw" />
              </div>
              <div className="bfa-hero-badge">
                <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'bfaRotateText 10s linear infinite' }}>
                  <defs><path id="bfaCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" /></defs>
                  <text fontSize="9" fontWeight="600" fill="#222" letterSpacing="5.5">
                    <textPath href="#bfaCirclePath">Timeless Style Curated for You</textPath>
                  </text>
                </svg>
                <div className="bfa-hero-badge-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bfa-hero-text">
              <h2 className="bfa-hero-title">Style that means something</h2>
              <p className="bfa-hero-body">
                We started Ambaz Boutique because fashion should feel like self-expression — not trend-chasing. Every piece we source is chosen for its fabric quality, craftsmanship, and staying power beyond a single season.
              </p>
              <Link href="/boutique-fashion/shop" className="bfa-hero-cta" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#444'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#222'; }}>
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-main">
          <h2 className="bfa-multi-heading">What we stand for</h2>
          <div className="bfa-multi-grid">
            {[
              { img: '/boutique-fashion/banners/banners2.webp', title: 'Conscious Curation', desc: 'Every piece earns its place through quality of fabric, durability, and timeless design — not trend forecasts.' },
              { img: '/boutique-fashion/banners/banners3.webp', title: 'Ethical Production', desc: 'We partner with certified manufacturers who pay fair wages, use safe materials, and minimize environmental impact.' },
              { img: '/boutique-fashion/products/products10.png', title: 'Fit for Everyone', desc: 'Extended sizing, inclusive fit guides, and styles designed to flatter across a wide range of body types.' },
            ].map((card) => (
              <div key={card.title} className="bfa-multi-card">
                <div className="bfa-multi-card-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                </div>
                <h3 className="bfa-multi-card-title">{card.title}</h3>
                <p className="bfa-multi-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <VideoBannerSection />

        <div className="bfa-testimonial-wrap"><TestimonialSection /></div>
        <div className="bfa-marquee-wrap"><Marquee text="TIMELESS STYLE • FREE RETURNS • ETHICALLY MADE • DESIGNED TO LAST" /></div>
        <div className="bfa-gallery-wrap"><BFInstagram /></div>
      </div>

      <style>{`
        .bfa-hero-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        .bfa-hero-media { position: relative; }
        .bfa-hero-img { position: relative; width: 100%; height: 510px; overflow: hidden; background-color: #f5f5f5; }
        .bfa-hero-badge { position: absolute; top: -30px; right: -30px; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center; }
        .bfa-hero-badge-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: #222; }
        .bfa-hero-text { padding-left: 0; }
        .bfa-hero-title { font-size: 4rem; font-weight: 700; color: #222; line-height: 1.2; margin-bottom: 24px; }
        .bfa-hero-body { font-size: 17px; color: #666; line-height: 1.8; margin-bottom: 32px; }
        .bfa-hero-cta { display: inline-flex; align-items: center; gap: 8px; background-color: #222; color: #fff; font-size: 15px; font-weight: 500; padding: 16px 32px; border-radius: 40px; text-decoration: none; transition: background-color 250ms ease; }
        .bfa-video-grid { display: grid; grid-template-columns: 1fr; gap: 0; align-items: stretch; }
        .bfa-video-section { background-color: #f7f8fc; }
        .bfa-video-text { display: flex; align-items: center; }
        .bfa-video-text-inner { padding: 60px 80px 60px 100px; }
        .bfa-video-title { font-size: 38px; font-weight: 700; color: #222; margin-bottom: 16px; }
        .bfa-video-lead { font-size: 17px; color: #777; line-height: 1.7; margin-bottom: 34px; }
        .bfa-video-features { display: flex; flex-direction: column; gap: 20px; }
        .bfa-video-feature { display: flex; align-items: flex-start; gap: 14px; }
        .bfa-video-feature-icon { width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid #222; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .bfa-video-feature-title { font-size: 18px; font-weight: 600; color: #222; margin-bottom: 4px; }
        .bfa-video-feature-desc { font-size: 15px; color: #777; line-height: 1.6; }
        .bfa-video-media { position: relative; height: 650px; overflow: hidden; background-color: #f0f0f0; }
        .bfa-multi-heading { font-size: 40px; font-weight: 600; color: #222; text-align: center; margin-bottom: 50px; }
        .bfa-multi-card { text-align: center; }
        .bfa-multi-card-img { position: relative; width: 100%; aspect-ratio: 1/1; overflow: hidden; margin-bottom: 20px; background-color: #f5f5f5; }
        .bfa-multi-card-title { font-size: 24px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .bfa-multi-card-desc { font-size: 16px; color: #777; line-height: 1.7; max-width: 340px; margin: 0 auto; }
        .bfa-multi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
        @media (min-width: 992px) {
          .bfa-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .bfa-hero-text { padding-left: 70px; }
          .bfa-video-grid { grid-template-columns: 1fr 1fr; }
          .bfa-multi-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 991px) {
          .bfa-hero-badge { top: -70px; left: 50%; right: auto; transform: translateX(-50%); }
          .bfa-video-media { order: -1; }
          .bfa-video-text-inner { padding: clamp(40px, 6vw, 60px) clamp(32px, 6vw, 80px); }
        }
        @media (max-width: 749px) {
          .bfa-hero-img { height: 350px; }
          .bfa-hero-title { font-size: clamp(28px, 7vw, 40px); }
          .bfa-hero-body { font-size: clamp(14px, 4vw, 17px); }
          .bfa-video-media { height: 350px; }
          .bfa-multi-heading { font-size: clamp(26px, 5.5vw, 40px); margin-bottom: clamp(30px, 6vw, 50px); }
          .bfa-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
        @keyframes bfaRotateText { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .bfa-play-btn:hover { transform: translate(-50%,-50%) scale(1.08) !important; box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important; }
        .bfa-sections { display: flex; flex-direction: column; gap: 80px; padding-top: 80px; padding-bottom: 80px; }
        .bfa-testimonial-wrap section { background-color: #fff !important; min-height: clamp(320px, 100vw, 750px); padding-bottom: 0 !important; }
        .bfa-marquee-wrap section { background-color: #fff !important; }
      `}</style>
    </>
  );
}
