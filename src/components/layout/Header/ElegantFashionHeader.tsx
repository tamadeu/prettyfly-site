'use client';

import { GroceryAnnouncementBar } from './GroceryAnnouncementBar';
import { Logo } from './Logo';
import { ElegantFashionDesktopNav } from './ElegantFashionDesktopNav';
import { ElegantFashionHeaderActions } from './ElegantFashionHeaderActions';
import { ElegantFashionMobileNav } from './ElegantFashionMobileNav';
import { useUIStore } from '@/store/uiStore';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function ElegantFashionHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <GroceryAnnouncementBar backgroundColor="rgb(0, 31, 63)" />

      <header
        className="ef-main-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          backgroundColor: '#fff',
          height: '90px',
          overflow: 'visible',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div
          className="container-main ef-header-inner"
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
              className="ef-mobile-menu-btn"
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
            <div className="ef-logo-desktop">
              <Logo href="/home/elegant-fashion-shop" />
            </div>
          </div>

          {/* Center: desktop nav */}
          <div className="ef-desktop-nav-wrapper">
            <ElegantFashionDesktopNav />
          </div>

          {/* Mobile logo — absolutely centered */}
          <div className="ef-logo-mobile" style={{ display: 'none' }}>
            <Logo href="/home/elegant-fashion-shop" />
          </div>

          {/* Right: actions */}
          <ElegantFashionHeaderActions />
        </div>
      </header>

      <ElegantFashionMobileNav />

      <style jsx global>{`
        .ef-main-header {
          position: -webkit-sticky;
          position: sticky;
        }
        @media (min-width: 921px) {
          .ef-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        @media (max-width: 920px) {
          .ef-header-inner { grid-template-columns: auto 1fr !important; }
          .ef-mobile-menu-btn { display: flex !important; }
          .ef-desktop-nav-wrapper { display: none !important; }
          .ef-logo-desktop { display: none !important; }
          .ef-logo-mobile {
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
