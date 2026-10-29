import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { SkinCareHero } from '@/features/skin-care/components/SkinCareHero';
import { SkinCareCategoriesSection } from '@/features/skin-care/components/SkinCareCategoriesSection';
import { SkinCareNewArrivals } from '@/features/skin-care/components/SkinCareNewArrivals';
import { SkinCareVideoBanner } from '@/features/skin-care/components/SkinCareVideoBanner';
import { SkinCareShopTheLook } from '@/features/skin-care/components/SkinCareShopTheLook';
import { SkinCareTabSection } from '@/features/skin-care/components/SkinCareTabSection';
import { SkinCareBeforeAfter } from '@/features/skin-care/components/SkinCareBeforeAfter';
import { SkinCareBlog } from '@/features/skin-care/components/SkinCareBlog';
import { SkinCareInstagram } from '@/features/skin-care/components/SkinCareInstagram';

export const metadata: Metadata = {
  title: 'Skin Care Shop — Ambaz',
  description: 'Premium skincare formulated with nature\'s finest ingredients. Discover serums, creams, oils and more for radiant, healthy skin.',
};

export default function SkinCareHomePage() {
  return (
    <HomepageEntrance>
      <div className="sk-home-sections">
        <SkinCareHero />

        <SkinCareCategoriesSection />
        <SkinCareNewArrivals />
        <SkinCareVideoBanner />
        <SkinCareShopTheLook />
        <SkinCareBeforeAfter />
        <SkinCareTabSection />
        <SkinCareBlog />
        <SkinCareInstagram />

        <style>{`
          .sk-home-sections {
            padding-bottom: 80px;
          }
          .sk-home-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
