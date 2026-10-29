import { cn } from '@/utils/cn';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[0.4rem]">
        {label && (
          <label htmlFor={id} className="text-[1.3rem] font-medium text-heading">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-[1.6rem] py-[1rem] text-[1.4rem] border border-border rounded-[var(--radius-md)] bg-white text-heading placeholder:text-body/50 outline-none transition-colors focus:border-dark',
            error && 'border-error',
            className
          )}
          {...props}
        />
        {error && <p className="text-[1.2rem] text-error">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
