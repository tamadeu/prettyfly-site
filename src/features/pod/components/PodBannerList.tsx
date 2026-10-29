'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Two-column banner — the banner image is the section's only visual
   background (no card color behind it), filling the box edge-to-edge. */

const banners = [
  {
    id: 'hoodie',
    image: '/pod/big-banner/big-banner-1.webp',
    title: 'Design Your Own Hoodie!',
    href: '/shop',
  },
  {
    id: 'tshirt',
    image: '/pod/big-banner/big-banner-.webp',
    title: 'Your Design, Your T-Shirt!',
    href: '/shop',
  },
];

export function PodBannerList() {
  return (
    <section>
      <div className="container-main">
        <div className="pdbl-grid">
          {banners.map((banner) => (
            <div key={banner.id}>
              <div
                className="pdbl-img-wrap"
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                }}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="pdbl-img"
                  style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 100vw, 50vw"
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 className="pdbl-title">
                  {banner.title}
                </h3>
                <Link
                  href={banner.href}
                  className="pdbl-link"
                  style={{
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
        .pdbl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .pdbl-img-wrap {
          height: clamp(280px, 70vw, 420px);
        }
        .pdbl-title {
          font-size: clamp(18px, 2.2vw, 22px);
          font-weight: 600;
          color: #222;
          margin-bottom: clamp(8px, 1vw, 10px);
        }
        .pdbl-link {
          font-size: clamp(13px, 1.2vw, 15px);
          color: #222;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 250ms ease;
        }
        @media (min-width: 750px) {
          .pdbl-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          /* One continuous clamp from the 750px floor up to the 710px
             ceiling — no forced snap at a later breakpoint. */
          .pdbl-img-wrap { height: clamp(420px, 44vw, 710px); }
        }

        .pdbl-img-wrap:hover .pdbl-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
