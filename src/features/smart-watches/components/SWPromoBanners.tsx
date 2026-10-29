import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function SWPromoBanners() {
  return (
    <section className="swpb-section">
      <div className="container-main">
        <div className="swpb-grid">

          {/* ── Left: large card (TRENDING) ── */}
          <Link href="/smart-watches/shop" className="swpb-card swpb-card--large">
            <div className="swpb-img-wrap">
              <Image
                src="/smart-watches/banner/banner1.webp"
                alt="Upgrade with Smart Watches"
                fill
                className="swpb-img"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(min-width: 992px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="swpb-content swpb-content--large">
              <span className="swpb-badge">TRENDING</span>
              {/* margin-top: auto biases toward bottom; margin-bottom creates breathing room */}
              <div className="swpb-main">
                <h3 className="swpb-title swpb-title--large">
                  Upgrade with Smart<br />Watches
                </h3>
                <p className="swpb-desc">
                  Find your perfect watch — sleek and<br />stylish or budget-friendly.
                </p>
                <span className="swpb-cta-btn">
                  Shop Now <IconArrowRight size={17} />
                </span>
              </div>
            </div>
          </Link>

          {/* ── Right column: top 2-grid + bottom wide ── */}
          <div className="swpb-right">

            {/* Top row: 2 small cards */}
            <div className="swpb-top-row">

              {/* FITNESS card — badge at top, title at bottom */}
              <Link href="/smart-watches/shop?category=Smart+Watch" className="swpb-card swpb-card--sm">
                <div className="swpb-img-wrap">
                  <Image
                    src="/smart-watches/banner/banner2.webp"
                    alt="Watches That Define You"
                    fill
                    className="swpb-img"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 992px) 25vw, 50vw"
                  />
                </div>
                <div className="swpb-content">
                  <span className="swpb-badge">FITNESS</span>
                  <h3 className="swpb-title swpb-title--sm">
                    Watches That Define<br />You
                  </h3>
                </div>
              </Link>

              {/* Grab Favorite Watch card — title at top, link pushed to bottom */}
              <Link href="/smart-watches/shop?category=Luxury+Watches" className="swpb-card swpb-card--sm">
                <div className="swpb-img-wrap">
                  <Image
                    src="/smart-watches/banner/banner3.webp"
                    alt="Grab Your Favorite Watch"
                    fill
                    className="swpb-img"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 992px) 25vw, 50vw"
                  />
                </div>
                <div className="swpb-content swpb-content--top">
                  <h3 className="swpb-title swpb-title--sm">
                    Grab Your Favorite<br />Watch!
                  </h3>
                  <span className="swpb-link">
                    Shop Now <IconArrowRight size={14} />
                  </span>
                </div>
              </Link>

            </div>

            {/* Bottom: wide TRACKER card — badge at top, title at bottom */}
            <Link href="/smart-watches/shop?category=Sports+Watches" className="swpb-card swpb-card--wide">
              <div className="swpb-img-wrap">
                <Image
                  src="/smart-watches/banner/banner4.webp"
                  alt="Time to Upgrade Your Watch"
                  fill
                  className="swpb-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(min-width: 992px) 50vw, 100vw"
                />
              </div>
              <div className="swpb-content">
                <span className="swpb-badge">TRACKER</span>
                <h3 className="swpb-title swpb-title--wide">
                  Time to Upgrade Your Watch
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </div>

      <style>{`
        .swpb-section { width: 100%; }

        /* Outer 2-col grid */
        .swpb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }

        /* Right column */
        .swpb-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Top row inside right: 2 equal small cards */
        .swpb-top-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          flex: 1;
        }

        /* ── Card base ── */
        .swpb-card {
          position: relative;
          display: block;
          overflow: hidden;
          text-decoration: none;
          border-radius: 12px;
        }
        .swpb-card:hover .swpb-img { transform: scale(1.04); }

        /* Left tall card — drives the section height. One continuous
           clamp (not stepped media queries) so it scales smoothly from
           610px at desktop down to exactly 300px at the 320px floor. */
        .swpb-card--large { height: clamp(300px, 62vw - 98px, 610px); }

        /* Small top-row cards — fill the flex-1 top-row container */
        .swpb-card--sm { height: 100%; }

        /* Wide bottom card — fill remaining space in right column */
        .swpb-card--wide { flex: 1; }

        /* ── Image ── */
        .swpb-img-wrap { position: absolute; inset: 0; z-index: 1; }
        .swpb-img { transition: transform 550ms ease; }

        /* ── Content overlay — spans full card height ──
           Horizontal padding gets its own, higher-floored clamp so the
           title/button keep comfortable side spacing at ≤992px instead of
           crowding the card edge — vertical padding is unchanged. */
        .swpb-content {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          z-index: 2;
          padding-block: clamp(16px, 2vw, 28px);
          padding-inline: clamp(20px, 3.6vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          width: 60%;
        }

        /* Small cards get extra width so "Watches That Define" and "Grab Your Favorite"
           fit on one line at typical desktop viewports, preventing the 3-line wrap */
        .swpb-card--sm .swpb-content { width: 70%; }

        /* Large card: badge at top, main group biased toward lower half */
        .swpb-content--large {
          justify-content: flex-start;
        }

        /* Banner 3: title at top, link pushed to bottom via space-between */
        .swpb-content--top {
          justify-content: space-between;
        }

        /* Large card bottom group — margin-top: auto pushes it down;
           margin-bottom adds breathing room above card edge. Fluid clamp
           (not a hard 100px -> 0 snap at 749px) so it eases down smoothly
           as the card itself shrinks. */
        .swpb-main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: auto;
          margin-bottom: clamp(0px, 20vw - 50px, 100px);
        }

        /* Badge pill */
        .swpb-badge {
          display: inline-block;
          background: #fff;
          color: #111;
          font-size: clamp(10px, 1vw, 12px);
          font-weight: 700;
          letter-spacing: 0.8px;
          padding: clamp(3px, 0.6vw, 4px) clamp(8px, 1.4vw, 10px);
          border-radius: 20px;
        }

        /* Titles */
        .swpb-title {
          font-weight: 700;
          color: #111;
          line-height: 1.25;
          margin: 0;
        }
        .swpb-title--large {
          font-size: clamp(22px, 2.4vw, 34px);
          margin-bottom: 12px;
        }
        .swpb-title--sm {
          font-size: clamp(17px, 1.7vw, 24px);
        }
        .swpb-title--wide {
          font-size: clamp(20px, 2vw, 30px);
        }

        /* Description (large card only) */
        .swpb-desc {
          font-size: clamp(13px, 1vw, 15px);
          color: #555;
          line-height: 1.55;
          margin-bottom: 20px;
        }

        /* Black pill CTA (large card) — slightly wider, taller, larger text */
        .swpb-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: clamp(6px, 0.8vw, 8px);
          background: #111;
          color: #fff;
          font-size: clamp(12px, 1.1vw, 17px);
          font-weight: 500;
          padding: clamp(9px, 1.4vw, 12px) clamp(18px, 3vw, 28px);
          border-radius: 40px;
          transition: background 200ms ease;
        }
        .swpb-cta-btn svg {
          width: clamp(13px, 1.3vw, 17px);
          height: clamp(13px, 1.3vw, 17px);
        }
        .swpb-card:hover .swpb-cta-btn { background: #333; }

        /* Underline link CTA (banner 3) */
        .swpb-link {
          display: inline-flex;
          align-items: center;
          gap: clamp(4px, 0.5vw, 5px);
          font-size: clamp(12px, 1vw, 16px);
          font-weight: 600;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 200ms ease;
        }
        .swpb-link svg {
          width: clamp(11px, 1.1vw, 14px);
          height: clamp(11px, 1.1vw, 14px);
        }
        .swpb-card:hover .swpb-link { color: #444; }

        /* ── Mobile ──
           Below 750px the grid stacks to a single column, so .swpb-right's
           children no longer inherit height via grid stretch — they need
           their own height, given here as one continuous clamp (not two
           stepped tiers) so it eases down smoothly instead of jumping. */
        @media (max-width: 749px) {
          .swpb-grid { grid-template-columns: 1fr; }
          .swpb-top-row { grid-template-columns: 1fr 1fr; }
          .swpb-card--sm { height: clamp(140px, 40vw - 10px, 240px); }
          .swpb-card--wide { flex: none; height: clamp(140px, 40vw - 10px, 240px); }
          .swpb-content { width: 70%; }
          .swpb-card--sm .swpb-content { width: 70%; }
        }
        @media (max-width: 480px) {
          .swpb-top-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
