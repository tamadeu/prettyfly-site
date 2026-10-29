'use client';

import Link from 'next/link';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', fontSize: '14px',
  border: '1px solid #e0e0e0', outline: 'none', color: '#222',
  backgroundColor: '#fff', transition: 'border-color 200ms ease',
  boxSizing: 'border-box',
};

export default function SmartWatchesContactPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Contact us</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>Contact us</h1>
        </div>
      </div>

      <div className="container-main swcontact-body">
        <div className="swcontact-grid">
          {/* Contact Info */}
          <div className="swcontact-info">
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Get in touch</h2>
            <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.7, marginBottom: '36px' }}>
              Have questions about your order or our watches? We're here to help. Reach out and we'll respond within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { label: 'Phone', value: '+1 (800) 555-0199', href: 'tel:+18005550199' },
                { label: 'Email', value: 'support@smartwatches.shop', href: 'mailto:support@smartwatches.shop' },
                { label: 'Address', value: '100 Technology Plaza, New York, NY 10001', href: null },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: '#999', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '15px', color: '#111', textDecoration: 'none', fontWeight: 500 }}>{item.value}</a>
                  ) : (
                    <p style={{ fontSize: '15px', color: '#111', fontWeight: 500, margin: 0 }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="swcontact-form-wrap">
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '6px' }}>First name</label>
                  <input type="text" placeholder="John" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '6px' }}>Last name</label>
                  <input type="text" placeholder="Doe" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '6px' }}>Email address</label>
                <input type="email" placeholder="john@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '6px' }}>Subject</label>
                <input type="text" placeholder="How can we help?" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '6px' }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us more about your enquiry..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                style={{ background: '#111', color: '#fff', border: 'none', padding: '14px 32px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', borderRadius: '4px', transition: 'background 200ms ease', alignSelf: 'flex-start' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#333'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#111'; }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .swcontact-body { padding-top: 80px; padding-bottom: 80px; }
        .swcontact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
        }
        @media (min-width: 992px) {
          .swcontact-grid { grid-template-columns: 2fr 3fr; gap: 80px; }
        }
        @media (max-width: 749px) {
          .swcontact-body { padding-top: 50px; padding-bottom: 50px; }
        }
      `}</style>
    </>
  );
}
