import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { PetFoodHero } from '@/features/pet-food/components/PetFoodHero';
import { PetFoodPromoBanners } from '@/features/pet-food/components/PetFoodPromoBanners';
import { PetFoodCategoriesSection } from '@/features/pet-food/components/PetFoodCategoriesSection';
import { PetFoodCountdown } from '@/features/pet-food/components/PetFoodCountdown';
import { PetFoodFeaturedProducts } from '@/features/pet-food/components/PetFoodFeaturedProducts';
import { PetFoodVideoBanner } from '@/features/pet-food/components/PetFoodVideoBanner';
import { PetFoodFeaturedCollection } from '@/features/pet-food/components/PetFoodFeaturedCollection';
import { PetFoodHotspot } from '@/features/pet-food/components/PetFoodHotspot';
import { PetFoodContactSection } from '@/features/pet-food/components/PetFoodContactSection';
import { PetFoodTrustBadges } from '@/features/pet-food/components/PetFoodTrustBadges';
import { PetFoodInstagram } from '@/features/pet-food/components/PetFoodInstagram';
import { PetFoodMarquee } from '@/features/pet-food/components/PetFoodMarquee';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Pet Food Shop — Ambaz',
  description: 'Clean, vet-approved pet food delivered to your door.',
};

export default function PetFoodHomePage() {
  return (
    <HomepageEntrance>
      <div className="pet-food-sections">
        <PetFoodHero />
        <PetFoodPromoBanners />
        <PetFoodCategoriesSection />
        <PetFoodCountdown />
        <PetFoodFeaturedProducts />
        <PetFoodVideoBanner />
        <PetFoodFeaturedCollection />

        <PetFoodMarquee text="LIMITED-TIME PET FOOD DISCOUNTS!" />

        <PetFoodHotspot />
        <PetFoodContactSection />
        <PetFoodTrustBadges />

        <div className="pf-home-testimonial">
          <TestimonialSection />
        </div>

        <PetFoodInstagram />

        <style>{`
          /* Mirror grocery: 80px gap between every homepage section */
          .pet-food-sections {
            padding-top: 40px;
            padding-bottom: 80px;
          }
          .pet-food-sections > * + * {
            margin-top: 80px;
          }

        `}</style>
      </div>
    </HomepageEntrance>
  );
}
