'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 'faq-1',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day hassle-free return policy. If you are not completely satisfied with your purchase, simply return it in its original condition with tags attached and we will provide a full refund or exchange. Items must be unworn, unwashed, and undamaged.',
  },
  {
    id: 'faq-2',
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3–5 business days within the US. Expedited shipping (1–2 business days) is available at checkout. International orders usually arrive within 7–14 business days depending on the destination country.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any customs duties or import taxes that may apply in their country.',
  },
  {
    id: 'faq-4',
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier\'s website. Orders are typically processed within 1–2 business days.',
  },
];

function IconPlus({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden fill="none" viewBox="0 0 10 10" width="16" height="16"
      style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: open ? 0 : 1, transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
    </svg>
  );
}

function IconMinus({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden fill="none" viewBox="0 0 10 2" width="16" height="16"
      style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: open ? 1 : 0, transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
    </svg>
  );
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span style={{ position: 'relative', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1a2b5e' }}>
      <IconPlus open={open} />
      <IconMinus open={open} />
    </span>
  );
}

export function ElegantFashionFAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="effaq-section">
      <div className="container-main effaq-inner">
        <div className="effaq-header">
          <p className="effaq-eyebrow">GOT QUESTIONS?</p>
          <h2 className="effaq-heading">Frequently Asked Questions</h2>
        </div>

        <div className="effaq-list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`effaq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  onClick={() => toggle(faq.id)}
                  className="effaq-trigger"
                  aria-expanded={isOpen}
                >
                  <span className="effaq-question">{faq.question}</span>
                  <ToggleIcon open={isOpen} />
                </button>
                <div className="effaq-body" style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0, transition: 'grid-template-rows 400ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 350ms cubic-bezier(0.25,0.46,0.45,0.94)' }}>
                  <div style={{ overflow: 'hidden', minHeight: 0 }}>
                    <p className="effaq-answer">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .effaq-section { background: #f7f8fa; }
        .effaq-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(28px, 5vw, 48px);
          align-items: start;
        }
        .effaq-header { text-align: center; }
        .effaq-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #1a2b5e;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .effaq-heading {
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }

        .effaq-list {
          display: flex;
          flex-direction: column;
        }

        .effaq-item {
          border-bottom: 1px solid #e5e5e5;
        }
        .effaq-item:first-child { border-top: 1px solid #e5e5e5; }

        .effaq-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: clamp(16px, 2.5vw, 20px) 0;
          text-align: left;
        }
        .effaq-question {
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 600;
          color: #111;
          line-height: 1.4;
          transition: color 200ms ease;
        }
        .effaq-item.is-open .effaq-question { color: #1a2b5e; }
        .effaq-trigger:hover .effaq-question { color: #1a2b5e; }

        .effaq-answer {
          font-size: clamp(13px, 1.8vw, 15px);
          color: #555;
          line-height: 1.75;
          padding-bottom: clamp(14px, 2vw, 20px);
        }

        @media (min-width: 992px) {
          .effaq-inner {
            grid-template-columns: 1fr 2fr;
          }
          .effaq-header { text-align: left; }
        }
      `}</style>
    </section>
  );
}
