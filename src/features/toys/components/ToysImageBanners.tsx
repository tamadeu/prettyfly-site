'use client';

import { useState } from 'react';
import Image from 'next/image';
import { toysProducts } from '@/data/toys-products';
import { formatPrice } from '@/utils/formatPrice';
import { useUIStore } from '@/store/uiStore';

/* Lookbook Hotspot section — full-width, 200px-tall two-image strip, each
   image carrying 2 shoppable hotspots (4 total). Hover reveals a product
   name + price tooltip card (same interaction/markup as PetFoodHotspot.tsx,
   the existing reference for this exact hover-preview + click-to-QuickView
   pattern); clicking a hotspot opens the global Quick View modal via
   useUIStore().openQuickView, same as every other Quick View entry point
   on the site (HomeProductCard, etc). No container-main wrapper — the
   section spans the full viewport width. */

interface Spot {
  id: string;
  top: string;
  left: string;
  productSlug: string;
}

const banners: { id: string; image: string; spots: Spot[] }[] = [
  {
    id: 'banner-1',
    image: '/toys/hotspot-img/hotspot-img-1.webp',
    spots: [
      { id: 'b1-s1', top: '58%', left: '34%', productSlug: 'toy-baby-rattles-toys' },
      { id: 'b1-s2', top: '30%', left: '64%', productSlug: 'toy-figuras-cute-plush-toy' },
    ],
  },
  {
    id: 'banner-2',
    image: '/toys/hotspot-img/hotspot-img-2.webp',
    spots: [
      { id: 'b2-s1', top: '60%', left: '26%', productSlug: 'toy-boomerang-cartoon-car' },
      { id: 'b2-s2', top: '34%', left: '56%', productSlug: 'toy-construction-car-toys' },
    ],
  },
];

export function ToysImageBanners() {
  const [hoverSpot, setHoverSpot] = useState<string | null>(null);
  const { openQuickView } = useUIStore();

  return (
    <section className="tyib-section">
      <div className="tyib-grid">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="tyib-img-wrap"
            onMouseLeave={() => setHoverSpot(null)}
          >
            <Image
              src={banner.image}
              alt="Toys lifestyle"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="100vw"
            />

            {banner.spots.map((s) => {
              const product = toysProducts.find((p) => p.slug === s.productSlug);
              if (!product) return null;
              const isHovered = hoverSpot === s.id;
              return (
                <div
                  key={s.id}
                  className="tyib-hotspot-wrap"
                  style={{ top: s.top, left: s.left }}
                  onMouseEnter={() => setHoverSpot(s.id)}
                >
                  <button
                    type="button"
                    className={`tyib-hotspot ${isHovered ? 'is-open' : ''}`}
                    aria-label={`Quick view ${product.name}`}
                    onClick={() => openQuickView(product)}
                  >
                    <span className="tyib-hotspot-inner" />
                  </button>

                  {isHovered && (
                    <div className="tyib-tooltip" role="tooltip">
                      <p className="tyib-tip-name">{product.name}</p>
                      <div className="tyib-tip-prices">
                        {product.compareAtPrice && (
                          <span className="tyib-tip-old">{formatPrice(product.compareAtPrice)}</span>
                        )}
                        <span className="tyib-tip-new">{formatPrice(product.price)}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style>{`
        .tyib-section { padding: 0; }
        .tyib-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }
        @media (min-width: 750px) {
          .tyib-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        .tyib-img-wrap {
          position: relative;
          height: 580px;
          overflow: hidden;
          background-color: transparent;
        }

        .tyib-hotspot-wrap {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        .tyib-hotspot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #fff;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          animation: tyibHsPulse 2s ease-out infinite;
          transition: transform 200ms ease;
        }
        .tyib-hotspot:hover { transform: scale(1.12); }
        .tyib-hotspot-inner {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #F15B41;
        }
        .tyib-hotspot.is-open { animation: none; transform: scale(1.1); }
        @keyframes tyibHsPulse {
          0% { box-shadow: 0 0 0 0 rgba(241, 91, 65, 0.5); }
          70% { box-shadow: 0 0 0 14px rgba(241, 91, 65, 0); }
          100% { box-shadow: 0 0 0 0 rgba(241, 91, 65, 0); }
        }

        /* Hover preview — not clickable; clicking the dot opens the global
           Quick View. Opens downward from the dot, matching the reference. */
        .tyib-tooltip {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
          min-width: 180px;
          text-align: left;
          color: #222;
          z-index: 5;
          pointer-events: none;
          animation: tyibHsFade 200ms ease;
        }
        /* Speech-bubble pointer connecting the card to the dot above it,
           matching the reference screenshot exactly. */
        .tyib-tooltip::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #fff;
        }
        @keyframes tyibHsFade {
          from { opacity: 0; transform: translate(-50%, -6px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .tyib-tip-name {
          font-size: 14px;
          font-weight: 700;
          color: #222;
          margin-bottom: 4px;
        }
        .tyib-tip-prices { display: flex; gap: 6px; align-items: center; }
        .tyib-tip-old {
          font-size: 13px;
          color: #999;
          text-decoration: line-through;
        }
        .tyib-tip-new {
          font-size: 14px;
          font-weight: 700;
          color: #222;
        }
      `}</style>
    </section>
  );
}
