'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/useClickOutside';

/* -- Icons -- */

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

/* -- Category icons (inline SVG, Remix-icon style) -- */

function IconMonitor({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function IconCamera({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M23 19V8a2 2 0 0 0-2-2h-3.17l-1.83-2H8L6.17 6H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconKeyboard({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M8 14h8" />
    </svg>
  );
}

function IconPhone({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
}

function IconWatch({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <circle cx="12" cy="12" r="6" />
      <path d="M16.13 7.66 15.5 2h-7l-.63 5.66M7.87 16.34 8.5 22h7l.63-5.66" />
    </svg>
  );
}

function IconWifi({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M5 12.55a11 11 0 0 1 14 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
    </svg>
  );
}

function IconHeadphone({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function IconTablet({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
}

/* -- Types -- */

interface L3Item { label: string; href: string; }
interface L2Item { label: string; href: string; children?: L3Item[]; }
interface MegaItem { label: string; href: string; }
interface MegaColumn { heading: string; items: MegaItem[]; }
export interface CategoryEntry {
  id: string;
  label: string;
  iconNode: ReactNode;
  href: string;
  megaColumns?: MegaColumn[];
  subItems?: L2Item[];
}

/* -- Data -- */

const SHOP = '/megastore/shop';
const Q = (cat: string) => `/megastore/shop?category=${encodeURIComponent(cat)}`;

const SHARED_MEGA_COLUMNS: MegaColumn[] = [
  {
    heading: 'Eletrônicos',
    items: [
      { label: 'Carregador sem fio', href: SHOP },
      { label: 'Bateria externa', href: SHOP },
      { label: 'Smartphone', href: SHOP },
      { label: 'Computador desktop', href: SHOP },
      { label: 'Câmera digital', href: SHOP },
    ],
  },
  {
    heading: 'Acessórios',
    items: [
      { label: 'Console de videogame', href: SHOP },
      { label: 'Monitor', href: SHOP },
      { label: 'Óculos inteligentes', href: SHOP },
      { label: 'Mouse Bluetooth', href: SHOP },
      { label: 'MP3 Player', href: SHOP },
    ],
  },
  {
    heading: 'Fones de ouvido',
    items: [
      { label: 'Apple AirPods', href: SHOP },
      { label: 'Bose QuietComfort', href: SHOP },
      { label: 'Sennheiser HD', href: SHOP },
      { label: 'Audio-Technica', href: SHOP },
      { label: 'Studio3 Wireless', href: SHOP },
    ],
  },
  {
    heading: 'Relógio inteligente',
    items: [
      { label: 'Fitbit Watch', href: SHOP },
      { label: 'Apple Watch', href: SHOP },
      { label: 'Galaxy Watch', href: SHOP },
      { label: 'Garmin Fenix', href: SHOP },
      { label: 'TicWatch Pro', href: SHOP },
    ],
  },
  {
    heading: 'Smartphone',
    items: [
      { label: 'Apple iPhone', href: SHOP },
      { label: 'Huawei P40', href: SHOP },
      { label: "Xiaomi's phones", href: SHOP },
      { label: 'OnePlus 9 Pro', href: SHOP },
      { label: 'Samsung Galaxy', href: SHOP },
    ],
  },
  {
    heading: 'Speaker',
    items: [
      { label: 'Apple HomePod', href: SHOP },
      { label: 'Bose SoundLink', href: SHOP },
      { label: 'Caixa de som para casa', href: SHOP },
      { label: 'Sound Touch', href: SHOP },
      { label: 'Sonos Play', href: SHOP },
    ],
  },
];

/* L2/L3 cascade derived from the same content tree */
const SHARED_SUB_ITEMS: L2Item[] = SHARED_MEGA_COLUMNS.map((col) => ({
  label: col.heading,
  href: SHOP,
  children: col.items.map((it) => ({ label: it.label, href: it.href })),
}));

export const MEGASTORE_CATEGORIES: CategoryEntry[] = [
  {
    id: 'laptop-computers',
    label: 'Notebooks e computadores',
    iconNode: <IconMonitor />,
    href: Q('Laptop'),
    megaColumns: SHARED_MEGA_COLUMNS,
  },
  {
    id: 'wireless-camera',
    label: 'Câmera sem fio',
    iconNode: <IconCamera />,
    href: Q('Wireless Camera'),
    subItems: SHARED_SUB_ITEMS,
  },
  {
    id: 'gaming-keyboard',
    label: 'Teclado gamer',
    iconNode: <IconKeyboard />,
    href: Q('Gaming Keyboard'),
    subItems: SHARED_SUB_ITEMS.slice(0, 4),
  },
  {
    id: 'smart-phones',
    label: 'Smartphones',
    iconNode: <IconPhone />,
    href: Q('Smart Phones'),
    subItems: SHARED_SUB_ITEMS.slice(2, 6),
  },
  {
    id: 'wearable-camera',
    label: 'Câmera vestível',
    iconNode: <IconCamera />,
    href: Q('Camera'),
  },
  {
    id: 'smartwatch',
    label: 'Relógio inteligente',
    iconNode: <IconWatch />,
    href: Q('Smart Watch'),
  },
  {
    id: 'wireless-router',
    label: 'Roteador sem fio',
    iconNode: <IconWifi />,
    href: Q('Wireless Router'),
  },
  {
    id: 'headphone-audios',
    label: 'Fones de ouvido e áudio',
    iconNode: <IconHeadphone />,
    href: Q('Headphones'),
    subItems: SHARED_SUB_ITEMS.slice(0, 3),
  },
  {
    id: 'ipad-tablet',
    label: 'iPad e tablet',
    iconNode: <IconTablet />,
    href: Q('Tablet'),
  },
  /* Extra (revealed by "All Categories +") */
  {
    id: 'speakers',
    label: 'Caixas de som e áudio',
    iconNode: <IconHeadphone />,
    href: Q('Speaker'),
  },
  {
    id: 'accessories-extra',
    label: 'Acessórios',
    iconNode: <IconKeyboard />,
    href: Q('Accessories'),
  },
];

const BASE_CATS = MEGASTORE_CATEGORIES.slice(0, 9);
const EXTRA_CATS = MEGASTORE_CATEGORIES.slice(9);

/* -- Component -- */

export function MegastoreAllCategoriesButton() {
  const [open, setOpen] = useState(false);
  const [activeL1, setActiveL1] = useState<string | null>(null);
  const [activeL2, setActiveL2] = useState<string | null>(null);
  const [showExtra, setShowExtra] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    setActiveL1(null);
    setActiveL2(null);
    setShowExtra(false);
  };

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
        className={`mscb-l1-row${isActive ? ' is-active' : ''}`}
        onMouseEnter={() => { setActiveL1(cat.id); setActiveL2(null); }}
        onMouseLeave={() => { setActiveL1(null); setActiveL2(null); }}
      >
        <Link href={cat.href} className="mscb-item" onClick={close}>
          <span className="mscb-item-icon">{cat.iconNode}</span>
          <span className="mscb-item-label">{cat.label}</span>
          {hasRight && <span className="mscb-item-chevron"><IconChevronRight size={14} /></span>}
        </Link>

        {cat.megaColumns && (
          <div className="mscb-mega">
            <div className="mscb-mega-cols">
              {cat.megaColumns.map((col) => (
                <div key={col.heading} className="mscb-mega-group">
                  <div className="mscb-mega-group-heading">{col.heading}</div>
                  {col.items.map((item) => (
                    <Link key={item.label} href={item.href} className="mscb-mega-item" onClick={close}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <Link
              href="/megastore/shop"
              className="mscb-mega-banner"
              onClick={close}
              aria-label="Discount Offer — up to 50% off"
            >
              <Image
                src="/megastore/offcanvas-items/offcanvas-items1.webp"
                alt="Discount Offer — up to 50% off"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="220px"
              />
            </Link>
          </div>
        )}

        {cat.subItems && (
          <div className="mscb-sub-l2">
            {cat.subItems.map((sub) => {
              const isL2Active = activeL2 === sub.label;
              return (
                <div
                  key={sub.label}
                  className={`mscb-sub-l2-row${isL2Active ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveL2(sub.label)}
                  onMouseLeave={() => setActiveL2(null)}
                >
                  <Link href={sub.href} className="mscb-sub-l2-item" onClick={close}>
                    <span>{sub.label}</span>
                    {sub.children && <span className="mscb-sub-chevron"><IconChevronRight size={14} /></span>}
                  </Link>
                  {sub.children && (
                    <div className="mscb-sub-l3">
                      {sub.children.map((child) => (
                        <Link key={child.label} href={child.href} className="mscb-sub-l3-item" onClick={close}>
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
    <div ref={ref} className="mscb-wrap">
      <button
        onClick={() => { setOpen((v) => !v); if (open) { setActiveL1(null); setActiveL2(null); setShowExtra(false); } }}
        aria-expanded={open}
        aria-haspopup="true"
        className="mscb-btn"
      >
        <IconHamburger />
        <span>Todas as categorias</span>
      </button>

      {open && (
        <div className="mscb-panel" role="menu">
          {BASE_CATS.map((cat) => renderRow(cat))}

          <div className={`mscb-extra-wrap${showExtra ? ' is-open' : ''}`}>
            {EXTRA_CATS.map((cat) => renderRow(cat))}
          </div>

          <button
            type="button"
            className="mscb-expand-btn"
            onClick={() => { setShowExtra((v) => !v); setActiveL1(null); setActiveL2(null); }}
            onMouseEnter={() => { setActiveL1(null); setActiveL2(null); }}
          >
            <span className="mscb-expand-icon"><IconFlash /></span>
            <span className="mscb-expand-label">
              {showExtra ? 'Ocultar categorias –' : 'Todas as categorias +'}
            </span>
          </button>
        </div>
      )}

      <style>{`
        .mscb-wrap {
          position: relative;
          height: 60px;
          display: flex;
          align-items: center;
        }

        .mscb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 600;
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          white-space: nowrap;
          transition: color 200ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .mscb-btn:hover,
        .mscb-btn[aria-expanded="true"] { color: #f26522; }

        @keyframes mscbIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mscb-panel {
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
          animation: mscbIn 220ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .mscb-l1-row { position: relative; }
        .mscb-l1-row.is-active { z-index: 1; }

        .mscb-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          cursor: pointer;
          color: #333;
          font-size: 14.5px;
          font-weight: 500;
          border-bottom: 1px solid #f2f2f2;
          transition: background-color 120ms ease, color 120ms ease;
          user-select: none;
          text-decoration: none;
        }
        .mscb-l1-row:hover .mscb-item,
        .mscb-l1-row.is-active .mscb-item {
          background-color: #fff5ee;
          color: #f26522;
        }

        .mscb-item-icon {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: inherit;
        }
        .mscb-item-label { flex: 1; min-width: 0; }
        .mscb-item-chevron {
          color: #c0c0c0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: color 120ms ease;
        }
        .mscb-l1-row:hover .mscb-item-chevron,
        .mscb-l1-row.is-active .mscb-item-chevron { color: #f26522; }

        .mscb-extra-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mscb-extra-wrap.is-open { max-height: 130px; }
        .mscb-extra-wrap .mscb-l1-row {
          opacity: 0;
          transform: translateY(-5px);
          transition: opacity 220ms ease, transform 220ms ease;
        }
        .mscb-extra-wrap.is-open .mscb-l1-row {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 160ms;
        }
        .mscb-extra-wrap.is-open .mscb-l1-row:nth-child(2) { transition-delay: 220ms; }

        .mscb-expand-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 10px 14px;
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
        .mscb-expand-btn:hover { background-color: #fff5ee; color: #f26522; }
        .mscb-expand-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #f26522;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color 120ms ease;
        }
        .mscb-expand-btn:hover .mscb-expand-icon { background-color: #d65215; }

        /* -- Mega -- */
        .mscb-mega {
          position: absolute;
          top: -5px;
          left: 100%;
          width: 890px;
          height: 480px;
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
        .mscb-l1-row.is-active .mscb-mega {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
          transition:
            opacity     280ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   280ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 0ms;
        }

        .mscb-mega-cols {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          padding: 28px 16px 24px 28px;
          height: 100%;
          box-sizing: border-box;
        }
        .mscb-mega-group {
          padding: 0 12px 0 0;
          display: flex;
          flex-direction: column;
        }
        .mscb-mega-group-heading {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          letter-spacing: -0.1px;
        }
        .mscb-mega-item {
          display: block;
          font-size: 14.5px;
          color: #555;
          text-decoration: none;
          padding: 3.5px 0;
          line-height: 1.5;
          transition: color 120ms ease;
        }
        .mscb-mega-item:hover { color: #f26522; }

        .mscb-mega-banner {
          width: 220px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          display: block;
          text-decoration: none;
        }
        .mscb-mega-banner img {
          transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mscb-mega-banner:hover img {
          transform: scale(1.04);
        }

        /* -- L2 -- */
        .mscb-sub-l2 {
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
        .mscb-l1-row.is-active .mscb-sub-l2 {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
          transition:
            opacity     260ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   260ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 0ms;
        }

        .mscb-sub-l2-row { position: relative; }

        .mscb-sub-l2-item {
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
          text-decoration: none;
        }
        .mscb-sub-l2-row:last-child .mscb-sub-l2-item { border-bottom: none; }
        .mscb-sub-l2-row:hover .mscb-sub-l2-item,
        .mscb-sub-l2-row.is-active .mscb-sub-l2-item {
          background-color: #fff5ee;
          color: #f26522;
        }
        .mscb-sub-chevron {
          color: #c0c0c0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: color 120ms ease;
        }
        .mscb-sub-l2-row:hover .mscb-sub-chevron,
        .mscb-sub-l2-row.is-active .mscb-sub-chevron { color: #f26522; }

        /* -- L3 -- */
        .mscb-sub-l3 {
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
        .mscb-sub-l2-row.is-active .mscb-sub-l3 {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
          transition:
            opacity     220ms cubic-bezier(0.22, 1, 0.36, 1),
            transform   220ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility    0ms linear 0ms;
        }
        .mscb-sub-l3-item {
          display: block;
          padding: 10px 16px;
          font-size: 14px;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #f2f2f2;
          transition: background-color 120ms ease, color 120ms ease;
        }
        .mscb-sub-l3-item:last-child { border-bottom: none; }
        .mscb-sub-l3-item:hover { background-color: #fff5ee; color: #f26522; }
      `}</style>
    </div>
  );
}
