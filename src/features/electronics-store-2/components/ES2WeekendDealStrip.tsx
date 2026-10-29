import Image from 'next/image';
import Link from 'next/link';

/* ── Thumbnail data ── */

const thumbnails = [
  { src: '/electronics store/products/product-3.webp',  alt: 'Bluetooth Speaker' },
  { src: '/electronics store/products/product-7.webp',  alt: 'Earphones Case' },
  { src: '/electronics store/products/product-9.webp',  alt: 'Gaming Mouse' },
];

/* ── Component ── */

export function ES2WeekendDealStrip() {
  return (
    <section className="es2wd-section">
      <div className="container-main es2wd-inner">

        {/* LEFT: product thumbnails */}
        <div className="es2wd-thumbs">
          {thumbnails.map((t) => (
            <div key={t.src} className="es2wd-thumb-wrap">
              <Image
                src={t.src}
                alt={t.alt}
                width={70}
                height={70}
                style={{ objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />
            </div>
          ))}
        </div>

        {/* CENTER: deal text */}
        <div className="es2wd-deal">
          <p className="es2wd-deal-heading">Special Weekend Deal</p>
          <p className="es2wd-deal-sub">Save an Extra 20%!</p>
          <Link href="/shop" className="es2wd-deal-link">
            Shop Now ›
          </Link>
        </div>

        {/* RIGHT: divider + new arrivals block */}
        <div className="es2wd-right">
          <div className="es2wd-divider" aria-hidden="true" />
          <div className="es2wd-new-arrivals">
            <div className="es2wd-arrival-img-wrap">
              <Image
                src="/electronics store/banner/banner-5.webp"
                alt="New Arrivals"
                width={100}
                height={70}
                style={{ objectFit: 'cover', borderRadius: '6px', display: 'block' }}
              />
            </div>
            <div className="es2wd-arrival-text">
              <p className="es2wd-arrival-title">New Arrivals</p>
              <p className="es2wd-arrival-desc">
                Discover new arrivals with a 15% discount on fresh products!
              </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .es2wd-section {
          background: #0f1623;
          padding: clamp(16px, 2vw, 24px) 0;
        }

        /* Inner grid */
        .es2wd-inner {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: clamp(20px, 3vw, 48px);
        }

        /* Thumbnails */
        .es2wd-thumbs {
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
        }
        .es2wd-thumb-wrap {
          width: 70px;
          height: 70px;
          border-radius: 8px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        /* Deal text */
        .es2wd-deal {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .es2wd-deal-heading {
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px 0;
        }
        .es2wd-deal-sub {
          font-size: clamp(13px, 1.1vw, 15px);
          color: rgba(255, 255, 255, 0.75);
          margin: 0 0 10px 0;
        }
        .es2wd-deal-link {
          font-size: 14px;
          font-weight: 600;
          color: #2b6be6;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .es2wd-deal-link:hover {
          color: #5589ee;
        }

        /* Right block */
        .es2wd-right {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .es2wd-divider {
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.15);
          margin-right: clamp(16px, 2vw, 32px);
          flex-shrink: 0;
        }
        .es2wd-new-arrivals {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .es2wd-arrival-img-wrap {
          flex-shrink: 0;
          width: 100px;
          height: 70px;
          border-radius: 6px;
          overflow: hidden;
        }
        .es2wd-arrival-title {
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px 0;
        }
        .es2wd-arrival-desc {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          max-width: 180px;
          margin: 0;
          line-height: 1.5;
        }

        /* Mobile */
        @media (max-width: 749px) {
          .es2wd-inner {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
            gap: 20px;
          }
          .es2wd-thumbs {
            justify-content: center;
          }
          .es2wd-divider {
            display: none;
          }
          .es2wd-right {
            justify-content: center;
          }
          .es2wd-new-arrivals {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .es2wd-arrival-desc {
            max-width: 240px;
          }
          .es2wd-deal {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
