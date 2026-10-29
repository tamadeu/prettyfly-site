'use client';

import { usePathname } from 'next/navigation';
import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { GroceryHeader } from './GroceryHeader';
import { PetFoodHeader } from './PetFoodHeader';
import { NutritionHeader } from './NutritionHeader';
import { MegastoreHeader } from './MegastoreHeader';
import { CarAccessoriesHeader } from './CarAccessoriesHeader';
import { PizzaShopHeader } from './PizzaShopHeader';
import { PlantGardenHeader } from './PlantGardenHeader';
import { SkinCareHeader } from './SkinCareHeader';
import { JewelleryHeader } from './JewelleryHeader';
import { HeadphonesHeader } from './HeadphonesHeader';
import { SneakerHeader } from './SneakerHeader';
import { FurnitureHeader } from './FurnitureHeader';
import { ElegantFashionHeader } from './ElegantFashionHeader';
import { LipstainHeader } from './LipstainHeader';
import { BoutiqueFashionHeader } from './BoutiqueFashionHeader';
import { PhoneCaseHeader } from './PhoneCaseHeader';
import { SmartWatchesHeader } from './SmartWatchesHeader';
import { SingleProductHeader } from './SingleProductHeader';
import { FootwearHeader } from './FootwearHeader';
import { Fashion04Header } from './Fashion04Header';
import { Fashion03Header } from './Fashion03Header';
import { ActiveWearHeader } from './ActiveWearHeader';
import { BackpackHeader } from './BackpackHeader';
import { BasketballHeader } from './BasketballHeader';
import { GlassesHeader } from './GlassesHeader';
import { PlumbingSuppliesHeader } from './PlumbingSuppliesHeader';
import { BookHeader } from './BookHeader';
import { Jewelry2Header } from './Jewelry2Header';
import { CoffeeHeader } from './CoffeeHeader';
import { CraftDecoreHeader } from './CraftDecoreHeader';
import { RtlDemoHeader } from './RtlDemoHeader';
import { ToysHeader } from './ToysHeader';
import { SocksHeader } from './SocksHeader';
import { PodHeader } from './PodHeader';
import { useUIStore } from '@/store/uiStore';
import { getStorefrontFromPath } from '@/utils/storefront';
import type { HeaderConfig } from '@/lib/backend';
import { MainSiteConfigProvider } from './MainSiteConfig';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

