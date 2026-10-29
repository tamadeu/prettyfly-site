'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const ICON_BASE = '/megastore/featured-categories';

const categories = [
  { id: 'phone-case', label: 'Phone Case', image: `${ICON_BASE}/featured-categories9.png`, href: '/megastore/shop?category=Phone%20Case' },
  { id: 'gaming', label: 'Gaming', image: `${ICON_BASE}/featured-categories1.webp`, href: '/megastore/shop?category=Gaming%20Keyboard' },
  { id: 'smart-watch', label: 'Smart Watch', image: `${ICON_BASE}/featured-categories2.png`, href: '/megastore/shop?category=Smart%20Watch' },
  { id: 'headphones', label: 'headphones', image: `${ICON_BASE}/featured-categories3.webp`, href: '/megastore/shop?category=Headphones' },
  { id: 'television', label: 'Television', image: `${ICON_BASE}/featured-categories4.webp`, href: '/megastore/shop?category=Electronics' },
  { id: 'calculator-1', label: 'Calculator', image: `${ICON_BASE}/featured-categories5.webp`, href: '/megastore/shop?category=Electronics' },
  { id: 'accessories', label: 'Accessories', image: `${ICON_BASE}/featured-categories6.webp`, href: '/megastore/shop?category=Accessories' },
  { id: 'laptop', label: 'Laptop', image: `${ICON_BASE}/featured-categories7.webp`, href: '/megastore/shop?category=Laptop' },
  { id: 'camera', label: 'Camera', image: `${ICON_BASE}/featured-categories8.webp`, href: '/megastore/shop?category=Wireless%20Camera' },
  { id: 'calculator-2', label: 'Calculator', image: `${ICON_BASE}/featured-categories10.webp`, href: '/megastore/shop?category=Electronics' },
];

export function MegastoreFeaturedCategories() {
  return (
    <section
      className="ms-fcat"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div className="container-main">
        {/* Heading row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(22px, 1.9vw, 30px)',
              fontWeight: 700,
              color: '#111',
              margin: 0,
              letterSpacing: '-0.4px',
            }}
          >
            Featured Categories
          </h2>
          <Link
            href="/megastore/categories"
            className="ms-fcat-viewall"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#111',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              transition: 'color 200ms ease',
            }}
          >
            <span>View All</span>
            <IconArrowRight />
          </Link>
        </div>

        {/* Responsive grid: 5 cols at desktop, scaling down — cards auto-fit the container width */}
        <div className="ms-fcat-grid">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className="ms-fcat-card"
              style={{
                width: '100%',
                height: '200px',

                /* Image at top, label below — flex column, aligned to top */
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '36px 16px 24px',
                gap: '28px',

                background: '#fff',
                border: '1px solid #f0f0f0',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#222',
                transition: 'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease',
                boxSizing: 'border-box',
              }}
            >
              <span
                className="ms-fcat-icon-wrap"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '56px',
                  transition: 'transform 250ms ease',
                }}
              >
                <Image
                  src={c.image}
                  alt={c.label}
                  width={56}
                  height={56}
                  style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                />
              </span>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#222',
                  letterSpacing: '0.1px',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
              >
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hover effects + tiny-phone fallback live in a global <style> tag because
          inline styles can't express :hover or @media queries. */}
      <style>{`
        .ms-fcat-viewall:hover { color: #f26522 !important; }

        /* Hover lift only — no border-color change (per user request) */
        .ms-fcat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }
        .ms-fcat-card:hover .ms-fcat-icon-wrap {
          transform: scale(1.08);
        }

        /* Responsive card grid.
           minmax(0, 1fr) forces column minimum to 0 — without this, 1fr expands
           to fit content min-width and the grid overflows the container. */
        .ms-fcat-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        @media (min-width: 550px) { .ms-fcat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (min-width: 750px) { .ms-fcat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        @media (min-width: 992px) { .ms-fcat-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }

        /* Card must not expand its grid cell beyond the allocated column width */
        .ms-fcat-card {
          min-width: 0;
          overflow: hidden;
        }

        /* ── < 750px — scale card height, padding, font-size, icon proportionally ── */
        @media (max-width: 749px) {
          .ms-fcat-card {
            height: clamp(130px, 35vw, 200px) !important;
            padding: clamp(12px, 3.5vw, 36px) clamp(8px, 2vw, 16px) clamp(12px, 3vw, 24px) !important;
            gap: clamp(10px, 2.8vw, 28px) !important;
          }
          .ms-fcat-card span:last-child {
            font-size: clamp(11px, 3.5vw, 20px) !important;
          }
          .ms-fcat-icon-wrap {
            height: clamp(32px, 9vw, 56px) !important;
          }
          .ms-fcat-icon-wrap img {
            height: clamp(32px, 9vw, 56px) !important;
          }
        }
      `}</style>
    </section>
  );
}
