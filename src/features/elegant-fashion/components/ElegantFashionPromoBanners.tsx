'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'women',
    image: '/elegant-fashion/banner/banner1.webp',
    badge: 'UP TO 25% OFF',
    heading: 'Elegance Embodied',
    cta: 'Shop Now',
    href: '/shop?category=Women',
  },
  {
    id: 'men',
    image: '/elegant-fashion/banner/banner2.webp',
    badge: 'UP TO 25% OFF',
    heading: 'Elegance Embodied',
    cta: 'Shop Now',
    href: '/shop?category=Men',
  },
  {
    id: 'lifestyle',
    image: '/elegant-fashion/banner/banner3.webp',
    badge: 'UP TO 25% OFF',
    heading: 'Elegance Embodied',
    cta: 'Shop Now',
    href: '/shop',
  },
];

export function ElegantFashionPromoBanners() {
  return (
    <section className="efpb-section">
      <div className="container-main">
        <div className="efpb-grid">
          {banners.map((b) => (
            <Link key={b.id} href={b.href} className="efpb-card">
              <div className="efpb-img-wrap">
                <Image
                  src={b.image}
                  alt={b.heading}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 550ms ease' }}
                  sizes="(min-width: 992px) 33vw, (min-width: 750px) 50vw, 100vw"
                />
              </div>
              <div className="efpb-overlay" />
              <div className="efpb-content">
                <span className="efpb-badge">{b.badge}</span>
                <h3 className="efpb-heading">{b.heading}</h3>
                <span className="efpb-cta">{b.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .efpb-section { padding: 0; }

        .efpb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .efpb-card {
          position: relative;
          display: block;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          height: clamp(380px, 72vw, 620px);
        }
        .efpb-card:hover .efpb-img-wrap img {
          transform: scale(1.05);
        }

        .efpb-img-wrap {
          position: absolute;
          inset: 0;
        }

        .efpb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.68) 0%,
            rgba(0, 0, 0, 0.22) 50%,
            transparent 100%
          );
          z-index: 1;
          transition: background 400ms ease;
        }
        .efpb-card:hover .efpb-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.78) 0%,
            rgba(0, 0, 0, 0.32) 55%,
            rgba(0, 0, 0, 0.06) 100%
          );
        }

        .efpb-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: clamp(24px, 5vw, 36px) clamp(20px, 4vw, 32px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }

        .efpb-badge {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.88);
          text-transform: uppercase;
        }

        .efpb-heading {
          font-size: clamp(22px, 3.2vw, 28px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin: 0;
        }

        .efpb-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: #111;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 40px;
          border-radius: 9999px;
          margin-top: 8px;
          min-width: 150px;
          transition: background 250ms ease, color 250ms ease, transform 260ms ease;
        }
        .efpb-card:hover .efpb-cta {
          background: rgba(255, 255, 255, 0.92);
          transform: translateY(-3px);
        }

        @media (min-width: 750px) {
          .efpb-grid { grid-template-columns: repeat(3, 1fr); }
          .efpb-card { height: 620px; }
        }
      `}</style>
    </section>
  );
}
