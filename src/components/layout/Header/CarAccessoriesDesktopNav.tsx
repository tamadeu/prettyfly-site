'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-car-accessories.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const caSliderProducts: SliderProduct[] = [
  { id: 'ca-1', slug: 'edge-audio-speakers', name: 'Edge Audio Speakers', price: 370, images: [{ src: '/car-accessories/products/products3.webp' }] },
  { id: 'ca-8', slug: 'snow-lion-tyre', name: 'Snow Lion Tyre', price: 220, images: [{ src: '/car-accessories/products/products7.webp' }] },
  { id: 'ca-13', slug: 'speedmaster-fan', name: 'Speedmaster Fan', price: 280, compareAtPrice: 250, images: [{ src: '/car-accessories/products/products14.webp' }] },
  { id: 'ca-20', slug: 'automobile-brake-disk', name: 'Automobile Brake Disk', price: 300, compareAtPrice: 340, images: [{ src: '/car-accessories/products/products1.webp' }] },
  { id: 'ca-9', slug: 'car-rim-wheel', name: 'Car Rim Wheel', price: 560, images: [{ src: '/car-accessories/products/products12.webp' }] },
  { id: 'ca-21', slug: 'eos-brake-discs', name: 'Eos Brake Discs', price: 450, images: [{ src: '/car-accessories/products/products25.webp' }] },
];

export function CarAccessoriesDesktopNav() {
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
              color: '#111',
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
              sliderProducts={item.megaProductSlider ? caSliderProducts : undefined}
              sliderHrefBase="/car-accessories/product"
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
