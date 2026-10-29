import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const GlassesHero = dynamic(() => import('@/features/glasses/components/GlassesHero').then(m => ({ default: m.GlassesHero })));
const GlassesPromoGrid = dynamic(() => import('@/features/glasses/components/GlassesPromoGrid').then(m => ({ default: m.GlassesPromoGrid })));
const GlassesTrending = dynamic(() => import('@/features/glasses/components/GlassesTrending').then(m => ({ default: m.GlassesTrending })));
const GlassesLimitedTimeOffer = dynamic(() => import('@/features/glasses/components/GlassesLimitedTimeOffer').then(m => ({ default: m.GlassesLimitedTimeOffer })));
const GlassesTopCategories = dynamic(() => import('@/features/glasses/components/GlassesTopCategories').then(m => ({ default: m.GlassesTopCategories })));
const GlassesMarquee = dynamic(() => import('@/features/glasses/components/GlassesMarquee').then(m => ({ default: m.GlassesMarquee })));
const GlassesBannerList = dynamic(() => import('@/features/glasses/components/GlassesBannerList').then(m => ({ default: m.GlassesBannerList })));
const GlassesTestimonials = dynamic(() => import('@/features/glasses/components/GlassesTestimonials').then(m => ({ default: m.GlassesTestimonials })));
const GlassesInstagram = dynamic(() => import('@/features/glasses/components/GlassesInstagram').then(m => ({ default: m.GlassesInstagram })));
const GlassesTrustBadges = dynamic(() => import('@/features/glasses/components/GlassesTrustBadges').then(m => ({ default: m.GlassesTrustBadges })));

export const metadata: Metadata = {
  title: 'Ambaz — Glasses & Eyewear Store',
  description: 'Fresh looks for every season. Shop premium glasses, sunglasses and optical frames with fast, free shipping.',
};

export default function GlassesHomePage() {
  return (
    <div className="glasses-home-sections">
      <GlassesHero />
      <GlassesPromoGrid />
      <GlassesTrending />
      <GlassesLimitedTimeOffer />
      <GlassesTopCategories />
      <GlassesMarquee />
      <GlassesBannerList />
      <GlassesTestimonials />
      <GlassesInstagram />
      <GlassesTrustBadges />
      <style>{`
        .glasses-home-sections {
          padding-bottom: 80px;
        }
        .glasses-home-sections > * + * {
          margin-top: 80px;
        }
        @media (max-width: 749px) {
          .glasses-home-sections > * + * { margin-top: 56px; }
        }
        /* Promo banners sit full-width, 20px below the hero at every breakpoint */
        .glasses-home-sections > .glpromo-section {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
