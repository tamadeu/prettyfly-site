'use client';

import Image from 'next/image';
import Link from 'next/link';

import { fromIndex, records, text, type CmsContent } from '../cms';

/* Imagery only from /active-wear/banners/. Backgrounds + models are baked into
   the banner artwork; eyebrow/title/CTA are overlaid top-left. */
const defaultCards = [
  { id: 1, label: 'New Arrivals', title: "Men's Collection", href: '/shop', image: '/active-wear/banners/banner-1.webp' },
  { id: 2, label: 'Up to 70% Off!', title: 'Summer Style Steal', href: '/shop', image: '/active-wear/banners/banner-2.webp' },
  { id: 3, label: 'Flash Fashion Sale', title: 'Modern Outfits', href: '/shop', image: '/active-wear/banners/banner-3.webp' },
];

export function ActiveWearPromoGrid({ content }: { content?: CmsContent }) {
  const cmsItems = records(content?.items);
  const cards = cmsItems.length
    ? cmsItems.map((c, i) => ({
        id: i + 1,
        label: text(c.eyebrow, ''),
        title: text(c.title, ''),
        cta: text(c.link_label, 'Shop Now'),
        href: text(c.link_url, '/shop'),
        image: text(c.image, fromIndex(defaultCards, i).image),
      }))
    : defaultCards.map((c) => ({ ...c, cta: 'Shop Now' }));
  return (
    <section>
      <div className="container-main">
        <div className="awpg-grid">
          {cards.map((card) => (
            <Link key={card.id} href={card.href} className="awpg-card">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="awpg-img"
                style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
                sizes="(max-width: 749px) 100vw, 33vw"
              />
              <div className="awpg-content">
                <span className="awpg-label">{card.label}</span>
                <h3 className="awpg-title">{card.title}</h3>
                <span className="awpg-cta">{card.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .awpg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .awpg-card {
          position: relative;
          display: block;
          height: 585px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background-color: #eceae6;
        }
        .awpg-img { transition: transform 700ms ease; }
        .awpg-card:hover .awpg-img { transform: scale(1.08); }

        .awpg-content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: clamp(24px, 3vw, 36px);
        }
        .awpg-label {
          font-size: 16px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 10px;
        }
        .awpg-title {
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .awpg-cta {
          display: inline-block;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          border-bottom: 1.5px solid #1a1a1a;
          padding-bottom: 3px;
          transition: color 200ms ease, border-color 200ms ease;
        }

        @media (min-width: 750px) {
          .awpg-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .awpg-card { height: 585px; }
        }
      `}</style>
    </section>
  );
}
