'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Square corners everywhere in this section per spec — no border-radius on
   the media container, the row arrow buttons, or the CTA button. */

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

function IconArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

const rows = [
  {
    id: 'discover',
    title: 'Discover Premium Socks',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    image: '/socks/tab/tab-1.webp',
  },
  {
    id: 'fit',
    title: 'Socks That Fit Every Need',
    description: 'From everyday crew socks to cozy fireside pairs, find the right fit and feel for whatever your day has planned.',
    image: '/socks/tab/tab-2.webp',
  },
  {
    id: 'adventure',
    title: 'Socks for Every Adventure',
    description: 'Built to keep up — breathable, durable, and comfortable from morning commutes to weekend hikes.',
    image: '/socks/tab/tab-3.webp',
  },
];

export function SocksImageWithText() {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <section>
      <div className="container-main">
        <div className="sx-iwt-grid">
          {/* Media — crossfades between the row's own tab image */}
          <div className="sx-iwt-media" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
            {rows.map((row, i) => (
              <div
                key={row.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'opacity 600ms ease',
                  opacity: activeRow === i ? 1 : 0,
                  pointerEvents: 'none',
                }}
              >
                <Image
                  src={row.image}
                  alt={row.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="50vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="sx-iwt-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
              {rows.map((row, i) => (
                <div
                  key={row.id}
                  onMouseEnter={() => setActiveRow(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 0',
                    borderBottom: '1px solid #e5e5e5',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(19px, 3.4vw, 28px)',
                      fontWeight: 700,
                      color: activeRow === i ? '#222' : '#888',
                      transition: 'color 250ms ease',
                    }}
                  >
                    {row.title}
                  </h3>

                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      flexShrink: 0,
                      borderRadius: 0,
                      border: 'none',
                      backgroundColor: activeRow === i ? '#000' : '#eeeeee',
                      color: activeRow === i ? '#fff' : '#222',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 300ms ease',
                    }}
                  >
                    <IconArrowUpRight size={18} />
                  </span>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', minHeight: '64px', marginBottom: '32px' }}>
              {rows.map((row, i) => (
                <p
                  key={row.id}
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    fontSize: '15px',
                    color: '#777',
                    lineHeight: 1.7,
                    transition: 'opacity 500ms ease, transform 500ms ease',
                    opacity: activeRow === i ? 1 : 0,
                    transform: activeRow === i ? 'translateY(0)' : 'translateY(8px)',
                    pointerEvents: activeRow === i ? 'auto' : 'none',
                  }}
                >
                  {row.description}
                </p>
              ))}
            </div>

            <div>
              <Link
                href="/shop"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#000',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '14px 28px',
                  borderRadius: 0,
                  textDecoration: 'none',
                  transition: 'background-color 250ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
              >
                Shop Collection
                <IconArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sx-iwt-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .sx-iwt-media {
          height: clamp(300px, 80vw, 500px);
        }
        .sx-iwt-content {
          padding: 32px 0 0;
        }

        @media (min-width: 750px) {
          .sx-iwt-media { height: 600px; }
          .sx-iwt-content { padding: 24px 0 0 40px; }
        }

        @media (min-width: 992px) {
          .sx-iwt-grid { grid-template-columns: 1fr 1fr; }
          .sx-iwt-media { height: 750px; }
          .sx-iwt-content { height: 750px; padding: 0 40px 0 60px; }
        }
      `}</style>
    </section>
  );
}
