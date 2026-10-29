'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-jewellery.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const jwSliderProducts: SliderProduct[] = [
  { id: 'jw-1', slug: 'jw-diamond-solitaire-ring', name: 'Diamond Solitaire Ring', price: 299, images: [{ src: '/jewelry/products/products1.webp' }] },
  { id: 'jw-2', slug: 'jw-gold-chain-necklace', name: 'Gold Chain Necklace', price: 185, compareAtPrice: 240, images: [{ src: '/jewelry/products/products9.webp' }] },
  { id: 'jw-3', slug: 'jw-pearl-drop-earrings', name: 'Pearl Drop Earrings', price: 120, images: [{ src: '/jewelry/products/products10.webp' }] },
  { id: 'jw-6', slug: 'jw-diamond-pendant-necklace', name: 'Diamond Pendant Necklace', price: 340, images: [{ src: '/jewelry/products/products14.webp' }] },
  { id: 'jw-11', slug: 'jw-emerald-statement-ring', name: 'Emerald Statement Ring', price: 385, compareAtPrice: 450, images: [{ src: '/jewelry/products/products5.webp' }] },
  { id: 'jw-12', slug: 'jw-tennis-bracelet', name: 'Diamond Tennis Bracelet', price: 520, images: [{ src: '/jewelry/products/products6.webp' }] },
];

export function JewelleryDesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const navItems = navigationData as NavigationItem[];

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.5vw, 38px)' }}>
      {navItems.map((item) => (
        <div
          key={item.id}
          style={{ position: 'static' }}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#222',
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'color 150ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#b89b6e'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#222'; }}
          >
            {item.label}
            {(item.type === 'dropdown' || item.type === 'megamenu') && (
              <span
                style={{
                  display: 'inline-flex',
                  transition: 'transform 300ms ease',
                  transform: activeMenu === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <IconChevronDown />
              </span>
            )}
          </Link>

          {item.type === 'megamenu' && (item.megaMenu || item.megaCategoryCards) && activeMenu === item.id && (
            <MegaMenu
              columns={item.megaMenu}
              promoImage={item.megaImage}
              showProductSlider={item.megaProductSlider}
              categoryCards={item.megaCategoryCards}
              sliderProducts={item.megaProductSlider ? jwSliderProducts : undefined}
              sliderHrefBase="/products"
            />
          )}

          {item.type === 'dropdown' && item.children && activeMenu === item.id && (
            <DropdownMenu items={item.children} />
          )}
        </div>
      ))}
    </nav>
  );
}
