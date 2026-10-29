import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { FootwearMarquee } from '@/features/footwear/components/FootwearMarquee';
import { FootwearHero } from '@/features/footwear/components/FootwearHero';
import { FootwearCollectionCards } from '@/features/footwear/components/FootwearCollectionCards';
import { FootwearNewArrivals } from '@/features/footwear/components/FootwearNewArrivals';
import { FootwearPromoBanners } from '@/features/footwear/components/FootwearPromoBanners';
import { FootwearFeaturedCollection } from '@/features/footwear/components/FootwearFeaturedCollection';
import { FootwearVideoBanner } from '@/features/footwear/components/FootwearVideoBanner';
import { SneakerInstagram } from '@/features/sneaker/components/SneakerInstagram';

export const metadata: Metadata = {
  title: 'Footwear Shop — Ambaz',
  description: 'Step into style with our curated footwear collection — running shoes, sneakers, formals, and limited-edition drops built for comfort and performance.',
};

export default function FootwearHomePage() {
  return (
    <HomepageEntrance>
      <div className="fw-home-sections">
        <FootwearHero />
        <FootwearCollectionCards />
        <FootwearNewArrivals />
        <FootwearPromoBanners />
        <FootwearMarquee />
        <FootwearFeaturedCollection />
        <FootwearVideoBanner />
        <SneakerInstagram />
        <TrustBadges />

        <style>{`
          .fw-home-sections {
            padding-bottom: 80px;
          }
          .fw-home-sections > * + * {
            margin-top: 80px;
          }
          /* Keep gaps to exactly 80px: strip the shared TrustBadges' own
             vertical padding so it doesn't add extra space above/below. */
          .fw-home-sections .tb-grid {
            padding-top: 0;
            padding-bottom: 0;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
