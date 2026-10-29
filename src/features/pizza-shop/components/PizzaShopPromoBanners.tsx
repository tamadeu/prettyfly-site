import Image from 'next/image';
import Link from 'next/link';

export function PizzaShopPromoBanners() {
  return (
    <section className="ps-pb-section">
      <div className="container-main">
        <div className="ps-pb-grid">

          {/* ── LEFT: Promo card ── */}
          <Link href="/pizza/shop" className="ps-pb-card" style={{ color: '#fff' }}>
            <div className="ps-pb-image-wrap">
              <Image
                src="/pizza/banner/banner1.webp"
                alt="Pizza is Our Favorite Food Group"
                fill
                className="ps-pb-image"
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 992px) 50vw, 100vw"
                quality={95}
              />
            </div>
            <div className="ps-pb-content">
              <h3 className="ps-pb-title">{'Pizza is Our\nFavorite Food Group'}</h3>
              <span className="ps-pb-subtitle">Save up to $199 on fast food!</span>
              <span
                className="ps-pb-cta"
                style={
                  {
                    backgroundColor: '#e84d1c',
                    color: '#fff',
                    '--ps-pb-cta-hover-bg': '#c73d12',
                  } as React.CSSProperties
                }
              >
                Shop Now
              </span>
            </div>
          </Link>

          {/* ── RIGHT: Image card ── */}
          <Link href="/pizza/shop" className="ps-pb-card" style={{ color: '#fff' }}>
            <div className="ps-pb-image-wrap">
              <Image
                src="/pizza/banner/banner2.webp"
                alt="For The Whole Family"
                fill
                className="ps-pb-image"
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 992px) 50vw, 100vw"
                quality={95}
              />
            </div>
            <div className="ps-pb-content">
              <span className="ps-pb-eyebrow">UP TO 20% OFF</span>
              <h3 className="ps-pb-title">{'For The\nWhole Family'}</h3>
              <span className="ps-pb-subtitle">Quality ingredients, every time.</span>
              <span
                className="ps-pb-cta"
                style={
                  {
                    backgroundColor: '#e84d1c',
                    color: '#fff',
                    '--ps-pb-cta-hover-bg': '#c73d12',
                  } as React.CSSProperties
                }
              >
                Shop Now
              </span>
            </div>
          </Link>

        </div>
      </div>

      <style>{`
        /* ── Mobile base ── */
        .ps-pb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .ps-pb-card {
          position: relative;
          display: block;
          text-decoration: none;
          border-radius: 12px;
          overflow: hidden;
          height: 420px;
        }

        .ps-pb-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .ps-pb-image {
          transition: transform 700ms ease;
        }
        .ps-pb-card:hover .ps-pb-image {
          transform: scale(1.04);
        }

        .ps-pb-content {
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

        .ps-pb-eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.4px;
          margin-bottom: 12px;
          line-height: 1;
          color: inherit;
          display: block;
        }

        .ps-pb-title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 14px;
          white-space: pre-line;
          letter-spacing: -0.2px;
          color: inherit;
        }

        .ps-pb-subtitle {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
          line-height: 1.5;
          color: inherit;
        }

        .ps-pb-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 30px;
          border-radius: 30px;
          width: fit-content;
          letter-spacing: 0.2px;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          transition: background-color 280ms ease, box-shadow 280ms ease, transform 280ms ease;
        }
        .ps-pb-cta:hover {
          background-color: var(--ps-pb-cta-hover-bg) !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.20);
        }

        /* ── ≥ 750px — tablet ── */
        @media (min-width: 750px) {
          .ps-pb-card { height: 460px; }
          .ps-pb-content { top: 40px; left: 40px; right: 40px; }
          .ps-pb-title { font-size: 26px; margin-bottom: 16px; }
          .ps-pb-subtitle { font-size: 15px; margin-bottom: 24px; }
          .ps-pb-cta { padding: 14px 32px; font-size: 16px; }
        }

        /* ── ≥ 992px — 2-col grid, 410px height ── */
        @media (min-width: 992px) {
          .ps-pb-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .ps-pb-card { height: 410px; }
          .ps-pb-content { top: 56px; left: 56px; right: 56px; max-width: 55%; }
          .ps-pb-eyebrow { font-size: 14px; margin-bottom: 14px; }
          .ps-pb-title { font-size: 30px; margin-bottom: 18px; }
          .ps-pb-subtitle { font-size: 15px; margin-bottom: 28px; }
          .ps-pb-cta { padding: 15px 34px; font-size: 16px; }
        }

        /* ── ≥ 1200px ── */
        @media (min-width: 1200px) {
          .ps-pb-content { top: 64px; left: 64px; right: 64px; }
          .ps-pb-title { font-size: 34px; letter-spacing: -0.4px; }
          .ps-pb-cta { padding: 15px 36px; font-size: 17px; }
        }
      `}</style>
    </section>
  );
}
