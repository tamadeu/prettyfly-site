import Image from 'next/image';
import Link from 'next/link';

/* ── Arrow icon ── */

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* ── Component ── */

export function ES2PromoBanners() {
  return (
    <section className="es2pb-section">
      <div className="container-main">
        <div className="es2pb-grid">

          {/* ══════════════════════════════════════
              LEFT — large hero card (TRENDING)
          ══════════════════════════════════════ */}
          <Link href="/shop" className="es2pb-card es2pb-card--large">
            <div className="es2pb-img-wrap">
              <Image
                src="/electronics store/banner/banner-1.webp"
                alt="Upgrade with Smart Devices"
                fill
                className="es2pb-img"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(min-width: 992px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="es2pb-content es2pb-content--large">
              <span className="es2pb-badge">TRENDING</span>
              <div className="es2pb-center">
                <h2 className="es2pb-title es2pb-title--large">
                  Upgrade with Smart<br />Devices
                </h2>
                <p className="es2pb-desc">
                  Find your perfect phone — sleek and<br />stylish or budget-friendly.
                </p>
              </div>
              <span className="es2pb-btn">
                Shop Now <IconArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* ══════════════════════════════════════
              RIGHT column
              ┌───────────┬──────────────────┐
              │   GAME    │ Top Tech, Great  │  ← 2 equal small cards
              ├───────────┴──────────────────┤
              │    SMART WATCHES (wide)      │  ← full-width card
              └──────────────────────────────┘
          ══════════════════════════════════════ */}
          <div className="es2pb-right">

            {/* Top row: GAME + Top Tech */}
            <div className="es2pb-top-row">

              {/* GAME */}
              <Link href="/shop" className="es2pb-card es2pb-card--sm">
                <div className="es2pb-img-wrap">
                  <Image
                    src="/electronics store/banner/banner-3.webp"
                    alt="Find Your Gaming Edge"
                    fill
                    className="es2pb-img"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 992px) 25vw, 50vw"
                  />
                </div>
                <div className="es2pb-content es2pb-content--badge-bottom">
                  <span className="es2pb-badge">GAME</span>
                  <h3 className="es2pb-title es2pb-title--sm">
                    Find Your Gaming Edge
                  </h3>
                </div>
              </Link>

              {/* Top Tech, Great Deals */}
              <Link href="/shop" className="es2pb-card es2pb-card--sm">
                <div className="es2pb-img-wrap">
                  <Image
                    src="/electronics store/banner/banner-2.webp"
                    alt="Top Tech, Great Deals"
                    fill
                    className="es2pb-img"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 992px) 25vw, 50vw"
                  />
                </div>
                <div className="es2pb-content es2pb-content--title-top">
                  <h3 className="es2pb-title es2pb-title--sm">
                    Top Tech, Great Deals
                  </h3>
                  <span className="es2pb-link">
                    Shop Now <IconArrowRight size={14} />
                  </span>
                </div>
              </Link>

            </div>

            {/* Bottom: SMART WATCHES — spans full right width */}
            <Link href="/shop" className="es2pb-card es2pb-card--wide">
              <div className="es2pb-img-wrap">
                <Image
                  src="/electronics store/banner/banner-4.webp"
                  alt="Watches That Elevate Style"
                  fill
                  className="es2pb-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                />
              </div>
              <div className="es2pb-content es2pb-content--badge-bottom">
                <span className="es2pb-badge">SMART WATCHES</span>
                <h3 className="es2pb-title es2pb-title--wide">
                  Watches That Elevate Style
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </div>

      <style>{`
        .es2pb-section { width: 100%; }

        /* ── Outer 2-col grid ── */
        .es2pb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }

        /* ── Right column ── */
        .es2pb-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ── Top row: 2 equal small cards ── */
        .es2pb-top-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* ── Card base ── */
        .es2pb-card {
          position: relative;
          display: block;
          overflow: hidden;
          text-decoration: none;
          border-radius: 12px;
        }
        .es2pb-card:hover .es2pb-img { transform: scale(1.04); }

        /* Sizes — one continuous clamp per card (not stepped tiers) so
           height eases down smoothly across every breakpoint instead of
           jumping; the large card hits exactly 300px at the 320px floor. */
        .es2pb-card--large { height: clamp(300px, 62vw - 98px, 610px); }
        .es2pb-card--sm    { height: clamp(140px, 30vw - 5px, 290px); }
        .es2pb-card--wide  { height: clamp(140px, 30vw - 5px, 290px); }

        /* ── Image ── */
        .es2pb-img-wrap { position: absolute; inset: 0; z-index: 1; }
        .es2pb-img { transition: transform 550ms ease; }

        /* ── Content overlay (base) — padding set later via a single
           fluid clamp per axis; only layout/width live here. ── */
        .es2pb-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 58%;
        }

        /* Badge at top, title at bottom */
        .es2pb-content--badge-bottom { justify-content: space-between; }

        /* Title at top, link at bottom */
        .es2pb-content--title-top { justify-content: space-between; }

        /* Large card: badge top → center fills → button bottom */
        .es2pb-content--large {
          justify-content: space-between;
          width: 56%;
        }

        /* Title + desc: centered in the space between badge and button */
        .es2pb-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        /* ── Badge — square corners ── */
        .es2pb-badge {
          display: inline-block;
          background: #fff;
          color: #111;
          font-size: clamp(10px, 1vw, 12px);
          font-weight: 700;
          letter-spacing: 0.7px;
          padding: clamp(4px, 0.8vw, 6px) clamp(10px, 2vw, 15px);
          border-radius: 0;
        }

        /* ── Titles — each a single continuous clamp (not stepped tiers)
           so font size eases down smoothly instead of jumping. ── */
        .es2pb-title {
          font-weight: 700;
          color: #111;
          line-height: 1.25;
          margin: 0;
        }
        .es2pb-title--large {
          font-size: clamp(20px, 15px + 1.4vw, 32px);
          margin-bottom: clamp(8px, 1.6vw, 14px);
        }
        .es2pb-title--sm {
          font-size: clamp(14px, 11px + 0.9vw, 22px);
          white-space: normal;
        }
        .es2pb-title--wide {
          font-size: clamp(15px, 12px + 1vw, 24px);
        }
        @media (min-width: 750px) {
          /* Desktop/tablet: "Find Your Gaming Edge" / "Top Tech, Great
             Deals" fit on one line at typical viewports. */
          .es2pb-title--sm { white-space: nowrap; }
        }

        /* ── Description (large card) ── */
        .es2pb-desc {
          font-size: clamp(12px, 0.9vw, 15px);
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Blue CTA button — square corners ── */
        .es2pb-btn {
          display: inline-flex;
          align-items: center;
          gap: clamp(6px, 0.8vw, 8px);
          background: #2b6be6;
          color: #fff;
          font-size: clamp(12px, 1.1vw, 16px);
          font-weight: 600;
          padding: clamp(9px, 1.4vw, 12px) clamp(16px, 3vw, 28px);
          border-radius: 0;
          transition: background 200ms ease;
        }
        .es2pb-btn svg {
          width: clamp(13px, 1.3vw, 16px);
          height: clamp(13px, 1.3vw, 16px);
        }
        .es2pb-card:hover .es2pb-btn { background: #1a55c9; }

        /* ── Underline link (Top Tech card) ── */
        .es2pb-link {
          display: inline-flex;
          align-items: center;
          gap: clamp(4px, 0.5vw, 5px);
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 700;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 200ms ease;
        }
        .es2pb-link svg {
          width: clamp(11px, 1.1vw, 14px);
          height: clamp(11px, 1.1vw, 14px);
        }
        .es2pb-card:hover .es2pb-link { color: #2b6be6; }

        /* ── Content padding — fluid, single clamp per axis ── */
        .es2pb-content {
          padding: clamp(14px, 2vw, 24px) clamp(16px, 2.6vw, 26px);
        }
        .es2pb-content--large {
          padding: clamp(16px, 2.4vw, 30px) clamp(18px, 3vw, 34px);
        }

        /* ── Mobile: structural reflow only (grid/content proportions),
           sizing itself is already fluid via the clamps above. ── */
        @media (max-width: 749px) {
          .es2pb-grid { grid-template-columns: 1fr; }
          .es2pb-content { width: 65%; }
          .es2pb-content--large { width: 65%; }
        }
        @media (max-width: 480px) {
          .es2pb-top-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
