import Image from 'next/image';

const logos = [
  { src: '/electronics store/logo/logo1.webp', alt: 'Brand 1' },
  { src: '/electronics store/logo/logo2.webp', alt: 'Brand 2' },
  { src: '/electronics store/logo/logo3.webp', alt: 'Brand 3' },
  { src: '/electronics store/logo/logo4.webp', alt: 'Brand 4' },
  { src: '/electronics store/logo/logo3.webp', alt: 'Brand 5' },
  { src: '/electronics store/logo/logo4.webp', alt: 'Brand 6' },
];

export function ES2BrandLogos() {
  return (
    <section className="es2lg-section">
      <div className="container-main">
        <div className="es2lg-grid">
          {logos.map((logo, i) => (
            <div key={i} className="es2lg-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={56}
                style={{ width: 'auto', height: '44px', objectFit: 'contain' }}
                sizes="(max-width: 749px) 33vw, 17vw"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .es2lg-section {
          background: #f5f5f5;
        }

        .es2lg-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          align-items: center;
          height: 140px;
        }

        .es2lg-item {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.55;
          transition: opacity 240ms ease, transform 240ms ease;
        }

        .es2lg-item:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        /* Tablet: 3 per row, two rows */
        @media (max-width: 749px) {
          .es2lg-grid {
            grid-template-columns: repeat(3, 1fr);
            height: auto;
            gap: 20px;
            padding-block: 32px;
          }

          .es2lg-item img {
            height: 30px !important;
          }
        }

        @media (min-width: 750px) and (max-width: 991px) {
          .es2lg-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
