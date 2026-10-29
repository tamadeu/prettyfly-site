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

function IconSocial({ children }: { children: React.ReactNode }) {
  return (
    <span className="fa-contact-social-icon">{children}</span>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="fa-contact-page-header">
        <div className="container-main">
          <h1 className="fa-contact-h1">Contato</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Início</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Contato</span>
          </div>
        </div>
      </div>

      {/* Section 1 — Form + Contact Info */}
      <div className="container-main fa-contact-section">
        <h2 className="fa-contact-h2">Entre em contato</h2>
        <div className="fa-contact-grid">
          {/* Form */}
          <div className="fa-contact-form-card">
            <form>
              <div className="fa-contact-form-row">
                <div>
                  <label className="fa-contact-label">Nome *</label>
                  <input type="text" placeholder="Nome" className="fa-contact-input" />
                </div>
                <div>
                  <label className="fa-contact-label">E-mail *</label>
                  <input type="email" placeholder="E-mail" className="fa-contact-input" />
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label className="fa-contact-label">Telefone *</label>
                <input type="tel" placeholder="Telefone" className="fa-contact-input" />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <label className="fa-contact-label">Comentário *</label>
                <textarea placeholder="Comentário" rows={5} className="fa-contact-input fa-contact-textarea" />
              </div>
              <button type="submit" className="fa-contact-send-btn">Enviar</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="fa-contact-info">
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#222' }}><IconPhone /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Telefone</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>(372) 587-2335</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>(372) 555-4665</p>
              </div>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#222' }}><IconEmail /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>E-mail</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>example@gmail.com</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>demo@gmail.com</p>
              </div>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#222' }}><IconAddress /></span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222' }}>Endereço</h3>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>123 MOUNT STREET</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>LONDON</p>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.7 }}>W1K 3NB</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222', marginBottom: '14px' }}>Siga-nos</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <IconSocial>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </IconSocial>
                <IconSocial>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                </IconSocial>
                <IconSocial>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /></svg>
                </IconSocial>
                <IconSocial>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.8a4.83 4.83 0 0 1-1-.11z" /></svg>
                </IconSocial>
                <IconSocial>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </IconSocial>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 — Map */}
      <div className="fa-contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9541.0!2d-6.2603!3d53.3498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1"
          width="100%"
          height="550"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="fa-contact-map-overlay">
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#222', marginBottom: '14px' }}>Encontre nossa loja</h3>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#222', marginBottom: '6px' }}>Endereço</p>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>South Street road,<br />SUITE Connaught Street Suite 232.</p>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#222', marginBottom: '6px' }}>Horário de funcionamento</p>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '20px' }}>
            Seg. a sex., 7h às 16h<br />
            Sábado, 8h30 às 18h30<br />
            Domingo, 10h às 18h
          </p>
          <button className="fa-contact-direction-btn">COMO CHEGAR</button>
        </div>
      </div>

      <style>{`
        .fa-contact-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .fa-contact-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .fa-contact-section { padding-block: 80px; }
        .fa-contact-h2 { font-size: 32px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .fa-contact-grid { display: grid; grid-template-columns: 60% 40%; gap: 50px; align-items: start; }
        .fa-contact-form-card { padding: 36px 40px; box-shadow: 0 2px 20px rgba(0,0,0,0.06); border: 1px solid #f0f0f0; border-radius: 12px; }
        .fa-contact-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .fa-contact-label { display: block; font-size: 14px; font-weight: 600; color: #222; margin-bottom: 8px; }
        .fa-contact-input { width: 100%; padding: 12px 16px; font-size: 14px; border-radius: 8px; border: 1px solid #e0e0e0; outline: none; color: #222; background: #fff; transition: border-color 200ms ease; }
        .fa-contact-input:focus { border-color: #222; }
        .fa-contact-input::placeholder { color: #bbb; }
        .fa-contact-textarea { resize: vertical; min-height: 130px; }
        .fa-contact-send-btn { padding: 14px 36px; font-size: 15px; font-weight: 600; background: #222; color: #fff; border: none; border-radius: 8px; cursor: pointer; transition: background 250ms ease; }
        .fa-contact-send-btn:hover { background: #F15B41; }
        .fa-contact-info { padding-left: 20px; }
        .fa-contact-map-section { position: relative; width: 100%; height: 550px; background: #f0f0f0; }
        .fa-contact-map-overlay { position: absolute; bottom: 30px; left: 30px; z-index: 5; background: #fff; padding: 36px 38px; width: 370px; box-shadow: 0 4px 20px rgba(0,0,0,0.12); border-radius: 10px; }
        .fa-contact-direction-btn { width: 100%; padding: 16px 0; font-size: 14px; font-weight: 700; background: #222; color: #fff; border: none; border-radius: 40px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: background 250ms ease; }
        .fa-contact-direction-btn:hover { background: #F15B41; }
        .fa-contact-social-icon { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #e0e0e0; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; color: #555; transition: all 200ms ease; }
        .fa-contact-social-icon:hover { background: #222; color: #fff; border-color: #222; }
        @media (max-width: 991px) {
          .fa-contact-grid { grid-template-columns: 1fr; }
          .fa-contact-info { padding-left: 0; }
        }
        @media (max-width: 749px) {
          .fa-contact-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .fa-contact-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-contact-section { padding-block: clamp(48px, 8vw, 80px); }
          .fa-contact-h2 { font-size: clamp(20px, 5vw, 32px); margin-bottom: clamp(28px, 5vw, 50px); }
          .fa-contact-form-card { padding: 24px 20px; }
          .fa-contact-form-row { grid-template-columns: 1fr; }
          .fa-contact-map-section { height: auto; }
          .fa-contact-map-section iframe { height: 300px; }
          .fa-contact-map-overlay { position: static; width: 100%; border-radius: 0; box-shadow: none; border-top: 1px solid #eee; padding: 28px 24px; }
        }
      `}</style>
    </>
  );
}
