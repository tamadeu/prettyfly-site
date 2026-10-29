'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'p1',
    eyebrow: 'UP TO 50% OFF SALE',
    title: 'Footwear Unbeatable\nPrices',
    cta: 'Shop Now',
    href: '/shop',
    image: '/footwear/banner/banner-4.webp',
  },
  {
    id: 'p2',
    eyebrow: 'MEGA SALES COLLECTION',
    title: 'Run Faster, Go\nFurther!',
    cta: 'Shop Now',
    href: '/shop',
    image: '/footwear/banner/banner-5.webp',
  },
];

export function FootwearPromoBanners() {
  return (
    <section>
      <div className="container-main">
        <div className="fwpb-grid">
          {banners.map((b) => (
            <Link key={b.id} href={b.href} className="fwpb-card">
              <Image
                src={b.image}
                alt={b.title.replace('\n', ' ')}
                fill
                className="fwpb-img"
                style={{ objectFit: 'cover', objectPosition: 'right center' }}
                sizes="(max-width: 749px) 100vw, 50vw"
              />
              <div className="fwpb-shade" />
              <div className="fwpb-content">
                <span className="fwpb-eyebrow">{b.eyebrow}</span>
                <h3 className="fwpb-title">{b.title}</h3>
                <span className="fwpb-cta">{b.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .fwpb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .fwpb-card {
          position: relative;
          display: block;
          height: 500px;
          border-radius: 6px;
          overflow: hidden;
          background-color: #000;
          text-decoration: none;
        }
        .fwpb-img { transition: transform 600ms ease; }
        .fwpb-card:hover .fwpb-img { transform: scale(1.05); }
        .fwpb-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0) 65%);
          z-index: 1;
        }
        .fwpb-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: clamp(34px, 4.5vw, 56px) clamp(28px, 4vw, 44px);
          max-width: 60%;
        }
        .fwpb-eyebrow {
          font-size: 17px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgb(255, 255, 255);
          margin-bottom: 15px;
        }
        .fwpb-title {
          font-size: clamp(24px, 2.4vw, 30px);
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          white-space: pre-line;
          margin-bottom: clamp(16px, 2vw, 22px);
        }
        .fwpb-cta {
          display: inline-block;
          width: fit-content;
          font-size: 15px;
          font-weight: 500;
          color: rgb(255, 255, 255);
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(255,255,255,0.9);
          transition: opacity 200ms ease;
        }
        .fwpb-card:hover .fwpb-cta { opacity: 0.85; }

        @media (max-width: 749px) {
          .fwpb-grid { grid-template-columns: 1fr; gap: 16px; }
          .fwpb-card { height: clamp(300px, 72vw, 420px); }
          .fwpb-content { max-width: 78%; }
        }
      `}</style>
    </section>
  );
}
