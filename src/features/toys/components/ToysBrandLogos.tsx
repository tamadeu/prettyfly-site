'use client';

import Image from 'next/image';

/* Brand-logo strip — same design/layout as Boutique Fashion's BFBrandLogos.tsx:
   a static flex-wrap row (not a slider/marquee), grayscale by default, full
   color + full opacity on hover. Imagery from /toys/brand-logo/ only (files
   named brand-logo1.avif … with no dash). */

const logos = [
  { id: 1, src: '/toys/brand-logo/brand-logo1.avif', alt: 'Brand 1' },
  { id: 2, src: '/toys/brand-logo/brand-logo2.avif', alt: 'Brand 2' },
  { id: 3, src: '/toys/brand-logo/brand-logo3.avif', alt: 'Brand 3' },
  { id: 4, src: '/toys/brand-logo/brand-logo4.avif', alt: 'Brand 4' },
  { id: 5, src: '/toys/brand-logo/brand-logo5.avif', alt: 'Brand 5' },
  { id: 6, src: '/toys/brand-logo/brand-logo6.avif', alt: 'Brand 6' },
];

export function ToysBrandLogos() {
  return (
    <section className="tybl-section">
      <div className="container-main">
        <div className="tybl-grid">
          {logos.map((logo) => (
            <div key={logo.id} className="tybl-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={100}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '100px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tybl-section { padding: 0; }
        .tybl-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .tybl-item {
          flex: 0 0 calc(16.666% - 24px);
          min-width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(1);
          opacity: 0.55;
          transition: filter 320ms ease, opacity 320ms ease;
        }
        .tybl-item:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        @media (max-width: 749px) {
          .tybl-grid { justify-content: center; gap: 20px; }
          .tybl-item { flex: 0 0 calc(33.333% - 20px); min-width: 72px; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .tybl-item { flex: 0 0 calc(33.333% - 24px); }
        }
      `}</style>
    </section>
  );
}
