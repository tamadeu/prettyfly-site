'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({ isOpen, onClose, children, className, size = 'lg' }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-[2rem] bg-bg-overlay animate-fade-in"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className={cn(
          'bg-white rounded-[var(--radius-lg)] shadow-xl relative animate-slide-up w-full',
          {
            'max-w-[40rem]': size === 'sm',
            'max-w-[56rem]': size === 'md',
            'max-w-[80rem]': size === 'lg',
            'max-w-[100rem]': size === 'xl',
          },
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-[1.5rem] end-[1.5rem] z-10 w-[3.6rem] h-[3.6rem] flex items-center justify-center rounded-full hover:bg-bg-light transition-colors text-[2rem] text-heading"
          aria-label="Close"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
}
