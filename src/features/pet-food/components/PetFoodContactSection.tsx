'use client';

import Link from 'next/link';

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

function IconSocial({ children }: { children: React.ReactNode }) {
  return (
    <Link href="#" className="pf-contact-social" aria-label="Social link">
      {children}
    </Link>
  );
}

/* Pill-shaped single-line inputs (Name / Email / Phone). */
const pillInputStyle: React.CSSProperties = {
  width: '100%', padding: '14px 22px', fontSize: '14px',
  border: '1px solid #e0e0e0', borderRadius: '40px', outline: 'none',
  color: 'rgb(10, 66, 83)', backgroundColor: '#fff',
  transition: 'border-color 200ms ease, background-color 200ms ease',
};

/* Textarea — same visual language but rectangular rounded corners. */
const textareaStyle: React.CSSProperties = {
  width: '100%', padding: '14px 22px', fontSize: '14px',
  border: '1px solid #e0e0e0', borderRadius: '14px', outline: 'none',
  color: 'rgb(10, 66, 83)', backgroundColor: '#fff',
  resize: 'vertical', minHeight: '180px',
  transition: 'border-color 200ms ease, background-color 200ms ease',
};

export function PetFoodContactSection() {
  return (
    <section className="pf-contact-section">
      <div className="container-main">
        <h2 className="pf-contact-title">Get in touch</h2>

        <div className="pf-contact-grid">
          {/* Form (left, 65%) */}
          <div className="pf-contact-form-wrap">
            <form>
              <div className="pf-contact-row">
                <div>
                  <label className="pf-contact-label">Name *</label>
                  <input type="text" placeholder="Name" className="pf-contact-input" style={pillInputStyle} />
                </div>
                <div>
                  <label className="pf-contact-label">Email *</label>
                  <input type="email" placeholder="Email" className="pf-contact-input" style={pillInputStyle} />
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <label className="pf-contact-label">Phone number *</label>
                <input type="tel" placeholder="Phone number" className="pf-contact-input" style={pillInputStyle} />
              </div>

              <div style={{ marginTop: '20px' }}>
                <label className="pf-contact-label">Comment *</label>
                <textarea placeholder="Comment" rows={4} className="pf-contact-input" style={textareaStyle} />
              </div>

              <button type="submit" className="pf-contact-send">Send</button>
            </form>
          </div>

          {/* Info (right) */}
          <div className="pf-contact-info">
            <div className="pf-contact-row-info">
              <span className="pf-contact-icon"><IconPhone /></span>
              <div>
                <h3 className="pf-contact-h">Phone</h3>
                <p className="pf-contact-p">(372) 587-2335</p>
                <p className="pf-contact-p">(372) 555-4665</p>
              </div>
            </div>

            <div className="pf-contact-row-info">
              <span className="pf-contact-icon"><IconEmail /></span>
              <div>
                <h3 className="pf-contact-h">Email</h3>
                <p className="pf-contact-p">example@gmail.com</p>
                <p className="pf-contact-p">demo@gmail.com</p>
              </div>
            </div>

            <div className="pf-contact-row-info">
              <span className="pf-contact-icon"><IconAddress /></span>
              <div>
                <h3 className="pf-contact-h">Address</h3>
                <p className="pf-contact-p">Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301</p>
              </div>
            </div>

            <div style={{ marginTop: '18px' }}>
              <h3 className="pf-contact-h" style={{ marginBottom: 10 }}>Follow us</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <IconSocial>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </IconSocial>
                <IconSocial>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                </IconSocial>
                <IconSocial>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /></svg>
                </IconSocial>
                <IconSocial>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.8a4.83 4.83 0 0 1-1-.11z" /></svg>
                </IconSocial>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pf-contact-section { padding: 0; }
        .pf-contact-title {
          font-size: 30px;
          font-weight: 800;
          color: rgb(10, 66, 83);
          text-align: center;
          margin-bottom: 40px;
        }
        .pf-contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
        }
        /* Form card (left, 65% at desktop) — white with subtle border */
        .pf-contact-form-wrap {
          padding: 36px;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e5e5e5;
          display: flex;
          flex-direction: column;
        }
        .pf-contact-form-wrap form {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .pf-contact-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .pf-contact-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: rgb(10, 66, 83);
          margin-bottom: 8px;
        }
        .pf-contact-input::placeholder {
          color: rgb(10 66 83 / 45%);
        }
        .pf-contact-input:focus {
          border-color: rgb(10, 66, 83) !important;
        }
        .pf-contact-send {
          margin-top: auto;
          align-self: flex-start;
          background: rgb(10, 66, 83);
          color: #fff;
          border: none;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 40px;
          border-radius: 40px;
          cursor: pointer;
          transition: background 200ms ease;
        }
        .pf-contact-send:hover { background: rgb(6, 46, 60); }

        /* Info panel (right, 35% at desktop) — light gray card */
        .pf-contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
          background: #f4f5f7;
          border-radius: 14px;
          padding: 36px 32px;
        }
        .pf-contact-row-info {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .pf-contact-icon {
          color: rgb(10, 66, 83);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .pf-contact-h {
          font-size: 17px;
          font-weight: 700;
          color: rgb(10, 66, 83);
          margin-bottom: 6px;
        }
        .pf-contact-p {
          font-size: 14px;
          color: rgb(10, 66, 83);
          line-height: 1.55;
        }
        .pf-contact-social {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgb(10, 66, 83);
          background: #e3e5e8;
          transition: background 200ms ease, color 200ms ease;
        }
        .pf-contact-social:hover {
          background: rgb(10, 66, 83);
          color: #fff;
        }

        @media (min-width: 750px) {
          .pf-contact-row { grid-template-columns: 1fr 1fr; }
        }
        /* ≥ 992px — 65 / 35 split, form locked to 640px */
        @media (min-width: 992px) {
          .pf-contact-grid {
            grid-template-columns: 65% 35%;
            gap: 24px;
          }
          .pf-contact-form-wrap { height: 640px; padding: 44px; }
          .pf-contact-info { padding: 44px 36px; }
        }
      `}</style>
    </section>
  );
}
