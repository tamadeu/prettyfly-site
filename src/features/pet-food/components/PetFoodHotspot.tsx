'use client';

import { useState } from 'react';
import Image from 'next/image';
import { petFoodProducts } from '@/data/pet-food-products';
import { formatPrice } from '@/utils/formatPrice';
import { useUIStore } from '@/store/uiStore';

interface Spot {
  id: string;
  top: string;
  left: string;
  productSlug: string;
}

const spots: Spot[] = [
  { id: 's1', top: '22%', left: '28%', productSlug: 'animal-nature-food' },
  { id: 's2', top: '48%', left: '54%', productSlug: 'gleam-fur-groom' },
  { id: 's3', top: '38%', left: '80%', productSlug: 'dog-bones-food' },
  { id: 's4', top: '78%', left: '72%', productSlug: 'bone-shaped-biscuits' },
];

export function PetFoodHotspot() {
  const [hoverSpot, setHoverSpot] = useState<string | null>(null);
  const { openQuickView } = useUIStore();

  return (
    <section className="pf-hs-section">
      <div className="container-main">
        <div
          className="pf-hs-wrap"
          onMouseLeave={() => setHoverSpot(null)}
        >
          <Image
            src="/pet-food/hotspot/hotspot1.webp"
            alt="Shoppable pet food scene"
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            priority={false}
          />

          {spots.map((s) => {
            const product = petFoodProducts.find((p) => p.slug === s.productSlug);
            if (!product) return null;
            const isHovered = hoverSpot === s.id;
            return (
              <div
                key={s.id}
                className="pf-hs-dot-wrap"
                style={{ top: s.top, left: s.left }}
                onMouseEnter={() => setHoverSpot(s.id)}
              >
                <button
                  type="button"
                  className={`pf-hs-dot ${isHovered ? 'is-open' : ''}`}
                  aria-label={`Quick view ${product.name}`}
                  onClick={() => openQuickView(product)}
                >
                  <span className="pf-hs-dot-inner" />
                </button>

                {isHovered && (
                  <div
                    className="pf-hs-tooltip"
                    role="tooltip"
                  >
                    <p className="pf-hs-tip-name">{product.name}</p>
                    <div className="pf-hs-tip-prices">
                      {product.compareAtPrice && (
                        <span className="pf-hs-tip-old">{formatPrice(product.compareAtPrice)}</span>
                      )}
                      <span className="pf-hs-tip-new">{formatPrice(product.price)}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pf-hs-section { padding: 0; }
        /* Fixed 665px banner at =992px. Image fills the frame; no wrapper
           background (the image is the full visual). */
        .pf-hs-wrap {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
          border-radius: 14px;
        }
        .pf-hs-dot-wrap {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        .pf-hs-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fff;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          animation: pfHsPulse 2s ease-out infinite;
          transition: transform 200ms ease;
        }
        .pf-hs-dot:hover { transform: scale(1.12); }
        .pf-hs-dot-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #F15B41;
        }
        .pf-hs-dot.is-open { animation: none; transform: scale(1.1); }
        @keyframes pfHsPulse {
          0% { box-shadow: 0 0 0 0 rgba(241,91,65,0.5); }
          70% { box-shadow: 0 0 0 14px rgba(241,91,65,0); }
          100% { box-shadow: 0 0 0 0 rgba(241,91,65,0); }
        }

        /* Hover preview — not clickable; the click on the dot opens the global Quick View. */
        .pf-hs-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          min-width: 180px;
          text-align: left;
          color: rgb(10, 66, 83);
          z-index: 5;
          pointer-events: none;
          animation: pfHsFade 200ms ease;
        }
        @keyframes pfHsFade {
          from { opacity: 0; transform: translate(-50%, 6px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .pf-hs-tip-name {
          font-size: 14px;
          font-weight: 700;
          color: rgb(10, 66, 83);
          margin-bottom: 4px;
        }
        .pf-hs-tip-prices { display: flex; gap: 6px; align-items: center; }
        .pf-hs-tip-old {
          font-size: 13px;
          color: #999;
          text-decoration: line-through;
        }
        .pf-hs-tip-new {
          font-size: 14px;
          font-weight: 700;
          color: #F15B41;
        }

        @media (min-width: 992px) {
          .pf-hs-wrap { height: 665px; }
          .pf-hs-dot { width: 28px; height: 28px; }
          .pf-hs-dot-inner { width: 12px; height: 12px; }
        }
      `}</style>
    </section>
  );
}
