'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Three promo banners matching the screenshot: full-image card with an
   eyebrow, heading and a white SHOP NOW pill anchored top-left. Images are
   the pre-composed glasses banners (product photo baked into the artwork). */

const promos = [
  {
    id: 'promo-1',
    eyebrow: 'NEW ARRIVALS',
    title: 'Discover Glasses',
    image: '/glasses/banners/banner-1.webp',
    href: '/shop?category=Optical Glasses',
    eyebrowColor: '#6b5a3a',
  },
  {
    id: 'promo-2',
    eyebrow: 'UP TO 70% OFF',
    title: 'Discover Sunglasses',
    image: '/glasses/banners/banner-2.webp',
    href: '/shop?category=Sunglasses',
    eyebrowColor: '#8a4b3a',
  },
  {
    id: 'promo-3',
    eyebrow: 'UP TO 50% OFF',
    title: 'Upgrade Your Eyewear',
    image: '/glasses/banners/banner-3.webp',
    href: '/shop?category=Luxury Eyewear',
    eyebrowColor: '#6b5a3a',
  },
];

export function GlassesPromoGrid() {
  return (
    <section className="glpromo-section">
      <div className="glpromo-grid">
        {promos.map((promo) => (
            <Link key={promo.id} href={promo.href} className="glpromo-card">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="glpromo-img"
                style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                sizes="(max-width: 749px) 100vw, 33vw"
              />
              <div className="glpromo-content">
                <span className="glpromo-eyebrow" style={{ color: promo.eyebrowColor }}>
                  {promo.eyebrow}
                </span>
                <h3 className="glpromo-title">{promo.title}</h3>
                <span className="glpromo-btn">SHOP NOW</span>
              </div>
            </Link>
          ))}
        </div>

      <style>{`
        .glpromo-section {
          padding-inline: 5px;
        }
        .glpromo-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 750px) {
          .glpromo-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .glpromo-card {
          position: relative;
          display: block;
          height: 380px;
          border-radius: 0;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
        }
        .glpromo-card:hover .glpromo-img { transform: scale(1.05); }

        .glpromo-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: clamp(24px, 3vw, 36px);
        }
        .glpromo-eyebrow {
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .glpromo-title {
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: clamp(16px, 2vw, 22px);
        }
        .glpromo-btn {
          display: inline-flex;
          align-items: center;
          background-color: #fff;
          color: #222;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.4px;
          padding: 11px 24px;
          border-radius: 40px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: background-color 250ms ease, color 250ms ease;
        }
        .glpromo-card:hover .glpromo-btn {
          background-color: #111;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
