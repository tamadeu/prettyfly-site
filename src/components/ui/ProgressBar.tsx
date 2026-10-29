import { cn } from '@/utils/cn';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showIcon?: boolean;
}

export function ProgressBar({ value, max, className, showIcon }: ProgressBarProps) {
  const percentage = Math.min(100, (value / max) * 100);

  return (
    <div className={cn('relative', className)}>
      <div className="w-full h-[0.8rem] bg-bg-light rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#44B09E] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showIcon && (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[2.4rem] h-[2.4rem] bg-white border-2 border-[#44B09E] rounded-full flex items-center justify-center text-[1rem] transition-all duration-500"
          style={{ insetInlineStart: `calc(${percentage}% - 1.2rem)` }}
        >
          🚚
        </div>
      )}
    </div>
  );
}
