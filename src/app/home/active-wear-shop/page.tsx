import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { ActiveWearTrustBadges } from '@/features/active-wear/components/ActiveWearTrustBadges';
import { ActiveWearHero } from '@/features/active-wear/components/ActiveWearHero';
import { ActiveWearExploreCategories } from '@/features/active-wear/components/ActiveWearExploreCategories';
import { ActiveWearPromoGrid } from '@/features/active-wear/components/ActiveWearPromoGrid';
import { ActiveWearNewArrivals } from '@/features/active-wear/components/ActiveWearNewArrivals';
import { ActiveWearCountdown } from '@/features/active-wear/components/ActiveWearCountdown';
import { ActiveWearTabContent } from '@/features/active-wear/components/ActiveWearTabContent';
import { ActiveWearVideoBanner } from '@/features/active-wear/components/ActiveWearVideoBanner';
import { ActiveWearShopTheLook } from '@/features/active-wear/components/ActiveWearShopTheLook';
import { ActiveWearInstagram } from '@/features/active-wear/components/ActiveWearInstagram';

export const metadata: Metadata = {
  title: 'Active Wear — Ambaz',
  description: 'Elevate your workout with high-performance activewear — sports bras, leggings, joggers and yoga essentials engineered to move with you.',
};

export default function ActiveWearHomePage() {
  return (
    <HomepageEntrance>
      <div className="aw-home-sections">
        <ActiveWearHero />
        <ActiveWearExploreCategories />
        <ActiveWearPromoGrid />
        <ActiveWearNewArrivals />
        <ActiveWearCountdown />
        <ActiveWearTabContent />
        <TestimonialSection backgroundColor="transparent" sectionPadding="0" />
        <ActiveWearVideoBanner />
        <ActiveWearShopTheLook />
        <ActiveWearInstagram />
        <ActiveWearTrustBadges />

        <style>{`
          .aw-home-sections {
            padding-bottom: 80px;
          }
          .aw-home-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
