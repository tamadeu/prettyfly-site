'use client';

import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

/* Fashion 03 header — the Default Fashion header shell with a dark (#111)
   announcement bar and the Fashion 03 logo linking back to its homepage.
   DesktopNav / HeaderActions / MobileNav are reused verbatim (they are
   storefront-aware via getStorefrontFromPath), so cart/wishlist/search
   counts and drawers scope to Fashion 03 automatically. */

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function Fashion03Header() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar backgroundColor="#111" />

      <header
        className="f3-main-header"
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
              className="f3-mobile-menu-btn"
            >
              <IconMenu />
            </button>

            <div className="f3-logo-desktop">
              <Logo href="/home/fashion-03-shop" src="/fashion-03/logo/logo1.webp" />
            </div>
          </div>

          {/* Column 2: Desktop Navigation */}
          <div className="f3-desktop-nav-wrapper">
            <DesktopNav />
          </div>

          {/* Mobile-only centered logo */}
          <div className="f3-logo-mobile">
            <Logo href="/home/fashion-03-shop" src="/fashion-03/logo/logo1.webp" />
          </div>

          {/* Column 3: Action Icons */}
          <HeaderActions />
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <MobileNav />

      <style jsx global>{`
        .f3-main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        @media (min-width: 992px) {
          .f3-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .f3-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .f3-mobile-menu-btn {
            display: flex !important;
          }
          .f3-desktop-nav-wrapper {
            display: none !important;
          }
          .f3-logo-desktop {
            display: none !important;
          }
          .f3-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
