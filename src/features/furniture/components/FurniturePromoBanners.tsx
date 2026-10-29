'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3647L8.22192 16.9505L13.1717 12.0007Z" />
    </svg>
  );
}

export function FurniturePromoBanners() {
  return (
    <section className="fupb-section">
      <div className="container-main">
        <div className="fupb-grid">

          {/* LEFT — large full-height panel */}
          <div className="fupb-left">
            <Image
              src="/furniture/banner/banner1.webp"
              alt="Elegant Home Furniture"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(min-width: 750px) 50vw, 100vw"
            />
            {/* Badge absolutely anchored to top-left */}
            <span className="fupb-badge fupb-badge--tl">TRENDING</span>
            {/* Heading + description centered in the full panel height */}
            <div className="fupb-left-inner">
              <div className="fupb-left-body">
                <h3 className="fupb-left-title">Elegant Home<br />Furniture</h3>
                <p className="fupb-left-desc">Description</p>
              </div>
            </div>
            {/* Button pinned to bottom-left */}
            <Link href="/shop?category=Living+%26+Dining" className="fupb-btn-solid fupb-btn--bl">
              Shop now <IconArrowRight size={15} />
            </Link>
          </div>

          {/* RIGHT — two stacked panels */}
          <div className="fupb-right-stack">

            {/* Top right */}
            <div className="fupb-right-item">
              <Image
                src="/furniture/banner/banner2.webp"
                alt="Transform Your Home"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(min-width: 750px) 50vw, 100vw"
              />
              <div className="fupb-right-inner fupb-right-inner--top">
                <h3 className="fupb-right-title">Transform Your Home</h3>
                <Link href="/shop?category=Bedroom" className="fupb-text-link">
                  Shop now <IconArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Bottom right */}
            <div className="fupb-right-item">
              <Image
                src="/furniture/banner/banner3.webp"
                alt="Timeless Living Essentials"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(min-width: 750px) 50vw, 100vw"
              />
              <div className="fupb-right-inner fupb-right-inner--btm">
                <span className="fupb-badge">POPULAR</span>
                <h3 className="fupb-right-title">Timeless Living Essentials</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .fupb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        /* ── Left panel ── */
        .fupb-left {
          position: relative;
          height: clamp(300px, 60vw, 500px);
          overflow: hidden;
        }
        .fupb-left-inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 24px;
        }
        .fupb-left-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .fupb-left-title {
          font-size: clamp(22px, 4.5vw, 34px);
          font-weight: 700;
          color: #111;
          line-height: 1.15;
          margin: 0;
        }
        .fupb-left-desc {
          font-size: 14px;
          color: #555;
          margin: 0;
          line-height: 1.5;
        }

        /* ── Right stack ── */
        .fupb-right-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fupb-right-item {
          position: relative;
          height: clamp(220px, 44vw, 380px);
          overflow: hidden;
        }
        .fupb-right-inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 24px;
          gap: 12px;
        }
        .fupb-right-inner--btm {
          justify-content: space-between;
        }
        .fupb-right-title {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin: 0;
        }

        /* ── Badge ── */
        .fupb-badge {
          display: inline-block;
          align-self: flex-start;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #fff;
          color: #111;
          padding: 7px 14px;
          border-radius: 5px;
        }
        /* Badge absolutely anchored — left panel only */
        .fupb-badge--tl {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
        }
        /* Top-right: title top, Shop now pinned to bottom */
        .fupb-right-inner--top {
          justify-content: space-between;
        }
        /* Left panel button — absolutely anchored to bottom-left */
        .fupb-btn--bl {
          position: absolute;
          bottom: 24px;
          left: 24px;
          z-index: 2;
        }

        /* ── Solid button — left panel ── */
        .fupb-btn-solid {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-size: 14px;
          font-weight: 400;
          padding: 13px 24px;
          border-radius: 2px;
          text-decoration: none;
          align-self: flex-start;
          transition: background 220ms ease;
        }
        .fupb-btn-solid:hover { background: #c8a45a; }

        /* ── Text link — right panels ── */
        .fupb-text-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 400;
          color: #111;
          text-decoration: none;
          border-bottom: 1.5px solid #111;
          padding-bottom: 2px;
          align-self: flex-start;
          transition: color 220ms ease, border-color 220ms ease;
        }
        .fupb-text-link:hover { color: #c8a45a; border-color: #c8a45a; }

        @media (min-width: 750px) {
          .fupb-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .fupb-left { height: 610px; }
          .fupb-right-stack { height: 610px; }
          .fupb-right-item { height: auto; flex: 1; }
          .fupb-left-inner { padding: 32px; }
          .fupb-right-inner { padding: 28px 32px; }
          .fupb-badge--tl { top: 32px; left: 32px; }
          .fupb-btn--bl   { bottom: 32px; left: 32px; }
        }
        @media (min-width: 992px) {
          .fupb-left-title { font-size: 36px; }
          .fupb-right-title { font-size: 26px; }
        }
      `}</style>
    </section>
  );
}
