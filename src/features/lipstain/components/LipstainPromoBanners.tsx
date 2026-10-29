'use client';

import Image from 'next/image';
import Link from 'next/link';

export function LipstainPromoBanners() {
  return (
    <section className="lspb-section">
      <div className="container-main">
        <div className="lspb-grid">

          {/* LEFT — single tall banner */}
          <Link href="/shop" className="lspb-card lspb-card-left">
            <Image
              src="/lipstain/banner/banner1.webp"
              alt="Lip Care Essentials"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center right' }}
              sizes="(min-width: 750px) 50vw, 100vw"
              priority
            />
            <div className="lspb-content">
              <span className="lspb-badge">TRENDING</span>
              <h2 className="lspb-title-lg">
                Lip Care<br />Essentials
              </h2>
              <p className="lspb-sub">SAVE UP TO $199 OFF, GET CHANCE!</p>
              <span className="lspb-link">SHOP NOW &gt;</span>
            </div>
          </Link>

          {/* RIGHT — two stacked banners */}
          <div className="lspb-stack">

            {/* Top right */}
            <Link href="/shop?category=party" className="lspb-card lspb-card-right">
              <Image
                src="/lipstain/banner/banner2.webp"
                alt="Party-Ready Lips"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center right' }}
                sizes="(min-width: 750px) 50vw, 100vw"
              />
              <div className="lspb-content">
                <p className="lspb-price">From $99.99</p>
                <h3 className="lspb-title-md">Party-Ready Lips</h3>
                <span className="lspb-link">SHOP NOW &gt;</span>
              </div>
            </Link>

            {/* Bottom right */}
            <Link href="/shop?category=long-lasting" className="lspb-card lspb-card-right">
              <Image
                src="/lipstain/banner/banner3.webp"
                alt="Long-Lasting Lipsticks"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center right' }}
                sizes="(min-width: 750px) 50vw, 100vw"
              />
              <div className="lspb-content">
                <p className="lspb-discount">UP TO 30% OFF</p>
                <h3 className="lspb-title-md lspb-title-italic">Long-Lasting Lipsticks</h3>
                <span className="lspb-link">SHOP NOW &gt;</span>
              </div>
            </Link>

          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&display=swap');

        .lspb-section {
          padding: clamp(32px, 5vw, 56px) 0;
        }

        /* ── Grid ── */
        .lspb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .lspb-stack {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        /* ── Card base ── */
        .lspb-card {
          position: relative;
          display: block;
          overflow: hidden;
          border-radius: 10px;
          text-decoration: none;
          background: #f5eaea;
        }
        .lspb-card-left  { height: clamp(320px, 68vw, 610px); }
        .lspb-card-right { height: clamp(155px, 33vw, 299px); }

        .lspb-card img { transition: transform 550ms ease; }
        .lspb-card:hover img { transform: scale(1.04); }

        /* ── Content overlay ── */
        .lspb-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: clamp(20px, 2.8vw, 32px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        /* ── Badge pill ── */
        .lspb-badge {
          display: inline-block;
          background: #fff;
          color: #222;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 13px;
          border-radius: 9999px;
          border: 1px solid rgba(0,0,0,0.10);
          box-shadow: 0 1px 5px rgba(0,0,0,0.08);
        }

        /* ── Typography ── */
        .lspb-title-lg {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.2vw, 30px);
          font-weight: 800;
          color: #111;
          line-height: 1.15;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .lspb-title-md {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px, 2vw, 26px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin: 0;
        }
        .lspb-title-italic {
          font-style: normal;
        }
        .lspb-sub {
          font-size: clamp(9.5px, 0.9vw, 11.5px);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444;
          margin: 0;
        }
        .lspb-price {
          font-size: clamp(11px, 1vw, 13px);
          color: #555;
          margin: 0;
        }
        .lspb-discount {
          font-size: clamp(9.5px, 0.9vw, 11.5px);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444;
          margin: 0;
        }

        /* ── Underlined text CTA ── */
        .lspb-link {
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 400;
          letter-spacing: 0.08em;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-transform: uppercase;
          transition: color 200ms ease;
          cursor: pointer;
        }
        .lspb-card:hover .lspb-link { color: #c9173c; }

        /* ── Desktop: 50 / 50, fixed 610 px height ── */
        @media (min-width: 750px) {
          .lspb-grid {
            grid-template-columns: 1fr 1fr;
            height: 610px;
            gap: 12px;
          }
          .lspb-stack {
            height: 100%;
            grid-template-rows: 1fr 1fr;
          }
          .lspb-card-left  { height: 100%; }
          .lspb-card-right { height: 100%; }
        }

        /* ── Tablet tweaks ── */
        @media (min-width: 750px) and (max-width: 991px) {
          .lspb-title-lg { font-size: clamp(22px, 3.8vw, 34px); }
          .lspb-title-md { font-size: clamp(16px, 2.4vw, 22px); }
        }

        /* ── Mobile: stack vertically ── */
        @media (max-width: 749px) {
          .lspb-grid    { grid-template-columns: 1fr; }
          .lspb-stack   { grid-template-columns: 1fr 1fr; }
          .lspb-card-right { height: clamp(140px, 40vw, 220px); }
        }

        @media (max-width: 479px) {
          .lspb-stack   { grid-template-columns: 1fr; }
          .lspb-card-right { height: clamp(160px, 52vw, 260px); }
        }
      `}</style>
    </section>
  );
}
