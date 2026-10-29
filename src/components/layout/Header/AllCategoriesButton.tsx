'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/useClickOutside';

/* ── Icons ── */

function IconHamburger() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      width={20} height={20}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconChevronRight({ size = 13 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconFlash() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
      <path d="M13 10H20L11 23V14H4L13 1V10Z" />
    </svg>
  );
}

/* ── Types ── */

interface L3Item { label: string; href: string; }
interface L2Item { label: string; href: string; children?: L3Item[]; }
interface MegaItem { label: string; href: string; }
interface MegaColumn { heading: string; items: MegaItem[]; }
interface CategoryEntry {
  id: string; label: string; icon: string; href: string;
  megaColumns?: MegaColumn[];
  subItems?: L2Item[];
}

/* ── Data ── */

export const ALL_CATEGORIES: CategoryEntry[] = [
  {
    id: 'seafood', label: 'Fresh Seafood',
    icon: '/grocery-shop/categories-slider/categories-slider5.webp',
    href: '/grocery/shop',
    megaColumns: [
      { heading: 'Fresh Organic',    items: [{ label: 'Ripe Bananas', href: '/grocery/shop' }, { label: 'Strawberries', href: '/grocery/shop' }, { label: 'Cherry Tomatoes', href: '/grocery/shop' }, { label: 'Sweet Potatoes', href: '/grocery/shop' }, { label: 'Baby Carrots', href: '/grocery/shop' }] },
      { heading: 'Green Seedless',   items: [{ label: 'Whole Milk', href: '/grocery/shop' }, { label: 'Salted Butter', href: '/grocery/shop' }, { label: 'Ground Beef', href: '/grocery/shop' }, { label: 'Chicken Breast', href: '/grocery/shop' }, { label: 'Boneless Pork', href: '/grocery/shop' }] },
      { heading: 'Broccoli Florets', items: [{ label: 'Turkey Bacon', href: '/grocery/shop' }, { label: 'Salmon Fillets', href: '/grocery/shop' }, { label: 'Jumbo Shrimp', href: '/grocery/shop' }, { label: 'Chicken Drumsticks', href: '/grocery/shop' }, { label: 'Potatoes', href: '/grocery/shop' }] },
      { heading: 'Navel Oranges',    items: [{ label: 'Bell peppers', href: '/grocery/shop' }, { label: 'Cookies', href: '/grocery/shop' }, { label: 'Ice cream', href: '/grocery/shop' }, { label: 'Frozen pizza', href: '/grocery/shop' }, { label: 'Orange juice', href: '/grocery/shop' }] },
      { heading: 'Sweet Potatoes',   items: [{ label: 'Bottled water', href: '/grocery/shop' }, { label: 'Beef broth', href: '/grocery/shop' }, { label: 'Chicken broth', href: '/grocery/shop' }, { label: 'Canned beans', href: '/grocery/shop' }, { label: 'Mayonnaise', href: '/grocery/shop' }] },
      { heading: 'Fresh Ginger',     items: [{ label: 'Vegetable oil', href: '/grocery/shop' }, { label: 'Olive oil', href: '/grocery/shop' }, { label: 'Black pepper', href: '/grocery/shop' }, { label: 'Peanut butter', href: '/grocery/shop' }, { label: 'Canned tuna', href: '/grocery/shop' }] },
    ],
  },
  {
    id: 'milk', label: 'Whole Milk',
    icon: '/grocery-shop/categories-slider/categories-slider3.webp',
    href: '/grocery/shop',
    subItems: [
      { label: 'Fresh Organic',    href: '/grocery/shop', children: [{ label: 'Whole Milk', href: '/grocery/shop' }, { label: 'Salted Butter', href: '/grocery/shop' }, { label: 'Ground Beef', href: '/grocery/shop' }, { label: 'Chicken Breast', href: '/grocery/shop' }, { label: 'Boneless Pork', href: '/grocery/shop' }] },
      { label: 'Green Seedless',   href: '/grocery/shop', children: [{ label: 'Whole Milk', href: '/grocery/shop' }, { label: 'Salted Butter', href: '/grocery/shop' }, { label: 'Ground Beef', href: '/grocery/shop' }, { label: 'Chicken Breast', href: '/grocery/shop' }, { label: 'Boneless Pork', href: '/grocery/shop' }] },
      { label: 'Broccoli Florets', href: '/grocery/shop', children: [{ label: 'Turkey Bacon', href: '/grocery/shop' }, { label: 'Salmon Fillets', href: '/grocery/shop' }, { label: 'Jumbo Shrimp', href: '/grocery/shop' }, { label: 'Chicken Drumsticks', href: '/grocery/shop' }, { label: 'Potatoes', href: '/grocery/shop' }] },
      { label: 'Navel Oranges',    href: '/grocery/shop', children: [{ label: 'Bell peppers', href: '/grocery/shop' }, { label: 'Cookies', href: '/grocery/shop' }, { label: 'Ice cream', href: '/grocery/shop' }, { label: 'Frozen pizza', href: '/grocery/shop' }, { label: 'Orange juice', href: '/grocery/shop' }] },
      { label: 'Sweet Potatoes',   href: '/grocery/shop', children: [{ label: 'Bottled water', href: '/grocery/shop' }, { label: 'Beef broth', href: '/grocery/shop' }, { label: 'Chicken broth', href: '/grocery/shop' }] },
      { label: 'Fresh Ginger',     href: '/grocery/shop', children: [{ label: 'Vegetable oil', href: '/grocery/shop' }, { label: 'Olive oil', href: '/grocery/shop' }, { label: 'Black pepper', href: '/grocery/shop' }] },
    ],
  },
  { id: 'beef',       label: 'Ground Beef',   icon: '/grocery-shop/categories-slider/categories-slider4.webp', href: '/grocery/shop' },
  { id: 'vegetables', label: 'Vegetables',     icon: '/grocery-shop/categories-slider/categories-slider4.webp', href: '/grocery/shop' },
  { id: 'grocery',    label: 'Grocery',        icon: '/grocery-shop/categories-slider/categories-slider3.webp', href: '/grocery/shop' },
  { id: 'chicken',    label: 'Chicken Breast', icon: '/grocery-shop/categories-slider/categories-slider1.webp', href: '/grocery/shop' },
  { id: 'meat',       label: 'Fresh Meat',     icon: '/grocery-shop/categories-slider/categories-slider4.webp', href: '/grocery/shop' },
  { id: 'jam',        label: 'Strawberry Jam', icon: '/grocery-shop/categories-slider/categories-slider2.webp', href: '/grocery/shop' },
  { id: 'pepper',     label: 'Black Pepper',   icon: '/grocery-shop/categories-slider/categories-slider5.webp', href: '/grocery/shop' },
  { id: 'broccoli',   label: 'Broccoli',       icon: '/grocery-shop/categories-slider/categories-slider4.webp', href: '/grocery/shop' },
  { id: 'foodstore',  label: 'Food Store',     icon: '/grocery-shop/categories-slider/categories-slider3.webp', href: '/grocery/shop' },
];

