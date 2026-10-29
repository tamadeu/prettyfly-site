import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PCHero               = dynamic(() => import('@/features/phone-case/components/PCHero').then(m => ({ default: m.PCHero })));
const PCCategoriesSection  = dynamic(() => import('@/features/phone-case/components/PCCategoriesSection').then(m => ({ default: m.PCCategoriesSection })));
const PCPromoBanners       = dynamic(() => import('@/features/phone-case/components/PCPromoBanners').then(m => ({ default: m.PCPromoBanners })));
const PCFeaturedCollection = dynamic(() => import('@/features/phone-case/components/PCFeaturedCollection').then(m => ({ default: m.PCFeaturedCollection })));
const PCWeekendDeal        = dynamic(() => import('@/features/phone-case/components/PCWeekendDeal').then(m => ({ default: m.PCWeekendDeal })));
const PCNewArrivals        = dynamic(() => import('@/features/phone-case/components/PCNewArrivals').then(m => ({ default: m.PCNewArrivals })));
const PCTabSection         = dynamic(() => import('@/features/phone-case/components/PCTabSection').then(m => ({ default: m.PCTabSection })));
const PCTrustBadges        = dynamic(() => import('@/features/phone-case/components/PCTrustBadges').then(m => ({ default: m.PCTrustBadges })));
const PCBeforeAfter        = dynamic(() => import('@/features/phone-case/components/PCBeforeAfter').then(m => ({ default: m.PCBeforeAfter })));
const PCTestimonials       = dynamic(() => import('@/features/phone-case/components/PCTestimonials').then(m => ({ default: m.PCTestimonials })));
const PCInstagram          = dynamic(() => import('@/features/phone-case/components/PCInstagram').then(m => ({ default: m.PCInstagram })));

export const metadata: Metadata = {
  title: 'Phone Case Shop — Premium Protection, Stylish Design',
  description: 'Discover our premium phone case collection — military-grade protection meets stunning design. Shop phone cases, leather cases, slim cases, and wallet cases.',
};

export default function PhoneCaseHomePage() {
  return (
    <div className="pc-sections">
      <PCHero />
      <PCCategoriesSection />
      <PCPromoBanners />
      <PCFeaturedCollection />
      <PCWeekendDeal />
      <PCNewArrivals />
      <PCTabSection />
      <PCTrustBadges />
      <PCBeforeAfter />
      <PCTestimonials />
      <PCInstagram />
      <style>{`
        .pc-sections {
          padding-bottom: 80px;
        }
        .pc-sections > * {
          padding-top: 0;
          padding-bottom: 0;
        }
        .pc-sections > * + * {
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
}
