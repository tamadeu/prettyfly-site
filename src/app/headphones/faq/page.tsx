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

export default function HeadphonesFAQPage() {
  return (
    <>
      <div className="hp-faq-page-header">
        <div className="container-main">
          <h1 className="hp-faq-h1">FAQ</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/headphones-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>FAQ</span>
          </div>
        </div>
      </div>

      {/* SECTION 1 — Products & Sound Quality */}
      <div className="container-main hp-faq-section-pad">
        <h2 className="hp-faq-h2">Products &amp; Sound Quality</h2>
        <div className="hp-faq-grid">
          <div className="hp-faq-accordion-col">
            <FaqAccordion
              defaultOpen={null}
              items={[
                {
                  question: 'What is Hi-Res Audio certification?',
                  answer: 'Hi-Res Audio is a standard that certifies a headphone or earphone can reproduce audio frequencies up to at least 40 kHz — well beyond the 20 kHz upper limit of human hearing. This ensures the driver is precise enough to reproduce the full audible spectrum without distortion, delivering a richer, more detailed listening experience.',
                },
                {
                  question: 'What does Active Noise Cancellation (ANC) do?',
                  answer: 'ANC uses built-in microphones to sample ambient sound and generate an equal-and-opposite waveform to cancel it out before it reaches your ears. Our ANC headphones reduce low-frequency noise (fans, engines, AC units) by up to 35 dB, letting you focus on your music, podcasts, or calls without raising the volume.',
                },
                {
                  question: 'How long does the battery last?',
                  answer: 'Battery life varies by model. Our over-ear wireless headphones offer 30–40 hours of playback with ANC off, and 20–25 hours with ANC active. In-ear buds typically provide 6–8 hours per charge with an additional 2–3 charges stored in the case. All models support fast charging — a 10-minute charge gives you approximately 2–3 hours of playback.',
                },
                {
                  question: 'Are your headphones compatible with all devices?',
                  answer: 'Yes. All wireless models connect via Bluetooth 5.0+ and are compatible with smartphones, tablets, laptops, and any Bluetooth-enabled device regardless of brand or operating system. Wired models use a standard 3.5mm jack (and USB-C on select models) for universal compatibility.',
                },
              ]}
            />
          </div>
          <div className="hp-faq-img-wrap">
            <Image
              src="/fashion/faq/faq2.webp"
              alt="Products & Sound Quality"
              width={800}
              height={680}
              className="hp-faq-img"
              style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2 — Orders & Delivery (gray bg) */}
      <div style={{ backgroundColor: 'rgb(247, 248, 252)' }}>
        <div className="container-main hp-faq-section-pad">
          <h2 className="hp-faq-h2">Orders &amp; Delivery</h2>
          <div className="hp-faq-grid">
            <div className="hp-faq-accordion-col">
              <FaqAccordion
                defaultOpen={null}
                items={[
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are processed securely over SSL. Your card details are never stored on our servers — payments are handled by our PCI-compliant payment processor.',
                  },
                  {
                    question: 'How long does delivery take?',
                    answer: 'Standard domestic orders are dispatched within 1–2 business days and typically arrive within 3–5 business days. Express 1–2 day delivery is available at checkout for an additional fee. International shipping times vary by destination — estimated delivery windows are shown at checkout.',
                  },
                  {
                    question: 'Can I change or cancel my order after placing it?',
                    answer: 'Orders can be modified or cancelled within 2 hours of placement. After that, our fulfilment team may have already processed your order. Contact support@ambaz.com as quickly as possible and we will do our best to accommodate your request before shipment.',
                  },
                  {
                    question: 'Do you ship internationally?',
                    answer: 'Yes, we ship to most countries worldwide. International orders may be subject to customs duties and import taxes charged by the destination country — these are the responsibility of the recipient. Estimated delivery times and any additional fees are shown at checkout.',
                  },
                ]}
              />
            </div>
            <div className="hp-faq-img-wrap">
              <Image
                src="/fashion/faq/faq1.webp"
                alt="Orders & Delivery"
                width={800}
                height={680}
                className="hp-faq-img"
                style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 — Returns & Warranty */}
      <div className="container-main hp-faq-section-pad">
        <h2 className="hp-faq-h2">Returns &amp; Warranty</h2>
        <div className="hp-faq-accordion-col" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FaqAccordion
            defaultOpen={null}
            items={[
              {
                question: 'What is your return policy?',
                answer: 'We offer a 30-day hassle-free return policy on all products. Items must be in their original, unused condition with all packaging, accessories, and documentation included. To start a return, email support@ambaz.com with your order number and reason for return.',
              },
              {
                question: 'What warranty do your products carry?',
                answer: 'All headphones and audio devices come with a 2-year manufacturer\'s warranty covering defects in materials and workmanship. The warranty does not cover damage caused by misuse, accidents, or unauthorised modifications. To make a warranty claim, contact support@ambaz.com with proof of purchase and a description of the issue.',
              },
              {
                question: 'What if my order arrives damaged or incorrect?',
                answer: 'We\'re sorry if something went wrong. Please photograph the damaged or incorrect items and email support@ambaz.com within 48 hours of delivery. We will arrange a replacement or full refund and cover any return shipping costs.',
              },
              {
                question: 'How long does a refund take to process?',
                answer: 'Once we receive and inspect your return, refunds are processed within 5–7 business days. Refunds are issued to the original payment method. Processing times may vary slightly depending on your bank or card provider.',
              },
            ]}
          />
        </div>
      </div>

      <div style={{ height: '80px' }} />

      <style>{`
        .hp-faq-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .hp-faq-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .hp-faq-section-pad { padding-block: 80px; }
        .hp-faq-h2 { font-size: 36px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .hp-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hp-faq-img-wrap { position: relative; width: 100%; min-height: 710px; }
        .hp-faq-img { height: 680px; }
        @media (max-width: 991px) {
          .hp-faq-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .hp-faq-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .hp-faq-section-pad { padding-block: clamp(40px, 8vw, 80px); }
          .hp-faq-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 6vw, 50px); }
          .hp-faq-grid { grid-template-columns: 1fr; gap: clamp(20px, 6vw, 60px); }
          .hp-faq-img-wrap { order: -1; min-height: unset; width: 100%; overflow: hidden; }
          .hp-faq-img { height: clamp(260px, 70vw, 600px); width: 100%; display: block; }
          .hp-faq-accordion-col button { font-size: clamp(16px, 4.5vw, 24px) !important; padding: clamp(14px, 3.5vw, 22px) 0 !important; }
        }
      `}</style>
    </>
  );
}
