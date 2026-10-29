'use client';

import { useState, useRef, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MegaMenu } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import navigationData from '@/data/navigation.json';
import navigationGlasses from '@/data/navigation-glasses.json';
import navigationPlumbingSupplies from '@/data/navigation-plumbing-supplies.json';
import navigationBook from '@/data/navigation-book.json';
import navigationJewelry2 from '@/data/navigation-jewelry-2.json';
import navigationCoffee from '@/data/navigation-coffee.json';
import navigationCraftDecore from '@/data/navigation-craft-and-decore.json';
import navigationToys from '@/data/navigation-toys.json';
import navigationSocks from '@/data/navigation-socks.json';
import navigationPod from '@/data/navigation-pod.json';
import { getStorefrontFromPath } from '@/utils/storefront';
import { localizeNavigationText } from '@/utils/localizeNavigation';
import { singleProductProducts } from '@/data/single-product-products';
import { activeWearProducts } from '@/data/active-wear-products';
import type { SliderProduct } from './MegaMenu';
import type { NavigationItem } from '@/types/common';
import { useMainSiteConfig } from './MainSiteConfig';

const SP_SHOP_MEGA_IMAGE = '/single -product/shop-mega-menu/shop-mega-menu-1.webp';
const SP_CATEGORY_IMAGE = (i: number) => `/single -product/categories-mega-menu/categories-mega-menu-${i + 1}.webp`;
const SP_SLUGS = singleProductProducts.map((p) => p.slug);
const SP_SLIDER_PRODUCTS = singleProductProducts as SliderProduct[];

const AW_SHOP_MEGA_IMAGE = '/active-wear/shop-mega-menu/shop-mega-menu-1.avif';
const AW_CATEGORY_IMAGE = (i: number) => `/active-wear/categories-mega-menu/categories-mega-menu-${i + 1}.webp`;
const AW_SLUGS = activeWearProducts.map((p) => p.slug);
const AW_SLIDER_PRODUCTS = activeWearProducts as SliderProduct[];

/* Backpack / Basketball reuse the fashion nav structure but swap the Shop promo
   image and Categories card images for their own assets. (Note the backpack shop
   image filename carries a "sjop" typo that exists on disk — preserve it.) */
const BP_SHOP_MEGA_IMAGE = '/backpack/shop-mega-menu/sjop-mega-menu-1.webp';
const BP_CATEGORY_IMAGE = (i: number) => `/backpack/categories-mega-menu/categories-mega-menu-${i + 1}.webp`;

const BB_SHOP_MEGA_IMAGE = '/basketball/shop-mega-menu/shop-mega-menu-1.webp';
const BB_CATEGORY_IMAGE = (i: number) => `/basketball/categories-mega-menu/categories-mega-menu-${i + 1}.webp`;

/* Swap only the Shop mega image and Categories card images to storefront assets;
   the Products mega-menu is left untouched. Every other storefront is unaffected. */
function withMegaMenuImages(
  items: NavigationItem[],
  shopImage: string,
  categoryImage: (i: number) => string,
): NavigationItem[] {
  return items.map((item) => {
    if (item.megaImage) {
      return { ...item, megaImage: { ...item.megaImage, src: shopImage } };
    }
    if (item.megaCategoryCards) {
      return {
        ...item,
        megaCategoryCards: item.megaCategoryCards.map((c, i) => ({ ...c, image: categoryImage(i) })),
      };
    }
    return item;
  });
}

/* Active Wear reuses the fashion nav structure but with its own data:
   Shop promo image, Categories card images, and the Products mega-menu links/
   slider point at active-wear assets/products. Isolated like withSingleProductData. */
function withActiveWearData(items: NavigationItem[]): NavigationItem[] {
  return items.map((item) => {
    if (item.megaImage) {
      return { ...item, megaImage: { ...item.megaImage, src: AW_SHOP_MEGA_IMAGE } };
    }
    if (item.megaCategoryCards) {
      return {
        ...item,
        megaCategoryCards: item.megaCategoryCards.map((c, i) => ({ ...c, image: AW_CATEGORY_IMAGE(i) })),
      };
    }
    if (item.megaProductSlider && item.megaMenu) {
      let k = 0;
      const megaMenu = item.megaMenu.map((col) => ({
        ...col,
        links: col.links.map((link) => {
          const href = `/products/${AW_SLUGS[k % AW_SLUGS.length]}`;
          k++;
          return { ...link, href };
        }),
      }));
      return { ...item, href: `/products/${AW_SLUGS[0]}`, megaMenu };
    }
    return item;
  });
}

/* Single Product reuses the fashion nav structure but with its own data:
   Shop promo image, Categories card images, and the Products mega-menu links/
   slider point at single-product products. Every other storefront sharing this
   nav is untouched. */
