import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { CarAccessoriesHero } from '@/features/car-accessories/components/CarAccessoriesHero';
import { CarAccessoriesVehicleSearch as CarAccessoriesAdvancedFilter } from '@/features/car-accessories/components/CarAccessoriesVehicleSearch';
import { CarAccessoriesProducts } from '@/features/car-accessories/components/CarAccessoriesProducts';
import { CarAccessoriesPromoBanners } from '@/features/car-accessories/components/CarAccessoriesPromoBanners';
import { CarAccessoriesDealsOfDay } from '@/features/car-accessories/components/CarAccessoriesDealsOfDay';
import { CarAccessoriesVideoBanner } from '@/features/car-accessories/components/CarAccessoriesVideoBanner';
import { CarAccessoriesBrandMarquee } from '@/features/car-accessories/components/CarAccessoriesBrandMarquee';
import { CarAccessoriesContact } from '@/features/car-accessories/components/CarAccessoriesContact';
import { CarAccessoriesBlog } from '@/features/car-accessories/components/CarAccessoriesBlog';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Car Accessories Shop — Ambaz',
  description: 'Premium auto parts, wheels, and car accessories for every vehicle.',
};

export default function CarAccessoriesHomePage() {
  return (
    <HomepageEntrance>
      <div className="ca-sections">
        <CarAccessoriesHero />
        <CarAccessoriesAdvancedFilter />
        <CarAccessoriesProducts />
        <CarAccessoriesPromoBanners />
        <CarAccessoriesDealsOfDay />
        <CarAccessoriesVideoBanner />
        <CarAccessoriesContact />
        <CarAccessoriesBrandMarquee />

        <div className="ca-home-testimonial">
          <TestimonialSection />
        </div>

        <CarAccessoriesBlog />

        <style>{`
          .ca-sections {
            padding-top: 0;
            padding-bottom: 80px;
          }
          .ca-sections > * + * {
            margin-top: 80px;
          }
          /* Recolor shared TestimonialSection for car accessories theme */
          .ca-home-testimonial {
            --ts-bg: #f5f5f5;
            --ts-heading-color: #111;
          }

        `}</style>
      </div>
    </HomepageEntrance>
  );
}
