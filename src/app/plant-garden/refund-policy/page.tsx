'use client';

import Link from 'next/link';

const para: React.CSSProperties = { marginBottom: '20px' };

export default function PlantGardenRefundPolicyPage() {
  return (
    <>
      <div className="pg-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/plant-garden-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="pg-rp-h1">Refund policy</h1>
        </div>
      </div>

      <div className="container-main pg-rp-content-wrap">
        <div className="pg-rp-prose">

          <p style={para}>We want you to be completely satisfied with every purchase. Because plants are living products, please inspect your order on delivery and reach out quickly if anything is wrong — the sooner we know, the better we can help.</p>

          <h2 className="pg-rp-h2">Alive-on-Arrival Guarantee</h2>
          <p style={para}>Every plant we ship is guaranteed to arrive alive and in good health. If your plant arrives visibly damaged, dead, or not as described, photograph it on the day of delivery and contact us within 48 hours. We will send a replacement at no charge or issue a full refund — your choice.</p>

          <h2 className="pg-rp-h2">30-Day Returns (Non-Perishables)</h2>
          <p style={para}>Pots, planters, garden tools, accessories, and seed packets may be returned within 30 days of delivery for a full refund, provided the item is unused, in its original packaging, and in the same condition you received it. Opened seed packets and items marked as final sale are not eligible for return.</p>

          <h2 className="pg-rp-h2">How to Initiate a Return</h2>
          <p style={para}>Contact our support team at hello@greengarden.com with your order number and reason for return. We will provide a prepaid return shipping label within 1–2 business days. Once we receive and inspect the returned item, we will process your refund within 5–7 business days.</p>

          <h2 className="pg-rp-h2">Wrong or Defective Items</h2>
          <p style={para}>If you received the wrong item or it was defective, contact us immediately. We will ship a replacement at no charge or issue a full refund — your choice. We may ask for a photo of the item to expedite the process.</p>

          <h2 className="pg-rp-h2">Non-returnable Items</h2>
          <p style={para}>Live plants (covered by alive-on-arrival guarantee, not a return policy), opened seed packets, items missing original packaging, and items marked final sale cannot be accepted back. These exclusions exist to protect both quality and biosecurity.</p>

          <h2 className="pg-rp-h2">Refund Timing</h2>
          <p style={para}>Approved refunds are credited to your original payment method within 5–10 business days. Shipping charges are non-refundable unless the return is due to our error.</p>
          <p style={{ marginBottom: '0' }}>Questions about a return or refund? Email us at hello@greengarden.com and our team will respond within one business day.</p>

        </div>
      </div>

      <style>{`
        .pg-rp-page-header { background-color: #f5f7f2; padding: 40px 0 50px; text-align: center; }
        .pg-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .pg-rp-content-wrap { padding-block: 60px 100px; }
        .pg-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .pg-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .pg-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .pg-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .pg-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .pg-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .pg-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}
