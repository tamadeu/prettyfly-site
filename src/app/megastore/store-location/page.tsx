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
    <div className="ms-sl-contact-info">
      <div className="ms-sl-info-block">
        <div className="ms-sl-info-icon-row">
          <span style={{ color: '#222' }}><IconAddress /></span>
          <h3 className="ms-sl-info-h3" style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Address</h3>
        </div>
        <p className="ms-sl-info-p" style={{ paddingLeft: '36px' }}>{address}</p>
        <div className="ms-sl-info-divider" />
      </div>

      <div className="ms-sl-info-block">
        <div className="ms-sl-info-icon-row">
          <span style={{ color: '#222' }}><IconPhone /></span>
          <h3 className="ms-sl-info-h3" style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Phone</h3>
        </div>
        <div style={{ paddingLeft: '36px' }}>
          {phones.map((p) => <p key={p} className="ms-sl-info-p">{p}</p>)}
        </div>
        <div className="ms-sl-info-divider" />
      </div>

      <div className="ms-sl-info-block">
        <div className="ms-sl-info-icon-row">
          <span style={{ color: '#222' }}><IconEmail /></span>
          <h3 className="ms-sl-info-h3" style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Email</h3>
        </div>
        <div style={{ paddingLeft: '36px' }}>
          {emails.map((e) => <p key={e} className="ms-sl-info-p">{e}</p>)}
        </div>
      </div>
    </div>
  );
}

function MapEmbed({ src }: { src: string }) {
  return (
    <div className="ms-sl-map-wrap">
      <iframe src={src} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

const locations = [
  {
    name: 'San Jose Megastore Showroom',
    address: '1200 Technology Drive, San Jose, CA 95110, United States.',
    phones: ['(408) 555-6342', '(408) 555-9821'],
    emails: ['sanjose@ambaz.com', 'orders@ambaz.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50734.4!2d-121.94!3d37.336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xf124ec19cffc8120!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1',
  },
  {
    name: 'Austin Tech Hub',
    address: '500 Innovation Parkway, Austin, TX 78701, United States.',
    phones: ['(512) 555-2880', '(512) 555-7140'],
    emails: ['austin@ambaz.com', 'support@ambaz.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55207.5!2d-97.85!3d30.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1',
  },
  {
    name: 'New York Megastore Center',
    address: '350 Fifth Avenue, New York, NY 10118, United States.',
    phones: ['(212) 555-4400', '(212) 555-2233'],
    emails: ['newyork@ambaz.com', 'dispatch@ambaz.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96755.4!2d-74.06!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af43cc9d41%3A0xe06f6a3d3b51e84a!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1',
  },
];

export default function MegastoreStoreLocationPage() {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Store Location</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/megastore-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Store Location</span>
          </div>
        </div>
      </div>

      <div className="ms-sl-sections-wrap">

        <div className="container-main ms-sl-section-pad">
          <h2 className="ms-sl-section-h2">{locations[0].name}</h2>
          <div className="ms-sl-grid-a">
            <ContactInfo {...locations[0]} />
            <MapEmbed src={locations[0].mapSrc} />
          </div>
        </div>

        <div className="ms-sl-section-gray">
          <div className="container-main ms-sl-section-pad">
            <h2 className="ms-sl-section-h2">{locations[1].name}</h2>
            <div className="ms-sl-grid-b">
              <MapEmbed src={locations[1].mapSrc} />
              <ContactInfo {...locations[1]} />
            </div>
          </div>
        </div>

        <div className="container-main ms-sl-section-pad">
          <h2 className="ms-sl-section-h2">{locations[2].name}</h2>
          <div className="ms-sl-grid-a">
            <ContactInfo {...locations[2]} />
            <MapEmbed src={locations[2].mapSrc} />
          </div>
        </div>

      </div>

      <style>{`
        .ms-sl-sections-wrap {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .ms-sl-section-gray { background-color: rgb(247, 248, 252); }
        .ms-sl-section-pad { padding-block: 40px; }

        .ms-sl-section-h2 {
          font-size: 32px;
          font-weight: 700;
          color: #222;
          text-align: center;
          margin-bottom: 50px;
        }

        .ms-sl-contact-info { display: flex; flex-direction: column; gap: 28px; }
        .ms-sl-info-icon-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .ms-sl-info-h3 { font-size: 24px; font-weight: 700; color: #222; }
        .ms-sl-info-p { font-size: 16px; color: #666; line-height: 1.7; }
        .ms-sl-info-divider { border-bottom: 1px solid #e5e5e5; margin-top: 24px; }

        .ms-sl-map-wrap { position: relative; width: 100%; height: 480px; overflow: hidden; }
        .ms-sl-map-wrap iframe { width: 100%; height: 100%; border: 0; }

        .ms-sl-grid-a,
        .ms-sl-grid-b {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .ms-sl-grid-a { grid-template-columns: 45% 55%; }
          .ms-sl-grid-b { grid-template-columns: 55% 45%; }
        }

        @media (max-width: 749px) {
          .ms-sl-sections-wrap { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
          .ms-sl-section-pad { padding-block: clamp(24px, 5vw, 40px); }
          .ms-sl-section-h2 { font-size: clamp(20px, 5vw, 32px); margin-bottom: clamp(28px, 6vw, 50px); }
          .ms-sl-map-wrap { height: 420px; }
          .ms-sl-grid-a,
          .ms-sl-grid-b { gap: clamp(24px, 5vw, 40px); }
          .ms-sl-contact-info { gap: clamp(16px, 4vw, 28px); }
          .ms-sl-info-icon-row { gap: clamp(8px, 2vw, 12px); margin-bottom: clamp(6px, 1.5vw, 10px); }
          .ms-sl-info-icon-row svg { width: clamp(20px, 4.5vw, 28px) !important; height: clamp(20px, 4.5vw, 28px) !important; }
          .ms-sl-info-h3 { font-size: clamp(17px, 4.5vw, 24px) !important; }
          .ms-sl-info-p { font-size: clamp(13px, 3.5vw, 16px) !important; }
          .ms-sl-info-divider { margin-top: clamp(14px, 3vw, 24px); }
        }
      `}</style>
    </>
  );
}
