import { cn } from '@/utils/cn';
import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[0.4rem]">
        {label && (
          <label htmlFor={id} className="text-[1.3rem] font-medium text-heading">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            'px-[1.2rem] py-[0.8rem] text-[1.4rem] border border-border rounded-[var(--radius-md)] bg-white text-heading outline-none cursor-pointer transition-colors focus:border-dark',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
