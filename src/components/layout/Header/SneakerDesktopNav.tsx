'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-sneaker.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const snSliderProducts: SliderProduct[] = [
  { id: 'sn-001', slug: 'sn-mesh-sports-shoe',     name: 'Mesh Sports Shoe',      price: 33, images: [{ src: '/sneaker/products/products8.webp' }] },
  { id: 'sn-002', slug: 'sn-streamspark-shows',     name: 'StreamSpark Shows',     price: 44, images: [{ src: '/sneaker/products/products2.webp' }] },
  { id: 'sn-003', slug: 'sn-showspectra-shoes',     name: 'ShowSpectra Shows',     price: 39, images: [{ src: '/sneaker/products/products3.webp' }] },
  { id: 'sn-004', slug: 'sn-leather-loafers-shoes', name: 'Leather Loafers Shoes', price: 60, images: [{ src: '/sneaker/products/products4.webp' }] },
  { id: 'sn-005', slug: 'sn-ecostride-sneakers',    name: 'EcoStride Sneakers',    price: 35, compareAtPrice: 59, images: [{ src: '/sneaker/products/products5.webp' }] },
  { id: 'sn-007', slug: 'sn-stealthstop-infinity',  name: 'StealthStop Infinity',  price: 38, compareAtPrice: 68, images: [{ src: '/sneaker/products/products6.webp' }] },
];

export function SneakerDesktopNav() {
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
              sliderProducts={item.megaProductSlider ? snSliderProducts : undefined}
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
