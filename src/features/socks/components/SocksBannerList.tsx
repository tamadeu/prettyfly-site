'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'define-you',
    image: '/socks/big-banner/big-banner-1.webp',
    title: 'Socks That Define You',
    description: 'Explore sophisticated looks crafted for the modern woman.',
    href: '/shop',
  },
  {
    id: 'office-outdoors',
    image: '/socks/big-banner/big-banner-2.webp',
    title: 'From Office to Outdoors',
    description: 'Explore sophisticated looks crafted for the modern woman.',
    href: '/shop',
  },
];

export function SocksBannerList() {
  return (
    <section>
      <div className="container-main">
        <div className="sx-bl-grid">
          {banners.map((banner) => (
            <div key={banner.id}>
              <div
                className="sx-bl-img-wrap"
                style={{
                  position: 'relative',
                  height: '520px',
                  borderRadius: 0,
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                  marginBottom: '24px',
                }}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="sx-bl-img"
                  style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 100vw, 50vw"
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>
                  {banner.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#777', lineHeight: 1.6, marginBottom: '14px' }}>
                  {banner.description}
                </p>
                <Link
                  href={banner.href}
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#222',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    transition: 'color 250ms ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#8a8a8a'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#222'; }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sx-bl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 750px) {
          .sx-bl-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }

        .sx-bl-img-wrap:hover .sx-bl-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
