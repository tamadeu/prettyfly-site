'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUIStore } from '@/store/uiStore';
import type { Product } from '@/types/product';

function IconCart({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" />
    </svg>
  );
}

interface PopularProduct {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  stock: number;
  category: string;
}

/** Product image → real grocery product slug. Falls back to /grocery/shop when no mapping exists. */
const IMAGE_SLUG_MAP: Record<string, string> = {
  '/grocery-shop/products/products1.webp': 'mangosteen-green-food',
  '/grocery-shop/products/products6.webp': 'fresh-green-kale-leaves',
  '/grocery-shop/products/products7.webp': 'bunch-bananas-fruits',
  '/grocery-shop/products/products8.webp': 'salmon-beef-meat',
  '/grocery-shop/products/products9.webp': 'tomato-sauce-jar',
  '/grocery-shop/products/products10.webp': 'recron-seeds-guava',
  '/grocery-shop/products/products11.webp': 'organic-seedless-grapes',
  '/grocery-shop/products/products12.webp': 'halved-sapodilla-fruit',
  '/grocery-shop/products/products13.webp': 'fresh-greek-yogurt',
  '/grocery-shop/products/products2.webp': 'fresh-cheese-block',
  '/grocery-shop/products/products3.webp': 'red-bell-peppers',
  '/grocery-shop/products/products4.webp': 'premium-chicken-breast',
  '/grocery-shop/products/products5.webp': 'organic-almond-milk',
};

function groceryHref(image: string): string {
  const slug = IMAGE_SLUG_MAP[image];
  return slug ? `/grocery/product/${slug}` : '/grocery/shop';
}

const tabs = [
  { id: 'drinks', label: 'Drinks & Juice' },
  { id: 'fruits', label: 'Fresh Fruits' },
  { id: 'grocery', label: 'Grocery store' },
  { id: 'vegetables', label: 'Vegetables' },
];

