'use client';

import { useState } from 'react';
import { petFoodProducts } from '@/data/pet-food-products';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';

/* ── Featured Collection (pet-food) ──
   Same layout as the default Fashion FeaturedCollection
   (4-col grid, 8 initial + 7 extra via Load More).
   Cards reuse the exact prop set from PetFoodFeaturedProducts
   (the pet-food homepage Featured Tab section). */

const initialProducts = petFoodProducts.slice(0, 8);
const extraProducts = petFoodProducts.slice(8, 15);

export function PetFoodFeaturedCollection() {
  const [showMore, setShowMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  return (
    <section>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Featured Collection</h2>
          <p style={{ fontSize: '15px', color: '#777' }}>Discover our handpicked selection of trending styles and must-have pieces</p>
        </div>

        <div className="fc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {initialProducts.map((product, i) => (
            <HomeProductCard
              key={product.id}
              product={product}
              index={i}
              hrefBase="/pet-food/product"
              showCountdown={i === 2}
              showScrollText={false}
              imageHeight="clamp(260px, 28vw, 340px)"
              themeColor="rgb(10, 66, 83)"
              countdownBg="rgb(10, 66, 83)"
            />
          ))}

          {showMore && extraProducts.map((product, i) => (
            <div key={product.id} style={{ animation: 'fcFadeInUp 400ms ease forwards', animationDelay: `${i * 60}ms`, opacity: 0 }}>
              <HomeProductCard
                product={product}
                index={i + 8}
                hrefBase="/pet-food/product"
                showCountdown={false}
                showScrollText={false}
                imageHeight="clamp(260px, 28vw, 340px)"
                themeColor="rgb(10, 66, 83)"
                countdownBg="rgb(10, 66, 83)"
              />
            </div>
          ))}
        </div>

        {!showMore && extraProducts.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              disabled={loadingMore}
              onClick={() => {
                setLoadingMore(true);
                setTimeout(() => { setLoadingMore(false); setShowMore(true); }, 1500);
              }}
              className="fc-load-more-btn"
              style={{ minWidth: '160px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {loadingMore ? (
                <>
                  <span className="fc-load-spinner" />
                  Loading...
                </>
              ) : 'Load More'}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .fc-load-more-btn {
          display: inline-block;
          padding: 12px 36px;
          font-size: 15px;
          font-weight: 500;
          color: rgb(10, 66, 83);
          border: 1.5px solid rgb(10, 66, 83);
          border-radius: 40px;
          text-decoration: none;
          background: none;
          cursor: pointer;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .fc-load-more-btn:hover { background-color: rgb(10, 66, 83); color: #fff; }
        .fc-load-more-btn:disabled { opacity: 0.85; cursor: not-allowed; }

        .fc-load-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: fcSpin 600ms linear infinite;
        }

        @keyframes fcSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes fcFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 991px) {
          .fc-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 749px) {
          .fc-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}
