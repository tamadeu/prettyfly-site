import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Plant & Garden Shop — All Products',
  description: 'Browse our complete range of plants, pots, garden tools, seeds, and accessories.',
};

export default function PlantGardenShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/plant-garden/shop"
        apiEndpoint="/api/plant-garden-products"
        productHrefBase="/plant-garden/product"
        title="PLANT & GARDEN"
        breadcrumbLabel="Plant & Garden"
        homeLabel="Home"
        homeHref="/home/plant-garden-shop"
        cardVariant="home"
        cardTheme={{
          showCountdown: false,
          showScrollText: false,
          imageHeight: 'clamp(220px, 32vw, 340px)',
          themeColor: '#3a7d44',
          countdownBg: '#3a7d44',
          compact: true,
        }}
      />
    </Suspense>
  );
}
