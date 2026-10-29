'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUIStore } from '@/store/uiStore';
import { electronicsStoreProducts } from '@/data/electronics-store-products';

function IconCart({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" />
    </svg>
  );
}

interface Entry { productId: string; stock: number; }

const productById = new Map(electronicsStoreProducts.map((p) => [p.id, p]));

const tabs = [
  { id: 'accessories', label: 'Accessories'  },
  { id: 'speaker',     label: 'Speakers'      },
  { id: 'laptop',      label: 'Laptop & PC'   },
  { id: 'headphone',   label: 'Headphones'    },
];

const productsByTab: Record<string, Entry[]> = {
  accessories: [
    { productId: 'es2-4',  stock: 21 },
    { productId: 'es2-5',  stock: 34 },
    { productId: 'es2-7',  stock: 30 },
    { productId: 'es2-9',  stock: 36 },
    { productId: 'es2-1',  stock: 34 },
    { productId: 'es2-2',  stock: 30 },
    { productId: 'es2-3',  stock: 37 },
    { productId: 'es2-6',  stock: 37 },
    { productId: 'es2-8',  stock: 30 },
  ],
  speaker: [
    { productId: 'es2-3',  stock: 37 },
    { productId: 'es2-11', stock: 28 },
    { productId: 'es2-2',  stock: 30 },
    { productId: 'es2-12', stock: 35 },
    { productId: 'es2-4',  stock: 21 },
    { productId: 'es2-5',  stock: 34 },
    { productId: 'es2-6',  stock: 37 },
    { productId: 'es2-7',  stock: 30 },
    { productId: 'es2-1',  stock: 34 },
  ],
  laptop: [
    { productId: 'es2-1',  stock: 34 },
    { productId: 'es2-8',  stock: 30 },
    { productId: 'es2-6',  stock: 37 },
    { productId: 'es2-10', stock: 40 },
    { productId: 'es2-9',  stock: 36 },
    { productId: 'es2-7',  stock: 30 },
    { productId: 'es2-4',  stock: 21 },
    { productId: 'es2-3',  stock: 37 },
    { productId: 'es2-11', stock: 28 },
  ],
  headphone: [
    { productId: 'es2-2',  stock: 30 },
    { productId: 'es2-12', stock: 35 },
    { productId: 'es2-3',  stock: 37 },
    { productId: 'es2-11', stock: 28 },
    { productId: 'es2-9',  stock: 36 },
    { productId: 'es2-8',  stock: 30 },
    { productId: 'es2-5',  stock: 34 },
    { productId: 'es2-1',  stock: 34 },
    { productId: 'es2-4',  stock: 21 },
  ],
};

