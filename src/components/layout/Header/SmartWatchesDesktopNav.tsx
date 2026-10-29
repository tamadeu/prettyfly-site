'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-smart-watches.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const swSliderProducts: SliderProduct[] = [
  { id: 'sw-001', slug: 'sw-amazfit-bip-5',     name: 'Amazfit Bip 5',          price: 160, compareAtPrice: 210, images: [{ src: '/smart-watches/products/products1.webp' }] },
  { id: 'sw-002', slug: 'sw-amazfit-gtr5',       name: 'Amazfit GTR5 Watch',     price: 180,                      images: [{ src: '/smart-watches/products/products2.webp' }] },
  { id: 'sw-003', slug: 'sw-amazfit-pop-3s',     name: 'Amazfit Pop 3S',         price: 150, compareAtPrice: 170, images: [{ src: '/smart-watches/products/products3.webp' }] },
  { id: 'sw-004', slug: 'sw-citizen-eco-drive',  name: 'Citizen Eco-Drive',      price: 230,                      images: [{ src: '/smart-watches/products/products4.webp' }] },
  { id: 'sw-005', slug: 'sw-elegant-stylish',    name: 'Elegant Stylish Watch',  price: 185,                      images: [{ src: '/smart-watches/products/products5.webp' }] },
  { id: 'sw-006', slug: 'sw-enduro-smart-lx',    name: 'Enduro Smart LX',        price: 250,                      images: [{ src: '/smart-watches/products/products6.webp' }] },
];

export function SmartWatchesDesktopNav() {
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
              sliderProducts={item.megaProductSlider ? swSliderProducts : undefined}
              sliderHrefBase="/smart-watches/product"
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
