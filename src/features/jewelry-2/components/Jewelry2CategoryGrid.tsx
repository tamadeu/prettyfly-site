'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const CATEGORIES = [
  { id: 'gold-plated', label: 'Gold plated', href: '/shop?category=Rose Gold', image: '/jewelry-2/banner/banner-1.webp', wide: true },
  { id: 'rings', label: 'Rings', href: '/shop', image: '/jewelry-2/banner/banner-2.webp', wide: false },
  { id: 'earrings', label: 'Earrings', href: '/shop', image: '/jewelry-2/banner/banner-4.webp', wide: false },
  { id: 'diamonds', label: 'Diamonds', href: '/shop?category=Dimond', image: '/jewelry-2/banner/banner-5.webp', wide: false },
  { id: 'pearls', label: 'Pearls', href: '/shop?category=Pearl', image: '/jewelry-2/banner/banner-3.webp', wide: false },
  { id: 'neckless', label: 'Neckless', href: '/shop', image: '/jewelry-2/banner/banner-6.webp', wide: true },
];

export function Jewelry2CategoryGrid() {
  return (
    <section className="jzcat-section">
      <div className="container-main">
        <div className="jzcat-grid">
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={c.href} className={`jzcat-tile ${c.wide ? 'jzcat-wide' : ''}`}>
              <Image src={c.image} alt={c.label} fill style={{ objectFit: 'cover' }} sizes="(max-width: 749px) 100vw, 33vw" />
              <div className="jzcat-info">
                <p className="jzcat-label">{c.label}</p>
                <span className="jzcat-cta">SHOP NOW <IconArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .jzcat-section { height: 720px; padding: 0; overflow: hidden; }
        .jzcat-section .container-main { height: 100%; }
        .jzcat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 14px;
          height: 100%;
        }
        .jzcat-tile {
          position: relative;
          display: block;
          height: 100%;
          border-radius: 0;
          overflow: hidden;
          background: #f2f2f2;
        }
        .jzcat-tile img { transition: transform 500ms ease; }
        .jzcat-tile:hover img { transform: scale(1.05); }
        .jzcat-info {
          position: absolute;
          left: 24px;
          bottom: 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .jzcat-label {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 700;
          color: #171717;
          margin: 0;
          line-height: 1.2;
        }
        .jzcat-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #171717;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (min-width: 750px) {
          .jzcat-grid { grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 1fr); gap: 20px; }
          .jzcat-wide { grid-column: span 2; }
          .jzcat-info { left: 32px; bottom: 28px; }
          .jzcat-label { font-size: 29px; }
        }
      `}</style>
    </section>
  );
}
