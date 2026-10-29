import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { Marquee } from '@/components/shared/Marquee';
import { BasketballHero } from '@/features/basketball/components/BasketballHero';
import { BasketballCategories } from '@/features/basketball/components/BasketballCategories';
import { BasketballPromoBanners } from '@/features/basketball/components/BasketballPromoBanners';
import { BasketballFeatured } from '@/features/basketball/components/BasketballFeatured';
import { BasketballDeals } from '@/features/basketball/components/BasketballDeals';
import { BasketballTabContent } from '@/features/basketball/components/BasketballTabContent';
import { BasketballFeaturedCollection } from '@/features/basketball/components/BasketballFeaturedCollection';
import { BasketballShopTheLook } from '@/features/basketball/components/BasketballShopTheLook';
import { BasketballBrandLogos } from '@/features/basketball/components/BasketballBrandLogos';
import { BasketballInstagram } from '@/features/basketball/components/BasketballInstagram';
import { BasketballTrustBadges } from '@/features/basketball/components/BasketballTrustBadges';

export const metadata: Metadata = {
  title: 'Basketball — Ambaz',
  description: 'Where style meets performance. Tournament-grade basketballs and stylish gear engineered for peak performance on every court.',
};

export default function BasketballHomePage() {
  return (
    <HomepageEntrance>
      <div className="bb-home-sections">
        <BasketballHero />
        <BasketballCategories />
        <BasketballPromoBanners />
        <BasketballFeatured />
        <BasketballDeals />
        <BasketballTabContent />
        <BasketballFeaturedCollection />
        <Marquee text="Welcome to store" />
        <BasketballShopTheLook />
        <BasketballBrandLogos />
        <BasketballInstagram />
        <BasketballTrustBadges />

        <style>{`
          .bb-home-sections {
            padding-bottom: 80px;
          }
          .bb-home-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
