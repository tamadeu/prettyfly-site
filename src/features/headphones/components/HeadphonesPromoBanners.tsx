import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'banner-1',
    badge: 'UP TO 30% OFF',
    heading: 'Elevate Your Sound Today',
    cta: 'Shop Now',
    href: '/shop',
    image: '/headphones/banner/banner1.webp',
  },
  {
    id: 'banner-2',
    badge: 'LIMITED TIME OFFER',
    heading: 'Shop Premium Headphone Deals',
    cta: 'Shop Now',
    href: '/shop',
    image: '/headphones/banner/banner2.webp',
  },
];

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14} aria-hidden="true">
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function HeadphonesPromoBanners() {
  return (
    <section className="hp-pb-section">
      <div className="container-main">
        <div className="hp-pb-grid">
          {banners.map((b) => (
            <div key={b.id} className="hp-pb-card">

              {/* Background image */}
              <Image
                src={b.image}
                alt={b.heading}
                fill
                className="hp-pb-img"
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                sizes="(max-width: 749px) 100vw, 50vw"
              />

              {/* Left-to-right dark overlay */}
              <div className="hp-pb-overlay" />

              {/* Content — top-left */}
              <div className="hp-pb-content">
                <span className="hp-pb-badge">{b.badge}</span>
                <h3 className="hp-pb-heading">{b.heading}</h3>
                <Link href={b.href} className="hp-pb-cta">
                  {b.cta}
                  <IconArrowRight />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hp-pb-section { background-color: #fff; }

        .hp-pb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .hp-pb-card {
          position: relative;
          height: 470px;
          border-radius: 14px;
          overflow: hidden;
          background-color: #0a0a0a;
        }

        .hp-pb-img {
          transition: transform 600ms ease;
        }
        .hp-pb-card:hover .hp-pb-img {
          transform: scale(1.04);
        }

        .hp-pb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.60) 40%,
            rgba(0, 0, 0, 0.20) 75%,
            rgba(0, 0, 0, 0.08) 100%
          );
          z-index: 1;
          transition: background 400ms ease;
        }
        .hp-pb-card:hover .hp-pb-overlay {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.92) 0%,
            rgba(0, 0, 0, 0.68) 40%,
            rgba(0, 0, 0, 0.28) 75%,
            rgba(0, 0, 0, 0.10) 100%
          );
        }

        .hp-pb-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 36px;
        }

        .hp-pb-badge {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hp-pb-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(22px, 2.2vw, 32px);
          font-weight: 600;
          color: #fff;
          line-height: 1.25;
          margin: 0 0 32px;
          max-width: 260px;
        }

        .hp-pb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          background-color: #111;
          padding: 12px 22px;
          border-radius: 4px;
          transition: background-color 220ms ease;
          white-space: nowrap;
        }
        .hp-pb-cta:hover { background-color: #333; }

        @media (max-width: 749px) {
          .hp-pb-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .hp-pb-card {
            height: clamp(280px, 70vw, 380px);
          }
          .hp-pb-content {
            padding: clamp(24px, 5vw, 36px);
          }
        }
      `}</style>
    </section>
  );
}
