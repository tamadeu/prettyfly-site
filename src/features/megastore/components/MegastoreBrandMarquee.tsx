'use client';

import Image from 'next/image';

const logos = [
  { src: '/megastore/scrolling-logo/scrolling-logo2.webp', alt: 'Vigor' },
  { src: '/megastore/scrolling-logo/scrolling-logo3.webp', alt: 'Brand 2' },
  { src: '/megastore/scrolling-logo/scrolling-logo4.webp', alt: 'Brand 3' },
  { src: '/megastore/scrolling-logo/scrolling-logo1.webp', alt: 'Brand 4' },
];

export function MegastoreBrandMarquee() {
  /* Triple the array so the -33.3333% keyframe loops seamlessly */
  const repeated = [...logos, ...logos, ...logos];

  return (
    <section className="ms-bm" aria-label="Brand logos">
      <div className="ms-bm-track">
        {repeated.map((logo, i) => (
          <span key={`${logo.src}-${i}`} className="ms-bm-logo">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={60}
              style={{
                width: 'auto',
                height: '48px',
                objectFit: 'contain',
              }}
            />
          </span>
        ))}
      </div>

      <style jsx>{`
        .ms-bm {
          height: 150px;
          background-color: #fff;
          overflow: hidden;
          display: flex;
          align-items: center;
          border-top: 1px solid #ececec;
          border-bottom: 1px solid #ececec;
        }
        .ms-bm-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: ms-bm-scroll 9s linear infinite;
        }
        .ms-bm:hover .ms-bm-track {
          animation-play-state: paused;
        }
        /* Mobile-first: 3 logos visible at narrowest viewport.
           Slot formula scales up at each breakpoint; -33.3333% keyframe stays constant
           because it's always 4/12 of the tripled track regardless of slot width. */
        .ms-bm-logo {
          flex: 0 0 calc(100vw / 3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.85;
          transition: opacity 220ms ease, transform 220ms ease;
        }
        .ms-bm-logo:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        @keyframes ms-bm-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }

        /* < 750px — reduce marquee height + logo image size */
        @media (max-width: 749px) {
          .ms-bm {
            height: 110px;
          }
          .ms-bm-logo :global(img) {
            height: 30px !important;
          }
        }

        @media (min-width: 400px) { .ms-bm-logo { flex: 0 0 calc(100vw / 4); } }
        @media (min-width: 550px) { .ms-bm-logo { flex: 0 0 calc(100vw / 5); } }
        @media (min-width: 750px) { .ms-bm-logo { flex: 0 0 calc(100vw / 7); } }
      `}</style>
    </section>
  );
}
