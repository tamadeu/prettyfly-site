'use client';

import Link from 'next/link';

export default function PizzaPrivacyPolicyPage() {
  return (
    <div style={{ background: '#000000' }}>
      <div className="ps-pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#444' }}>/</span>
            <span style={{ color: '#fff' }}>Privacy policy</span>
          </div>
          <h1 className="ps-pp-h1">Privacy policy</h1>
        </div>
      </div>

      <div className="container-main ps-pp-content-wrap">
        <div className="ps-pp-prose">

          <p style={para}><em>Last updated: May 12, 2026</em></p>

          <p style={para}>This Privacy Policy describes how Ambaz Pizza (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you place a pizza order, browse our menu, or communicate with us.</p>

          <p style={para}>Please read this Privacy Policy carefully before placing an order.</p>

          <h2 className="ps-pp-h2">Changes to This Privacy Policy</h2>
          <p style={para}>We may update this Privacy Policy to reflect changes to our operations, or for legal or regulatory reasons. We will post the revised Privacy Policy and update the &ldquo;Last updated&rdquo; date.</p>

          <h2 className="ps-pp-h2">Information We Collect Directly from You</h2>
          <ul style={list}>
            <li>Contact and delivery details including your name, delivery address, phone number, and email.</li>
            <li>Order information including your cart contents, special preparation requests, payment confirmation, and dietary preferences you choose to share.</li>
            <li>Account information including your username, password, saved addresses, and order history.</li>
            <li>Customer support correspondence related to your orders.</li>
          </ul>

          <h2 className="ps-pp-h2">How We Use Your Personal Information</h2>
          <p style={para}><strong>Fulfilling Orders.</strong> We use your information to prepare, pack, and deliver your pizza order, process payments and refunds, and communicate about delivery ETAs.</p>
          <p style={para}><strong>Personalised Recommendations.</strong> With your permission, we may use your order history to suggest pizzas and meal deals that match your preferences.</p>
          <p style={para}><strong>Marketing and Offers.</strong> We may send promotions, new menu items, and loyalty rewards. You can opt out at any time via the unsubscribe link in our emails.</p>
          <p style={para}><strong>Security and Fraud Prevention.</strong> We use your information to detect and prevent fraudulent orders and protect our delivery network.</p>

          <h2 className="ps-pp-h2">Cookies</h2>
          <p style={para}>We use cookies to remember your cart, preferred delivery address, and recent orders. We also use analytics cookies to improve our menu and website experience. You can disable cookies in your browser settings, though some features may not work correctly.</p>

          <h2 className="ps-pp-h2">How We Disclose Personal Information</h2>
          <ul style={list}>
            <li>With our kitchen partners and delivery riders to prepare and deliver your order.</li>
            <li>With payment processors to complete your transaction securely.</li>
            <li>With analytics partners who help us improve the ordering experience.</li>
            <li>When required by law or food safety regulations.</li>
          </ul>

          <h2 className="ps-pp-h2">Security and Retention of Your Information</h2>
          <p style={para}>We use industry-standard security controls to protect your information. We retain order and delivery records for as long as needed to provide our services and comply with applicable regulations.</p>

          <h2 className="ps-pp-h2">Your Rights</h2>
          <p style={para}>Depending on where you live, you may have rights to access, delete, correct, or port your personal information. You may also opt out of marketing communications at any time by using the unsubscribe link or contacting support.</p>

          <h2 className="ps-pp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about our privacy practices? Email us at support@ambaz.com or write to us at our contact address.</p>

        </div>
      </div>

      <style>{`
        .ps-pp-page-header { background-color: #1a1a1a; padding: 40px 0 50px; text-align: center; }
        .ps-pp-h1 { font-size: 40px; font-weight: 600; color: #fff; }
        .ps-pp-content-wrap { padding-block: 60px 100px; background-color: #111; }
        .ps-pp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.8; }
        .ps-pp-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 14px; margin-top: 40px; }

        @media (max-width: 749px) {
          .ps-pp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ps-pp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ps-pp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ps-pp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ps-pp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </div>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
