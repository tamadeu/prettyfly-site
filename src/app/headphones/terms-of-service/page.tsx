'use client';

import Link from 'next/link';

export default function HeadphonesTermsOfServicePage() {
  return (
    <>
      <div className="hp-tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/headphones-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of service</span>
          </div>
          <h1 className="hp-tos-h1">Terms of service</h1>
        </div>
      </div>

      <div className="container-main hp-tos-content-wrap">
        <div className="hp-tos-prose">

          <p style={para}><em>Last updated: May 19, 2026</em></p>

          <p style={para}>By accessing or placing an order through Ambaz Audio (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service. Please read them carefully before using the Site.</p>

          <h2 className="hp-tos-h2">Acceptance of Terms</h2>
          <p style={para}>By using our Site, you confirm that you are at least 18 years of age and have the legal authority to enter into these terms. If you are purchasing on behalf of an organisation, you represent that you are authorised to bind that organisation.</p>

          <h2 className="hp-tos-h2">Account Registration</h2>
          <p style={para}>You may browse the Site without an account, but you must register to complete a purchase, track orders, or access your wishlist. You are responsible for keeping your account credentials secure and for all activity that occurs under your account.</p>

          <h2 className="hp-tos-h2">Orders and Payment</h2>
          <p style={para}>All orders are subject to product availability and confirmation. We reserve the right to cancel or refuse any order at our discretion. Prices are displayed in the applicable currency and are subject to change without notice. Full payment is required at the time of purchase.</p>

          <h2 className="hp-tos-h2">Shipping and Delivery</h2>
          <p style={para}>Estimated delivery times are provided at checkout and are not guaranteed. We are not responsible for delays caused by shipping carriers, customs clearance, or events beyond our control. Risk of loss passes to you upon delivery to the carrier.</p>

          <h2 className="hp-tos-h2">Prohibited Use</h2>
          <ul style={list}>
            <li>Using the Site to distribute spam, malware, or harmful content.</li>
            <li>Attempting to reverse-engineer, scrape, or circumvent any security measure on the Site.</li>
            <li>Reselling products purchased from the Site without prior written consent.</li>
            <li>Impersonating another person or entity.</li>
          </ul>

          <h2 className="hp-tos-h2">Intellectual Property</h2>
          <p style={para}>All content on the Site — including text, images, logos, and product designs — is owned by or licensed to Ambaz Audio. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

          <h2 className="hp-tos-h2">Limitation of Liability</h2>
          <p style={para}>To the maximum extent permitted by law, Ambaz Audio shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or our products, including loss of data or loss of revenue.</p>

          <h2 className="hp-tos-h2">Governing Law</h2>
          <p style={para}>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Ambaz Audio operates, without regard to its conflict of law provisions.</p>

          <h2 className="hp-tos-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about our Terms of Service? Contact us at support@ambaz.com.</p>

        </div>
      </div>

      <style>{`
        .hp-tos-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .hp-tos-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .hp-tos-content-wrap { padding-block: 60px 100px; }
        .hp-tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .hp-tos-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .hp-tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .hp-tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .hp-tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .hp-tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .hp-tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
