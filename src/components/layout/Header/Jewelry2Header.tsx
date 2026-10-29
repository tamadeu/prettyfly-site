'use client';

import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

/* Jewelry 2 header — single-row layout matching the screenshot:
   logo (left) · primary nav (center) · search/account/wishlist/cart (right).
   This is the Default Fashion header structure with a #111 announcement bar
   and a custom "Free Delivery" message. DesktopNav / HeaderActions / MobileNav
   are the shared, storefront-aware components, so nav data
   (navigation-jewelry-2.json), drawers and counts scope to Jewelry 2
   automatically via getStorefrontFromPath. */

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function Jewelry2Header() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar
        backgroundColor="rgb(250, 244, 235)"
        height="41px"
        textColor="#111"
        announcements={[
          "Free Delivery on orders over £120. Don't miss discount.",
          'New Arrivals just landed — shop the latest pieces.',
          'Free gift wrapping on every order.',
        ]}
      />

      <header
        className="jz-main-header"
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
              className="jz-mobile-menu-btn"
            >
              <IconMenu />
            </button>

            <div className="jz-logo-desktop">
              <Logo href="/home/jewelry-2-shop" />
            </div>
          </div>

          {/* Column 2: Desktop Navigation */}
          <div className="jz-desktop-nav-wrapper">
            <DesktopNav />
          </div>

          {/* Mobile-only centered logo */}
          <div className="jz-logo-mobile">
            <Logo href="/home/jewelry-2-shop" />
          </div>

          {/* Column 3: Action Icons */}
          <HeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .jz-main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        @media (min-width: 992px) {
          .jz-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .jz-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .jz-mobile-menu-btn {
            display: flex !important;
          }
          .jz-desktop-nav-wrapper {
            display: none !important;
          }
          .jz-logo-desktop {
            display: none !important;
          }
          .jz-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
