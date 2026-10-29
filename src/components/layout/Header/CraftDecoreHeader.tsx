'use client';

import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

/* Craft and Decore header — single-row layout matching the screenshot:
   logo (left) · primary nav (center) · search/account/wishlist/cart (right).
   This is the Default Fashion header structure (Plumbing Supplies precedent)
   with a pale mint (rgb(208, 230, 223)) announcement bar and the default
   Ambaz logo. No dedicated Craft and Decore logo asset exists (the supplied
   logo1.webp is the stock ambaz wordmark), so this reuses the shared default
   ambaz <Logo /> unmodified. DesktopNav / HeaderActions / MobileNav are the
   shared, storefront-aware components, so nav data (navigation-craft-and-decore.json),
   drawers and counts scope to Craft and Decore automatically via
   getStorefrontFromPath. Typography uses the project's own Heading-Font
   design token (--font-heading, globals.css) with no per-storefront font
   override — unlike Coffee/Jewelry-2/Backpack, which load Playfair Display. */

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function CraftDecoreHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar backgroundColor="rgb(208, 230, 223)" textColor="#171712" />

      <header
        className="cd-main-header"
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
              className="cd-mobile-menu-btn"
            >
              <IconMenu />
            </button>

            <div className="cd-logo-desktop">
              <Logo href="/home/craft-and-decore-shop" />
            </div>
          </div>

          {/* Column 2: Desktop Navigation */}
          <div className="cd-desktop-nav-wrapper">
            <DesktopNav />
          </div>

          {/* Mobile-only centered logo */}
          <div className="cd-logo-mobile">
            <Logo href="/home/craft-and-decore-shop" />
          </div>

          {/* Column 3: Action Icons */}
          <HeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .cd-main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        @media (min-width: 992px) {
          .cd-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .cd-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .cd-mobile-menu-btn {
            display: flex !important;
          }
          .cd-desktop-nav-wrapper {
            display: none !important;
          }
          .cd-logo-desktop {
            display: none !important;
          }
          .cd-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
