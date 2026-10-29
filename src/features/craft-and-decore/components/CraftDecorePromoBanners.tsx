'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Banner {
  id: string;
  eyebrow?: string;
  title: string;
  href: string;
  image: string;
}

/* Backgrounds/colours visible in the reference are baked into the banner image
   itself — no container background-color, overlay or extra wrapper colour is
   applied. The image is the full fill. */
const banners: Banner[] = [
  {
    id: 'banner-1',
    eyebrow: 'UP TO 30% OFF',
    title: 'Elevate Pottery Pots\nfor Everyone',
    href: '/shop',
    image: '/craft-and-decore/banners/banner-1.webp',
  },
  {
    id: 'banner-2',
    eyebrow: 'UP TO 70% OFF',
    title: 'Elegant Pottery for\nEvery Home',
    href: '/shop',
    image: '/craft-and-decore/banners/banner-2.webp',
  },
];

export function CraftDecorePromoBanners() {
  return (
    <section className="cdpb-section">
      <div className="container-main">
        <div className="cdpb-grid">
          {banners.map((banner) => (
            <Link key={banner.id} href={banner.href} className="cdpb-card">
              <div className="cdpb-image-wrap">
                <Image
                  src={banner.image}
                  alt={banner.title.replace('\n', ' ')}
                  fill
                  className="cdpb-image"
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                  quality={95}
                />
              </div>
              <div className="cdpb-content">
                {banner.eyebrow && <span className="cdpb-eyebrow">{banner.eyebrow}</span>}
                <h3 className="cdpb-title">{banner.title}</h3>
                <span className="cdpb-cta">SHOP NOW</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .cdpb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .cdpb-card {
          position: relative;
          display: block;
          text-decoration: none;
          overflow: hidden;
          height: 455px;
        }

        .cdpb-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .cdpb-image {
          transition: transform 700ms ease;
        }
        .cdpb-card:hover .cdpb-image {
          transform: scale(1.04);
        }

        .cdpb-content {
          position: absolute;
          left: 28px;
          top: 28px;
          max-width: 70%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          color: #fff;
        }

        .cdpb-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          margin-bottom: 10px;
          line-height: 1;
          color: #fff;
          display: block;
        }

        .cdpb-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 18px;
          white-space: pre-line;
          letter-spacing: -0.1px;
          color: #fff;
        }

        .cdpb-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.4px;
          padding: 12px 26px;
          border: 1.5px solid #fff;
          background-color: transparent;
          color: #fff;
          width: fit-content;
          transition: background-color 260ms ease, color 260ms ease;
        }
        .cdpb-card:hover .cdpb-cta {
          background-color: #fff;
          color: #171712;
        }

        @media (min-width: 750px) {
          .cdpb-content { left: 40px; top: 40px; }
          .cdpb-title { font-size: 26px; margin-bottom: 22px; }
          .cdpb-cta { padding: 13px 28px; font-size: 14px; }
        }

        @media (min-width: 992px) {
          .cdpb-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .cdpb-content { left: 48px; top: 48px; }
          .cdpb-title { font-size: 30px; }
        }
      `}</style>
    </section>
  );
}
