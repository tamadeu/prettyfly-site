import { cn } from '@/utils/cn';

interface BadgeProps {
  variant?: 'sale' | 'new' | 'pre-order' | 'custom';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'custom', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-[0.8rem] py-[0.3rem] text-[1.1rem] font-semibold rounded-[var(--radius-sm)] leading-none',
        {
          'bg-sale text-white': variant === 'sale',
          'bg-dark text-white': variant === 'new',
          'bg-primary text-white': variant === 'pre-order',
          'bg-bg-light text-heading': variant === 'custom',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
