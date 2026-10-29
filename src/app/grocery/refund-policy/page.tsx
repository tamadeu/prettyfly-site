'use client';

import Link from 'next/link';

export default function GroceryRefundPolicyPage() {
  return (
    <>
      <div className="gr-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/grocery-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="gr-rp-h1">Refund policy</h1>
        </div>
      </div>

      <div className="container-main gr-rp-content-wrap">
        <div className="gr-rp-prose">

          <p style={para}>We stand behind the freshness of everything we deliver. Because most grocery items are perishable, our refund window is shorter than a standard retail policy — please inspect your order as soon as it arrives.</p>

          <h2 className="gr-rp-h2">Fresh Quality Guarantee</h2>
          <p style={para}>If any produce, dairy, meat, seafood, or bakery item arrives damaged, expired, or below the freshness you expect, contact us within 24 hours of delivery and we will issue a full refund or send a free replacement on the next available slot. You do not need to return the affected item — we just ask for a short photo so our quality team can improve sourcing.</p>

          <h2 className="gr-rp-h2">Non-Perishable Goods</h2>
          <p style={para}>Shelf-stable groceries (pantry staples, cleaning products, packaged beverages, snacks) may be returned within 7 days of delivery if they are unopened and in their original packaging. Contact us at support@ambaz.com to start a return; we will send a prepaid return label and instructions.</p>

          <h2 className="gr-rp-h2">Substitutions &amp; Out-of-Stock Items</h2>
          <p style={para}>If something on your list is unavailable, our shoppers will either substitute the closest equivalent at the same or lower price, or skip the item and refund the difference — based on your cart preferences. You are never charged for an item we could not deliver.</p>

          <h2 className="gr-rp-h2">Damaged or Incorrect Orders</h2>
          <p style={para}>Please inspect your order upon delivery and contact us immediately if an item is defective, damaged, or different from what you ordered. We will investigate and make it right — either a replacement on the next delivery window or a refund to your original payment method.</p>

          <h2 className="gr-rp-h2">Non-returnable Items</h2>
          <p style={para}>For hygiene and food safety reasons, we cannot accept returns of perishable goods that have been opened, items marked final sale (including clearance meat and produce), tobacco, alcohol that has left the cold chain, gift cards, and any item missing its original packaging.</p>

          <h2 className="gr-rp-h2">Refund Timing</h2>
          <p style={para}>Approved refunds are issued to the original payment method within 5 business days. For cash-on-delivery orders, refunds are issued as store credit to your Ambaz account, usable against your next grocery order.</p>
          <p style={{ marginBottom: '0' }}>Questions about a refund or return? Email us at support@ambaz.com and our team will respond within one business day.</p>

        </div>
      </div>

      <style>{`
        .gr-rp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .gr-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .gr-rp-content-wrap { padding-block: 60px 100px; }
        .gr-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .gr-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .gr-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .gr-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .gr-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .gr-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .gr-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
