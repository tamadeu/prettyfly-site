'use client';

import { useState, useEffect } from 'react';

function IconArrowUp({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z" />
    </svg>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <button
        onClick={scrollUp}
        aria-label="Scroll to top"
        className="scroll-top-btn"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 140,
          width: '46px',
          height: '46px',
          borderRadius: '4px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 300ms ease, transform 300ms ease, background-color 250ms ease, bottom 300ms ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: visible ? 'auto' : 'none',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fc5732'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
      >
        <IconArrowUp size={20} />
      </button>

      <style>{`
        /* At ≤ 749px the fixed MobileBottomNav (70px tall) occupies the
           bottom of the viewport. Push the scroll-top button up so it sits
           above the nav bar with breathing room, and sit below the nav's
           z-index (150) so any edge-case overlap never covers the nav. */
        @media (max-width: 749px) {
          .scroll-top-btn {
            bottom: 88px !important;
            right: 18px !important;
            z-index: 140 !important;
          }
        }
      `}</style>
    </>
  );
}
