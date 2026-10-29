import type { Metadata } from 'next';
import { ElegantFashionPageWrapper }        from '@/features/elegant-fashion/components/ElegantFashionPageWrapper';
import { ElegantFashionHero }               from '@/features/elegant-fashion/components/ElegantFashionHero';
import { ElegantFashionProductsCollection }  from '@/features/elegant-fashion/components/ElegantFashionProductsCollection';
import { ElegantFashionBestSelling }         from '@/features/elegant-fashion/components/ElegantFashionBestSelling';
import { ElegantFashionPromoBanners }        from '@/features/elegant-fashion/components/ElegantFashionPromoBanners';
import { ElegantFashionMarquee }             from '@/features/elegant-fashion/components/ElegantFashionMarquee';
import { ElegantFashionTabSection }          from '@/features/elegant-fashion/components/ElegantFashionTabSection';
import { ElegantFashionDualBanner }          from '@/features/elegant-fashion/components/ElegantFashionDualBanner';
import { ElegantFashionFeaturedCollection }  from '@/features/elegant-fashion/components/ElegantFashionFeaturedCollection';
import { ElegantFashionTextBanner }          from '@/features/elegant-fashion/components/ElegantFashionTextBanner';
import { ElegantFashionFeaturedProduct }     from '@/features/elegant-fashion/components/ElegantFashionFeaturedProduct';
import { ElegantFashionTrustBadges }         from '@/features/elegant-fashion/components/ElegantFashionTrustBadges';
import { ElegantFashionLookbook }            from '@/features/elegant-fashion/components/ElegantFashionLookbook';
import { ElegantFashionShoppingInfo }        from '@/features/elegant-fashion/components/ElegantFashionShoppingInfo';
import { ElegantFashionInstagram }           from '@/features/elegant-fashion/components/ElegantFashionInstagram';
import { TestimonialSection }                from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Elegant Fashion — Ambaz',
  description: 'Discover timeless elegance with our curated fashion collection — from refined eveningwear and professional attire to chic casual styles for every occasion.',
};

export default function ElegantFashionHomePage() {
  return (
    <ElegantFashionPageWrapper>
      <ElegantFashionProductsCollection />
      <ElegantFashionHero />
      <ElegantFashionBestSelling />
      <ElegantFashionPromoBanners />
      <ElegantFashionMarquee />
      <ElegantFashionTabSection />
      <ElegantFashionFeaturedCollection />
      <ElegantFashionDualBanner />
      <ElegantFashionTextBanner />
      <ElegantFashionFeaturedProduct />
      <ElegantFashionTrustBadges />
      <ElegantFashionLookbook />

      <div className="ef-home-testimonial">
        <TestimonialSection />
      </div>

      <ElegantFashionShoppingInfo />
      <ElegantFashionInstagram />
    </ElegantFashionPageWrapper>
  );
}
