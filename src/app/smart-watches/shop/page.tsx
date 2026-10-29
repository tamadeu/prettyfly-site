import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Shop — Smart Watches',
  description: 'Browse our complete smart watch collection — smart watches, luxury watches, digital watches, and sports trackers.',
};

export default function SmartWatchesShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/smart-watches/shop"
        apiEndpoint="/api/smart-watches-products"
        productHrefBase="/smart-watches/product"
        title="SMART WATCHES"
        breadcrumbLabel="Smart Watches"
        homeLabel="Home"
        homeHref="/home/smart-watches-shop"
        cardVariant="home"
        cardTheme={{
          showCountdown: false,
          showScrollText: false,
          imageHeight: 'clamp(220px, 32vw, 340px)',
          themeColor: '#111',
          countdownBg: '#111',
          compact: true,
        }}
      />
    </Suspense>
  );
}
