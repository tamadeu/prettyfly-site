'use client';

import Image from 'next/image';
import Link from 'next/link';

const phoneCategories = [
  { id: 'cat-1', name: 'Phone Case',    slug: 'Phone%20Case',    image: '/phone-case/shop-categories-mega-slider/categoties-mega-menu1.webp', productCount: 6 },
  { id: 'cat-2', name: 'Leather Cases', slug: 'Leather%20Cases', image: '/phone-case/shop-categories-mega-slider/categoties-mega-menu2.webp', productCount: 4 },
  { id: 'cat-3', name: 'Slim Cases',    slug: 'Slim%20Cases',    image: '/phone-case/shop-categories-mega-slider/categoties-mega-menu3.webp', productCount: 3 },
  { id: 'cat-4', name: 'Wallet Cases',  slug: 'Wallet%20Cases',  image: '/phone-case/shop-categories-mega-slider/categoties-mega-menu4.webp', productCount: 3 },
  { id: 'cat-5', name: 'Mobile Phone',  slug: '',                image: '/phone-case/shop-categories-mega-slider/categoties-mega-menu5.webp', productCount: 16 },
];

export function PCCollectionsPageContent() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/phone-case-shop" style={{ color: '#555', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#111' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#111' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="pc-collections-grid">
          {phoneCategories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.slug ? `/phone-case/shop?category=${cat.slug}` : '/phone-case/shop'}
              className="pc-collection-card"
            >
              <div className="pc-collection-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="(min-width: 992px) 300px, (min-width: 750px) 40vw, 80vw"
                  className="pc-collection-img"
                />
              </div>
              <div className="pc-collection-info">
                <h2 className="pc-collection-name">{cat.name}</h2>
                <p className="pc-collection-count">{cat.productCount} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .pc-collections-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .pc-collection-card {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }
        .pc-collection-card:hover .pc-collection-img { transform: scale(1.04); }

        .pc-collection-img-wrap {
          position: relative;
          width: 100%;
          height: 300px;
          background: #f7f7f7;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .pc-collection-img {
          transition: transform 500ms ease;
        }

        .pc-collection-info { text-align: center; }

        .pc-collection-name {
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 600;
          color: #111;
          margin: 0 0 4px;
        }

        .pc-collection-count {
          font-size: 14px;
          color: #888;
          margin: 0;
        }

        @media (min-width: 750px) {
          .pc-collections-grid { grid-template-columns: repeat(3, 1fr); }
          .pc-collection-img-wrap { height: 380px; }
        }

        @media (min-width: 992px) {
          .pc-collections-grid { grid-template-columns: repeat(4, 1fr); }
          .pc-collection-img-wrap { height: 420px; }
        }
      `}</style>
    </>
  );
}
