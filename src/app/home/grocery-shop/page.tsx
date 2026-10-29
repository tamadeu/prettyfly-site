import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import dynamic from 'next/dynamic';
import { SITE_NAME } from '@/lib/constants';

const GroceryHero = dynamic(() => import('@/features/grocery-shop/components/GroceryHero').then((m) => ({ default: m.GroceryHero })));
const GroceryCategories = dynamic(() => import('@/features/grocery-shop/components/GroceryCategories').then((m) => ({ default: m.GroceryCategories })));
const GroceryPromoBanners = dynamic(() => import('@/features/grocery-shop/components/GroceryPromoBanners').then((m) => ({ default: m.GroceryPromoBanners })));
const GroceryFeaturedProducts = dynamic(() => import('@/features/grocery-shop/components/GroceryFeaturedProducts').then((m) => ({ default: m.GroceryFeaturedProducts })));
const GroceryWeeklyDeals = dynamic(() => import('@/features/grocery-shop/components/GroceryWeeklyDeals').then((m) => ({ default: m.GroceryWeeklyDeals })));
const GroceryFeatures = dynamic(() => import('@/features/grocery-shop/components/GroceryFeatures').then((m) => ({ default: m.GroceryFeatures })));
const GroceryCountdownBanner = dynamic(() => import('@/features/grocery-shop/components/GroceryCountdownBanner').then((m) => ({ default: m.GroceryCountdownBanner })));
const GroceryFeaturedCollection = dynamic(() => import('@/features/grocery-shop/components/GroceryFeaturedCollection').then((m) => ({ default: m.GroceryFeaturedCollection })));
const GroceryFullBanner = dynamic(() => import('@/features/grocery-shop/components/GroceryFullBanner').then((m) => ({ default: m.GroceryFullBanner })));
const GroceryPopularProducts = dynamic(() => import('@/features/grocery-shop/components/GroceryPopularProducts').then((m) => ({ default: m.GroceryPopularProducts })));
const GroceryBlog = dynamic(() => import('@/features/grocery-shop/components/GroceryBlog').then((m) => ({ default: m.GroceryBlog })));
const GroceryInstagram = dynamic(() => import('@/features/grocery-shop/components/GroceryInstagram').then((m) => ({ default: m.GroceryInstagram })));

export const metadata: Metadata = {
  title: `Grocery Shop — ${SITE_NAME}`,
  description: 'Fresh groceries, organic produce, and pantry essentials delivered to your door.',
};

export default function GroceryShopPage() {
  return (
    <HomepageEntrance>
      <div className="grocery-sections">
        <GroceryHero />
        <GroceryCategories />
        <GroceryPromoBanners />
        <GroceryFeaturedProducts />
        <GroceryWeeklyDeals />
        <GroceryFeatures />
        <GroceryCountdownBanner />
        <GroceryFeaturedCollection />
        <GroceryFullBanner />
        <GroceryPopularProducts />
        <GroceryBlog />
        <GroceryInstagram />

        <style>{`
          /* Mobile-first — 80px spacing between every section */
          .grocery-sections {
            padding-top: 40px;
            padding-bottom: 80px;
          }
          .grocery-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
