import Image from 'next/image';
import Link from 'next/link';

/* Ported 1:1 from CarAccessoriesHero.tsx (design/layout/animation/responsive
   behavior must stay pixel-identical per spec) — only copy, href, and image
   swapped for Socks. Class prefix renamed ca-hero-* -> sx-hero-*; every
   selector, breakpoint, and animation timing below is unchanged. */

export function SocksHero() {
  return (
    <section className="sx-hero">
      {/* Left panel — content */}
      <div className="sx-hero-left">
        <div className="sx-hero-content">
          <h1 className="sx-hero-title">
            Perfect Socks for<br />Every Step
          </h1>
          <p className="sx-hero-subtitle">
            Pair text with an image to focus on your chosen product, collection, or blog post.
            Add details on availability, style, or even provide a review.
          </p>
          <Link href="/shop" className="sx-hero-cta">
            Shop Now
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14} aria-hidden="true">
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right panel — image */}
      <div className="sx-hero-right">
        <Image
          src="/socks/hero-banner/hero-banner-1.webp"
          alt="Perfect Socks for Every Step"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 749px) 100vw, 50vw"
        />
      </div>

      <style>{`
        .sx-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 700px;
          width: 100%;
          overflow: hidden;
        }

        /* ── Left panel ── */
        .sx-hero-left {
          background-color: #f0f2f5;
          display: flex;
          align-items: center;
          padding: clamp(48px, 7vw, 96px) clamp(32px, 5vw, 88px);
        }

        .sx-hero-content {
          max-width: 520px;
        }

        .sx-hero-title {
          font-size: clamp(30px, 3.8vw, 54px);
          font-weight: 600;
          color: #111;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 24px;
        }

        .sx-hero-subtitle {
          font-size: clamp(13px, 1.15vw, 16px);
          color: #666;
          line-height: 1.75;
          margin: 0 0 36px;
          max-width: 420px;
        }

        .sx-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #111;
          color: #fff;
          font-size: clamp(14px, 1.2vw, 17px);
          font-weight: 600;
          padding: 16px 48px;
          text-decoration: none;
          border-radius: 3px;
          transition: background-color 220ms ease;
        }
        .sx-hero-cta:hover { background-color: #5b72d6; }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .sx-hero-content > * {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .sx-hero-content > .sx-hero-title {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Right panel ── */
        .sx-hero-right {
          position: relative;
          background-color: #4ecdc4;
          overflow: hidden;
        }

        /* ── ≥ 992px — align left edge with container-main ── */
        @media (min-width: 992px) {
          .sx-hero-left {
            padding-left: max(clamp(32px, 5vw, 88px), calc((100vw - 153rem) / 2 + 3rem));
          }
        }

        /* ── ≥ 1200px — wider container gutter (4 rem) ── */
        @media (min-width: 1200px) {
          .sx-hero-left {
            padding-left: max(clamp(32px, 5vw, 88px), calc((100vw - 153rem) / 2 + 4rem));
          }
        }

        /* ── Tablet (750–991 px) ── */
        @media (min-width: 750px) and (max-width: 991px) {
          .sx-hero { min-height: 580px; }
          .sx-hero-left { padding: 40px 32px; }
        }

        /* ── Mobile (≤749 px): stacked ── */
        @media (max-width: 749px) {
          .sx-hero {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .sx-hero-right {
            order: -1;
            height: clamp(240px, 58vw, 380px);
            position: relative;
          }
          .sx-hero-left {
            padding: clamp(36px, 8vw, 60px) clamp(20px, 5vw, 40px);
          }
          .sx-hero-content { max-width: 100%; }
          .sx-hero-subtitle { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
