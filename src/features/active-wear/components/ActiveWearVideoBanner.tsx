'use client';

import Link from 'next/link';

import { text, type CmsContent } from '../cms';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const VIDEO_SRC = '/active-wear/vedio/vedio-1.mp4';

/* Full-bleed video banner ("MIDNIGHT GREEN"). Spans the full viewport width —
   no container, no border-radius — to match the screenshot. */
export function ActiveWearVideoBanner({ content }: { content?: CmsContent }) {
  const title = text(content?.title, 'VERDE-MEIA-NOITE');
  const poster = text(content?.image, '');
  return (
    <section className="awvb-section">
      <video
        src={text(content?.video_url, VIDEO_SRC)}
        poster={poster || undefined}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={title}
        className="awvb-video"
      />
      <div className="awvb-overlay">
        <span className="awvb-eyebrow">{text(content?.subtitle, 'Momentos de conforto')}</span>
        <h2 className="awvb-title">{title}</h2>
        <Link href={text(content?.button_url, '/shop')} className="awvb-cta">
          {text(content?.button_label, 'Ver ofertas')}
          <IconArrowRight size={16} />
        </Link>
      </div>

      <style>{`
        .awvb-section {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          background-color: #1a1a1a;
        }
        .awvb-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .awvb-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: clamp(16px, 2vw, 26px);
          padding: clamp(20px, 4vw, 60px);
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.28) 100%);
        }
        .awvb-eyebrow {
          font-size: clamp(13px, 1.2vw, 16px);
          font-weight: 700;
          color: #fff;
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
        }
        .awvb-title {
          font-size: clamp(24px, 3.4vw, 44px);
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #fff;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }
        .awvb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #fff;
          color: #111;
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 600;
          padding: 15px 34px;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease, transform 250ms ease;
        }
        .awvb-cta:hover {
          background-color: #111;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
