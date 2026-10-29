'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { jewelleryProducts } from '@/data/jewellery-products';

const allProducts = jewelleryProducts.slice(0, 6);
const PER_PAGE = 2;
const TOTAL_PAGES = Math.ceil(allProducts.length / PER_PAGE);

const HOTSPOTS = [
  { id: 1, top: '22%', left: '48%' },
  { id: 2, top: '55%', left: '72%' },
  { id: 3, top: '70%', left: '30%' },
];

function IconArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function JewelleryShopTheLook() {
  const [page, setPage] = useState(0);

  const goTo   = useCallback((p: number) => setPage(p), []);
  const goPrev = useCallback(() => setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES), []);
  const goNext = useCallback(() => setPage((p) => (p + 1) % TOTAL_PAGES), []);

  return (
    <section>
      <div className="container-main">
        <div className="jwl-grid">
          {/* LEFT: heading + product carousel */}
          <div className="jwl-left">
            <h2 className="jwl-title">Shop the Look</h2>

            <div style={{ position: 'relative' }} className="jwl-cards-wrap">
              {Array.from({ length: TOTAL_PAGES }).map((_, pageIdx) => {
                const pageProducts = allProducts.slice(pageIdx * PER_PAGE, pageIdx * PER_PAGE + PER_PAGE);
                const isActive = pageIdx === page;
                return (
                  <div
                    key={pageIdx}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      ...(pageIdx !== 0 ? { position: 'absolute', top: 0, left: 0, width: '100%' } : {}),
                      opacity: isActive ? 1 : 0,
                      transition: 'opacity 480ms cubic-bezier(0.22, 1, 0.36, 1)',
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    {pageProducts.map((product, i) => (
                      <HomeProductCard
                        key={product.id}
                        product={product}
                        index={pageIdx * PER_PAGE + i}
                        hrefBase="/products"
                        showCountdown={false}
                        showScrollText={false}
                        imageHeight="320px"
                      />
                    ))}
                  </div>
                );
              })}

              <button onClick={goPrev} aria-label="Previous" className="jwl-nav-btn jwl-nav-prev">
                <IconArrowLeft />
              </button>
              <button onClick={goNext} aria-label="Next" className="jwl-nav-btn jwl-nav-next">
                <IconArrowRight />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '28px' }}>
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    width: page === i ? '18px' : '10px',
                    height: page === i ? '18px' : '10px',
                    borderRadius: '50%',
                    border: page === i ? '1.5px solid #b89b6e' : 'none',
                    background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: 0, cursor: 'pointer',
                    transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <span style={{
                    width: page === i ? '8px' : '10px',
                    height: page === i ? '8px' : '10px',
                    borderRadius: '50%',
                    background: page === i ? '#b89b6e' : '#bbb',
                    display: 'block',
                    transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: hotspot image */}
          <div
            className="jwl-right"
            style={{ position: 'relative', height: '700px', overflow: 'hidden', borderRadius: '4px', background: '#f5f5f5' }}
          >
            <Image
              src="/jewelry/lookbook-hotspot/lookbook-hotspot1.webp"
              alt="Shop the look"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 992px) 50vw, 100vw"
            />
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                aria-label={`Product hotspot ${h.id}`}
                className="jwl-hotspot"
                style={{ position: 'absolute', top: h.top, left: h.left }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .jwl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        @media (min-width: 750px) {
          .jwl-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (min-width: 992px) {
          .jwl-grid { gap: 56px; }
        }
        @media (max-width: 749px) {
          .jwl-right { height: clamp(280px, 70vw, 480px) !important; order: -1; }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .jwl-right { height: clamp(400px, 55vw, 600px) !important; }
        }

        .jwl-title {
          text-align: center;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          color: #111;
          margin: 0 0 clamp(20px, 2.5vw, 32px);
          letter-spacing: -0.01em;
        }

        .jwl-nav-btn {
          position: absolute;
          top: 38%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid #e5e5e5;
          background: #fff;
          color: #111;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          opacity: 0;
          transition: opacity 220ms ease, background 220ms ease, border-color 220ms ease, color 220ms ease;
          z-index: 5;
        }
        .jwl-cards-wrap:hover .jwl-nav-btn { opacity: 1; }
        .jwl-nav-btn:hover { background: #b89b6e; border-color: #b89b6e; color: #fff; }
        .jwl-nav-prev { left: 8px; }
        .jwl-nav-next { right: 8px; }

        .jwl-hotspot {
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(20,20,20,0.72);
          border: 2.5px solid #fff;
          cursor: pointer;
          padding: 0;
          z-index: 2;
          transition: background 220ms ease, transform 220ms ease;
        }
        .jwl-hotspot:hover {
          background: rgba(184,155,110,0.9);
          transform: translate(-50%,-50%) scale(1.15);
        }
        .jwl-hotspot::after {
          content: '';
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.5);
          animation: jwlHotspotPulse 2.4s ease-in-out infinite;
        }
        @keyframes jwlHotspotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0; transform: scale(1.6); }
        }
      `}</style>
    </section>
  );
}
