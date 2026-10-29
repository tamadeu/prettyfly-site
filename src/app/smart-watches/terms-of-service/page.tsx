import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Smart Watches Shop',
  description: 'Terms of service for Smart Watches Shop customers.',
};

const sections = [
  {
    title: 'Acceptance of terms',
    body: 'By accessing or using the Smart Watches Shop website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.',
  },
  {
    title: 'Products and pricing',
    body: 'We reserve the right to modify product descriptions, images, and prices at any time without notice. We are not responsible for typographical errors. All prices are listed in USD and are exclusive of applicable taxes and shipping.',
  },
  {
    title: 'Orders and payment',
    body: 'By placing an order, you warrant that you are legally capable of entering into binding contracts. Payment must be received in full before orders are processed. We accept major credit cards, debit cards, and selected digital payment methods.',
  },
  {
    title: 'Shipping and delivery',
    body: 'Delivery times are estimates only and are not guaranteed. We are not liable for delays caused by carriers, customs, or circumstances beyond our control. Risk of loss passes to you upon delivery to the carrier.',
  },
  {
    title: 'Returns and refunds',
    body: 'Please refer to our Refund Policy for full details on returns and refunds. Customised or personalised items cannot be returned unless defective.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by law, Smart Watches Shop will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services.',
  },
  {
    title: 'Changes to terms',
    body: 'We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the revised Terms.',
  },
];

export default function SmartWatchesTermsPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Terms of Service</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of Service</span>
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
