import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const SWHero             = dynamic(() => import('@/features/smart-watches/components/SWHero').then(m => ({ default: m.SWHero })));
const SWPromoBanners     = dynamic(() => import('@/features/smart-watches/components/SWPromoBanners').then(m => ({ default: m.SWPromoBanners })));
const SWFeaturedProducts = dynamic(() => import('@/features/smart-watches/components/SWFeaturedProducts').then(m => ({ default: m.SWFeaturedProducts })));
const SWDealBanner       = dynamic(() => import('@/features/smart-watches/components/SWDealBanner').then(m => ({ default: m.SWDealBanner })));
const SWCategoriesSection = dynamic(() => import('@/features/smart-watches/components/SWCategoriesSection').then(m => ({ default: m.SWCategoriesSection })));
const SWTabSection       = dynamic(() => import('@/features/smart-watches/components/SWTabSection').then(m => ({ default: m.SWTabSection })));
const SWImageWithText    = dynamic(() => import('@/features/smart-watches/components/SWImageWithText').then(m => ({ default: m.SWImageWithText })));
const SWMarquee          = dynamic(() => import('@/features/smart-watches/components/SWMarquee').then(m => ({ default: m.SWMarquee })));
const SWNewArrivals      = dynamic(() => import('@/features/smart-watches/components/SWNewArrivals').then(m => ({ default: m.SWNewArrivals })));
const SWLookbookBanners  = dynamic(() => import('@/features/smart-watches/components/SWLookbookBanners').then(m => ({ default: m.SWLookbookBanners })));
const SWTestimonials     = dynamic(() => import('@/features/smart-watches/components/SWTestimonials').then(m => ({ default: m.SWTestimonials })));
const SWInstagram        = dynamic(() => import('@/features/smart-watches/components/SWInstagram').then(m => ({ default: m.SWInstagram })));
const PCTrustBadges      = dynamic(() => import('@/features/phone-case/components/PCTrustBadges').then(m => ({ default: m.PCTrustBadges })));

export const metadata: Metadata = {
  title: 'Smart Watches Shop — Premium Timepieces & Wearables',
  description: 'Discover our premium smart watch collection — from luxury timepieces to sports trackers. Shop smart watches, fitness trackers, and digital watches.',
};

export default function SmartWatchesHomePage() {
  return (
    <div className="sw-sections">
      <SWHero />
      <SWPromoBanners />
      <SWFeaturedProducts />
      <SWDealBanner />
      <SWCategoriesSection />
      <SWTabSection />
      <SWImageWithText />
      <SWMarquee />
      <SWNewArrivals />
      <SWLookbookBanners />
      <SWTestimonials />
      <SWInstagram />
      <PCTrustBadges />
      <style>{`
        .sw-sections {
          padding-bottom: 80px;
        }
        .sw-sections > * {
          padding-top: 0;
          padding-bottom: 0;
        }
        .sw-sections > * + * {
          margin-top: 80px;
        }
        .sw-sections > .swdb-section {
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
}
