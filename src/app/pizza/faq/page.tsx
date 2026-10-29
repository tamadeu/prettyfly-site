'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FaqAccordion({ items, defaultOpen = null }: { items: { question: string; answer: string }[]; defaultOpen?: number | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => { setOpenIndex(openIndex === i ? null : i); };

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid #2a2a2a' }}>
            <button
              onClick={() => toggle(i)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '22px 0', fontSize: '24px', fontWeight: 600,
                color: '#fff', background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', gap: '16px', fontFamily: 'inherit',
              }}
            >
              <span style={{ flex: 1 }}>{item.question}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '24px', height: '24px', position: 'relative', color: '#e84d1c' }}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden fill="none" viewBox="0 0 10 10" width="20" height="20"
                  style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: isOpen ? 0 : 1, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden fill="none" viewBox="0 0 10 2" width="20" height="20"
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
              <div style={{ paddingBottom: '22px', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PizzaFAQPage() {
  return (
    <div style={{ background: '#000000' }}>
      <div className="ps-faq-page-header">
        <div className="container-main">
          <h1 className="ps-faq-h1">FAQ</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#444' }}>/</span>
            <span style={{ color: '#fff' }}>FAQ</span>
          </div>
        </div>
      </div>

      {/* Section 1 — Menu & Orders */}
      <div className="container-main ps-faq-section-pad">
        <h2 className="ps-faq-h2">Menu &amp; Orders</h2>
        <div className="ps-faq-grid">
          <div className="ps-faq-accordion-col">
            <FaqAccordion
              items={[
                {
                  question: 'Can I customise my pizza toppings?',
                  answer: 'Absolutely! Every pizza can be customised. When adding a pizza to your cart, use the Special Instructions field to add, remove, or substitute toppings. Our kitchen team reads every note. For major modifications, we recommend calling ahead to confirm availability.',
                },
                {
                  question: 'Do you offer gluten-free or vegan options?',
                  answer: 'Yes — we offer gluten-free crust as an add-on for all pizzas and our Veggie Pizza range is 100% plant-based. Our kitchen handles gluten-containing ingredients, so while we take precautions, we cannot guarantee a fully gluten-free environment for those with severe intolerances.',
                },
                {
                  question: 'What sizes do your pizzas come in?',
                  answer: 'All pizzas are available in three sizes: Small (10"), Regular (12"), and Large (14"). Our Regular is perfect for one hungry person or two light eaters. Large is ideal for sharing. Size selection is available on each product page.',
                },
                {
                  question: 'How do I apply a discount code?',
                  answer: 'Discount codes can be entered at checkout in the "Promo Code" field. Enter your code and click Apply before completing your order. Codes are case-insensitive and can only be used once per account unless stated otherwise.',
                },
              ]}
            />
          </div>
          <div className="ps-faq-img-wrap">
            <Image
              src="/pizza/products/products2.webp"
              alt="Menu & Orders"
              width={800}
              height={680}
              className="ps-faq-img"
              style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', borderRadius: '12px', border: '1px solid #2a2a2a' }}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Section 2 — Delivery & Payment */}
      <div style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container-main ps-faq-section-pad">
          <h2 className="ps-faq-h2">Delivery &amp; Payment</h2>
          <div className="ps-faq-grid">
            <div className="ps-faq-accordion-col">
              <FaqAccordion
                items={[
                  {
                    question: 'How fast will my pizza arrive?',
                    answer: 'We aim for delivery within 30–45 minutes of order placement for addresses within our delivery radius. During peak hours (Friday/Saturday evenings), it can take up to 60 minutes. You\'ll receive a real-time tracking link via SMS once your order leaves our kitchen.',
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are processed over an encrypted SSL connection. Your payment details are never stored on our servers.',
                  },
                  {
                    question: 'Can I change my delivery address after ordering?',
                    answer: 'Address changes can be made within 5 minutes of placing your order by contacting us immediately at support@ambazpizza.com or calling (800) 555-PIZZA. After that window, your order may already be in preparation and the original address cannot be changed.',
                  },
                  {
                    question: 'Is there a minimum order for delivery?',
                    answer: 'Our minimum order value for delivery is $15. There is no minimum for collection orders. A delivery fee of $2.99 applies to orders under $30. Orders over $30 qualify for free delivery within our standard delivery radius.',
                  },
                ]}
              />
            </div>
            <div className="ps-faq-img-wrap">
              <Image
                src="/pizza/products/products9.webp"
                alt="Delivery & Payment"
                width={800}
                height={680}
                className="ps-faq-img"
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', borderRadius: '12px', border: '1px solid #333' }}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Quality & Feedback (full width, no image) */}
      <div className="container-main ps-faq-section-pad">
        <h2 className="ps-faq-h2">Quality &amp; Feedback</h2>
        <div className="ps-faq-accordion-col" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FaqAccordion
            items={[
              {
                question: 'What if my pizza arrives cold or incorrect?',
                answer: 'We\'re sorry if your order didn\'t arrive as expected. Contact us within 1 hour of delivery at support@ambazpizza.com with your order number and a photo if possible. We will arrange a free replacement or issue a full refund — whichever you prefer.',
              },
              {
                question: 'What ingredients do you use?',
                answer: 'We use locally-sourced, fresh ingredients with no artificial preservatives. Our tomato sauce is slow-cooked from vine-ripened tomatoes, our cheese is hand-pulled mozzarella, and all meats are sourced from trusted local suppliers. Full ingredient lists are available on each product page.',
              },
              {
                question: 'Do you cater for large events?',
                answer: 'Yes! We offer catering packages for groups of 10 or more. Contact us at orders@ambazpizza.com at least 48 hours in advance to discuss menu options, quantities, and delivery logistics. We can accommodate corporate events, birthday parties, and community gatherings.',
              },
              {
                question: 'How do I leave a review?',
                answer: 'We love hearing from our customers! After your order is delivered, you\'ll receive an email with a review link. You can also leave a review directly on any product page. Honest feedback helps us improve — we read every single review.',
              },
            ]}
          />
        </div>
      </div>

      <div style={{ height: '80px' }} />

      <style>{`
        .ps-faq-page-header { background-color: #1a1a1a; padding: 40px 0 50px; text-align: center; }
        .ps-faq-h1 { font-size: 40px; font-weight: 600; color: #fff; margin-bottom: 10px; }
        .ps-faq-section-pad { padding-block: 80px; }
        .ps-faq-h2 { font-size: 36px; font-weight: 700; color: #fff; text-align: center; margin-bottom: 50px; }
        .ps-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .ps-faq-img-wrap { position: relative; width: 100%; }
        .ps-faq-img { height: 480px; border-radius: 12px; }

        @media (max-width: 991px) {
          .ps-faq-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ps-faq-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ps-faq-section-pad { padding-block: clamp(40px, 8vw, 80px); }
          .ps-faq-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 6vw, 50px); }
          .ps-faq-grid { grid-template-columns: 1fr; gap: clamp(20px, 6vw, 60px); }
          .ps-faq-img-wrap { order: -1; width: 100%; overflow: hidden; }
          .ps-faq-img { height: clamp(220px, 55vw, 480px); width: 100%; display: block; }
          .ps-faq-accordion-col button { font-size: clamp(16px, 4.5vw, 24px) !important; padding: clamp(14px, 3.5vw, 22px) 0 !important; }
        }
      `}</style>
    </div>
  );
}
