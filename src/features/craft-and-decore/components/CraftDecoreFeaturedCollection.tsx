'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Banner {
  id: string;
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  image: string;
}

const banners: Banner[] = [
  {
    id: 'banner-1',
    eyebrow: 'NEW ARRIVALS',
    title: 'Handcrafted Pots for You',
    cta: 'SHOP NOW',
    href: '/shop?sort=newest',
    image: '/craft-and-decore/big-banner/big-banner-1.webp',
  },
  {
    id: 'banner-2',
    eyebrow: 'UP TO 50% OFF SALE',
    title: 'Pottery for Every Style',
    cta: 'SHOP NOW',
    href: '/shop',
    image: '/craft-and-decore/big-banner/big-banner-2.webp',
  },
];

export function CraftDecoreFeaturedCollection() {
  return (
    <section className="cdfc-section">
      <div className="container-main">
        <div className="cdfc-grid">
          {banners.map((banner) => (
            <div key={banner.id} className="cdfc-card">
              <Link href={banner.href} className="cdfc-image-wrap">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="cdfc-image"
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                  quality={95}
                />
              </Link>
              <div className="cdfc-content">
                <span className="cdfc-eyebrow">{banner.eyebrow}</span>
                <h3 className="cdfc-title">{banner.title}</h3>
                <Link href={banner.href} className="cdfc-cta">{banner.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cdfc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .cdfc-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .cdfc-image-wrap {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .cdfc-image { transition: transform 700ms ease; }
        .cdfc-card:hover .cdfc-image { transform: scale(1.04); }

        .cdfc-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cdfc-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #a9673f;
          margin-bottom: 10px;
        }
        .cdfc-title {
          font-size: clamp(18px, 4vw, 24px);
          font-weight: 600;
          color: #171712;
          margin-bottom: 12px;
        }
        .cdfc-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: #171712;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 220ms ease;
        }
        .cdfc-cta:hover { color: #a9673f; }

        @media (min-width: 750px) {
          .cdfc-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
        }
      `}</style>
    </section>
  );
}
