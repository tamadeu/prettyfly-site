'use client';

import { useState } from 'react';
import Image from 'next/image';

function IconPlay({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z" />
    </svg>
  );
}

export function FootwearVideoBanner() {
  const [playing, setPlaying] = useState(false);

  return (
    <section>
      <div className="container-main">
        <div className="fwvb-card">
          {!playing ? (
            <>
              <Image
                src="/footwear/vedio-thumbnail-img/Vdo_Section.webp"
                alt="Footwear feature video"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
              <div className="fwvb-shade" />
              <button
                type="button"
                className="fwvb-play"
                aria-label="Play video"
                onClick={() => setPlaying(true)}
              >
                <IconPlay size={26} />
              </button>
            </>
          ) : (
            <iframe
              className="fwvb-iframe"
              src="https://www.youtube.com/embed/_9VUPq3SxOc?autoplay=1&rel=0"
              title="Footwear feature video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>

      <style>{`
        .fwvb-card {
          position: relative;
          width: 100%;
          height: 800px;
          border-radius: 6px;
          overflow: hidden;
          background-color: #0a0a14;
        }
        .fwvb-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .fwvb-shade {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.18);
          z-index: 1;
        }
        .fwvb-play {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 86px; height: 86px;
          border-radius: 50%;
          border: none;
          background-color: rgba(255,255,255,0.92);
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 250ms ease, background-color 250ms ease;
        }
        .fwvb-play::before,
        .fwvb-play::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.6);
          animation: fwvbPulse 2400ms ease-out infinite;
        }
        .fwvb-play::after { animation-delay: 1200ms; }
        .fwvb-play:hover {
          transform: translate(-50%, -50%) scale(1.08);
          background-color: #fff;
        }
        .fwvb-play.is-playing { background-color: #fff; }

        @keyframes fwvbPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        @media (max-width: 991px) {
          .fwvb-card { height: 460px; }
        }
        @media (max-width: 749px) {
          .fwvb-card { height: clamp(300px, 64vw, 420px); }
          .fwvb-play { width: 66px; height: 66px; }
        }
      `}</style>
    </section>
  );
}