function withSingleProductData(items: NavigationItem[]): NavigationItem[] {
  return items.map((item) => {
    if (item.megaImage) {
      return { ...item, megaImage: { ...item.megaImage, src: SP_SHOP_MEGA_IMAGE } };
    }
    if (item.megaCategoryCards) {
      return {
        ...item,
        megaCategoryCards: item.megaCategoryCards.map((c, i) => ({ ...c, image: SP_CATEGORY_IMAGE(i) })),
      };
    }
    if (item.megaProductSlider && item.megaMenu) {
      let k = 0;
      const megaMenu = item.megaMenu.map((col) => ({
        ...col,
        links: col.links.map((link) => {
          const href = `/products/${SP_SLUGS[k % SP_SLUGS.length]}`;
          k++;
          return { ...link, href };
        }),
      }));
      return { ...item, href: `/products/${SP_SLUGS[0]}`, megaMenu };
    }
    return item;
  });
}

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

export function DesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();
  const storefront = getStorefrontFromPath(pathname);
  const isSingleProduct = storefront === 'single-product';
  const isActiveWear = storefront === 'active-wear';
  const isBackpack = storefront === 'backpack';
  const isBasketball = storefront === 'basketball';
  const isGlasses = storefront === 'glasses';
  const isPlumbingSupplies = storefront === 'plumbing-supplies';
  const isBook = storefront === 'book';
  const isJewelry2 = storefront === 'jewelry-2';
  const isCoffee = storefront === 'coffee';
  const isCraftDecore = storefront === 'craft-and-decore';
  const isToys = storefront === 'toys';
  const isSocks = storefront === 'socks';
  const isPod = storefront === 'pod';
  const mainSite = useMainSiteConfig();
  const navItems = useMemo(() => {
    if (mainSite?.menu) return mainSite.menu;
    const base = navigationData as NavigationItem[];
    if (isSingleProduct) return withSingleProductData(base);
    if (isActiveWear) return withActiveWearData(base);
    if (isBackpack) return withMegaMenuImages(base, BP_SHOP_MEGA_IMAGE, BP_CATEGORY_IMAGE);
    if (isBasketball) return withMegaMenuImages(base, BB_SHOP_MEGA_IMAGE, BB_CATEGORY_IMAGE);
    if (isGlasses) return navigationGlasses as NavigationItem[];
    if (isPlumbingSupplies) return navigationPlumbingSupplies as NavigationItem[];
    if (isBook) return navigationBook as NavigationItem[];
    if (isJewelry2) return navigationJewelry2 as NavigationItem[];
    if (isCoffee) return navigationCoffee as NavigationItem[];
    if (isCraftDecore) return navigationCraftDecore as NavigationItem[];
    if (isToys) return navigationToys as NavigationItem[];
    if (isSocks) return navigationSocks as NavigationItem[];
    if (isPod) return navigationPod as NavigationItem[];
    return base;
  }, [mainSite, isSingleProduct, isActiveWear, isBackpack, isBasketball, isGlasses, isPlumbingSupplies, isBook, isJewelry2, isCoffee, isCraftDecore, isToys, isSocks, isPod]);

  /* Plumbing Supplies themes its nav in the brand navy instead of the default
     black text + coral accent. Other storefronts keep the fashion defaults. */
  const navColor = isPlumbingSupplies ? '#0a2540' : '#222';
  const navAccent = isPlumbingSupplies ? '#3a5f8a' : '#F15B41';

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
      }}
    >
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
              gap: '4px',
              fontSize: '17px',
              fontWeight: 500,
              color: activeMenu === item.id ? navAccent : navColor,
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'color 150ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = navAccent; }}
            onMouseLeave={(e) => {
              if (activeMenu !== item.id) e.currentTarget.style.color = navColor;
            }}
          >
            {localizeNavigationText(item.label)}
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

          {/* Mega Menu */}
          {item.type === 'megamenu' && (item.megaMenu || item.megaCategoryCards) && activeMenu === item.id && (
            <MegaMenu
              columns={item.megaMenu}
              promoImage={item.megaImage}
              showProductSlider={item.megaProductSlider}
              categoryCards={item.megaCategoryCards}
              sliderProducts={isSingleProduct ? SP_SLIDER_PRODUCTS : isActiveWear ? AW_SLIDER_PRODUCTS : undefined}
              sliderHrefBase={isSingleProduct || isActiveWear ? '/products' : undefined}
            />
          )}

          {/* Dropdown */}
          {item.type === 'dropdown' && item.children && activeMenu === item.id && (
            <DropdownMenu items={item.children} />
          )}
        </div>
      ))}
    </nav>
  );
}