const productsByTab: Record<string, PopularProduct[]> = {
  drinks: [
    { id: 'pp-d1', name: 'Bunch bananas fruits', price: 3, image: '/grocery-shop/products/products7.webp', stock: 45, category: 'drinks' },
    { id: 'pp-d2', name: 'Chinese Broccoli Vegetables', price: 7, image: '/grocery-shop/products/products2.webp', stock: 37, category: 'drinks' },
    { id: 'pp-d3', name: 'Fresh green kale leaves', price: 4, image: '/grocery-shop/products/products6.webp', stock: 55, category: 'drinks' },
    { id: 'pp-d4', name: 'Green Cardamom pods', price: 9, compareAtPrice: 15, image: '/grocery-shop/products/products3.webp', stock: 43, category: 'drinks' },
    { id: 'pp-d5', name: 'Halved Sapodilla Fruit', price: 3, compareAtPrice: 7, image: '/grocery-shop/products/products12.webp', stock: 42, category: 'drinks' },
    { id: 'pp-d6', name: 'Mangosteen Green Food', price: 11, compareAtPrice: 16, image: '/grocery-shop/products/products1.webp', stock: 51, category: 'drinks' },
    { id: 'pp-d7', name: 'Organic Pomegranate', price: 5, compareAtPrice: 8, image: '/grocery-shop/products/products4.webp', stock: 56, category: 'drinks' },
    { id: 'pp-d8', name: 'Organic Seedless Grapes', price: 10, image: '/grocery-shop/products/products11.webp', stock: 45, category: 'drinks' },
    { id: 'pp-d9', name: 'Organic Watercress', price: 12, image: '/grocery-shop/products/products13.webp', stock: 45, category: 'drinks' },
  ],
  fruits: [
    { id: 'pp-f1', name: 'Mangosteen Green Food', price: 11, compareAtPrice: 16, image: '/grocery-shop/products/products1.webp', stock: 51, category: 'fruits' },
    { id: 'pp-f2', name: 'Organic Seedless Grapes', price: 10, image: '/grocery-shop/products/products11.webp', stock: 45, category: 'fruits' },
    { id: 'pp-f3', name: 'Bunch bananas fruits', price: 3, image: '/grocery-shop/products/products7.webp', stock: 45, category: 'fruits' },
    { id: 'pp-f4', name: 'Halved Sapodilla Fruit', price: 3, compareAtPrice: 7, image: '/grocery-shop/products/products12.webp', stock: 42, category: 'fruits' },
    { id: 'pp-f5', name: 'Recron Seeds Guava', price: 5, compareAtPrice: 7, image: '/grocery-shop/products/products10.webp', stock: 43, category: 'fruits' },
    { id: 'pp-f6', name: 'Organic Pomegranate', price: 5, compareAtPrice: 8, image: '/grocery-shop/products/products4.webp', stock: 56, category: 'fruits' },
    { id: 'pp-f7', name: 'Fresh Orange Juice', price: 6, image: '/grocery-shop/products/products5.webp', stock: 38, category: 'fruits' },
    { id: 'pp-f8', name: 'Lemon Infused Water', price: 5, compareAtPrice: 7, image: '/grocery-shop/products/products13.webp', stock: 42, category: 'fruits' },
    { id: 'pp-f9', name: 'Organic Apple Juice', price: 8, compareAtPrice: 10, image: '/grocery-shop/products/products9.webp', stock: 25, category: 'fruits' },
  ],
  grocery: [
    { id: 'pp-g1', name: 'Tomato sauce jar', price: 8, image: '/grocery-shop/products/products9.webp', stock: 62, category: 'grocery' },
    { id: 'pp-g2', name: 'Green Cardamom pods', price: 9, compareAtPrice: 10, image: '/grocery-shop/products/products3.webp', stock: 43, category: 'grocery' },
    { id: 'pp-g3', name: 'Salmon beef Meat', price: 12, compareAtPrice: 15, image: '/grocery-shop/products/products8.webp', stock: 30, category: 'grocery' },
    { id: 'pp-g4', name: 'Fresh green kale leaves', price: 4, image: '/grocery-shop/products/products6.webp', stock: 56, category: 'grocery' },
    { id: 'pp-g5', name: 'Chinese Broccoli Vegetables', price: 7, image: '/grocery-shop/products/products2.webp', stock: 37, category: 'grocery' },
    { id: 'pp-g6', name: 'Organic Watercress', price: 12, image: '/grocery-shop/products/products13.webp', stock: 45, category: 'grocery' },
    { id: 'pp-g7', name: 'Mangosteen Green Food', price: 11, compareAtPrice: 16, image: '/grocery-shop/products/products1.webp', stock: 51, category: 'grocery' },
    { id: 'pp-g8', name: 'Organic Pomegranate', price: 5, compareAtPrice: 8, image: '/grocery-shop/products/products4.webp', stock: 56, category: 'grocery' },
    { id: 'pp-g9', name: 'Bunch bananas fruits', price: 3, image: '/grocery-shop/products/products7.webp', stock: 45, category: 'grocery' },
  ],
  vegetables: [
    { id: 'pp-v1', name: 'Bunch bananas fruits', price: 3, image: '/grocery-shop/products/products7.webp', stock: 45, category: 'vegetables' },
    { id: 'pp-v2', name: 'Chinese Broccoli Vegetables', price: 7, image: '/grocery-shop/products/products2.webp', stock: 37, category: 'vegetables' },
    { id: 'pp-v3', name: 'Fresh green kale leaves', price: 4, image: '/grocery-shop/products/products6.webp', stock: 55, category: 'vegetables' },
    { id: 'pp-v4', name: 'Green Cardamom pods', price: 9, compareAtPrice: 10, image: '/grocery-shop/products/products3.webp', stock: 43, category: 'vegetables' },
    { id: 'pp-v5', name: 'Halved Sapodilla Fruit', price: 3, compareAtPrice: 7, image: '/grocery-shop/products/products12.webp', stock: 42, category: 'vegetables' },
    { id: 'pp-v6', name: 'Mangosteen Green Food', price: 11, compareAtPrice: 16, image: '/grocery-shop/products/products1.webp', stock: 51, category: 'vegetables' },
    { id: 'pp-v7', name: 'Organic Pomegranate', price: 5, compareAtPrice: 8, image: '/grocery-shop/products/products4.webp', stock: 56, category: 'vegetables' },
    { id: 'pp-v8', name: 'Organic Seedless Grapes', price: 10, image: '/grocery-shop/products/products11.webp', stock: 45, category: 'vegetables' },
    { id: 'pp-v9', name: 'Organic Watercress', price: 12, image: '/grocery-shop/products/products13.webp', stock: 45, category: 'vegetables' },
  ],
};

function toProduct(pp: PopularProduct): Product {
  return {
    id: pp.id,
    slug: pp.id,
    name: pp.name,
    vendor: 'Ambaz',
    price: pp.price,
    compareAtPrice: pp.compareAtPrice ?? null,
    currency: 'USD',
    images: [
      { id: `${pp.id}-1`, src: pp.image, alt: pp.name },
      { id: `${pp.id}-2`, src: pp.image, alt: pp.name },
    ],
    variants: [],
    colors: [],
    sizes: [],
    category: pp.category,
    tags: [],
    brand: 'Ambaz',
    availability: 'in-stock',
    badge: pp.compareAtPrice ? 'sale' : null,
    description: '',
    features: [],
    rating: 4.5,
    reviewCount: 0,
    reviews: [],
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: new Date().toISOString(),
    sku: pp.id,
    countdownEnd: null,
  };
}

