'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Ported 1:1 from JewelleryHero.tsx (Jewelry 1's `jwib-section` — text left,
   two absolutely-positioned overlapping images + rotating badge right).
   Class prefix jwib- → jz2ib-. Identical layout/typography/spacing/colors —
   the only intentional difference is a slightly smaller content-title font
   size, per instruction. */

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

function RotatingBadge() {
  return (
    <div className="jz2ib-badge" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="jz2ib-ring">
        <defs>
          <path
            id="jz2ib-cp"
            d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
          />
        </defs>
        <text
          fontSize="11.5"
          fill="#111"
          letterSpacing="1.6"
          fontFamily="Albert Sans, sans-serif"
          fontWeight="500"
        >
          <textPath href="#jz2ib-cp" startOffset="0%">
            ✦ JEWELRY STORE ✦ AMBAZ
          </textPath>
        </text>
      </svg>
      <div className="jz2ib-heart">
        <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" width="20" height="20">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
}

export function Jewelry2ImageBanner() {
  return (
    <section className="jz2ib-section">
      <div className="jz2ib-inner container-main">

        {/* ── LEFT: content ── */}
        <div className="jz2ib-content">
          <h1 className="jz2ib-heading">
            With Adore You Glow<br />Like Gold
          </h1>
          <p className="jz2ib-body">
            Pair text with an image to focus on your chosen product, collection,
            or blog post. Add details on availability, style, or even provide a
            review.
          </p>
          <Link href="/shop" className="jz2ib-cta">
            SHOP NOW
            <IconArrowRight size={14} />
          </Link>
        </div>

        {/* ── RIGHT: images + badge ── */}
        <div className="jz2ib-images">

          {/* Image 1 — 430×500px, top-left anchor */}
          <div className="jz2ib-img1">
            <Image
              src="/jewelry-2/img-with-text/img-with-text-1.webp"
              alt="Fine jewelry model"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(min-width: 992px) 430px, 60vw"
              priority
            />
          </div>

          {/* Image 2 — 320px wide, starts at midpoint of image 1, extends to section bottom */}
          <div className="jz2ib-img2">
            <Image
              src="/jewelry-2/img-with-text/img-with-text-2.webp"
              alt="Fine jewelry model"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(min-width: 992px) 320px, 50vw"
            />
          </div>

          {/* Rotating badge — inside top-right corner of image 1 */}
          <RotatingBadge />

        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .jz2ib-section {
          background: transparent;
          overflow: hidden;
        }

        /* ── Inner grid — stretch so images column fills full section height ── */
        .jz2ib-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          gap: 40px;
          min-height: 750px;
        }

        /* ── Left column — padding lives here, not on the grid ── */
        .jz2ib-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 60px;
          padding-bottom: 60px;
          padding-right: clamp(16px, 2.5vw, 40px);
        }
        .jz2ib-heading {
          font-size: clamp(28px, 3.4vw, 50px);
          font-weight: 700;
          color: #111;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
        }
        .jz2ib-body {
          font-size: clamp(13px, 1.1vw, 15px);
          color: #666;
          line-height: 1.75;
          margin: 0 0 36px;
          max-width: 440px;
        }
        .jz2ib-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          padding: 16px 36px;
          text-decoration: none;
          width: fit-content;
          transition: background-color 260ms ease;
        }
        .jz2ib-cta:hover { background: #7a4a55; }

        /* ── Right column — height driven by grid stretch ── */
        .jz2ib-images {
          position: relative;
        }

        /* Image 1 — 430×500px, top-left anchor */
        .jz2ib-img1 {
          position: absolute;
          left: -5px;
          top: 80px;
          width: 430px;
          height: 500px;
          overflow: hidden;
          z-index: 1;
        }

        /* Image 2 — starts below midpoint of img1, extends to section bottom */
        .jz2ib-img2 {
          position: absolute;
          right: 0;
          top: 290px;
          bottom: 0;
          width: 320px;
          overflow: hidden;
          z-index: 2;
        }

        /* ── Rotating badge — inside top-right corner of image 1 ── */
        .jz2ib-badge {
          position: absolute;
          top: 16px;
          left: 358px;
          width: 130px;
          height: 130px;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .jz2ib-ring {
          position: absolute;
          inset: 0;
          width: 130px;
          height: 130px;
          animation: jz2ibSpin 12s linear infinite;
        }
        .jz2ib-heart {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        @keyframes jz2ibSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes jz2ibFadeInDown {
          from { opacity: 0; transform: translate3d(0, -22px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .jz2ib-content > * {
          -webkit-animation-name: jz2ibFadeInDown;
          animation-name: jz2ibFadeInDown;
          -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .jz2ib-content > .jz2ib-heading {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        /* ── Tablet (750–991px) ── */
        @media (min-width: 750px) and (max-width: 991px) {
          .jz2ib-inner {
            gap: 24px;
            min-height: 460px;
          }
          .jz2ib-content {
            padding-top: 40px;
            padding-bottom: 40px;
          }
          .jz2ib-img1 { width: 340px; height: 400px; }
          .jz2ib-img2 { width: 260px; top: 232px; }
          .jz2ib-badge {
            top: 14px;
            left: 220px;
            width: 110px;
            height: 110px;
          }
          .jz2ib-ring { width: 110px !important; height: 110px !important; }
          .jz2ib-heading { font-size: clamp(24px, 4.2vw, 38px); }
        }

        /* ── Mobile (<750px) ── */
        @media (max-width: 749px) {
          .jz2ib-inner {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 0;
            min-height: auto;
          }
          .jz2ib-images {
            height: clamp(400px, 100vw, 500px);
            order: -1;
          }
          .jz2ib-img1 {
            width: 62%;
            height: 80%;
          }
          .jz2ib-img2 {
            width: 52%;
            top: 40%;
            bottom: 0;
          }
          .jz2ib-badge {
            top: 10px;
            left: calc(62% - 57px);
            width: 90px;
            height: 90px;
          }
          .jz2ib-ring { width: 90px !important; height: 90px !important; }
          .jz2ib-content {
            padding-top: 32px;
            padding-bottom: 40px;
            padding-right: 0;
          }
          .jz2ib-body { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
