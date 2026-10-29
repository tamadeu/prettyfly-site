'use client';

import Link from 'next/link';

export default function HeadphonesPrivacyPolicyPage() {
  return (
    <>
      <div className="hp-pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/headphones-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy policy</span>
          </div>
          <h1 className="hp-pp-h1">Privacy policy</h1>
        </div>
      </div>

      <div className="container-main hp-pp-content-wrap">
        <div className="hp-pp-prose">

          <p style={para}><em>Last updated: May 19, 2026</em></p>

          <p style={para}>This Privacy Policy describes how Ambaz Audio (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you purchase headphones, audio gear, or accessories, browse our catalog, or contact us for support.</p>

          <p style={para}>Please read this Privacy Policy carefully before placing an order.</p>

          <h2 className="hp-pp-h2">Changes to This Privacy Policy</h2>
          <p style={para}>We may update this Privacy Policy to reflect changes to our operations, legal requirements, or the products we carry. We will post the revised Privacy Policy and update the &ldquo;Last updated&rdquo; date.</p>

          <h2 className="hp-pp-h2">Information We Collect Directly from You</h2>
          <ul style={list}>
            <li>Contact and shipping details including your name, delivery address, phone number, and email.</li>
            <li>Order information including your cart contents, product selections, payment confirmation, and any special delivery instructions.</li>
            <li>Account information including your username, password, and saved payment preferences.</li>
            <li>Customer support correspondence including photos of products you choose to send us for warranty or return purposes.</li>
          </ul>

          <h2 className="hp-pp-h2">How We Use Your Personal Information</h2>
          <p style={para}><strong>Fulfilling Orders.</strong> We use your information to process, pack, and ship your audio gear order, handle payments and refunds, and communicate about delivery windows and order status.</p>
          <p style={para}><strong>Product Recommendations.</strong> With your permission, we may use your purchase history to suggest compatible accessories, firmware updates, and new releases that match your audio setup.</p>
          <p style={para}><strong>Marketing and Offers.</strong> We may send promotions, new-arrival announcements, and limited-time deals. You can opt out at any time.</p>
          <p style={para}><strong>Security and Fraud Prevention.</strong> We use your information to detect and prevent fraudulent orders and protect our platform.</p>

          <h2 className="hp-pp-h2">Cookies</h2>
          <p style={para}>We use cookies to remember your cart, compare list, and browsing preferences. We also use cookies for analytics and to measure the effectiveness of promotions. You can disable cookies in your browser, but this may prevent some features from working correctly.</p>

          <h2 className="hp-pp-h2">How We Disclose Personal Information</h2>
          <ul style={list}>
            <li>With our shipping and logistics partners to fulfill and deliver your order.</li>
            <li>With payment processors to complete your transaction securely.</li>
            <li>With analytics and marketing partners who help us improve the shopping experience.</li>
            <li>When required by law or to comply with consumer protection regulations.</li>
          </ul>

          <h2 className="hp-pp-h2">Security and Retention of Your Information</h2>
          <p style={para}>We use industry-standard security controls to protect your information. We retain order and support records for as long as needed to provide our services, comply with accounting requirements, and resolve any disputes.</p>

          <h2 className="hp-pp-h2">Your Rights</h2>
          <p style={para}>Depending on where you live, you may have rights to access, delete, correct, or port your personal information, or opt out of marketing communications. Contact us using the information below to exercise your rights.</p>

          <h2 className="hp-pp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about our privacy practices? Email us at support@ambaz.com or reach us at our office address.</p>

        </div>
      </div>

      <style>{`
        .hp-pp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .hp-pp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .hp-pp-content-wrap { padding-block: 60px 100px; }
        .hp-pp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .hp-pp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .hp-pp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .hp-pp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .hp-pp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .hp-pp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .hp-pp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
