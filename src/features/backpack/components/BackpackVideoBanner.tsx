'use client';

import Link from 'next/link';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const VIDEO_SRC = '/backpack/vedio/vedio-1.mp4';

/* Full-bleed video banner ("Adventure Backpacks"). Spans the full viewport
   width — no container, no border-radius — to match the screenshot. */
export function BackpackVideoBanner() {
  return (
    <section className="bpvb-section">
      <video
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Adventure Backpacks collection"
        className="bpvb-video"
      />
      <div className="bpvb-overlay">
        <span className="bpvb-eyebrow">Empowering Beauty</span>
        <h2 className="bpvb-title">Adventure Backpacks</h2>
        <Link href="/shop" className="bpvb-cta">
          Shop Collection
          <IconArrowRight size={18} />
        </Link>
      </div>

      <style>{`
        .bpvb-section {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          background-color: #1a1a1a;
        }
        .bpvb-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .bpvb-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: clamp(14px, 1.8vw, 22px);
          padding: clamp(20px, 4vw, 60px);
          background: linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.30) 100%);
        }
        .bpvb-eyebrow {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: normal;
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 700;
          color: #fff;
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
        }
        .bpvb-title {
          font-size: clamp(24px, 3vw, 40px);
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #fff;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }
        .bpvb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #fff;
          color: #111;
          font-size: clamp(15px, 1.2vw, 18px);
          font-weight: 400;
          padding: 14px 34px;
          margin-top: 14px;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease, transform 250ms ease;
        }
        .bpvb-cta:hover {
          background-color: #111;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
