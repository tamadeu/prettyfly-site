'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 1,
    label: 'Up to 70% Off!',
    title: 'Summer Style Steal',
    href: '/boutique-fashion/shop',
    image: '/boutique-fashion/banners/banners4.webp',
    bg: '#e8f0ed',
    labelColor: '#888',
  },
  {
    id: 2,
    label: 'New Arrivals',
    title: 'Awesome Collection',
    href: '/boutique-fashion/shop',
    image: '/boutique-fashion/banners/banners5.webp',
    bg: '#f0e8d5',
    labelColor: '#888',
  },
  {
    id: 3,
    label: 'Flash Fashion Sale',
    title: 'Modern Outfits',
    href: '/boutique-fashion/shop',
    image: '/boutique-fashion/banners/banners6.webp',
    bg: '#e8eaf0',
    labelColor: '#888',
  },
];

export function BFPromoBanners() {
  return (
    <section className="bfpb-section">
      <div className="bfpb-grid">
        {banners.map((b) => (
          <Link key={b.id} href={b.href} className="bfpb-card" style={{ backgroundColor: b.bg }}>
            {/* Background image — fills entire card, model on right */}
            <Image
              src={b.image}
              alt={b.title.replace('\n', ' ')}
              fill
              className="bfpb-img"
              style={{ objectFit: 'cover', objectPosition: 'right center', transition: 'transform 500ms ease' }}
              sizes="33vw"
            />
            {/* Text content — top left, above image */}
            <div className="bfpb-content">
              <p className="bfpb-label">{b.label}</p>
              <h3 className="bfpb-title">{b.title}</h3>
              <span className="bfpb-link">Shop Now</span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .bfpb-section {
          width: 100%;
        }
        .bfpb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
        }
        .bfpb-card {
          position: relative;
          display: block;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          height: 375px;
        }
        .bfpb-card:hover .bfpb-img { transform: scale(1.04); }

        /* Text sits in the top-left, above the image (z-index: 2) */
        .bfpb-content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .bfpb-label {
          font-size: 15px;
          font-weight: 400;
          color: rgba(18, 18, 18, 1);
          margin-bottom: 14px;
          line-height: 1.4;
        }
        .bfpb-title {
          font-size: clamp(20px, 2.2vw, 28px);
          font-weight: 700;
          color: #111;
          line-height: 1.25;
          margin-bottom: 14px;
          white-space: nowrap;
        }
        .bfpb-link {
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          color: #222;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 200ms ease;
        }
        .bfpb-card:hover .bfpb-link { color: #000; }

        @media (max-width: 749px) {
          .bfpb-grid { grid-template-columns: 1fr; }
          .bfpb-card { height: clamp(200px, 60vw, 320px); }
          .bfpb-title { font-size: clamp(20px, 5.5vw, 28px); }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .bfpb-card { height: clamp(260px, 32vw, 375px); }
          .bfpb-title { font-size: clamp(16px, 2.2vw, 24px); }
        }
      `}</style>
    </section>
  );
}
