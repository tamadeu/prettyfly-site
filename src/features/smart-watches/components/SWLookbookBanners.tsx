import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 1,
    image: '/smart-watches/big-banner/big-banner1.webp',
    title: 'Craft Your Timepiece Story',
    href: '/smart-watches/shop?category=Luxury+Watches',
  },
  {
    id: 2,
    image: '/smart-watches/big-banner/big-banner2.webp',
    title: 'Your Next Favorite Watch',
    href: '/smart-watches/shop?category=Smart+Watch',
  },
];

export function SWLookbookBanners() {
  return (
    <section className="swlb-section">
      <div className="container-main">
        <div className="swlb-grid">
          {banners.map((b) => (
            <div key={b.id} className="swlb-card">

              {/* Image fills the full card — no background color */}
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="swlb-img"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(min-width: 992px) 50vw, 100vw"
              />

              {/* Text overlaid at the bottom */}
              <div className="swlb-info">
                <h3 className="swlb-title">{b.title}</h3>
                <Link href={b.href} className="swlb-cta">SHOP NOW</Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .swlb-section { width: 100%; }

        .swlb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* ── Card: full 710px, image fills everything, no background ── */
        .swlb-card {
          position: relative;
          height: 710px;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Image covers the full card */
        .swlb-img {
          transition: transform 550ms ease;
        }
        .swlb-card:hover .swlb-img {
          transform: scale(1.04);
        }

        /* Text overlaid at the bottom of the card */
        .swlb-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          padding: 28px 24px 36px;
        }
        .swlb-title {
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 700;
          color: #111;
          line-height: 1.25;
          margin: 0;
        }
        .swlb-cta {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 4px;
          letter-spacing: 1px;
          transition: color 200ms ease;
        }
        .swlb-cta:hover { color: #555; }

        /* ── Responsive ── */
        @media (max-width: 749px) {
          .swlb-grid { grid-template-columns: 1fr; gap: 20px; }
          .swlb-card { height: clamp(400px, 90vw, 580px); }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .swlb-card { height: 520px; }
        }
      `}</style>
    </section>
  );
}
