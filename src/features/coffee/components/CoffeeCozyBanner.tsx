'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Forked from MegastoreVideoBanner's rounded-card + overlay + CTA structure
   (skill/megastore-video-banner.md), but static image (no video asset for
   this section). Content is bottom-center, pinned 60px above the card's
   bottom edge, identically at every breakpoint (no per-breakpoint
   repositioning). */

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function CoffeeCozyBanner() {
  return (
    <section className="cfvb-section">
      <div className="container-main">
        <div className="cfvb-card">
          <Image
            src="/coffee/img-with-text/img-with-text.webp"
            alt="Your Cozy Coffee Corner"
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />

          <div className="cfvb-overlay" />

          <div className="cfvb-content">
            <h2 className="cfvb-title">Your Cozy Coffee Corner</h2>
            <p className="cfvb-subtitle">Hearing Test, Hearing Aid, and Hearing Protection features in a free software update.</p>
            <div className="cfvb-actions">
              <Link href="/shop" className="cfvb-btn cfvb-btn-filled">Shop Now</Link>
              <Link href="/pages/about" className="cfvb-btn cfvb-btn-outline">
                Learn More
                <IconArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cfvb-card {
          position: relative;
          width: 100%;
          height: clamp(360px, 85vw, 460px);
          overflow: hidden;
          border-radius: 14px;
          background-color: #1a1310;
        }
        .cfvb-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(0deg, rgba(20, 14, 10, 0.75) 0%, rgba(20, 14, 10, 0.1) 55%, rgba(20, 14, 10, 0) 100%);
        }
        .cfvb-content {
          position: absolute;
          left: 50%;
          bottom: 60px;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: min(92%, 560px);
        }
        .cfvb-title {
          font-size: clamp(22px, 2.6vw, 32px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        .cfvb-subtitle {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .cfvb-actions { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .cfvb-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 220ms ease, color 220ms ease, transform 220ms ease;
        }
        .cfvb-btn-filled { background-color: #c8874a; color: #fff; }
        .cfvb-btn-filled:hover { background-color: #a96f38; transform: translateY(-1px); }
        .cfvb-btn-outline { background-color: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.6); }
        .cfvb-btn-outline:hover { background-color: #fff; color: #2a2118; }

        @media (max-width: 749px) {
          .cfvb-card { border-radius: 10px; }
        }
        @media (min-width: 750px) {
          .cfvb-card { height: 560px; }
        }
        @media (min-width: 992px) {
          .cfvb-card { height: 750px; }
        }
      `}</style>
    </section>
  );
}
