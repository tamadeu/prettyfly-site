'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUIStore } from '@/store/uiStore';
import { megastoreProducts } from '@/data/megastore-products';

function IconCart({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" />
    </svg>
  );
}

interface PopularEntry {
  productId: string;
  stock: number;
}

/* Look up real Product objects so QuickView gets full data without a manual adapter */
const productById = new Map(megastoreProducts.map((p) => [p.id, p]));

const tabs = [
  { id: 'headphones', label: 'Headphones' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'phones', label: 'Smart Phones' },
  { id: 'laptops', label: 'Laptop & PC' },
];

/* 9 entries per tab — products repeat across tabs, mirroring grocery's "popular across categories" pattern */
const productsByTab: Record<string, PopularEntry[]> = {
  headphones: [
    { productId: 'ms-5', stock: 56 },
    { productId: 'ms-6', stock: 32 },
    { productId: 'ms-12', stock: 41 },
    { productId: 'ms-3', stock: 27 },
    { productId: 'ms-16', stock: 18 },
    { productId: 'ms-13', stock: 38 },
    { productId: 'ms-11', stock: 24 },
    { productId: 'ms-7', stock: 12 },
    { productId: 'ms-10', stock: 33 },
  ],
  speakers: [
    { productId: 'ms-3', stock: 27 },
    { productId: 'ms-16', stock: 18 },
    { productId: 'ms-12', stock: 41 },
    { productId: 'ms-5', stock: 56 },
    { productId: 'ms-6', stock: 32 },
    { productId: 'ms-11', stock: 24 },
    { productId: 'ms-13', stock: 38 },
    { productId: 'ms-7', stock: 12 },
    { productId: 'ms-10', stock: 33 },
  ],
  phones: [
    { productId: 'ms-11', stock: 24 },
    { productId: 'ms-13', stock: 38 },
    { productId: 'ms-12', stock: 41 },
    { productId: 'ms-4', stock: 64 },
    { productId: 'ms-2', stock: 22 },
    { productId: 'ms-15', stock: 19 },
    { productId: 'ms-7', stock: 12 },
    { productId: 'ms-3', stock: 27 },
    { productId: 'ms-16', stock: 18 },
  ],
  laptops: [
    { productId: 'ms-7', stock: 12 },
    { productId: 'ms-1', stock: 47 },
    { productId: 'ms-14', stock: 29 },
    { productId: 'ms-15', stock: 19 },
    { productId: 'ms-2', stock: 22 },
    { productId: 'ms-12', stock: 41 },
    { productId: 'ms-13', stock: 38 },
    { productId: 'ms-11', stock: 24 },
    { productId: 'ms-10', stock: 33 },
  ],
};

export function MegastorePopularProducts() {
  const [activeTab, setActiveTab] = useState('headphones');
  const entries = productsByTab[activeTab] ?? [];
  const { openQuickView } = useUIStore();

  return (
    <section className="mspp-section">
      <div className="container-main">
        <div className="mspp-heading-row">
          <h2 className="mspp-heading">Popular Products</h2>
        </div>

        <div className="mspp-tabs-row">
          <div className="mspp-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`mspp-tab ${activeTab === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mspp-grid">
          {entries.map((entry, i) => {
            const product = productById.get(entry.productId);
            if (!product) return null;
            const href = `/megastore/product/${product.slug}`;
            const img = product.images[0]?.src ?? '';

            return (
              <div
                key={`${activeTab}-${product.id}`}
                className="mspp-card"
                style={{ animation: 'msppFadeIn 300ms ease forwards', animationDelay: `${i * 30}ms`, opacity: 0 }}
              >
                <Link href={href} className="mspp-card-img-wrap" aria-label={product.name}>
                  <div className="mspp-card-img-inner">
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="120px"
                    />
                  </div>
                </Link>

                <div className="mspp-card-info">
                  <Link href={href} className="mspp-card-name">{product.name}</Link>
                  <div className="mspp-card-price">
                    {product.compareAtPrice && (
                      <span className="mspp-price-old">${product.compareAtPrice.toFixed(2)}</span>
                    )}
                    <span className={`mspp-price-new ${product.compareAtPrice ? 'is-sale' : ''}`}>
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <span className="mspp-stock">{entry.stock} in stock</span>
                </div>

                <div className="mspp-tooltip-wrap">
                  <button
                    type="button"
                    className="mspp-quick-add"
                    onClick={() => openQuickView(product)}
                    aria-label={`Quick add ${product.name}`}
                  >
                    <IconCart size={16} />
                  </button>
                  <span className="mspp-tooltip" aria-hidden="true">Quick Add</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .mspp-heading-row {
          margin-bottom: 24px;
        }
        .mspp-heading {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.3px;
        }

        .mspp-tabs-row {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 24px;
        }
        .mspp-tabs {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          align-items: center;
        }
        .mspp-tab {
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
        .mspp-tab::after {
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
        .mspp-tab:hover { color: #222; }
        .mspp-tab.is-active {
          color: #222;
          font-weight: 600;
        }
        .mspp-tab.is-active::after { transform: scaleX(1); }

        .mspp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .mspp-card {
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
        .mspp-card:hover {
          border-color: #d0d0d0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .mspp-card-img-wrap {
          display: block;
          position: relative;
          width: 120px;
          height: 120px;
          background-color: #f7f7f7;
          border-radius: 10px;
          overflow: hidden;
        }
        .mspp-card-img-inner {
          position: absolute;
          inset: 10px;
        }
        .mspp-card-img-inner img {
          transition: transform 400ms ease;
        }
        .mspp-card:hover .mspp-card-img-inner img {
          transform: scale(1.06);
        }

        .mspp-card-info {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mspp-card-name {
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
        .mspp-card-name:hover { color: #f26522; }

        .mspp-card-price {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .mspp-price-old {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
        .mspp-price-new {
          font-size: 16px;
          font-weight: 600;
          color: #222;
        }
        .mspp-price-new.is-sale { color: #222; }

        .mspp-stock {
          font-size: 14px;
          color: #f26522;
          font-weight: 500;
        }

        /* Quick Add button + tooltip */
        .mspp-tooltip-wrap {
          position: relative;
        }
        .mspp-quick-add {
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
        .mspp-quick-add:hover {
          background-color: #f26522;
          border-color: #f26522;
          color: #fff;
        }

        .mspp-tooltip {
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
        .mspp-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: #222;
        }
        .mspp-tooltip-wrap:hover .mspp-tooltip,
        .mspp-quick-add:focus-visible + .mspp-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @keyframes msppFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 749px) {
          .mspp-card {
            height: auto;
            min-height: 120px;
            padding: 14px 12px;
          }
          .mspp-card-name {
            white-space: normal;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: unset;
            font-size: clamp(13px, 4.2vw, 17px);
          }
          .mspp-price-new { font-size: clamp(12px, 3.8vw, 16px); }
          .mspp-price-old { font-size: clamp(11px, 3.2vw, 14px); }
          .mspp-stock     { font-size: clamp(11px, 3.2vw, 14px); }
        }

        @media (min-width: 750px) {
          .mspp-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .mspp-heading { font-size: 28px; }
          .mspp-heading-row { margin-bottom: 30px; }
          .mspp-tabs-row { margin-bottom: 30px; }
          .mspp-tab { font-size: 18px; }
          .mspp-tabs { gap: 28px; }
        }
        @media (min-width: 992px) {
          .mspp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px 24px; }
          .mspp-heading { font-size: 30px; }
          .mspp-heading-row { margin-bottom: 36px; }
          .mspp-tabs-row { margin-bottom: 32px; }
          .mspp-tab { font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
