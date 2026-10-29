'use client';

import Link from 'next/link';
import { NutritionProductCard } from './NutritionProductCard';
import { nutritionProducts } from '@/data/nutrition-products';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const trending = nutritionProducts.slice(0, 8);

export function NutritionTrendingProducts() {
  return (
    <section className="ntp-section">
      <div className="container-main">
        <div className="ntp-header">
          <h2 className="ntp-heading">Trending Products</h2>
          <Link href="/nutrition/shop" className="ntp-view-all">
            View More
            <IconArrowRight size={14} />
          </Link>
        </div>

        <div className="ntp-grid">
          {trending.map((p) => (
            <NutritionProductCard
              key={p.id}
              product={p}
              hrefBase="/nutrition/product"
              imageHeight="340px"
            />
          ))}
        </div>
      </div>

      <style>{`
        .ntp-section { padding: 0; }
        .ntp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 80px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ntp-heading {
          font-size: 32px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.3px;
        }
        .ntp-view-all {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
          color: #222;
          text-decoration: none;
          border-bottom: 1.5px solid #222;
          padding-bottom: 2px;
          transition: color 200ms ease, border-color 200ms ease;
        }
        .ntp-view-all:hover {
          color: rgb(140, 255, 100);
          border-color: rgb(140, 255, 100);
        }
        .ntp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        @media (max-width: 749px) {
          .ntp-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 28px;
            gap: 8px;
          }
          .ntp-heading { font-size: clamp(22px, 6vw, 32px); }
          .ntp-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }

        @media (min-width: 992px) {
          .ntp-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }
      `}</style>
    </section>
  );
}
