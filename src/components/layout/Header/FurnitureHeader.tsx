'use client';

import { GroceryAnnouncementBar } from './GroceryAnnouncementBar';
import { Logo } from './Logo';
import { FurnitureDesktopNav } from './FurnitureDesktopNav';
import { FurnitureHeaderActions } from './FurnitureHeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function FurnitureHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <GroceryAnnouncementBar backgroundColor="rgb(253, 221, 204)" textColor="#111" />

      <header
        className="fu-main-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          backgroundColor: '#fff',
          height: '90px',
          overflow: 'visible',
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        <div
          className="container-main fu-header-inner"
          style={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* Left: hamburger (mobile) + desktop logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifySelf: 'start' }}>
            <button
              onClick={openMobileMenu}
              aria-label="Open menu"
              className="fu-mobile-menu-btn"
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
            >
              <IconMenu />
            </button>
            <div className="fu-logo-desktop">
              <Logo href="/home/furniture-shop" />
            </div>
          </div>

          {/* Center: desktop nav */}
          <div className="fu-desktop-nav-wrapper">
            <FurnitureDesktopNav />
          </div>

          {/* Mobile logo — absolutely centered */}
          <div className="fu-logo-mobile" style={{ display: 'none' }}>
            <Logo href="/home/furniture-shop" />
          </div>

          {/* Right: actions */}
          <FurnitureHeaderActions />
        </div>
      </header>

      {/* Shared MobileNav auto-picks navigation-furniture.json via getStorefrontFromPath */}
      <MobileNav />

      <style jsx global>{`
        .fu-main-header {
          position: -webkit-sticky;
          position: sticky;
        }
        @media (min-width: 921px) {
          .fu-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        @media (max-width: 920px) {
          .fu-header-inner { grid-template-columns: auto 1fr !important; }
          .fu-mobile-menu-btn { display: flex !important; }
          .fu-desktop-nav-wrapper { display: none !important; }
          .fu-logo-desktop { display: none !important; }
          .fu-logo-mobile {
            display: flex !important;
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
            pointer-events: auto;
          }
        }
      `}</style>
    </>
  );
}
