import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Phone Case Shop — All Products',
  description: 'Browse our complete phone case collection — phone cases, leather cases, slim cases, and wallet cases.',
};

export default function PhoneCaseShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/phone-case/shop"
        apiEndpoint="/api/phone-case-products"
        productHrefBase="/phone-case/product"
        title="PHONE CASE"
        breadcrumbLabel="Phone Case"
        homeLabel="Home"
        homeHref="/home/phone-case-shop"
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
