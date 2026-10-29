'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BFCategory {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

const bfCategories: BFCategory[] = [
  { id: 'bfc-1', name: 'Tops',  image: '/boutique-fashion/products/products1.png',  productCount: 5 },
  { id: 'bfc-2', name: 'Women', image: '/boutique-fashion/products/products2.png',  productCount: 9 },
  { id: 'bfc-3', name: 'Men',   image: '/boutique-fashion/products/products15.png', productCount: 3 },
  { id: 'bfc-4', name: 'Shoes', image: '/boutique-fashion/products/products18.png', productCount: 3 },
];

export function BFCollectionsPageContent() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="bfc-grid">
          {bfCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/boutique-fashion/shop?category=${encodeURIComponent(cat.name)}`}
              className="bfc-card"
              style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
            >
              <div className="bfc-card-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="bfc-card-img"
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 400ms ease' }}
                  sizes="(max-width: 749px) 100vw, 25vw"
                />
              </div>
              <h3 className="bfc-card-name">{cat.name}</h3>
              <p className="bfc-card-count">{cat.productCount} Items</p>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .bfc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          row-gap: 40px;
        }
        @media (min-width: 992px) {
          .bfc-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .bfc-card-img-wrap {
          position: relative;
          width: 100%;
          height: clamp(280px, 30vw, 470px);
          background-color: #f5f5f5;
          overflow: hidden;
        }
        .bfc-card:hover .bfc-card-img { transform: scale(1.08); }
        .bfc-card-name {
          font-size: 20px;
          font-weight: 600;
          color: #222;
          margin-top: 16px;
          margin-bottom: 4px;
          transition: color 200ms ease;
        }
        .bfc-card:hover .bfc-card-name { color: #555; }
        .bfc-card-count { font-size: 14px; color: #888; }
      `}</style>
    </>
  );
}
