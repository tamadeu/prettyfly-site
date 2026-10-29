'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-nutrition.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const nutritionSliderProducts: SliderProduct[] = [
  { id: 'nt-1', slug: 'natural-energy-bites', name: 'Natural Energy Bites', price: 17, images: [{ src: '/nutrition/products/products1.webp' }] },
  { id: 'nt-2', slug: 'fiber-fit-capsules', name: 'Fiber Fit Capsules', price: 26, images: [{ src: '/nutrition/products/products5.webp' }] },
  { id: 'nt-3', slug: 'iron-essence-tablets', name: 'Iron Essence Tablets', price: 13, compareAtPrice: 23, images: [{ src: '/nutrition/products/products6.webp' }] },
  { id: 'nt-4', slug: 'power-sports-nutrition', name: 'Power Sports Nutrition', price: 28, images: [{ src: '/nutrition/products/products2.webp' }] },
  { id: 'nt-5', slug: 'peak-pea-protein', name: 'Peak Pea Protein', price: 14, compareAtPrice: 24, images: [{ src: '/nutrition/products/products3.webp' }] },
  { id: 'nt-6', slug: 'glossy-protein-jar', name: 'Glossy Protein Jar', price: 25, images: [{ src: '/nutrition/products/products4.webp' }] },
];

export function NutritionDesktopNav() {
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
    <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
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
              gap: '6px',
              fontSize: '16px',
              fontWeight: 500,
              color: '#222',
              textDecoration: 'none',
              padding: '8px 0',
              whiteSpace: 'nowrap',
            }}
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
              sliderProducts={item.megaProductSlider ? nutritionSliderProducts : undefined}
              sliderHrefBase="/nutrition/product"
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
