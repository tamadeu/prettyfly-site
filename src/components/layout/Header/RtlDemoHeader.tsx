'use client';

import { Cairo } from 'next/font/google';
import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

/* RTL Demo header — an exact structural clone of the Default Fashion header
   (single-row: logo · primary nav · search/account/wishlist/cart), rendered
   with dir="rtl" so the row visually mirrors and an Arabic-capable font
   (Cairo) applied throughout. DesktopNav / HeaderActions / MobileNav are the
   same shared, storefront-aware components every other header uses — no nav
   data override is registered for 'rtl-demo' in DesktopNav/MobileNav, so it
   falls through to the same default navigation.json as Default Fashion,
   which is what "replicate exactly" requires (identical Home mega menu,
   Shop/Categories/Products mega menus, Pages dropdown).

   `dir="rtl"` is set on the header's own root markup (not inherited from the
   page): CartDrawer/SearchDrawer/QuickViewModal/CompareBar/Footer/
   MobileBottomNav are mounted as siblings of {children} in the root layout,
   not descendants of this header or the RTL homepage wrapper, so they are
   unaffected and keep working exactly as they do for every other storefront
   — only this header's own subtree (nav, mega menus, dropdowns, action
   icons) and the RTL homepage body actually run in RTL. CSS `direction` is
   inherited, and flexbox/grid layouts (which DesktopNav, MegaMenu,
   HeaderActions and MobileNav are all built from) automatically mirror under
   RTL, so no shared component source needed to change. */
const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function RtlDemoHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <div dir="rtl" lang="ar" className={cairo.variable}>
      <div className="rtl-announcement-bar">
        <AnnouncementBar />
      </div>

      <header
        className="rtl-main-header"
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
          {/* Column 1 (renders on the right under RTL): Hamburger (mobile) + Logo (desktop) */}
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
              className="rtl-mobile-menu-btn"
            >
              <IconMenu />
            </button>

            <div className="rtl-logo-desktop">
              <Logo href="/home/rtl-demo-shop" />
            </div>
          </div>

          {/* Column 2: Desktop Navigation */}
          <div className="rtl-desktop-nav-wrapper">
            <DesktopNav />
          </div>

          {/* Mobile-only centered logo */}
          <div className="rtl-logo-mobile">
            <Logo href="/home/rtl-demo-shop" />
          </div>

          {/* Column 3 (renders on the left under RTL): Action Icons */}
          <HeaderActions />
        </div>
      </header>

      <div className="rtl-mobilenav-font-scope">
        <MobileNav />
      </div>

      <style jsx global>{`
        .rtl-main-header {
          border-bottom: 1px solid #e5e5e5;
        }
        .rtl-desktop-nav-wrapper,
        .rtl-mobilenav-font-scope {
          font-family: var(--font-cairo), sans-serif;
        }
        /* Announcement bar prev/next arrows: dir=rtl already reverses which
           edge the prev/next buttons render on (natural flex mirroring), but
           each icon keeps its own literal left/right-pointing shape, so both
           end up pointing inward toward each other instead of outward in
           their own direction of travel. IconArrowLeftS and IconArrowRightS
           are exact horizontal mirrors of one another (same path, x
           reflected around the 24px viewBox center), so flipping each with
           scaleX(-1) swaps prev's icon to look like next's shape and vice
           versa — the fix that's actually needed here, not a rotation. */
        .rtl-announcement-bar button[aria-label="Previous announcement"] svg,
        .rtl-announcement-bar button[aria-label="Next announcement"] svg {
          transform: scaleX(-1);
        }
        @media (min-width: 992px) {
          .rtl-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        .rtl-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .rtl-mobile-menu-btn {
            display: flex !important;
          }
          .rtl-desktop-nav-wrapper {
            display: none !important;
          }
          .rtl-logo-desktop {
            display: none !important;
          }
          .rtl-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
