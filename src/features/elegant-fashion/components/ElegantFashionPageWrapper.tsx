'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ElegantFashionPageWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    /* Double RAF: first frame paints the initial opacity:0 state,
       second frame starts the transition so the browser has a before/after. */
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          'opacity 750ms cubic-bezier(0.22, 1, 0.36, 1), transform 750ms cubic-bezier(0.22, 1, 0.36, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="ef-home-sections"
        style={{ opacity: 0, transform: 'translateY(22px)' }}
      >
        {children}
      </div>

      <style>{`
        .ef-home-sections {
          padding-bottom: 80px;
        }

        /* 80px uniform gap between every section */
        .ef-home-sections > * + * {
          margin-top: 80px;
        }

        /* Products collection — fixed 10px top, 20px bottom; bypasses the 80px rule */
        .ef-home-sections > .efpc-section {
          margin-top: 10px !important;
          margin-bottom: 20px;
        }
        /* Zero out the 80px the general rule would add above whatever follows efpc-section */
        .ef-home-sections > .efpc-section + * {
          margin-top: 0 !important;
        }
      `}</style>
    </>
  );
}
