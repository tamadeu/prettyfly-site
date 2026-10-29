import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Nutrition Shop — All Products',
  description: 'Browse our complete nutrition selection: proteins, vitamins, supplements, and performance formulas.',
};

export default function NutritionShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/nutrition/shop"
        apiEndpoint="/api/nutrition-products"
        productHrefBase="/nutrition/product"
        title="NUTRITION"
        breadcrumbLabel="Nutrition"
        homeLabel="Home"
        homeHref="/home/nutrition-shop"
        cardVariant="home"
      />
    </Suspense>
  );
}
