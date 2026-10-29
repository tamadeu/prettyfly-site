'use client';

import { GroceryAnnouncementBar } from './GroceryAnnouncementBar';
import { Logo } from './Logo';
import { PlantGardenDesktopNav } from './PlantGardenDesktopNav';
import { PlantGardenHeaderActions } from './PlantGardenHeaderActions';
import { PlantGardenMobileNav } from './PlantGardenMobileNav';
import { useUIStore } from '@/store/uiStore';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function PlantGardenHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <GroceryAnnouncementBar backgroundColor="#111" />

      <header
        className="pg-main-header"
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
          className="container-main pg-header-inner"
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
              className="pg-mobile-menu-btn"
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
            <div className="pg-logo-desktop">
              <Logo href="/home/plant-garden-shop" />
            </div>
          </div>

          {/* Center: desktop nav */}
          <div className="pg-desktop-nav-wrapper">
            <PlantGardenDesktopNav />
          </div>

          {/* Mobile logo — absolutely centered, not a grid item */}
          <div className="pg-logo-mobile" style={{ display: 'none' }}>
            <Logo href="/home/plant-garden-shop" />
          </div>

          {/* Right: actions */}
          <PlantGardenHeaderActions />
        </div>
      </header>

      <PlantGardenMobileNav />

      <style jsx global>{`
        .pg-main-header {
          position: -webkit-sticky;
          position: sticky;
        }
        @media (min-width: 921px) {
          .pg-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        @media (max-width: 920px) {
          /* 2-col grid: hamburger auto-width left, actions fill right */
          .pg-header-inner { grid-template-columns: auto 1fr !important; }
          .pg-mobile-menu-btn { display: flex !important; }
          .pg-desktop-nav-wrapper { display: none !important; }
          .pg-logo-desktop { display: none !important; }
          /* Logo floats out of flow — perfectly centered via absolute */
          .pg-logo-mobile {
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
