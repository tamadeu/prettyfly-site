import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'b1',
    image: '/electronics store/banner/banner-5.webp',
    tag: 'UP TO 50% OFF',
    heading: 'Top Computers And Accessories',
    href: '/shop',
  },
  {
    id: 'b2',
    image: '/electronics store/banner/banner-6.webp',
    tag: 'TOP DEALS PRODUCT',
    heading: 'Upgrade Your Next Level Tech Today!',
    href: '/shop',
  },
];

export function ES2BannerCards() {
  return (
    <section className="es2bnr-section">
      <div className="container-main">
        <div className="es2bnr-grid">
          {banners.map((b) => (
            <Link key={b.id} href={b.href} className="es2bnr-card">

              {/* Full-bleed background image */}
              <Image
                src={b.image}
                alt={b.heading}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 749px) 100vw, 50vw"
              />

              {/* Text overlay â€” left side */}
              <div className="es2bnr-content">
                <span className="es2bnr-tag">{b.tag}</span>
                <h3 className="es2bnr-heading">{b.heading}</h3>
                <span className="es2bnr-cta">SHOP NOW</span>
              </div>

            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .es2bnr-section { width: 100%; }

        /* â”€â”€ Two-column grid â”€â”€ */
        .es2bnr-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* â”€â”€ Card â”€â”€ */
        .es2bnr-card {
          position: relative;
          height: 370px;
          border-radius: 14px;
          overflow: hidden;
          display: block;
          text-decoration: none;
        }

        /* â”€â”€ Content overlay â€” anchored to top-left â”€â”€ */
        .es2bnr-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: clamp(24px, 2.8vw, 44px);
          /* Confine text to left ~50% so it doesn't overlap the product image */
          width: 52%;
          z-index: 2;
        }

        /* â”€â”€ Tag â”€â”€ */
        .es2bnr-tag {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(18, 18, 18);
          margin-bottom: 14px;
          display: block;
          line-height: 1;
        }

        /* â”€â”€ Heading â”€â”€ */
        .es2bnr-heading {
          font-size: clamp(20px, 1.8vw, 26px);
          font-weight: 700;
          color: #111;
          line-height: 1.3;
          margin: 0 0 22px;
        }

        /* â”€â”€ "SHOP NOW" CTA â”€â”€ */
        .es2bnr-cta {
          display: inline-block;
          font-size: 16px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(18, 18, 18);
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: rgba(18, 18, 18);
          text-decoration-thickness: 1.5px;
          transition: color 200ms ease;
        }
        .es2bnr-card:hover .es2bnr-cta { color: #2b6be6; }

        /* â”€â”€ Tablet: same 2-col â”€â”€ */
        @media (min-width: 750px) and (max-width: 991px) {
          .es2bnr-card { height: 300px; }
          .es2bnr-content { width: 55%; }
        }

        /* â”€â”€ Mobile: stack vertically â”€â”€ */
        @media (max-width: 749px) {
          .es2bnr-grid { grid-template-columns: 1fr; }
          .es2bnr-card { height: clamp(220px, 55vw, 300px); }
          .es2bnr-content { width: 60%; padding: 20px 22px; }
          .es2bnr-heading { font-size: clamp(16px, 4.5vw, 20px); margin-bottom: 14px; }
          .es2bnr-tag { font-size: 12px; margin-bottom: 10px; }
        }
      `}</style>
    </section>
  );
}
