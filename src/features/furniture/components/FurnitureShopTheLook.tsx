'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { HomeProductCard } from '@/features/home/components/HomeProductCard';
import { furnitureProducts } from '@/data/furniture-products';

const allProducts = furnitureProducts.slice(0, 6);
const PER_PAGE = 2;
const TOTAL_PAGES = Math.ceil(allProducts.length / PER_PAGE);

const HOTSPOTS = [
  { id: 1, top: '22%', left: '38%' },
  { id: 2, top: '55%', left: '68%' },
  { id: 3, top: '72%', left: '24%' },
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

export function FurnitureShopTheLook() {
  const [page, setPage] = useState(0);

  const goTo   = useCallback((p: number) => setPage(p), []);
  const goPrev = useCallback(() => setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES), []);
  const goNext = useCallback(() => setPage((p) => (p + 1) % TOTAL_PAGES), []);

  return (
    <section>
      <div className="container-main">
        <div className="fustl-grid">

          {/* LEFT — hotspot lookbook */}
          <div
            className="fustl-lookbook"
            style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', background: '#e8e0d5' }}
          >
            <Image
              src="/furniture/shop-the-look/shop-the-look1.webp"
              alt="Shop the look"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 992px) 50vw, 100vw"
            />
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                aria-label={`Product hotspot ${h.id}`}
                className="fustl-hotspot"
                style={{ position: 'absolute', top: h.top, left: h.left }}
              />
            ))}
          </div>

          {/* RIGHT — heading + product cards */}
          <div className="fustl-right-col">
            <h2 className="fustl-heading">Shop the look</h2>

            <div style={{ position: 'relative' }} className="fustl-cards-wrap">
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
                        imageHeight="280px"
                      />
                    ))}
                  </div>
                );
              })}

              <button onClick={goPrev} aria-label="Previous" className="fustl-nav-btn fustl-nav-prev">
                <IconArrowLeft />
              </button>
              <button onClick={goNext} aria-label="Next" className="fustl-nav-btn fustl-nav-next">
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
                    border: page === i ? '1.5px solid #c8a45a' : 'none',
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
                    background: page === i ? '#c8a45a' : '#bbb',
                    display: 'block',
                    transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }} />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .fustl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        .fustl-lookbook { height: clamp(280px, 70vw, 480px); order: -1; }

        .fustl-heading {
          text-align: center;
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: #111;
          margin-bottom: clamp(20px, 2.5vw, 32px);
          letter-spacing: -0.01em;
        }

        .fustl-nav-btn {
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
        .fustl-cards-wrap:hover .fustl-nav-btn { opacity: 1; }
        .fustl-nav-btn:hover { background: #c8a45a; border-color: #c8a45a; color: #fff; }
        .fustl-nav-prev { left: 8px; }
        .fustl-nav-next { right: 8px; }

        .fustl-hotspot {
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(200,164,90,0.80);
          border: 2.5px solid #fff;
          cursor: pointer;
          padding: 0;
          z-index: 2;
          transition: background 220ms ease, transform 220ms ease;
        }
        .fustl-hotspot:hover {
          background: rgba(200,164,90,1);
          transform: translate(-50%,-50%) scale(1.15);
        }
        .fustl-hotspot::after {
          content: '';
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 1.5px solid rgba(200,164,90,0.45);
          animation: fustlHotspotPulse 2.4s ease-in-out infinite;
        }
        @keyframes fustlHotspotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0; transform: scale(1.6); }
        }

        @media (min-width: 750px) {
          .fustl-lookbook { height: clamp(400px, 65vw, 720px); }
          .fustl-nav-btn { display: none; }
        }
        @media (min-width: 992px) {
          .fustl-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
          .fustl-lookbook { height: 900px; order: 0; }
          .fustl-nav-btn { display: flex; }
        }
      `}</style>
    </section>
  );
}
