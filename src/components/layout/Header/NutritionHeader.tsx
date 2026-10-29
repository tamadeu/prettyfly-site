'use client';

import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { NutritionDesktopNav } from './NutritionDesktopNav';
import { NutritionHeaderActions } from './NutritionHeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function NutritionHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      {/* Top announcement bar — #111 per screenshot */}
      <AnnouncementBar backgroundColor="#111" />

      <header
        className="nutrition-main-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          backgroundColor: '#fff',
          height: '76px',
          overflow: 'visible',
        }}
      >
        <div
          className="container-main nutrition-header-inner"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* Left cluster: hamburger + desktop logo + nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={openMobileMenu}
              aria-label="Open menu"
              className="nutrition-mobile-menu-btn"
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
            <div className="nutrition-logo-desktop">
              <Logo href="/home/nutrition-shop" />
            </div>
            <div className="nutrition-desktop-nav-wrapper" style={{ marginLeft: '28px' }}>
              <NutritionDesktopNav />
            </div>
          </div>

          {/* Mobile-only centered logo */}
          <div className="nutrition-logo-mobile">
            <Logo href="/home/nutrition-shop" />
          </div>

          {/* Right cluster: Action icons */}
          <NutritionHeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .nutrition-main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        @media (min-width: 992px) {
          .nutrition-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        /* Mobile: hamburger left | logo center | actions right */
        .nutrition-logo-mobile { display: none; }
        @media (max-width: 749px) {
          .nutrition-header-inner {
            display: grid !important;
            grid-template-columns: 1fr auto 1fr !important;
            gap: 0 !important;
          }
          .nutrition-mobile-menu-btn { display: flex !important; }
          .nutrition-desktop-nav-wrapper { display: none !important; }
          .nutrition-logo-desktop { display: none !important; }
          .nutrition-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
