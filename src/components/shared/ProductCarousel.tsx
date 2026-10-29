'use client';

import { useRef } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types/product';
import { cn } from '@/utils/cn';

interface ProductCarouselProps {
  products: Product[];
  className?: string;
}

export function ProductCarousel({ products, className }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cn('relative group', className)}>
      <div
        ref={scrollRef}
        className="flex gap-[2rem] overflow-x-auto scrollbar-hide scroll-smooth pb-[1rem]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[24rem] sm:min-w-[28rem] flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute start-0 top-1/3 -translate-y-1/2 w-[4rem] h-[4rem] bg-white shadow-md rounded-full flex items-center justify-center text-[1.8rem] opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-bg-light"
        aria-label="Scroll left"
      >
        ‹
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute end-0 top-1/3 -translate-y-1/2 w-[4rem] h-[4rem] bg-white shadow-md rounded-full flex items-center justify-center text-[1.8rem] opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-bg-light"
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
}
