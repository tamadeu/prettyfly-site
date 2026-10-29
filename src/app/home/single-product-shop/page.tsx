import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { SingleProductHero } from '@/features/single-product/components/SingleProductHero';
import { SingleProductFeatureHighlights } from '@/features/single-product/components/SingleProductFeatureHighlights';
import { SingleProductCategorySlider } from '@/features/single-product/components/SingleProductCategorySlider';
import { SingleProductFeaturedProduct } from '@/features/single-product/components/SingleProductFeaturedProduct';
import { SingleProductCharging } from '@/features/single-product/components/SingleProductCharging';
import { SingleProductChargingStats } from '@/features/single-product/components/SingleProductChargingStats';
import { SingleProductFeatureCards } from '@/features/single-product/components/SingleProductFeatureCards';
import { SingleProductNewArrivalsBanner } from '@/features/single-product/components/SingleProductNewArrivalsBanner';
import { SingleProductBestsellers } from '@/features/single-product/components/SingleProductBestsellers';
import { SingleProductTimeline } from '@/features/single-product/components/SingleProductTimeline';
import { SingleProductVideoBanner } from '@/features/single-product/components/SingleProductVideoBanner';
import { SingleProductFAQ } from '@/features/single-product/components/SingleProductFAQ';
import { SingleProductTestimonial } from '@/features/single-product/components/SingleProductTestimonial';
import { SingleProductTrustGrid } from '@/features/single-product/components/SingleProductTrustGrid';

export const metadata: Metadata = {
  title: 'Single Product — Ambaz',
  description:
    'Experience Sound Like Never Before. AirPods 4 with Active Noise Cancellation, Spatial Audio, and up to 30 hours of battery life.',
};

export default function SingleProductHomePage() {
  return (
    <HomepageEntrance>
      <div className="sp-home">
        <SingleProductHero />
        <SingleProductFeatureHighlights />
        <SingleProductCategorySlider />
        <SingleProductFeaturedProduct />
        <SingleProductCharging />
        <SingleProductChargingStats />
        <SingleProductFeatureCards />
        <SingleProductNewArrivalsBanner />
        <SingleProductBestsellers />
        <SingleProductTimeline />
        <SingleProductVideoBanner />
        <SingleProductFAQ />
        <SingleProductTestimonial />
        <SingleProductTrustGrid />

        <style>{`
          /* overflow-x: clip (not hidden) contains the full-bleed slider's
             horizontal overflow WITHOUT creating a scroll container — so
             position: sticky on the Featured Product gallery still works. */
          .sp-home {
            overflow-x: clip;
          }
          /* Uniform 80px gap between every section. Each section owns no
             vertical padding of its own (colored-box sections keep their
             internal inset only) so the distance between sections is exactly 80px. */
          .sp-home > * + * {
            margin-top: 80px !important;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
