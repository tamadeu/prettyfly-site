import { cn } from '@/utils/cn';
import type { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from '@/components/ui/Skeleton';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  loading?: boolean;
  className?: string;
}

export function ProductGrid({ products, columns = 3, loading, className }: ProductGridProps) {
  if (loading) {
    return (
      <div className={cn(
        'grid gap-[2rem]',
        columns === 2 && 'grid-cols-2',
        columns === 3 && 'grid-cols-2 md:grid-cols-3',
        columns === 4 && 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
        className
      )}>
        {Array.from({ length: columns * 3 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-[6rem]">
        <p className="text-[1.6rem] text-body">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className={cn(
      'grid gap-[2rem]',
      columns === 2 && 'grid-cols-2',
      columns === 3 && 'grid-cols-2 md:grid-cols-3',
      columns === 4 && 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
      className
    )}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
