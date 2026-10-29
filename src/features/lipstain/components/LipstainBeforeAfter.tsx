'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const ACCENT = '#c9173c';

export function LipstainBeforeAfter() {
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
    <section className="lsba-section">
      <div className="container-main" style={{ textAlign: 'center' }}>
        <p className="lsba-eyebrow">Results That Speak</p>
        <h2 className="lsba-title">See the Difference</h2>
        <p className="lsba-desc">Real lip transformation with our long-wear lipstain formula — bold color that lasts from morning to midnight.</p>

        <div
          ref={containerRef}
          className="lsba-container"
          onMouseMove={onMouseMove}
          onMouseUp={() => { dragging.current = false; }}
          onMouseLeave={() => { dragging.current = false; }}
          onTouchMove={onTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(260px, 45vw, 670px)',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
          }}
        >
          {/* After (bottom layer — full width) */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image
              src="/lipstain/before-after/after.webp"
              alt="After lipstain application"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {/* Before (top layer — clipped by clipPath) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <Image
              src="/lipstain/before-after/before.webp"
              alt="Before lipstain application"
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
              color: ACCENT,
              zIndex: 10,
            }}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width={16} height={16}>
              <rect x="2" y="4" width="1.5" height="8" rx="0.75" />
              <rect x="5.25" y="4" width="1.5" height="8" rx="0.75" />
              <rect x="8.5" y="4" width="1.5" height="8" rx="0.75" />
              <rect x="11.75" y="4" width="1.5" height="8" rx="0.75" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .lsba-eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${ACCENT};
          margin: 0 0 10px;
        }
        .lsba-title {
          font-size: clamp(22px, 3vw, 40px);
          font-weight: 700;
          color: #111;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }
        .lsba-desc {
          font-size: clamp(13px, 1.3vw, 15px);
          color: #666;
          line-height: 1.6;
          max-width: 500px;
          margin-inline: auto;
          margin-bottom: clamp(24px, 4vw, 40px);
        }
      `}</style>
    </section>
  );
}
