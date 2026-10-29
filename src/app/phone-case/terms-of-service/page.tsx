import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Phone Case Shop',
  description: 'Terms of service for Phone Case Shop.',
};

export default function PhoneCaseTermsPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Terms of Service</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/phone-case-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of Service</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '100px', maxWidth: '680px' }}>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>Last updated: June 22, 2026</p>

        {[
          {
            title: 'Acceptance of terms',
            body: 'By accessing or using the Phone Case Shop website and services, you agree to be bound by these terms of service. If you do not agree with any part of these terms, please do not use our services.',
          },
          {
            title: 'Products and pricing',
            body: 'All prices are displayed in USD and are subject to change without notice. We reserve the right to discontinue any product at any time. Product images are for illustrative purposes; actual products may vary slightly in colour due to display settings.',
          },
          {
            title: 'Orders and payment',
            body: 'By placing an order you confirm that all information provided is accurate and complete. We accept major credit cards and other payment methods as displayed at checkout. Orders are subject to availability and acceptance.',
          },
          {
            title: 'Intellectual property',
            body: 'All content on this site — including text, graphics, logos, images, and product photos — is the property of Phone Case Shop or its content suppliers and is protected by intellectual property laws. Unauthorized use is prohibited.',
          },
          {
            title: 'Limitation of liability',
            body: 'Phone Case Shop shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the amount paid for the specific product or service.',
          },
          {
            title: 'Governing law',
            body: 'These terms shall be governed by the laws of the State of New York, without regard to conflict of law principles. Any disputes shall be resolved exclusively in the courts of New York County.',
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
