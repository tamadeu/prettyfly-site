'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct, type MegaMenuTheme } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-pizza.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const pizzaMegaMenuTheme: MegaMenuTheme = {
  bg: '#000',
  headingColor: '#fff',
  linkColor: 'rgba(255,255,255,0.65)',
  linkHoverColor: '#e84d1c',
  cardBg: '#1a1a1a',
  sliderBtnBg: '#111',
  sliderBtnBorder: '#3a3a3a',
  sliderBtnHoverBorder: '#fff',
  sliderBtnColor: '#fff',
  sliderOldPriceColor: 'rgba(255,255,255,0.4)',
  promoTitleColor: '#fff',
  promoSubtitleColor: 'rgba(255,255,255,0.65)',
  categoryCountColor: 'rgba(255,255,255,0.5)',
};

const psSliderProducts: SliderProduct[] = [
  { id: 'ps-1', slug: 'brooklyn-bold-pizza', name: 'Brooklyn Bold Pizza', price: 20, images: [{ src: '/pizza/products/products2.webp' }] },
  { id: 'ps-2', slug: 'marinara-medley-pizza', name: 'Marinara Medley Pizza', price: 32, images: [{ src: '/pizza/products/products8.webp' }] },
  { id: 'ps-3', slug: 'pepperoni-pizza', name: 'Pepperoni Pizza', price: 14, compareAtPrice: 24, images: [{ src: '/pizza/products/products6.webp' }] },
  { id: 'ps-4', slug: 'superfood-slice-pizza', name: 'Superfood Slice Pizza', price: 28, images: [{ src: '/pizza/products/products7.webp' }] },
  { id: 'ps-5', slug: 'organic-harvest-pizza', name: 'Organic Harvest Pizza', price: 12, compareAtPrice: 25, images: [{ src: '/pizza/products/products9.webp' }] },
  { id: 'ps-6', slug: 'taco-pizza-fusion', name: 'Taco Pizza Fusion', price: 26, images: [{ src: '/pizza/products/products10.webp' }] },
];

export function PizzaShopDesktopNav() {
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
              gap: '6px',
              fontSize: '16px',
              fontWeight: 500,
              color: activeMenu === item.id ? '#e84d1c' : '#fff',
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'color 150ms ease',
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
              sliderProducts={item.megaProductSlider ? psSliderProducts : undefined}
              sliderHrefBase="/pizza/product"
              theme={pizzaMegaMenuTheme}
            />
          )}

          {item.type === 'dropdown' && item.children && activeMenu === item.id && (
            <DropdownMenu
              items={item.children}
              bg="#000"
              textColor="rgba(255,255,255,0.75)"
              borderColor="#2a2a2a"
              hoverColor="#e84d1c"
            />
          )}
        </div>
      ))}
    </nav>
  );
}
