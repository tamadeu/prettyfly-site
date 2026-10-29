'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 1,
    image: '/boutique-fashion/banners/banners4.webp',
    title: 'New Styles For Women',
    desc: 'Find the new style on our store that is best quality, best service',
    href: '/boutique-fashion/shop?category=Women',
    cta: 'SHOP NOW',
    bg: '#f5ede8',
  },
  {
    id: 2,
    image: '/boutique-fashion/banners/banners5.webp',
    title: "Men's Trending Clothes",
    desc: 'Up to 30% off on all men\'s trending clothes, follow the in your life',
    href: '/boutique-fashion/shop?category=Men',
    cta: 'SHOP NOW',
    bg: '#f0f4f8',
  },
  {
    id: 3,
    image: '/boutique-fashion/banners/banners6.webp',
    title: 'New Styles For Women',
    desc: 'Find the new style on our store that is best quality, best service',
    href: '/boutique-fashion/shop?category=Tops',
    cta: 'SHOP NOW',
    bg: '#f2f2f5',
  },
];

export function BFLookbookBanners() {
  return (
    <section>
      <div className="container-main">
        <div className="bflb-grid">
          {banners.map((b) => (
            <div key={b.id} className="bflb-card">
              <div className="bflb-image-wrap" style={{ background: b.bg }}>
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="bflb-img"
                  style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 500ms ease' }}
                  sizes="33vw"
                />
              </div>
              <div className="bflb-info">
                <h3 className="bflb-title">{b.title}</h3>
                <p className="bflb-desc">{b.desc}</p>
                <Link href={b.href} className="bflb-cta">{b.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bflb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bflb-card {
          display: flex;
          flex-direction: column;
        }
        .bflb-card:hover .bflb-img { transform: scale(1.04); }
        .bflb-image-wrap {
          position: relative;
          height: clamp(220px, 24vw, 360px);
          overflow: hidden;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        .bflb-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }
        .bflb-title {
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700;
          color: #111;
          line-height: 1.3;
        }
        .bflb-desc {
          font-size: 13px;
          color: #777;
          line-height: 1.55;
          max-width: 260px;
        }
        .bflb-cta {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          letter-spacing: 0.5px;
          transition: color 200ms ease;
        }
        .bflb-cta:hover { color: #555; }

        @media (max-width: 749px) {
          .bflb-grid { grid-template-columns: 1fr; gap: 32px; }
          .bflb-image-wrap { height: clamp(200px, 55vw, 340px); }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .bflb-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .bflb-image-wrap { height: clamp(160px, 20vw, 280px); }
        }
      `}</style>
    </section>
  );
}
