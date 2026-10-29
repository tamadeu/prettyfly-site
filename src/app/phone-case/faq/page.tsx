'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What phone models do your cases fit?',
    a: 'Our cases are precision-engineered for all major iPhone models (iPhone 13, 14, 15, and Pro variants) and Samsung Galaxy S24 series. Check the product page for exact compatibility before ordering.',
  },
  {
    q: 'Are your cases MagSafe compatible?',
    a: 'Yes! All our iPhone cases are MagSafe compatible — magnetic wallet attachments, chargers, and accessories work perfectly through our cases without any loss of performance.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping takes 5–7 business days. Express shipping (2–3 business days) is available at checkout. We ship from our New York warehouse on the same day for orders placed before 2 PM EST.',
  },
  {
    q: 'Can I return or exchange my case?',
    a: 'Absolutely. We offer hassle-free 30-day returns on all unused items in original packaging. Exchanges for a different size or color can be arranged by contacting our support team.',
  },
  {
    q: 'Are your leather cases genuine leather?',
    a: 'Yes. Our leather cases use full-grain genuine leather that develops a unique patina over time. Each piece is hand-inspected for quality before shipping.',
  },
  {
    q: 'Do the slim cases protect against drops?',
    a: 'Our slim cases are tested to withstand 6-foot drops. They use a dual-layer design — a hard polycarbonate back with a shock-absorbing TPU edge — that provides serious protection without bulk.',
  },
  {
    q: 'How do I clean my phone case?',
    a: 'For TPU and polycarbonate cases, wipe with a damp cloth and mild soap — avoid harsh chemicals. For leather cases, use a leather conditioner and keep away from water and direct sunlight.',
  },
  {
    q: 'Do you offer bulk or wholesale pricing?',
    a: 'Yes, we offer wholesale pricing for orders of 50+ units. Contact our team at wholesale@ambaz.com with your requirements and we\'ll provide a custom quote within 24 hours.',
  },
];

export default function PhoneCaseFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Frequently Asked Questions</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/phone-case-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '100px', maxWidth: '720px' }}>
        <div className="pcfaq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="pcfaq-item">
              <button
                className="pcfaq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className={`pcfaq-icon ${openIndex === i ? 'is-open' : ''}`}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className={`pcfaq-answer-wrap ${openIndex === i ? 'is-open' : ''}`}>
                <p className="pcfaq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pcfaq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid #e5e5e5;
        }

        .pcfaq-item {
          border-bottom: 1px solid #e5e5e5;
        }

        .pcfaq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          font-size: clamp(15px, 1.3vw, 18px);
          font-weight: 600;
          color: #222;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: color 200ms ease;
        }
        .pcfaq-question:hover { color: #555; }

        .pcfaq-icon {
          font-size: 24px;
          font-weight: 300;
          color: #555;
          flex-shrink: 0;
          transition: color 200ms ease;
          line-height: 1;
        }
        .pcfaq-icon.is-open { color: #111; }

        .pcfaq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }
        .pcfaq-answer-wrap.is-open {
          grid-template-rows: 1fr;
        }

        .pcfaq-answer {
          min-height: 0;
          font-size: clamp(14px, 1.1vw, 16px);
          color: #666;
          line-height: 1.75;
          padding-bottom: 20px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
