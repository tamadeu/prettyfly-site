'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Two promo banners. The banner image already contains the colored background
   and model, so it fills the whole card (inset: 0, object-fit: cover) — no
   wrapper background color and no overlay. Copy sits in the top-left corner. */

const banners = [
  {
    id: 'perfect-pack',
    title: 'Find Your Perfect Pack',
    description: 'Cutting-edge features in every bag.',
    href: '/shop',
    image: '/backpack/banner/banner-1.webp',
  },
  {
    id: 'made-to-move',
    title: 'Backpacks Made to Move',
    description: 'Versatile backpacks for every setting.',
    href: '/shop',
    image: '/backpack/banner/banner-2.webp',
  },
];

export function BackpackPromoBanners() {
  return (
    <section>
      <div className="container-main">
        <div className="bp-promo-grid">
          {banners.map((b) => (
            <Link key={b.id} href={b.href} className="bp-promo-card">
              {/* Banner image — fills the entire card */}
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="bp-promo-img"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 749px) 100vw, 50vw"
              />

              {/* Copy — top-left corner, no background */}
              <div className="bp-promo-content">
                <h3 className="bp-promo-title">{b.title}</h3>
                <p className="bp-promo-desc">{b.description}</p>
                <span className="bp-promo-link">SHOP NOW</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .bp-promo-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 750px) {
          .bp-promo-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
        }

        .bp-promo-card {
          position: relative;
          display: block;
          height: 350px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
        }
        .bp-promo-img {
          transition: transform 600ms ease;
        }
        .bp-promo-card:hover .bp-promo-img {
          transform: scale(1.04);
        }

        /* Top-left content block */
        .bp-promo-content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          max-width: 60%;
          padding: clamp(28px, 5%, 48px) clamp(24px, 4%, 44px);
        }
        .bp-promo-title {
          font-size: clamp(24px, 2.3vw, 30px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .bp-promo-desc {
          font-size: 15px;
          color: #444;
          line-height: 1.5;
          margin-bottom: 18px;
        }
        .bp-promo-link {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #1a1a1a;
          text-decoration: underline;
          text-underline-offset: 5px;
          transition: opacity 250ms ease;
        }
        .bp-promo-card:hover .bp-promo-link {
          opacity: 0.65;
        }
      `}</style>
    </section>
  );
}
