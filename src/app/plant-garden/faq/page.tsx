'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FaqAccordion({ items, defaultOpen = 0 }: { items: { question: string; answer: string }[]; defaultOpen?: number | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const isFirst = i === 0;
        const isLast = i === items.length - 1;
        return (
          <div key={i} style={{ borderTop: isFirst ? 'none' : '1px solid #e5e5e5', borderBottom: isLast ? 'none' : undefined }}>
            <button
              onClick={() => toggle(i)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '22px 0', fontSize: '24px', fontWeight: 600,
                color: '#222', background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', gap: '16px',
              }}
            >
              <span style={{ flex: 1 }}>{item.question}</span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, width: '24px', height: '24px', position: 'relative',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 10" width="20" height="20"
                  style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: isOpen ? 0 : 1, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 2" width="20" height="20"
                  style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: isOpen ? 1 : 0, transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <div
              ref={(el) => { faqRefs.current[i] = el; }}
              style={{
                maxHeight: isOpen ? `${faqRefs.current[i]?.scrollHeight || 500}px` : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <div style={{ paddingBottom: '22px', fontSize: '14px', color: '#555', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PlantGardenFAQPage() {
  return (
    <>
      <div className="pg-faq-page-header">
        <div className="container-main">
          <h1 className="pg-faq-h1">FAQ</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/plant-garden-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      {/* Section 1 — Plants & Care */}
      <div className="container-main pg-faq-section-pad">
        <h2 className="pg-faq-h2">Plants &amp; Care</h2>
        <div className="pg-faq-grid">
          <div className="pg-faq-accordion-col">
            <FaqAccordion
              defaultOpen={null}
              items={[
                {
                  question: 'How do I know which plant is right for me?',
                  answer: 'Each product page includes a care difficulty rating (Easy, Moderate, Advanced), light requirements, watering frequency, and ideal room conditions. If you are a beginner, filter by "Easy Care" in our shop. Our plant specialists are also available via chat to help match a plant to your space.',
                },
                {
                  question: 'Are your plants grown organically?',
                  answer: 'Many of our indoor plants are grown in peat-free, sustainably sourced growing media. Outdoor plants and edible seeds are grown without harmful synthetic pesticides wherever possible. Individual product pages note growing practices for that specific plant or seed variety.',
                },
                {
                  question: 'Do plants come with soil and pots?',
                  answer: 'Plants are shipped in nursery grow pots with the growing media they were raised in — ready to place in a decorative pot of your choice. We do not include a decorative pot unless the product page specifically states it is included. Browse our Pots & Planters category for matching options.',
                },
                {
                  question: 'What if my plant arrives damaged?',
                  answer: 'We guarantee every plant arrives alive and in good health. If your plant arrives damaged, wilted beyond recovery, or not as described, photograph it on arrival and contact us within 48 hours. We will send a replacement or issue a full refund — whichever you prefer.',
                },
              ]}
            />
          </div>
          <div className="pg-faq-img-wrap">
            <Image
              src="/fashion/faq/faq2.webp"
              alt="Plants & Care"
              width={800}
              height={680}
              className="pg-faq-img"
              style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Section 2 — Orders & Delivery (gray bg) */}
      <div style={{ backgroundColor: '#f5f7f2' }}>
        <div className="container-main pg-faq-section-pad">
          <h2 className="pg-faq-h2">Orders &amp; Delivery</h2>
          <div className="pg-faq-grid">
            <div className="pg-faq-accordion-col">
              <FaqAccordion
                defaultOpen={null}
                items={[
                  {
                    question: 'How fast will my order arrive?',
                    answer: 'Orders placed before 2:00 PM on business days typically dispatch the same day. Standard delivery takes 2–5 business days. We ship plants Monday–Wednesday to avoid weekend delays. You will receive a tracking number by email as soon as your order ships.',
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are processed over an encrypted SSL connection. Your card details are never stored on our servers.',
                  },
                  {
                    question: 'Can I change or cancel my order after placing it?',
                    answer: 'Orders can be modified or cancelled within 2 hours of placement. After that window, your plants may have already been packed for shipping. Contact us as quickly as possible at hello@greengarden.com and we will do our best to help.',
                  },
                  {
                    question: 'Do you ship internationally?',
                    answer: 'We currently ship within the United States and Canada. Phytosanitary regulations mean that some plant species cannot cross certain borders — affected products are noted on their product pages. Sign up for our newsletter for updates on international expansion.',
                  },
                ]}
              />
            </div>
            <div className="pg-faq-img-wrap">
              <Image
                src="/fashion/faq/faq1.webp"
                alt="Orders & Delivery"
                width={800}
                height={680}
                className="pg-faq-img"
                style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Returns & Guarantee */}
      <div className="container-main pg-faq-section-pad">
        <h2 className="pg-faq-h2">Returns &amp; Guarantee</h2>
        <div className="pg-faq-accordion-col" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FaqAccordion
            defaultOpen={null}
            items={[
              {
                question: 'What is your return policy?',
                answer: 'We offer 30-day hassle-free returns on non-perishable items (pots, tools, accessories) in original, unused condition. Live plants are non-returnable but covered by our alive-on-arrival guarantee — if a plant arrives in poor health, we replace it or refund you.',
              },
              {
                question: 'What happens if a plant dies after arrival?',
                answer: 'Our alive-on-arrival guarantee covers plants that arrive in visibly poor condition. Plants that decline after delivery due to care or environment are not covered by this guarantee, but our plant care team is happy to help you nurse a struggling plant back to health — reach out any time.',
              },
              {
                question: 'Do your products come with a warranty?',
                answer: 'Garden tools include a 1-year manufacturer warranty against defects in materials and workmanship. Pots and planters are covered for 90 days against manufacturing defects. Warranty details are listed on each product page.',
              },
              {
                question: 'What if my order arrives damaged or incorrect?',
                answer: 'Please photograph the damaged or incorrect item and contact hello@greengarden.com within 48 hours of delivery. We will arrange a replacement shipment or a full refund — your choice — and cover any return shipping costs.',
              },
            ]}
          />
        </div>
      </div>

      <div style={{ height: '80px' }} />

      <style>{`
        .pg-faq-page-header { background-color: #f5f7f2; padding: 40px 0 50px; text-align: center; }
        .pg-faq-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .pg-faq-section-pad { padding-block: 80px; }
        .pg-faq-h2 { font-size: 36px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .pg-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .pg-faq-img-wrap { position: relative; width: 100%; min-height: 710px; }
        .pg-faq-img { height: 680px; }

        @media (max-width: 991px) {
          .pg-faq-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .pg-faq-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .pg-faq-section-pad { padding-block: clamp(40px, 8vw, 80px); }
          .pg-faq-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 6vw, 50px); }
          .pg-faq-grid { grid-template-columns: 1fr; gap: clamp(20px, 6vw, 60px); }
          .pg-faq-img-wrap { order: -1; min-height: unset; width: 100%; overflow: hidden; }
          .pg-faq-img { height: clamp(260px, 70vw, 600px); width: 100%; display: block; }
          .pg-faq-accordion-col button { font-size: clamp(16px, 4.5vw, 24px) !important; padding: clamp(14px, 3.5vw, 22px) 0 !important; }
        }
      `}</style>
    </>
  );
}
