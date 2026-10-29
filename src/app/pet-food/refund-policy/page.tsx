'use client';

import Link from 'next/link';

export default function PetFoodRefundPolicyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pet-food-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="rp-h1">Refund policy</h1>
        </div>
      </div>

      {/* ── Content Block ── */}
      <div className="container-main rp-content-wrap">
        <div className="rp-prose">

          <p style={para}>We want every pet parent to be fully happy with what they receive. Because pet food and treats are consumable, please inspect your order on delivery and reach out quickly if anything is wrong.</p>

          <h2 className="rp-h2">Freshness &amp; Quality Guarantee</h2>
          <p style={para}>If any kibble, wet food, treats, or supplements arrive damaged, expired, or clearly below quality, contact us within 48 hours of delivery and we will issue a full refund or send a free replacement. You do not need to return the affected product — a short photo helps our quality team improve sourcing.</p>

          <h2 className="rp-h2">Picky-Eater Guarantee</h2>
          <p style={para}>If your pet turns their nose up at a new formula, we will refund your first bag or can — no questions asked — within 14 days of delivery. Just email us with your order number and tell us what happened.</p>

          <h2 className="rp-h2">Accessories &amp; Hard Goods</h2>
          <p style={para}>Bowls, toys, grooming tools, collars, and other durable goods may be returned within 30 days of delivery if they are unopened and in original packaging. Contact us at support@ambaz.com to start a return; we will send a prepaid return label and instructions.</p>

          <h2 className="rp-h2">Damaged or Incorrect Orders</h2>
          <p style={para}>Please inspect your order on delivery and contact us immediately if an item is defective, damaged, or different from what you ordered. We will investigate and make it right — either a replacement on the next delivery window or a refund to your original payment method.</p>

          <h2 className="rp-h2">Non-returnable Items</h2>
          <p style={para}>For hygiene and animal-health reasons, we cannot accept returns of prescription diets that have left our fulfillment center, pre-portioned raw or frozen food, items marked final sale, and any product missing its original packaging.</p>

          <h2 className="rp-h2">Refund Timing</h2>
          <p style={para}>Approved refunds are issued to the original payment method within 5 business days. For cash-on-delivery orders, refunds are issued as store credit to your Ambaz account, usable against your next pet food order.</p>
          <p style={{ marginBottom: '0' }}>Questions about a refund or return? Email us at support@ambaz.com and our team will respond within one business day.</p>

        </div>
      </div>

      <style>{`
        /* ─── base ─── */
        .rp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .rp-content-wrap { padding-block: 60px 100px; }
        .rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        /* ─── ≤749px: fluid scaling ─── */
        @media (max-width: 749px) {
          .rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
