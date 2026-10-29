import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Smart Watches Shop',
  description: 'Our privacy policy for Smart Watches Shop customers.',
};

const sections = [
  {
    title: 'Information we collect',
    body: 'When you place an order or create an account we collect your name, email address, shipping address, phone number, and payment information. We also collect browsing data such as pages visited, products viewed, and items added to cart to improve your experience.',
  },
  {
    title: 'How we use your information',
    body: 'We use your personal information to process orders, send shipping notifications, and provide customer support. With your consent, we may send marketing emails about new products, promotions, and watch releases. You may unsubscribe at any time.',
  },
  {
    title: 'Sharing your information',
    body: 'We do not sell or rent your personal data to third parties. We share information only with trusted service providers (payment processors, shipping carriers, analytics platforms) who are contractually obligated to keep it secure.',
  },
  {
    title: 'Cookies',
    body: 'We use cookies and similar tracking technologies to maintain your session, remember cart items, and understand how visitors use our site. You can disable cookies in your browser settings, though this may affect site functionality.',
  },
  {
    title: 'Data security',
    body: 'All data transmissions are encrypted using TLS. Payment card data is processed by our PCI-DSS-compliant payment processor and is never stored on our servers.',
  },
  {
    title: 'Your rights',
    body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting support@smartwatches.shop. We will respond within 30 days.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on our website. Continued use of our services after changes constitutes acceptance.',
  },
];

export default function SmartWatchesPrivacyPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Privacy Policy</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '100px', maxWidth: '680px' }}>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>Last updated: June 23, 2026</p>
        {sections.map((s) => (
          <div key={s.title} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{s.title}</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
