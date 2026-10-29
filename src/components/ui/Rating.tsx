import { cn } from '@/utils/cn';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md';
  showValue?: boolean;
  className?: string;
}

export function Rating({ value, max = 5, size = 'sm', showValue, className }: RatingProps) {
  const stars = Array.from({ length: max }, (_, i) => {
    const filled = i < Math.floor(value);
    const half = !filled && i < value;
    return { filled, half };
  });

  return (
    <div className={cn('flex items-center gap-[0.3rem]', className)}>
      {stars.map((star, i) => (
        <span
          key={i}
          className={cn(
            'inline-block',
            size === 'sm' ? 'text-[1.4rem]' : 'text-[1.8rem]',
            star.filled || star.half ? 'text-[#FFC107]' : 'text-border'
          )}
        >
          ★
        </span>
      ))}
      {showValue && (
        <span className="text-[1.3rem] text-body ms-[0.4rem]">{value.toFixed(1)}</span>
      )}
    </div>
  );
}
