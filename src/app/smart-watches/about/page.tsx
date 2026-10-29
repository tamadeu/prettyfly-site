'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SWInstagram } from '@/features/smart-watches/components/SWInstagram';
import { SWMarquee } from '@/features/smart-watches/components/SWMarquee';
import { SWTestimonials } from '@/features/smart-watches/components/SWTestimonials';

export default function SmartWatchesAboutPage() {
  return (
    <>
      {/* Page Header */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>About us</h1>
        </div>
      </div>

      <div className="swa-sections">
        {/* Hero Section */}
        <div className="container-main">
          <div className="swa-hero-grid">
            <div className="swa-hero-media">
              <div className="swa-hero-img">
                <Image
                  src="/smart-watches/products/products5.webp"
                  alt="About Smart Watches Shop"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center', backgroundColor: '#f5f5f5' }}
                  sizes="50vw"
                />
              </div>
            </div>
            <div className="swa-hero-text">
              <h2 className="swa-hero-title">Time Redefined, Style Elevated</h2>
              <p className="swa-hero-body">
                We started Smart Watches Shop with a simple belief — a watch should do more than tell time. It should track your health, keep you connected, and express your unique style. Every timepiece in our collection is a commitment to innovation and elegance.
              </p>
              <Link
                href="/smart-watches/shop"
                className="swa-hero-cta"
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

        {/* Values Grid */}
        <div className="container-main">
          <h2 className="swa-values-heading">What we stand for</h2>
          <div className="swa-values-grid">
            {[
              { img: '/smart-watches/products/products1.webp', title: 'Smart Technology', desc: 'From heart rate monitoring to GPS tracking — our watches are packed with the latest health and fitness features.' },
              { img: '/smart-watches/products/products3.webp', title: 'Timeless Design', desc: 'Beautiful watches that complement any style. Crafted with premium materials and thoughtful finishing touches.' },
              { img: '/smart-watches/products/products6.webp', title: 'All-Day Wear', desc: 'Engineered for comfort and durability — lightweight designs, water resistance, and long battery life for every lifestyle.' },
            ].map((card) => (
              <div key={card.title} className="swa-value-card">
                <div className="swa-value-img">
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: 'contain' }} sizes="33vw" />
                </div>
                <h3 className="swa-value-title">{card.title}</h3>
                <p className="swa-value-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <SWTestimonials />

        {/* Marquee */}
        <SWMarquee />

        {/* Instagram */}
        <SWInstagram />
      </div>

      <style>{`
        .swa-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .swa-hero-img {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          background-color: #f5f5f5;
          border-radius: 10px;
        }
        .swa-hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #222;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .swa-hero-body {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .swa-hero-cta {
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
        .swa-values-heading {
          font-size: 40px;
          font-weight: 600;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }
        .swa-value-card { text-align: center; }
        .swa-value-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .swa-value-title { font-size: 24px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .swa-value-desc { font-size: 16px; color: #777; line-height: 1.7; max-width: 340px; margin: 0 auto; }
        .swa-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .swa-sections {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        @media (min-width: 992px) {
          .swa-hero-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .swa-hero-text { padding-left: 70px; }
          .swa-values-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 749px) {
          .swa-hero-img { height: 320px; }
          .swa-hero-title { font-size: clamp(26px, 7vw, 40px); }
          .swa-values-heading { font-size: clamp(26px, 5.5vw, 40px); margin-bottom: clamp(30px, 6vw, 50px); }
          .swa-sections { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
        }
      `}</style>
    </>
  );
}
