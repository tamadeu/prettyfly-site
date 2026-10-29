'use client';

import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

/* Toys header — single-row layout matching the screenshot: logo (left) ·
   primary nav (center) · search/account/wishlist/cart (right). This is the
   Default Fashion header structure (Glasses/Craft and Decore precedent)
   with a teal (rgb(71, 193, 191)) announcement bar — sampled from the
   screenshot, see the "flag" note in blueprint/toys-homepage-plan.md §0 for
   why this deviates from the brief's literal `#111` instruction. No dedicated Toys
   logo asset exists in /public/toys/, so this reuses the shared default
   ambaz <Logo /> unmodified. DesktopNav / HeaderActions / MobileNav are the
   shared, storefront-aware components, so nav data (navigation-toys.json),
   drawers and counts scope to Toys automatically via getStorefrontFromPath. */

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function ToysHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar backgroundColor="rgb(71, 193, 191)" textColor="#fff" />

      <header
        className="ty-main-header"
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
              className="ty-mobile-menu-btn"
            >
              <IconMenu />
            </button>

            <div className="ty-logo-desktop">
              <Logo href="/home/toys-shop" />
            </div>
          </div>

          {/* Column 2: Desktop Navigation */}
          <div className="ty-desktop-nav-wrapper">
            <DesktopNav />
          </div>

          {/* Mobile-only centered logo */}
          <div className="ty-logo-mobile">
            <Logo href="/home/toys-shop" />
          </div>

          {/* Column 3: Action Icons */}
          <HeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .ty-main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        @media (min-width: 992px) {
          .ty-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .ty-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .ty-mobile-menu-btn {
            display: flex !important;
          }
          .ty-desktop-nav-wrapper {
            display: none !important;
          }
          .ty-logo-desktop {
            display: none !important;
          }
          .ty-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
