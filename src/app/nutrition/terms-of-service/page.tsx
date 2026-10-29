'use client';

import Link from 'next/link';

export default function NutritionTermsOfServicePage() {
  return (
    <>
      <div className="nt-tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of Service</span>
          </div>
          <h1 className="nt-tos-h1">Terms of Service</h1>
        </div>
      </div>

      <div className="container-main nt-tos-content-wrap">
        <div className="nt-tos-prose">
          <p style={para}><em>Last updated: April 21, 2026</em></p>
          <p style={para}>Welcome to Ambaz Nutrition. By placing an order or creating an account, you agree to these terms.</p>

          <h2 className="nt-tos-h2">Who We Are</h2>
          <p style={para}>Ambaz Nutrition provides third-party-tested supplements, proteins, and performance formulas to individuals and gyms. We reserve the right to refuse any order that violates these terms.</p>

          <h2 className="nt-tos-h2">Using the Site</h2>
          <ul style={list}>
            <li>You must be at least 18 years old to place an order.</li>
            <li>You are responsible for the accuracy of your delivery address and payment details.</li>
            <li>You agree not to misuse the site, scrape pricing at scale, or attempt to compromise our systems.</li>
          </ul>

          <h2 className="nt-tos-h2">Product Information</h2>
          <p style={para}>We make every effort to describe formulas, dosages, and ingredients accurately. Always read the label before consuming any supplement. Consult a physician before starting a new regimen if you have a medical condition or are pregnant.</p>

          <h2 className="nt-tos-h2">Pricing and Availability</h2>
          <p style={para}>Prices and availability are subject to change without notice. In the event of a pricing error, we will contact you before charging your card.</p>

          <h2 className="nt-tos-h2">Intellectual Property</h2>
          <p style={para}>All site content, formulas, branding, and imagery are owned by Ambaz Nutrition or its licensors. You may not reproduce or redistribute without written permission.</p>

          <h2 className="nt-tos-h2">Limitation of Liability</h2>
          <p style={para}>To the maximum extent permitted by law, Ambaz Nutrition is not liable for indirect or consequential damages arising from your use of the site or its products.</p>

          <h2 className="nt-tos-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about these terms? Email support@ambaz-nutrition.com.</p>
        </div>
      </div>
      <style>{`
        .nt-tos-page-header { background-color: #f4f5f7; padding: 40px 0 50px; text-align: center; }
        .nt-tos-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .nt-tos-content-wrap { padding-block: 60px 100px; }
        .nt-tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .nt-tos-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .nt-tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .nt-tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .nt-tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .nt-tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .nt-tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
const list: React.CSSProperties = { marginBottom: '20px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' };