const BASE_CATS  = ALL_CATEGORIES.slice(0, 9);
const EXTRA_CATS = ALL_CATEGORIES.slice(9);

/* ── Component ── */

export function AllCategoriesButton() {
  const [open,      setOpen]      = useState(false);
  const [activeL1,  setActiveL1]  = useState<string | null>(null);
  const [activeL2,  setActiveL2]  = useState<string | null>(null);
  const [showExtra, setShowExtra] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = () => { setOpen(false); setActiveL1(null); setActiveL2(null); setShowExtra(false); };

  useClickOutside(ref, close);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderRow = (cat: CategoryEntry) => {
    const isActive = activeL1 === cat.id;
    const hasRight = !!(cat.megaColumns || cat.subItems);
    return (
      <div
        key={cat.id}
        className={`acb-l1-row${isActive ? ' is-active' : ''}`}
        onMouseEnter={() => { setActiveL1(cat.id); setActiveL2(null); }}
        onMouseLeave={() => { setActiveL1(null); setActiveL2(null); }}
      >
        <div className="acb-item">
          <div className="acb-item-icon">
            <Image src={cat.icon} alt={cat.label} fill style={{ objectFit: 'contain' }} sizes="40px" />
          </div>
          <span className="acb-item-label">{cat.label}</span>
          {hasRight && <span className="acb-item-chevron"><IconChevronRight size={14} /></span>}
        </div>

        {/* Mega — always in DOM; CSS transition shows/hides */}
        {cat.megaColumns && (
          <div className="acb-mega">
            <div className="acb-mega-cols">
              {cat.megaColumns.map((col) => (
                <div key={col.heading} className="acb-mega-group">
                  <div className="acb-mega-group-heading">{col.heading}</div>
                  {col.items.map((item) => (
                    <Link key={item.label} href={item.href} className="acb-mega-item" onClick={close}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="acb-mega-banner">
              <Image
                src="/grocery-shop/all-categories-submenu/all-categories-submenu1.webp"
                alt="Grocery specials"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="220px"
              />
            </div>
          </div>
        )}

        {/* L2 — always in DOM */}
        {cat.subItems && (
          <div className="acb-sub-l2">
            {cat.subItems.map((sub) => {
              const isL2Active = activeL2 === sub.label;
              return (
                <div
                  key={sub.label}
                  className={`acb-sub-l2-row${isL2Active ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveL2(sub.label)}
                  onMouseLeave={() => setActiveL2(null)}
                >
                  <div className="acb-sub-l2-item">
                    <span>{sub.label}</span>
                    {sub.children && <span className="acb-sub-chevron"><IconChevronRight size={14} /></span>}
                  </div>
                  {/* L3 — always in DOM */}
                  {sub.children && (
                    <div className="acb-sub-l3">
                      {sub.children.map((child) => (
                        <Link key={child.label} href={child.href} className="acb-sub-l3-item" onClick={close}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={ref} className="acb-wrap">

      <button
        onClick={() => { setOpen(v => !v); if (open) { setActiveL1(null); setActiveL2(null); setShowExtra(false); } }}
        aria-expanded={open}
        aria-haspopup="true"
        className="acb-btn"
      >
        <IconHamburger />
        <span>All Categories</span>
      </button>

      {open && (
        <div className="acb-panel" role="menu">
          {BASE_CATS.map((cat) => renderRow(cat))}

          <div className={`acb-extra-wrap${showExtra ? ' is-open' : ''}`}>
            {EXTRA_CATS.map((cat) => renderRow(cat))}
          </div>

          <button
            type="button"
            className="acb-expand-btn"
            onClick={() => { setShowExtra(v => !v); setActiveL1(null); setActiveL2(null); }}
            onMouseEnter={() => { setActiveL1(null); setActiveL2(null); }}
          >
            <span className="acb-expand-icon"><IconFlash /></span>
            <span className="acb-expand-label">
              {showExtra ? 'Hide Categories –' : 'All Categories +'}
            </span>
          </button>
        </div>
      )}

      <style>{`
        .acb-wrap {
          position: relative;
          height: 75px;
          display: flex;
          align-items: center;
        }

        .acb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 600;
          color: #222;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          white-space: nowrap;
          transition: color 200ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .acb-btn:hover,
        .acb-btn[aria-expanded="true"] { color: #1B8057; }

        @keyframes acbIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Panel height = 1px(border) + 4px(padding-top) + 9×45px(items) + 49px(expand) + 1px(border) = 460px */
        .acb-panel {
          position: absolute;
          top: 100%;
          left: 0;
          width: 275px;
          background-color: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 4px 0 0;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.13);
          z-index: 500;
          overflow: visible;
          animation: acbIn 220ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .acb-l1-row { position: relative; }
        .acb-l1-row.is-active { z-index: 1; }

        /* Item: 2px + 40px icon + 2px = 44px + 1px border = 45px */
        .acb-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 2px 14px;
          cursor: pointer;
          color: #333;
          font-size: 14.5px;
          font-weight: 500;
          border-bottom: 1px solid #f2f2f2;
          transition: background-color 120ms ease, color 120ms ease;
          user-select: none;
        }
        .acb-l1-row:hover .acb-item,
        .acb-l1-row.is-active .acb-item {
          background-color: #f3faf6;
          color: #1B8057;
        }

        .acb-item-icon {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          background-color: #f0f5f0;
        }
        .acb-item-label { flex: 1; min-width: 0; }
        .acb-item-chevron {
          color: #c0c0c0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: color 120ms ease;
        }
        .acb-l1-row:hover .acb-item-chevron,
        .acb-l1-row.is-active .acb-item-chevron { color: #1B8057; }

        .acb-extra-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .acb-extra-wrap.is-open { max-height: 130px; }
        .acb-extra-wrap .acb-l1-row {
          opacity: 0;
          transform: translateY(-5px);
          transition: opacity 220ms ease, transform 220ms ease;
        }
        .acb-extra-wrap.is-open .acb-l1-row {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 160ms;
        }
        .acb-extra-wrap.is-open .acb-l1-row:nth-child(2) { transition-delay: 220ms; }

        /* Expand button: 4px + 40px icon + 4px = 48px + 1px border-top = 49px */
        .acb-expand-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 4px 14px;
          border: none;
          border-top: 1px solid #e8e8e8;
          background: none;
          cursor: pointer;
          font-size: 14.5px;
          font-weight: 700;
          color: #222;
          transition: background-color 120ms ease, color 120ms ease;
          text-align: left;
          border-radius: 0 0 12px 12px;
        }
        .acb-expand-btn:hover { background-color: #f3faf6; color: #1B8057; }
        .acb-expand-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #1B8057;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color 120ms ease;
        }
        .acb-expand-btn:hover .acb-expand-icon { background-color: #14623F; }

        /* ══ Mega ══
           top: -5px = panel border(1px) + panel padding-top(4px).
           Aligns mega outer-top with the nav border bottom. */
        .acb-mega {
          position: absolute;
          top: -5px;
          left: 100%;
          width: 890px;
          height: 520px;
          display: flex;
          flex-direction: row;
          background-color: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.13);
          z-index: 10;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(12px);
          transition:
            opacity     280ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   280ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 280ms;
        }
        .acb-l1-row.is-active .acb-mega {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
          transition:
            opacity     280ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   280ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 0ms;
        }

        .acb-mega-cols {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          padding: 28px 16px 24px 28px;
          height: 100%;
          box-sizing: border-box;
        }
        .acb-mega-group {
          padding: 0 12px 0 0;
          display: flex;
          flex-direction: column;
        }
        .acb-mega-group-heading {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          letter-spacing: -0.1px;
        }
        .acb-mega-item {
          display: block;
          font-size: 14.5px;
          color: #555;
          text-decoration: none;
          padding: 3.5px 0;
          line-height: 1.5;
          transition: color 120ms ease;
        }
        .acb-mega-item:hover { color: #1B8057; }

        .acb-mega-banner {
          width: 220px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        /* ══ L2 ══ */
        .acb-sub-l2 {
          position: absolute;
          top: 0;
          left: 100%;
          width: 240px;
          background-color: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 8px 0;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.13);
          z-index: 10;
          overflow: visible;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(12px);
          transition:
            opacity     260ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   260ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 260ms;
        }
        .acb-l1-row.is-active .acb-sub-l2 {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
          transition:
            opacity     260ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   260ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 0ms;
        }

        .acb-sub-l2-row { position: relative; }

        .acb-sub-l2-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          font-size: 14.5px;
          font-weight: 500;
          color: #333;
          cursor: pointer;
          border-bottom: 1px solid #f2f2f2;
          user-select: none;
          transition: background-color 120ms ease, color 120ms ease;
        }
        .acb-sub-l2-row:last-child .acb-sub-l2-item { border-bottom: none; }
        .acb-sub-l2-row:hover .acb-sub-l2-item,
        .acb-sub-l2-row.is-active .acb-sub-l2-item {
          background-color: #f3faf6;
          color: #1B8057;
        }
        .acb-sub-chevron {
          color: #c0c0c0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: color 120ms ease;
        }
        .acb-sub-l2-row:hover .acb-sub-chevron,
        .acb-sub-l2-row.is-active .acb-sub-chevron { color: #1B8057; }

        /* ══ L3 ══ */
        .acb-sub-l3 {
          position: absolute;
          top: 0;
          left: 100%;
          width: 220px;
          background-color: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 8px 0;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.13);
          z-index: 20;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(12px);
          transition:
            opacity     220ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   220ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 220ms;
        }
        .acb-sub-l2-row.is-active .acb-sub-l3 {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
          transition:
            opacity     220ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   220ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 0ms;
        }
        .acb-sub-l3-item {
          display: block;
          padding: 10px 16px;
          font-size: 14px;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #f2f2f2;
          transition: background-color 120ms ease, color 120ms ease;
        }
        .acb-sub-l3-item:last-child { border-bottom: none; }
        .acb-sub-l3-item:hover { background-color: #f3faf6; color: #1B8057; }
      `}</style>
    </div>
  );
}
