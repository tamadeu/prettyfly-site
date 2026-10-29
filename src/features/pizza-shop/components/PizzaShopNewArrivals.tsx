import Image from 'next/image';
import Link from 'next/link';
import { pizzaProducts } from '@/data/pizza-products';

const circleImgs = pizzaProducts
  .filter((p) => p.tags.includes('new-arrivals'))
  .slice(0, 4)
  .map((p) => ({ src: p.images[0]?.src || '', alt: p.name }));

export function PizzaShopNewArrivals() {
  return (
    <section className="ps-na container-main">
      {/* Left panel */}
      <div className="ps-na-panel">
        <span className="ps-na-badge">New Arrivals</span>
        <p className="ps-na-text">
          Discover new arrivals with a 20% discount on featured products.
        </p>
        <div className="ps-na-circles">
          {circleImgs.map((img, i) => (
            <div key={i} className="ps-na-circle">
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="ps-na-panel ps-na-panel--right">
        <span className="ps-na-badge ps-na-badge--alt">Special Weekend Deal</span>
        <p className="ps-na-text">Save on Extra 35%</p>
        <Link href="/pizza/shop" className="ps-na-link">
          Shop Now
          <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </Link>
      </div>

      <style>{`
        .ps-na {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(12px, 2vw, 20px);
        }
        .ps-na-panel {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: clamp(20px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.5vw, 18px);
          transition: border-color 0.25s ease;
        }
        .ps-na-panel:hover { border-color: #e84d1c; }
        .ps-na-badge {
          display: inline-block;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #e84d1c;
          border: 1px solid #e84d1c;
          border-radius: 4px;
          padding: 4px 10px;
          width: fit-content;
        }
        .ps-na-badge--alt { color: #fff; border-color: #fff; }
        .ps-na-text {
          font-size: clamp(13px, 1.2vw, 16px);
          color: rgba(255,255,255,0.75);
          margin: 0;
          line-height: 1.55;
        }
        .ps-na-circles {
          display: flex;
          gap: clamp(8px, 1.2vw, 14px);
          flex-wrap: wrap;
        }
        .ps-na-circle {
          position: relative;
          width: clamp(48px, 6vw, 64px);
          height: clamp(48px, 6vw, 64px);
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #2a2a2a;
          flex-shrink: 0;
          transition: border-color 0.2s ease;
        }
        .ps-na-circle:hover { border-color: #e84d1c; }
        .ps-na-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #e84d1c;
          font-size: clamp(13px, 1.2vw, 16px);
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .ps-na-link:hover { gap: 10px; }
        .ps-na-panel--right {
          justify-content: center;
        }
        @media (max-width: 749px) {
          .ps-na { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
