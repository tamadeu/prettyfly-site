'use client';

import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { PhoneCaseDesktopNav } from './PhoneCaseDesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function PhoneCaseHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar backgroundColor="#111" />

      <header
        className="pc-hdr-main"
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
          className="container-main pc-hdr-inner"
          style={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* Col 1: hamburger (mobile) + logo (desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifySelf: 'start' }}>
            <button
              onClick={openMobileMenu}
              aria-label="Open menu"
              className="pc-hdr-hamburger"
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
            <div className="pc-hdr-logo-desktop">
              <Logo href="/home/phone-case-shop" />
            </div>
          </div>

          {/* Col 2: Desktop nav */}
          <div className="pc-hdr-nav-wrap">
            <PhoneCaseDesktopNav />
          </div>

          {/* Mobile centered logo */}
          <div className="pc-hdr-logo-mobile">
            <Logo href="/home/phone-case-shop" />
          </div>

          {/* Col 3: Actions */}
          <HeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .pc-hdr-main {
          border-bottom: 1px solid #e5e5e5;
          position: -webkit-sticky;
          position: sticky;
        }
        @media (min-width: 992px) {
          .pc-hdr-main {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .pc-hdr-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .pc-hdr-inner {
            grid-template-columns: auto 1fr auto !important;
          }
          .pc-hdr-hamburger {
            display: flex !important;
          }
          .pc-hdr-nav-wrap {
            display: none !important;
          }
          .pc-hdr-logo-desktop {
            display: none !important;
          }
          .pc-hdr-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
