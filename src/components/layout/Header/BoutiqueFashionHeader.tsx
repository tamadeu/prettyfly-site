'use client';

import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { BoutiqueFashionHeaderActions } from './BoutiqueFashionHeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function BoutiqueFashionHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar />

      <header
        className="bfhdr-main"
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
          className="container-main bfhdr-inner"
          style={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* ── Col 1 LEFT: hamburger (mobile) + desktop nav ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifySelf: 'start' }}>
            <button
              onClick={openMobileMenu}
              aria-label="Open menu"
              className="bfhdr-hamburger"
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
            <div className="bfhdr-desktop-nav">
              <DesktopNav />
            </div>
          </div>

          {/* ── Col 2 CENTER: Logo — always centered ── */}
          <Logo href="/home/boutique-fashion-shop" />

          {/* ── Col 3 RIGHT: Action icons ── */}
          <BoutiqueFashionHeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .bfhdr-main {
          border-bottom: 1px solid #e5e5e5;
          position: -webkit-sticky;
          position: sticky;
        }
        @media (min-width: 992px) {
          .bfhdr-main {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        /* Mobile: collapse to hamburger | logo | actions */
        @media (max-width: 715px) {
          .bfhdr-inner {
            grid-template-columns: auto 1fr auto !important;
          }
          .bfhdr-hamburger {
            display: flex !important;
          }
          .bfhdr-desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
