'use client';

import Link from 'next/link';

export default function NutritionStoreLocationPage() {
  return (
    <>
      <div className="nsl-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Store Location</span>
          </div>
          <h1 className="nsl-h1">Store Location</h1>
        </div>
      </div>

      <div className="container-main nsl-section">
        <div className="nsl-grid">
          <div>
            <h2 className="nsl-section-h2">Visit Our Flagship</h2>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
              Come try the full range, ask our staff about formulations, and pick up your next batch fresh from the shelf.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '15px', color: '#333', lineHeight: 1.6 }}>
              <div>
                <strong style={{ color: '#222' }}>Address</strong>
                <p>Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301</p>
              </div>
              <div>
                <strong style={{ color: '#222' }}>Hours</strong>
                <p>Mon – Sat: 9:00 AM – 9:00 PM<br />Sun: 10:00 AM – 6:00 PM</p>
              </div>
              <div>
                <strong style={{ color: '#222' }}>Phone</strong>
                <p>(372) 587-2335</p>
              </div>
            </div>
          </div>

          <div className="nsl-map-wrap">
            <iframe
              title="Store location map"
              src="https://www.google.com/maps?q=Noida,+Uttar+Pradesh&output=embed"
              style={{ width: '100%', height: '100%', border: 'none', minHeight: '420px' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        .nsl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: stretch;
        }
        @media (min-width: 992px) {
          .nsl-grid { grid-template-columns: 1fr 1.3fr; gap: 60px; }
        }
        .nsl-page-header { background: #f4f5f7; padding: 40px 0 50px; text-align: center; }
        .nsl-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .nsl-section { padding-block: 80px; }
        .nsl-section-h2 { font-size: 28px; font-weight: 700; color: #222; margin-bottom: 20px; }
        .nsl-map-wrap { background: #f4f5f7; border-radius: 12px; overflow: hidden; min-height: 420px; }
        @media (max-width: 749px) {
          .nsl-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .nsl-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .nsl-section { padding-block: clamp(48px, 8vw, 80px); }
          .nsl-section-h2 { font-size: clamp(18px, 4.5vw, 28px); }
          .nsl-map-wrap { min-height: clamp(280px, 60vw, 420px); }
        }
      `}</style>
    </>
  );
}
