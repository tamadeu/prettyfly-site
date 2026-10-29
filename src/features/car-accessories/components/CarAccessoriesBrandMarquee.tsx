'use client';

import Image from 'next/image';

const logos = [
  { id: 'chevrolet', name: 'Chevrolet', src: '/car-accessories/logo/logo1.webp' },
  { id: 'jaguar', name: 'Jaguar', src: '/car-accessories/logo/logo2.avif' },
  { id: 'infiniti', name: 'Infiniti', src: '/car-accessories/logo/logo3.webp' },
  { id: 'bentley', name: 'Bentley', src: '/car-accessories/logo/logo4.webp' },
  { id: 'suzuki', name: 'Suzuki', src: '/car-accessories/logo/logo5.avif' },
  { id: 'granwall', name: 'Granwall', src: '/car-accessories/logo/logo6.webp' },
];

const doubled = [...logos, ...logos];

export function CarAccessoriesBrandMarquee() {
  return (
    <section className="ca-bm-section">
      <div className="ca-bm-track-wrap">
        <div className="ca-bm-track">
          {doubled.map((logo, i) => (
            <div key={`${logo.id}-${i}`} className="ca-bm-logo">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.6, transition: 'filter 300ms ease, opacity 300ms ease' }}
                className="ca-bm-logo-img"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ca-bm-section {
          background-color: #fff;
          border-top: 1px solid #ececec;
          border-bottom: 1px solid #ececec;
          padding: 32px 0;
          overflow: hidden;
        }
        .ca-bm-track-wrap {
          overflow: hidden;
          width: 100%;
        }
        .ca-bm-track {
          display: flex;
          align-items: center;
          animation: caBmScroll 28s linear infinite;
          width: max-content;
        }
        .ca-bm-track:hover { animation-play-state: paused; }

        .ca-bm-logo {
          flex: 0 0 calc(100vw / 3);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          height: 64px;
        }
        :global(.ca-bm-logo-img:hover) {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
        }

        @media (min-width: 400px) { .ca-bm-logo { flex: 0 0 calc(100vw / 4); } }
        @media (min-width: 550px) { .ca-bm-logo { flex: 0 0 calc(100vw / 5); } }
        @media (min-width: 750px) { .ca-bm-logo { flex: 0 0 calc(100vw / 6); } }

        @keyframes caBmScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
