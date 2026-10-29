'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── FAQ Accordion ── */

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

/* ── Page ── */

export default function MegastoreFAQPage() {
  return (
    <>
      <div className="ms-faq-page-header">
        <div className="container-main">
          <h1 className="ms-faq-h1">FAQ</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/megastore-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      {/* Section 1 — Products & Compatibility */}
      <div className="container-main ms-faq-section-pad">
        <h2 className="ms-faq-h2">Products &amp; Compatibility</h2>
        <div className="ms-faq-grid">
          <div className="ms-faq-accordion-col">
            <FaqAccordion
              defaultOpen={null}
              items={[
                {
                  question: 'How do I know if a device is compatible with my setup?',
                  answer: 'Each product page lists compatibility under "Specifications" — operating system, port types, wireless protocols, and supported app versions. If you are unsure, our support team can help: send your existing device model, and we will confirm compatibility before you order.',
                },
                {
                  question: 'Are your products genuine and warranty-eligible?',
                  answer: 'Yes — every product we sell is sourced directly from the manufacturer or authorised distributor. All items ship sealed in original packaging with manufacturer warranty intact. Serial numbers can be registered with the brand for warranty service.',
                },
                {
                  question: 'Do laptops and smartphones come unlocked?',
                  answer: 'All smartphones and laptops we sell are factory-unlocked and SIM-free unless explicitly noted on the product page (e.g. carrier-locked promo bundles). Unlocked devices work with any compatible network and travel internationally without restrictions.',
                },
                {
                  question: 'What is the difference between accessories listed as "compatible" vs "made for"?',
                  answer: '"Made for" accessories are officially certified by the device manufacturer (MFi for Apple, Designed for Surface, etc.) and meet strict performance and safety standards. "Compatible" accessories work with the device but may not carry the official certification — typically more affordable, still high quality.',
                },
              ]}
            />
          </div>

          <div className="ms-faq-img-wrap">
            <Image
              src="/fashion/faq/faq2.webp"
              alt="Products & Compatibility"
              width={800}
              height={680}
              className="ms-faq-img"
              style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Section 2 — Orders & Delivery */}
      <div style={{ backgroundColor: 'rgb(247, 248, 252)' }}>
        <div className="container-main ms-faq-section-pad">
          <h2 className="ms-faq-h2">Orders &amp; Delivery</h2>
          <div className="ms-faq-grid">
            <div className="ms-faq-accordion-col">
              <FaqAccordion
                defaultOpen={null}
                items={[
                  {
                    question: 'How long does delivery take?',
                    answer: 'Standard domestic orders are dispatched within 1–2 business days and typically arrive within 3–5 business days. Express 1–2 day delivery is available at checkout for an additional fee. Large items like televisions and desktop computers may take an extra day for white-glove handling.',
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are processed over an encrypted SSL connection. Your card details are never stored on our servers — payments are handled securely by our PCI-compliant payment processor.',
                  },
                  {
                    question: 'Do you offer financing or pay-over-time options?',
                    answer: 'Yes — at checkout, eligible orders over $200 can be split into 4 interest-free payments via Affirm or Klarna. Larger purchases (laptops, televisions) qualify for 6- and 12-month financing plans subject to credit approval. APR varies by plan.',
                  },
                  {
                    question: 'Can I change or cancel my order after placing it?',
                    answer: 'Orders can be modified or cancelled within 1 hour of placement. After that window, our fulfilment centre may have already picked and packed your order. Please contact support@ambaz.com as quickly as possible and we will do our best before the order ships.',
                  },
                ]}
              />
            </div>

            <div className="ms-faq-img-wrap">
              <Image
                src="/fashion/faq/faq1.webp"
                alt="Orders & Delivery"
                width={800}
                height={680}
                className="ms-faq-img"
                style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Returns & Warranty */}
      <div className="container-main ms-faq-section-pad">
        <h2 className="ms-faq-h2">Returns &amp; Warranty</h2>
        <div className="ms-faq-accordion-col" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FaqAccordion
            defaultOpen={null}
            items={[
              {
                question: 'What is your return policy on electronics?',
                answer: 'Unopened items in original packaging may be returned within 30 days of delivery for a full refund. Opened items are subject to a 15% restocking fee for hygiene-sensitive categories (in-ear headphones, wearables) and may be refused if missing original accessories or showing wear beyond reasonable inspection.',
              },
              {
                question: 'My device arrived defective — what do I do?',
                answer: 'Contact us within 14 days of delivery and we will arrange a free replacement on the next available shipment, or a full refund — your choice. Send photos of the issue and the order number to support@ambaz.com. Keep the original packaging until we confirm the replacement.',
              },
              {
                question: 'How do manufacturer warranty claims work?',
                answer: 'Most electronics include a 1- or 2-year manufacturer warranty. For defects discovered after our 30-day return window, we coordinate the warranty claim directly with the brand on your behalf. Have your order number and device serial number ready when you contact us.',
              },
              {
                question: 'Can I extend the warranty on my purchase?',
                answer: 'Yes — at checkout you can add an extended protection plan (1, 2, or 3 additional years) for laptops, smartphones, televisions, and select other categories. Plans cover accidental damage, mechanical failure, and battery defects. See the product page for category-specific terms.',
              },
            ]}
          />
        </div>
      </div>

      <div style={{ height: '80px' }} />

      <style>{`
        .ms-faq-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ms-faq-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .ms-faq-section-pad { padding-block: 80px; }
        .ms-faq-h2 { font-size: 36px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .ms-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .ms-faq-img-wrap { position: relative; width: 100%; min-height: 710px; }
        .ms-faq-img { height: 680px; }

        @media (max-width: 991px) {
          .ms-faq-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ms-faq-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ms-faq-section-pad { padding-block: clamp(40px, 8vw, 80px); }
          .ms-faq-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 6vw, 50px); }
          .ms-faq-grid { grid-template-columns: 1fr; gap: clamp(20px, 6vw, 60px); }
          .ms-faq-img-wrap { order: -1; min-height: unset; width: 100%; overflow: hidden; }
          .ms-faq-img { height: clamp(260px, 70vw, 600px); width: 100%; display: block; }
          .ms-faq-accordion-col button { font-size: clamp(16px, 4.5vw, 24px) !important; padding: clamp(14px, 3.5vw, 22px) 0 !important; }
        }
      `}</style>
    </>
  );
}
