import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { FurnitureHero }               from '@/features/furniture/components/FurnitureHero';
import { FurnitureTrustBadges }        from '@/features/furniture/components/FurnitureTrustBadges';
import { FurnitureCategoriesSection }  from '@/features/furniture/components/FurnitureCategoriesSection';
import { FurnitureTrendingProducts }   from '@/features/furniture/components/FurnitureTrendingProducts';
import { FurniturePromoBanners }       from '@/features/furniture/components/FurniturePromoBanners';
import { FurnitureDealOfTheDay }       from '@/features/furniture/components/FurnitureDealOfTheDay';
import { FurnitureShopTheLook }        from '@/features/furniture/components/FurnitureShopTheLook';
import { FurnitureMarquee }            from '@/features/furniture/components/FurnitureMarquee';
import { FurnitureTabContent }         from '@/features/furniture/components/FurnitureTabContent';
import { FurnitureBlog }               from '@/features/furniture/components/FurnitureBlog';
import { FurnitureInstagram }          from '@/features/furniture/components/FurnitureInstagram';

export const metadata: Metadata = {
  title: 'Furniture Shop — Ambaz',
  description: 'Discover timeless furniture crafted for modern living. Shop our curated collection of sofas, beds, chairs, and more with free shipping on orders over $199.',
};

export default function FurnitureHomePage() {
  return (
    <HomepageEntrance>
      <div className="fu-home-sections">
        <FurnitureHero />

        <FurnitureTrustBadges />
        <FurnitureCategoriesSection />
        <FurnitureTrendingProducts />
        <FurniturePromoBanners />
        <FurnitureDealOfTheDay />
        <FurnitureShopTheLook />
        <FurnitureMarquee />
        <FurnitureTabContent />
        <FurnitureBlog />
        <FurnitureInstagram />

        <style>{`
          .fu-home-sections {
            padding-bottom: 80px;
            overflow-x: hidden;
          }
          .fu-home-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
