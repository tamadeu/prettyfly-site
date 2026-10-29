'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/utils/formatPrice';
import { useUIStore } from '@/store/uiStore';
import { useCompareStore } from '@/store/compareStore';
import { useWishlistStore } from '@/store/wishlistStore';
import type { Product } from '@/types/product';

/* Plumbing Supplies product card — bordered box, hover action icons (top-right),
   optional live countdown overlay on the featured card, and a persistent navy
   "Quick Add" pill below the content. Forked from NutritionProductCard, retuned
   to the deep-navy plumbing palette and stripped of colour swatches (products
   are single-finish). */

const NAVY = '#0a2540';

function IconHeart({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" />
    </svg>
  );
}

function IconCompare({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="15 4 19 4 19 8" />
      <line x1="14.75" y1="9.25" x2="19" y2="4" />
      <line x1="5" y1="19" x2="9" y2="15" />
      <polyline points="15 19 19 19 19 15" />
      <line x1="5" y1="5" x2="19" y2="19" />
    </svg>
  );
}

function IconEye({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" />
    </svg>
  );
}

function IconBag({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M9 6H15C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6ZM7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6H20C20.5523 6 21 6.44772 21 7V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V7C3 6.44772 3.44772 6 4 6H7ZM5 8V20H19V8H5ZM9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10H17C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10H9Z" />
    </svg>
  );
}

/* ── Live countdown chips (navy) — overlaid on the featured card image ── */
function CardCountdown() {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const target = new Date('2027-10-04T12:00:00Z').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff % 86400000) / 3600000),
        min: Math.floor((diff % 3600000) / 60000),
        sec: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="plpc-countdown">
      {[
        { val: time.days, label: 'Days' },
        { val: time.hrs, label: 'Hrs' },
        { val: time.min, label: 'Min' },
        { val: time.sec, label: 'Sec' },
      ].map((t) => (
        <div key={t.label} className="plpc-cd-cell">
          <div className="plpc-cd-val">{t.val}</div>
          <div className="plpc-cd-lbl">{t.label}</div>
        </div>
      ))}
    </div>
  );
}

interface PlumbingProductCardProps {
  product: Product;
  index: number;
  hrefBase?: string;
  /** Full destination override — when set, the card links here instead of `${hrefBase}/${slug}`. */
  href?: string;
  /** Show the live countdown overlay on this card. */
  showCountdown?: boolean;
  imageHeight?: string;
}

