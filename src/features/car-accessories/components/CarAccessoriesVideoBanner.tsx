'use client';

import Link from 'next/link';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const VIDEO_SRC = '/car-accessories/video/video.mp4';

export function CarAccessoriesVideoBanner() {
  return (
    <section className="ca-vb-section">
      <div className="container-main">
        <div
          className="ca-vb"
          style={{
            position: 'relative',
            width: '100%',
            height: '700px',
            overflow: 'hidden',
            borderRadius: '12px',
            backgroundColor: '#0a0a0a',
          }}
        >
          {/* Background video */}
          <video
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Boost Your Vehicle's Power with Engine Upgrades"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.92,
            }}
          />

          {/* Centered overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 'clamp(20px, 4vw, 60px)',
              background: 'linear-gradient(180deg, rgba(10, 10, 30, 0.35) 0%, rgba(20, 20, 60, 0.35) 100%)',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(11px, 0.9vw, 14px)',
                fontWeight: 700,
                letterSpacing: '2px',
                color: '#fff',
                marginBottom: 'clamp(14px, 1.6vw, 22px)',
              }}
            >
              START FROM $55.00
            </span>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.4vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.18,
                margin: '0 0 clamp(20px, 2.4vw, 32px)',
                maxWidth: '760px',
                letterSpacing: '-0.5px',
                color: '#fff',
              }}
            >
              Boost Your Vehicle&apos;s <span style={{ color: '#5b72d6' }}>Power</span> with
              <br />
              Engine Upgrades
            </h2>

            <Link
              href="/car-accessories/shop?category=Auto%20Parts"
              className="ca-vb-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: 'clamp(12px, 1.2vw, 16px) clamp(22px, 2.2vw, 32px)',
                backgroundColor: '#fff',
                color: '#111',
                fontSize: 'clamp(14px, 1.05vw, 16px)',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'transform 200ms ease, box-shadow 200ms ease, color 200ms ease',
              }}
            >
              <span>Shop Collection</span>
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .ca-vb-section { background-color: #fff; }

        .ca-vb-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
          color: #5b72d6 !important;
        }

        @media (max-width: 991px) {
          .ca-vb {
            height: 480px !important;
          }
        }
        @media (max-width: 749px) {
          .ca-vb {
            height: clamp(320px, 70vw, 420px) !important;
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
