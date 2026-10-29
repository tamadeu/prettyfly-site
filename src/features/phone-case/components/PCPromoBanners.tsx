import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'promo-1',
    badge: 'UP TO 30% OFF SALE',
    heading: "Upgrade Your New\nPhone’s Look",
    cta: 'Shop Now',
    href: '/phone-case/shop?sort=best-selling',
    image: '/phone-case/banner/banner1.webp',
  },
  {
    id: 'promo-2',
    badge: 'Save Big on Styles!',
    heading: 'Find Your Perfect\nCase Today',
    cta: 'Shop Now',
    href: '/phone-case/shop',
    image: '/phone-case/banner/banner2.webp',
  },
];

export function PCPromoBanners() {
  return (
    <section className="pcpb-section">
      <div className="container-main">
        <div className="pcpb-grid">
          {banners.map((b) => (
            <div key={b.id} className="pcpb-card">

              {/* Full-card image — no background, image IS the card */}
              <div className="pcpb-img-wrap">
                <Image
                  src={b.image}
                  alt={b.heading.replace('\n', ' ')}
                  fill
                  className="pcpb-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 749px) 100vw, 50vw"
                />
              </div>

              {/* Content overlaid — left-aligned, vertically centred */}
              <div className="pcpb-content">
                <span className="pcpb-badge">{b.badge}</span>
                <h3 className="pcpb-heading">
                  {b.heading.split('\n').map((line, i) => (
                    <span key={i} style={{ display: 'block' }}>{line}</span>
                  ))}
                </h3>
                <Link href={b.href} className="pcpb-cta">
                  {b.cta}
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pcpb-section { background: #fff; }

        .pcpb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* Fixed 500px height — no gradient background */
        .pcpb-card {
          position: relative;
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Image fills the full card */
        .pcpb-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .pcpb-img {
          transition: transform 600ms ease;
        }
        .pcpb-card:hover .pcpb-img {
          transform: scale(1.04);
        }

        /* Content: absolute overlay, left-aligned, vertically centred */
        .pcpb-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 clamp(24px, 3.5vw, 44px);
        }

        .pcpb-badge {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: rgba(18, 18, 18, 1);
          margin-bottom: 12px;
          display: block;
        }

        .pcpb-heading {
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin: 0 0 22px;
          max-width: 320px;
        }

        .pcpb-cta {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          background: #fff;
          border: 1.5px solid #d0d0d0;
          padding: 10px 22px;
          border-radius: 4px;
          transition: background 220ms ease, border-color 220ms ease, color 220ms ease;
          white-space: nowrap;
        }
        .pcpb-cta:hover {
          background: #111;
          border-color: #111;
          color: #fff;
        }

        @media (max-width: 749px) {
          .pcpb-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .pcpb-card {
            height: clamp(260px, 75vw, 400px);
          }
        }
      `}</style>
    </section>
  );
}
