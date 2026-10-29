'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-phone-case.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const pcSliderProducts: SliderProduct[] = [
  { id: 'pc-001', slug: 'pc-aero-flex-cover',      name: 'Aero Flex Cover',       price: 20, compareAtPrice: 30, images: [{ src: '/phone-case/products/products1.webp' }] },
  { id: 'pc-002', slug: 'pc-crystal-clarity-case', name: 'Crystal Clarity Case',  price: 22,                     images: [{ src: '/phone-case/products/products2.webp' }] },
  { id: 'pc-003', slug: 'pc-edge-max-case',         name: 'Edge Max Case',         price: 32, compareAtPrice: 38, images: [{ src: '/phone-case/products/products3.webp' }] },
  { id: 'pc-004', slug: 'pc-iphone-card-case',      name: 'iPhone Card Case',      price: 25,                     images: [{ src: '/phone-case/products/products4.webp' }] },
  { id: 'pc-005', slug: 'pc-iphone-slimline-case',  name: 'iPhone Slimline Case',  price: 42,                     images: [{ src: '/phone-case/products/products5.webp' }] },
  { id: 'pc-006', slug: 'pc-mandala-glass-case',    name: 'Mandala Glass Case',    price: 24, compareAtPrice: 34, images: [{ src: '/phone-case/products/products6.webp' }] },
];

export function PhoneCaseDesktopNav() {
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
            onMouseEnter={(e) => { e.currentTarget.style.color = '#555'; }}
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
              sliderProducts={item.megaProductSlider ? pcSliderProducts : undefined}
              sliderHrefBase="/phone-case/product"
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
