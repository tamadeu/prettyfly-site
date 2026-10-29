import Image from 'next/image';
import Link from 'next/link';

/* ── Category Card Data ── */

const categories = [
  {
    id: 1,
    heading: 'Accessories',
    links: ['Laptop', 'Speaker', 'Home page', 'Electronics'],
    image: '/electronics store/product-categories/product-categories-1.webp',
    shopHref: '/shop',
  },
  {
    id: 2,
    heading: 'Laptop',
    links: ['Electronics', 'Home page', 'Speaker', 'Accessories'],
    image: '/electronics store/product-categories/product-categories-2.webp',
    shopHref: '/shop',
  },
  {
    id: 3,
    heading: 'Speaker',
    links: ['Electronics', 'Home page', 'Laptop', 'Accessories'],
    image: '/electronics store/product-categories/product-categories-3.webp',
    shopHref: '/shop',
  },
];

/* ── Component ── */

export function ES2CategoryCards() {
  return (
    <section className="es2cc-section">
      <div className="container-main">
        <div className="es2cc-grid">
          {categories.map((cat, cardIdx) => (
            <div key={cat.id} className="es2cc-card">
              {/* Left: text content */}
              <div className="es2cc-card-left">
                <h3 className="es2cc-heading">{cat.heading}</h3>
                <ul className="es2cc-links-list">
                  {cat.links.map((link, linkIdx) => (
                    <li key={link}>
                      <Link
                        href="/shop"
                        className="es2cc-link"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={cat.shopHref} className="es2cc-shop-link">
                  Shop Now &nbsp;&raquo;
                </Link>
              </div>

              {/* Right: product image */}
              <div className="es2cc-card-right">
                <Image
                  src={cat.image}
                  alt={cat.heading}
                  width={210}
                  height={210}
                  style={{ objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .es2cc-section {
          padding-block: clamp(36px, 5vw, 60px);
          width: 100%;
        }

        /* 3-column grid desktop */
        .es2cc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Card */
        .es2cc-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 28px 24px 28px 28px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          height: 255px;
        }

        /* Left side */
        .es2cc-card-left {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
          height: 100%;
          justify-content: space-between;
        }

        .es2cc-heading {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0 0 14px 0;
          line-height: 1.2;
        }

        .es2cc-links-list {
          list-style: none;
          padding: 0;
          margin: 0 0 auto 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .es2cc-link {
          font-size: 16px;
          color: #444;
          display: block;
          text-decoration: none;
          line-height: 1.4;
          transition: color 200ms ease;
        }
        .es2cc-link:hover {
          color: #2b6be6;
        }

        .es2cc-shop-link {
          display: inline-block;
          font-size: 16px;
          font-weight: 700;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          margin-top: 18px;
          letter-spacing: 0.01em;
          transition: color 200ms ease;
        }
        .es2cc-shop-link:hover {
          color: #2b6be6;
        }

        /* Right side: image */
        .es2cc-card-right {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Tablet: 2 columns */
        @media (min-width: 750px) and (max-width: 991px) {
          .es2cc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 749px) {
          .es2cc-grid {
            grid-template-columns: 1fr;
          }
          .es2cc-card {
            padding: 20px;
          }
          .es2cc-card-right img {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
    </section>
  );
}
