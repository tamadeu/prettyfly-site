'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer } from '@/components/ui/Drawer';
import { useUIStore } from '@/store/uiStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { isPlantGardenSlug } from '@/utils/storefront';
import navigationPlantGarden from '@/data/navigation-plant-garden.json';
import type { NavigationItem, MegaMenuColumn } from '@/types/common';

const navItems = navigationPlantGarden as NavigationItem[];
const accent = { primary: '#3a7d44', text: '#3a7d44' };

/* ── Icons ── */

function IconPlus({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden focusable={false} fill="none" viewBox="0 0 10 10" width="16" height="16"
      style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: open ? 0 : 1, transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
    </svg>
  );
}

function IconMinus({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden focusable={false} fill="none" viewBox="0 0 10 2" width="16" height="16"
      style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: open ? 1 : 0, transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
    </svg>
  );
}

function IconHeart({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" />
    </svg>
  );
}

function IconUser({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" />
    </svg>
  );
}

function IconClose({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 10.5858L16.9497 5.63604L18.364 7.05025L13.4142 12L18.364 16.9497L16.9497 18.364L12 13.4142L7.05025 18.364L5.63604 16.9497L10.5858 12L5.63604 7.05025L7.05025 5.63604L12 10.5858Z" />
    </svg>
  );
}

/* ── Collapse ── */

function Collapse({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0, transition: 'grid-template-rows 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
      <div style={{ overflow: 'hidden', minHeight: 0 }}>{children}</div>
    </div>
  );
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span style={{ position: 'relative', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: accent.text }}>
      <IconPlus open={open} />
      <IconMinus open={open} />
    </span>
  );
}

/* ── AccordionRow ── */

