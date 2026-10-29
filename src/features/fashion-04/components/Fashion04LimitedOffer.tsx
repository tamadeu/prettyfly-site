'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function Fashion04LimitedOffer() {
  return (
    <section>
      <div className="container-main">
        <div className="f4lo-grid">
          {/* Left — orange copy panel */}
          <div className="f4lo-panel">
            <span className="f4lo-eyebrow">Up to 50% Off!</span>
            <h2 className="f4lo-title">Limited Time Offer</h2>
            <Link href="/shop" className="f4lo-btn">
              Shop Now
              <IconChevronRight size={16} />
            </Link>
          </div>

          {/* Right — image */}
          <div className="f4lo-image" style={{ position: 'relative' }}>
            <Image
              src="/fashion-04/img-with-text/Limited_time_offer.webp"
              alt="Limited Time Offer"
              fill
              className="f4lo-img"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(min-width: 992px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>

      <style>{`
        .f4lo-grid {
          display: grid;
          grid-template-columns: 1fr;
          overflow: hidden;
        }
        .f4lo-panel {
          background-color: #fc4f29;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(40px, 7vw, 72px) 24px;
          gap: 16px;
        }
        .f4lo-eyebrow {
          font-size: clamp(13px, 1.4vw, 16px);
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
        }
        .f4lo-title {
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
        }
        .f4lo-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #fff;
          color: #1a1a1a;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 30px;
          border-radius: 40px;
          text-decoration: none;
          margin-top: 8px;
          transition: transform 250ms ease, background-color 250ms ease, color 250ms ease;
        }
        .f4lo-btn:hover {
          background-color: #111;
          color: #fff;
          transform: translateY(-2px);
        }

        .f4lo-image {
          width: 100%;
          height: clamp(280px, 60vw, 380px);
          overflow: hidden;
          background-color: #ececec;
        }
        .f4lo-img { transition: transform 700ms ease; }
        .f4lo-grid:hover .f4lo-img { transform: scale(1.04); }

        @media (min-width: 992px) {
          .f4lo-grid { grid-template-columns: 1fr 1fr; }
          .f4lo-panel { height: 380px; padding: 40px; }
          .f4lo-image { height: 380px; }
        }
      `}</style>
    </section>
  );
}
