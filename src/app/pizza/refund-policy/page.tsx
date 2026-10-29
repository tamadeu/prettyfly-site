'use client';

import Link from 'next/link';

export default function PizzaRefundPolicyPage() {
  return (
    <div style={{ background: '#000000' }}>
      <div className="ps-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#444' }}>/</span>
            <span style={{ color: '#fff' }}>Refund policy</span>
          </div>
          <h1 className="ps-rp-h1">Refund policy</h1>
        </div>
      </div>

      <div className="container-main ps-rp-content-wrap">
        <div className="ps-rp-prose">

          <p style={para}>We want every customer to be completely satisfied with their order. Because our pizzas are freshly prepared and delivered hot, please inspect your order on arrival and contact us promptly if anything is wrong.</p>

          <h2 className="ps-rp-h2">Freshness &amp; Quality Guarantee</h2>
          <p style={para}>If any pizza arrives cold, damaged, or clearly below our quality standards, contact us within 1 hour of delivery and we will issue a full refund or send a replacement order free of charge. A photo of the issue helps our kitchen team improve.</p>

          <h2 className="ps-rp-h2">Wrong Order Guarantee</h2>
          <p style={para}>If you received a different pizza than what you ordered, contact us within 1 hour of delivery. We will send the correct item on the next available delivery slot or issue a full refund to your original payment method — whichever you prefer.</p>

          <h2 className="ps-rp-h2">Cancelled Orders</h2>
          <p style={para}>Orders can be cancelled within 5 minutes of placement at no charge. After that window, our kitchen may have already started preparing your order. Contact us as quickly as possible at support@ambaz.com and we will do our best to accommodate the cancellation. If preparation has begun, a partial refund may apply.</p>

          <h2 className="ps-rp-h2">Damaged or Incorrect Orders</h2>
          <p style={para}>Please inspect your order on delivery and contact us immediately if an item is missing, damaged, or different from what you ordered. We will investigate and make it right — either a free replacement on the next delivery or a full refund.</p>

          <h2 className="ps-rp-h2">Non-refundable Items</h2>
          <p style={para}>For food safety and hygiene reasons, we cannot offer refunds for pizzas that have been partially eaten (except in the case of quality issues), for change-of-mind orders where preparation has already begun, or for items marked as final sale or promotional specials.</p>

          <h2 className="ps-rp-h2">Refund Timing</h2>
          <p style={para}>Approved refunds are issued to the original payment method within 3–5 business days. Depending on your bank, it may take additional time for the funds to appear in your account.</p>
          <p style={{ marginBottom: '0' }}>Questions about a refund? Email us at support@ambaz.com and our team will respond within one business day.</p>

        </div>
      </div>

      <style>{`
        .ps-rp-page-header { background-color: #1a1a1a; padding: 40px 0 50px; text-align: center; }
        .ps-rp-h1 { font-size: 40px; font-weight: 600; color: #fff; }
        .ps-rp-content-wrap { padding-block: 60px 100px; background-color: #111; }
        .ps-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.8; }
        .ps-rp-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 14px; margin-top: 40px; }

        @media (max-width: 749px) {
          .ps-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ps-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ps-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ps-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ps-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </div>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
