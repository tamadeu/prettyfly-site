'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUIStore } from '@/store/uiStore';
import { useCompareStore } from '@/store/compareStore';
import { useWishlistStore } from '@/store/wishlistStore';
import type { Product } from '@/types/product';

/* ── Icons ── */

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

function IconCheck({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

/* ── Countdown hook ── */

const COUNTDOWN_END = new Date('2027-10-04T12:00:00Z').getTime();

function getRemaining() {
  const diff = Math.max(0, COUNTDOWN_END - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hrs:  Math.floor((diff % 86400000) / 3600000),
    min:  Math.floor((diff % 3600000) / 60000),
    sec:  Math.floor((diff % 60000) / 1000),
  };
}

function useCountdown(active: boolean) {
  const [time, setTime] = useState(getRemaining);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, [active]);
  return time;
}

/* ── Card styles — render once per section via <PizzaProductCardStyles /> ── */

export function PizzaProductCardStyles() {
  return (
    <style>{`
      .ppt-card {
        position: relative;
        min-width: 0;
        background-color: rgb(10,10,10);
        border-radius: 10px;
        overflow: hidden;
        transition: box-shadow 280ms ease, transform 280ms ease;
      }
      .ppt-card:hover {
        box-shadow: 0 6px 24px rgba(0,0,0,0.5);
        transform: translateY(-2px);
      }

      .ppt-card-img-wrap {
        display: block;
        position: relative;
        aspect-ratio: 1 / 1;
        background-color: rgb(10,10,10);
        overflow: hidden;
      }
      .ppt-img-inner {
        position: absolute;
        inset: 18px;
      }
      .ppt-img-inner img { transition: transform 500ms ease; }
      .ppt-card:hover .ppt-img-inner img { transform: scale(1.05); }

      /* Badge */
      .ppt-badge {
        position: absolute;
        top: 12px; left: 12px;
        font-size: 11px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 4px;
        z-index: 3;
        letter-spacing: 0.3px;
      }
      .ppt-badge-sale      { background-color: #e84d1c; color: #fff; }
      .ppt-badge-new       { background-color: #222;    color: #fff; }
      .ppt-badge-pre-order { background-color: #3730a3; color: #fff; }

      /* Countdown */
      .ppt-countdown {
        position: absolute;
        bottom: 14px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 4px;
        z-index: 3;
        transition: opacity 300ms ease;
      }
      .ppt-card:hover .ppt-countdown { opacity: 0; pointer-events: none; }
      .ppt-countdown-cell {
        background-color: rgba(0,0,0,0.7);
        color: #e84d1c;
        border-radius: 4px;
        padding: 4px 7px;
        text-align: center;
        min-width: 34px;
        line-height: 1.2;
      }
      .ppt-countdown-v { font-size: 13px; font-weight: 700; }
      .ppt-countdown-l { font-size: 9px; opacity: 0.85; color: #fff; }

      /* Hover action icons */
      .ppt-quick-actions {
        position: absolute;
        top: 20px; right: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        z-index: 3;
        opacity: 0;
        transform: translateX(10px);
        transition: opacity 300ms ease, transform 300ms ease;
        pointer-events: none;
      }
      .ppt-card:hover .ppt-quick-actions {
        opacity: 1;
        transform: translateX(0);
        pointer-events: auto;
      }

      .ppt-action-btn {
        width: 36px; height: 36px;
        border-radius: 50%;
        background-color: rgba(0,0,0,0.6);
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 220ms ease, transform 220ms ease;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      }
      .ppt-action-btn:hover { background-color: #e84d1c; transform: scale(1.08); }
      .ppt-action-btn.is-active { background-color: #e84d1c; }

      .ppt-tooltip-wrap { position: relative; }
      .ppt-tooltip {
        position: absolute;
        right: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%) translateX(6px);
        background-color: #222;
        color: #fff;
        font-size: 11px;
        font-weight: 500;
        padding: 5px 10px;
        border-radius: 4px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 200ms ease, transform 200ms ease;
      }
      .ppt-tooltip-wrap:hover .ppt-tooltip {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }

      /* Card info */
      .ppt-card-info {
        padding: 12px 14px 14px;
        min-width: 0;
        text-align: center;
      }
      .ppt-card-name {
        display: block;
        font-size: 15px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 6px;
        text-decoration: none;
        transition: color 200ms ease;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        letter-spacing: -0.1px;
      }
      .ppt-card-name:hover { color: #e84d1c; }

      .ppt-card-price {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 12px;
      }
      .ppt-price-old {
        font-size: 12px;
        color: rgba(255,255,255,0.35);
        text-decoration: line-through;
      }
      .ppt-price-new {
        font-size: 14px;
        font-weight: 700;
        color: #fff;
      }
      .ppt-price-new.is-sale { color: #e84d1c; }

      /* Quick Add */
      .ppt-quick-add {
        width: 100%;
        height: 52px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        background-color: rgb(10,10,10);
        padding: 0 18px;
        border-radius: 40px;
        border: 1px solid #2a2a2a;
        cursor: pointer;
        transition: background-color 260ms ease, color 260ms ease, border-color 260ms ease;
      }
      .ppt-quick-add:hover {
        background-color: #e84d1c;
        border-color: #e84d1c;
        color: #fff;
      }

      /* Mobile action row */
      .ppt-mobile-actions { display: none; }

      @media (max-width: 749px) {
        .ppt-mobile-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #2a2a2a;
        }
        .ppt-mob-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: color 200ms ease;
        }
        .ppt-mob-btn:first-child { border-right: 1px solid #2a2a2a; }
        .ppt-mob-btn:active { color: #e84d1c; }
        .ppt-quick-actions {
          opacity: 1 !important;
          transform: translateX(0) !important;
          pointer-events: auto !important;
        }
        .ppt-qv-wrap { display: none; }
        .ppt-quick-add { display: none; }
      }

      @media (min-width: 750px) {
        .ppt-card-info { padding: 14px 16px 16px; }
        .ppt-card-name { font-size: 16px; }
        .ppt-price-new { font-size: 15px; }
      }
      @media (min-width: 992px) {
        .ppt-action-btn { width: 38px; height: 38px; }
        .ppt-quick-actions { top: 22px; right: 22px; gap: 14px; }
      }
    `}</style>
  );
}

/* ── Pizza Product Card ── */

export function PizzaProductCard({
  product,
  showCountdown = false,
}: {
  product: Product;
  showCountdown?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const time = useCountdown(showCountdown);

  const { openQuickView } = useUIStore();
  const { toggleItem: toggleCompare, isInCompare } = useCompareStore();
  const { toggleItem: toggleWishlist, isInWishlist } = useWishlistStore();

  const inWishlist = isInWishlist(product.id);
  const inCompare  = isInCompare(product.id);

  const img1 = product.images[0]?.src ?? '';
  const img2 = product.images[1]?.src ?? img1;
  const productHref = `/pizza/product/${product.slug}`;

  const badgeLabel =
    product.badge === 'sale'        ? 'Sale'
    : product.badge === 'new'       ? 'New'
    : product.badge === 'pre-order' ? 'Pre-order'
    : null;

  return (
    <div
      className="ppt-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <Link href={productHref} className="ppt-card-img-wrap" aria-label={product.name}>
        {badgeLabel && (
          <span className={`ppt-badge ppt-badge-${product.badge}`}>{badgeLabel}</span>
        )}
        <div className="ppt-img-inner">
          <Image
            src={img1}
            alt={product.name}
            fill
            style={{ objectFit: 'contain', transition: 'opacity 400ms ease', opacity: hovered ? 0 : 1 }}
            sizes="(min-width: 992px) 20vw, (min-width: 750px) 30vw, 45vw"
          />
          <Image
            src={img2}
            alt=""
            fill
            aria-hidden
            style={{ objectFit: 'contain', transition: 'opacity 400ms ease', opacity: hovered ? 1 : 0 }}
            sizes="(min-width: 992px) 20vw, (min-width: 750px) 30vw, 45vw"
          />
        </div>

        {showCountdown && (
          <div className="ppt-countdown">
            {[
              { v: time.days, l: 'Days' },
              { v: time.hrs,  l: 'Hrs'  },
              { v: time.min,  l: 'Min'  },
              { v: time.sec,  l: 'Sec'  },
            ].map((t) => (
              <div key={t.l} className="ppt-countdown-cell">
                <div className="ppt-countdown-v">{t.v}</div>
                <div className="ppt-countdown-l">{t.l}</div>
              </div>
            ))}
          </div>
        )}
      </Link>

      {/* Hover action icons — outside Link so overflow:hidden on img-wrap doesn't clip them */}
      <div className="ppt-quick-actions">
        <div className="ppt-tooltip-wrap">
          <button
            aria-label="Wishlist"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist({
                productId: product.id,
                name: product.name,
                price: product.price,
                compareAtPrice: product.compareAtPrice,
                image: img1,
                image2: img2,
                slug: product.slug,
                badge: product.badge,
                colors: product.colors.map((c) => ({ name: c.name, value: c.value })),
                vendor: product.vendor,
              });
            }}
            className={`ppt-action-btn${inWishlist ? ' is-active' : ''}`}
          >
            <IconHeart size={18} />
          </button>
          <span className="ppt-tooltip">{inWishlist ? 'Already Wishlisted' : 'Wishlist'}</span>
        </div>
        <div className="ppt-tooltip-wrap">
          <button
            aria-label="Compare"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleCompare(product);
            }}
            className={`ppt-action-btn${inCompare ? ' is-active' : ''}`}
          >
            {inCompare ? <IconCheck size={18} /> : <IconCompare size={18} />}
          </button>
          <span className="ppt-tooltip">{inCompare ? 'Added' : 'Add to compare'}</span>
        </div>
        <div className="ppt-tooltip-wrap ppt-qv-wrap">
          <button
            aria-label="Quick view"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openQuickView(product);
            }}
            className="ppt-action-btn"
          >
            <IconEye size={18} />
          </button>
          <span className="ppt-tooltip">Quick view</span>
        </div>
      </div>

      {/* Mobile action row */}
      <div className="ppt-mobile-actions">
        <button
          type="button"
          className="ppt-mob-btn"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); openQuickView(product); }}
          aria-label={`Add ${product.name} to cart`}
        >
          <IconBag size={18} />
        </button>
        <button
          type="button"
          className="ppt-mob-btn"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); openQuickView(product); }}
          aria-label={`Quick view ${product.name}`}
        >
          <IconEye size={18} />
        </button>
      </div>

      {/* Info */}
      <div className="ppt-card-info">
        <Link href={productHref} className="ppt-card-name">{product.name}</Link>
        <div className="ppt-card-price">
          {product.compareAtPrice && (
            <span className="ppt-price-old">${product.compareAtPrice.toFixed(2)}</span>
          )}
          <span className={`ppt-price-new${product.compareAtPrice ? ' is-sale' : ''}`}>
            ${product.price.toFixed(2)}
          </span>
        </div>
        <button
          className="ppt-quick-add"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); openQuickView(product); }}
        >
          <IconBag size={20} />
          Quick Add
        </button>
      </div>
    </div>
  );
}
