'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PizzaCategory {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

const pizzaCategories: PizzaCategory[] = [
  {
    id: 'ps-cat-1',
    name: 'BBQ Pizza',
    image: '/pizza/categories-mega-menu/categories-mega-menu1.webp',
    productCount: 6,
  },
  {
    id: 'ps-cat-2',
    name: 'Chicken Pizza',
    image: '/pizza/categories-mega-menu/categories-mega-menu2.webp',
    productCount: 6,
  },
  {
    id: 'ps-cat-3',
    name: 'Beef Pizza',
    image: '/pizza/categories-mega-menu/categories-mega-menu3.webp',
    productCount: 4,
  },
  {
    id: 'ps-cat-4',
    name: 'Veggie Pizza',
    image: '/pizza/categories-mega-menu/categories-mega-menu4.webp',
    productCount: 4,
  },
  {
    id: 'ps-cat-5',
    name: 'All Pizzas',
    image: '/pizza/categories-mega-menu/categories-mega-menu5.webp',
    productCount: 20,
  },
];

export function PizzaShopCollectionsPageContent() {
  return (
    <>
      {/* Breadcrumb header band */}
      <div style={{ backgroundColor: 'rgb(20,20,20)', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Home
            </Link>
            <span style={{ color: '#555' }}>/</span>
            <span style={{ color: '#fff' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff' }}>Categories</h1>
        </div>
      </div>

      {/* Category grid */}
      <div style={{ background: '#000000' }}>
        <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
          <div className="ps-collections-grid">
            {pizzaCategories.map((category) => (
              <Link
                key={category.id}
                href={category.name === 'All Pizzas' ? '/pizza/shop' : `/pizza/shop?collection=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="ps-collection-card"
                style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
              >
                <div
                  className="ps-collection-card-img-wrap"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '470px',
                    backgroundColor: '#1a1a1a',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                  }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="ps-collection-card-img"
                    style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 400ms ease' }}
                    sizes="(max-width: 749px) 100vw, 33vw"
                  />
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '4px', marginTop: '16px', transition: 'color 200ms ease' }}>
                  {category.name}
                </h3>

                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                  {category.productCount} Items
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ps-collections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          row-gap: 40px;
        }
        @media (min-width: 992px) {
          .ps-collections-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .ps-collection-card:hover .ps-collection-card-img {
          transform: scale(1.08);
        }
        .ps-collection-card:hover h3 {
          color: #e84d1c !important;
        }
      `}</style>
    </>
  );
}
