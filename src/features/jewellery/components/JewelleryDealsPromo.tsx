'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

export function JewelleryDealsPromo() {
  return (
    <section className="jwdp-section">

      {/* Full-width image — no overlay */}
      <div className="jwdp-img-wrap">
        <Image
          src="/jewelry/img-with-text/img-with-text1.webp"
          alt="Deals of the day"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          sizes="100vw"
        />
      </div>

      {/* Text content overlaid on left side */}
      <div className="container-main jwdp-overlay">
        <div className="jwdp-content">
          <h2 className="jwdp-heading">Deals of the day</h2>
          <p className="jwdp-subtitle">
            Pair text with an image to focus on your chosen product,
            collection, or blog post.
          </p>
          <p className="jwdp-offer">Offer closed!</p>
          <Link href="/shop" className="jwdp-cta">
            SHOP NOW
            <IconArrowRight />
          </Link>
        </div>
      </div>

      <style>{`
        .jwdp-section {
          position: relative;
          height: 550px;
          overflow: hidden;
        }

        /* Image fills the entire section */
        .jwdp-img-wrap {
          position: absolute;
          inset: 0;
        }

        /* Content sits on top of the image */
        .jwdp-overlay {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .jwdp-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
          max-width: 440px;
        }
        .jwdp-heading {
          font-size: clamp(26px, 3.2vw, 46px);
          font-weight: 700;
          color: #111;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .jwdp-subtitle {
          font-size: clamp(13px, 1.1vw, 15px);
          color: #555;
          line-height: 1.65;
          margin: 0;
        }
        .jwdp-offer {
          font-size: clamp(16px, 1.6vw, 20px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .jwdp-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 15px 34px;
          text-decoration: none;
          width: fit-content;
          transition: background-color 260ms ease;
        }
        .jwdp-cta:hover { background: #b89b6e; }

        /* ── Mobile ── */
        @media (max-width: 749px) {
          .jwdp-section { height: clamp(320px, 80vw, 440px); }
          .jwdp-content { max-width: 55%; gap: 12px; }
          .jwdp-subtitle { display: none; }
        }

        /* ── Tablet ── */
        @media (min-width: 750px) and (max-width: 991px) {
          .jwdp-section { height: 420px; }
          .jwdp-content { max-width: 400px; }
        }
      `}</style>
    </section>
  );
}
