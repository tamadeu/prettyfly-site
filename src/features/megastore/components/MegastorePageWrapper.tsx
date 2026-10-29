'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function MegastorePageWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)';
        el.style.opacity = '1';
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0, backgroundColor: '#f5f5f5' }}>
      {children}
    </div>
  );
}