export function GroceryPopularProducts() {
  const [activeTab, setActiveTab] = useState('drinks');
  const products = productsByTab[activeTab] ?? [];
  const { openQuickView } = useUIStore();

  return (
    <section className="gpp-section">
      <div className="container-main">
        <div className="gpp-heading-row">
          <h2 className="gpp-heading">Popular Products</h2>
        </div>

        <div className="gpp-tabs-row">
          <div className="gpp-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`gpp-tab ${activeTab === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gpp-grid">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="gpp-card"
              style={{ animation: 'gppFadeIn 300ms ease forwards', animationDelay: `${i * 30}ms`, opacity: 0 }}
            >
              <Link href={groceryHref(product.image)} className="gpp-card-img-wrap" aria-label={product.name}>
                <div className="gpp-card-img-inner">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="104px"
                  />
                </div>
              </Link>

              <div className="gpp-card-info">
                <Link href={groceryHref(product.image)} className="gpp-card-name">{product.name}</Link>
                <div className="gpp-card-price">
                  {product.compareAtPrice && (
                    <span className="gpp-price-old">${product.compareAtPrice.toFixed(2)}</span>
                  )}
                  <span className={`gpp-price-new ${product.compareAtPrice ? 'is-sale' : ''}`}>
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <span className="gpp-stock">{product.stock} in stock</span>
              </div>

              <div className="gpp-tooltip-wrap">
                <button
                  type="button"
                  className="gpp-quick-add"
                  onClick={() => openQuickView(toProduct(product))}
                  aria-label={`Quick add ${product.name}`}
                >
                  <IconCart size={16} />
                </button>
                <span className="gpp-tooltip" aria-hidden="true">Quick Add</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gpp-heading-row {
          margin-bottom: 24px;
        }
        .gpp-heading {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.3px;
        }

        .gpp-tabs-row {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 24px;
        }
        .gpp-tabs {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          align-items: center;
        }
        .gpp-tab {
          position: relative;
          font-size: 16px;
          font-weight: 500;
          color: #666;
          padding: 10px 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 220ms ease;
        }
        .gpp-tab::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 1.5px;
          background-color: #222;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .gpp-tab:hover { color: #222; }
        .gpp-tab.is-active {
          color: #222;
          font-weight: 600;
        }
        .gpp-tab.is-active::after { transform: scaleX(1); }

        .gpp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .gpp-card {
          display: grid;
          grid-template-columns: 104px 1fr auto;
          align-items: center;
          gap: 18px;
          padding: 18px;
          height: 140px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          background-color: #fff;
          transition: border-color 250ms ease, box-shadow 250ms ease, transform 250ms ease;
        }
        .gpp-card:hover {
          border-color: #d0d0d0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .gpp-card-img-wrap {
          display: block;
          position: relative;
          width: 104px;
          height: 104px;
          background-color: #f9faf5;
          border-radius: 10px;
          overflow: hidden;
        }
        .gpp-card-img-inner {
          position: absolute;
          inset: 10px;
        }
        .gpp-card-img-inner img {
          transition: transform 400ms ease;
        }
        .gpp-card:hover .gpp-card-img-inner img {
          transform: scale(1.06);
        }

        .gpp-card-info {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .gpp-card-name {
          display: block;
          font-size: 17px;
          font-weight: 600;
          color: #222;
          text-decoration: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          letter-spacing: -0.1px;
          transition: color 200ms ease;
        }
        .gpp-card-name:hover { color: #1B8057; }

        .gpp-card-price {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .gpp-price-old {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
        .gpp-price-new {
          font-size: 16px;
          font-weight: 600;
          color: #222;
        }
        .gpp-price-new.is-sale { color: #222; }

        .gpp-stock {
          font-size: 14px;
          color: #1B8057;
          font-weight: 500;
        }

        /* Quick Add button + tooltip */
        .gpp-tooltip-wrap {
          position: relative;
        }
        .gpp-quick-add {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background-color: #fff;
          border: 1px solid #e0e0e0;
          color: #555;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            background-color 220ms ease,
            color 220ms ease,
            border-color 220ms ease,
            transform 220ms ease;
        }
        .gpp-quick-add:hover {
          background-color: #1B8057;
          border-color: #1B8057;
          color: #fff;
        }

        .gpp-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          background-color: #222;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 220ms ease, transform 220ms ease;
          z-index: 5;
        }
        .gpp-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: #222;
        }
        .gpp-tooltip-wrap:hover .gpp-tooltip,
        .gpp-quick-add:focus-visible + .gpp-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @keyframes gppFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 750px) {
          .gpp-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .gpp-heading { font-size: 28px; }
          .gpp-heading-row { margin-bottom: 30px; }
          .gpp-tabs-row { margin-bottom: 30px; }
          .gpp-tab { font-size: 18px; }
          .gpp-tabs { gap: 28px; }
        }
        @media (min-width: 992px) {
          .gpp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px 24px; }
          .gpp-heading { font-size: 30px; }
          .gpp-heading-row { margin-bottom: 36px; }
          .gpp-tabs-row { margin-bottom: 32px; }
          .gpp-tab { font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
