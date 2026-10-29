'use client';

import Link from 'next/link';

export default function PetFoodPrivacyPolicyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pet-food-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy policy</span>
          </div>
          <h1 className="pp-h1">Privacy policy</h1>
        </div>
      </div>

      {/* ── Content Block ── */}
      <div className="container-main pp-content-wrap">
        <div className="pp-prose">

          <p style={para}><em>Last updated: April 21, 2026</em></p>

          <p style={para}>This Privacy Policy describes how Ambaz Pet (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you place a pet food or supplies order, browse our catalog, or communicate with us about the care of your pets.</p>

          <p style={para}>Please read this Privacy Policy carefully before placing an order.</p>

          <h2 className="pp-h2">Changes to This Privacy Policy</h2>
          <p style={para}>We may update this Privacy Policy to reflect changes to our fulfillment, delivery, or sourcing practices, or for operational, legal, or regulatory reasons. We will post the revised Privacy Policy and update the &ldquo;Last updated&rdquo; date.</p>

          <h2 className="pp-h2">Information We Collect Directly from You</h2>
          <ul style={list}>
            <li>Contact and delivery details including your name, delivery address, access instructions, phone number, and email.</li>
            <li>Order information including your cart contents, subscription cadence, payment confirmation, and any pet-specific notes you share (species, age, dietary restrictions).</li>
            <li>Account information including your username, password, saved pet profiles, and auto-reorder preferences.</li>
            <li>Customer support correspondence including photos of products or your pets that you choose to send us.</li>
          </ul>

          <h2 className="pp-h2">How We Use Your Personal Information</h2>
          <p style={para}><strong>Fulfilling Orders.</strong> We use your information to pick, pack, and deliver your pet food order, process payments and refunds, and communicate about delivery windows and substitutions.</p>
          <p style={para}><strong>Pet-specific recommendations.</strong> With your permission, we may use your pet&apos;s profile (species, breed, age, weight) to surface recipes and supplements that fit their life stage.</p>
          <p style={para}><strong>Marketing and Offers.</strong> We may send promotions, new-arrival announcements, and subscription reminders. You can opt out at any time.</p>
          <p style={para}><strong>Security and Fraud Prevention.</strong> We use your information to detect and prevent fraudulent orders and protect our delivery network.</p>

          <h2 className="pp-h2">Cookies</h2>
          <p style={para}>We use cookies to remember your cart, preferred store, saved pets, and substitution preferences. We also use cookies for analytics and to measure the effectiveness of promotions. You can disable cookies in your browser, but this may prevent some features from working.</p>

          <h2 className="pp-h2">How We Disclose Personal Information</h2>
          <ul style={list}>
            <li>With our warehouse partners and drivers to pick and deliver your order.</li>
            <li>With payment processors to complete your transaction.</li>
            <li>With analytics and marketing partners who help us tailor the shopping experience.</li>
            <li>When required by law, including to comply with pet food safety and consumer protection regulations.</li>
          </ul>

          <h2 className="pp-h2">Security and Retention of Your Information</h2>
          <p style={para}>We use industry-standard security controls to protect your information. We retain order and delivery records for as long as needed to provide the Services, comply with accounting and food-safety regulations, and resolve disputes.</p>

          <h2 className="pp-h2">Your Rights</h2>
          <p style={para}>Depending on where you live, you may have rights to access, delete, correct, port, or opt out of the sale of your personal information. You may also opt out of marketing communications at any time using the unsubscribe link in our emails or by contacting support.</p>

          <h2 className="pp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about our privacy practices? Email us at support@ambaz.com or contact us at our office address.</p>

        </div>
      </div>

      <style>{`
        /* ─── base ─── */
        .pp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .pp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .pp-content-wrap { padding-block: 60px 100px; }
        .pp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .pp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        /* ─── ≤749px: fluid scaling ─── */
        @media (max-width: 749px) {
          .pp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .pp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .pp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .pp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .pp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
