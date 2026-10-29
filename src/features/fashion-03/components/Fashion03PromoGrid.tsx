'use client';

import Image from 'next/image';
import Link from 'next/link';

/* ── Remix Icon Arrow ── */
function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* ── Shop Now text link (uppercase, matches screenshot) ── */
function ShopNowLink() {
  return (
    <span
      className="f3-promo-shopnow"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'clamp(5px, 0.6vw, 8px)',
        fontSize: 'clamp(13px, 1.3vw, 18px)',
        fontWeight: 400,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        color: '#222',
      }}
    >
      Shop Now
      <IconArrowRight size={18} />
    </span>
  );
}

export function Fashion03PromoGrid() {
  return (
    <section>
      <div className="container-main">
        <div
          className="f3-promo-grid-wrapper"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          {/* ═══════════════════════════════════════════
              LEFT SIDE — Large Banner (50%, 600px)
              ═══════════════════════════════════════════ */}
          <Link
            href="/shop"
            className="f3-promo-card f3-promo-grid-left"
            style={{
              position: 'relative',
              display: 'block',
              height: '610px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {/* Background image */}
            <Image
              src="/fashion-03/banners/banner-1.webp"
              alt="Everyday Fashion for Everyone"
              fill
              className="f3-promo-card-img"
              style={{ objectFit: 'cover', objectPosition: 'right center', transition: 'transform 500ms ease' }}
              sizes="50vw"
            />

            {/* Content — 3 rows: badge top, title+desc center, button bottom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(18px, 3vw, 30px) clamp(20px, 3.5vw, 36px)',
                zIndex: 2,
              }}
            >
              {/* Top: NEW ARRIVAL badge */}
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#fff',
                    color: '#222',
                    fontSize: 'clamp(11px, 1.1vw, 15px)',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    padding: 'clamp(5px, 0.6vw, 7px) clamp(11px, 1.2vw, 16px)',
                  }}
                >
                  NEW ARRIVAL
                </span>
              </div>

              {/* Center: Title + Description */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3
                  style={{
                    fontSize: 'clamp(20px, 2.6vw, 30px)',
                    fontWeight: 700,
                    color: '#222',
                    lineHeight: 1.2,
                    marginBottom: '10px',
                  }}
                >
                  Everyday Fashion<br />for Everyone
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(12px, 1.1vw, 14px)',
                    color: '#555',
                    letterSpacing: '0.3px',
                  }}
                >
                  Hurry! 25% Off Everything!
                </p>
              </div>

              {/* Bottom: Button */}
              <div>
                <span className="f3-promo-btn">
                  Shop now
                  <IconArrowRight size={17} />
                </span>
              </div>
            </div>
          </Link>

          {/* ═══════════════════════════════════════════
              RIGHT SIDE — 2 rows
              ═══════════════════════════════════════════ */}
          <div className="f3-promo-grid-right" style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px', height: '610px' }}>

            {/* ─── Top row: 2 equal cards ─── */}
            <div className="f3-promo-grid-right-top" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

              {/* Fashion Glasses */}
              <Link
                href="/shop?category=Accessories"
                className="f3-promo-card"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Image
                  src="/fashion-03/banners/banner-2.webp"
                  alt="Fashion Glasses"
                  fill
                  className="f3-promo-card-img"
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                  sizes="25vw"
                />
                <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(16px, 2.2vw, 24px) clamp(16px, 2.2vw, 24px) 0' }}>
                  <h3 style={{ fontSize: 'clamp(16px, 1.9vw, 22px)', fontWeight: 700, color: '#222', lineHeight: 1.3, marginBottom: 'clamp(8px, 1vw, 12px)' }}>
                    Fashion Glasses
                  </h3>
                  <ShopNowLink />
                </div>
              </Link>

              {/* Trendy Shoes */}
              <Link
                href="/shop?category=Activewear"
                className="f3-promo-card"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Image
                  src="/fashion-03/banners/banner-3.webp"
                  alt="Trendy Shoes"
                  fill
                  className="f3-promo-card-img"
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                  sizes="25vw"
                />
                <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(16px, 2.2vw, 24px)' }}>
                  <h3 style={{ fontSize: 'clamp(16px, 1.9vw, 22px)', fontWeight: 700, color: '#222', lineHeight: 1.3, marginBottom: 'clamp(8px, 1vw, 12px)' }}>
                    Trendy Shoes
                  </h3>
                  <ShopNowLink />
                </div>
              </Link>
            </div>

            {/* ─── Bottom row: Full-width card ─── */}
            <Link
              href="/shop?category=Accessories"
              className="f3-promo-card"
              style={{
                position: 'relative',
                display: 'block',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Image
                src="/fashion-03/banners/banner-4.webp"
                alt="Fashionable Bags"
                fill
                className="f3-promo-card-img"
                style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                sizes="50vw"
              />

              {/* Text on left */}
              <div
                className="f3-promo-bottom-text"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  padding: 'clamp(18px, 2.6vw, 28px) clamp(20px, 3vw, 32px)',
                  maxWidth: '50%',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(17px, 2vw, 24px)',
                      fontWeight: 700,
                      color: '#222',
                      lineHeight: 1.3,
                    }}
                  >
                    Fashionable Bags for<br />Every Day
                  </h3>
                </div>
                <div>
                  <ShopNowLink />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* Hover effects */}
      <style>{`
        @media (max-width: 749px) {
          .f3-promo-grid-wrapper { grid-template-columns: 1fr !important; }
          .f3-promo-grid-left { height: clamp(230px, calc(89px + 44.2vw), 420px) !important; }
          .f3-promo-grid-right { grid-template-rows: auto auto !important; height: auto !important; }
          .f3-promo-grid-right-top { grid-template-columns: 1fr !important; }
          .f3-promo-grid-right .f3-promo-card { height: clamp(230px, calc(89px + 44.2vw), 420px) !important; }
          .f3-promo-grid-left h3 { font-size: clamp(18px, 5vw, 28px) !important; }
          .f3-promo-grid-right h3 { font-size: clamp(14px, 4vw, 22px) !important; }
          .f3-promo-bottom-text { max-width: 72% !important; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .f3-promo-grid-wrapper { grid-template-columns: 1fr !important; }
          .f3-promo-grid-left { height: 420px !important; }
          .f3-promo-grid-right { grid-template-rows: auto auto !important; height: auto !important; }
          .f3-promo-grid-right .f3-promo-card { height: 260px !important; }
        }

        .f3-promo-card:hover .f3-promo-card-img {
          transform: scale(1.05);
        }
        .f3-promo-btn {
          display: inline-flex;
          align-items: center;
          gap: clamp(5px, 0.6vw, 8px);
          background-color: #000;
          color: #fff;
          font-size: clamp(14px, 1.5vw, 18px);
          font-weight: 500;
          padding: clamp(11px, 1.3vw, 14px) clamp(20px, 2.2vw, 28px);
          border-radius: 40px;
          transition: background-color 250ms ease;
        }
        .f3-promo-btn:hover {
          background-color: #fc5732;
        }
        /* Button arrow icons scale with their button's font-size. */
        .f3-promo-btn svg,
        .f3-promo-shopnow svg {
          width: 1em;
          height: 1em;
        }
      `}</style>
    </section>
  );
}
