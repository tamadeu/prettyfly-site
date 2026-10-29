import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Grocery Shop — All Products',
  description: 'Browse our complete grocery selection: fresh produce, pantry essentials, meats, dairies, and more.',
};

export default function GroceryShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/grocery/shop"
        apiEndpoint="/api/grocery-products"
        productHrefBase="/grocery/product"
        title="GROCERY"
        breadcrumbLabel="Grocery"
        homeLabel="Home"
        homeHref="/home/grocery-shop"
        cardVariant="grocery"
      />
    </Suspense>
  );
}
