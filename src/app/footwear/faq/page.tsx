'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How do I find my correct shoe size?',
    a: 'Each product page includes a detailed size chart with measurements in US, UK, and EU. For the best fit we recommend measuring your foot in the evening when feet are at their largest, and ordering your usual size — our lasts run true to size.',
  },
  {
    q: 'Are your shoes true to size?',
    a: 'Yes! Our lasts are graded across the full size run so your regular size should fit right out of the box. If you are between sizes, we generally recommend sizing up for a roomier fit, especially for sneakers and boots.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping takes 5–7 business days. Express shipping (2–3 business days) is available at checkout. We ship from our New York warehouse on the same day for orders placed before 2 PM EST.',
  },
  {
    q: 'Can I return or exchange my shoes?',
    a: 'Absolutely. We offer hassle-free 30-day returns on all unworn shoes in their original box. Exchanges for a different size or color can be arranged by contacting our support team.',
  },
  {
    q: 'Is the leather genuine?',
    a: 'Yes. Our leather shoes use full-grain genuine leather that softens and develops character over time. Each pair is hand-inspected for quality before it leaves the warehouse.',
  },
  {
    q: 'Are your sneakers good for all-day wear?',
    a: 'Our sneakers use a responsive foam midsole and breathable knit or leather uppers, designed for all-day comfort. They are tested mile after mile so you can stand, walk, and commute without the ache.',
  },
  {
    q: 'How do I clean and care for my shoes?',
    a: 'For knit and canvas shoes, spot-clean with a soft brush, mild soap, and water — avoid the washing machine. For leather shoes, use a leather conditioner, keep them dry, and store with shoe trees to hold their shape.',
  },
  {
    q: 'Do you offer bulk or wholesale pricing?',
    a: 'Yes, we offer wholesale pricing for orders of 50+ pairs. Contact our team at wholesale@ambaz.com with your requirements and we\'ll provide a custom quote within 24 hours.',
  },
];

export default function FootwearFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Frequently Asked Questions</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/footwear-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '60px', paddingBottom: '100px', maxWidth: '720px' }}>
        <div className="fwfaq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="fwfaq-item">
              <button
                className="fwfaq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className={`fwfaq-icon ${openIndex === i ? 'is-open' : ''}`}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className={`fwfaq-answer-wrap ${openIndex === i ? 'is-open' : ''}`}>
                <p className="fwfaq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fwfaq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid #e5e5e5;
        }

        .fwfaq-item {
          border-bottom: 1px solid #e5e5e5;
        }

        .fwfaq-question {
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
        .fwfaq-question:hover { color: #555; }

        .fwfaq-icon {
          font-size: 24px;
          font-weight: 300;
          color: #555;
          flex-shrink: 0;
          transition: color 200ms ease;
          line-height: 1;
        }
        .fwfaq-icon.is-open { color: #111; }

        .fwfaq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }
        .fwfaq-answer-wrap.is-open {
          grid-template-rows: 1fr;
        }

        .fwfaq-answer {
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
