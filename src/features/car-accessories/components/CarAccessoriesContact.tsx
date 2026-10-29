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

export function CarAccessoriesContact() {
  return (
    <section>
      <div className="container-main ca-git-wrap">
        <h2 className="ca-git-h2">Get in touch</h2>

        <div className="ca-git-grid">
          {/* Left — form card */}
          <div className="ca-git-form-card">
            <form>
              <div className="ca-git-field-row">
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Name *</label>
                  <input type="text" placeholder="Name" className="ca-git-input" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Email *</label>
                  <input type="email" placeholder="Email" className="ca-git-input" style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Phone number *</label>
                <input type="tel" placeholder="Phone number" className="ca-git-input" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>Vehicle details</label>
                <input type="text" placeholder="Year, make, model, e.g. 2021 Toyota Camry..." className="ca-git-input" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>How can we help? *</label>
                <textarea
                  placeholder="Tell us about your order, a fitment question, or a part you are looking for..."
                  rows={5}
                  className="ca-git-input"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                />
              </div>

              <button type="submit" className="ca-git-send-btn">
                Send
              </button>
            </form>
          </div>

          {/* Right — info column */}
          <div className="ca-git-info-col">
            <div className="ca-git-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#fff' }}><IconPhone /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>Phone</h3>
              </div>
              <div style={{ paddingLeft: '42px' }}>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>(800) 555-AUTO</p>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>(800) 555-2886</p>
              </div>
            </div>

            <div className="ca-git-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#fff' }}><IconEmail /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>Email</h3>
              </div>
              <div style={{ paddingLeft: '42px' }}>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>support@autopro.com</p>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>orders@autopro.com</p>
              </div>
            </div>

            <div className="ca-git-info-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#fff' }}><IconAddress /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>Fulfillment Center</h3>
              </div>
              <div style={{ paddingLeft: '42px' }}>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>1234 AUTO DRIVE</p>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>DETROIT, MI</p>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>48201</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Inner wrapper — vertical spacing comes from page-level 80px section margin ── */
        .ca-git-wrap { padding-block: 0; }

        /* ── Centered heading ── */
        .ca-git-h2 {
          font-size: 32px;
          font-weight: 700;
          color: #222;
          text-align: center;
          margin: 0 0 50px;
        }

        /* ── Two-column grid: 60% form / 40% info ── */
        .ca-git-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          align-items: stretch;
        }
        @media (min-width: 992px) {
          .ca-git-grid { grid-template-columns: 3fr 2fr; }
        }

        /* ── Form card ── */
        .ca-git-form-card {
          padding: 36px 40px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f0;
          border-radius: 12px;
        }

        /* ── Name / Email two-column row ── */
        .ca-git-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        /* ── Input focus border ── */
        .ca-git-input:focus { border-color: #222 !important; }
        .ca-git-input::placeholder { color: #bbb; }

        /* ── Send button ── */
        .ca-git-send-btn {
          padding: 14px 36px;
          font-size: 15px;
          font-weight: 600;
          background-color: rgb(62, 106, 225);
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          transition: background-color 250ms ease;
        }
        .ca-git-send-btn:hover { background-color: rgb(45, 88, 200); }

        /* ── Info column ── */
        .ca-git-info-col {
          background-color: rgb(62, 106, 225);
          border-radius: 12px;
          padding: 32px;
        }
        .ca-git-info-item { margin-bottom: 32px; }

        /* ── Tablet: stack, info items flex-wrap ── */
        @media (max-width: 991px) {
          .ca-git-grid { gap: clamp(30px, 5vw, 50px); }
          .ca-git-info-col {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
          }
          .ca-git-info-item { flex: 1; min-width: 180px; margin-bottom: 0; }
        }

        /* ── Mobile: fluid scaling ── */
        @media (max-width: 749px) {
          .ca-git-wrap { padding-block: 0; }
          .ca-git-h2 { font-size: clamp(22px, 5.5vw, 32px); margin-bottom: clamp(30px, 6vw, 50px); }
          .ca-git-grid { gap: clamp(24px, 5vw, 40px); }
          .ca-git-form-card { padding: clamp(24px, 5vw, 36px) clamp(20px, 5vw, 40px); }
          .ca-git-field-row { grid-template-columns: 1fr; }
          .ca-git-send-btn {
            width: 100%;
            padding: clamp(12px, 3vw, 14px) clamp(24px, 5vw, 36px);
            font-size: clamp(14px, 3.8vw, 15px);
            border-radius: 40px;
          }
          .ca-git-info-col { gap: clamp(20px, 4vw, 30px); }
          .ca-git-info-item { min-width: clamp(140px, 35vw, 180px); }
          .ca-git-info-item h3 { font-size: clamp(18px, 4.5vw, 24px) !important; }
          .ca-git-info-item p  { font-size: clamp(14px, 3.8vw, 17px) !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  fontSize: '14px',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
  outline: 'none',
  color: '#222',
  backgroundColor: '#fff',
  transition: 'border-color 200ms ease',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};
