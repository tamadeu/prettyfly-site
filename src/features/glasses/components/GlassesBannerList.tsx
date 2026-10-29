'use client';

import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 'banner-modern',
    image: '/glasses/banners/banner-4.webp',
    title: 'Modern Eyewear Styles',
    description: 'Premium eyewear on sale. Shop now for exclusive deals!',
    href: '/shop',
  },
  {
    id: 'banner-premium',
    image: '/glasses/banners/banner-5.webp',
    title: 'Premium Eyewear Sale',
    description: 'High-quality eyewear at unbeatable sale prices!',
    href: '/shop',
  },
];

export function GlassesBannerList() {
  return (
    <section>
      <div className="container-main">
        <div className="glbl-grid">
          {banners.map((banner) => (
            <div key={banner.id}>
              <div className="glbl-img-wrap">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="glbl-img"
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                  sizes="50vw"
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'clamp(20px, 2vw, 24px)', fontWeight: 700, color: '#222', marginBottom: '10px' }}>
                  {banner.title}
                </h3>
                <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: '#777', lineHeight: 1.6, marginBottom: '14px' }}>
                  {banner.description}
                </p>
                <Link
                  href={banner.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.4px',
                    color: '#222',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    transition: 'color 250ms ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F15B41'; }}
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
        .glbl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(28px, 3vw, 40px);
        }
        @media (min-width: 750px) {
          .glbl-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        .glbl-img-wrap {
          position: relative;
          height: 470px;
          border-radius: 0;
          overflow: hidden;
          background-color: #f5f5f5;
          margin-bottom: 24px;
        }
        .glbl-img-wrap:hover .glbl-img { transform: scale(1.04); }
      `}</style>
    </section>
  );
}
