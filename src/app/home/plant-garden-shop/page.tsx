import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { PlantGardenHero } from '@/features/plant-garden/components/PlantGardenHero';
import { PlantGardenCategories } from '@/features/plant-garden/components/PlantGardenCategories';
import { PlantGardenTrendingProducts } from '@/features/plant-garden/components/PlantGardenTrendingProducts';
import { PlantGardenLookbook } from '@/features/plant-garden/components/PlantGardenLookbook';
import { PlantGardenFeaturedCollection } from '@/features/plant-garden/components/PlantGardenFeaturedCollection';
import { PlantGardenTabSection } from '@/features/plant-garden/components/PlantGardenTabSection';
import { PlantGardenTextMarquee } from '@/features/plant-garden/components/PlantGardenTextMarquee';
import { PlantGardenBeforeAfter } from '@/features/plant-garden/components/PlantGardenBeforeAfter';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { PlantGardenBlog } from '@/features/plant-garden/components/PlantGardenBlog';
import { PlantGardenInstagram } from '@/features/plant-garden/components/PlantGardenInstagram';

export const metadata: Metadata = {
  title: 'Plant & Garden Shop — Ambaz',
  description: 'Premium plants, pots, and garden accessories for every space. Transform your home with our curated plant collection.',
};

export default function PlantGardenHomePage() {
  return (
    <HomepageEntrance>
      <div className="pg-sections">
        <PlantGardenHero />

        <PlantGardenCategories />
        <PlantGardenTrendingProducts />
        <PlantGardenLookbook />
        <PlantGardenFeaturedCollection />
        <PlantGardenTabSection />
        <PlantGardenTextMarquee />
        <PlantGardenBeforeAfter />

        <div className="pg-home-testimonial">
          <TestimonialSection />
        </div>

        <PlantGardenBlog />
        <PlantGardenInstagram />

        <style>{`
          .pg-sections {
            padding-bottom: 80px;
          }
          .pg-sections > * + * {
            margin-top: 80px;
          }
          /* Override TestimonialSection for plant-garden light theme */
          .pg-home-testimonial {
            --ts-bg: #f5f7f2;
            --ts-heading-color: #111;
          }

          .pg-home-testimonial > section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
