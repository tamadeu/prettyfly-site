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

export default function CarAccessoriesFAQPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="ca-faq-page-header">
        <div className="container-main">
          <h1 className="ca-faq-h1">FAQ</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/car-accessories-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 1 — Product & Compatibility
         ══════════════════════════════════ */}
      <div className="container-main ca-faq-section-pad">
        <h2 className="ca-faq-h2">Product &amp; Compatibility</h2>
        <div className="ca-faq-grid">
          {/* Left — Accordion */}
          <div className="ca-faq-accordion-col">
            <FaqAccordion
              defaultOpen={null}
              items={[
                {
                  question: 'How do I know if a part fits my vehicle?',
                  answer: 'Every product page lists the compatible year, make, model, and sub-model. Use our Vehicle Search tool on the homepage to filter the entire catalog to parts guaranteed to fit your specific vehicle. If you are unsure, our support team can verify fitment before you order.',
                },
                {
                  question: 'Are your parts OEM or aftermarket?',
                  answer: 'We carry both OEM (Original Equipment Manufacturer) and high-quality aftermarket parts. OEM parts are made by your vehicle\'s manufacturer and offer an exact factory fit. Aftermarket parts meet or exceed OEM specifications and are often available at a lower price point. Each product page clearly indicates which type you are viewing.',
                },
                {
                  question: 'Do you carry performance upgrades?',
                  answer: 'Yes. Our catalog includes performance brake kits, sport suspension components, alloy wheels, exhaust upgrades, and more. Look for the "Performance" badge on product listings or browse our Performance category to find upgrades suited to your vehicle.',
                },
                {
                  question: 'Can I install the parts myself?',
                  answer: 'Many of our accessories and maintenance parts are DIY-friendly and come with installation guides. For safety-critical components like brake systems, suspension parts, and steering components, we strongly recommend professional installation by a certified mechanic to ensure correct fitment and safe operation.',
                },
              ]}
            />
          </div>

          {/* Right — Image */}
          <div className="ca-faq-img-wrap">
            <Image
              src="/fashion/faq/faq2.webp"
              alt="Product Compatibility"
              width={800}
              height={680}
              className="ca-faq-img"
              style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 2 — Orders & Delivery (gray bg)
         ══════════════════════════════════ */}
      <div style={{ backgroundColor: 'rgb(247, 248, 252)' }}>
        <div className="container-main ca-faq-section-pad">
          <h2 className="ca-faq-h2">Orders &amp; Delivery</h2>
          <div className="ca-faq-grid">
            {/* Left — Accordion */}
            <div className="ca-faq-accordion-col">
              <FaqAccordion
                defaultOpen={null}
                items={[
                  {
                    question: 'How fast will my order arrive?',
                    answer: 'Orders placed before 2:00 PM EST on business days typically ship the same day. Standard delivery takes 2–5 business days. Expedited 1–2 day shipping is available at checkout for an additional fee. You will receive a tracking number by email as soon as your order ships.',
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are processed over an encrypted SSL connection. Your card details are never stored on our servers — payments are handled securely by our PCI-compliant payment processor.',
                  },
                  {
                    question: 'Can I change or cancel my order after placing it?',
                    answer: 'Orders can be modified or cancelled within 2 hours of placement. After that window, our fulfillment center may have already picked and packed your order. Contact us as quickly as possible at support@autopro.com and we will do our best to accommodate your request before the order ships.',
                  },
                  {
                    question: 'Do you ship internationally?',
                    answer: 'We currently ship within the United States and Canada. We are working on expanding our shipping network to additional countries. Sign up for our newsletter to be notified when international shipping becomes available in your region.',
                  },
                ]}
              />
            </div>

            {/* Right — Image */}
            <div className="ca-faq-img-wrap">
              <Image
                src="/fashion/faq/faq1.webp"
                alt="Orders & Delivery"
                width={800}
                height={680}
                className="ca-faq-img"
                style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 3 — Returns & Warranty (full width, no image)
         ══════════════════════════════════ */}
      <div className="container-main ca-faq-section-pad">
        <h2 className="ca-faq-h2">Returns &amp; Warranty</h2>
        <div className="ca-faq-accordion-col" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FaqAccordion
            defaultOpen={null}
            items={[
              {
                question: 'What is your return policy?',
                answer: 'We offer 30-day hassle-free returns on all stocked items in original, unused condition. Installed parts, electrical components that have been powered on, and items marked as final sale are not eligible for return. Contact support@autopro.com with your order number to start a return — we will provide a prepaid return label.',
              },
              {
                question: 'What happens if a part does not fit my vehicle?',
                answer: 'If a part does not fit your vehicle despite our compatibility guarantee, contact us within 30 days of delivery. We will accept the return, cover return shipping, and issue a full refund or send the correct part. We may ask you to confirm your vehicle\'s year, make, model, and sub-model to prevent the same issue on the replacement.',
              },
              {
                question: 'Do your parts come with a warranty?',
                answer: 'Yes. All products include at least a 1-year manufacturer warranty against defects in materials and workmanship. Many premium brands carry 2–3 year warranties. Warranty details are listed on each product page. To make a warranty claim, contact support@autopro.com with your order number and a description of the issue.',
              },
              {
                question: 'What if my order arrives damaged or incorrect?',
                answer: 'We\'re sorry if something went wrong. Please photograph the damaged or incorrect item and email support@autopro.com within 48 hours of delivery. We will arrange a replacement shipment or a full refund — whichever you prefer — and we will cover the cost of any return shipping.',
              },
            ]}
          />
        </div>
      </div>

      {/* 80px gap before footer */}
      <div style={{ height: '80px' }} />

      <style>{`
        /* ─── base classes ─── */
        .ca-faq-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ca-faq-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .ca-faq-section-pad { padding-block: 80px; }
        .ca-faq-h2 { font-size: 36px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .ca-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .ca-faq-img-wrap { position: relative; width: 100%; min-height: 710px; }
        .ca-faq-img { height: 680px; }

        /* ─── 320–991: image layout + fluid scaling ─── */
        @media (max-width: 991px) {
          .ca-faq-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ca-faq-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ca-faq-section-pad { padding-block: clamp(40px, 8vw, 80px); }
          .ca-faq-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 6vw, 50px); }
          .ca-faq-grid { grid-template-columns: 1fr; gap: clamp(20px, 6vw, 60px); }
          .ca-faq-img-wrap { order: -1; min-height: unset; width: 100%; overflow: hidden; }
          .ca-faq-img { height: clamp(260px, 70vw, 600px); width: 100%; display: block; }
          .ca-faq-accordion-col button { font-size: clamp(16px, 4.5vw, 24px) !important; padding: clamp(14px, 3.5vw, 22px) 0 !important; }
        }
      `}</style>
    </>
  );
}
