import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Shop All Products',
  description: 'Browse our complete collection of fashion, accessories, activewear, and more.',
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent apiEndpoint="/api/shop-products" />
    </Suspense>
  );
}
