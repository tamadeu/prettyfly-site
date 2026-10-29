import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { Fashion04Hero } from '@/features/fashion-04/components/Fashion04Hero';
import { Fashion04Countdown } from '@/features/fashion-04/components/Fashion04Countdown';
import { Fashion04PromoGrid } from '@/features/fashion-04/components/Fashion04PromoGrid';
import { Fashion04FeaturedCollection } from '@/features/fashion-04/components/Fashion04FeaturedCollection';
import { Fashion04LimitedOffer } from '@/features/fashion-04/components/Fashion04LimitedOffer';
import { Fashion04Categories } from '@/features/fashion-04/components/Fashion04Categories';
import { Fashion04ShopTheLook } from '@/features/fashion-04/components/Fashion04ShopTheLook';
import { Fashion04Instagram } from '@/features/fashion-04/components/Fashion04Instagram';
import { Fashion04Newsletter } from '@/features/fashion-04/components/Fashion04Newsletter';

export const metadata: Metadata = {
  title: 'Fashion 04 — Ambaz',
  description: 'Discover Fashion 04 — trend-led styles, seasonal edits, and effortless everyday looks curated for the modern wardrobe.',
};

export default function Fashion04HomePage() {
  return (
    <HomepageEntrance>
      <div className="f4-home-sections">
        <Fashion04Hero />
        <Fashion04Countdown />
        <Fashion04PromoGrid />
        <Fashion04FeaturedCollection />
        <Fashion04LimitedOffer />
        <Fashion04Categories />
        <Fashion04ShopTheLook />
        <TrustBadges />
        <Fashion04Instagram />
        <Fashion04Newsletter />

        <style>{`
          .f4-home-sections {
            padding-bottom: 80px;
          }
          .f4-home-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
