'use client';

import Image from 'next/image';

/* Brand-logo marquee. Imagery only from /basketball/brand-logo/ (files named
   brand-logo1.avif … with no dash). Each image already carries the
   "CREATIVE DESIGN / TAGLINE GOES HERE" lockup, so no extra typography here. */
const logos = [
  { src: '/basketball/brand-logo/brand-logo1.avif', alt: 'Creative Design' },
  { src: '/basketball/brand-logo/brand-logo2.avif', alt: 'Creative Design' },
  { src: '/basketball/brand-logo/brand-logo3.avif', alt: 'Creative Design' },
  { src: '/basketball/brand-logo/brand-logo4.avif', alt: 'Creative Design' },
  { src: '/basketball/brand-logo/brand-logo5.avif', alt: 'Creative Design' },
  { src: '/basketball/brand-logo/brand-logo6.avif', alt: 'Creative Design' },
];

export function BasketballBrandLogos() {
  /* Triple the array so the -33.3333% keyframe loops seamlessly. */
  const repeated = [...logos, ...logos, ...logos];

  return (
    <section className="bblg-section" aria-label="Brand logos">
      <div className="container-main">
        <div className="bblg-viewport">
          <div className="bblg-track">
            {repeated.map((logo, i) => (
              <span key={`${logo.src}-${i}`} className="bblg-item">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={150}
                  style={{ width: 'auto', height: '110px', objectFit: 'contain' }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bblg-viewport {
          overflow: hidden;
          width: 100%;
        }
        .bblg-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: bblg-scroll 30s linear infinite;
        }
        .bblg-viewport:hover .bblg-track {
          animation-play-state: paused;
        }
        /* Slot width scales per breakpoint; the -33.3333% keyframe stays constant
           because it's always one of the three copies regardless of slot width. */
        .bblg-item {
          flex: 0 0 33.33vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes bblg-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }

        @media (max-width: 749px) {
          .bblg-item :global(img) {
            height: 78px !important;
          }
        }

        @media (min-width: 750px) { .bblg-item { flex: 0 0 25vw; } }
        @media (min-width: 992px) { .bblg-item { flex: 0 0 18vw; } }
      `}</style>
    </section>
  );
}
