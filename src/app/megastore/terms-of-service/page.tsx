'use client';

import Link from 'next/link';

export default function MegastoreTermsOfServicePage() {
  return (
    <>
      <div className="ms-tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/megastore-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of service</span>
          </div>
          <h1 className="ms-tos-h1">Terms of service</h1>
        </div>
      </div>

      <div className="container-main ms-tos-content-wrap">
        <div className="ms-tos-prose">

          <p style={para}><em>Last updated: April 21, 2026</em></p>

          <p style={para}>These Terms of Service govern your use of the Ambaz Megastore website and your purchase of electronics, accessories, and related services. By placing an order or creating an account, you agree to these terms.</p>

          <h2 className="ms-tos-h2">Eligibility &amp; Account</h2>
          <p style={para}>You must be at least 18 years old (or the age of majority in your jurisdiction) to place an order. You are responsible for the accuracy of the information you provide and for safeguarding your account credentials.</p>

          <h2 className="ms-tos-h2">Orders &amp; Pricing</h2>
          <p style={para}>All orders are subject to acceptance and product availability. Prices are listed in USD unless otherwise noted and may change without notice. We reserve the right to limit quantities, decline orders that appear to be for resale, and correct pricing or inventory errors before shipment.</p>

          <h2 className="ms-tos-h2">Payment</h2>
          <p style={para}>Payment is due at the time of order. We accept major credit cards, debit cards, and approved digital wallets. By providing payment details, you authorize us to charge the listed amount plus any applicable taxes and shipping.</p>

          <h2 className="ms-tos-h2">Shipping &amp; Delivery</h2>
          <p style={para}>Estimated ship dates are based on stock availability and selected service level. Title and risk of loss pass to you when the carrier accepts the package. We are not liable for carrier delays beyond our control, but we will replace any item that arrives damaged.</p>

          <h2 className="ms-tos-h2">Warranty &amp; Returns</h2>
          <p style={para}>Most electronics come with a manufacturer warranty; details are listed on the product page. Unopened items in original packaging may be returned within 30 days for a refund. See our Refund Policy for full details on warranty claims, return windows, and restocking fees.</p>

          <h2 className="ms-tos-h2">Prohibited Use</h2>
          <ul style={list}>
            <li>Reselling our products in violation of manufacturer agreements.</li>
            <li>Using the Site to transmit malware, scrape pricing data at scale, or interfere with other shoppers.</li>
            <li>Attempting to access accounts or order data that are not yours.</li>
          </ul>

          <h2 className="ms-tos-h2">Intellectual Property</h2>
          <p style={para}>All Site content (logos, photography, product descriptions, page layouts) is owned by Ambaz or its licensors. You may not copy, redistribute, or use it for commercial purposes without written permission.</p>

          <h2 className="ms-tos-h2">Limitation of Liability</h2>
          <p style={para}>To the maximum extent permitted by law, Ambaz is not liable for indirect, incidental, or consequential damages arising from your use of the Site or any product purchased through it. Our total liability for any claim is limited to the amount you paid for the product at issue.</p>

          <h2 className="ms-tos-h2">Governing Law</h2>
          <p style={para}>These Terms are governed by the laws of the State of Washington, USA, without regard to conflict-of-laws principles. Any dispute will be resolved in the courts of King County, Washington.</p>

          <h2 className="ms-tos-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about these Terms? Email us at support@ambaz.com.</p>

        </div>
      </div>

      <style>{`
        .ms-tos-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ms-tos-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .ms-tos-content-wrap { padding-block: 60px 100px; }
        .ms-tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .ms-tos-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        @media (max-width: 749px) {
          .ms-tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ms-tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ms-tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ms-tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ms-tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
