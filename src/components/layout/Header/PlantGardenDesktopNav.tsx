'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-plant-garden.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const pgSliderProducts: SliderProduct[] = [
  { id: 'pg-1', slug: 'anthurium-plant-pot', name: 'Anthurium Plant Pot', price: 18, compareAtPrice: 12, images: [{ src: '/plant-and-garden/products/products2.webp' }] },
  { id: 'pg-3', slug: 'ceramic-plant-pots', name: 'Ceramic Plant Pots', price: 30, images: [{ src: '/plant-and-garden/products/products8.webp' }] },
  { id: 'pg-6', slug: 'forest-indoor-plants', name: 'Forest Indoor Plants', price: 29, compareAtPrice: 22, images: [{ src: '/plant-and-garden/products/products10.webp' }] },
  { id: 'pg-13', slug: 'monstera-outdoor-giant', name: 'Monstera Outdoor Giant', price: 85, images: [{ src: '/plant-and-garden/products/products11.webp' }] },
  { id: 'pg-15', slug: 'white-ceramic-planter', name: 'White Ceramic Planter', price: 35, compareAtPrice: 45, images: [{ src: '/plant-and-garden/products/products12.webp' }] },
  { id: 'pg-21', slug: 'watering-can-copper', name: 'Watering Can Copper', price: 48, images: [{ src: '/plant-and-garden/products/products13.webp' }] },
];

export function PlantGardenDesktopNav() {
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
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              fontWeight: 500,
              color: '#111',
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'color 150ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#3a7d44'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#111'; }}
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
              sliderProducts={item.megaProductSlider ? pgSliderProducts : undefined}
              sliderHrefBase="/plant-garden/product"
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
