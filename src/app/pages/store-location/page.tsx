'use client';

import Link from 'next/link';

function IconAddress() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31.57 31.13" fill="currentColor">
      <path d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" transform="translate(-2 -1)" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31.568 31.128" fill="currentColor">
      <path d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z" transform="translate(-3 -1)" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31.57 31.13" fill="currentColor">
      <path d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" transform="translate(-2 -4)" />
    </svg>
  );
}

function ContactInfo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <span style={{ color: '#222' }}><IconAddress /></span>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Address</h3>
        </div>
        <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, paddingLeft: '36px' }}>
          123 Stree New York City , United States Of America NY 750065.
        </p>
        <div style={{ borderBottom: '1px solid #e5e5e5', marginTop: '24px' }} />
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <span style={{ color: '#222' }}><IconPhone /></span>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Phone</h3>
        </div>
        <div style={{ paddingLeft: '36px' }}>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7 }}>(372) 587-2335</p>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7 }}>(372) 555-4665</p>
        </div>
        <div style={{ borderBottom: '1px solid #e5e5e5', marginTop: '24px' }} />
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <span style={{ color: '#222' }}><IconEmail /></span>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Email</h3>
        </div>
        <div style={{ paddingLeft: '36px' }}>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7 }}>info@example.com</p>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7 }}>admin@example.com</p>
        </div>
      </div>
    </div>
  );
}

function MapEmbed({ src }: { src: string }) {
  return (
    <div className="fa-sl-map-wrap">
      <iframe src={src} width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

const locations = [
  {
    name: 'New York Warehouse',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1',
  },
  {
    name: 'Germany Warehouse',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.0!2d13.405!3d52.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1',
  },
  {
    name: 'Franch Warehouse',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9541.0!2d-6.2603!3d53.3498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1',
  },
];

export default function StoreLocationPage() {
  return (
    <>
      {/* Page Header */}
      <div className="fa-sl-page-header">
        <div className="container-main">
          <h1 className="fa-sl-h1">Store Location</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Store Location</span>
          </div>
        </div>
      </div>

      {/* Section 1 — New York (info left, map right) */}
      <div className="container-main fa-sl-section">
        <h2 className="fa-sl-section-h2">{locations[0].name}</h2>
        <div className="fa-sl-grid-45-55">
          <ContactInfo />
          <MapEmbed src={locations[0].mapSrc} />
        </div>
      </div>

      {/* Section 2 — Germany (map left, info right) */}
      <div className="fa-sl-section-alt">
        <div className="container-main fa-sl-section">
          <h2 className="fa-sl-section-h2">{locations[1].name}</h2>
          <div className="fa-sl-grid-55-45">
            <MapEmbed src={locations[1].mapSrc} />
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Section 3 — France (info left, map right) */}
      <div className="container-main fa-sl-section">
        <h2 className="fa-sl-section-h2">{locations[2].name}</h2>
        <div className="fa-sl-grid-45-55">
          <ContactInfo />
          <MapEmbed src={locations[2].mapSrc} />
        </div>
      </div>

      <style>{`
        .fa-sl-page-header { background: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .fa-sl-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .fa-sl-section { padding-block: 80px; }
        .fa-sl-section-alt { background: rgb(247, 248, 252); }
        .fa-sl-section-h2 { font-size: 32px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .fa-sl-grid-45-55 { display: grid; grid-template-columns: 45% 55%; gap: 40px; align-items: center; }
        .fa-sl-grid-55-45 { display: grid; grid-template-columns: 55% 45%; gap: 40px; align-items: center; }
        .fa-sl-map-wrap { position: relative; width: 100%; height: 420px; overflow: hidden; }
        @media (max-width: 991px) {
          .fa-sl-grid-45-55, .fa-sl-grid-55-45 { grid-template-columns: 1fr; }
        }
        @media (max-width: 749px) {
          .fa-sl-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .fa-sl-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-sl-section { padding-block: clamp(48px, 8vw, 80px); }
          .fa-sl-section-h2 { font-size: clamp(20px, 5vw, 32px); margin-bottom: clamp(28px, 5vw, 50px); }
          .fa-sl-map-wrap { height: clamp(280px, 60vw, 420px); }
        }
      `}</style>
    </>
  );
}
