'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    src: '/megastore/banner/banner1.webp',
    alt: 'Top Computers and Accessories',
    eyebrow: 'UP TO 50% OFF',
    title: 'Top Computers And\nAccessories',
    href: '/megastore/shop?category=Computers',
  },
  {
    src: '/megastore/banner/banner2.webp',
    alt: 'Upgrade Your Next Level Tech Today',
    eyebrow: 'TOP DEALS PRODUCT',
    title: 'Upgrade Your Next\nLevel Tech Today!',
    href: '/megastore/shop?sort=top-deals',
  },
];

export function MegastoreTwinBanners() {
  return (
    <section className="ms-tb">
      <div className="container-main">
        <div className="ms-tb-grid">
          {banners.map((b) => (
            <Link key={b.src} href={b.href} className="ms-tb-card" aria-label={b.alt}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                }}
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'right center' }}
                />
              </div>

              <div className="ms-tb-content">
                <span className="ms-tb-eyebrow">{b.eyebrow}</span>
                <h3 className="ms-tb-title">{b.title}</h3>
                <span className="ms-tb-cta">SHOP NOW</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .ms-tb-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(16px, 2vw, 30px);
        }
        .ms-tb-card {
          position: relative;
          display: block;
          height: 420px;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          color: #fff;
          background-color: #0a0a0a;
          transition: transform 350ms ease, box-shadow 350ms ease;
        }
        .ms-tb-card img {
          transition: transform 800ms ease;
        }
        .ms-tb-card:hover img {
          transform: scale(1.05);
        }
        .ms-tb-card:hover {
          box-shadow: 0 14px 30px rgba(0,0,0,0.25);
        }

        .ms-tb-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          padding: clamp(28px, 3.4vw, 56px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          pointer-events: none;
        }
        .ms-tb-eyebrow {
          font-size: clamp(14px, 1.05vw, 16px);
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #fff;
          margin-bottom: clamp(14px, 1.6vw, 22px);
        }
        .ms-tb-title {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 700;
          line-height: 1.18;
          margin: 0 0 clamp(20px, 2.4vw, 32px);
          letter-spacing: -0.4px;
          white-space: pre-line;
          max-width: 60%;
          color: #fff;
        }
        .ms-tb-cta {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.2px;
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 6px;
          transition: color 200ms ease;
        }
        .ms-tb-card:hover .ms-tb-cta {
          color: #f26522;
        }

        /* < 992px — single column, slightly shorter */
        @media (max-width: 991px) {
          .ms-tb-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .ms-tb-card {
            height: 320px;
          }
        }

        /* < 750px — fluid scale to ~260-300px */
        @media (max-width: 749px) {
          .ms-tb-card {
            height: clamp(240px, 60vw, 300px);
            border-radius: 10px;
          }
          .ms-tb-title {
            max-width: 70%;
            font-size: clamp(22px, 6vw, 30px);
          }
          .ms-tb-eyebrow {
            font-size: clamp(10px, 2.8vw, 12px);
            letter-spacing: 1px;
          }
          .ms-tb-cta {
            font-size: clamp(11px, 3vw, 14px);
          }
          .ms-tb-content {
            padding: clamp(16px, 4.4vw, 28px);
          }
        }
      `}</style>
    </section>
  );
}
