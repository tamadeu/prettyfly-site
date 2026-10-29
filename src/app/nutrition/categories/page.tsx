'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

interface CategoryWithSlug extends Category {
  slug: string;
}

const categories: CategoryWithSlug[] = [
  { id: 'nc-1', name: 'Herbalife', slug: 'herbalife', image: '/nutrition/categories-mega-menu/categories-mega-menu3.webp', productCount: 2 },
  { id: 'nc-2', name: 'MuscleTech', slug: 'muscletech', image: '/nutrition/categories-mega-menu/categories-mega-menu4.webp', productCount: 1 },
  { id: 'nc-3', name: 'Proteins', slug: 'proteins', image: '/nutrition/categories-mega-menu/categories-mega-menu5.webp', productCount: 5 },
  { id: 'nc-4', name: 'Vitamins', slug: 'vitamins', image: '/nutrition/categories-mega-menu/categories-mega-menu1.webp', productCount: 3 },
  { id: 'nc-5', name: 'Ensure Plus', slug: 'ensure-plus', image: '/nutrition/categories-mega-menu/categories-mega-menu2.webp', productCount: 1 },
];

export default function NutritionCategoriesPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f4f5f7', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="nc-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/nutrition/shop?collection=${category.slug}`}
              className="nc-card"
              style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
            >
              <div
                className="nc-card-img-wrap"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '470px',
                  backgroundColor: '#f4f5f7',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="nc-card-img"
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 400ms ease' }}
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
        .nc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          row-gap: 40px;
        }
        @media (min-width: 992px) {
          .nc-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .nc-card:hover .nc-card-img { transform: scale(1.08); }
        .nc-card:hover h3 { color: rgb(140, 255, 100) !important; }
      `}</style>
    </>
  );
}
