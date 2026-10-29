'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Imagery only from /fashion-04/banners/. Pastel backgrounds + models are
   baked into the banner artwork; label/title/CTA are overlaid top-left. */
const cards = [
  { id: 1, label: 'New Arrivals', title: 'Men’s Collection', href: '/shop', image: '/fashion-04/banners/banner-1.webp' },
  { id: 2, label: 'Up to 70% Off!', title: 'Summer Style Steal', href: '/shop', image: '/fashion-04/banners/banner-2.webp' },
  { id: 3, label: 'Flash Fashion Sale', title: 'Modern Outfits', href: '/shop', image: '/fashion-04/banners/banner-3.webp' },
];

export function Fashion04PromoGrid() {
  return (
    <section>
      <div className="container-main">
        <div className="f4pg-grid">
          {cards.map((card) => (
            <Link key={card.id} href={card.href} className="f4pg-card">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="f4pg-img"
                style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
                sizes="(max-width: 749px) 100vw, 33vw"
              />
              <div className="f4pg-content">
                <span className="f4pg-label">{card.label}</span>
                <h3 className="f4pg-title">{card.title}</h3>
                <span className="f4pg-cta">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .f4pg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .f4pg-card {
          position: relative;
          display: block;
          height: 580px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background-color: #f1ece5;
        }
        .f4pg-img { transition: transform 600ms ease; }
        .f4pg-card:hover .f4pg-img { transform: scale(1.05); }

        .f4pg-content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: clamp(24px, 3vw, 36px);
        }
        .f4pg-label {
          font-size: 14px;
          font-weight: 500;
          color: #333;
          margin-bottom: 10px;
        }
        .f4pg-title {
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .f4pg-cta {
          display: inline-block;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          border-bottom: 1.5px solid #1a1a1a;
          padding-bottom: 3px;
          transition: color 200ms ease, border-color 200ms ease;
        }
        .f4pg-card:hover .f4pg-cta { color: #F15B41; border-color: #F15B41; }

        @media (min-width: 750px) {
          .f4pg-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
      `}</style>
    </section>
  );
}
