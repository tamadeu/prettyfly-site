'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

function FaqAccordion({ items, defaultOpen = null }: { items: { question: string; answer: string }[]; defaultOpen?: number | null }) {
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

export function ElegantFashionShoppingInfo() {
  return (
    <div className="container-main efsi-section-pad">
      <h2 className="efsi-h2">Style &amp; Fit</h2>
      <div className="efsi-grid">
        <div className="efsi-accordion-col">
          <FaqAccordion
            defaultOpen={null}
            items={[
              {
                question: 'How do I find the right size?',
                answer: 'Each product page includes a detailed size guide with measurements in both centimetres and inches. We recommend measuring your bust, waist, and hips and comparing with our size chart. If you are between sizes, we generally suggest sizing up for a more relaxed fit or sizing down for a tailored look. Our team is also happy to give you personalised sizing advice via live chat.',
              },
              {
                question: 'Are your clothes true to size?',
                answer: 'Our pieces are designed to a contemporary European fit — slightly more structured and fitted than standard sizing. If you prefer extra room or have a fuller bust, we recommend going one size up. Customer reviews on each product page often include notes on fit, which can be a helpful guide.',
              },
              {
                question: 'What fabrics do you use?',
                answer: 'We source premium natural and blended fabrics — silk charmeuse, viscose-satin, Italian wool blends, and organic cotton — chosen for drape, durability, and comfort. Full fabric composition and care instructions are listed on every product page and on the garment\'s inner label.',
              },
              {
                question: 'Can I style pieces from different collections together?',
                answer: 'Absolutely. Our collections are designed with a cohesive colour palette and silhouette language so pieces mix and match naturally. The "Pairs Well With" section on each product page highlights our recommended combinations, and our look-book showcases full outfit ideas across all categories.',
              },
            ]}
          />
        </div>

        <div className="efsi-img-wrap">
          <Image
            src="/fashion/faq/faq2.webp"
            alt="Style & Fit"
            width={800}
            height={680}
            className="efsi-img"
            style={{ objectFit: 'contain', objectPosition: 'center', width: '100%' }}
            sizes="(max-width: 991px) 100vw, 50vw"
          />
        </div>
      </div>

      <style>{`
        .efsi-section-pad { }
        .efsi-h2 { font-size: 36px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .efsi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .efsi-img-wrap { position: relative; width: 100%; min-height: 710px; }
        .efsi-img { height: 680px; }

        @media (max-width: 991px) {
          .efsi-section-pad { }
          .efsi-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 6vw, 50px); }
          .efsi-grid { grid-template-columns: 1fr; gap: clamp(20px, 6vw, 60px); }
          .efsi-img-wrap { order: -1; min-height: unset; width: 100%; overflow: hidden; }
          .efsi-img { height: clamp(260px, 70vw, 600px); width: 100%; display: block; }
          .efsi-accordion-col button { font-size: clamp(16px, 4.5vw, 24px) !important; padding: clamp(14px, 3.5vw, 22px) 0 !important; }
        }
      `}</style>
    </div>
  );
}
