'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Three promo panels matching the screenshot: heading + subtitle +
   underlined "SHOP NOW" link anchored top-left, product illustration
   sitting in the lower portion of the card (object-fit contain, not
   cropped/covered). Cards have no background fill — transparent, so the
   product images sit directly on the page background. */

const promos = [
  {
    id: 'promo-1',
    title: 'Discover Fun with Toys',
    subtitle: "Baby's Favorite Playtime Buddies",
    image: '/toys/product-categories/product-categories-1.webp',
    href: '/shop',
  },
  {
    id: 'promo-2',
    title: 'Colorful Toys for Babies',
    subtitle: "Baby's Favorite Playtime Buddies",
    image: '/toys/product-categories/product-categories-2.webp',
    href: '/shop',
  },
  {
    id: 'promo-3',
    title: 'Toys for Every Baby',
    subtitle: "Baby's Favorite Playtime Buddies",
    image: '/toys/product-categories/product-categories-3.webp',
    href: '/shop',
  },
];

export function ToysPromoGrid() {
  return (
    <section className="typg-section">
      <div className="container-main">
        <div className="typg-grid">
          {promos.map((promo) => (
            <div key={promo.id} className="typg-card">
              <div className="typg-content">
                <h3 className="typg-title">{promo.title}</h3>
                <p className="typg-subtitle">{promo.subtitle}</p>
                <Link href={promo.href} className="typg-link">SHOP NOW</Link>
              </div>
              <div className="typg-img-wrap">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="typg-img"
                  style={{ objectFit: 'contain', objectPosition: 'bottom center', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .typg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 750px) {
          .typg-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .typg-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 580px;
          overflow: hidden;
          border-radius: 5px;
          padding: clamp(24px, 3vw, 32px);
          background-color: transparent;
        }
        .typg-card:hover .typg-img { transform: scale(1.05); }

        .typg-content {
          position: relative;
          z-index: 2;
        }
        .typg-title {
          font-size: clamp(20px, 2vw, 24px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.25;
          margin-bottom: 6px;
        }
        .typg-subtitle {
          font-size: 14px;
          color: rgba(20, 20, 20, 0.7);
          margin-bottom: 12px;
        }
        .typg-link {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: #1a1a1a;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 200ms ease;
        }
        .typg-link:hover { color: #000; }

        .typg-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
