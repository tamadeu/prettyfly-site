'use client';

import Image from 'next/image';

const PANELS = [
  {
    id: 1,
    src: '/jewelry-2/lookbook-hotspot/banner-7.webp',
    alt: 'Pearl jewelry lookbook',
    hotspots: [{ top: '20%', left: '9%' }, { top: '77%', left: '37%' }],
  },
  {
    id: 2,
    src: '/jewelry-2/lookbook-hotspot/banner-8.webp',
    alt: 'Statement jewelry lookbook',
    hotspots: [{ top: '48%', left: '22%' }, { top: '65%', left: '77%' }],
  },
];

export function Jewelry2Lookbook() {
  return (
    <section className="jzlb-section">
      <div className="jzlb-grid">
        {PANELS.map((panel) => (
          <div key={panel.id} className="jzlb-panel">
            <Image src={panel.src} alt={panel.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 991px) 100vw, 50vw" />
            {panel.hotspots.map((h, i) => (
              <span key={i} className="jzlb-hotspot" style={{ top: h.top, left: h.left }} />
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .jzlb-section { height: 575px; }
        .jzlb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          height: 100%;
        }
        .jzlb-panel {
          position: relative;
          height: 575px;
          background: #f2f2f2;
        }
        .jzlb-hotspot {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(224, 120, 100, 0.85);
          border: 2px solid #fff;
          transform: translate(-50%, -50%);
        }
        .jzlb-hotspot::after {
          content: '';
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: jzlbPulse 2.4s ease-in-out infinite;
        }
        @keyframes jzlbPulse {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        @media (min-width: 750px) {
          .jzlb-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
