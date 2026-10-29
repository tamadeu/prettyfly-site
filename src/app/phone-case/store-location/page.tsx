import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Store Location — Phone Case Shop',
  description: 'Find your nearest Phone Case Shop store.',
};

const stores = [
  {
    id: 'ny',
    name: 'New York Flagship',
    address: '48 West 25th Street, New York, NY 10010',
    hours: 'Mon–Fri: 10am–8pm · Sat: 10am–7pm · Sun: 11am–6pm',
    phone: '(800) 555-0100',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6!2d-73.994!3d40.744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4a4e4c77f%3A0xd134e199a405a163!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1',
  },
  {
    id: 'la',
    name: 'Los Angeles Store',
    address: '123 Melrose Avenue, Los Angeles, CA 90046',
    hours: 'Mon–Fri: 10am–9pm · Sat: 10am–8pm · Sun: 12pm–6pm',
    phone: '(800) 555-0102',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8!2d-118.362!3d34.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9c0e4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1',
  },
];

export default function PhoneCaseStoreLocationPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Store Locations</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/phone-case-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Store Locations</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="pcloc-grid">
          {stores.map((store) => (
            <div key={store.id} className="pcloc-store">
              <div className="pcloc-map">
                <iframe
                  src={store.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="pcloc-info">
                <h2 className="pcloc-name">{store.name}</h2>
                <div className="pcloc-detail">
                  <strong>Address</strong>
                  <p>{store.address}</p>
                </div>
                <div className="pcloc-detail">
                  <strong>Hours</strong>
                  <p>{store.hours}</p>
                </div>
                <div className="pcloc-detail">
                  <strong>Phone</strong>
                  <p>{store.phone}</p>
                </div>
                <a href={`https://maps.google.com?q=${encodeURIComponent(store.address)}`} target="_blank" rel="noopener noreferrer" className="pcloc-btn">
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pcloc-grid {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .pcloc-store {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }

        .pcloc-map {
          width: 100%;
          height: 380px;
          border-radius: 10px;
          overflow: hidden;
          background: #f0f0f0;
        }

        .pcloc-info { }

        .pcloc-name {
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 700;
          color: #111;
          margin: 0 0 24px;
        }

        .pcloc-detail { margin-bottom: 16px; }
        .pcloc-detail strong { display: block; font-size: 13px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .pcloc-detail p { font-size: 16px; color: #333; line-height: 1.6; margin: 0; }

        .pcloc-btn {
          display: inline-flex;
          align-items: center;
          margin-top: 20px;
          background: #111;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 220ms ease;
        }
        .pcloc-btn:hover { background: #333; }

        @media (min-width: 992px) {
          .pcloc-store { grid-template-columns: 55% 1fr; }
          .pcloc-map { height: 460px; }
        }
      `}</style>
    </>
  );
}