export function ES2RecommendedProducts() {
  const [activeTab, setActiveTab] = useState('accessories');
  const entries = productsByTab[activeTab] ?? [];
  const { openQuickView } = useUIStore();

  return (
    <section className="es2pp-section">
      <div className="container-main">
        <div className="es2pp-heading-row">
          <h2 className="es2pp-heading">Recommended Products</h2>
        </div>

        <div className="es2pp-tabs-row">
          <div className="es2pp-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`es2pp-tab ${activeTab === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="es2pp-grid">
          {entries.map((entry, i) => {
            const product = productById.get(entry.productId);
            if (!product) return null;
            const href = `/products/${product.slug}`;
            const img = product.images[0]?.src ?? '';

            return (
              <div
                key={`${activeTab}-${product.id}`}
                className="es2pp-card"
                style={{ animation: 'es2ppFadeIn 300ms ease forwards', animationDelay: `${i * 30}ms`, opacity: 0 }}
              >
                <Link href={href} className="es2pp-card-img-wrap" aria-label={product.name}>
                  <div className="es2pp-card-img-inner">
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="120px"
                    />
                  </div>
                </Link>

                <div className="es2pp-card-info">
                  <Link href={href} className="es2pp-card-name">{product.name}</Link>
                  <div className="es2pp-card-price">
                    {product.compareAtPrice && (
                      <span className="es2pp-price-old">${product.compareAtPrice.toFixed(2)}</span>
                    )}
                    <span className={`es2pp-price-new ${product.compareAtPrice ? 'is-sale' : ''}`}>
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <span className="es2pp-stock">{entry.stock} in stock</span>
                </div>

                <div className="es2pp-tooltip-wrap">
                  <button
                    type="button"
                    className="es2pp-quick-add"
                    onClick={() => openQuickView(product)}
                    aria-label={`Quick add ${product.name}`}
                  >
                    <IconCart size={16} />
                  </button>
                  <span className="es2pp-tooltip" aria-hidden="true">Quick Add</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .es2pp-heading-row {
          margin-bottom: 24px;
        }
        .es2pp-heading {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.3px;
        }

        .es2pp-tabs-row {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 24px;
        }
        .es2pp-tabs {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          align-items: center;
        }
        .es2pp-tab {
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
        .es2pp-tab::after {
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
        .es2pp-tab:hover { color: #222; }
        .es2pp-tab.is-active {
          color: #222;
          font-weight: 600;
        }
        .es2pp-tab.is-active::after { transform: scaleX(1); }

        .es2pp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .es2pp-card {
          display: grid;
          grid-template-columns: 120px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 20px;
          height: 164px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          background-color: #fff;
          transition: border-color 250ms ease, box-shadow 250ms ease, transform 250ms ease;
        }
        .es2pp-card:hover {
          border-color: #d0d0d0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .es2pp-card-img-wrap {
          display: block;
          position: relative;
          width: 120px;
          height: 120px;
          background-color: #f7f7f7;
          border-radius: 10px;
          overflow: hidden;
        }
        .es2pp-card-img-inner {
          position: absolute;
          inset: 10px;
        }
        .es2pp-card-img-inner img {
          transition: transform 400ms ease;
        }
        .es2pp-card:hover .es2pp-card-img-inner img {
          transform: scale(1.06);
        }

        .es2pp-card-info {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .es2pp-card-name {
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
        .es2pp-card-name:hover { color: #f26522; }

        .es2pp-card-price {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .es2pp-price-old {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
        .es2pp-price-new {
          font-size: 16px;
          font-weight: 600;
          color: #222;
        }
        .es2pp-price-new.is-sale { color: #222; }

        .es2pp-stock {
          font-size: 14px;
          color: #f26522;
          font-weight: 500;
        }

        .es2pp-tooltip-wrap {
          position: relative;
        }
        .es2pp-quick-add {
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
        .es2pp-quick-add:hover {
          background-color: #f26522;
          border-color: #f26522;
          color: #fff;
        }

        .es2pp-tooltip {
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
        .es2pp-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: #222;
        }
        .es2pp-tooltip-wrap:hover .es2pp-tooltip,
        .es2pp-quick-add:focus-visible + .es2pp-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @keyframes es2ppFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 749px) {
          .es2pp-card {
            height: auto;
            min-height: 120px;
            padding: 14px 12px;
          }
          .es2pp-card-name {
            white-space: normal;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: unset;
            font-size: clamp(13px, 4.2vw, 17px);
          }
          .es2pp-price-new { font-size: clamp(12px, 3.8vw, 16px); }
          .es2pp-price-old { font-size: clamp(11px, 3.2vw, 14px); }
          .es2pp-stock     { font-size: clamp(11px, 3.2vw, 14px); }
        }

        @media (min-width: 750px) {
          .es2pp-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .es2pp-heading { font-size: 28px; }
          .es2pp-heading-row { margin-bottom: 30px; }
          .es2pp-tabs-row { margin-bottom: 30px; }
          .es2pp-tab { font-size: 18px; }
          .es2pp-tabs { gap: 28px; }
        }
        @media (min-width: 992px) {
          .es2pp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px 24px; }
          .es2pp-heading { font-size: 30px; }
          .es2pp-heading-row { margin-bottom: 36px; }
          .es2pp-tabs-row { margin-bottom: 32px; }
          .es2pp-tab { font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
