'use client';

import Link from 'next/link';

export default function CarAccessoriesRefundPolicyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="ca-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/car-accessories-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="ca-rp-h1">Refund policy</h1>
        </div>
      </div>

      {/* ── Content Block ── */}
      <div className="container-main ca-rp-content-wrap">
        <div className="ca-rp-prose">

          <p style={para}>We want you to be completely satisfied with every purchase. Because auto parts and accessories must fit your specific vehicle, please inspect your order on delivery and reach out quickly if anything is wrong.</p>

          <h2 className="ca-rp-h2">30-Day Returns</h2>
          <p style={para}>You may return most items within 30 days of delivery for a full refund, provided the item is unused, in its original packaging, and in the same condition you received it. Electrical components, items marked as final sale, and parts that have been installed are not eligible for return.</p>

          <h2 className="ca-rp-h2">How to Initiate a Return</h2>
          <p style={para}>Contact our support team at support@autopro.com with your order number and reason for return. We will provide a prepaid return shipping label within 1–2 business days. Once we receive and inspect the returned item, we will process your refund within 5–7 business days.</p>

          <h2 className="ca-rp-h2">Wrong or Defective Items</h2>
          <p style={para}>If you received the wrong item or your part was defective, contact us immediately. We will ship a replacement at no charge or issue a full refund — your choice. We may ask for a photo of the item to expedite the process.</p>

          <h2 className="ca-rp-h2">Fitment Issues</h2>
          <p style={para}>If a part does not fit your vehicle despite our compatibility guarantee, we will accept the return and cover return shipping. Please verify the year, make, model, and sub-model of your vehicle before ordering.</p>

          <h2 className="ca-rp-h2">Non-returnable Items</h2>
          <p style={para}>We cannot accept returns of installed parts, items missing original packaging, parts marked final sale, or electrical components that have been powered on. These exclusions exist for safety and quality assurance.</p>

          <h2 className="ca-rp-h2">Refund Timing</h2>
          <p style={para}>Approved refunds are credited to your original payment method within 5–10 business days. Shipping charges are non-refundable unless the return is due to our error.</p>
          <p style={{ marginBottom: '0' }}>Questions about a return or refund? Email us at support@autopro.com and our team will respond within one business day.</p>

        </div>
      </div>

      <style>{`
        /* ─── base ─── */
        .ca-rp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ca-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .ca-rp-content-wrap { padding-block: 60px 100px; }
        .ca-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .ca-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        /* ─── ≤749px: fluid scaling ─── */
        @media (max-width: 749px) {
          .ca-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ca-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ca-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ca-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ca-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
