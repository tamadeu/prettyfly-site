import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'banner-1',
    badge: 'NEW ARRIVALS',
    heading: 'Essential Auto Parts for Every Vehicle',
    cta: 'Shop Now',
    href: '/car-accessories/shop?category=Auto%20Parts',
    image: '/car-accessories/banner/banner1.webp',
  },
  {
    id: 'banner-2',
    badge: 'UP TO 50% OFF SALE',
    heading: 'Trusted Parts for Speed & Power',
    cta: 'Shop Now',
    href: '/car-accessories/shop?sort=best-selling',
    image: '/car-accessories/banner/banner2.webp',
  },
];

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14} aria-hidden="true">
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function CarAccessoriesPromoBanners() {
  return (
    <section className="ca-pb-section">
      <div className="container-main">
        <div className="ca-pb-grid">
          {banners.map((b) => (
            <div key={b.id} className="ca-pb-card">

              {/* Background image — positioned right so car shows in right half */}
              <Image
                src={b.image}
                alt={b.heading}
                fill
                className="ca-pb-img"
                style={{ objectFit: 'cover', objectPosition: 'right center' }}
                sizes="(max-width: 749px) 100vw, 50vw"
              />

              {/* Left-to-right dark overlay — keeps content area readable */}
              <div className="ca-pb-overlay" />

              {/* Content — top-left */}
              <div className="ca-pb-content">
                <span className="ca-pb-badge">{b.badge}</span>
                <h3 className="ca-pb-heading">{b.heading}</h3>
                <Link href={b.href} className="ca-pb-cta">
                  {b.cta}
                  <IconArrowRight />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ca-pb-section { background-color: #fff; }

        /* ── Two equal columns ── */
        .ca-pb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        /* ── Individual banner card ── */
        .ca-pb-card {
          position: relative;
          height: 470px;
          border-radius: 14px;
          overflow: hidden;
          background-color: #0a0a0a;
        }

        /* ── Image: subtle zoom on hover ── */
        .ca-pb-img {
          transition: transform 600ms ease;
        }
        .ca-pb-card:hover .ca-pb-img {
          transform: scale(1.04);
        }

        /* ── Overlay: dark on the left, fades to transparent on the right ── */
        .ca-pb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.90) 0%,
            rgba(0, 0, 0, 0.65) 40%,
            rgba(0, 0, 0, 0.25) 75%,
            rgba(0, 0, 0, 0.10) 100%
          );
          z-index: 1;
          transition: background 400ms ease;
        }
        .ca-pb-card:hover .ca-pb-overlay {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.92) 0%,
            rgba(0, 0, 0, 0.70) 40%,
            rgba(0, 0, 0, 0.30) 75%,
            rgba(0, 0, 0, 0.12) 100%
          );
        }

        /* ── Content block: anchored to top-left ── */
        .ca-pb-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 36px 36px;
        }

        /* ── Eyebrow badge: plain white uppercase, no pill ── */
        .ca-pb-badge {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        /* ── Heading: serif, large, white ── */
        .ca-pb-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(22px, 2.2vw, 32px);
          font-weight: 600;
          color: #fff;
          line-height: 1.25;
          margin: 0 0 32px;
          max-width: 260px;
        }

        /* ── CTA: solid blue button ── */
        .ca-pb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          background-color: #5b72d6;
          padding: 12px 22px;
          border-radius: 4px;
          transition: background-color 220ms ease;
          white-space: nowrap;
        }
        .ca-pb-cta:hover { background-color: #4a62c8; }

        /* ── Mobile: single column, shorter height ── */
        @media (max-width: 749px) {
          .ca-pb-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ca-pb-card {
            height: clamp(280px, 70vw, 380px);
          }
          .ca-pb-content {
            padding: clamp(24px, 5vw, 36px);
          }
        }
      `}</style>
    </section>
  );
}
