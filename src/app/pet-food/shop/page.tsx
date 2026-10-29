import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Pet Food Shop — All Products',
  description: 'Browse our complete pet food selection: kibble, wet food, treats, grooming, and accessories.',
};

export default function PetFoodShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/pet-food/shop"
        apiEndpoint="/api/pet-food-products"
        productHrefBase="/pet-food/product"
        title="PET FOOD"
        breadcrumbLabel="Pet Food"
        homeLabel="Home"
        homeHref="/home/pet-food-shop"
        cardVariant="home"
        cardTheme={{
          showCountdown: false,
          showScrollText: false,
          imageHeight: 'clamp(220px, 32vw, 340px)',
          themeColor: 'rgb(10, 66, 83)',
          countdownBg: 'rgb(10, 66, 83)',
          compact: true,
        }}
      />
    </Suspense>
  );
}