export function PlumbingProductCard({
  product,
  index,
  hrefBase = '/products',
  href,
  showCountdown = false,
  imageHeight = '300px',
}: PlumbingProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const { openQuickView } = useUIStore();
  const { toggleItem: toggleCompare, isInCompare } = useCompareStore();
  const { toggleItem: toggleWishlist, isInWishlist } = useWishlistStore();
  const inCompare = isInCompare(product.id);
  const inWishlist = isInWishlist(product.id);
  const defaultImg1 = product.images[0]?.src || '';
  const defaultImg2 = product.images[1]?.src || defaultImg1;
  const productHref = href ?? `${hrefBase}/${product.slug}`;

  return (
    <div
      className="plpc-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={productHref} className="plpc-image" style={{ height: imageHeight }}>
        <Image src={defaultImg1} alt={product.name} fill style={{ objectFit: 'contain', transition: 'opacity 400ms ease', opacity: hovered ? 0 : 1 }} sizes="(max-width: 749px) 50vw, 25vw" />
        <Image src={defaultImg2} alt={`${product.name} hover`} fill style={{ objectFit: 'contain', transition: 'opacity 400ms ease', opacity: hovered ? 1 : 0 }} sizes="(max-width: 749px) 50vw, 25vw" />

        {product.badge && (
          <span className="plpc-badge" data-badge={product.badge}>{product.badge}</span>
        )}

        <div className="plpc-actions" style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(10px)' }}>
          <div className="plpc-tooltip-wrap">
            <button aria-label="Wishlist" className={`plpc-action-btn ${inWishlist ? 'is-on' : ''}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist({ productId: product.id, name: product.name, price: product.price, compareAtPrice: product.compareAtPrice, image: defaultImg1, image2: defaultImg2, slug: product.slug, badge: product.badge, colors: product.colors.map(c => ({ name: c.name, value: c.value })), vendor: product.vendor }); }}>
              <IconHeart size={18} />
            </button>
            <span className="plpc-tooltip">{inWishlist ? 'Wishlisted' : 'Wishlist'}</span>
          </div>
          <div className="plpc-tooltip-wrap">
            <button aria-label="Compare" className={`plpc-action-btn ${inCompare ? 'is-on' : ''}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleCompare(product); }}>
              <IconCompare size={18} />
            </button>
            <span className="plpc-tooltip">{inCompare ? 'Added' : 'Compare'}</span>
          </div>
          <div className="plpc-tooltip-wrap plpc-qv-wrap">
            <button aria-label="Quick view" className="plpc-action-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openQuickView(product); }}>
              <IconEye size={18} />
            </button>
            <span className="plpc-tooltip">Quick view</span>
          </div>
        </div>

        {showCountdown && (
          <div className="plpc-countdown-wrap" style={{ opacity: hovered ? 0 : 1, pointerEvents: hovered ? 'none' : 'auto' }}>
            <CardCountdown />
          </div>
        )}
      </Link>

      <div className="plpc-mobile-actions">
        <button type="button" className="plpc-mob-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openQuickView(product); }} aria-label={`Add ${product.name} to cart`}>
          <IconBag size={18} />
        </button>
        <button type="button" className="plpc-mob-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openQuickView(product); }} aria-label={`Quick view ${product.name}`}>
          <IconEye size={18} />
        </button>
      </div>

      <div className="plpc-content">
        <Link href={productHref} className="plpc-name">{product.name}</Link>
        <div className="plpc-price-row">
          {product.compareAtPrice && (
            <span className="plpc-compare">{formatPrice(product.compareAtPrice)}</span>
          )}
          <span className="plpc-price">{formatPrice(product.price)}</span>
        </div>
      </div>

      <button type="button" className="plpc-quick-add" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openQuickView(product); }}>
        <IconBag size={17} /> Quick Add
      </button>

      <style>{`
        .plpc-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          border: 1px solid #ececec;
          border-radius: 8px;
          padding: 16px;
          background: #fff;
          height: 510px;
          transition: border-color 220ms ease, box-shadow 220ms ease;
        }
        .plpc-card:hover {
          border-color: #d6d6d6;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
        }
        .plpc-image {
          position: relative;
          display: block;
          overflow: hidden;
          border-radius: 6px;
          background: #fff;
        }
        .plpc-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: ${NAVY};
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 3px;
          text-transform: capitalize;
          z-index: 3;
          letter-spacing: 0.3px;
        }

        .plpc-actions {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 3;
          transition: opacity 300ms ease, transform 300ms ease;
        }
        .plpc-tooltip-wrap { position: relative; }
        .plpc-action-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: #fff;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          transition: background-color 200ms ease, color 200ms ease, transform 200ms ease;
        }
        .plpc-action-btn:hover { background: ${NAVY}; color: #fff; transform: scale(1.08); }
        .plpc-action-btn.is-on { background: ${NAVY}; color: #fff; }
        .plpc-tooltip {
          position: absolute;
          right: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: ${NAVY};
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .plpc-tooltip-wrap:hover .plpc-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ── Countdown overlay ── */
        .plpc-countdown-wrap {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          transition: opacity 300ms ease;
        }
        .plpc-countdown { display: flex; gap: 5px; }
        .plpc-cd-cell {
          background: ${NAVY};
          color: #fff;
          border-radius: 4px;
          padding: 6px 9px;
          text-align: center;
          min-width: 40px;
        }
        .plpc-cd-val { font-size: 15px; font-weight: 700; line-height: 1.25; font-variant-numeric: tabular-nums; }
        .plpc-cd-lbl { font-size: 10px; font-weight: 400; line-height: 1.25; opacity: 0.85; }

        .plpc-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 6px;
          padding: 0 4px;
          flex: 1;
          min-height: 0;
        }
        .plpc-name {
          font-size: 15px;
          font-weight: 500;
          color: ${NAVY};
          text-decoration: none;
          transition: color 200ms ease;
        }
        .plpc-name:hover { color: #1a4b7a; }
        .plpc-price-row { display: flex; align-items: center; gap: 8px; }
        .plpc-compare { font-size: 14px; color: #999; text-decoration: line-through; }
        .plpc-price { font-size: 15px; font-weight: 600; color: ${NAVY}; }

        .plpc-quick-add {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: ${NAVY};
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          padding: 14px 0;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.25s ease;
        }
        .plpc-quick-add:hover { background: #000; }

        .plpc-mobile-actions { display: none; }

        @media (max-width: 749px) {
          .plpc-card { height: auto; gap: 12px; padding: 12px; }
          .plpc-image { height: clamp(150px, 40vw, 210px) !important; }
          .plpc-tooltip { display: none; }
          .plpc-actions { opacity: 1 !important; transform: translateX(0) !important; }
          .plpc-qv-wrap { display: none; }
          .plpc-quick-add { display: none; }
          .plpc-mobile-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-top: 1px solid #eee;
          }
          .plpc-mob-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 46px;
            background: transparent;
            border: none;
            color: #555;
            cursor: pointer;
          }
          .plpc-mob-btn:first-child { border-right: 1px solid #eee; }
          .plpc-mob-btn:active { color: ${NAVY}; }
          .plpc-cd-cell { min-width: clamp(30px, 8vw, 40px); padding: 5px 7px; }
          .plpc-cd-val { font-size: clamp(12px, 3vw, 15px); }
          .plpc-cd-lbl { font-size: clamp(8px, 2vw, 10px); }
        }
      `}</style>
    </div>
  );
}
