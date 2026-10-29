'use client';

import { useState } from 'react';
import Image from 'next/image';
import { elegantFashionProducts } from '@/data/elegant-fashion-products';
import { formatPrice } from '@/utils/formatPrice';
import { useUIStore } from '@/store/uiStore';

interface Spot {
  id: string;
  top: string;
  left: string;
  productSlug: string;
}

const spots: Spot[] = [
  { id: 's1', top: '22%', left: '15%', productSlug: 'ef-knit-blazer-jacket' },
  { id: 's2', top: '30%', left: '78%', productSlug: 'ef-satin-slip-dress' },
  { id: 's3', top: '62%', left: '35%', productSlug: 'ef-elegant-midi-coat' },
  { id: 's4', top: '70%', left: '62%', productSlug: 'ef-floral-maxi-wrap' },
];

export function ElegantFashionLookbook() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);
  const { openQuickView } = useUIStore();

  return (
    <section className="eflb-section">
      <div className="container-main">
        <div className="eflb-wrap" onMouseLeave={() => setActiveSpot(null)}>
          <Image
            src="/elegant-fashion/hotspot/hotspot1.webp"
            alt="Shoppable fashion lookbook"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="100vw"
          />

          {spots.map((s) => {
            const product = elegantFashionProducts.find((p) => p.slug === s.productSlug);
            if (!product) return null;
            const isActive = activeSpot === s.id;
            return (
              <div
                key={s.id}
                className="eflb-dot-wrap"
                style={{ top: s.top, left: s.left }}
                onMouseEnter={() => setActiveSpot(s.id)}
              >
                <button
                  type="button"
                  className={`eflb-dot${isActive ? ' is-active' : ''}`}
                  aria-label={`View ${product.name}`}
                  onClick={() => openQuickView(product)}
                >
                  <span className="eflb-dot-inner" />
                </button>

                {isActive && (
                  <div className="eflb-tooltip" role="tooltip">
                    <p className="eflb-tip-name">{product.name}</p>
                    <div className="eflb-tip-prices">
                      {product.compareAtPrice != null && (
                        <span className="eflb-tip-old">{formatPrice(product.compareAtPrice)}</span>
                      )}
                      <span className="eflb-tip-new">{formatPrice(product.price)}</span>
                    </div>
                    <span className="eflb-tip-cta">Quick View</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes eflbPulse {
          0%   { transform: scale(1);   opacity: 0.75; }
          50%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1);   opacity: 0; }
        }

        .eflb-section { padding: 0; }

        .eflb-wrap {
          position: relative;
          width: 100%;
          height: 665px;
          overflow: hidden;
          border-radius: 14px;
        }

        .eflb-dot-wrap {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .eflb-dot {
          position: relative;
          width: 24px;
          height: 24px;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .eflb-dot::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #fff;
          background: #1a2b5e;
          animation: eflbPulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          opacity: 0;
        }
        .eflb-dot-inner {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #1a2b5e;
          border: 2.5px solid #fff;
          box-shadow: 0 0 0 3px rgba(26, 43, 94, 0.4);
          display: block;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .eflb-dot:hover .eflb-dot-inner,
        .eflb-dot.is-active .eflb-dot-inner {
          transform: scale(1.2);
          box-shadow: 0 0 0 4px rgba(26, 43, 94, 0.6);
        }

        .eflb-tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 10px;
          padding: 12px 16px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
          min-width: 160px;
          text-align: center;
          animation: eflbFadeIn 200ms ease forwards;
          white-space: nowrap;
          pointer-events: none;
        }
        @keyframes eflbFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .eflb-tip-name {
          font-size: 13px;
          font-weight: 600;
          color: #111;
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .eflb-tip-prices {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .eflb-tip-old {
          font-size: 12px;
          color: #aaa;
          text-decoration: line-through;
        }
        .eflb-tip-new {
          font-size: 14px;
          font-weight: 700;
          color: #1a2b5e;
        }
        .eflb-tip-cta {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          color: #1a2b5e;
          border: 1px solid #1a2b5e;
          border-radius: 9999px;
          padding: 4px 12px;
          letter-spacing: 0.06em;
        }

        @media (max-width: 749px) {
          .eflb-wrap { height: clamp(280px, 90vw, 480px); }
        }
      `}</style>
    </section>
  );
}
