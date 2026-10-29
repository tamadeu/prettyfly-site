import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { SneakerHero }               from '@/features/sneaker/components/SneakerHero';
import { SneakerCategoriesSection }   from '@/features/sneaker/components/SneakerCategoriesSection';
import { SneakerFeaturedProducts }    from '@/features/sneaker/components/SneakerFeaturedProducts';
import { SneakerTabContentSection }   from '@/features/sneaker/components/SneakerTabContentSection';
import { SneakerShopTheLook }         from '@/features/sneaker/components/SneakerShopTheLook';
import { SneakerPromoBanners }        from '@/features/sneaker/components/SneakerPromoBanners';
import { SneakerMarquee }             from '@/features/sneaker/components/SneakerMarquee';
import { SneakerBlog }                from '@/features/sneaker/components/SneakerBlog';
import { SneakerInstagram }           from '@/features/sneaker/components/SneakerInstagram';
import { SneakerTrustBadges }         from '@/features/sneaker/components/SneakerTrustBadges';
import { TestimonialSection }         from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Sneaker Shop — Ambaz',
  description: 'Step into style with our curated sneaker collection — premium running shoes, street classics, and limited-edition drops delivered to your door.',
};

export default function SneakerHomePage() {
  return (
    <HomepageEntrance>
      <div className="sn-home-sections">
        <SneakerHero />

        <SneakerCategoriesSection />
        <SneakerFeaturedProducts />
        <SneakerTabContentSection />
        <SneakerShopTheLook />
        <SneakerPromoBanners />
        <SneakerMarquee />

        <div className="sn-home-testimonial">
          <TestimonialSection />
        </div>

        <SneakerBlog />
        <SneakerInstagram />
        <SneakerTrustBadges />

        <style>{`
          .sn-home-sections {
            padding-bottom: 80px;
          }
          .sn-home-sections > * + * {
            margin-top: 80px;
          }

          .sn-home-testimonial > section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
