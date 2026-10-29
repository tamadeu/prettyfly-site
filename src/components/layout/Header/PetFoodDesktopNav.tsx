'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-pet-food.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const petFoodSliderProducts: SliderProduct[] = [
  { id: 'pf-1', slug: 'animal-nature-food', name: 'Animal Nature Food', price: 17, images: [{ src: '/pet-food/products/products1.webp' }] },
  { id: 'pf-2', slug: 'bowl-of-pets-food', name: 'Bowl of Pets Food', price: 22, images: [{ src: '/pet-food/products/products8.webp' }] },
  { id: 'pf-3', slug: 'chicken-cat-food', name: 'Chicken Cat Food', price: 12, compareAtPrice: 16, images: [{ src: '/pet-food/products/products9.webp' }] },
  { id: 'pf-4', slug: 'dog-bones-food', name: 'Dog Bones Food', price: 15, compareAtPrice: 20, images: [{ src: '/pet-food/products/products10.webp' }] },
  { id: 'pf-5', slug: 'dog-food-guangzhou', name: 'Dog Food Guangzhou', price: 35, images: [{ src: '/pet-food/products/products11.webp' }] },
  { id: 'pf-6', slug: 'hooray-kitten-food', name: 'Hooray Kitten Food', price: 14, compareAtPrice: 24, images: [{ src: '/pet-food/products/products12.webp' }] },
];

export function PetFoodDesktopNav() {
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
              fontSize: '19px',
              fontWeight: 500,
              color: 'rgb(10, 66, 83)',
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'opacity 150ms ease',
              whiteSpace: 'nowrap',
              opacity: activeMenu === item.id ? 0.7 : 1,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => {
              if (activeMenu !== item.id) e.currentTarget.style.opacity = '1';
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
              sliderProducts={item.megaProductSlider ? petFoodSliderProducts : undefined}
              sliderHrefBase="/pet-food/product"
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
