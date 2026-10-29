'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-headphones.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const hpSliderProducts: SliderProduct[] = [
  { id: 'hp-001', slug: 'hp-echo-pulse-headphone',    name: 'Echo Pulse Headphone',   price: 18,  images: [{ src: '/headphones/featured-products/featured-products10.webp' }] },
  { id: 'hp-002', slug: 'hp-gaming-headphones',         name: 'Gaming Headphones',        price: 12,  compareAtPrice: 22, images: [{ src: '/headphones/featured-products/featured-products11.webp' }] },
  { id: 'hp-003', slug: 'hp-lenovo-hd200-headphone',    name: 'Lenovo HD200 Headphone',   price: 27,  images: [{ src: '/headphones/featured-products/featured-products13.webp' }] },
  { id: 'hp-004', slug: 'hp-pro-bluetooth-headset',     name: 'Pro Bluetooth Headset',    price: 29,  images: [{ src: '/headphones/featured-products/featured-products15.webp' }] },
  { id: 'hp-009', slug: 'hp-bass-boost-wireless',       name: 'Bass Boost Wireless',       price: 45,  images: [{ src: '/headphones/featured-products/featured-products5.webp' }] },
  { id: 'hp-010', slug: 'hp-studio-monitor-pro',        name: 'Studio Monitor Pro',        price: 55,  images: [{ src: '/headphones/featured-products/featured-products6.webp' }] },
];

export function HeadphonesDesktopNav() {
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
              sliderProducts={item.megaProductSlider ? hpSliderProducts : undefined}
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
