'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnnouncementBar } from './AnnouncementBar';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';
import { useUIStore } from '@/store/uiStore';

function SpLogo() {
  return (
    <Link href="/home/single-product-shop" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Image
        src="/single -product/header-logo/header-logo-1.webp"
        alt="Single Product"
        width={160}
        height={40}
        style={{ objectFit: 'contain', height: '32px', width: 'auto' }}
        priority
      />
    </Link>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

export function SingleProductHeader() {
  const { openMobileMenu } = useUIStore();

  return (
    <>
      <AnnouncementBar backgroundColor="#1a6fe8" />

      <header
        className="sp-main-header"
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
          className="container-main sp-header-inner"
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
              className="sp-mobile-menu-btn"
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
            <div className="sp-logo-desktop">
              <SpLogo />
            </div>
          </div>

          {/* Center: desktop nav */}
          <div className="sp-desktop-nav-wrapper">
            <DesktopNav />
          </div>

          {/* Mobile logo — centered */}
          <div className="sp-logo-mobile" style={{ display: 'none' }}>
            <SpLogo />
          </div>

          {/* Right: actions */}
          <HeaderActions />
        </div>
      </header>

      <MobileNav />

      <style jsx global>{`
        .sp-main-header {
          position: -webkit-sticky;
          position: sticky;
        }
        @media (min-width: 992px) {
          .sp-main-header {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 200 !important;
            will-change: transform;
          }
        }
        @media (max-width: 715px) {
          .sp-header-inner { grid-template-columns: auto 1fr !important; }
          .sp-mobile-menu-btn { display: flex !important; }
          .sp-desktop-nav-wrapper { display: none !important; }
          .sp-logo-desktop { display: none !important; }
          .sp-logo-mobile {
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
