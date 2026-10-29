import type { ReactNode } from 'react';

export function HomepageEntrance({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hp-entrance">
        {children}
      </div>
      <style>{`
        .hp-entrance {
          animation: hp-enter 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 80ms both;
        }
        @keyframes hp-enter {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-entrance { animation: none; }
        }
      `}</style>
    </>
  );
}
