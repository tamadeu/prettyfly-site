'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Three category-link cards under the hero — heading + link list + "Shop Now »"
   + product cut-out image. Matches the screenshot exactly; images come only from
   /public/plumbing-supplies/product-categories/. */

function IconDoubleArrow({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M11.293 12 6.343 7.05 7.757 5.636 14.121 12l-6.364 6.364-1.414-1.414L11.293 12Z" />
      <path d="M17.657 12l-4.95-4.95 1.414-1.414L20.485 12l-6.364 6.364-1.414-1.414L17.657 12Z" />
    </svg>
  );
}

interface CategoryCard {
  title: string;
  links: { label: string; href: string }[];
  image: string;
  href: string;
}

const cards: CategoryCard[] = [
  {
    title: 'Plumbing Supplies',
    links: [
      { label: 'Steering Wheels', href: '/shop?category=Steering Wheels' },
      { label: 'Car Engine Oils', href: '/shop?category=Auto Guard' },
      { label: 'Car Accessories', href: '/shop?category=Auto Parts' },
      { label: 'Auto Parts', href: '/shop?category=Auto Parts' },
    ],
    image: '/plumbing-supplies/product-categories/product-categories-1.webp',
    href: '/shop?category=Plumbing Supplies',
  },
  {
    title: 'Steering Wheels',
    links: [
      { label: 'Luxury Paint', href: '/shop?category=Auto Parts' },
      { label: 'Gaming Electronic', href: '/shop?category=Auto Guard' },
      { label: 'Car Engine Oils', href: '/shop?category=Auto Guard' },
      { label: 'Car Accessories', href: '/shop?category=Auto Parts' },
    ],
    image: '/plumbing-supplies/product-categories/product-categories-2.webp',
    href: '/shop?category=Steering Wheels',
  },
  {
    title: 'Auto Parts',
    links: [
      { label: 'Auto Store', href: '/shop?category=Auto Parts' },
      { label: 'AutoGuard', href: '/shop?category=Auto Guard' },
      { label: 'Brakes & Rotors', href: '/shop?category=Brakes & Rotors' },
      { label: 'Car Accessories', href: '/shop?category=Auto Parts' },
    ],
    image: '/plumbing-supplies/product-categories/product-categories-3.webp',
    href: '/shop?category=Auto Parts',
  },
];

export function PlumbingCategoryLinks() {
  return (
    <section className="plc-section">
      <div className="container-main">
        <div className="plc-grid">
          {cards.map((card) => (
            <div key={card.title} className="plc-card">
              <div className="plc-body">
                <h3 className="plc-title">{card.title}</h3>
                <ul className="plc-links">
                  {card.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="plc-link">{l.label}</Link>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="plc-shopnow">
                  Shop Now
                  <IconDoubleArrow size={14} />
                </Link>
              </div>
              <Link href={card.href} className="plc-img" aria-label={card.title}>
                <Image src={card.image} alt={card.title} fill style={{ objectFit: 'contain', objectPosition: 'center right' }} sizes="(max-width: 749px) 40vw, 15vw" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .plc-section {
          height: auto;
        }
        .plc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2vw, 24px);
        }
        .plc-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border: 1px solid #e6e6e6;
          border-radius: 6px;
          padding: clamp(24px, 3vw, 34px) clamp(20px, 2.5vw, 30px);
          background: #fff;
          transition: box-shadow 250ms ease, border-color 250ms ease;
          min-height: 250px;
        }
        .plc-card:hover {
          border-color: #d4d4d4;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .plc-body {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .plc-title {
          font-size: clamp(20px, 2.2vw, 24px);
          font-weight: 700;
          color: #1c2230;
          margin-bottom: 18px;
        }
        .plc-links {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .plc-link {
          font-size: 15px;
          color: #2a3340;
          text-decoration: none;
          transition: color 180ms ease;
        }
        .plc-link:hover { color: #0a2540; text-decoration: underline; }
        .plc-shopnow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 600;
          color: #1c2230;
          text-decoration: underline;
          text-underline-offset: 4px;
          width: fit-content;
          transition: color 180ms ease, gap 180ms ease;
        }
        .plc-shopnow:hover { color: #0a2540; gap: 10px; }
        .plc-img {
          position: relative;
          flex-shrink: 0;
          width: clamp(110px, 12vw, 160px);
          height: clamp(110px, 12vw, 160px);
          display: block;
          overflow: hidden;
        }

        @media (min-width: 750px) {
          .plc-grid { grid-template-columns: repeat(3, 1fr); }
          .plc-section { height: 252px; }
        }

        /* ≤570px — each card switches to a stacked column layout and
           scales its image + content down smoothly toward 320px. */
        @media (max-width: 570px) {
          .plc-card {
            flex-direction: column;
            align-items: flex-start;
            gap: clamp(14px, 4vw, 20px);
            min-height: 0;
            padding: clamp(18px, 5vw, 26px);
          }
          .plc-body { width: 100%; }
          .plc-title {
            font-size: clamp(17px, 4.6vw, 22px);
            margin-bottom: clamp(10px, 3vw, 16px);
          }
          .plc-links {
            gap: clamp(7px, 2.2vw, 10px);
            margin-bottom: clamp(14px, 3.6vw, 20px);
          }
          .plc-link { font-size: clamp(13px, 3.6vw, 15px); }
          .plc-shopnow { font-size: clamp(13px, 3.6vw, 15px); }
          .plc-img {
            align-self: center;
            width: clamp(100px, 34vw, 150px);
            height: clamp(100px, 34vw, 150px);
          }
        }
      `}</style>
    </section>
  );
}
