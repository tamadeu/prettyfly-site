import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { LipstainHero }              from '@/features/lipstain/components/LipstainHero';
import { LipstainCategoriesSection } from '@/features/lipstain/components/LipstainCategoriesSection';
import { LipstainFeaturedProducts }  from '@/features/lipstain/components/LipstainFeaturedProducts';
import { LipstainPromoBanners }      from '@/features/lipstain/components/LipstainPromoBanners';
import { LipstainVideoBanner }       from '@/features/lipstain/components/LipstainVideoBanner';
import { LipstainBeforeAfter }       from '@/features/lipstain/components/LipstainBeforeAfter';
import { LipstainMarquee }           from '@/features/lipstain/components/LipstainMarquee';
import { LipstainImageWithText }     from '@/features/lipstain/components/LipstainImageWithText';
import { LipstainFeaturedProductSection } from '@/features/lipstain/components/LipstainFeaturedProductSection';
import { LipstainInstagram }         from '@/features/lipstain/components/LipstainInstagram';
import { TestimonialSection }        from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Lipstain — Ambaz',
  description: 'Discover bold, long-wear lip stains and creamy lipsticks in rich, saturated shades. Shop the Ambaz Lipstain collection.',
};

export default function LipstainHomePage() {
  return (
    <HomepageEntrance>
      <div className="ls-home-sections">
        <LipstainHero />
        <LipstainCategoriesSection />
        <LipstainPromoBanners />
        <LipstainFeaturedProducts />
        <LipstainVideoBanner />
        <LipstainFeaturedProductSection />
        <LipstainBeforeAfter />
        <LipstainMarquee />
        <LipstainImageWithText />

        <div className="ls-home-testimonial">
          <TestimonialSection />
        </div>

        <LipstainInstagram />

        <style>{`
          .ls-home-sections {
            padding-bottom: 80px;
          }
          .ls-home-sections > * + * {
            margin-top: 80px;
          }
          /* Hero — flush below header */
          .ls-home-sections > .lsh-hero-section {
            margin-top: 0 !important;
          }
          /* Testimonial re-theme */
          .ls-home-testimonial .ts-section {
            background: #fdf0f3 !important;
          }
          .ls-home-testimonial .ts-card {
            background: #fff !important;
          }
          .ls-home-testimonial .ts-stars {
            color: #c9173c !important;
          }

        `}</style>
      </div>
    </HomepageEntrance>
  );
}
