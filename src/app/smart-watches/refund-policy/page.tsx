import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy — Smart Watches Shop',
  description: 'Our refund and return policy for Smart Watches Shop customers.',
};

const sections = [
  {
    title: '30-day return window',
    body: 'We accept returns within 30 days of the delivery date. Items must be unused, in original condition, and in their original packaging with all accessories included. Worn or damaged items will not be accepted.',
  },
  {
    title: 'How to initiate a return',
    body: 'To start a return, email support@smartwatches.shop with your order number and reason for return. We will issue a Return Merchandise Authorization (RMA) number and a prepaid shipping label within 2 business days.',
  },
  {
    title: 'Refund processing',
    body: 'Once we receive and inspect your return, we will process your refund within 5 business days. Refunds are issued to the original payment method. Processing time may vary depending on your bank or card issuer.',
  },
  {
    title: 'Exchanges',
    body: 'We offer free exchanges for a different size, colour, or model of equal value. To request an exchange, contact our support team within 30 days of delivery. We will ship the replacement once we receive the original item.',
  },
  {
    title: 'Defective or damaged items',
    body: 'If your watch arrives defective or damaged, please contact us within 7 days of delivery with photos of the issue. We will provide a full replacement or refund at no cost to you.',
  },
  {
    title: 'Non-returnable items',
    body: 'Customised or engraved items, gift cards, and items marked as final sale are non-returnable unless defective. Watch bands that have been used or removed from packaging cannot be returned for hygiene reasons.',
  },
  {
    title: 'Warranty claims',
    body: 'All watches carry a 12-month warranty against manufacturing defects. Warranty claims can be made after the 30-day return window by contacting our support team. Physical damage, water damage beyond rated resistance, and normal wear are not covered.',
  },
];

export default function SmartWatchesRefundPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Refund Policy</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund Policy</span>
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
