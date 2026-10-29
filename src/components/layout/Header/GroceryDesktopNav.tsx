'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-grocery.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const grocerySliderProducts: SliderProduct[] = [
  { id: 'g-1', slug: 'mangosteen-green-food', name: 'Mangosteen Green Food', price: 10, compareAtPrice: 16, images: [{ src: '/grocery-shop/products/products1.webp' }] },
  { id: 'g-2', slug: 'fresh-green-kale-leaves', name: 'Fresh green kale leaves', price: 4, images: [{ src: '/grocery-shop/products/products6.webp' }] },
  { id: 'g-3', slug: 'bunch-bananas-fruits', name: 'Bunch bananas fruits', price: 3, images: [{ src: '/grocery-shop/products/products7.webp' }] },
  { id: 'g-4', slug: 'salmon-beef-meat', name: 'Salmon beef Meat', price: 12, compareAtPrice: 16, images: [{ src: '/grocery-shop/products/products8.webp' }] },
  { id: 'g-5', slug: 'tomato-sauce-jar', name: 'Tomato sauce jar', price: 8, images: [{ src: '/grocery-shop/products/products9.webp' }] },
  { id: 'g-6', slug: 'recron-seeds-guava', name: 'Recron Seeds Guava', price: 5, compareAtPrice: 7, images: [{ src: '/grocery-shop/products/products10.webp' }] },
];

export function GroceryDesktopNav() {
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
    <nav style={{ display: 'flex', alignItems: 'center', gap: '38px' }}>
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
              fontSize: '17px',
              fontWeight: 500,
              color: activeMenu === item.id ? '#1E7A3C' : '#222',
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'color 150ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#1E7A3C'; }}
            onMouseLeave={(e) => {
              if (activeMenu !== item.id) e.currentTarget.style.color = '#222';
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
              sliderProducts={item.megaProductSlider ? grocerySliderProducts : undefined}
              sliderHrefBase="/grocery/product"
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
