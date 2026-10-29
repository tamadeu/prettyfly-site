'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-lipstain.json';
import type { NavigationItem } from '@/types/common';

const ACCENT = '#c9173c';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const lsSliderProducts: SliderProduct[] = [
  { id: 'ls-001', slug: 'ls-beauty-liquid-lipstick',     name: 'Beauty Liquid Lipstick',     price: 28, compareAtPrice: 56,  images: [{ src: '/lipstain/featured-products/featured-products6.webp' }] },
  { id: 'ls-002', slug: 'ls-bite-beauty-lipstick',        name: 'Bite Beauty Lipstick',        price: 62, images: [{ src: '/lipstain/featured-products/featured-products2.webp' }] },
  { id: 'ls-003', slug: 'ls-dry-matte-lip-paint',         name: 'Dry Matte Lip Paint',         price: 30, compareAtPrice: 55, images: [{ src: '/lipstain/featured-products/featured-products3.webp' }] },
  { id: 'ls-005', slug: 'ls-fenty-beauty-lip-paint',      name: 'Fenty Beauty Lip Paint',      price: 70, images: [{ src: '/lipstain/featured-products/featured-products12.webp' }] },
  { id: 'ls-006', slug: 'ls-liquified-wear-lipstick',     name: 'Liquified Wear Lipstick',     price: 48, images: [{ src: '/lipstain/featured-products/featured-products5.webp' }] },
  { id: 'ls-007', slug: 'ls-matte-revolution-lipstick',   name: 'Matte Revolution Lipstick',   price: 46, images: [{ src: '/lipstain/featured-products/featured-products10.webp' }] },
];

export function LipstainDesktopNav() {
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
            style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 500, letterSpacing: '0.02em', color: '#222', textDecoration: 'none', padding: '8px 0', transition: 'color 150ms ease', whiteSpace: 'nowrap' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#222'; }}
          >
            {item.label}
            {(item.type === 'dropdown' || item.type === 'megamenu') && (
              <span style={{ display: 'inline-flex', transition: 'transform 300ms ease', transform: activeMenu === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
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
              sliderProducts={item.megaProductSlider ? lsSliderProducts : undefined}
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
