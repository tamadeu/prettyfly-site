'use client';

import { cn } from '@/utils/cn';
import type { ColorOption } from '@/types/product';

interface ColorSwatchProps {
  colors: ColorOption[];
  selected?: string;
  onSelect?: (color: string) => void;
  maxVisible?: number;
  size?: 'sm' | 'md';
  className?: string;
}

export function ColorSwatch({
  colors,
  selected,
  onSelect,
  maxVisible = 3,
  size = 'sm',
  className,
}: ColorSwatchProps) {
  const visible = colors.slice(0, maxVisible);
  const remaining = colors.length - maxVisible;

  return (
    <div className={cn('flex items-center gap-[0.6rem]', className)}>
      {visible.map((color) => (
        <button
          key={color.name}
          onClick={() => onSelect?.(color.name)}
          title={color.name}
          className={cn(
            'rounded-full border-2 transition-all',
            size === 'sm' ? 'w-[1.8rem] h-[1.8rem]' : 'w-[3.2rem] h-[3.2rem]',
            selected === color.name
              ? 'border-dark scale-110'
              : 'border-border hover:border-dark/50',
            color.value === '#FFFFFF' && 'border-border'
          )}
          style={{ backgroundColor: color.value }}
          aria-label={`Color: ${color.name}`}
        />
      ))}
      {remaining > 0 && (
        <span className="text-[1.2rem] text-body">+{remaining}</span>
      )}
    </div>
  );
}
