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

function ContactInfo({ address, phones, emails }: { address: string; phones: string[]; emails: string[] }) {
  return (
    <div className="ps-sl-contact-info">
      <div className="ps-sl-info-block">
        <div className="ps-sl-info-icon-row">
          <span style={{ color: '#e84d1c' }}><IconAddress /></span>
          <h3 className="ps-sl-info-h3">Address</h3>
        </div>
        <p className="ps-sl-info-p" style={{ paddingLeft: '40px' }}>{address}</p>
        <div className="ps-sl-info-divider" />
      </div>
      <div className="ps-sl-info-block">
        <div className="ps-sl-info-icon-row">
          <span style={{ color: '#e84d1c' }}><IconPhone /></span>
          <h3 className="ps-sl-info-h3">Phone</h3>
        </div>
        <div style={{ paddingLeft: '40px' }}>
          {phones.map((p) => <p key={p} className="ps-sl-info-p">{p}</p>)}
        </div>
        <div className="ps-sl-info-divider" />
      </div>
      <div className="ps-sl-info-block">
        <div className="ps-sl-info-icon-row">
          <span style={{ color: '#e84d1c' }}><IconEmail /></span>
          <h3 className="ps-sl-info-h3">Email</h3>
        </div>
        <div style={{ paddingLeft: '40px' }}>
          {emails.map((e) => <p key={e} className="ps-sl-info-p">{e}</p>)}
        </div>
      </div>
    </div>
  );
}

function MapEmbed({ src }: { src: string }) {
  return (
    <div className="ps-sl-map-wrap">
      <iframe src={src} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

const locations = [
  {
    name: 'Brooklyn Flagship Kitchen',
    address: '42 Pizza Lane, Suite 1, Brooklyn, NY 11201, United States.',
    phones: ['(800) 555-PIZZA', '(718) 555-3142'],
    emails: ['brooklyn@ambazpizza.com', 'orders@ambazpizza.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48370.97!2d-73.990!3d40.678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1',
  },
  {
    name: 'Manhattan Express Kitchen',
    address: '128 Slice Street, Unit 5, Manhattan, NY 10001, United States.',
    phones: ['(800) 555-7499', '(212) 555-8821'],
    emails: ['manhattan@ambazpizza.com', 'nyc@ambazpizza.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48369.10!2d-74.005!3d40.712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21fbef4c5b%3A0xd7ab1742cf557d1f!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1',
  },
  {
    name: 'Queens Community Kitchen',
    address: '67 Crust Avenue, Bay 3, Queens, NY 11101, United States.',
    phones: ['(800) 555-2300', '(718) 555-6634'],
    emails: ['queens@ambazpizza.com', 'support@ambazpizza.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96744.45!2d-73.870!3d40.728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260bac5adc581%3A0x4c07e5e5f6edf2d4!2sQueens%2C%20NY!5e0!3m2!1sen!2sus!4v1',
  },
];

export default function PizzaStoreLocationPage() {
  return (
    <div style={{ background: '#000000' }}>
      <div style={{ backgroundColor: '#1a1a1a', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>Store Location</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#444' }}>/</span>
            <span style={{ color: '#fff' }}>Store Location</span>
          </div>
        </div>
      </div>

      <div className="ps-sl-sections-wrap">
        {/* Section 1 — Brooklyn */}
        <div className="container-main ps-sl-section-pad">
          <h2 className="ps-sl-section-h2">{locations[0].name}</h2>
          <div className="ps-store-loc-grid-a">
            <ContactInfo {...locations[0]} />
            <MapEmbed src={locations[0].mapSrc} />
          </div>
        </div>

        {/* Section 2 — Manhattan (darker bg) */}
        <div className="ps-sl-section-alt">
          <div className="container-main ps-sl-section-pad">
            <h2 className="ps-sl-section-h2">{locations[1].name}</h2>
            <div className="ps-store-loc-grid-b">
              <MapEmbed src={locations[1].mapSrc} />
              <ContactInfo {...locations[1]} />
            </div>
          </div>
        </div>

        {/* Section 3 — Queens */}
        <div className="container-main ps-sl-section-pad">
          <h2 className="ps-sl-section-h2">{locations[2].name}</h2>
          <div className="ps-store-loc-grid-a">
            <ContactInfo {...locations[2]} />
            <MapEmbed src={locations[2].mapSrc} />
          </div>
        </div>
      </div>

      <style>{`
        .ps-sl-sections-wrap {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
          background-color: #111;
        }
        .ps-sl-section-alt { background-color: #1a1a1a; }
        .ps-sl-section-pad { padding-block: 40px; }
        .ps-sl-section-h2 { font-size: 32px; font-weight: 700; color: #fff; text-align: center; margin-bottom: 50px; }

        .ps-sl-contact-info { display: flex; flex-direction: column; gap: 28px; }
        .ps-sl-info-icon-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .ps-sl-info-h3 { font-size: 24px; font-weight: 700; color: #fff; }
        .ps-sl-info-p { font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.7; }
        .ps-sl-info-divider { border-bottom: 1px solid #2a2a2a; margin-top: 24px; }

        .ps-sl-map-wrap { position: relative; width: 100%; height: 480px; overflow: hidden; border-radius: 12px; border: 1px solid #2a2a2a; }
        .ps-sl-map-wrap iframe { width: 100%; height: 100%; border: 0; }

        .ps-store-loc-grid-a,
        .ps-store-loc-grid-b {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .ps-store-loc-grid-a { grid-template-columns: 45% 55%; }
          .ps-store-loc-grid-b { grid-template-columns: 55% 45%; }
        }

        @media (max-width: 749px) {
          .ps-sl-sections-wrap { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
          .ps-sl-section-pad { padding-block: clamp(24px, 5vw, 40px); }
          .ps-sl-section-h2 { font-size: clamp(20px, 5vw, 32px); margin-bottom: clamp(28px, 6vw, 50px); }
          .ps-sl-map-wrap { height: 420px; border-radius: 8px; }
          .ps-store-loc-grid-a, .ps-store-loc-grid-b { gap: clamp(24px, 5vw, 40px); }
          .ps-sl-contact-info { gap: clamp(16px, 4vw, 28px); }
          .ps-sl-info-icon-row { gap: clamp(8px, 2vw, 12px); margin-bottom: clamp(6px, 1.5vw, 10px); }
          .ps-sl-info-h3 { font-size: clamp(17px, 4.5vw, 24px); }
          .ps-sl-info-p { font-size: clamp(13px, 3.5vw, 16px); }
          .ps-sl-info-divider { margin-top: clamp(14px, 3vw, 24px); }
        }
      `}</style>
    </div>
  );
}
