'use client';

import Link from 'next/link';

export function BookVideoBanner() {
  return (
    <section className="bkvb-section">
      <div className="container-main">
        <div className="bkvb-card">
          <video
            className="bkvb-video"
            src="/book/text-with-vedio/vedio-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="We live and breathe books"
          />
          <div className="bkvb-overlay" />
          <div className="bkvb-content">
            <h2 className="bkvb-title">We live and breathe books</h2>
            <p className="bkvb-sub">Are you ready to make your book irresistible for readers?</p>
            <p className="bkvb-sub">Understand how to write a description for a book in 6 easy steps!</p>
            <div className="bkvb-actions">
              <Link href="/shop" className="bkvb-btn bkvb-btn-red">Shop Now</Link>
              <Link href="/blog" className="bkvb-btn bkvb-btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bkvb-card {
          position: relative;
          width: 100%;
          height: clamp(360px, 46vw, 560px);
          border-radius: 14px;
          overflow: hidden;
        }
        .bkvb-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bkvb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }
        .bkvb-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }
        .bkvb-title {
          font-size: clamp(24px, 3.4vw, 34px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        .bkvb-sub {
          font-size: clamp(13px, 1.6vw, 16px);
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
        }
        .bkvb-actions { display: flex; gap: 16px; margin-top: 26px; flex-wrap: wrap; justify-content: center; }
        .bkvb-btn {
          display: inline-flex;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 32px;
          border-radius: 40px;
          text-decoration: none;
          transition: background 220ms ease, color 220ms ease;
        }
        .bkvb-btn-red { background: #e0294a; color: #fff; border: 1.5px solid #e0294a; }
        .bkvb-btn-red:hover { background: #b81f3b; border-color: #b81f3b; }
        .bkvb-btn-outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.7); }
        .bkvb-btn-outline:hover { background: #fff; color: #2a2a2a; }
      `}</style>
    </section>
  );
}
