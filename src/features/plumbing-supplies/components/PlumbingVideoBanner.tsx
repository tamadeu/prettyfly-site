'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function PlumbingVideoBanner() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="plvb-section">
      <div className="plvb-card">
        {/* Video — left */}
        <div className="plvb-video">
          {!playing ? (
            <>
              <Image
                src="/plumbing-supplies/text-with-vedio/video-banner.webp"
                alt="AquaMaster Plumbing Services"
                fill
                style={{ objectFit: 'cover' }}
                sizes="50vw"
              />
              <div className="plvb-play-wrap">
                <button onClick={() => setPlaying(true)} className="plvb-play" aria-label="Play video">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/a2zZzAr1e_c?autoplay=1&rel=0"
              title="AquaMaster Plumbing Services"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          )}
        </div>

        {/* Text — right */}
        <div className="plvb-text">
          <h2 className="plvb-title">AquaMaster Plumbing Services</h2>
          <p className="plvb-copy">
            AquaMaster Plumbing Services is your trusted partner for all your plumbing needs. With a
            team of highly skilled and certified professionals, we offer a comprehensive range of services,
            including residential and commercial plumbing, leak detection and repair
          </p>
          <Link href="/shop" className="plvb-cta">
            Shop Now
            <IconArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        .plvb-section { padding: 0; }
        .plvb-card {
          display: grid;
          grid-template-columns: 1fr;
          align-items: stretch;
          background: #f1f2f4;
          overflow: hidden;
        }
        .plvb-video {
          position: relative;
          min-height: 440px;
          background: #e6e8ec;
          overflow: hidden;
        }
        .plvb-play-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        .plvb-play {
          width: 6rem;
          height: 6rem;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a2540;
          border: none;
          cursor: pointer;
          padding: 0;
          animation: plvbPulse 2s linear infinite;
        }
        @keyframes plvbPulse {
          0%   { transform: scale(1);   opacity: 1;   }
          50%  { transform: scale(1.08); opacity: 0.85; }
          100% { transform: scale(1);   opacity: 1;   }
        }
        .plvb-text {
          padding: clamp(32px, 6vw, 50px) clamp(22px, 5vw, 40px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .plvb-title {
          font-size: clamp(26px, 5.4vw, 34px);
          font-weight: 700;
          color: #1c2230;
          line-height: 1.15;
          margin-bottom: clamp(14px, 2.4vw, 20px);
        }
        .plvb-copy {
          font-size: clamp(14px, 3.4vw, 16px);
          color: #6b7079;
          max-width: 560px;
          margin-bottom: clamp(22px, 4.2vw, 30px);
          line-height: 1.75;
        }
        .plvb-cta {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0a2540;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 30px;
          border-radius: 40px;
          text-decoration: none;
          transition: background 200ms ease;
        }
        .plvb-cta:hover { background: #061a30; }

        @media (min-width: 992px) {
          .plvb-card {
            grid-template-columns: 1fr 1fr;
            min-height: 690px;
          }
          .plvb-video { min-height: 100%; }
          .plvb-text { padding: 70px 72px; }
          .plvb-play { width: 7rem; height: 7rem; }
        }
      `}</style>
    </section>
  );
}
