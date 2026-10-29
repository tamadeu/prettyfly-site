'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export function PCBeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="pcba-section">
      <div className="container-main">
        <div
          ref={containerRef}
          className="pcba-container"
          onMouseMove={onMouseMove}
          onMouseUp={() => { dragging.current = false; }}
          onMouseLeave={() => { dragging.current = false; }}
          onTouchMove={onTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(260px, 45vw, 670px)',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
          }}
        >
          {/* After — bottom layer, full width */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image
              src="/phone-case/before-after/before-after2.webp"
              alt="After"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {/* Before — top layer, clipped */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <Image
              src="/phone-case/before-after/before-after1.webp"
              alt="Before"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {/* Divider line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${position}%`,
              width: '2px',
              background: 'rgba(255,255,255,0.85)',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 4,
            }}
          />

          {/* Drag handle */}
          <div
            onMouseDown={(e) => { dragging.current = true; e.preventDefault(); }}
            onTouchStart={() => { dragging.current = true; }}
            onTouchEnd={() => { dragging.current = false; }}
            style={{
              position: 'absolute',
              top: '50%',
              left: `${position}%`,
              transform: 'translate(-50%, -50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'ew-resize',
              color: '#111',
              zIndex: 10,
            }}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width={16} height={16}>
              <rect x="2"     y="4" width="1.5" height="8" rx="0.75" />
              <rect x="5.25"  y="4" width="1.5" height="8" rx="0.75" />
              <rect x="8.5"   y="4" width="1.5" height="8" rx="0.75" />
              <rect x="11.75" y="4" width="1.5" height="8" rx="0.75" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .pcba-section { background: #fff; }
      `}</style>
    </section>
  );
}
