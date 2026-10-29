'use client';

import Link from 'next/link';

export default function HeadphonesRefundPolicyPage() {
  return (
    <>
      <div className="hp-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/headphones-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="hp-rp-h1">Refund policy</h1>
        </div>
      </div>

      <div className="container-main hp-rp-content-wrap">
        <div className="hp-rp-prose">

          <p style={para}><em>Last updated: May 19, 2026</em></p>

          <p style={para}>We want you to love your audio gear. If something isn&apos;t right, we&apos;re here to help. Please review our refund and return policy below.</p>

          <h2 className="hp-rp-h2">30-Day Return Guarantee</h2>
          <p style={para}>If you are not completely satisfied with your purchase, you may return any item within 30 days of delivery for a full refund — provided the product is in its original, unused condition with all packaging, accessories, and documentation included.</p>

          <h2 className="hp-rp-h2">Sound Quality Guarantee</h2>
          <p style={para}>If your headphones or audio device does not perform as described in our product listing — including advertised frequency response, noise-cancellation performance, or connectivity specs — we will offer a full refund or replacement at no charge. Please contact support within 14 days of delivery to initiate a claim.</p>

          <h2 className="hp-rp-h2">Accessories and Cables</h2>
          <p style={para}>Cables, ear cushions, carrying cases, and other accessories are eligible for return within 14 days, provided they are unused and in original packaging. Opened consumable accessories (e.g., replacement ear pads) are non-returnable unless defective.</p>

          <h2 className="hp-rp-h2">Damaged or Incorrect Orders</h2>
          <p style={para}>If your order arrives damaged or contains the wrong item, please contact us within 7 days of delivery. Include photos of the damage or incorrect product, and we will arrange a replacement or refund at our expense — no return shipping required.</p>

          <h2 className="hp-rp-h2">Non-Returnable Items</h2>
          <ul style={list}>
            <li>Products that have been physically damaged by the customer after delivery.</li>
            <li>Items returned more than 30 days after delivery without prior authorisation.</li>
            <li>Digital products, firmware downloads, or software licenses.</li>
            <li>Custom-engraved or personalised products unless defective.</li>
          </ul>

          <h2 className="hp-rp-h2">Refund Timing</h2>
          <p style={para}>Once we receive and inspect your return, we will process your refund within 5–7 business days. Refunds are issued to the original payment method. Shipping costs are non-refundable unless the return is due to our error.</p>

          <h2 className="hp-rp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>To start a return or ask about your order, email us at support@ambaz.com or visit our Contact page.</p>

        </div>
      </div>

      <style>{`
        .hp-rp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .hp-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .hp-rp-content-wrap { padding-block: 60px 100px; }
        .hp-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .hp-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .hp-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .hp-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .hp-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .hp-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .hp-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
