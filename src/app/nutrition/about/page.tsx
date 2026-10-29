'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export default function NutritionAboutPage() {
  return (
    <>
      <div className="nab-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>About us</span>
          </div>
          <h1 className="nab-h1">About us</h1>
        </div>
      </div>

      <div className="container-main nab-hero-section">
        <div className="nab-hero-grid">
          <div style={{ position: 'relative', width: '100%', height: '510px', overflow: 'hidden', borderRadius: '12px' }}>
            <Image
              src="/nutrition/img-with-text/img-with-text1.webp"
              alt="About Ambaz Nutrition"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 992px) 50vw, 100vw"
            />
          </div>

          <div className="nab-hero-text">
            <h2 style={{ fontSize: '4rem', fontWeight: 700, color: '#222', lineHeight: 1.2, marginBottom: '24px' }}>Clean Fuel, Honest Labels</h2>
            <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '32px' }}>
              We started Ambaz Nutrition because performance starts with what you put in the shaker. Every formula is third-party tested, clean-labeled, and mixed without artificial fillers — the stuff you can read off the scoop.
            </p>
            <Link
              href="/nutrition/shop"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'rgb(140, 255, 100)', color: '#0e1a0a',
                fontSize: '15px', fontWeight: 700, letterSpacing: '0.4px',
                padding: '16px 32px', borderRadius: '40px', textDecoration: 'none',
                transition: 'background-color 250ms ease, transform 250ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b1d85a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(140, 255, 100)'; }}
            >
              Shop Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-main nab-multi-section">
        <h2 className="nab-section-h2">What we stand for</h2>
        <div className="nab-values-grid">
          {[
            { title: 'Third-Party Tested', desc: 'Every batch verified by independent labs for purity, potency, and banned-substance screening.' },
            { title: 'Clean Labels', desc: 'Real ingredients, disclosed dosages, no proprietary blends hiding behind marketing speak.' },
            { title: 'Built for Training', desc: 'Formulated alongside athletes and coaches — performance first, flavor a very close second.' },
          ].map((card) => (
            <div key={card.title} style={{ textAlign: 'center', padding: '32px 20px', background: '#f4f5f7', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>{card.title}</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="nab-testimonial-wrap">
        <TestimonialSection />
      </div>

      <style>{`
        .nab-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .nab-hero-text { padding-left: 0; }
        .nab-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        @media (min-width: 992px) {
          .nab-hero-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
          .nab-hero-text { padding-left: 40px; }
          .nab-values-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Page Header ── */
        .nab-page-header { background-color: #f4f5f7; padding: 50px 0 60px; text-align: center; }
        .nab-h1 { font-size: 40px; font-weight: 600; color: #222; }

        /* ── Section spacing ── */
        .nab-hero-section { padding-block: 80px; }
        .nab-multi-section { padding-block: 0 80px; }
        .nab-section-h2 { font-size: 40px; font-weight: 600; color: #222; text-align: center; margin-bottom: 50px; }

        /* ── Testimonial override ── */
        .nab-testimonial-wrap section { background-color: #fff !important; }

        /* ── Mobile (≤749px) ── */
        @media (max-width: 749px) {
          .nab-page-header { padding: clamp(28px, 6vw, 50px) 0 clamp(30px, 7vw, 60px); }
          .nab-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .nab-hero-section { padding-block: clamp(48px, 8vw, 80px); }
          .nab-multi-section { padding-block: 0 clamp(48px, 8vw, 80px); }
          .nab-section-h2 { font-size: clamp(24px, 6vw, 40px); margin-bottom: clamp(28px, 5vw, 50px); }
        }
      `}</style>
    </>
  );
}
