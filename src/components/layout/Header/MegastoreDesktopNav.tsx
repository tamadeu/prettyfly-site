'use client';

import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MegaMenu, type SliderProduct } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation-megastore.json';
import type { NavigationItem } from '@/types/common';

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

const megastoreSliderProducts: SliderProduct[] = [
  { id: 'ms-7', slug: 'apple-macbook-pro', name: 'Apple MacBook Pro', price: 840, images: [{ src: '/megastore/featured-products/products/products13.webp' }] },
  { id: 'ms-5', slug: 'bluetooth-5-earphones', name: 'Bluetooth 5.0 Earphones', price: 210, compareAtPrice: 250, images: [{ src: '/megastore/featured-products/products/products6.webp' }] },
  { id: 'ms-3', slug: 'bluetooth-mini-speaker', name: 'Bluetooth Mini Speaker', price: 225, compareAtPrice: 255, images: [{ src: '/megastore/featured-products/products/products1.webp' }] },
  { id: 'ms-1', slug: 'macro-gaming-mouse', name: 'Macro Gaming Mouse', price: 195, images: [{ src: '/megastore/featured-products/products/products15.webp' }] },
  { id: 'ms-2', slug: 'smart-cctv-camera', name: 'Smart CCTV Camera', price: 170, images: [{ src: '/megastore/featured-products/products/products16.webp' }] },
  { id: 'ms-6', slug: 'voice-music-headphones', name: 'Voice Music Headphones', price: 230, images: [{ src: '/megastore/featured-products/products/products17.webp' }] },
];

export function MegastoreDesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();
  const navItems = navigationData as NavigationItem[];

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  /* Active route detection — orange highlight on the matching nav item */
  const isItemActive = (item: NavigationItem): boolean => {
    if (!pathname) return false;
    if (item.id === 'nav-home') return pathname === '/home/megastore-shop' || pathname === '/';
    if (item.id === 'nav-shop') return pathname.startsWith('/megastore/shop');
    if (item.id === 'nav-categories') return pathname.startsWith('/megastore/categories');
    if (item.id === 'nav-products') return pathname.startsWith('/megastore/product');
    if (item.id === 'nav-pages') return ['/megastore/about', '/megastore/contact', '/megastore/faq', '/megastore/store-location', '/megastore/wishlist', '/megastore/compare', '/megastore/404', '/megastore/privacy-policy', '/megastore/terms-of-service', '/megastore/refund-policy'].some((p) => pathname.startsWith(p));
    return false;
  };

  return (
    <nav className="ms-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.4vw, 38px)' }}>
      {navItems.map((item) => {
        const active = activeMenu === item.id;
        const routeActive = isItemActive(item);
        const accent = active || routeActive;
        return (
          <div
            key={item.id}
            style={{ position: 'static' }}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className="ms-nav-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'clamp(14px, 1.1vw, 17px)',
                fontWeight: 500,
                color: accent ? '#f26522' : '#fff',
                textDecoration: 'none',
                padding: '8px 0',
                transition: 'color 200ms ease',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
              {(item.type === 'dropdown' || item.type === 'megamenu') && (
                <span
                  style={{
                    display: 'inline-flex',
                    transition: 'transform 300ms ease',
                    transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <IconChevronDown />
                </span>
              )}
            </Link>

            {item.type === 'megamenu' && (item.megaMenu || item.megaCategoryCards) && active && (
              <MegaMenu
                columns={item.megaMenu}
                promoImage={item.megaImage}
                showProductSlider={item.megaProductSlider}
                categoryCards={item.megaCategoryCards}
                sliderProducts={item.megaProductSlider ? megastoreSliderProducts : undefined}
                sliderHrefBase="/megastore/product"
              />
            )}

            {item.type === 'dropdown' && item.children && active && (
              <DropdownMenu items={item.children} />
            )}
          </div>
        );
      })}

      <style jsx>{`
        :global(.ms-desktop-nav .ms-nav-link:hover) {
          color: #f26522 !important;
        }
      `}</style>
    </nav>
  );
}
