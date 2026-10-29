'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'banner-1',
    image: '/backpack/banner/banner-3.webp',
    title: 'Travel with Ease',
    description: 'Explore sophisticated looks crafted for the modern woman.',
    href: '/shop',
  },
  {
    id: 'banner-2',
    image: '/backpack/banner/banner-4.webp',
    title: 'Compact and Convenient',
    description: 'Explore sophisticated looks crafted for the modern woman.',
    href: '/shop',
  },
  {
    id: 'banner-3',
    image: '/backpack/banner/banner-5.webp',
    title: 'Comfort Meets Functionality',
    description: 'Discover the latest accessories to enhance your style.',
    href: '/shop',
  },
];

export function BackpackBannerList() {
  return (
    <section>
      <div className="container-main">
        <div className="bp-banner-grid">
          {banners.map((banner) => (
            <div key={banner.id}>
              {/* Image */}
              <div
                className="bp-bl-img-wrap"
                style={{
                  position: 'relative',
                  height: '465px',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                  marginBottom: '22px',
                }}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="bp-bl-img"
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                  sizes="33vw"
                />
              </div>

              {/* Content — centered */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>
                  {banner.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'rgb(18 18 18 / 75%)', lineHeight: 1.6, marginBottom: '14px' }}>
                  {banner.description}
                </p>
                <Link
                  href={banner.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: '#1a1a1a',
                    textDecoration: 'underline',
                    textUnderlineOffset: '5px',
                    transition: 'color 250ms ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#555'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#1a1a1a'; }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bp-banner-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 750px) {
          .bp-banner-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (min-width: 992px) {
          .bp-banner-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }
        .bp-bl-img-wrap:hover .bp-bl-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
