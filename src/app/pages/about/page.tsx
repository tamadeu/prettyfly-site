'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Marquee } from '@/components/shared/Marquee';
import { InstagramFeed } from '@/features/home/components/InstagramFeed';


function VideoBannerSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fa-ab-vb-outer">
      <div className="fa-ab-vb-grid">
        {/* Left — Content */}
        <div className="fa-ab-vb-content">
          <div>
            <h2 className="fa-ab-vb-h2">Banner de vídeo</h2>
            <p style={{ fontSize: '17px', color: '#777', lineHeight: 1.7, marginBottom: '34px' }}>
              Combine texto e imagem para destacar um produto, uma coleção ou uma publicação do blog. Inclua informações sobre disponibilidade e estilo ou compartilhe uma avaliação.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {['Destaque', 'Qualidade', 'Nossa comunidade'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: 600, color: '#222', marginBottom: '4px' }}>{item}</p>
                    <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.6 }}>Conheça os detalhes e diferenciais da nossa loja.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Video */}
        <div className="fa-ab-vb-video">
          {!playing ? (
            <>
              <Image src="/fashion/tab/tab1.webp" alt="Miniatura do vídeo" fill style={{ objectFit: 'cover' }} sizes="50vw" />
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
              title="Vídeo"
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

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════
          1. PAGE HEADER
         ══════════════════════════════════ */}
      <div className="fa-ab-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Início</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Sobre nós</span>
          </div>
          <h1 className="fa-ab-h1">Sobre nós</h1>
        </div>
      </div>

      {/* ══════════════════════════════════
          2. HERO — Image with Text
         ══════════════════════════════════ */}
      <div className="container-main fa-ab-hero-section">
        <div className="fa-ab-hero-grid">
          {/* Left — Image with rotating badge */}
          <div style={{ position: 'relative' }}>
            <div className="fa-ab-hero-img">
              <Image src="/fashion/about/about4.webp" alt="Sobre a Ambaz" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} sizes="50vw" />
            </div>
            <div className="fa-ab-hero-badge">
              <svg viewBox="0 0 100 100" width="140" height="140" style={{ animation: 'aboutRotateText 10s linear infinite' }}>
                <defs>
                  <path id="aboutCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text fontSize="9" fontWeight="600" fill="#222" letterSpacing="5.5">
                  <textPath href="#aboutCirclePath">Feito para você • estilo e qualidade •</textPath>
                </text>
              </svg>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#222' }}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.775 26.0125C15.35 26.1625 14.65 26.1625 14.225 26.0125C10.6 24.775 2.5 19.6125 2.5 10.8625C2.5 7 5.6125 3.875 9.45 3.875C11.725 3.875 13.7375 4.975 15 6.675C16.2625 4.975 18.2875 3.875 20.55 3.875C24.3875 3.875 27.5 7 27.5 10.8625C27.5 19.6125 19.4 24.775 15.775 26.0125Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div className="fa-ab-hero-text">
            <h2 className="fa-ab-hero-h2">Tendências que definem a estação</h2>
            <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '32px' }}>
              Combine texto e imagem para destacar um produto, uma coleção ou uma publicação do blog. Inclua informações sobre disponibilidade e estilo ou compartilhe uma avaliação.
            </p>
            <Link href="/shop" className="fa-ab-hero-cta">
              Compre agora
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          3. MULTICOLUMN — 3 Feature Cards
         ══════════════════════════════════ */}
      <div className="container-main fa-ab-multi-section">
        <h2 className="fa-ab-multi-h2">Nossos diferenciais</h2>
        <div className="fa-ab-multi-grid">
          {[
            { img: '/fashion/about/about1.webp', title: 'Estilo em destaque', desc: 'Somos uma empresa que coloca as pessoas em primeiro lugar. Nosso objetivo é crescer juntos, inspirar uns aos outros e celebrar nossas diferenças.' },
            { img: '/fashion/about/about2.webp', title: 'Tendências da estação', desc: 'Somos uma empresa que coloca as pessoas em primeiro lugar. Nosso objetivo é crescer juntos, inspirar uns aos outros e celebrar nossas diferenças.' },
            { img: '/fashion/about/about3.webp', title: 'Novidades', desc: 'Somos uma empresa que coloca as pessoas em primeiro lugar. Nosso objetivo é crescer juntos, inspirar uns aos outros e celebrar nossas diferenças.' },
          ].map((card) => (
            <div key={card.title} style={{ textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
                <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} sizes="(min-width: 992px) 33vw, (min-width: 750px) 50vw, 100vw" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>{card.title}</h3>
              <p style={{ fontSize: '16px', color: '#777', lineHeight: 1.7, maxWidth: '340px', margin: '0 auto' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          4. VIDEO BANNER — Text + Video
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
        <Marquee text="Boas-vindas à nossa loja" />
      </div>

      <div style={{ height: '80px', backgroundColor: '#fff' }} />

      {/* ══════════════════════════════════
          7. GALLERY
         ══════════════════════════════════ */}
      <div className="about-gallery-wrap" style={{ marginBottom: '80px' }}>
        <InstagramFeed title="Galeria" subtitle="" />
      </div>

      <style>{`
        @keyframes aboutRotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── Page Header ── */
        .fa-ab-page-header { background-color: #faf5f0; padding: 50px 0 60px; text-align: center; }
        .fa-ab-h1 { font-size: 40px; font-weight: 600; color: #222; }

        /* ── Hero ── */
        .fa-ab-hero-section { padding-block: 80px; }
        .fa-ab-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: center; }
        .fa-ab-hero-img { position: relative; width: 100%; height: 510px; overflow: hidden; background: #faf5f0; }
        .fa-ab-hero-badge { position: absolute; top: -30px; right: -30px; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center; }
        .fa-ab-hero-text { padding-left: 70px; }
        .fa-ab-hero-h2 { font-size: 4rem; font-weight: 700; color: #222; line-height: 1.2; margin-bottom: 24px; }
        .fa-ab-hero-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background-color: #222; color: #fff; font-size: 15px; font-weight: 500;
          padding: 16px 32px; border-radius: 40px; text-decoration: none;
          transition: background-color 250ms ease;
        }
        .fa-ab-hero-cta:hover { background-color: #F15B41; }

        /* ── Multicolumn ── */
        .fa-ab-multi-section { padding-block: 0 80px; }
        .fa-ab-multi-h2 { font-size: 40px; font-weight: 600; color: #222; text-align: center; margin-bottom: 50px; }
        .fa-ab-multi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }

        /* ── Video Banner ── */
        .fa-ab-vb-outer { background: rgb(247, 248, 252); margin: 80px 0; }
        .fa-ab-vb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: stretch; }
        .fa-ab-vb-content { display: flex; align-items: center; padding: 60px 80px 60px 100px; }
        .fa-ab-vb-h2 { font-size: 38px; font-weight: 700; color: #222; margin-bottom: 16px; }
        .fa-ab-vb-video { position: relative; height: 650px; overflow: hidden; background: #f0f0f0; }

        /* Play button hover */
        .about-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08) !important;
          box-shadow: 0 6px 30px rgba(0,0,0,0.18) !important;
        }

        /* ── Shared component overrides ── */
        .about-testimonial-wrap section { background-color: #fff !important; }
        .about-marquee-wrap section { background-color: #fff !important; }
        .about-gallery-wrap .ig-section { background-color: #fff !important; }

        /* ── Tablet (≤991px) ── */
        @media (max-width: 991px) {
          .fa-ab-hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .fa-ab-hero-img { height: 420px; }
          .fa-ab-hero-text { padding-left: 0; }
          .fa-ab-multi-grid { grid-template-columns: repeat(2, 1fr); }
          .fa-ab-vb-grid { grid-template-columns: 1fr; }
          .fa-ab-vb-content { padding: 48px; }
          .fa-ab-vb-video { height: 480px; }
        }

        /* ── Mobile (≤749px) ── */
        @media (max-width: 749px) {
          .fa-ab-page-header { padding: clamp(28px, 6vw, 50px) 0 clamp(30px, 7vw, 60px); }
          .fa-ab-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-ab-hero-section { padding-block: clamp(48px, 8vw, 80px); }
          .fa-ab-hero-img { height: clamp(240px, 55vw, 420px); }
          .fa-ab-hero-badge { display: none; }
          .fa-ab-hero-h2 { font-size: clamp(22px, 5.5vw, 40px); }
          .fa-ab-multi-section { padding-block: 0 clamp(48px, 8vw, 80px); }
          .fa-ab-multi-h2 { font-size: clamp(24px, 6vw, 40px); margin-bottom: clamp(28px, 5vw, 50px); }
          .fa-ab-multi-grid { grid-template-columns: 1fr; }
          .fa-ab-vb-outer { margin: clamp(48px, 8vw, 80px) 0; }
          .fa-ab-vb-content { padding: clamp(28px, 6vw, 48px) clamp(20px, 5vw, 48px); }
          .fa-ab-vb-h2 { font-size: clamp(20px, 5vw, 38px); }
          .fa-ab-vb-video { height: clamp(260px, 60vw, 480px); }
        }
      `}</style>
    </>
  );
}
