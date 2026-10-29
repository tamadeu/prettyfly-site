import Image from 'next/image';
import Link from 'next/link';

export function PizzaShopVideoBanner() {
  return (
    <section className="ps-vb">
      <div className="ps-vb-bg">
        <Image
          src="/pizza/full-width-banner/banner3.webp"
          alt="Pizza experience"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="ps-vb-overlay" />
      </div>

      <div className="ps-vb-content container-main">
        <span className="ps-vb-badge">FRESH DAILY</span>
        <h2 className="ps-vb-heading">Taste the Real Pizza Experience</h2>
        <p className="ps-vb-sub">Stone-baked with the finest ingredients, crafted fresh every single day.</p>
        <Link href="/pizza/shop" className="ps-vb-cta">
          Order Now
          <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </Link>
      </div>

      <style>{`
        .ps-vb {
          position: relative;
          height: clamp(320px, 50vw, 580px);
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .ps-vb-bg {
          position: absolute;
          inset: 0;
        }
        .ps-vb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.62);
        }
        .ps-vb-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: clamp(14px, 2vw, 22px);
        }
        .ps-vb-badge {
          display: inline-block;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e84d1c;
          border: 1px solid #e84d1c;
          border-radius: 4px;
          padding: 5px 14px;
        }
        .ps-vb-heading {
          font-size: clamp(26px, 4vw, 54px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.2;
          max-width: 700px;
        }
        .ps-vb-sub {
          font-size: clamp(13px, 1.2vw, 17px);
          color: rgba(255,255,255,0.7);
          margin: 0;
          max-width: 480px;
        }
        .ps-vb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e84d1c;
          color: #fff;
          font-size: clamp(13px, 1.1vw, 16px);
          font-weight: 600;
          padding: clamp(10px, 1.2vw, 14px) clamp(22px, 2.5vw, 36px);
          border-radius: 9999px;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .ps-vb-cta:hover { background: #c73c12; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}
