import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors duration-[var(--transition-base)] rounded-[var(--radius-md)] cursor-pointer',
          {
            'bg-primary text-white hover:bg-primary-hover': variant === 'primary',
            'bg-secondary text-dark hover:opacity-90': variant === 'secondary',
            'border border-border text-heading hover:bg-bg-light': variant === 'outline',
            'bg-transparent text-heading hover:bg-bg-light': variant === 'ghost',
            'bg-dark text-white hover:bg-dark-hover': variant === 'dark',
          },
          {
            'px-[1.6rem] py-[0.8rem] text-[1.2rem]': size === 'sm',
            'px-[2.4rem] py-[1.2rem] text-[1.4rem]': size === 'md',
            'px-[3.2rem] py-[1.6rem] text-[1.6rem]': size === 'lg',
          },
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
