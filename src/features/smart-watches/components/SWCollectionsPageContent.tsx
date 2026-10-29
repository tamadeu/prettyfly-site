'use client';

import Image from 'next/image';
import Link from 'next/link';

const watchCategories = [
  { id: 'cat-1', name: 'Smart Watch',     slug: 'Smart+Watch',     image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu1.webp', productCount: 3 },
  { id: 'cat-2', name: 'Luxury Watches',  slug: 'Luxury+Watches',  image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu2.webp', productCount: 3 },
  { id: 'cat-3', name: 'Digital Watches', slug: 'Digital+Watches', image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu3.webp', productCount: 3 },
  { id: 'cat-4', name: 'Sports Watches',  slug: 'Sports+Watches',  image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu4.webp', productCount: 3 },
  { id: 'cat-5', name: 'All Watches',     slug: '',                image: '/smart-watches/shop-categories-mega-slider/categories-mega-menu5.webp', productCount: 12 },
];

export function SWCollectionsPageContent() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/smart-watches-shop" style={{ color: '#555', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#111' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#111' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="swcat-page-grid">
          {watchCategories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.slug ? `/smart-watches/shop?category=${cat.slug}` : '/smart-watches/shop'}
              className="swcat-page-card"
            >
              <div className="swcat-page-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="(min-width: 992px) 300px, (min-width: 750px) 40vw, 80vw"
                  className="swcat-page-img"
                />
              </div>
              <div className="swcat-page-info">
                <h2 className="swcat-page-name">{cat.name}</h2>
                <p className="swcat-page-count">{cat.productCount} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .swcat-page-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .swcat-page-card {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }
        .swcat-page-card:hover .swcat-page-img { transform: scale(1.04); }
        .swcat-page-img-wrap {
          position: relative;
          width: 100%;
          height: 300px;
          background: #f7f7f7;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        .swcat-page-img { transition: transform 500ms ease; }
        .swcat-page-info { text-align: center; }
        .swcat-page-name {
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 600;
          color: #111;
          margin: 0 0 4px;
        }
        .swcat-page-count { font-size: 14px; color: #888; margin: 0; }

        @media (min-width: 750px) {
          .swcat-page-grid { grid-template-columns: repeat(3, 1fr); }
          .swcat-page-img-wrap { height: 380px; }
        }
        @media (min-width: 992px) {
          .swcat-page-grid { grid-template-columns: repeat(4, 1fr); }
          .swcat-page-img-wrap { height: 420px; }
        }
      `}</style>
    </>
  );
}
