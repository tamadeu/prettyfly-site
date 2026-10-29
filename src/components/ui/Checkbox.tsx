'use client';

import { cn } from '@/utils/cn';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export function Checkbox({ checked, onChange, label, className }: CheckboxProps) {
  return (
    <label className={cn('flex items-center gap-[0.8rem] cursor-pointer group', className)}>
      <div
        className={cn(
          'w-[1.8rem] h-[1.8rem] border rounded-[0.3rem] flex items-center justify-center transition-colors',
          checked ? 'bg-dark border-dark' : 'border-border group-hover:border-dark'
        )}
      >
        {checked && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="text-white">
            <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {label && <span className="text-[1.4rem] text-body">{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
    </label>
  );
}
