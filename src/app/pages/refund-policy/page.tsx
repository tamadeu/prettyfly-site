'use client';

import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <>
      <div className="fa-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund policy</span>
          </div>
          <h1 className="fa-rp-h1">Refund policy</h1>
        </div>
      </div>

      <div className="container-main fa-rp-content-wrap">
        <div className="fa-rp-prose">

          <p style={para}>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>
          <p style={para}>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You&apos;ll also need the receipt or proof of purchase.</p>
          <p style={para}>To start a return, you can contact us at support@ambaz.com. Please note that returns will need to be sent to the following address: [INSERT RETURN ADDRESS]</p>
          <p style={para}>If your return is accepted, we&apos;ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.</p>
          <p style={para}>You can always contact us for any return question at support@ambaz.com.</p>

          <h2 className="fa-rp-h2">Damages and issues</h2>
          <p style={para}>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>

          <h2 className="fa-rp-h2">Exceptions / non-returnable items</h2>
          <p style={para}>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.</p>
          <p style={para}>Unfortunately, we cannot accept returns on sale items or gift cards.</p>

          <h2 className="fa-rp-h2">Exchanges</h2>
          <p style={para}>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>

          <h2 className="fa-rp-h2">European Union 14 day cooling off period</h2>
          <p style={para}>Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You&apos;ll also need the receipt or proof of purchase.</p>

          <h2 className="fa-rp-h2">Refunds</h2>
          <p style={para}>We will notify you once we&apos;ve received and inspected your return, and let you know if the refund was approved or not. If approved, you&apos;ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
          <p style={{ marginBottom: '0' }}>If more than 15 business days have passed since we&apos;ve approved your return, please contact us at support@ambaz.com.</p>

        </div>
      </div>

      <style>{`
        .fa-rp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .fa-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .fa-rp-content-wrap { padding-block: 60px 100px; }
        .fa-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .fa-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .fa-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .fa-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .fa-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .fa-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
