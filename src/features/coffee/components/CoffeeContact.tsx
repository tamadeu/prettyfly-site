'use client';

/* Forked from the "Get in touch" section in skill/contact-get-in-touch.md
   (src/app/car-accessories/contact/page.tsx) — form + info column only, no
   page header/breadcrumb/map, since this is a homepage section. The
   screenshot's form has no domain-specific field (just Name/Email/Phone/
   Comment), so that optional field is dropped here. */

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
function IconAddress() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31.57 31.13" fill="currentColor">
      <path d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" transform="translate(-2 -1)" />
    </svg>
  );
}
function IconTwitterX() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" /></svg>); }
function IconFacebook() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z" /></svg>); }
function IconInstagram() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" /></svg>); }
function IconTikTok() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z" /></svg>); }

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', fontSize: '14px', borderRadius: '8px',
  border: '1px solid #e5d8c4', outline: 'none', color: '#2a2118',
  backgroundColor: '#fff', transition: 'border-color 200ms ease',
};

export function CoffeeContact() {
  return (
    <section className="cfct-section">
      <div className="container-main cfct-wrap">
        <h2 className="cfct-h2">Get in touch</h2>

        <div className="cfct-grid">
          <div className="cfct-form-card">
            <form>
              <div className="cfct-field-row">
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2a2118', marginBottom: '8px' }}>Name *</label>
                  <input type="text" placeholder="Name" className="cfct-input" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2a2118', marginBottom: '8px' }}>Email *</label>
                  <input type="email" placeholder="Email" className="cfct-input" style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2a2118', marginBottom: '8px' }}>Phone number *</label>
                <input type="tel" placeholder="Phone number" className="cfct-input" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2a2118', marginBottom: '8px' }}>Comment *</label>
                <textarea placeholder="Comment" rows={5} className="cfct-input" style={{ ...inputStyle, resize: 'vertical', minHeight: '155px' }} />
              </div>

              <button type="submit" className="cfct-send-btn">Send</button>
            </form>
          </div>

          <div className="cfct-info-col">
            <div className="cfct-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#2a2118' }}><IconPhone /></span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#2a2118' }}>Phone</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '16px', color: '#6b5f52', lineHeight: 1.7 }}>(372) 587-2335</p>
                <p style={{ fontSize: '16px', color: '#6b5f52', lineHeight: 1.7 }}>(372) 555-4665</p>
              </div>
            </div>

            <div className="cfct-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#2a2118' }}><IconEmail /></span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#2a2118' }}>Email</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '16px', color: '#6b5f52', lineHeight: 1.7 }}>example@gmail.com</p>
                <p style={{ fontSize: '16px', color: '#6b5f52', lineHeight: 1.7 }}>demoo@gmail.com</p>
              </div>
            </div>

            <div className="cfct-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#2a2118' }}><IconAddress /></span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#2a2118' }}>Address</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '16px', color: '#6b5f52', lineHeight: 1.7 }}>Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301</p>
              </div>
            </div>

            <div className="cfct-info-item">
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#2a2118', marginBottom: '14px' }}>Follow us</h3>
              <div className="cfct-socials">
                <a href="#" aria-label="X" className="cfct-social-btn"><IconTwitterX /></a>
                <a href="#" aria-label="Facebook" className="cfct-social-btn"><IconFacebook /></a>
                <a href="#" aria-label="Instagram" className="cfct-social-btn"><IconInstagram /></a>
                <a href="#" aria-label="TikTok" className="cfct-social-btn"><IconTikTok /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cfct-wrap { padding-block: clamp(40px, 6vw, 80px); }
        .cfct-h2 { font-size: 32px; font-weight: 700; color: #2a2118; text-align: center; margin-bottom: 50px; }
        .cfct-form-card {
          padding: 44px 48px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          border: 1px solid #f0e4d4;
          border-radius: 12px;
          background: #fff;
        }
        .cfct-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .cfct-send-btn {
          padding: 14px 36px;
          font-size: 15px;
          font-weight: 600;
          background-color: #2a2118;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 250ms ease;
        }
        .cfct-send-btn:hover { background-color: #c8874a; }
        .cfct-info-col { padding-left: 20px; }
        .cfct-info-item { margin-bottom: 40px; }
        .cfct-input:focus { border-color: #c8874a !important; }
        .cfct-input::placeholder { color: #b3a794; }

        .cfct-socials { display: flex; gap: 10px; }
        .cfct-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f0e4d4;
          color: #2a2118;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .cfct-social-btn:hover { background: #c8874a; color: #fff; }

        .cfct-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .cfct-grid { grid-template-columns: 60% 40%; }
        }

        @media (max-width: 991px) {
          .cfct-grid { gap: clamp(30px, 5vw, 50px); }
          .cfct-info-col { display: flex; flex-wrap: wrap; gap: 30px; padding-left: 0; }
          .cfct-info-item { flex: 1; min-width: 180px; margin-bottom: 0; }
        }

        @media (max-width: 749px) {
          .cfct-h2 { font-size: clamp(22px, 5.5vw, 32px); margin-bottom: clamp(30px, 6vw, 50px); }
          .cfct-grid { gap: clamp(24px, 5vw, 40px); }
          .cfct-form-card { padding: clamp(24px, 5vw, 36px) clamp(20px, 5vw, 40px); }
          .cfct-field-row { grid-template-columns: 1fr; }
          .cfct-send-btn { padding: clamp(12px, 3vw, 14px) clamp(24px, 5vw, 36px); font-size: clamp(14px, 3.8vw, 15px); }
          .cfct-info-col { gap: clamp(20px, 4vw, 30px); }
          .cfct-info-item { min-width: clamp(140px, 35vw, 180px); }
          .cfct-info-item h3 { font-size: clamp(18px, 4.5vw, 22px) !important; }
          .cfct-info-item p { font-size: clamp(14px, 3.8vw, 16px) !important; }
        }
      `}</style>
    </section>
  );
}
