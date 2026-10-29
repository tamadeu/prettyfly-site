'use client';

import { NutritionProductCard } from './NutritionProductCard';
import { nutritionProducts } from '@/data/nutrition-products';

const featured = nutritionProducts.slice(0, 4);

export function NutritionFeaturedCollection() {
  return (
    <section className="nfc-section">
      <div className="container-main">
        <div className="nfc-heading-wrap">
          <h2 className="nfc-heading">Featured Collection</h2>
        </div>

        <div className="nfc-grid">
          {featured.map((p) => (
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
        .nfc-section { padding: 0; }
        .nfc-heading-wrap {
          text-align: center;
          margin-bottom: 36px;
        }
        .nfc-heading {
          font-size: 26px;
          font-weight: 700;
          color: #222;
          letter-spacing: -0.2px;
        }
        .nfc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        @media (max-width: 749px) {
          .nfc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .nfc-heading { font-size: clamp(20px, 5.5vw, 26px); }
          .nfc-heading-wrap { margin-bottom: 24px; }
        }

        @media (min-width: 992px) {
          .nfc-heading { font-size: 32px; }
          .nfc-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }
      `}</style>
    </section>
  );
}
