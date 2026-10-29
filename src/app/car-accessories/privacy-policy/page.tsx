'use client';

import Link from 'next/link';

export default function CarAccessoriesPrivacyPolicyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="ca-pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/car-accessories-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy policy</span>
          </div>
          <h1 className="ca-pp-h1">Privacy policy</h1>
        </div>
      </div>

      {/* ── Content Block ── */}
      <div className="container-main ca-pp-content-wrap">
        <div className="ca-pp-prose">

          <p style={para}><em>Last updated: May 9, 2026</em></p>

          <p style={para}>This Privacy Policy describes how AutoPro (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you place an order for auto parts or accessories, browse our catalog, or communicate with us.</p>

          <p style={para}>Please read this Privacy Policy carefully before placing an order.</p>

          <h2 className="ca-pp-h2">Changes to This Privacy Policy</h2>
          <p style={para}>We may update this Privacy Policy to reflect changes to our fulfillment, delivery, or sourcing practices, or for operational, legal, or regulatory reasons. We will post the revised Privacy Policy and update the &ldquo;Last updated&rdquo; date.</p>

          <h2 className="ca-pp-h2">Information We Collect Directly from You</h2>
          <ul style={list}>
            <li>Contact and delivery details including your name, delivery address, phone number, and email.</li>
            <li>Order information including your cart contents, vehicle details, payment confirmation, and order history.</li>
            <li>Account information including your username, password, and saved vehicles.</li>
            <li>Customer support correspondence and any photos of parts or vehicles you choose to share with us.</li>
          </ul>

          <h2 className="ca-pp-h2">How We Use Your Personal Information</h2>
          <p style={para}><strong>Fulfilling Orders.</strong> We use your information to process, ship, and deliver your order, handle payments and refunds, and communicate about your delivery.</p>
          <p style={para}><strong>Vehicle Compatibility.</strong> With your permission, we may use saved vehicle data to surface compatible parts and accessories tailored to your specific make, model, and year.</p>
          <p style={para}><strong>Marketing and Offers.</strong> We may send promotions, new arrivals, and seasonal deals. You can opt out at any time.</p>
          <p style={para}><strong>Security and Fraud Prevention.</strong> We use your information to detect and prevent fraudulent orders and protect our platform.</p>

          <h2 className="ca-pp-h2">Cookies</h2>
          <p style={para}>We use cookies to remember your cart, vehicle profiles, and browsing preferences. We also use cookies for analytics and to measure the effectiveness of promotions. You can disable cookies in your browser settings.</p>

          <h2 className="ca-pp-h2">How We Disclose Personal Information</h2>
          <ul style={list}>
            <li>With shipping partners and warehouses to fulfill your order.</li>
            <li>With payment processors to complete your transaction.</li>
            <li>With analytics partners who help us improve the shopping experience.</li>
            <li>When required by law or regulation.</li>
          </ul>

          <h2 className="ca-pp-h2">Security and Retention of Your Information</h2>
          <p style={para}>We use industry-standard security controls to protect your information. We retain order records for as long as needed to provide the Services, comply with legal obligations, and resolve disputes.</p>

          <h2 className="ca-pp-h2">Your Rights</h2>
          <p style={para}>Depending on where you live, you may have rights to access, delete, correct, or port your personal information. You may also opt out of marketing communications at any time using the unsubscribe link in our emails or by contacting support.</p>

          <h2 className="ca-pp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about our privacy practices? Email us at privacy@autopro.com or contact us at our office address.</p>

        </div>
      </div>

      <style>{`
        /* ─── base ─── */
        .ca-pp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ca-pp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .ca-pp-content-wrap { padding-block: 60px 100px; }
        .ca-pp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .ca-pp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        /* ─── ≤749px: fluid scaling ─── */
        @media (max-width: 749px) {
          .ca-pp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ca-pp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ca-pp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ca-pp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ca-pp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
