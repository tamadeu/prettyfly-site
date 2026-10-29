'use client';

import Link from 'next/link';

export function SkinCareVideoBanner() {
  return (
    <section className="skvb-section">
      <div className="skvb-wrap">
        <video
          className="skvb-video"
          src="/skin-care/video/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="skvb-overlay" />
        <div className="skvb-content container-main">
          <div className="skvb-inner">
            <p className="skvb-eyebrow">Empowering Beauty</p>
            <h2 className="skvb-title">Discover Your Best Self</h2>
            <Link href="/shop" className="skvb-cta">
              Shop Collection &rsaquo;
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .skvb-wrap {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          background: #111;
        }
        .skvb-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .skvb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.28);
          z-index: 1;
        }
        .skvb-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 2;
        }
        .skvb-inner {
          max-width: 600px;
          width: 100%;
          padding-inline: 24px;
        }
        .skvb-eyebrow {
          font-size: clamp(12px, 1.4vw, 15px);
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 clamp(10px, 1.5vw, 16px);
        }
        .skvb-title {
          font-size: clamp(30px, 5vw, 64px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 clamp(10px, 1.5vw, 18px);
        }
        .skvb-subtitle {
          display: none;
        }
        .skvb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.90);
          border: none;
          color: #111;
          font-size: clamp(13px, 1.3vw, 15px);
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: clamp(12px, 1.5vw, 15px) clamp(28px, 3vw, 40px);
          border-radius: 2px;
          text-decoration: none;
          margin-top: clamp(20px, 2.5vw, 32px);
          transition: background-color 260ms ease, color 260ms ease;
        }
        .skvb-cta:hover {
          background: #fff;
          color: #000;
        }

        @media (max-width: 749px) {
          .skvb-wrap { height: clamp(400px, 80vw, 560px); }
          .skvb-inner { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
