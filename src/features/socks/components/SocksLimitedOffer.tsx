'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const thumbs = [
  '/socks/products/product-1.webp',
  '/socks/products/product-2.webp',
  '/socks/products/product-3.webp',
  '/socks/products/product-4.webp',
];

export function SocksLimitedOffer() {
  return (
    <section>
      <div className="container-main">
        {/* Mint panel — inset within container-main, not full-bleed */}
        <div className="sx-lto-panel">
          {/* Dashed frame — inset further within the panel */}
          <div className="sx-lto-frame">
            <div className="sx-lto-grid">
              <div className="sx-lto-text">
                <span className="sx-lto-eyebrow">Up to 50% off!</span>
                <h2 className="sx-lto-heading">Limited Time Offer</h2>
                <Link
                  href="/shop"
                  className="sx-lto-cta"
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f0f0f0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; }}
                >
                  Shop Now
                  <IconArrowRight size={20} />
                </Link>
              </div>

              <div className="sx-lto-thumbs">
                {thumbs.map((src, i) => (
                  <div key={i} className="sx-lto-thumb">
                    <Image src={src} alt={`Sock product ${i + 1}`} fill style={{ objectFit: 'contain' }} sizes="150px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sx-lto-panel {
          background-color: #b7e4c7;
          padding: clamp(28px, 4vw, 44px);
        }
        .sx-lto-frame {
          border: 1.5px dashed rgba(20, 46, 30, 0.4);
          padding: clamp(24px, 4vw, 40px);
          box-sizing: border-box;
        }
        .sx-lto-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: clamp(24px, 3vw, 36px);
        }
        .sx-lto-text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sx-lto-eyebrow {
          display: block;
          font-size: clamp(14px, 1.8vw, 24px);
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #3a5c46;
          margin-bottom: clamp(8px, 1vw, 12px);
        }
        .sx-lto-heading {
          font-size: clamp(24px, 4.2vw, 40px);
          font-weight: 700;
          color: #12190f;
          margin-bottom: clamp(18px, 2.5vw, 26px);
          line-height: 1.2;
        }
        .sx-lto-cta {
          display: inline-flex;
          align-items: center;
          gap: clamp(7px, 1vw, 10px);
          background-color: #fff;
          color: #111;
          font-size: clamp(15px, 1.6vw, 20px);
          font-weight: 500;
          padding: clamp(11px, 1.6vw, 13px) clamp(20px, 3vw, 26px);
          text-decoration: none;
          transition: background-color 250ms ease;
          white-space: nowrap;
        }
        .sx-lto-cta svg {
          width: clamp(15px, 1.8vw, 20px);
          height: clamp(15px, 1.8vw, 20px);
          flex-shrink: 0;
        }

        /* Fixed aspect-ratio squares that scale continuously with the
           viewport via a single clamp() — no stepped breakpoint jumps —
           so sizing can never be distorted by a stretching parent. */
        .sx-lto-thumbs {
          display: flex;
          gap: clamp(8px, 1.4vw, 14px);
        }
        .sx-lto-thumb {
          position: relative;
          flex-shrink: 0;
          width: clamp(52px, 12vw, 150px);
          height: clamp(52px, 12vw, 150px);
          background-color: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          padding: clamp(6px, 1vw, 12px);
          box-sizing: border-box;
        }

        @media (min-width: 992px) {
          .sx-lto-grid {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: left;
          }
          .sx-lto-text { align-items: flex-start; }
          .sx-lto-heading { margin-bottom: 22px; }
        }
      `}</style>
    </section>
  );
}
