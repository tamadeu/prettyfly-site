'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'banner-1',
    tagline: 'SALE UP TO 30% OFF',
    title: 'Farm Fresh Finds\nEvery Season',
    cta: 'Shop Now',
    href: '/shop',
    image: '/grocery-shop/banner/banner1.webp',
  },
  {
    id: 'banner-2',
    tagline: 'STARTING AT $199.99',
    title: "Nature's Best in\nEvery Bite",
    cta: 'Shop Now',
    href: '/shop',
    image: '/grocery-shop/banner/banner2.webp',
  },
];

export function GroceryPromoBanners() {
  return (
    <section className="gpb-section">
      <div className="container-main">
        <div className="gpb-grid">
          {banners.map((banner) => (
            <Link key={banner.id} href={banner.href} className="gpb-card">
              <div className="gpb-image-wrap">
                <Image
                  src={banner.image}
                  alt={banner.title.replace('\n', ' ')}
                  fill
                  className="gpb-image"
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                  quality={95}
                />
              </div>
              <div className="gpb-content">
                <span className="gpb-tagline">{banner.tagline}</span>
                <h3 className="gpb-title">{banner.title}</h3>
                <span className="gpb-cta">{banner.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Mobile base ── */
        .gpb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .gpb-card {
          position: relative;
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: 12px;
          overflow: hidden;
          height: 280px;
          background-color: transparent;
        }

        .gpb-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .gpb-image {
          transition: transform 700ms ease;
        }
        .gpb-card:hover .gpb-image {
          transform: scale(1.04);
        }

        .gpb-content {
          position: absolute;
          top: 28px;
          left: 28px;
          right: 28px;
          max-width: 60%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
        }

        .gpb-tagline {
          font-size: 12px;
          font-weight: 600;
          color: #222;
          letter-spacing: 1.6px;
          margin-bottom: 12px;
          text-transform: uppercase;
          /* Flush to the content block's top edge so visual top-spacing
             matches the left offset exactly (no line-height gap). */
          line-height: 1;
          display: block;
        }

        .gpb-title {
          font-size: 22px;
          font-weight: 700;
          color: #222;
          line-height: 1.25;
          margin-bottom: 22px;
          white-space: pre-line;
          letter-spacing: -0.2px;
        }

        /* Button — default white pill, hover switches to announcement-bar green */
        .gpb-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          color: #222;
          background-color: #fff;
          padding: 11px 26px;
          border-radius: 30px;
          width: fit-content;
          letter-spacing: 0.1px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, transform 280ms ease;
        }
        .gpb-cta:hover {
          background-color: rgb(27, 128, 87);
          color: #fff;
          box-shadow: 0 6px 16px rgba(27, 128, 87, 0.28);
          transform: translateY(-1px);
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .gpb-card { height: 360px; }
          .gpb-content { top: 40px; left: 40px; right: 40px; }
          .gpb-title { font-size: 26px; margin-bottom: 24px; }
          .gpb-cta { padding: 12px 30px; font-size: 14px; }
        }

        /* ── ≥ 992px — small desktop: 2-col grid, final 450px height ── */
        @media (min-width: 992px) {
          .gpb-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .gpb-card { height: 450px; }
          .gpb-content { top: 48px; left: 48px; right: 48px; max-width: 55%; }
          .gpb-tagline { font-size: 13px; margin-bottom: 16px; }
          .gpb-title { font-size: 30px; margin-bottom: 28px; }
          .gpb-cta { padding: 13px 32px; font-size: 14px; }
        }

        /* ── ≥ 1200px — large desktop ── */
        @media (min-width: 1200px) {
          .gpb-content { top: 56px; left: 56px; right: 56px; }
          .gpb-title { font-size: 34px; margin-bottom: 32px; letter-spacing: -0.4px; }
        }
      `}</style>
    </section>
  );
}
