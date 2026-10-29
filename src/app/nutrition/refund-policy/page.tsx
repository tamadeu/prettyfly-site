'use client';

import Link from 'next/link';

export default function NutritionRefundPolicyPage() {
  return (
    <>
      <div className="nt-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="nt-rp-h1">Refund policy</h1>
        </div>
      </div>

      <div className="container-main nt-rp-content-wrap">
        <div className="nt-rp-prose">

          <p style={para}><em>Last updated: April 21, 2026</em></p>
          <p style={para}>We want every scoop to count. If a product arrives damaged, mislabeled, or otherwise not as described, we will make it right.</p>

          <h2 className="nt-rp-h2">30-Day Satisfaction Window</h2>
          <p style={para}>You have 30 days from the delivery date to request a refund or replacement on unopened products. Opened supplements may be eligible for partial refund if the formula doesn&apos;t work for you — reach out and we&apos;ll review case-by-case.</p>

          <h2 className="nt-rp-h2">How to Request a Refund</h2>
          <ul style={list}>
            <li>Email support@ambaz-nutrition.com with your order number and a brief description.</li>
            <li>Include a photo if the package arrived damaged or the seal was broken.</li>
            <li>We&apos;ll respond within two business days with next steps.</li>
          </ul>

          <h2 className="nt-rp-h2">Exchanges</h2>
          <p style={para}>Wrong flavor shipped? Wrong size? We&apos;ll ship a replacement at no cost and cover the return label.</p>

          <h2 className="nt-rp-h2">Damaged in Transit</h2>
          <p style={para}>If your order arrives damaged, keep the packaging and photograph it. Contact us within 7 days of delivery so we can file a claim with the carrier and rush you a replacement.</p>

          <h2 className="nt-rp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about this refund policy? Email support@ambaz-nutrition.com.</p>

        </div>
      </div>

      <style>{`
        .nt-rp-page-header { background-color: #f4f5f7; padding: 40px 0 50px; text-align: center; }
        .nt-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .nt-rp-content-wrap { padding-block: 60px 100px; }
        .nt-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .nt-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .nt-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .nt-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .nt-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .nt-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .nt-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
