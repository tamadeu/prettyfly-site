import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-shimmer rounded-[var(--radius-md)]', className)} />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-[1rem]">
      <Skeleton className="aspect-[3/4] w-full" />
      <Skeleton className="h-[1.6rem] w-3/4" />
      <Skeleton className="h-[1.4rem] w-1/2" />
      <div className="flex gap-[0.5rem]">
        <Skeleton className="w-[1.8rem] h-[1.8rem] rounded-full" />
        <Skeleton className="w-[1.8rem] h-[1.8rem] rounded-full" />
        <Skeleton className="w-[1.8rem] h-[1.8rem] rounded-full" />
      </div>
    </div>
  );
}
