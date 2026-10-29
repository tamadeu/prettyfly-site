'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProducts } from '@/features/products/hooks/useProducts';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const tabs = ['Sneaker', 'Casuals', 'Formals', 'Sports Shoe', 'Boots'];

function ProductCardSkeleton() {
  return (
    <div>
      <div className="animate-shimmer" style={{ aspectRatio: '3 / 4', borderRadius: '4px', marginBottom: '14px' }} />
      <div className="animate-shimmer" style={{ height: '16px', width: '70%', margin: '0 auto 8px', borderRadius: '4px' }} />
      <div className="animate-shimmer" style={{ height: '14px', width: '40%', margin: '0 auto', borderRadius: '4px' }} />
    </div>
  );
}

export function FootwearNewArrivals() {
  const [activeTab, setActiveTab] = useState('Sneaker');
  const { data, isLoading } = useProducts(
    { category: activeTab, limit: 8 },
    { endpoint: '/api/footwear-products' }
  );

  const products = data?.products.slice(0, 8) ?? [];

  return (
    <section>
      <div className="container-main">
        <div className="fwna-head">
          <h2 className="fwna-title">New Arrivals</h2>
          <div className="fwna-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`fwna-tab ${activeTab === tab ? 'is-active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="fwna-grid">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, i) => (
                <div key={product.id} style={{ animation: 'fwnaFade 360ms ease forwards', animationDelay: `${i * 40}ms`, opacity: 0 }}>
                  <HomeProductCard
                    product={product}
                    index={i}
                    hrefBase="/products"
                    showCountdown={false}
                    showScrollText={false}
                  />
                </div>
              ))
          }
        </div>

        {!isLoading && products.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>No products in this collection yet.</p>
        )}

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/shop" className="fwna-viewall">
            View all
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        .fwna-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .fwna-title {
          font-size: 28px;
          font-weight: 600;
          color: #222;
        }
        .fwna-tabs {
          display: flex;
          gap: 26px;
          flex-wrap: wrap;
          align-items: center;
        }
        .fwna-tab {
          position: relative;
          font-size: 18px;
          font-weight: 500;
          color: #777;
          padding: 6px 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 220ms ease;
        }

        /* Show the full shoe inside the card box with no cropping/overflow,
           at every breakpoint (overrides the shared card's object-fit rules). */
        .fwna-grid .fc-card > a:first-child img {
          object-fit: contain !important;
        }
        .fwna-tab::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 1.5px;
          background-color: #222;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fwna-tab:hover { color: #222; }
        .fwna-tab.is-active { color: #222; }
        .fwna-tab.is-active::after { transform: scaleX(1); }

        .fwna-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .fwna-grid > * { min-width: 0; }

        .fwna-viewall {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32.5px;
          font-size: 16px;
          font-weight: 500;
          color: #222;
          background: #fff;
          border: 1px solid rgb(17, 17, 17);
          border-radius: 0;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease;
        }
        .fwna-viewall:hover { background-color: #222; color: #fff; border-color: #222; }

        @keyframes fwnaFade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 750px) {
          .fwna-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (min-width: 992px) {
          .fwna-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
          .fwna-title { font-size: 30px; }
        }
        @media (max-width: 749px) {
          .fwna-head { flex-direction: column; align-items: flex-start; gap: 14px; }
          .fwna-tabs { gap: 18px; }
          .fwna-tab { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
