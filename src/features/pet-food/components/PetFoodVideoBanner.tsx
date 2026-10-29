'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function PetFoodVideoBanner() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="pf-vb-section">
      <div className="container-main">
        <div className="pf-vb-card">
          <div className="pf-vb-text">
            <h2 className="pf-vb-title">Nourish Well Live Fully</h2>
            <p className="pf-vb-copy">
              Fats for brain and cell health: incorporate healthy fats likeolive oil, avocado, nuts.
            </p>
            <Link href="/pet-food/shop" className="pf-vb-cta">Shop Now</Link>
          </div>

          <div className="pf-vb-video">
            {!playing ? (
              <>
                <Image
                  src="/pet-food/video-with-text/video-with-text1.webp"
                  alt="Nourish Well"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="50vw"
                />
                <div className="pf-vb-play-wrap">
                  <button
                    onClick={() => setPlaying(true)}
                    className="pf-vb-play"
                    aria-label="Play video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                      <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z" />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/a2zZzAr1e_c?autoplay=1&rel=0"
                title="Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        .pf-vb-section { padding: 0; }
        .pf-vb-card {
          display: grid;
          grid-template-columns: 1fr;
          align-items: stretch;
          border-radius: 14px;
          overflow: hidden;
          background: #ecf9cf;
        }
        .pf-vb-text {
          padding: clamp(28px, 6vw, 50px) clamp(20px, 4vw, 30px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .pf-vb-title {
          font-size: clamp(22px, 5.6vw, 32px);
          font-weight: 800;
          color: rgb(10, 66, 83);
          line-height: 1.15;
          margin-bottom: clamp(10px, 2.4vw, 14px);
        }
        .pf-vb-copy {
          font-size: clamp(12px, 3.4vw, 14px);
          color: rgb(10, 66, 83);
          max-width: 420px;
          margin-bottom: clamp(18px, 4.2vw, 26px);
          line-height: 1.55;
        }
        .pf-vb-cta {
          align-self: flex-start;
          background: #0a3a5c;
          color: #fff;
          font-size: clamp(12px, 3.4vw, 14px);
          font-weight: 600;
          padding: clamp(10px, 2.6vw, 13px) clamp(20px, 5.6vw, 30px);
          border-radius: 40px;
          text-decoration: none;
          transition: background 200ms ease;
        }
        .pf-vb-cta:hover { background: #072338; }
        .pf-vb-video {
          position: relative;
          min-height: 480px;
          background: #f0f0f0;
          border-radius: 16px;
          overflow: hidden;
        }
        /* Wrapper handles absolute centering; button owns the pulse animation,
           so scale() doesn't fight with translate(-50%, -50%) on the same node. */
        .pf-vb-play-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        .pf-vb-play {
          width: 8rem;
          height: 8rem;
          background: rgba(236, 249, 207, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(10, 66, 83);
          border: none;
          cursor: pointer;
          padding: 0;
          animation: pfVbPulse 2s linear infinite;
        }
        @keyframes pfVbPulse {
          0%   { transform: scale(1);   opacity: 1;   }
          50%  { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1);   opacity: 1;   }
        }

        @media (min-width: 750px) {
          .pf-vb-title { font-size: 40px; }
          .pf-vb-video { min-height: 560px; }
        }
        /* = 992px — 2-col with fixed 700px section height */
        @media (min-width: 992px) {
          .pf-vb-card {
            grid-template-columns: 1fr 1fr;
            height: 700px;
          }
          .pf-vb-text { padding: 80px 70px; }
          .pf-vb-title { font-size: 52px; margin-bottom: 18px; }
          .pf-vb-copy { font-size: 16px; margin-bottom: 32px; }
          .pf-vb-cta { font-size: 15px; padding: 14px 34px; }
          .pf-vb-video { min-height: 100%; height: 100%; }
        }
      `}</style>
    </section>
  );
}
