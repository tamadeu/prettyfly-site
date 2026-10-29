import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy — Boutique Fashion',
  description: 'Our refund and returns policy for Boutique Fashion orders.',
};

export default function BoutiqueFashionRefundPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Refund Policy</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Refund Policy</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingBlock: '60px 100px', maxWidth: '680px' }}>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>Last updated: June 21, 2026</p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>30-day return window</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          We accept returns within 30 days of the delivery date. Items must be unworn, unwashed, and in their original condition with all tags attached. Sale items and swimwear are final sale and not eligible for return.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>How to start a return</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '12px' }}>To initiate a return:</p>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          {['Email returns@ambaz.com with your order number and reason for return', 'We will send you a prepaid return shipping label within 1 business day', 'Pack the item securely and attach the label', 'Drop off at any authorised carrier location'].map((item) => (
            <li key={item} style={{ fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item}</li>
          ))}
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Refunds</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          Refunds are processed within 3–5 business days of receiving your return. The credit will be applied to your original payment method. Shipping costs are non-refundable unless the item was defective or we made an error.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Exchanges</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          We offer free exchanges for a different size or colour of the same item within 30 days. Select &quot;Exchange&quot; in the returns portal or mention it in your return email and we&apos;ll send the replacement once we receive your return.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Damaged or incorrect items</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
          If you received a damaged, defective, or incorrect item, please contact <a href="mailto:support@ambaz.com" style={{ color: '#222', textDecoration: 'underline' }}>support@ambaz.com</a> within 7 days of delivery. We will arrange a free return and replacement or full refund at no cost to you.
        </p>
      </div>
    </>
  );
}
