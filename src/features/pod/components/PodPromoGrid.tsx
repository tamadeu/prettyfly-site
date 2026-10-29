'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Big-left / two-stacked-right promo grid — same layout shape as the
   shared PromotionalGrid.tsx. Text sits on the light pastel background
   baked into each banner-N.webp (not a photo overlay), so text is dark
   instead of white. Content is TOP-anchored on the big card (title, desc,
   pill button stacked from the top-left) and split top/bottom on the two
   smaller cards (title top, "Shop now" link bottom) — matching the
   reference screenshot, not vertically centered. */

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function ShopNowLink() {
  return (
    <span className="pd-pg-link">
      Shop now
      <IconArrowRight size={15} />
    </span>
  );
}

export function PodPromoGrid() {
  return (
    <section>
      <div className="container-main">
        <div className="pd-pg-grid">
          {/* Left — big card */}
          <Link href="/shop" className="pd-pg-card pd-pg-left">
            <Image
              src="/pod/banners/banner-1.webp"
              alt="Personalize Your Everyday"
              fill
              style={{ objectFit: 'cover', objectPosition: 'right center' }}
              sizes="50vw"
            />
            <div className="pd-pg-content pd-pg-content--top">
              <h3 className="pd-pg-title pd-pg-title--lg">
                Personalize Your<br />Everyday
              </h3>
              <p className="pd-pg-desc">Print Your Creativity, Up to 70% Save!</p>
              <span className="pd-pg-btn">Shop now<IconArrowRight size={14} /></span>
            </div>
          </Link>

          {/* Right — two stacked cards */}
          <div className="pd-pg-right">
            <Link href="/shop" className="pd-pg-card">
              <Image
                src="/pod/banners/banner-2.webp"
                alt="Personalized Décor Made Easy"
                fill
                style={{ objectFit: 'cover', objectPosition: 'right center' }}
                sizes="50vw"
              />
              <div className="pd-pg-content pd-pg-content--split">
                <h3 className="pd-pg-title">Personalized Décor Made Easy</h3>
                <ShopNowLink />
              </div>
            </Link>

            <Link href="/shop" className="pd-pg-card">
              <Image
                src="/pod/banners/banner-3.webp"
                alt="Custom Gifts That Stand Out"
                fill
                style={{ objectFit: 'cover', objectPosition: 'right center' }}
                sizes="50vw"
              />
              <div className="pd-pg-content pd-pg-content--split">
                <h3 className="pd-pg-title">Custom Gifts That Stand Out</h3>
                <ShopNowLink />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .pd-pg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .pd-pg-card {
          position: relative;
          display: block;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          height: clamp(220px, 32vw, 290px);
        }
        .pd-pg-left { height: clamp(320px, 44vw, 600px); }
        .pd-pg-right {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
        }
        .pd-pg-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: clamp(24px, 3.4vw, 40px);
          max-width: 58%;
        }
        .pd-pg-content--top {
          justify-content: flex-start;
        }
        .pd-pg-content--split {
          justify-content: space-between;
        }
        .pd-pg-title {
          font-size: clamp(20px, 2vw, 24px);
          font-weight: 700;
          color: #171717;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .pd-pg-content--split .pd-pg-title {
          margin-bottom: 0;
        }
        .pd-pg-title--lg {
          font-size: clamp(24px, 2.8vw, 32px);
        }
        .pd-pg-desc {
          font-size: clamp(12px, 1.2vw, 14px);
          color: #444;
          margin-bottom: clamp(14px, 2vw, 20px);
        }
        .pd-pg-btn {
          display: inline-flex;
          align-items: center;
          gap: clamp(6px, 0.8vw, 8px);
          width: fit-content;
          background-color: #000;
          color: #fff;
          font-size: clamp(12px, 1.2vw, 14px);
          font-weight: 500;
          padding: clamp(10px, 1.4vw, 12px) clamp(18px, 2.4vw, 24px);
          border-radius: 40px;
        }
        .pd-pg-btn svg {
          width: clamp(12px, 1.2vw, 14px);
          height: clamp(12px, 1.2vw, 14px);
        }
        .pd-pg-link {
          display: inline-flex;
          align-items: center;
          gap: clamp(5px, 0.6vw, 6px);
          width: fit-content;
          font-size: clamp(13px, 1.3vw, 16px);
          font-weight: 500;
          color: #171717;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 220ms ease;
        }
        .pd-pg-link svg {
          width: clamp(13px, 1.3vw, 15px);
          height: clamp(13px, 1.3vw, 15px);
        }
        .pd-pg-card:hover .pd-pg-link {
          color: #d9491f;
        }

        @media (min-width: 750px) {
          .pd-pg-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
