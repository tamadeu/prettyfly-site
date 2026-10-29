'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'left',
    image: '/elegant-fashion/banner/banner5.webp',
    badge: 'UP TO 25% OFF',
    heading: 'Timeless Style',
    href: '/shop',
  },
  {
    id: 'right',
    image: '/elegant-fashion/banner/banner4.webp',
    badge: 'UP TO 20% OFF',
    heading: 'New Season Looks',
    href: '/shop?sort=newest',
  },
];

export function ElegantFashionDualBanner() {
  return (
    <section className="efdb-section">
      <div className="container-main">
        <div className="efdb-grid">
          {banners.map((b) => (
            <Link key={b.id} href={b.href} className="efdb-card">
              <div style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src={b.image}
                  alt={b.heading}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 550ms ease' }}
                  sizes="(min-width: 750px) 50vw, 100vw"
                />
              </div>
              <div className="efdb-overlay" />
              <div className="efdb-content">
                <p className="efdb-badge">{b.badge}</p>
                <h3 className="efdb-heading">{b.heading}</h3>
                <span className="efdb-cta">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .efdb-section { padding: 0; }

        .efdb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .efdb-card {
          position: relative;
          display: block;
          aspect-ratio: 4 / 3;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
        }
        .efdb-card:hover img {
          transform: scale(1.04);
        }

        .efdb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.2) 52%,
            transparent 100%
          );
          z-index: 1;
        }

        .efdb-content {
          position: absolute;
          bottom: 32px;
          left: 32px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .efdb-badge {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.88);
          text-transform: uppercase;
          margin: 0;
        }

        .efdb-heading {
          font-size: clamp(20px, 2.8vw, 30px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
          line-height: 1.2;
        }

        .efdb-cta {
          display: inline-flex;
          align-items: center;
          background: #fff;
          color: #111;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 24px;
          border-radius: 9999px;
          text-decoration: none;
          transition: opacity 200ms ease, transform 220ms ease;
        }
        .efdb-card:hover .efdb-cta {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        @media (min-width: 750px) {
          .efdb-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 749px) {
          .efdb-content { bottom: 20px; left: 20px; }
        }
      `}</style>
    </section>
  );
}
