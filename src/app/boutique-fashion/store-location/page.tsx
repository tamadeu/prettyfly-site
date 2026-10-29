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
    <div className="sl-contact-info">
      <div className="sl-info-block">
        <div className="sl-info-icon-row"><span style={{ color: '#222' }}><IconAddress /></span><h3 className="sl-info-h3">Address</h3></div>
        <p className="sl-info-p" style={{ paddingLeft: '36px' }}>{address}</p>
        <div className="sl-info-divider" />
      </div>
      <div className="sl-info-block">
        <div className="sl-info-icon-row"><span style={{ color: '#222' }}><IconPhone /></span><h3 className="sl-info-h3">Phone</h3></div>
        <div style={{ paddingLeft: '36px' }}>{phones.map((p) => <p key={p} className="sl-info-p">{p}</p>)}</div>
        <div className="sl-info-divider" />
      </div>
      <div className="sl-info-block">
        <div className="sl-info-icon-row"><span style={{ color: '#222' }}><IconEmail /></span><h3 className="sl-info-h3">Email</h3></div>
        <div style={{ paddingLeft: '36px' }}>{emails.map((e) => <p key={e} className="sl-info-p">{e}</p>)}</div>
      </div>
    </div>
  );
}

function MapEmbed({ src }: { src: string }) {
  return (
    <div className="sl-map-wrap">
      <iframe src={src} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

const locations = [
  {
    name: 'New York Boutique Studio',
    address: '48 West 25th Street, New York, NY 10010, United States.',
    phones: ['(212) 555-0100', '(212) 555-0101'],
    emails: ['ny@ambaz.com', 'orders@ambaz.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6!2d-73.994!3d40.744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4a4e4c77f%3A0xd134e199a405a163!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1',
  },
  {
    name: 'Los Angeles Boutique',
    address: '365 Melrose Avenue, Los Angeles, CA 90046, United States.',
    phones: ['(323) 555-0200', '(323) 555-0201'],
    emails: ['la@ambaz.com', 'returns@ambaz.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52819.8!2d-118.358!3d34.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fefa1545a5be7!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1',
  },
  {
    name: 'Chicago Style Hub',
    address: '711 North Michigan Avenue, Chicago, IL 60611, United States.',
    phones: ['(312) 555-0300', '(312) 555-0301'],
    emails: ['chicago@ambaz.com', 'support@ambaz.com'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47519.96!2d-87.657!3d41.883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1',
  },
];

export default function BoutiqueFashionStoreLocationPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Store Location</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Store Location</span>
          </div>
        </div>
      </div>

      <div className="sl-sections-wrap">
        <div className="container-main sl-section-pad">
          <h2 className="sl-section-h2">{locations[0].name}</h2>
          <div className="store-loc-grid-a">
            <ContactInfo {...locations[0]} />
            <MapEmbed src={locations[0].mapSrc} />
          </div>
        </div>

        <div className="sl-section-gray">
          <div className="container-main sl-section-pad">
            <h2 className="sl-section-h2">{locations[1].name}</h2>
            <div className="store-loc-grid-b">
              <MapEmbed src={locations[1].mapSrc} />
              <ContactInfo {...locations[1]} />
            </div>
          </div>
        </div>

        <div className="container-main sl-section-pad">
          <h2 className="sl-section-h2">{locations[2].name}</h2>
          <div className="store-loc-grid-a">
            <ContactInfo {...locations[2]} />
            <MapEmbed src={locations[2].mapSrc} />
          </div>
        </div>
      </div>

      <style>{`
        .sl-sections-wrap { display: flex; flex-direction: column; gap: 80px; padding-top: 80px; padding-bottom: 80px; }
        .sl-section-gray { background-color: #f8f8f8; }
        .sl-section-pad { padding-block: 40px; }
        .sl-section-h2 { font-size: 32px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .sl-contact-info { display: flex; flex-direction: column; gap: 28px; }
        .sl-info-icon-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .sl-info-h3 { font-size: 24px; font-weight: 700; color: #222; }
        .sl-info-p { font-size: 16px; color: #666; line-height: 1.7; }
        .sl-info-divider { border-bottom: 1px solid #e5e5e5; margin-top: 24px; }
        .sl-map-wrap { position: relative; width: 100%; height: 480px; overflow: hidden; }
        .sl-map-wrap iframe { width: 100%; height: 100%; border: 0; }
        .store-loc-grid-a, .store-loc-grid-b { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 992px) {
          .store-loc-grid-a { grid-template-columns: 45% 55%; }
          .store-loc-grid-b { grid-template-columns: 55% 45%; }
        }
        @media (max-width: 749px) {
          .sl-sections-wrap { gap: 60px; padding-top: 60px; padding-bottom: 60px; }
          .sl-section-pad { padding-block: clamp(24px, 5vw, 40px); }
          .sl-section-h2 { font-size: clamp(20px, 5vw, 32px); margin-bottom: clamp(28px, 6vw, 50px); }
          .sl-map-wrap { height: 420px; }
          .store-loc-grid-a, .store-loc-grid-b { gap: clamp(24px, 5vw, 40px); }
          .sl-contact-info { gap: clamp(16px, 4vw, 28px); }
          .sl-info-h3 { font-size: clamp(17px, 4.5vw, 24px) !important; }
          .sl-info-p { font-size: clamp(13px, 3.5vw, 16px) !important; }
          .sl-info-divider { margin-top: clamp(14px, 3vw, 24px); }
        }
      `}</style>
    </>
  );
}
