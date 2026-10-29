import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Categories — Plant & Garden',
  description: 'Browse plant and garden categories: indoor plants, outdoor plants, pots, tools, and seeds.',
};

const categories = [
  {
    id: 'indoor',
    name: 'Indoor Plants',
    productCount: 8,
    image: '/plant-and-garden/categories-mega-menu/categories-mega-menu1.webp',
    href: '/plant-garden/shop?collection=indoor-plants',
  },
  {
    id: 'outdoor',
    name: 'Outdoor Plants',
    productCount: 5,
    image: '/plant-and-garden/categories-mega-menu/categories-mega-menu2.webp',
    href: '/plant-garden/shop?collection=outdoor-plants',
  },
  {
    id: 'pots',
    name: 'Pots & Planters',
    productCount: 5,
    image: '/plant-and-garden/categories-mega-menu/categories-mega-menu3.webp',
    href: '/plant-garden/shop?collection=pots-planters',
  },
  {
    id: 'tools',
    name: 'Garden Tools',
    productCount: 4,
    image: '/plant-and-garden/categories-mega-menu/categories-mega-menu4.webp',
    href: '/plant-garden/shop?collection=garden-tools',
  },
  {
    id: 'seeds',
    name: 'Seeds & Bulbs',
    productCount: 3,
    image: '/plant-and-garden/categories-mega-menu/categories-mega-menu5.webp',
    href: '/plant-garden/shop?collection=seeds-bulbs',
  },
];

export default function PlantGardenCategoriesPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f7f2', padding: '20px 0 40px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
            <Link href="/home/plant-garden-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Categories</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 600, color: '#222' }}>Categories</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="pg-cat-grid">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.href} className="pg-cat-card-page">
              <div className="pg-cat-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="pg-cat-img-inner"
                  style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 50vw, 25vw"
                />
              </div>
              <div style={{ paddingTop: '16px', textAlign: 'center' }}>
                <p style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', fontWeight: 600, color: '#222', marginBottom: '4px', transition: 'color 200ms ease' }} className="pg-cat-page-name">
                  {cat.name}
                </p>
                <p style={{ fontSize: '14px', color: '#888' }}>{cat.productCount} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .pg-cat-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(16px, 2vw, 28px);
        }
        .pg-cat-card-page {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .pg-cat-img-wrap {
          position: relative;
          width: 100%;
          height: clamp(200px, 30vw, 340px);
          background-color: #f5f5f5;
          overflow: hidden;
          border-radius: 12px;
        }
        .pg-cat-card-page:hover .pg-cat-img-inner { transform: scale(1.05); }
        .pg-cat-card-page:hover .pg-cat-page-name { color: #3a7d44; }
        @media (min-width: 750px) { .pg-cat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (min-width: 992px) { .pg-cat-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }
      `}</style>
    </>
  );
}
