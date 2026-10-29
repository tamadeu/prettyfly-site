'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FaqAccordion({ items, defaultOpen = 0 }: { items: { question: string; answer: string }[]; defaultOpen?: number | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid #e5e5e5' }}>
            <button onClick={() => toggle(i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', fontSize: '18px', fontWeight: 600, color: '#222', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
              <span style={{ flex: 1 }}>{item.question}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '24px', height: '24px', position: 'relative' }}>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" fill="none" viewBox="0 0 10 10" width="18" height="18" style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: isOpen ? 0 : 1, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" fill="none" viewBox="0 0 10 2" width="18" height="18" style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: isOpen ? 1 : 0, transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <div ref={(el) => { faqRefs.current[i] = el; }} style={{ maxHeight: isOpen ? `${faqRefs.current[i]?.scrollHeight || 500}px` : '0', opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: 'max-height 500ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 400ms cubic-bezier(0.25,0.46,0.45,0.94)' }}>
              <div style={{ paddingBottom: '22px', fontSize: '14px', color: '#555', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const sections = [
  {
    title: 'Ordering & Shipping',
    image: '/boutique-fashion/products/products1.png',
    imageLeft: false,
    items: [
      { question: 'How long does shipping take?', answer: 'Standard shipping takes 3–5 business days. Express (1–2 days) and overnight options are available at checkout. Orders placed before 2pm ET on weekdays ship the same day.' },
      { question: 'Do you offer free shipping?', answer: 'Yes! Orders over $100 qualify for free standard shipping within the US. International shipping rates vary by destination.' },
      { question: 'Can I change or cancel my order?', answer: 'Orders can be modified or cancelled within 2 hours of placement. After that, the order enters fulfillment. Contact us at orders@ambaz.com immediately if you need to make changes.' },
    ],
  },
  {
    title: 'Returns & Exchanges',
    image: '/boutique-fashion/products/products5.png',
    imageLeft: true,
    items: [
      { question: 'What is your return policy?', answer: 'We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in their original packaging with tags attached.\n\nFinal sale items and swimwear are not eligible for returns.' },
      { question: 'How do I start a return?', answer: 'Visit our returns portal at ambaz.com/returns or email returns@ambaz.com with your order number. We\'ll send you a prepaid return label within 1 business day.' },
      { question: 'When will I receive my refund?', answer: 'Refunds are processed within 3–5 business days of receiving your return. The credit will appear on your original payment method.' },
    ],
  },
  {
    title: 'Sizing & Fit',
    image: '/boutique-fashion/products/products8.png',
    imageLeft: false,
    items: [
      { question: 'How do I find my size?', answer: 'Each product page includes a size guide with measurements in inches and centimeters. When in doubt, size up — our pieces are designed with a relaxed, flattering fit.' },
      { question: 'Do your clothes run true to size?', answer: 'Most of our pieces run true to size. Knitwear and relaxed-fit styles may run slightly larger. Check the individual size notes on each product page for guidance.' },
      { question: 'Can I exchange for a different size?', answer: 'Yes! Exchanges for a different size are free within 30 days. Simply select "Exchange" in our returns portal and choose your new size. We\'ll ship the replacement as soon as we receive your return.' },
    ],
  },
];

export default function BoutiqueFashionFAQPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>FAQ</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      <div className="bf-faq-sections">
        {sections.map((section, si) => (
          <div key={si} className="container-main">
            <h2 className="bf-faq-section-title">{section.title}</h2>
            <div className={`bf-faq-grid${section.imageLeft ? ' bf-faq-grid--rev' : ''}`}>
              <FaqAccordion items={section.items} defaultOpen={si === 0 ? 0 : null} />
              <div className="bf-faq-img-wrap">
                <Image src={section.image} alt={section.title} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="50vw" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .bf-faq-sections { display: flex; flex-direction: column; gap: 80px; padding-block: 80px; }
        .bf-faq-section-title { font-size: clamp(22px, 3vw, 36px); font-weight: 700; color: #222; margin-bottom: 32px; }
        .bf-faq-grid { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
        .bf-faq-img-wrap { position: relative; height: clamp(300px, 40vw, 560px); overflow: hidden; border-radius: 4px; background: #f5f5f5; }
        @media (min-width: 992px) {
          .bf-faq-grid { grid-template-columns: 1fr 1fr; }
          .bf-faq-grid--rev > *:first-child { order: 2; }
          .bf-faq-grid--rev > *:last-child  { order: 1; }
        }
        @media (max-width: 749px) {
          .bf-faq-sections { gap: 60px; padding-block: 60px; }
          .bf-faq-img-wrap { height: clamp(220px, 60vw, 360px); order: -1; }
        }
      `}</style>
    </>
  );
}
