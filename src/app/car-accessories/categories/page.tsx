import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Categories — Car Accessories',
  description: 'Browse car accessories categories: accessories, wheels, auto parts, and brakes.',
};

const categories = [
  {
    id: 'acc',
    name: 'Accessories',
    productCount: 7,
    image: '/car-accessories/categories-mega-menu/categories-mega-menu1.webp',
    href: '/car-accessories/shop?collection=accessories',
  },
  {
    id: 'wheels',
    name: 'Wheels',
    productCount: 5,
    image: '/car-accessories/categories-mega-menu/categories-mega-menu2.webp',
    href: '/car-accessories/shop?collection=wheels',
  },
  {
    id: 'auto-parts',
    name: 'Auto Parts',
    productCount: 7,
    image: '/car-accessories/categories-mega-menu/categories-mega-menu3.webp',
    href: '/car-accessories/shop?collection=auto-parts',
  },
  {
    id: 'brakes',
    name: 'Brakes',
    productCount: 6,
    image: '/car-accessories/categories-mega-menu/categories-mega-menu4.webp',
    href: '/car-accessories/shop?collection=brakes',
  },
  {
    id: 'all',
    name: 'All Products',
    productCount: 25,
    image: '/car-accessories/categories-mega-menu/categories-mega-menu5.webp',
    href: '/car-accessories/shop',
  },
];

export default function CarAccessoriesCategoriesPage() {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/car-accessories-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="ca-cat-grid">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="ca-cat-card"
            >
              <div className="ca-cat-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="ca-cat-img"
                  style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 50vw, 25vw"
                />
              </div>
              <div style={{ paddingTop: '16px', textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 600, color: '#222', marginBottom: '4px' }}>{cat.name}</p>
                <p style={{ fontSize: '14px', color: '#888' }}>{cat.productCount} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .ca-cat-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        .ca-cat-card {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .ca-cat-img-wrap {
          position: relative;
          width: 100%;
          height: 320px;
          background-color: #f5f5f5;
          overflow: hidden;
          border-radius: 10px;
        }
        .ca-cat-card:hover .ca-cat-img { transform: scale(1.04); }

        @media (min-width: 750px) {
          .ca-cat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .ca-cat-img-wrap { height: 380px; }
        }
        @media (min-width: 992px) {
          .ca-cat-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
          .ca-cat-img-wrap { height: 340px; }
        }
      `}</style>
    </>
  );
}
