'use client';

import Link from 'next/link';

const ACCENT = '#c9173c';

export function LipstainVideoBanner() {
  return (
    <section className="lsvb-section">
      <div className="lsvb-wrap">
        <video
          className="lsvb-video"
          src="/lipstain/video/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="lsvb-overlay" />
        <div className="lsvb-content container-main">
          <div className="lsvb-inner">
            <p className="lsvb-eyebrow">Empowering Beauty</p>
            <h2 className="lsvb-title">Discover Your Best Self</h2>
            <p className="lsvb-subtitle">Color-rich formulas crafted for lasting brilliance — from sunrise to midnight.</p>
            <Link href="/shop" className="lsvb-cta">
              Shop Collection &rsaquo;
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .lsvb-wrap {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          background: #111;
        }
        .lsvb-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .lsvb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.38);
          z-index: 1;
        }
        .lsvb-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 2;
        }
        .lsvb-inner {
          max-width: 600px;
          width: 100%;
          padding-inline: 24px;
        }
        .lsvb-eyebrow {
          font-size: clamp(12px, 1.4vw, 15px);
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          margin: 0 0 clamp(10px, 1.5vw, 16px);
        }
        .lsvb-title {
          font-size: clamp(30px, 5vw, 64px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 clamp(10px, 1.5vw, 18px);
        }
        .lsvb-subtitle {
          font-size: clamp(13px, 1.3vw, 15px);
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
          margin: 0 0 clamp(20px, 2.5vw, 32px);
          max-width: 480px;
          margin-inline: auto;
        }
        .lsvb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${ACCENT};
          border: none;
          color: #fff;
          font-size: clamp(13px, 1.3vw, 15px);
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: clamp(12px, 1.5vw, 15px) clamp(28px, 3vw, 40px);
          border-radius: 2px;
          text-decoration: none;
          transition: background-color 260ms ease, transform 260ms ease;
        }
        .lsvb-cta:hover {
          background: #a81030;
          transform: translateY(-2px);
        }

        @media (max-width: 749px) {
          .lsvb-inner { max-width: 100%; }
          .lsvb-subtitle { margin-bottom: 0; }
        }
      `}</style>
    </section>
  );
}
