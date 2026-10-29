'use client';

import Image from 'next/image';

/* Brand-logo strip — static flex-wrap row, grayscale by default, full
   color + full opacity on hover. Imagery from /socks/brand-logo/ only. */

const logos = [
  { id: 1, src: '/socks/brand-logo/brand-logo1.avif', alt: 'Brand 1' },
  { id: 2, src: '/socks/brand-logo/brand-logo2.avif', alt: 'Brand 2' },
  { id: 3, src: '/socks/brand-logo/brand-logo3.avif', alt: 'Brand 3' },
  { id: 4, src: '/socks/brand-logo/brand-logo4.avif', alt: 'Brand 4' },
  { id: 5, src: '/socks/brand-logo/brand-logo5.avif', alt: 'Brand 5' },
  { id: 6, src: '/socks/brand-logo/brand-logo6.avif', alt: 'Brand 6' },
];

export function SocksBrandLogos() {
  return (
    <section className="sxbl-section">
      <div className="container-main">
        <div className="sxbl-grid">
          {logos.map((logo) => (
            <div key={logo.id} className="sxbl-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={190}
                height={120}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sxbl-section { padding: 0; }
        .sxbl-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .sxbl-item {
          flex: 0 0 calc(16.666% - 24px);
          min-width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(1);
          opacity: 0.55;
          transition: filter 320ms ease, opacity 320ms ease;
        }
        .sxbl-item:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        @media (max-width: 749px) {
          .sxbl-grid { justify-content: center; gap: 20px; }
          .sxbl-item { flex: 0 0 calc(33.333% - 20px); min-width: 72px; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .sxbl-item { flex: 0 0 calc(33.333% - 24px); }
        }
      `}</style>
    </section>
  );
}
