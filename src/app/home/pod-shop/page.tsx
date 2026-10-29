import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PodHero = dynamic(() => import('@/features/pod/components/PodHero').then(m => ({ default: m.PodHero })));
const PodTopCategories = dynamic(() => import('@/features/pod/components/PodTopCategories').then(m => ({ default: m.PodTopCategories })));
const PodPromoGrid = dynamic(() => import('@/features/pod/components/PodPromoGrid').then(m => ({ default: m.PodPromoGrid })));
const PodFeaturedProducts = dynamic(() => import('@/features/pod/components/PodFeaturedProducts').then(m => ({ default: m.PodFeaturedProducts })));
const PodDealBanner = dynamic(() => import('@/features/pod/components/PodDealBanner').then(m => ({ default: m.PodDealBanner })));
const PodNewArrivals = dynamic(() => import('@/features/pod/components/PodNewArrivals').then(m => ({ default: m.PodNewArrivals })));
const PodTrendingSection = dynamic(() => import('@/features/pod/components/PodTrendingSection').then(m => ({ default: m.PodTrendingSection })));
const PodMarquee = dynamic(() => import('@/features/pod/components/PodMarquee').then(m => ({ default: m.PodMarquee })));
const PodBannerList = dynamic(() => import('@/features/pod/components/PodBannerList').then(m => ({ default: m.PodBannerList })));
const TestimonialSection = dynamic(() => import('@/features/home/components/TestimonialSection').then(m => ({ default: m.TestimonialSection })));
const PodInstagram = dynamic(() => import('@/features/pod/components/PodInstagram').then(m => ({ default: m.PodInstagram })));
const PodTrustBadges = dynamic(() => import('@/features/pod/components/PodTrustBadges').then(m => ({ default: m.PodTrustBadges })));

export const metadata: Metadata = {
  title: 'Ambaz — POD Store',
  description: 'Custom print-on-demand gear — personalize apparel, drinkware, bags, and decor made just for you.',
};

export default function PodHomePage() {
  return (
    <div className="pod-home-sections">
      <PodHero />
      <PodTopCategories />
      <PodPromoGrid />
      <PodFeaturedProducts />
      <PodDealBanner />
      <PodNewArrivals />
      <PodTrendingSection />
      <PodMarquee />
      <PodBannerList />
      <div className="pod-home-testimonial">
        <TestimonialSection heading="Customers Feedback" backgroundColor="transparent" sectionPadding="0" />
      </div>
      <PodInstagram />
      <PodTrustBadges />
      <style>{`
        .pod-home-sections {
          padding-bottom: 80px;
        }
        .pod-home-sections > * + * {
          margin-top: 80px;
        }
        @media (max-width: 749px) {
          .pod-home-sections > * + * { margin-top: 56px; }
        }

        /* Testimonial card shadow — see skill/swiper-card-shadow-clip-fix.md
           for the full technique (same values as the Single Product source
           of truth, kept identical across storefronts for consistency). */
        .pod-home-testimonial .ts-card {
          box-shadow:
            0 20px 40px -14px rgba(15, 23, 42, 0.1),
            0 8px 16px -6px rgba(15, 23, 42, 0.06),
            0 -10px 24px -12px rgba(15, 23, 42, 0.07) !important;
        }
        .pod-home-testimonial .swiper {
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
