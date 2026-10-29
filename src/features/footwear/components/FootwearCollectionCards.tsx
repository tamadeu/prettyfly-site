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

const cards = [
  { id: 'c1', title: 'New Arrival',     image: '/footwear/banner/banner-1.webp', href: '/shop?sort=newest' },
  { id: 'c2', title: 'Limited Edition', image: '/footwear/banner/banner-2.webp', href: '/shop' },
  { id: 'c3', title: 'Casual Comfort',  image: '/footwear/banner/banner-3.webp', href: '/shop?category=Casuals' },
];

export function FootwearCollectionCards() {
  return (
    <section>
      <div className="container-main">
        <div className="fwcc-track">
          {cards.map((card) => (
            <Link key={card.id} href={card.href} className="fwcc-card">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="fwcc-img"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 749px) 80vw, 33vw"
              />
              <div className="fwcc-overlay" />
              <div className="fwcc-content">
                <h3 className="fwcc-title">{card.title}</h3>
                <span className="fwcc-link">
                  Shop Collection
                  <IconArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .fwcc-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          height: 620px;
        }
        .fwcc-card {
          position: relative;
          display: block;
          height: 100%;
          border-radius: 6px;
          overflow: hidden;
          text-decoration: none;
        }
        .fwcc-img { transition: transform 600ms ease; }
        .fwcc-card:hover .fwcc-img { transform: scale(1.06); }
        .fwcc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0) 70%);
          z-index: 1;
        }
        .fwcc-content {
          position: absolute;
          left: 0; right: 0; bottom: 28px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          padding: 0 16px;
        }
        .fwcc-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }
        .fwcc-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 17px;
          font-weight: 500;
          color: #fff;
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(255,255,255,0.85);
          transition: gap 200ms ease, opacity 200ms ease;
        }
        .fwcc-card:hover .fwcc-link { gap: 12px; }

        @media (max-width: 991px) {
          .fwcc-track { height: 520px; }
          .fwcc-title { font-size: 26px; }
        }
        @media (max-width: 749px) {
          .fwcc-track {
            display: flex;
            height: auto;
            grid-template-columns: none;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 16px;
            padding-bottom: 6px;
            scrollbar-width: none;
          }
          .fwcc-track::-webkit-scrollbar { display: none; }
          .fwcc-card {
            flex: 0 0 82%;
            scroll-snap-align: center;
            height: clamp(360px, 92vw, 460px);
          }
        }
      `}</style>
    </section>
  );
}
