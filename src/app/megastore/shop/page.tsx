import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Megastore Shop — All Products',
  description: 'Browse our complete electronics selection: headphones, laptops, smart watches, cameras, speakers and more.',
};

export default function MegastoreShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/megastore/shop"
        apiEndpoint="/api/megastore-products"
        productHrefBase="/megastore/product"
        title="MEGASTORE"
        breadcrumbLabel="Megastore"
        homeLabel="Home"
        homeHref="/home/megastore-shop"
        cardVariant="home"
        cardTheme={{
          showCountdown: false,
          showScrollText: false,
          imageHeight: 'clamp(220px, 32vw, 340px)',
          themeColor: '#f26522',
          countdownBg: '#f26522',
          compact: true,
        }}
      />
    </Suspense>
  );
}
