import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Headphones Shop — All Products',
  description: 'Shop our full collection of headphones, earphones, wireless audio gear, and gaming headsets.',
};

export default function HeadphonesShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/headphones/shop"
        apiEndpoint="/api/headphones-products"
        productHrefBase="/products"
        title="HEADPHONES"
        breadcrumbLabel="Headphones"
        homeLabel="Home"
        homeHref="/home/headphones-shop"
        cardVariant="home"
      />
    </Suspense>
  );
}
