'use client';

import Link from 'next/link';

export default function MegastoreRefundPolicyPage() {
  return (
    <>
      <div className="ms-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/megastore-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="ms-rp-h1">Refund policy</h1>
        </div>
      </div>

      <div className="container-main ms-rp-content-wrap">
        <div className="ms-rp-prose">

          <p style={para}>We want every order to arrive in perfect working condition. Please inspect your electronics on delivery and reach out quickly if anything is wrong — clear photos and the order number speed things up.</p>

          <h2 className="ms-rp-h2">30-Day Return Window</h2>
          <p style={para}>Unopened electronics in original packaging may be returned within 30 days of delivery for a full refund. Items must include all manuals, cables, and accessories that shipped in the box. Email support@ambaz.com to start a return; we will issue a prepaid label and instructions.</p>

          <h2 className="ms-rp-h2">Defective on Arrival (DOA)</h2>
          <p style={para}>If a device powers up to a fault, fails self-test, or has visible defects out of the box, contact us within 14 days of delivery. We will arrange a free replacement on the next available shipment, or a full refund — your choice. Keep the original packaging until we confirm.</p>

          <h2 className="ms-rp-h2">Manufacturer Warranty Claims</h2>
          <p style={para}>For defects discovered after the 30-day window but inside the manufacturer warranty, we will help coordinate the warranty claim with the brand. Some categories (laptops, cameras) ship with serial-numbered registration cards — keep them for faster claims.</p>

          <h2 className="ms-rp-h2">Damaged or Incorrect Shipments</h2>
          <p style={para}>If the carrier delivers a damaged box, refuse the delivery if possible and contact us right away. If you have already accepted it and the device is damaged or incorrect, send photos within 48 hours and we will dispatch a replacement at no additional cost.</p>

          <h2 className="ms-rp-h2">Restocking &amp; Non-returnable Items</h2>
          <p style={para}>Opened software, downloadable license keys, customized engraving, and clearance items marked &ldquo;final sale&rdquo; cannot be returned. Opened headphones, earbuds, and other in-ear electronics may be subject to a 15% restocking fee for hygiene reasons.</p>

          <h2 className="ms-rp-h2">Refund Timing</h2>
          <p style={para}>Approved refunds are issued to the original payment method within 5 business days after we receive the returned item and inspect it. Card refunds may take an additional 2–5 business days to appear on your statement, depending on your bank.</p>
          <p style={{ marginBottom: '0' }}>Questions about a return or warranty claim? Email us at support@ambaz.com and our team will respond within one business day.</p>

        </div>
      </div>

      <style>{`
        .ms-rp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ms-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .ms-rp-content-wrap { padding-block: 60px 100px; }
        .ms-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .ms-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        @media (max-width: 749px) {
          .ms-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ms-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ms-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ms-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ms-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
