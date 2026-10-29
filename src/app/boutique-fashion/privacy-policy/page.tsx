import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Boutique Fashion',
  description: 'Our privacy policy for Boutique Fashion customers.',
};

export default function BoutiqueFashionPrivacyPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Privacy Policy</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingBlock: '60px 100px', maxWidth: '680px' }}>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>Last updated: June 21, 2026</p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Information we collect</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          When you place an order or create an account we collect your name, email address, shipping address, phone number, and payment information. We also collect browsing data such as pages visited, products viewed, and items added to cart to improve your experience.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>How we use your information</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '12px' }}>We use the information we collect to:</p>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          {['Process and fulfil your orders', 'Send order confirmations and shipping updates', 'Respond to customer service requests', 'Send marketing emails (you can unsubscribe at any time)', 'Improve our website and product selection', 'Detect and prevent fraud'].map((item) => (
            <li key={item} style={{ fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item}</li>
          ))}
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Sharing your information</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          We do not sell your personal information. We share data only with service providers who help us operate our business (shipping carriers, payment processors, email platforms) and only to the extent necessary to provide those services.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Cookies</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          We use cookies to maintain your session, remember your cart, and analyse site traffic. You can disable cookies in your browser settings but some features may not work correctly as a result.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Your rights</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          You have the right to access, correct, or delete the personal information we hold about you. To make a request, contact us at <a href="mailto:privacy@ambaz.com" style={{ color: '#222', textDecoration: 'underline' }}>privacy@ambaz.com</a>.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Contact us</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
          Questions about this policy? Email <a href="mailto:privacy@ambaz.com" style={{ color: '#222', textDecoration: 'underline' }}>privacy@ambaz.com</a> or write to us at Ambaz Boutique, 48 West 25th Street, New York, NY 10010.
        </p>
      </div>
    </>
  );
}
