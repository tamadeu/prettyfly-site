'use client';

import { cn } from '@/utils/cn';

interface SizePickerProps {
  sizes: string[];
  selected?: string;
  onSelect?: (size: string) => void;
  className?: string;
}

export function SizePicker({ sizes, selected, onSelect, className }: SizePickerProps) {
  return (
    <div className={cn('flex items-center flex-wrap gap-[0.8rem]', className)}>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect?.(size)}
          className={cn(
            'min-w-[4rem] h-[4rem] px-[1.2rem] flex items-center justify-center text-[1.3rem] font-medium border rounded-[var(--radius-sm)] transition-colors',
            selected === size
              ? 'bg-dark text-white border-dark'
              : 'border-border text-heading hover:border-dark'
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
