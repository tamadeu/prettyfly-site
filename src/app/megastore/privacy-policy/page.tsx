'use client';

import Link from 'next/link';

export default function MegastorePrivacyPolicyPage() {
  return (
    <>
      <div className="ms-pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/megastore-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy policy</span>
          </div>
          <h1 className="ms-pp-h1">Privacy policy</h1>
        </div>
      </div>

      <div className="container-main ms-pp-content-wrap">
        <div className="ms-pp-prose">

          <p style={para}><em>Last updated: April 21, 2026</em></p>

          <p style={para}>This Privacy Policy describes how Ambaz Megastore (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you place an electronics order, browse our catalog, or contact our customer support team about a device or accessory.</p>

          <p style={para}>Please read this Privacy Policy carefully before placing an order.</p>

          <h2 className="ms-pp-h2">Changes to This Privacy Policy</h2>
          <p style={para}>We may update this Privacy Policy to reflect changes to our fulfillment, warranty, or sourcing practices, or for operational, legal, or regulatory reasons. We will post the revised Privacy Policy and update the &ldquo;Last updated&rdquo; date.</p>

          <h2 className="ms-pp-h2">Information We Collect Directly from You</h2>
          <ul style={list}>
            <li>Contact and delivery details including your name, shipping address, phone number, and email.</li>
            <li>Order information including your cart contents, payment confirmation, device serial numbers, and warranty registrations.</li>
            <li>Account information including your username, password, saved addresses, and wishlist contents.</li>
            <li>Customer support correspondence including photos, screen recordings, or device diagnostic logs you choose to share.</li>
          </ul>

          <h2 className="ms-pp-h2">How We Use Your Personal Information</h2>
          <p style={para}><strong>Fulfilling Orders.</strong> We use your information to pick, pack, and ship your electronics order, process payments and refunds, and communicate about delivery windows and replacement units.</p>
          <p style={para}><strong>Product Recommendations.</strong> With your permission, we may use your purchase history and browsing behavior to surface compatible accessories and complementary devices.</p>
          <p style={para}><strong>Marketing and Offers.</strong> We may send promotions, new-arrival announcements, and price-drop alerts on items in your wishlist. You can opt out at any time.</p>
          <p style={para}><strong>Security and Fraud Prevention.</strong> We use your information to detect and prevent fraudulent orders, especially for high-value electronics.</p>

          <h2 className="ms-pp-h2">Cookies</h2>
          <p style={para}>We use cookies to remember your cart, preferred shipping address, recently viewed products, and accessory bundles. We also use cookies for analytics and to measure the effectiveness of promotions. You can disable cookies in your browser, but this may prevent some features from working.</p>

          <h2 className="ms-pp-h2">How We Disclose Personal Information</h2>
          <ul style={list}>
            <li>With our warehouse partners and shipping carriers to fulfill and deliver your order.</li>
            <li>With payment processors to complete your transaction.</li>
            <li>With manufacturer warranty programs when you register a device.</li>
            <li>When required by law, including to comply with consumer protection and import/export regulations.</li>
          </ul>

          <h2 className="ms-pp-h2">Security and Retention of Your Information</h2>
          <p style={para}>We use industry-standard security controls to protect your information. We retain order, warranty, and serial-number records for as long as needed to provide the Services, support warranty claims, comply with accounting regulations, and resolve disputes.</p>

          <h2 className="ms-pp-h2">Your Rights</h2>
          <p style={para}>Depending on where you live, you may have rights to access, delete, correct, port, or opt out of the sale of your personal information. You may also opt out of marketing communications at any time using the unsubscribe link in our emails or by contacting support.</p>

          <h2 className="ms-pp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about our privacy practices? Email us at support@ambaz.com or contact us at our office address.</p>

        </div>
      </div>

      <style>{`
        .ms-pp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ms-pp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .ms-pp-content-wrap { padding-block: 60px 100px; }
        .ms-pp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .ms-pp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        @media (max-width: 749px) {
          .ms-pp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ms-pp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ms-pp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ms-pp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ms-pp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
