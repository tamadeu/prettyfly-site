import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';

export const metadata: Metadata = {
  title: 'Shop — Boutique Fashion',
  description: 'Browse our complete boutique fashion collection — tops, women, men, and shoes.',
};

export default function BoutiqueFashionShopPage() {
  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath="/boutique-fashion/shop"
        apiEndpoint="/api/boutique-fashion-products"
        productHrefBase="/boutique-fashion/product"
        title="BOUTIQUE FASHION"
        breadcrumbLabel="Shop"
        homeLabel="Home"
        homeHref="/home/boutique-fashion-shop"
        cardVariant="home"
        cardTheme={{
          showCountdown: false,
          showScrollText: false,
          imageHeight: 'clamp(220px, 32vw, 360px)',
          themeColor: '#111',
          countdownBg: '#111',
          compact: true,
        }}
      />
    </Suspense>
  );
}
