'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What smart watch features do your watches include?',
    a: 'Our smart watches include heart rate monitoring, GPS tracking, sleep analysis, step counting, call and message notifications, and fitness tracking for 100+ activities. Check individual product pages for specific features.',
  },
  {
    q: 'Are your watches water resistant?',
    a: 'Yes! Most of our watches are rated 5ATM (water resistant to 50 meters), suitable for swimming and showering. Dive-specific models are rated 10ATM. Check each product description for the exact rating.',
  },
  {
    q: 'How long does battery last?',
    a: 'Battery life varies by model. Fitness trackers typically last 7–14 days. Smart watches with full display usage average 2–3 days. GPS tracking mode reduces battery life — check the product specifications.',
  },
  {
    q: 'Which smartphones are compatible?',
    a: 'All our smart watches are compatible with iOS (iPhone 8 or later) and Android (Android 8.0 or later). Some advanced features may require the latest OS version. Luxury and digital models work independently of smartphones.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day hassle-free return policy on all unused items in original packaging. If your watch is defective, we offer a full replacement or refund within the first year.',
  },
  {
    q: 'Do you offer warranty on your watches?',
    a: 'Yes. All our watches come with a 12-month manufacturer warranty covering defects in materials and workmanship. Smart watch batteries are covered for 6 months.',
  },
  {
    q: 'Can I change the watch band?',
    a: 'Most of our smart watches feature quick-release bands that can be swapped in seconds without tools. We carry a wide selection of replacement bands in different materials and colors.',
  },
  {
    q: 'How do I track my order?',
    a: 'After your order ships, you will receive a tracking number via email. You can use this to track your package on our website or directly on the carrier\'s tracking portal.',
  },
];

export default function SmartWatchesFaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0 60px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>Frequently Asked Questions</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>{faq.q}</span>
                <span style={{ fontSize: '22px', color: '#555', flexShrink: 0, transition: 'transform 300ms ease', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
              </button>
              <div style={{
                display: 'grid',
                gridTemplateRows: open === i ? '1fr' : '0fr',
                transition: 'grid-template-rows 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.75, paddingBottom: '20px', margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
