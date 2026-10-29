'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: 'start' | 'end';
  title?: string;
  className?: string;
  width?: string;
}

export function Drawer({
  isOpen,
  onClose,
  children,
  side = 'end',
  title,
  className,
  width = '42rem',
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay — fades in slower than it fades out so it doesn't feel
          like it's racing the panel on open. */}
      <div
        className={cn(
          'fixed inset-0 z-[var(--z-drawer)] bg-bg-overlay',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{
          transition: isOpen
            ? 'opacity 420ms ease'
            : 'opacity 240ms ease',
        }}
        onClick={onClose}
      />

      {/* Drawer panel — expo-out on open (fires fast then decelerates smoothly
          to rest), ease-in on close (snappy exit so the panel doesn't linger).
          will-change keeps the layer GPU-composited for a flicker-free slide. */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 bottom-0 z-[var(--z-drawer)] bg-white shadow-drawer flex flex-col',
          side === 'end' && 'end-0',
          side === 'start' && 'start-0',
          side === 'end' && (isOpen ? 'translate-x-0' : 'translate-x-full rtl:-translate-x-full'),
          side === 'start' && (isOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full'),
          className
        )}
        style={{
          width,
          maxWidth: '100vw',
          transition: isOpen
            ? 'transform 480ms cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 300ms cubic-bezier(0.4, 0, 1, 1)',
          willChange: 'transform',
        }}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-[2rem] py-[1.5rem] border-b border-border">
            <h3 className="text-[1.8rem] font-semibold text-heading">{title}</h3>
            <button
              onClick={onClose}
              className="w-[3.2rem] h-[3.2rem] flex items-center justify-center rounded-full hover:bg-bg-light transition-colors text-[1.8rem] text-heading"
              aria-label="Close drawer"
            >
              &#x2715;
            </button>
          </div>
        )}

        {/* Content — fades in with a short delay so it appears to emerge
            as the panel settles, giving a layered, polished open feel. */}
        <div
          className="flex-1 overflow-y-auto"
          style={{
            opacity: isOpen ? 1 : 0,
            transition: isOpen
              ? 'opacity 320ms ease 120ms'
              : 'opacity 150ms ease',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