function AccordionRow({ label, href, isOpen, onToggle, onNavigate, depth = 0, hasChildren }: {
  label: string; href?: string; isOpen: boolean; onToggle: () => void; onNavigate: () => void; depth?: 0 | 1; hasChildren: boolean;
}) {
  const paddingInline = depth === 0 ? '20px' : '36px';
  const fontSize = depth === 0 ? '15px' : '14px';
  const color = depth === 0 ? accent.text : accent.primary;

  return (
    <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', borderBottom: '1px solid #eee' }}>
      {href ? (
        <Link href={href} onClick={onNavigate} style={{ flex: 1, display: 'flex', alignItems: 'center', padding: `16px ${paddingInline}`, fontSize, fontWeight: 500, color, textDecoration: 'none' }}>
          {label}
        </Link>
      ) : (
        <span style={{ flex: 1, display: 'flex', alignItems: 'center', padding: `16px ${paddingInline}`, fontSize, fontWeight: 500, color }}>
          {label}
        </span>
      )}
      {hasChildren && (
        <button onClick={onToggle} aria-expanded={isOpen} aria-label={isOpen ? `Collapse ${label}` : `Expand ${label}`}
          style={{ width: '54px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ToggleIcon open={isOpen} />
        </button>
      )}
    </div>
  );
}

/* ── Main component ── */

export function PlantGardenMobileNav() {
  const { mobileMenuOpen, closeMobileMenu } = useUIStore();
  const wishlistItems = useWishlistStore((s) => s.items);
  const visibleWishlist = wishlistItems.filter((i) => isPlantGardenSlug(i.slug));

  const [openTop, setOpenTop] = useState<Record<string, boolean>>({});
  const [openCol, setOpenCol] = useState<Record<string, boolean>>({});

  const toggleTop = (id: string) => setOpenTop((p) => ({ ...p, [id]: !p[id] }));
  const toggleCol = (key: string) => setOpenCol((p) => ({ ...p, [key]: !p[key] }));

  const close = () => {
    closeMobileMenu();
    setTimeout(() => { setOpenTop({}); setOpenCol({}); }, 400);
  };

  return (
    <Drawer isOpen={mobileMenuOpen} onClose={close} side="start" width="55rem">

      {/* Header: logo + close */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 12px 18px 20px', borderBottom: '1px solid #eee' }}>
        <Link href="/home/plant-garden-shop" onClick={close} style={{ display: 'inline-flex' }}>
          <Image src="/fashion/logo/logo1.webp" alt="Ambaz" width={100} height={28} style={{ objectFit: 'contain' }} />
        </Link>
        <button onClick={close} aria-label="Close menu"
          style={{ width: '44px', height: '44px', marginRight: '-4px', border: 'none', background: 'transparent', color: accent.text, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconClose size={30} />
        </button>
      </div>

      {/* Nav accordion */}
      <nav>
        {navItems.map((item) => {
          const columns: MegaMenuColumn[] = item.megaMenu ?? [];
          const flatChildren = item.children ?? [];
          const categoryCards = item.megaCategoryCards ?? [];
          const hasChildren = columns.length > 0 || flatChildren.length > 0 || categoryCards.length > 0;
          const isTopOpen = !!openTop[item.id];
          const linkHref = item.href && item.href !== '#' ? item.href : undefined;

          return (
            <div key={item.id}>
              <AccordionRow label={item.label} href={linkHref} isOpen={isTopOpen} onToggle={() => toggleTop(item.id)} onNavigate={close} depth={0} hasChildren={hasChildren} />
              {hasChildren && (
                <Collapse open={isTopOpen}>
                  {columns.map((col, ci) => {
                    const colKey = `${item.id}::${ci}`;
                    const isColOpen = !!openCol[colKey];
                    const hasLinks = col.links.length > 0;
                    return (
                      <div key={colKey}>
                        <AccordionRow label={col.title} isOpen={isColOpen} onToggle={() => toggleCol(colKey)} onNavigate={close} depth={1} hasChildren={hasLinks} />
                        {hasLinks && (
                          <Collapse open={isColOpen}>
                            {col.links.map((l) => (
                              <Link key={l.id} href={l.href} onClick={l.comingSoon ? (e) => e.preventDefault() : close}
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 52px', fontSize: '14px', fontWeight: 500, color: accent.text, textDecoration: 'none', borderBottom: '1px solid #f0f0f0', cursor: l.comingSoon ? 'default' : undefined }}>
                                {l.label}
                                {l.comingSoon && (
                                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#fff', backgroundColor: 'rgba(107, 114, 128, 0.8)', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.3px', lineHeight: 1.4, flexShrink: 0 }}>
                                    Coming Soon
                                  </span>
                                )}
                              </Link>
                            ))}
                          </Collapse>
                        )}
                      </div>
                    );
                  })}
                  {flatChildren.map((c) => (
                    <Link key={c.id} href={c.href} onClick={close}
                      style={{ display: 'block', padding: '14px 36px', fontSize: '14px', fontWeight: 500, color: accent.text, textDecoration: 'none', borderBottom: '1px solid #f0f0f0' }}>
                      {c.label}
                    </Link>
                  ))}
                  {categoryCards.map((c) => (
                    <Link key={c.id} href={c.href} onClick={close}
                      style={{ display: 'block', padding: '14px 36px', fontSize: '14px', fontWeight: 500, color: accent.text, textDecoration: 'none', borderBottom: '1px solid #f0f0f0' }}>
                      {c.label}
                    </Link>
                  ))}
                </Collapse>
              )}
            </div>
          );
        })}
      </nav>

      {/* Wishlist row */}
      <Link href="/plant-garden/wishlist" onClick={close}
        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 20px', borderBottom: '1px solid #eee', color: accent.text, textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
        <span style={{ position: 'relative', display: 'inline-flex' }}>
          <IconHeart size={22} />
          <span style={{ position: 'absolute', top: '-8px', right: '-10px', minWidth: '18px', height: '18px', padding: '0 5px', borderRadius: '9999px', background: accent.primary, color: '#fff', fontSize: '10px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', lineHeight: 1 }}>
            {visibleWishlist.length}
          </span>
        </span>
        Wishlist
      </Link>

      {/* My account */}
      <div style={{ padding: '28px 20px 20px' }}>
        <h4 style={{ fontSize: '22px', fontWeight: 700, color: accent.text, margin: '0 0 18px' }}>My account</h4>
        <button type="button" onClick={close}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', background: accent.primary, color: '#fff', border: 'none', borderRadius: '40px', padding: '15px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginBottom: '12px', fontFamily: 'inherit' }}>
          <IconUser size={18} />Log in
        </button>
        <button type="button" onClick={close}
          style={{ display: 'block', width: '100%', background: 'transparent', color: accent.text, border: `1.5px solid ${accent.primary}`, borderRadius: '40px', padding: '14px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
          Register
        </button>
      </div>

    </Drawer>
  );
}
