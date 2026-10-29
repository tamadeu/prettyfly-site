import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { Marquee } from '@/components/shared/Marquee';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { Fashion03Hero } from '@/features/fashion-03/components/Fashion03Hero';
import { Fashion03PromoGrid } from '@/features/fashion-03/components/Fashion03PromoGrid';
import { Fashion03FeaturedCollection } from '@/features/fashion-03/components/Fashion03FeaturedCollection';
import { Fashion03ShopTheLook } from '@/features/fashion-03/components/Fashion03ShopTheLook';
import { Fashion03Categories } from '@/features/fashion-03/components/Fashion03Categories';
import { Fashion03TabContent } from '@/features/fashion-03/components/Fashion03TabContent';
import { Fashion03Blog } from '@/features/fashion-03/components/Fashion03Blog';
import { Fashion03Instagram } from '@/features/fashion-03/components/Fashion03Instagram';

export const metadata: Metadata = {
  title: 'Fashion 03 — Ambaz',
  description: 'Discover Fashion 03 — everyday fashion for everyone, seasonal trend edits, and effortless looks curated for the modern wardrobe.',
};

export default function Fashion03HomePage() {
  return (
    <HomepageEntrance>
      <div className="f3-home-sections">
        <Fashion03Hero />
        <div className="f3-trust">
          <TrustBadges />
        </div>
        <Fashion03PromoGrid />
        <Fashion03FeaturedCollection />
        <Fashion03ShopTheLook />
        <Fashion03Categories />
        <Fashion03TabContent />
        <Marquee text="Welcome to store" />
        <Fashion03Blog />
        <Fashion03Instagram />

        <style>{`
          .f3-home-sections {
            padding-bottom: 80px;
          }
          .f3-home-sections > * + * {
            margin-top: 80px;
          }

          /* Trust badges: Fashion 03 shows only 3 items (no "Secure Payment",
             the 3rd badge) and balances the grid to 3 columns. Scoped to
             .f3-trust so the shared TrustBadges stays unchanged elsewhere. */
          .f3-trust .tb-item:nth-child(3) {
            display: none;
          }
          .f3-trust .tb-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          /* Larger, more prominent icons (overrides the SVG's 40px width/height
             attribute) while keeping the existing flex row layout. */
          .f3-trust .tb-icon svg {
            width: 54px;
            height: 54px;
          }
          @media (max-width: 991px) {
            .f3-trust .tb-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 599px) {
            .f3-trust .tb-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
