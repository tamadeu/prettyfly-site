import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PlumbingHero = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingHero').then(m => ({ default: m.PlumbingHero })));
const PlumbingCategoryLinks = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingCategoryLinks').then(m => ({ default: m.PlumbingCategoryLinks })));
const PlumbingPromoGrid = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingPromoGrid').then(m => ({ default: m.PlumbingPromoGrid })));
const PlumbingFeaturedProducts = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingFeaturedProducts').then(m => ({ default: m.PlumbingFeaturedProducts })));
const PlumbingLimitedTimeOffer = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingLimitedTimeOffer').then(m => ({ default: m.PlumbingLimitedTimeOffer })));
const PlumbingBestSelling = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingBestSelling').then(m => ({ default: m.PlumbingBestSelling })));
const PlumbingVideoBanner = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingVideoBanner').then(m => ({ default: m.PlumbingVideoBanner })));
const PlumbingMilestones = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingMilestones').then(m => ({ default: m.PlumbingMilestones })));
const PlumbingLatestBlog = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingLatestBlog').then(m => ({ default: m.PlumbingLatestBlog })));
const PlumbingTrustBadges = dynamic(() => import('@/features/plumbing-supplies/components/PlumbingTrustBadges').then(m => ({ default: m.PlumbingTrustBadges })));

import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Ambaz — Plumbing Supplies Store',
  description: 'Professional-grade plumbing supplies for homeowners and contractors. Shop taps, pipes, valves, fittings and more with fast, free shipping.',
};

export default function PlumbingSuppliesHomePage() {
  return (
    <div className="pl-home-sections">
      <PlumbingHero />
      <PlumbingCategoryLinks />
      <PlumbingPromoGrid />
      <PlumbingFeaturedProducts />
      <PlumbingLimitedTimeOffer />
      <PlumbingBestSelling />
      <PlumbingVideoBanner />
      <PlumbingMilestones />
      <div className="pl-home-testimonial">
        <TestimonialSection heading="Customers Feedback" backgroundColor="#ffffff" />
      </div>
      <PlumbingLatestBlog />
      <PlumbingTrustBadges />

      <style>{`
        .pl-home-sections {
          padding-bottom: 80px;
          /* Safety net: never allow any section/component to spill horizontally
             at any breakpoint (clip, not scroll — keeps sticky/vertical intact). */
          overflow-x: clip;
        }
        /* Every image in every section stays inside its box and scales with it,
           preserving aspect ratio — can't overflow or stretch past its container.
           next/image fill images already fill their positioned box; this also caps
           any intrinsic image so it never exceeds its parent, and clamps fill images
           against sub-pixel rounding mid-load. */
        .pl-home-sections img {
          max-width: 100%;
          max-height: 100%;
        }
        .pl-home-sections > * + * {
          margin-top: 80px;
        }
        /* Category-link cards sit close under the hero */
        .pl-home-sections > section:nth-child(2) {
          margin-top: 40px;
        }
        /* Testimonial section already carries its own vertical padding */
        .pl-home-testimonial { margin-top: 40px; }
        .pl-home-testimonial + * { margin-top: 40px; }
        @media (max-width: 749px) {
          .pl-home-sections > * + * { margin-top: 56px; }
        }

        /* Testimonial card shadow — see skill/swiper-card-shadow-clip-fix.md
           for the full technique (same values as the Single Product source
           of truth, kept identical across storefronts for consistency). */
        .pl-home-testimonial .ts-card {
          box-shadow:
            0 20px 40px -14px rgba(15, 23, 42, 0.1),
            0 8px 16px -6px rgba(15, 23, 42, 0.06),
            0 -10px 24px -12px rgba(15, 23, 42, 0.07) !important;
        }
        .pl-home-testimonial .swiper {
          overflow: hidden !important;
          padding-block: 56px !important;
          margin-block: -56px !important;
          padding-inline: 18px !important;
          margin-inline: -18px !important;
          width: calc(100% + 36px) !important;
        }
      `}</style>
    </div>
  );
}
