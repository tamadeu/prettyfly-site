'use client';

import Image from 'next/image';
import Link from 'next/link';

const cards = [
  { id: 'shine', eyebrow: 'NEW ARRIVALS', title: 'Socks That Shine', image: '/socks/product-categories/product-categories-1.webp', href: '/shop' },
  { id: 'comfort', eyebrow: 'UP TO 70% OFF', title: 'Comfort for Every Step', image: '/socks/product-categories/product-categories-2.webp', href: '/shop' },
  { id: 'season', eyebrow: 'UP TO 50% OFF', title: 'Socks for Every Season', image: '/socks/product-categories/product-categories-3.webp', href: '/shop' },
];

export function SocksPromoGrid() {
  return (
    <section>
      <div className="container-main">
        <div className="sx-pg-grid">
          {cards.map((card) => (
            <Link key={card.id} href={card.href} className="sx-pg-card">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="sx-pg-img"
                style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                sizes="(max-width: 749px) 100vw, 33vw"
              />
              <div className="sx-pg-content">
                <span className="sx-pg-eyebrow">{card.eyebrow}</span>
                <h3 className="sx-pg-title">{card.title}</h3>
                <span className="sx-pg-btn">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .sx-pg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 750px) {
          .sx-pg-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .sx-pg-card {
          position: relative;
          display: flex;
          align-items: flex-end;
          height: clamp(300px, 40vw, 420px);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
        }
        .sx-pg-card:hover .sx-pg-img { transform: scale(1.06); }

        @media (min-width: 750px) {
          .sx-pg-card { height: 650px; }
        }

        .sx-pg-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          padding: 0 20px clamp(24px, 4vw, 36px);
        }
        .sx-pg-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .sx-pg-title {
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 18px;
        }
        .sx-pg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 26px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #111;
          border: 1.5px solid #fff;
          background-color: #fff;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .sx-pg-card:hover .sx-pg-btn {
          background-color: #000;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
