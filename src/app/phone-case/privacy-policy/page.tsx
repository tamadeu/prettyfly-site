import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Phone Case Shop',
  description: 'Our privacy policy for Phone Case Shop customers.',
};

export default function PhoneCasePrivacyPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Privacy Policy</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/phone-case-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '100px', maxWidth: '680px' }}>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>Last updated: June 22, 2026</p>

        {[
          {
            title: 'Information we collect',
            body: 'When you place an order or create an account we collect your name, email address, shipping address, phone number, and payment information. We also collect browsing data such as pages visited, products viewed, and items added to cart to improve your experience.',
          },
          {
            title: 'How we use your information',
            body: 'We use your information to process and fulfil orders, send order confirmations and shipping updates, respond to customer service requests, send marketing emails (unsubscribe anytime), improve our website and product selection, and detect and prevent fraud.',
          },
          {
            title: 'Sharing your information',
            body: 'We do not sell your personal data. We share your information only with trusted service providers (shipping carriers, payment processors, email platforms) who help us operate our business, and as required by law.',
          },
          {
            title: 'Cookies',
            body: 'We use cookies and similar technologies to keep items in your cart, remember your preferences, analyze traffic, and personalize content. You can control cookies through your browser settings, though some features may not function correctly if you disable them.',
          },
          {
            title: 'Data retention',
            body: 'We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and data at any time by contacting our support team.',
          },
          {
            title: 'Your rights',
            body: 'You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing. To exercise these rights, contact us at privacy@ambaz.com.',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>{section.title}</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>{section.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
