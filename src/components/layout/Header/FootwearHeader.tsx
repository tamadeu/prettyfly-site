'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnnouncementBar } from './AnnouncementBar';
import { Logo } from './Logo';
import { FootwearDesktopNav } from './FootwearDesktopNav';
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

export function FootwearHeader() {
  const { openMobileMenu } = useUIStore();
  const pathname = usePathname();
  const isHome = pathname === '/home/footwear-shop';
  const [scrolled, setScrolled] = useState(false);

  /* On the homepage the header overlays the hero: transparent at the top,
     solid white once the user scrolls past it. */
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const overlay = isHome && !scrolled;

  return (
    <>
      <AnnouncementBar backgroundColor="#F15B41" />

      <header
        className={`fw-hdr-main${overlay ? ' fw-hdr--overlay' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          backgroundColor: overlay ? 'transparent' : '#fff',
          height: '90px',
          overflow: 'visible',
        }}
      >
        <div
          className="container-main fw-hdr-inner"
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
              className="fw-hdr-hamburger"
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
            <div className="fw-hdr-logo-desktop">
              <Logo href="/home/footwear-shop" />
            </div>
          </div>

          {/* Col 2: Desktop nav */}
          <div className="fw-hdr-nav-wrap">
            <FootwearDesktopNav />
          </div>

          {/* Mobile centered logo */}
          <div className="fw-hdr-logo-mobile">
            <Logo href="/home/footwear-shop" />
          </div>

          {/* Col 3: Actions */}
          <HeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .fw-hdr-main {
          border-bottom: 1px solid #e5e5e5;
          position: -webkit-sticky;
          position: sticky;
          transition: background-color 300ms ease, border-color 300ms ease;
        }
        @media (min-width: 992px) {
          .fw-hdr-main {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }

        /* ── Homepage hero overlay: pull the hero up under the 90px header so
           the transparent header sits directly on top of the Hero Slider. ── */
        .fw-home-sections .fwh-section {
          margin-top: -90px;
        }

        /* ── Transparent over-hero state ──
           Recolor ONLY the header bar itself (top-level nav links, hamburger,
           action icons, logo) — never the mega-menu / dropdown panels, which
           sit on a white background and keep their own colors. */
        .fw-hdr--overlay {
          background-color: transparent !important;
          border-bottom-color: transparent !important;
        }
        .fw-hdr--overlay .fw-hdr-nav-wrap > nav > div > a,
        .fw-hdr--overlay .fw-hdr-hamburger,
        .fw-hdr--overlay .header-actions a,
        .fw-hdr--overlay .header-actions button {
          color: #fff !important;
        }
        .fw-hdr--overlay .fw-hdr-logo-desktop img,
        .fw-hdr--overlay .fw-hdr-logo-mobile img {
          filter: brightness(0) invert(1);
        }

        .fw-hdr-logo-mobile {
          display: none;
        }
        @media (max-width: 715px) {
          .fw-hdr-inner {
            grid-template-columns: auto 1fr auto !important;
          }
          .fw-hdr-hamburger {
            display: flex !important;
          }
          .fw-hdr-nav-wrap {
            display: none !important;
          }
          .fw-hdr-logo-desktop {
            display: none !important;
          }
          .fw-hdr-logo-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
