'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Promo {
  eyebrow?: string;
  title: string;        // '\n' → line break
  subtitle?: string;
  cta: string;
  href: string;
  image: string;
  textColor: string;
  ctaBg: string;
  ctaColor: string;
}

const promoBig: Promo = {
  eyebrow: 'BUY 1 GET 1 FREE',
  title: 'Laugh your way to a\nhealthier you!',
  cta: 'SHOP NOW',
  href: '/nutrition/shop',
  image: '/nutrition/banner/banner1.webp',
  textColor: '#fff',
  ctaBg: 'rgb(140, 255, 100)',
  ctaColor: '#0e1a0a',
};

const promoTop1: Promo = {
  title: 'Health Through\nNutrition',
  subtitle: 'Starting at $256.00',
  cta: 'SHOP NOW',
  href: '/nutrition/shop',
  image: '/nutrition/banner/banner4.webp',
  textColor: '#fff',
  ctaBg: 'transparent',
  ctaColor: '#fff',
};

const promoTop2: Promo = {
  title: 'Wholesome\nWellness Wins',
  subtitle: 'Save up to 60% Off',
  cta: 'SHOP NOW',
  href: '/nutrition/shop',
  image: '/nutrition/banner/banner3.webp',
  textColor: '#fff',
  ctaBg: 'transparent',
  ctaColor: '#fff',
};

const promoBottom: Promo = {
  title: 'Find the funny side\nof nutrition',
  subtitle: 'A clever twist on nourishment.',
  cta: 'SHOP NOW',
  href: '/nutrition/shop',
  image: '/nutrition/banner/banner2.webp',
  textColor: '#fff',
  ctaBg: 'transparent',
  ctaColor: '#fff',
};

function PromoCard({
  promo,
  variant,
}: {
  promo: Promo;
  variant: 'big' | 'small' | 'wide';
}) {
  return (
    <Link
      href={promo.href}
      className={`npg-card npg-${variant}`}
      style={{ color: promo.textColor }}
    >
      <div className="npg-image-wrap">
        <Image
          src={promo.image}
          alt={promo.title.replace('\n', ' ')}
          fill
          className="npg-image"
          style={{ objectFit: 'cover' }}
          sizes="(min-width: 992px) 50vw, 100vw"
          quality={95}
        />
      </div>
      <div className="npg-content">
        {promo.eyebrow && <span className="npg-eyebrow">{promo.eyebrow}</span>}
        <h3 className="npg-title">{promo.title}</h3>
        {promo.subtitle && <p className="npg-subtitle">{promo.subtitle}</p>}
        <span
          className="npg-cta"
          style={{
            backgroundColor: promo.ctaBg,
            color: promo.ctaColor,
            border: promo.ctaBg === 'transparent' ? '1.5px solid currentColor' : 'none',
          }}
        >
          {promo.cta}
        </span>
      </div>
    </Link>
  );
}

export function NutritionPromoGrid() {
  return (
    <section className="npg-section">
      <div className="container-main">
        <div className="npg-grid">
          <div className="npg-left">
            <PromoCard promo={promoBig} variant="big" />
          </div>

          <div className="npg-right">
            <div className="npg-right-top">
              <PromoCard promo={promoTop1} variant="small" />
              <PromoCard promo={promoTop2} variant="small" />
            </div>
            <PromoCard promo={promoBottom} variant="wide" />
          </div>
        </div>
      </div>

      <style>{`
        .npg-section { padding: 0; }
        .npg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .npg-right {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .npg-right-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .npg-card {
          position: relative;
          display: block;
          text-decoration: none;
          border-radius: 12px;
          overflow: hidden;
          height: 280px;
        }
        .npg-big { height: 420px; }
        .npg-small { height: 220px; }
        .npg-wide { height: 220px; }

        .npg-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .npg-image { transition: transform 700ms ease; }
        .npg-card:hover .npg-image { transform: scale(1.04); }

        .npg-content {
          position: absolute;
          top: 24px;
          left: 24px;
          right: 24px;
          max-width: 60%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .npg-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
          color: rgb(140, 255, 100);
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .npg-title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
          white-space: pre-line;
          color: inherit;
          letter-spacing: -0.2px;
        }
        .npg-subtitle {
          font-size: 13px;
          color: inherit;
          opacity: 0.85;
          margin-bottom: 18px;
        }
        .npg-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.2px;
          padding: 10px 22px;
          border-radius: 40px;
          text-decoration: none;
          transition: transform 220ms ease, opacity 220ms ease, background-color 260ms ease, color 260ms ease, box-shadow 260ms ease;
        }
        .npg-cta:hover {
          transform: translateY(-1px);
          opacity: 0.92;
        }

        /* First banner CTA mirrors the hero CTA (solid lime, larger pill, hover → white bg / black text) */
        .npg-big .npg-cta {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 13px 34px;
          box-shadow: 0 4px 14px rgba(140, 255, 100, 0.3);
        }
        .npg-big .npg-cta:hover {
          background-color: #fff !important;
          color: #000 !important;
          opacity: 1;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 749px) {
          .npg-content {
            top: clamp(14px, 3.5vw, 24px);
            left: clamp(14px, 3.5vw, 24px);
            right: clamp(14px, 3.5vw, 24px);
            max-width: 72%;
          }
          .npg-eyebrow {
            font-size: clamp(9px, 2.2vw, 11px);
            margin-bottom: 8px;
          }
          .npg-title {
            font-size: clamp(16px, 4.5vw, 22px);
            margin-bottom: 8px;
          }
          .npg-subtitle {
            font-size: clamp(11px, 2.8vw, 13px);
            margin-bottom: 12px;
          }
          .npg-cta {
            font-size: clamp(10px, 2.5vw, 12px);
            padding: clamp(7px, 2vw, 10px) clamp(14px, 3.5vw, 22px);
            letter-spacing: 0.8px;
          }
          .npg-big .npg-cta {
            font-size: clamp(11px, 2.8vw, 14px);
            padding: clamp(9px, 2.4vw, 13px) clamp(18px, 4.5vw, 34px);
            letter-spacing: 0.4px;
          }
        }

        @media (min-width: 750px) {
          .npg-right-top { grid-template-columns: 1fr 1fr; }
          .npg-title { font-size: 26px; }
          .npg-small .npg-title { font-size: 22px; }
        }

        @media (min-width: 992px) {
          .npg-grid { grid-template-columns: 1fr 1fr; gap: 20px; align-items: stretch; }
          .npg-right { gap: 20px; grid-template-rows: 1fr 1fr; }
          .npg-right-top { gap: 20px; }
          /* Total section = 930px. Left fills it; right stacks two equal rows (455px + 20px gap + 455px). */
          .npg-big { height: 930px; }
          .npg-small { height: 455px; }
          .npg-wide { height: 455px; }
          .npg-content { top: 32px; left: 36px; right: 36px; }
          .npg-big .npg-title { font-size: 42px; }
          .npg-big .npg-content { max-width: 55%; }
        }
      `}</style>
    </section>
  );
}
