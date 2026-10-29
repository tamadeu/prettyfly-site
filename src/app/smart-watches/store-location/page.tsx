import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Store Location — Smart Watches Shop',
  description: 'Find your nearest Smart Watches Shop store.',
};

const stores = [
  {
    id: 'ny',
    name: 'New York Flagship',
    address: '100 Technology Plaza, New York, NY 10001',
    hours: 'Mon–Fri: 10am–8pm · Sat: 10am–7pm · Sun: 11am–6pm',
    phone: '(800) 555-0199',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6!2d-73.994!3d40.744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4a4e4c77f%3A0xd134e199a405a163!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1',
  },
  {
    id: 'sf',
    name: 'San Francisco Store',
    address: '450 Market Street, San Francisco, CA 94105',
    hours: 'Mon–Fri: 10am–9pm · Sat: 10am–8pm · Sun: 12pm–6pm',
    phone: '(800) 555-0201',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.5!2d-122.397!3d37.794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580627f5975e3%3A0x1b4e3e1f5a7b4f4b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1',
  },
];

export default function SmartWatchesStoreLocationPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Store Locations</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>Store Locations</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        {stores.map((store) => (
          <div key={store.id} style={{ marginBottom: '60px' }}>
            <div className="swsl-grid">
              <div className="swsl-info">
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '20px' }}>{store.name}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: '#999', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Address</p>
                    <p style={{ fontSize: '15px', color: '#333', margin: 0 }}>{store.address}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#999', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Hours</p>
                    <p style={{ fontSize: '15px', color: '#333', margin: 0 }}>{store.hours}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#999', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</p>
                    <a href={`tel:${store.phone.replace(/[^+\d]/g, '')}`} style={{ fontSize: '15px', color: '#111', textDecoration: 'none', fontWeight: 500 }}>{store.phone}</a>
                  </div>
                </div>
              </div>
              <div className="swsl-map">
                <iframe
                  src={store.mapSrc}
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '8px', display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${store.name} Map`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .swsl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
          padding-bottom: 60px;
          border-bottom: 1px solid #eee;
          margin-bottom: 60px;
        }
        .swsl-grid:last-child { border-bottom: none; }
        @media (min-width: 750px) {
          .swsl-grid { grid-template-columns: 1fr 2fr; gap: 60px; }
        }
      `}</style>
    </>
  );
}
