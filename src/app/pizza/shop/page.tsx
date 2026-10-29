'use client';

import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';
import { PizzaProductCard, PizzaProductCardStyles } from '@/features/pizza-shop/components/PizzaProductCard';
import type { Product } from '@/types/product';

const PIZZA_SHOP_THEME = {
  headerBg: 'rgb(20,20,20)',
  toolbarBg: 'rgb(20,20,20)',
  sidebarBg: 'rgb(20,20,20)',
  textColor: '#fff',
  mutedColor: 'rgba(255,255,255,0.5)',
  borderColor: '#2a2a2a',
  accentColor: '#e84d1c',
  inputBg: '#1a1a1a',
  tagBg: '#1a1a1a',
};

function renderPizzaCard(product: Product) {
  return <PizzaProductCard product={product} />;
}

export default function PizzaShopPage() {
  return (
    <div style={{ background: '#000000', minHeight: '100dvh' }}>
      <PizzaProductCardStyles />
      <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem]" style={{ color: '#fff' }}>Loading...</div>}>
        <ShopPageContent
          basePath="/pizza/shop"
          apiEndpoint="/api/pizza-products"
          productHrefBase="/pizza/product"
          title="PIZZA SHOP"
          breadcrumbLabel="Pizza Shop"
          homeLabel="Home"
          homeHref="/home/pizza-shop"
          cardVariant="home"
          shopTheme={PIZZA_SHOP_THEME}
          renderCard={renderPizzaCard}
        />
      </Suspense>
    </div>
  );
}
