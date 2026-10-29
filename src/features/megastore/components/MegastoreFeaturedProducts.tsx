'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { megastoreProducts } from '@/data/megastore-products';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function MegastoreFeaturedProducts() {
  const products = megastoreProducts.slice(0, 6);

  return (
    <section className="ms-fp" style={{ backgroundColor: 'transparent' }}>
      <div className="container-main">
        {/* Heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 28,
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
            Featured Products
          </h2>
          <Link
            href="/megastore/shop"
            className="ms-fp-viewall"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 14,
              fontWeight: 500,
              color: '#111',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              transition: 'color 200ms ease',
            }}
          >
            <span>View All</span>
            <IconArrowRight />
          </Link>
        </div>

        {/* Outer 30/70 grid — at desktop both columns 1050px tall */}
        <div className="ms-fp-grid">
          {/* ── Left banner (image + text overlay) ── */}
          <Link
            href="/megastore/shop"
            className="ms-fp-banner"
            style={{
              position: 'relative',
              display: 'block',
              borderRadius: 12,
              overflow: 'hidden',
              backgroundColor: '#1a1f3a',
              color: '#fff',
              textDecoration: 'none',
              transition: 'transform 350ms ease, box-shadow 350ms ease',
              isolation: 'isolate',
            }}
          >
            {/* Image fill — parent above is position:relative, so this stays inside */}
            <span
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                display: 'block',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/megastore/featured-products/featured-products1.webp"
                alt="Limited stock"
                fill
                sizes="(max-width: 991px) 100vw, 30vw"
                style={{ objectFit: 'cover' }}
              />
            </span>

            {/* Dark overlay so the white text/CTA stay readable */}
            <span
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                background:
                  'linear-gradient(180deg, rgba(14,20,36,0.65) 0%, rgba(14,20,36,0.15) 60%)',
                pointerEvents: 'none',
              }}
            />

            {/* Content overlay */}
            <span
              style={{
                position: 'relative',
                zIndex: 3,
                display: 'block',
                padding: 'clamp(28px, 2.4vw, 40px)',
                color: '#fff',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(11px, 0.85vw, 13px)',
                  fontWeight: 600,
                  letterSpacing: '0.6px',
                  color: 'rgba(255,255,255,0.75)',
                  marginBottom: 'clamp(10px, 1vw, 14px)',
                }}
              >
                UP TO 50% OFF
              </span>
              <h3
                style={{
                  fontSize: 'clamp(22px, 2vw, 32px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#fff',
                  margin: '0 0 clamp(20px, 2vw, 28px)',
                }}
              >
                Limited <span style={{ color: '#f15b41' }}>Stock</span>, Huge Savings!
              </h3>
              <span
                className="ms-fp-banner-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: 'clamp(10px, 1vw, 12px) clamp(16px, 1.6vw, 22px)',
                  backgroundColor: '#fff',
                  color: '#111',
                  fontSize: 'clamp(13px, 0.95vw, 14px)',
                  fontWeight: 600,
                  borderRadius: 4,
                  transition: 'background-color 200ms ease, color 200ms ease',
                }}
              >
                <span>Shop Now</span>
                <IconArrowRight size={14} />
              </span>
            </span>
          </Link>

          {/* ── Right product grid ── */}
          <div className="ms-fp-products">
            {products.map((p, i) => (
              <div
                className="ms-fp-card-wrap"
                key={p.id}
                style={{
                  background: '#fff',
                  borderRadius: 10,
                  overflow: 'hidden',
                  padding: 14,
                  boxSizing: 'border-box',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                  transition: 'box-shadow 250ms ease, transform 250ms ease',
                }}
              >
                <HomeProductCard
                  product={p}
                  index={i}
                  hrefBase="/megastore/product"
                  showCountdown={i === 2}
                  showScrollText={false}
                  imageHeight="370px"
                  themeColor="#f26522"
                  countdownBg="#f26522"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layout-only rules in a plain <style> block (not styled-jsx) so the
          @media queries always apply, regardless of any scoping issues. */}
      <style>{`
        /* Force every layer of the product card to #fff. HomeProductCard sets the
           image-link wrapper to #f5f5f5 inline; the !important rules override it
           without touching the shared component. Scoped to .ms-fp-card-wrap so
           other sections that use HomeProductCard keep their default look. */
        .ms-fp-card-wrap,
        .ms-fp-card-wrap .fc-card,
        .ms-fp-card-wrap .fc-card a {
          background-color: #fff !important;
          background: #fff !important;
        }
        .ms-fp-card-wrap:hover {
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08) !important;
          transform: translateY(-3px);
        }

        .ms-fp-viewall:hover { color: #f26522; }
        .ms-fp-banner { height: 380px; }
        .ms-fp-banner:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(0,0,0,0.18); }
        .ms-fp-banner:hover .ms-fp-banner-cta { background-color: #f26522 !important; color: #fff !important; }

        .ms-fp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .ms-fp-products {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .ms-fp-card-wrap {
          width: 100%;
          background: #fff;
          border-radius: 6px;
          overflow: hidden;
        }

        /* Image height at 2-col mobile — tighten from 370px so cards stay proportionate */
        @media (max-width: 749px) {
          .ms-fp-card-wrap .fc-card > a:first-child {
            height: clamp(120px, 34vw, 220px) !important;
          }
        }

        @media (min-width: 750px) {
          .ms-fp-products { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }

        @media (min-width: 992px) {
          .ms-fp-grid {
            /* fr units (not %) so the 30px gap doesn't push the grid past the container's right edge */
            grid-template-columns: 35fr 65fr;
            gap: 30px;
            height: 1050px;
            align-items: stretch;
          }
          .ms-fp-banner { height: 1050px; }
          .ms-fp-products {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 510px);
            gap: 30px;
            height: 1050px;
            align-content: start;
          }
          .ms-fp-card-wrap { width: 100%; height: 510px; }
        }
      `}</style>
    </section>
  );
}
