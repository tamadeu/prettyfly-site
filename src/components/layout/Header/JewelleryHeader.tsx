'use client';

import { GroceryAnnouncementBar } from './GroceryAnnouncementBar';
import { Logo } from './Logo';
import { JewelleryDesktopNav } from './JewelleryDesktopNav';
import { JewelleryHeaderActions } from './JewelleryHeaderActions';
import { JewelleryMobileNav } from './JewelleryMobileNav';
import { useUIStore } from '@/store/uiStore';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function JewelleryHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <GroceryAnnouncementBar backgroundColor="#111" />

      <header
        className="jw-main-header"
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
          className="container-main jw-header-inner"
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
              className="jw-mobile-menu-btn"
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
            <div className="jw-logo-desktop">
              <Logo href="/home/jewellery-shop" />
            </div>
          </div>

          {/* Center: desktop nav */}
          <div className="jw-desktop-nav-wrapper">
            <JewelleryDesktopNav />
          </div>

          {/* Mobile logo — absolutely centered */}
          <div className="jw-logo-mobile" style={{ display: 'none' }}>
            <Logo href="/home/jewellery-shop" />
          </div>

          {/* Right: actions */}
          <JewelleryHeaderActions />
        </div>
      </header>

      <JewelleryMobileNav />

      <style jsx global>{`
        .jw-main-header {
          position: -webkit-sticky;
          position: sticky;
        }
        @media (min-width: 921px) {
          .jw-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        @media (max-width: 920px) {
          .jw-header-inner { grid-template-columns: auto 1fr !important; }
          .jw-mobile-menu-btn { display: flex !important; }
          .jw-desktop-nav-wrapper { display: none !important; }
          .jw-logo-desktop { display: none !important; }
          .jw-logo-mobile {
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
