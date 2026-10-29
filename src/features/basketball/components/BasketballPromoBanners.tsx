'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Imagery only from /basketball/banners/. Backgrounds + models are baked into
   the banner artwork; eyebrow/title/CTA are overlaid centre-left in white. */
const cards = [
  { id: 1, label: 'New Arrivals', title: "Men's Collection", href: '/shop', image: '/basketball/banners/banner-1.webp' },
  { id: 2, label: 'Up to 70% Off!', title: 'Summer Style Steal', href: '/shop', image: '/basketball/banners/banner-2.webp' },
];

export function BasketballPromoBanners() {
  return (
    <section>
      <div className="container-main">
        <div className="bbpg-grid">
          {cards.map((card) => (
            <Link key={card.id} href={card.href} className="bbpg-card">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="bbpg-img"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 749px) 100vw, 50vw"
              />
              <div className="bbpg-content">
                <span className="bbpg-label">{card.label}</span>
                <h3 className="bbpg-title">{card.title}</h3>
                <span className="bbpg-cta">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .bbpg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .bbpg-card {
          position: relative;
          display: block;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background-color: #1a1240;
          border-radius: 6px;
        }
        .bbpg-img { transition: transform 700ms ease; }
        .bbpg-card:hover .bbpg-img { transform: scale(1.06); }

        .bbpg-content {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-inline: clamp(28px, 4vw, 56px);
          max-width: 60%;
        }
        .bbpg-label {
          font-size: clamp(13px, 1.1vw, 16px);
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          margin-bottom: 12px;
        }
        .bbpg-title {
          font-size: clamp(22px, 2.4vw, 32px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .bbpg-cta {
          display: inline-block;
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 600;
          color: #fff;
          border-bottom: 1.5px solid #fff;
          padding-bottom: 3px;
          transition: gap 200ms ease, opacity 200ms ease;
        }
        .bbpg-card:hover .bbpg-cta { opacity: 0.85; }

        @media (min-width: 750px) {
          .bbpg-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
      `}</style>
    </section>
  );
}
