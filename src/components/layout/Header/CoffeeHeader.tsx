'use client';

import { Playfair_Display } from 'next/font/google';
import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

/* Coffee header — single-row layout matching the screenshot:
   logo (left) · primary nav (center) · search/account/wishlist/cart (right).
   This is the Default Fashion header structure with a #111 announcement bar.
   No dedicated Coffee logo asset exists in /public/coffee/, so this reuses the
   shared default ambaz <Logo /> unmodified (Jewelry-2 precedent). DesktopNav /
   HeaderActions / MobileNav are the shared, storefront-aware components, so nav
   data (navigation-coffee.json), drawers and counts scope to Coffee automatically
   via getStorefrontFromPath.

   Playfair Display is applied to the nav items, mega menus, and dropdown menus
   only (not the logo/icons/announcement bar) — a separate font instance from
   the one loaded in page.tsx, since the header lives outside .cf-home-sections
   in the component tree (rendered once in the root layout, not nested under
   the page content). MegaMenu/DropdownMenu render inline as children of
   DesktopNav/MobileNav (no portal), so wrapping those two suffices. */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function CoffeeHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar backgroundColor="#111" />

      <header
        className="cf-main-header"
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
              className="cf-mobile-menu-btn"
            >
              <IconMenu />
            </button>

            <div className="cf-logo-desktop">
              <Logo href="/home/coffee-shop" />
            </div>
          </div>

          {/* Column 2: Desktop Navigation */}
          <div className={`cf-desktop-nav-wrapper ${playfair.variable}`}>
            <DesktopNav />
          </div>

          {/* Mobile-only centered logo */}
          <div className="cf-logo-mobile">
            <Logo href="/home/coffee-shop" />
          </div>

          {/* Column 3: Action Icons */}
          <HeaderActions />
        </div>
      </header>

      <div className={`cf-mobilenav-font-scope ${playfair.variable}`}>
        <MobileNav />
      </div>

      <style jsx global>{`
        .cf-main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        .cf-desktop-nav-wrapper,
        .cf-mobilenav-font-scope {
          font-family: var(--font-playfair), serif;
        }
        @media (min-width: 992px) {
          .cf-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .cf-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .cf-mobile-menu-btn {
            display: flex !important;
          }
          .cf-desktop-nav-wrapper {
            display: none !important;
          }
          .cf-logo-desktop {
            display: none !important;
          }
          .cf-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
