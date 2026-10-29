'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PetFoodCategory {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

interface PetFoodCategoryWithSlug extends PetFoodCategory {
  slug: string;
}

const petFoodCategories: PetFoodCategoryWithSlug[] = [
  { id: 'pc-1', name: 'Kitten Food', slug: 'kitten-food', image: '/pet-food/categories-mega-menu/categories-mega-menu1.webp', productCount: 1 },
  { id: 'pc-2', name: 'Pet Food', slug: 'pet-food', image: '/pet-food/categories-mega-menu/categories-mega-menu3.webp', productCount: 3 },
  { id: 'pc-3', name: 'Puppy Food', slug: 'puppy-food', image: '/pet-food/categories-mega-menu/categories-mega-menu4.webp', productCount: 1 },
  { id: 'pc-4', name: 'Cat Food', slug: 'cat-food', image: '/pet-food/categories-mega-menu/categories-mega-menu5.webp', productCount: 5 },
  { id: 'pc-5', name: 'Dogs Food', slug: 'dogs-food', image: '/pet-food/categories-mega-menu/categories-mega-menu2.webp', productCount: 3 },
];

export function PetFoodCollectionsPageContent() {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/pet-food-shop" style={{ color: 'rgb(10, 66, 83)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: 'rgb(10, 66, 83)' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: 'rgb(10, 66, 83)' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="pet-food-collections-grid">
          {petFoodCategories.map((category) => (
            <Link
              key={category.id}
              href={`/pet-food/shop?collection=${category.slug}`}
              className="pet-food-collection-card"
              style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
            >
              <div
                className="pet-food-collection-card-img-wrap"
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
                  className="pet-food-collection-card-img"
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 400ms ease' }}
                  sizes="(max-width: 749px) 100vw, 33vw"
                />
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'rgb(10, 66, 83)', marginBottom: '4px', marginTop: '16px', transition: 'color 200ms ease' }}>
                {category.name}
              </h3>

              <p style={{ fontSize: '14px', color: 'rgb(10, 66, 83)' }}>
                {category.productCount} Items
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .pet-food-collections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          row-gap: 40px;
        }
        @media (min-width: 992px) {
          .pet-food-collections-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .pet-food-collection-card:hover .pet-food-collection-card-img {
          transform: scale(1.08);
        }
        .pet-food-collection-card:hover h3 {
          color: #0a3a5c !important;
        }
      `}</style>
    </>
  );
}
