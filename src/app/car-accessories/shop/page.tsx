import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Car Accessories Shop — All Products',
  description: 'Browse our complete range of car accessories, auto parts, wheels, and brakes.',
};

export default function CarAccessoriesShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/car-accessories/shop"
        apiEndpoint="/api/car-accessories-products"
        productHrefBase="/car-accessories/product"
        title="CAR ACCESSORIES"
        breadcrumbLabel="Car Accessories"
        homeLabel="Home"
        homeHref="/home/car-accessories-shop"
        cardVariant="home"
        cardTheme={{
          showCountdown: false,
          showScrollText: false,
          imageHeight: 'clamp(220px, 32vw, 340px)',
          themeColor: '#5b72d6',
          countdownBg: '#5b72d6',
          compact: true,
        }}
      />
    </Suspense>
  );
}
