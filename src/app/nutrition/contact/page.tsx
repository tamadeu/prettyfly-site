'use client';

import Link from 'next/link';

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconAddress() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const pillInput: React.CSSProperties = {
  width: '100%', padding: '14px 22px', fontSize: '14px',
  border: '1px solid #e0e0e0', borderRadius: '40px', outline: 'none',
  color: '#222', backgroundColor: '#fff',
};
const textarea: React.CSSProperties = {
  width: '100%', padding: '14px 22px', fontSize: '14px',
  border: '1px solid #e0e0e0', borderRadius: '14px', outline: 'none',
  color: '#222', backgroundColor: '#fff', resize: 'vertical', minHeight: '180px',
};

export default function NutritionContactPage() {
  return (
    <>
      <div className="nct-page-header">
        <div className="container-main">
          <h1 className="nct-h1">Contact</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Contact</span>
          </div>
        </div>
      </div>

      <div className="container-main nct-section">
        <h2 className="nct-section-h2">Get in touch</h2>
        <div className="nct-grid">
          <div className="nct-form-wrap">
            <form>
              <div className="nct-row">
                <div>
                  <label className="nct-label">Name *</label>
                  <input type="text" placeholder="Name" style={pillInput} />
                </div>
                <div>
                  <label className="nct-label">Email *</label>
                  <input type="email" placeholder="Email" style={pillInput} />
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <label className="nct-label">Phone number *</label>
                <input type="tel" placeholder="Phone number" style={pillInput} />
              </div>
              <div style={{ marginTop: '20px' }}>
                <label className="nct-label">Comment *</label>
                <textarea placeholder="Comment" rows={4} style={textarea} />
              </div>
              <button type="submit" className="nct-send">Send</button>
            </form>
          </div>

          <div className="nct-info">
            <div className="nct-info-row">
              <span className="nct-icon"><IconPhone /></span>
              <div>
                <h3 className="nct-h">Phone</h3>
                <p className="nct-p">(372) 587-2335</p>
                <p className="nct-p">(372) 555-4665</p>
              </div>
            </div>
            <div className="nct-info-row">
              <span className="nct-icon"><IconEmail /></span>
              <div>
                <h3 className="nct-h">Email</h3>
                <p className="nct-p">support@ambaz-nutrition.com</p>
                <p className="nct-p">hello@ambaz-nutrition.com</p>
              </div>
            </div>
            <div className="nct-info-row">
              <span className="nct-icon"><IconAddress /></span>
              <div>
                <h3 className="nct-h">Address</h3>
                <p className="nct-p">Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nct-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .nct-form-wrap {
          padding: 36px;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e5e5e5;
        }
        .nct-row { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .nct-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #222;
          margin-bottom: 8px;
        }
        .nct-send {
          margin-top: 24px;
          background: rgb(140, 255, 100);
          color: #0e1a0a;
          border: none;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 14px 40px;
          border-radius: 40px;
          cursor: pointer;
          transition: background 220ms ease;
        }
        .nct-send:hover { background: #b1d85a; }

        .nct-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
          background: #f4f5f7;
          border-radius: 14px;
          padding: 36px 32px;
        }
        .nct-info-row { display: flex; align-items: flex-start; gap: 14px; }
        .nct-icon { color: #222; flex-shrink: 0; margin-top: 2px; }
        .nct-h { font-size: 17px; font-weight: 700; color: #222; margin-bottom: 6px; }
        .nct-p { font-size: 14px; color: #555; line-height: 1.55; }

        @media (min-width: 750px) {
          .nct-row { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .nct-grid { grid-template-columns: 65% 35%; gap: 24px; }
          .nct-form-wrap { padding: 44px; height: 640px; display: flex; flex-direction: column; }
          .nct-form-wrap form { display: flex; flex-direction: column; height: 100%; }
          .nct-send { margin-top: auto; align-self: flex-start; }
          .nct-info { padding: 44px 36px; }
        }
        .nct-page-header { background-color: #f4f5f7; padding: 40px 0 50px; text-align: center; }
        .nct-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .nct-section { padding-block: 80px; }
        .nct-section-h2 { font-size: 32px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        @media (max-width: 749px) {
          .nct-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .nct-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .nct-section { padding-block: clamp(48px, 8vw, 80px); }
          .nct-section-h2 { font-size: clamp(20px, 5vw, 32px); margin-bottom: clamp(28px, 5vw, 50px); }
        }
      `}</style>
    </>
  );
}
