'use client';

import Link from 'next/link';

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 31.568 31.128" fill="currentColor">
      <path d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z" transform="translate(-3 -1)" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 31.57 31.13" fill="currentColor">
      <path d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" transform="translate(-2 -4)" />
    </svg>
  );
}

function IconAddress() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 31.57 31.13" fill="currentColor">
      <path d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" transform="translate(-2 -1)" />
    </svg>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', fontSize: '14px', borderRadius: '8px',
  border: '1px solid #e0e0e0', outline: 'none', color: '#222',
  backgroundColor: '#fff', transition: 'border-color 200ms ease',
};

export default function PlantGardenContactPage() {
  return (
    <>
      <div className="pg-contact-page-header">
        <div className="container-main">
          <h1 className="pg-contact-page-h1">Contact</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/plant-garden-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Contact</span>
          </div>
        </div>
      </div>

      <div className="container-main pg-contact-section-wrap">
        <h2 className="pg-contact-section-h2">Get in touch</h2>

        <div className="pg-contact-grid">
          <div className="pg-contact-form-card">
            <form>
              <div className="pg-contact-field-row">
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Name *</label>
                  <input type="text" placeholder="Name" className="pg-contact-input" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Email *</label>
                  <input type="email" placeholder="Email" className="pg-contact-input" style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Phone number *</label>
                <input type="tel" placeholder="Phone number" className="pg-contact-input" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Plant type or garden query</label>
                <input type="text" placeholder="e.g. Indoor succulent, outdoor fern, raised beds..." className="pg-contact-input" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>How can we help? *</label>
                <textarea placeholder="Tell us about your order, a plant care question, or what you are looking for..." rows={5} className="pg-contact-input" style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }} />
              </div>

              <button type="submit" className="pg-contact-send-btn">
                Send
              </button>
            </form>
          </div>

          <div className="pg-contact-info-col">
            <div className="pg-contact-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#3a7d44' }}><IconPhone /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Phone</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>(800) 555-GROW</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>(800) 555-4769</p>
              </div>
            </div>

            <div className="pg-contact-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#3a7d44' }}><IconEmail /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Email</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>hello@greengarden.com</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>orders@greengarden.com</p>
              </div>
            </div>

            <div className="pg-contact-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#3a7d44' }}><IconAddress /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Garden Centre</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>42 Bloom Street</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>Portland, OR</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>97201</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pg-contact-map-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178980.04!2d-122.728!3d45.523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pg-contact-map-card">
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222', marginBottom: '14px' }}>Visit Our Garden Centre</h3>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#222', marginBottom: '6px' }}>Address</p>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>42 Bloom Street,<br />Portland, OR 97201.</p>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#222', marginBottom: '6px' }}>Store hours</p>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '20px' }}>
            Mon - Fri, 8:00am - 06:00pm<br />
            Saturday, 9:00am - 05:00pm<br />
            Sunday, 10:00am - 04:00pm
          </p>
          <button className="pg-contact-direction-btn">
            GET DIRECTION
          </button>
        </div>
      </div>

      <div style={{ height: '80px' }} />

      <style>{`
        .pg-contact-page-header { background-color: #f5f7f2; padding: 40px 0 50px; text-align: center; }
        .pg-contact-page-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .pg-contact-section-wrap { padding-block: 80px; }
        .pg-contact-section-h2 { font-size: 32px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .pg-contact-form-card {
          padding: 36px 40px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          border: 1px solid #f0f0f0;
          border-radius: 12px;
        }
        .pg-contact-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .pg-contact-send-btn {
          padding: 14px 36px;
          font-size: 15px;
          font-weight: 600;
          background-color: #3a7d44;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 250ms ease;
        }
        .pg-contact-send-btn:hover { background-color: #2d6235; }
        .pg-contact-info-col { padding-left: 20px; }
        .pg-contact-info-item { margin-bottom: 32px; }
        .pg-contact-map-wrap { position: relative; width: 100%; height: 550px; background-color: #f0f0f0; }
        .pg-contact-map-card {
          position: absolute;
          bottom: 30px;
          left: 30px;
          z-index: 5;
          background-color: #fff;
          padding: 36px 38px;
          width: 370px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
          border-radius: 10px;
        }
        .pg-contact-direction-btn {
          width: 100%;
          padding: 16px 0;
          font-size: 14px;
          font-weight: 700;
          background-color: #3a7d44;
          color: #fff;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: background-color 250ms ease;
        }
        .pg-contact-direction-btn:hover { background-color: #2d6235; }
        .pg-contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .pg-contact-grid { grid-template-columns: 60% 40%; }
        }
        .pg-contact-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 14px;
          border: 1px solid #e0e0e0;
          outline: none;
          color: #222;
          background-color: #fff;
          transition: border-color 200ms ease;
        }
        .pg-contact-input:focus { border-color: #3a7d44; }
        .pg-contact-input::placeholder { color: #bbb; }
        @media (max-width: 991px) {
          .pg-contact-grid { gap: clamp(30px, 5vw, 50px); }
          .pg-contact-info-col { display: flex; flex-wrap: wrap; gap: 30px; padding-left: 0; }
          .pg-contact-info-item { flex: 1; min-width: 180px; margin-bottom: 0; }
        }
        @media (max-width: 749px) {
          .pg-contact-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(32px, 7vw, 50px); }
          .pg-contact-page-h1 { font-size: clamp(28px, 7vw, 40px); }
          .pg-contact-section-wrap { padding-block: clamp(40px, 8vw, 80px); }
          .pg-contact-section-h2 { font-size: clamp(22px, 5.5vw, 32px); margin-bottom: clamp(30px, 6vw, 50px); }
          .pg-contact-grid { gap: clamp(24px, 5vw, 40px); }
          .pg-contact-form-card { padding: clamp(24px, 5vw, 36px) clamp(20px, 5vw, 40px); }
          .pg-contact-field-row { grid-template-columns: 1fr; }
          .pg-contact-send-btn {
            padding: clamp(12px, 3vw, 14px) clamp(24px, 5vw, 36px);
            font-size: clamp(14px, 3.8vw, 15px);
          }
          .pg-contact-info-col { gap: clamp(20px, 4vw, 30px); }
          .pg-contact-info-item { min-width: clamp(140px, 35vw, 180px); }
          .pg-contact-info-item h3 { font-size: clamp(18px, 4.5vw, 24px) !important; }
          .pg-contact-info-item p  { font-size: clamp(14px, 3.8vw, 17px) !important; }
          .pg-contact-map-wrap { height: auto; display: flex; flex-direction: column; }
          .pg-contact-map-wrap iframe { height: clamp(220px, 50vw, 300px); flex-shrink: 0; }
          .pg-contact-map-card {
            position: static;
            width: 100%;
            height: 420px;
            border-radius: 0;
            padding: clamp(24px, 5vw, 36px) clamp(16px, 5vw, 40px);
            box-sizing: border-box;
          }
        }
      `}</style>
    </>
  );
}