function PathHeader() {
  const pathname = usePathname();
  const { openMobileMenu } = useUIStore();

  if (
    pathname?.startsWith('/home/nutrition-shop') ||
    pathname?.startsWith('/nutrition/')
  ) {
    return <NutritionHeader />;
  }

  if (
    pathname?.startsWith('/home/pet-food-shop') ||
    pathname?.startsWith('/pet-food/')
  ) {
    return <PetFoodHeader />;
  }

  if (
    pathname?.startsWith('/home/grocery-shop') ||
    pathname?.startsWith('/grocery/')
  ) {
    return <GroceryHeader />;
  }

  if (
    pathname?.startsWith('/home/megastore-shop') ||
    pathname?.startsWith('/megastore/')
  ) {
    return <MegastoreHeader />;
  }

  if (
    pathname?.startsWith('/home/car-accessories-shop') ||
    pathname?.startsWith('/car-accessories/')
  ) {
    return <CarAccessoriesHeader />;
  }

  if (
    pathname?.startsWith('/home/pizza-shop') ||
    pathname?.startsWith('/pizza/')
  ) {
    return <PizzaShopHeader />;
  }

  if (
    pathname?.startsWith('/home/plant-garden-shop') ||
    pathname?.startsWith('/plant-garden/')
  ) {
    return <PlantGardenHeader />;
  }

  if (pathname?.startsWith('/home/skin-care-shop')) {
    return <SkinCareHeader />;
  }

  if (
    pathname?.startsWith('/home/jewellery-shop') ||
    pathname?.startsWith('/jewellery/')
  ) {
    return <JewelleryHeader />;
  }

  if (
    pathname?.startsWith('/home/headphones-shop') ||
    pathname?.startsWith('/headphones/')
  ) {
    return <HeadphonesHeader />;
  }

  if (pathname?.startsWith('/home/sneaker-shop')) {
    return <SneakerHeader />;
  }

  if (pathname?.startsWith('/home/furniture-shop')) {
    return <FurnitureHeader />;
  }

  if (pathname?.startsWith('/home/elegant-fashion-shop')) {
    return <ElegantFashionHeader />;
  }

  if (pathname?.startsWith('/home/lipstain-shop')) {
    return <LipstainHeader />;
  }

  if (
    pathname?.startsWith('/home/boutique-fashion-shop') ||
    pathname?.startsWith('/boutique-fashion/')
  ) {
    return <BoutiqueFashionHeader />;
  }

  if (
    pathname?.startsWith('/home/phone-case-shop') ||
    pathname?.startsWith('/phone-case/')
  ) {
    return <PhoneCaseHeader />;
  }

  if (
    pathname?.startsWith('/home/smart-watches-shop') ||
    pathname?.startsWith('/smart-watches/')
  ) {
    return <SmartWatchesHeader />;
  }

  if (pathname?.startsWith('/home/single-product-shop')) {
    return <SingleProductHeader />;
  }

  if (
    pathname?.startsWith('/home/footwear-shop') ||
    pathname?.startsWith('/footwear/')
  ) {
    return <FootwearHeader />;
  }

  if (pathname?.startsWith('/home/fashion-04-shop')) {
    return <Fashion04Header />;
  }

  if (pathname?.startsWith('/home/fashion-03-shop')) {
    return <Fashion03Header />;
  }

  if (pathname?.startsWith('/home/active-wear-shop')) {
    return <ActiveWearHeader />;
  }

  if (pathname?.startsWith('/home/backpack-shop')) {
    return <BackpackHeader />;
  }

  if (pathname?.startsWith('/home/basketball-shop')) {
    return <BasketballHeader />;
  }

  if (pathname?.startsWith('/home/glasses-shop')) {
    return <GlassesHeader />;
  }

  if (pathname?.startsWith('/home/plumbing-supplies-shop')) {
    return <PlumbingSuppliesHeader />;
  }

  if (pathname?.startsWith('/home/book-shop')) {
    return <BookHeader />;
  }

  if (pathname?.startsWith('/home/jewelry-2-shop')) {
    return <Jewelry2Header />;
  }

  if (pathname?.startsWith('/home/coffee-shop')) {
    return <CoffeeHeader />;
  }

  if (pathname?.startsWith('/home/craft-and-decore-shop')) {
    return <CraftDecoreHeader />;
  }

  if (pathname?.startsWith('/home/rtl-demo-shop')) {
    return <RtlDemoHeader />;
  }

  if (pathname?.startsWith('/home/toys-shop')) {
    return <ToysHeader />;
  }

  if (pathname?.startsWith('/home/socks-shop')) {
    return <SocksHeader />;
  }

  if (pathname?.startsWith('/home/pod-shop')) {
    return <PodHeader />;
  }

  return (
    <>
      <AnnouncementBar />

      <header
        className="main-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          backgroundColor: '#fff',
          height: '90px',
          overflow: 'visible',
        }}
      >
        <div
          className="container-main"
          style={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Hamburger (mobile) + Logo (desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifySelf: 'start' }}>
            {/* Mobile hamburger — hidden at desktop, shown at ≤715px */}
            <button
              onClick={openMobileMenu}
              aria-label="Open menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#222',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
              }}
              className="mobile-menu-btn"
            >
              <IconMenu />
            </button>

            {/* Desktop logo — hides at ≤715px */}
            <div className="fashion-logo-desktop">
              <Logo />
            </div>
          </div>

          {/* Column 2: Desktop Navigation — hides at ≤715px, freeing column 2 for mobile logo */}
          <div className="desktop-nav-wrapper">
            <DesktopNav />
          </div>

          {/* Mobile-only centered logo — hidden at desktop, becomes column 2 at ≤715px */}
          <div className="fashion-logo-mobile">
            <Logo />
          </div>

          {/* Column 3: Action Icons */}
          <HeaderActions />
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <MobileNav />

      {/* Responsive + header border animation styles */}
      <style jsx global>{`
        .main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        /* Desktop-only sticky reinforcement. Inline style already sets
           position: sticky; this explicit rule guarantees it beats any
           future cascade (framework resets, feature CSS) and keeps the
           header pinned at top without flicker or layout shift. */
        @media (min-width: 992px) {
          .main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .fashion-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .desktop-nav-wrapper {
            display: none !important;
          }
          .fashion-logo-desktop {
            display: none !important;
          }
          .fashion-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}

const VARIANT_HEADERS: Record<string, React.ComponentType> = {
  'active-wear': ActiveWearHeader,
  'fashion-03': Fashion03Header,
  'fashion-04': Fashion04Header,
  'boutique-fashion': BoutiqueFashionHeader,
};

/* The admin-configured header only applies to the main site; the demo
   storefronts under /home/* keep their own headers. */
export function Header({ config }: { config?: HeaderConfig | null }) {
  const pathname = usePathname();
  const isMainSite = !pathname?.startsWith('/home/') && getStorefrontFromPath(pathname) === 'fashion';

  if (!config || !isMainSite) return <PathHeader />;

  const Variant = VARIANT_HEADERS[config.variant] ?? PathHeader;

  return (
    <MainSiteConfigProvider value={{ logo: config.logo_url, menu: config.menu, topbar: config.topbar ?? null, contact: config.contact ?? null }}>
      <Variant />
    </MainSiteConfigProvider>
  );
}
