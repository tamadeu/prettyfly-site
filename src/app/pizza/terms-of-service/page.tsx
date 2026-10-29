'use client';

import Link from 'next/link';

export default function PizzaTermsOfServicePage() {
  return (
    <div style={{ background: '#000000' }}>
      <div className="ps-tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#444' }}>/</span>
            <span style={{ color: '#fff' }}>Terms of service</span>
          </div>
          <h1 className="ps-tos-h1">Terms of service</h1>
        </div>
      </div>

      <div className="container-main ps-tos-content-wrap">
        <div className="ps-tos-prose">

          <p style={para}><em>Last updated: May 12, 2026</em></p>

          <p style={para}>By accessing our website or placing an order, you agree to be bound by these Terms of Service. Please read them carefully. If you disagree with any part of these terms, please do not use our site or services.</p>

          <h2 className="ps-tos-h2">Acceptance of Terms</h2>
          <p style={para}>These Terms of Service constitute a legally binding agreement between you and Ambaz Pizza. By using our website, placing an order, or creating an account, you confirm that you have read, understood, and agree to these terms.</p>

          <h2 className="ps-tos-h2">Orders and Payment</h2>
          <p style={para}>All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product unavailability, errors in pricing, or suspected fraud. Payment is due at the time of order placement.</p>
          <ul style={list}>
            <li>Prices are listed in USD and include applicable taxes unless stated otherwise.</li>
            <li>We accept major credit cards, PayPal, Apple Pay, and Google Pay.</li>
            <li>You confirm that the payment information you provide is accurate and that you are authorised to use the payment method.</li>
          </ul>

          <h2 className="ps-tos-h2">Delivery</h2>
          <p style={para}>Estimated delivery times are indicative only. Actual delivery times may vary due to demand, weather, or other factors outside our control. We are not liable for delays beyond our reasonable control. Risk of loss and title pass to you upon delivery.</p>

          <h2 className="ps-tos-h2">Prohibited Use</h2>
          <p style={para}>You agree not to use our site to place fraudulent orders, scrape or collect data without permission, interfere with our systems, or violate any applicable laws or regulations.</p>

          <h2 className="ps-tos-h2">Intellectual Property</h2>
          <p style={para}>All content on this site — including text, images, logos, and recipes — is the property of Ambaz Pizza or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our prior written consent.</p>

          <h2 className="ps-tos-h2">Limitation of Liability</h2>
          <p style={para}>To the maximum extent permitted by law, Ambaz Pizza shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the specific order giving rise to the claim.</p>

          <h2 className="ps-tos-h2">Governing Law</h2>
          <p style={para}>These terms are governed by and construed in accordance with the laws of the jurisdiction in which Ambaz Pizza operates. Any disputes shall be subject to the exclusive jurisdiction of the courts of that jurisdiction.</p>

          <h2 className="ps-tos-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about these terms? Contact us at support@ambaz.com.</p>

        </div>
      </div>

      <style>{`
        .ps-tos-page-header { background-color: #1a1a1a; padding: 40px 0 50px; text-align: center; }
        .ps-tos-h1 { font-size: 40px; font-weight: 600; color: #fff; }
        .ps-tos-content-wrap { padding-block: 60px 100px; background-color: #111; }
        .ps-tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.8; }
        .ps-tos-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 14px; margin-top: 40px; }

        @media (max-width: 749px) {
          .ps-tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ps-tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ps-tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ps-tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ps-tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </div>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
