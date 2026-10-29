'use client';

import Image from 'next/image';
import Link from 'next/link';

function BannerDecor({ stroke }: { stroke: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '58%',
        height: '80%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <rect x="155" y="195" width="65"  height="85"  stroke={stroke} strokeWidth="1.5" />
      <rect x="125" y="160" width="95"  height="120" stroke={stroke} strokeWidth="1.5" />
      <rect x="93"  y="125" width="127" height="155" stroke={stroke} strokeWidth="1.5" />
      <rect x="60"  y="90"  width="160" height="190" stroke={stroke} strokeWidth="1.5" />
      <rect x="27"  y="55"  width="193" height="225" stroke={stroke} strokeWidth="1.5" />
      <rect x="-6"  y="20"  width="226" height="260" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

interface BannerItem {
  id: string;
  title: string;
  href: string;
  image: string;
  bg: string;
  stroke: string;
}

const banners: BannerItem[] = [
  {
    id: 'women',
    title: 'Elevated Styles for Women',
    href: '/shop?category=Women',
    image: '/sneaker/banner/banner1.webp',
    bg: '#f0e9dd',
    stroke: 'rgba(0,0,0,0.09)',
  },
  {
    id: 'men',
    title: "Men's Style Revolution",
    href: '/shop?category=Men',
    image: '/sneaker/banner/banner2.webp',
    bg: '#eaecf6',
    stroke: 'rgba(0,0,0,0.08)',
  },
  {
    id: 'accessories',
    title: 'Explore Trendy Accessories',
    href: '/shop?category=Accessories',
    image: '/sneaker/banner/banner3.webp',
    bg: '#ddeaf3',
    stroke: 'rgba(0,0,0,0.08)',
  },
];

export function SneakerPromoBanners() {
  return (
    <section className="snpb-section">
      <div className="container-main">
        <div className="snpb-grid">
          {banners.map((banner, i) => (
            <div
              key={banner.id}
              className="snpb-card"
              style={{ backgroundColor: banner.bg }}
            >
              <BannerDecor stroke={banner.stroke} />

              <div className="snpb-img-wrap">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(min-width: 992px) 33vw, (min-width: 750px) 50vw, 100vw"
                  priority={i === 0}
                />
              </div>

              <div className="snpb-content">
                <h3 className="snpb-title">{banner.title}</h3>
                <Link href={banner.href} className="snpb-cta">SHOP NOW</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .snpb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .snpb-card {
          position: relative;
          height: 380px;
          border-radius: 12px;
          overflow: hidden;
        }
        .snpb-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
        .snpb-content {
          position: absolute;
          top: 28px;
          left: 28px;
          z-index: 3;
          max-width: 54%;
        }
        .snpb-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          line-height: 1.25;
          margin: 0 0 14px;
        }
        .snpb-cta {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111;
          text-decoration: none;
          border-bottom: 1.5px solid #111;
          padding-bottom: 2px;
          transition: color 220ms ease, border-color 220ms ease;
        }
        .snpb-cta:hover {
          color: #e84d1c;
          border-color: #e84d1c;
        }

        @media (min-width: 750px) {
          .snpb-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .snpb-card { height: 440px; }
          .snpb-content { top: 30px; left: 30px; }
          .snpb-title { font-size: 22px; margin-bottom: 14px; }
        }
        @media (min-width: 992px) {
          .snpb-grid { gap: 24px; }
          .snpb-card { height: 500px; }
          .snpb-content { top: 34px; left: 34px; }
          .snpb-title { font-size: 24px; margin-bottom: 16px; }
          .snpb-cta { font-size: 12px; }
        }
        @media (min-width: 1200px) {
          .snpb-title { font-size: 26px; }
        }
      `}</style>
    </section>
  );
}
