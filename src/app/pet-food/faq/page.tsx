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

export default function PetFoodFAQPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pf-faq-page-header">
        <div className="container-main">
          <h1 className="pf-faq-h1">FAQ</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/pet-food-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 1 — Feeding & Nutrition (50/50 with image)
         ══════════════════════════════════ */}
      <div className="container-main pf-faq-section-pad">
        <h2 className="pf-faq-h2">Feeding &amp; Nutrition</h2>
        <div className="pf-faq-grid">
          {/* Left — Accordion */}
          <div className="pf-faq-accordion-col">
            <FaqAccordion
              defaultOpen={null}
              items={[
                {
                  question: 'How do I transition my pet to a new food?',
                  answer: 'Transition gradually over 7–10 days. Start by mixing 25% new food with 75% current food for the first 2–3 days, then shift to 50/50 for another 2–3 days, and finally 75% new food for the last few days before fully switching. A slow transition minimises digestive upset and helps your pet adjust to the new flavours and nutrients.',
                },
                {
                  question: 'How much should I feed my pet each day?',
                  answer: 'Feeding amounts depend on your pet\'s weight, age, and activity level. General guidelines are printed on every pack. As a starting point, active adult dogs typically need 2–3% of their body weight per day in fresh food. We recommend consulting your vet if your pet has specific dietary needs or health conditions.',
                },
                {
                  question: 'Are your recipes suitable for all life stages?',
                  answer: 'Most of our recipes are formulated for adult dogs and cats. We clearly label puppy, kitten, and senior-specific formulas on each product page. If you have a growing pet or a senior animal with different nutritional needs, look for the corresponding life-stage badge on the product listing.',
                },
                {
                  question: 'What makes Ambaz recipes different from standard kibble?',
                  answer: 'Our recipes use real, traceable proteins as the first ingredient — no rendered by-products, no mystery meal. We slow-cook in small batches to preserve nutrients and natural flavours, and we never add artificial colours, flavours, or preservatives. Every formula is developed with board-certified veterinary nutritionists to meet AAFCO nutritional standards.',
                },
              ]}
            />
          </div>

          {/* Right — Image */}
          <div className="pf-faq-img-wrap">
            <Image
              src="/fashion/faq/faq2.webp"
              alt="Feeding & Nutrition"
              width={800}
              height={680}
              className="pf-faq-img"
              style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 2 — Orders & Delivery (50/50 with image, gray bg)
         ══════════════════════════════════ */}
      <div style={{ backgroundColor: 'rgb(247, 248, 252)' }}>
        <div className="container-main pf-faq-section-pad">
          <h2 className="pf-faq-h2">Orders &amp; Delivery</h2>
          <div className="pf-faq-grid">
            {/* Left — Accordion */}
            <div className="pf-faq-accordion-col">
              <FaqAccordion
                defaultOpen={null}
                items={[
                  {
                    question: 'How do I set up a recurring subscription?',
                    answer: 'On any product page, choose your preferred pack size and select "Subscribe & Save" before adding to cart. You\'ll pick your delivery frequency (weekly, bi-weekly, or monthly) at checkout. Subscriptions can be paused, modified, or cancelled at any time from your account dashboard — no lock-in periods.',
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are processed over an encrypted SSL connection. Your card details are never stored on our servers — payments are handled securely by our PCI-compliant payment processor.',
                  },
                  {
                    question: 'How long does delivery take?',
                    answer: 'Standard domestic orders are dispatched within 1–2 business days and typically arrive within 3–5 business days. Refrigerated fresh formulas are shipped in insulated cold-chain packaging to maintain freshness. Express 1–2 day delivery is available at checkout for an additional fee.',
                  },
                  {
                    question: 'Can I change or cancel my order after placing it?',
                    answer: 'Orders can be modified or cancelled within 2 hours of placement. After that window, our fulfilment centre may have already picked and packed your order. Please contact our support team as quickly as possible at support@ambaz.com and we will do our best to accommodate your request before the order ships.',
                  },
                ]}
              />
            </div>

            {/* Right — Image */}
            <div className="pf-faq-img-wrap">
              <Image
                src="/fashion/faq/faq1.webp"
                alt="Orders & Delivery"
                width={800}
                height={680}
                className="pf-faq-img"
                style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 3 — Returns & Health Guarantee (full width, no image)
         ══════════════════════════════════ */}
      <div className="container-main pf-faq-section-pad">
        <h2 className="pf-faq-h2">Returns &amp; Health Guarantee</h2>
        <div className="pf-faq-accordion-col" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FaqAccordion
            defaultOpen={null}
            items={[
              {
                question: 'What is your freshness guarantee?',
                answer: 'Every order leaves our fulfilment centre with a minimum of 7 days remaining before the best-before date. Refrigerated formulas are shipped with gel ice packs inside insulated liners rated for 48-hour transit. If your order arrives warm or past its best-before date, contact us within 48 hours and we will send a replacement at no charge.',
              },
              {
                question: 'My pet doesn\'t like the food — what can I do?',
                answer: 'We offer a 100% satisfaction guarantee on your first order of any new recipe. If your pet refuses it after a genuine transition period (at least 5 days), contact our support team with your order number and we will issue a full refund or send an alternative recipe — no return required.',
              },
              {
                question: 'What if my order arrives damaged or incorrect?',
                answer: 'We\'re sorry if something went wrong. Please photograph the damaged or incorrect items and email support@ambaz.com within 48 hours of delivery. We will arrange a replacement shipment or a full refund, whichever you prefer, and we will cover the cost of any return shipping.',
              },
              {
                question: 'How do I return an unopened product?',
                answer: 'Unopened, non-refrigerated products can be returned within 30 days of delivery for a full refund. To start a return, contact support@ambaz.com with your order number. Once your return is received and inspected, we will process your refund within 5 business days. Refrigerated fresh formulas are not eligible for return due to food-safety regulations, but are covered by our freshness guarantee above.',
              },
            ]}
          />
        </div>
      </div>

      {/* 80px gap before footer */}
      <div style={{ height: '80px' }} />

      <style>{`
        /* ─── base classes ─── */
        .pf-faq-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .pf-faq-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .pf-faq-section-pad { padding-block: 80px; }
        .pf-faq-h2 { font-size: 36px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .pf-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .pf-faq-img-wrap { position: relative; width: 100%; min-height: 710px; }
        .pf-faq-img { height: 680px; }

        /* ─── 320–991: image layout + fluid scaling for all sections ─── */
        @media (max-width: 991px) {
          .pf-faq-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .pf-faq-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .pf-faq-section-pad { padding-block: clamp(40px, 8vw, 80px); }
          .pf-faq-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 6vw, 50px); }
          .pf-faq-grid { grid-template-columns: 1fr; gap: clamp(20px, 6vw, 60px); }
          .pf-faq-img-wrap { order: -1; min-height: unset; width: 100%; overflow: hidden; }
          .pf-faq-img { height: clamp(260px, 70vw, 600px); width: 100%; display: block; }
          .pf-faq-accordion-col button { font-size: clamp(16px, 4.5vw, 24px) !important; padding: clamp(14px, 3.5vw, 22px) 0 !important; }
        }
      `}</style>
    </>
  );
}
