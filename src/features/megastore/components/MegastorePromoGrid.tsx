'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'top-computers',
    eyebrow: 'UP TO 50% OFF',
    title: 'Top Computers And\nAccessories',
    cta: 'SHOP NOW',
    href: '/megastore/shop?category=Laptop',
    image: '/megastore/banner/banner1.webp',
  },
  {
    id: 'top-deals',
    eyebrow: 'TOP DEALS PRODUCT',
    title: 'Upgrade Your Next\nLevel Tech Today!',
    cta: 'SHOP NOW',
    href: '/megastore/shop',
    image: '/megastore/banner/banner2.webp',
  },
];

export function MegastorePromoGrid() {
  return (
    <section className="ms-pg">
      <div className="container-main">
        <div className="ms-pg-grid">
          {banners.map((b) => (
            <Link key={b.id} href={b.href} className="ms-pg-card">
              <div className="ms-pg-image">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  sizes="(max-width: 749px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center right' }}
                />
              </div>
              <div className="ms-pg-content">
                <span className="ms-pg-eyebrow">{b.eyebrow}</span>
                <h3 className="ms-pg-title">
                  {b.title.split('\n').map((line, i) => (
                    <span key={i} className="ms-pg-title-line">{line}</span>
                  ))}
                </h3>
                <span className="ms-pg-cta">{b.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ms-pg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(12px, 1.4vw, 20px);
        }
        @media (min-width: 750px) {
          .ms-pg-grid { grid-template-columns: 1fr 1fr; }
        }

        .ms-pg-card {
          position: relative;
          display: block;
          background-color: #0e1424;
          border-radius: 4px;
          overflow: hidden;
          min-height: clamp(220px, 22vw, 320px);
          color: #fff;
          text-decoration: none;
          transition: transform 280ms ease, box-shadow 280ms ease;
        }
        .ms-pg-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.18);
        }

        .ms-pg-image {
          position: absolute;
          inset: 0;
        }
        .ms-pg-image :global(img) {
          opacity: 0.55;
          transition: opacity 400ms ease, transform 600ms ease;
        }
        .ms-pg-card:hover .ms-pg-image :global(img) {
          opacity: 0.7;
          transform: scale(1.04);
        }

        .ms-pg-content {
          position: relative;
          z-index: 2;
          padding: clamp(24px, 2.4vw, 40px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          background: linear-gradient(90deg, rgba(14,20,36,0.85) 0%, rgba(14,20,36,0.2) 70%, rgba(14,20,36,0) 100%);
        }
        .ms-pg-eyebrow {
          font-size: clamp(11px, 0.85vw, 13px);
          font-weight: 600;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.78);
          margin-bottom: clamp(10px, 1.1vw, 14px);
        }
        .ms-pg-title {
          font-size: clamp(20px, 1.7vw, 28px);
          font-weight: 700;
          line-height: 1.18;
          margin: 0 0 clamp(16px, 1.8vw, 24px);
        }
        .ms-pg-title-line { display: block; }
        .ms-pg-cta {
          display: inline-block;
          font-size: clamp(12px, 0.95vw, 14px);
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #fff;
          border-bottom: 1px solid #fff;
          padding-bottom: 2px;
          width: fit-content;
          transition: color 200ms ease, border-color 200ms ease;
        }
        .ms-pg-card:hover .ms-pg-cta {
          color: #f26522;
          border-color: #f26522;
        }
      `}</style>
    </section>
  );
}
