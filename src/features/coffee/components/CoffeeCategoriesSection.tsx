'use client';

import Image from 'next/image';
import Link from 'next/link';

/* No 1:1 skill precedent for this 3-card grid (see blueprint/coffee-homepage-plan.md
   §1). Rebuilt to a 100% pixel-perfect match of the reference screenshot per
   explicit instruction — including the literal "Chicken Pizza" label on card 1
   (a pizza-storefront leftover in the source design, kept verbatim here since
   this pass's brief calls for exact-match fidelity over content correction).
   arrowColor/bgFallback are picked per-card from the reference: cards 1 & 3 use
   the terracotta accent, card 2 uses solid black; bgFallback approximates each
   card's baked-in image background for a flicker-free loading state. */

const categories = [
  { id: 'cat-1', label: 'Chicken Pizza', itemCount: 11, image: '/coffee/product-categories-section/product-catrgories-1.webp', href: '/shop?category=Coffee Cups', bgFallback: '#e7e0da', arrowColor: '#c8874a', arrowHoverColor: '#a96f38' },
  { id: 'cat-2', label: 'Cold Coffee', itemCount: 11, image: '/coffee/product-categories-section/product-catrgories-2.webp', href: '/shop?category=Ground Coffee', bgFallback: '#f6ecc0', arrowColor: '#1a1a1a', arrowHoverColor: '#000' },
  { id: 'cat-3', label: 'Iced Coffee', itemCount: 11, image: '/coffee/product-categories-section/product-catrgories-3.webp', href: '/shop?category=Coffee Beans', bgFallback: '#f5ddce', arrowColor: '#c8874a', arrowHoverColor: '#a96f38' },
];

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

export function CoffeeCategoriesSection() {
  return (
    <section className="cfcat-section">
      <div className="container-main">
        <div className="cfcat-grid">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="cfcat-card"
              style={{ backgroundColor: cat.bgFallback, '--cfcat-arrow-bg': cat.arrowColor, '--cfcat-arrow-hover-bg': cat.arrowHoverColor } as React.CSSProperties}
            >
              <div className="cfcat-image-wrap">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 992px) 33vw, 100vw"
                />
              </div>
              <div className="cfcat-content">
                <div>
                  <h3 className="cfcat-label">{cat.label}</h3>
                  <span className="cfcat-count">{cat.itemCount} Items</span>
                </div>
                <span className="cfcat-arrow">
                  <IconArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .cfcat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .cfcat-card {
          position: relative;
          display: block;
          border-radius: 16px;
          overflow: hidden;
          height: clamp(280px, 62vw, 460px);
          text-decoration: none;
        }
        .cfcat-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
          transition: transform 600ms ease;
        }
        .cfcat-card:hover .cfcat-image-wrap {
          transform: scale(1.04);
        }
        .cfcat-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 28px;
        }
        .cfcat-label {
          font-size: 24px;
          font-weight: 700;
          color: rgb(58, 58, 59);
          line-height: 1.25;
          margin-bottom: 6px;
        }
        .cfcat-count {
          font-size: 14px;
          color: #6b5f52;
        }
        .cfcat-arrow {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--cfcat-arrow-bg);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 220ms ease, transform 220ms ease;
        }
        .cfcat-card:hover .cfcat-arrow {
          background-color: var(--cfcat-arrow-hover-bg);
          transform: rotate(-45deg);
        }

        @media (min-width: 750px) {
          .cfcat-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; }
          .cfcat-card { height: clamp(360px, 34vw, 560px); }
        }
        @media (min-width: 992px) {
          .cfcat-card { height: 625px; }
        }
      `}</style>
    </section>
  );
}
