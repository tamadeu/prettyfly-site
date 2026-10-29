import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { HeadphonesHero }              from '@/features/headphones/components/HeadphonesHero';
import { HeadphonesCategoriesSection } from '@/features/headphones/components/HeadphonesCategoriesSection';
import { HeadphonesPromoBanners }      from '@/features/headphones/components/HeadphonesPromoBanners';
import { HeadphonesFeaturedCollection } from '@/features/headphones/components/HeadphonesFeaturedCollection';
import { HeadphonesVideoBanner }       from '@/features/headphones/components/HeadphonesVideoBanner';
import { HeadphonesNewArrivals }       from '@/features/headphones/components/HeadphonesNewArrivals';
import { HeadphonesCountdown }         from '@/features/headphones/components/HeadphonesCountdown';
import { HeadphonesShopTheLook }       from '@/features/headphones/components/HeadphonesShopTheLook';
import { HeadphonesMarquee }           from '@/features/headphones/components/HeadphonesMarquee';
import { HeadphonesBeforeAfter }       from '@/features/headphones/components/HeadphonesBeforeAfter';
import { HeadphonesInstagram }         from '@/features/headphones/components/HeadphonesInstagram';
import { TestimonialSection }          from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Headphones Shop — Ambaz',
  description: 'Discover premium headphones, earphones, and audio gear — immersive sound, all-day comfort, delivered to your door.',
};

export default function HeadphonesHomePage() {
  return (
    <HomepageEntrance>
      <div className="hp-home-sections">
        <HeadphonesHero />

        <HeadphonesCategoriesSection />
        <HeadphonesPromoBanners />
        <HeadphonesFeaturedCollection />
        <HeadphonesVideoBanner />
        <HeadphonesNewArrivals />
        <HeadphonesCountdown />
        <HeadphonesShopTheLook />
        <HeadphonesMarquee />
        <HeadphonesBeforeAfter />

        <div className="hp-home-testimonial">
          <TestimonialSection />
        </div>

        <HeadphonesInstagram />

        <style>{`
          .hp-home-sections {
            padding-bottom: 80px;
          }
          .hp-home-sections > * + * {
            margin-top: 80px;
          }

        `}</style>
      </div>
    </HomepageEntrance>
  );
}
