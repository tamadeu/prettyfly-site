'use client';

import { cn } from '@/utils/cn';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }: QuantitySelectorProps) {
  return (
    <div className={cn('inline-flex items-center border border-border rounded-[var(--radius-md)]', className)}>
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-[3.6rem] h-[3.6rem] flex items-center justify-center text-[1.6rem] text-heading hover:bg-bg-light transition-colors disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-[3.6rem] h-[3.6rem] flex items-center justify-center text-[1.4rem] font-medium text-heading border-x border-border">
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-[3.6rem] h-[3.6rem] flex items-center justify-center text-[1.6rem] text-heading hover:bg-bg-light transition-colors disabled:opacity-30"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
