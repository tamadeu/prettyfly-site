'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Banner {
  id: string;
  eyebrow?: string;
  title: string;           // '\n' forces a line-break
  subtitle?: string;
  cta: string;
  href: string;
  image: string;
  textColor: string;
  ctaBg: string;
  ctaColor: string;
  ctaHoverBg: string;
}

/* Backgrounds/colours visible in the reference are baked into the banner image
   itself — we deliberately do NOT apply any container background-color, overlay
   or extra wrapper colour. The image is the full fill. */
const banners: Banner[] = [
  {
    id: 'banner-1',
    title: 'Feed Your Potential\nEvery Day',
    subtitle: 'Save up to $199 on dry food!',
    cta: 'Shop Now',
    href: '/pet-food/shop',
    image: '/pet-food/banner/banner1.png',
    textColor: 'rgb(10, 66, 83)',
    ctaBg: 'rgb(10, 66, 83)',
    ctaColor: '#fff',
    ctaHoverBg: 'rgb(6, 46, 60)',
  },
  {
    id: 'banner-2',
    eyebrow: 'up to 20% OFF',
    title: '100% Organic\nPet Food',
    cta: 'ShopNow',
    href: '/pet-food/shop',
    image: '/pet-food/banner/banner2.webp',
    textColor: '#fff',
    ctaBg: '#F15B41',
    ctaColor: '#fff',
    ctaHoverBg: '#d94a32',
  },
];

export function PetFoodPromoBanners() {
  return (
    <section className="pfpb-section">
      <div className="container-main">
        <div className="pfpb-grid">
          {banners.map((banner) => (
            <Link
              key={banner.id}
              href={banner.href}
              className="pfpb-card"
              style={{ color: banner.textColor }}
            >
              <div className="pfpb-image-wrap">
                <Image
                  src={banner.image}
                  alt={banner.title.replace('\n', ' ')}
                  fill
                  className="pfpb-image"
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                  quality={95}
                />
              </div>
              <div className="pfpb-content">
                {banner.eyebrow && <span className="pfpb-eyebrow">{banner.eyebrow}</span>}
                <h3 className="pfpb-title">{banner.title}</h3>
                {banner.subtitle && <span className="pfpb-subtitle">{banner.subtitle}</span>}
                <span
                  className="pfpb-cta"
                  style={
                    {
                      backgroundColor: banner.ctaBg,
                      color: banner.ctaColor,
                      '--pfpb-cta-hover-bg': banner.ctaHoverBg,
                    } as React.CSSProperties
                  }
                >
                  {banner.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Mobile base ── */
        .pfpb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .pfpb-card {
          position: relative;
          display: block;
          text-decoration: none;
          border-radius: 12px;
          overflow: hidden;
          height: 420px;
          /* No background-color: the banner image is the full fill. */
        }

        .pfpb-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .pfpb-image {
          transition: transform 700ms ease;
        }
        .pfpb-card:hover .pfpb-image {
          transform: scale(1.04);
        }

        .pfpb-content {
          position: absolute;
          top: 28px;
          left: 28px;
          right: 28px;
          max-width: 55%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
        }

        .pfpb-eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.4px;
          margin-bottom: 12px;
          line-height: 1;
          color: inherit;
          display: block;
        }

        .pfpb-title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 14px;
          white-space: pre-line;
          letter-spacing: -0.2px;
          color: inherit;
        }

        .pfpb-subtitle {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
          line-height: 1.5;
          color: inherit;
        }

        /* CTA — pill, colour driven via inline style per-card */
        .pfpb-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 30px;
          border-radius: 30px;
          width: fit-content;
          letter-spacing: 0.2px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          transition: background-color 280ms ease, box-shadow 280ms ease, transform 280ms ease;
        }
        .pfpb-cta:hover {
          background-color: var(--pfpb-cta-hover-bg) !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.20);
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .pfpb-card { height: 460px; }
          .pfpb-content { top: 40px; left: 40px; right: 40px; }
          .pfpb-title { font-size: 26px; margin-bottom: 16px; }
          .pfpb-subtitle { font-size: 15px; margin-bottom: 24px; }
          .pfpb-cta { padding: 14px 32px; font-size: 16px; }
        }

        /* ── ≥ 992px — small desktop: 2-col 50/50 grid, fixed 410px height ── */
        @media (min-width: 992px) {
          .pfpb-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .pfpb-card { height: 410px; }
          .pfpb-content { top: 56px; left: 56px; right: 56px; max-width: 55%; }
          .pfpb-eyebrow { font-size: 14px; margin-bottom: 14px; }
          .pfpb-title { font-size: 30px; margin-bottom: 18px; }
          .pfpb-subtitle { font-size: 15px; margin-bottom: 28px; }
          .pfpb-cta { padding: 15px 34px; font-size: 16px; }
        }

        /* ── ≥ 1200px — large desktop ── */
        @media (min-width: 1200px) {
          .pfpb-content { top: 64px; left: 64px; right: 64px; }
          .pfpb-title { font-size: 34px; letter-spacing: -0.4px; }
          .pfpb-cta { padding: 15px 36px; font-size: 17px; }
        }
      `}</style>
    </section>
  );
}
