'use client';

import Image from 'next/image';
import Link from 'next/link';

interface MegastoreCategory {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

const ICON_BASE = '/megastore/featured-categories';

const megastoreCategories: MegastoreCategory[] = [
  { id: 'mc-1', name: 'Phone Case', image: `${ICON_BASE}/featured-categories9.png`, productCount: 12 },
  { id: 'mc-2', name: 'Gaming', image: `${ICON_BASE}/featured-categories1.webp`, productCount: 14 },
  { id: 'mc-3', name: 'Smart Watch', image: `${ICON_BASE}/featured-categories2.png`, productCount: 9 },
  { id: 'mc-4', name: 'Headphones', image: `${ICON_BASE}/featured-categories3.webp`, productCount: 16 },
  { id: 'mc-5', name: 'Television', image: `${ICON_BASE}/featured-categories4.webp`, productCount: 7 },
  { id: 'mc-6', name: 'Speaker', image: `${ICON_BASE}/featured-categories5.webp`, productCount: 11 },
  { id: 'mc-7', name: 'Accessories', image: `${ICON_BASE}/featured-categories6.webp`, productCount: 22 },
  { id: 'mc-8', name: 'Laptop', image: `${ICON_BASE}/featured-categories7.webp`, productCount: 13 },
  { id: 'mc-9', name: 'Camera', image: `${ICON_BASE}/featured-categories8.webp`, productCount: 10 },
];

export function MegastoreCollectionsPageContent() {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/megastore-shop" style={{ color: '#222', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="megastore-collections-grid">
          {megastoreCategories.map((category) => (
            <Link
              key={category.id}
              href={`/megastore/shop?category=${encodeURIComponent(category.name)}`}
              className="megastore-collection-card"
              style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
            >
              <div
                className="megastore-collection-card-img-wrap"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '470px',
                  backgroundColor: '#f7f7f7',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="megastore-collection-card-img"
                  style={{ objectFit: 'contain', objectPosition: 'center', transition: 'transform 400ms ease', padding: '40px' }}
                  sizes="(max-width: 749px) 100vw, 33vw"
                />
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#222', marginBottom: '4px', marginTop: '16px', transition: 'color 200ms ease' }}>
                {category.name}
              </h3>

              <p style={{ fontSize: '14px', color: '#666' }}>
                {category.productCount} Items
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .megastore-collections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          row-gap: 40px;
        }
        @media (min-width: 992px) {
          .megastore-collections-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .megastore-collection-card:hover .megastore-collection-card-img {
          transform: scale(1.08);
        }
        .megastore-collection-card:hover h3 {
          color: #f26522 !important;
        }

        @media (max-width: 749px) {
          .megastore-collection-card-img-wrap {
            height: clamp(280px, 60vw, 420px) !important;
          }
        }
      `}</style>
    </>
  );
}
