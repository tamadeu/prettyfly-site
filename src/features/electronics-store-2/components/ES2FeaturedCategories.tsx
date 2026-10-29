import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} style={{ flexShrink: 0 }}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const categories = [
  { id: 'tv',        label: 'Television',  image: '/electronics store/featured-categories/featured-categories-1.avif',  href: '/shop?category=Television'  },
  { id: 'laptop',    label: 'Laptop',       image: '/electronics store/featured-categories/featured-categories-2.webp',  href: '/shop?category=Laptop'       },
  { id: 'speaker',   label: 'Speaker',      image: '/electronics store/featured-categories/featured-categories-3.webp',  href: '/shop?category=Speaker'      },
  { id: 'watch',     label: 'Smart Watch',  image: '/electronics store/featured-categories/featured-categories-4.avif',  href: '/shop?category=Smart+Watch'  },
  { id: 'headphone', label: 'headphones',   image: '/electronics store/featured-categories/featured-categories-5.avif',  href: '/shop?category=Headphone'    },
  { id: 'phonecase', label: 'Phone Case',   image: '/electronics store/featured-categories/featured-categories-6.webp',  href: '/shop?category=Phone+Case'   },
  { id: 'gaming',    label: 'Gaming',       image: '/electronics store/featured-categories/featured-categories-7.webp',  href: '/shop?category=Accessories'  },
  { id: 'elec',      label: 'Electronics',  image: '/electronics store/featured-categories/featured-categories-8.webp',  href: '/shop?category=Electronics'  },
  { id: 'camera',    label: 'Camera',       image: '/electronics store/featured-categories/featured-categories-9.avif',  href: '/shop?category=Electronics'  },
  { id: 'pod',       label: 'Pod Store',    image: '/electronics store/featured-categories/featured-categories-10.avif', href: '/shop'                        },
];

export function ES2FeaturedCategories() {
  return (
    <section className="es2fc-section">
      <div className="container-main">

        {/* ── Header row ── */}
        <div className="es2fc-header">
          <h2 className="es2fc-heading">Featured Categories</h2>
          <Link href="/shop" className="es2fc-view-all">
            View All Categories <IconArrowRight size={16} />
          </Link>
        </div>

        {/* ── Grid ── */}
        <div className="es2fc-grid">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.href} className="es2fc-card">
              <div className="es2fc-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 749px) 33vw, (max-width: 991px) 25vw, 20vw"
                />
              </div>
              <span className="es2fc-label">{cat.label}</span>
            </Link>
          ))}
        </div>

      </div>

      <style>{`
        .es2fc-section { width: 100%; }

        /* ── Header ── */
        .es2fc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .es2fc-heading {
          font-size: clamp(24px, 2.4vw, 30px);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.2px;
        }
        .es2fc-view-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          font-weight: 500;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: #111;
          text-decoration-thickness: 2px;
          transition: color 200ms ease, text-decoration-color 200ms ease;
          white-space: nowrap;
        }
        .es2fc-view-all:hover {
          color: #2b6be6;
          text-decoration-color: #2b6be6;
        }

        /* ── 5-col grid ── */
        .es2fc-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        /* ── Card ── */
        .es2fc-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 28px 20px 22px;
          transition: border-color 250ms ease, box-shadow 250ms ease;
        }
        .es2fc-card:hover {
          border-color: transparent;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
        }

        /* ── Image area — square, fill the card width ── */
        .es2fc-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          margin-bottom: 18px;
        }

        /* ── Label ── */
        .es2fc-label {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          line-height: 1.3;
        }

        /* ── Tablet: 4 cols ── */
        @media (min-width: 750px) and (max-width: 991px) {
          .es2fc-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* ── Mobile: 3 cols ── */
        @media (max-width: 749px) {
          .es2fc-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
          .es2fc-card { padding: 16px 12px 14px; }
          .es2fc-img-wrap { margin-bottom: 12px; }
          .es2fc-label { font-size: clamp(13px, 3.5vw, 16px); }
        }
      `}</style>
    </section>
  );
}
