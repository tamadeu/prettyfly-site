import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy — Phone Case Shop',
  description: 'Refund and return policy for Phone Case Shop.',
};

export default function PhoneCaseRefundPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Refund Policy</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/phone-case-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund Policy</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '100px', maxWidth: '680px' }}>
        {[
          {
            title: '30-day returns',
            body: 'We accept returns within 30 days of delivery. Items must be in their original, unused condition with all packaging intact. To initiate a return, contact our support team with your order number and reason for return.',
          },
          {
            title: 'Non-returnable items',
            body: 'Customized or personalized phone cases, items marked as "final sale," and cases with signs of use or damage caused by the customer are not eligible for return.',
          },
          {
            title: 'Refund processing',
            body: 'Once we receive and inspect your return, we will notify you by email. Approved refunds are processed within 5–7 business days to your original payment method. Shipping costs are non-refundable unless the return is due to our error.',
          },
          {
            title: 'Damaged or defective items',
            body: 'If you receive a damaged or defective item, contact us within 7 days of delivery with photos of the issue. We will arrange a free replacement or full refund at no additional cost to you.',
          },
          {
            title: 'Exchanges',
            body: 'If you need a different size or color, we recommend placing a new order and returning the original item for a refund. This is the fastest way to get the right product to you.',
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
