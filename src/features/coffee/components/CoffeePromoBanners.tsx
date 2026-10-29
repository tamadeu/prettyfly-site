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

/* Both cards in the screenshot reuse the same peach-toned coffee-grinder
   photo — the banner images themselves already bake in the tinted
   background (verified against the actual /coffee/banner/*.webp files), per
   skill/promo-banner-cards.md's "no container background-color" rule. Text
   content is anchored top-left (not vertically centered), exact 465px
   height, and colors/sizes sampled from the screenshot. */
const banners: Banner[] = [
  {
    id: 'banner-1',
    eyebrow: 'sale up to 30%',
    title: "Gloria Jean's\nCoffees",
    cta: 'Shop Now',
    href: '/shop',
    image: '/coffee/banner/banner-1.webp',
  },
  {
    id: 'banner-2',
    eyebrow: 'up to 20% OFF',
    title: 'for the whole\nFamily',
    cta: 'Shop Now',
    href: '/shop',
    image: '/coffee/banner/banner-2.webp',
  },
];

export function CoffeePromoBanners() {
  return (
    <section className="cfpb-section">
      <div className="container-main">
        <div className="cfpb-grid">
          {banners.map((banner) => (
            <Link key={banner.id} href={banner.href} className="cfpb-card">
              <div className="cfpb-image-wrap">
                <Image
                  src={banner.image}
                  alt={banner.title.replace('\n', ' ')}
                  fill
                  className="cfpb-image"
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                  quality={95}
                />
              </div>
              <div className="cfpb-content">
                <span className="cfpb-eyebrow">{banner.eyebrow}</span>
                <h3 className="cfpb-title">{banner.title}</h3>
                <span className="cfpb-cta">{banner.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .cfpb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        .cfpb-card {
          position: relative;
          display: block;
          text-decoration: none;
          border-radius: 20px;
          overflow: hidden;
          height: clamp(300px, 62vw, 465px);
          background-color: #e6bfa8;
        }
        .cfpb-image-wrap { position: absolute; inset: 0; z-index: 1; }
        .cfpb-image { transition: transform 700ms ease; }
        .cfpb-card:hover .cfpb-image { transform: scale(1.04); }

        .cfpb-content {
          position: absolute;
          top: 6%;
          left: 6%;
          right: 6%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 50%;
        }
        .cfpb-eyebrow {
          font-size: 14px;
          font-weight: 500;
          color: #7a4a37;
          margin-bottom: 12px;
        }
        .cfpb-title {
          font-size: 24px;
          font-weight: 600;
          color: rgb(58, 58, 59);
          line-height: 1.3;
          margin-bottom: 24px;
          white-space: pre-line;
          letter-spacing: -0.2px;
        }
        .cfpb-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #dba572;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 30px;
          transition: background-color 260ms ease, transform 260ms ease;
        }
        .cfpb-card:hover .cfpb-cta { background-color: #c48a54; transform: translateY(-1px); }

        @media (min-width: 750px) {
          .cfpb-title { font-size: 28px; }
        }
        @media (min-width: 992px) {
          .cfpb-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .cfpb-card { height: 465px; }
          .cfpb-title { font-size: 30px; }
        }
      `}</style>
    </section>
  );
}
