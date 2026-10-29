import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { PizzaShopHero } from '@/features/pizza-shop/components/PizzaShopHero';
import { PizzaShopTrustBadges } from '@/features/pizza-shop/components/PizzaShopTrustBadges';
import { PizzaShopCategories } from '@/features/pizza-shop/components/PizzaShopCategories';
import { PizzaShopPromoBanners } from '@/features/pizza-shop/components/PizzaShopPromoBanners';
import { PizzaShopProductTabs } from '@/features/pizza-shop/components/PizzaShopProductTabs';
import { PizzaShopDealOfDay } from '@/features/pizza-shop/components/PizzaShopDealOfDay';
import { PizzaShopDealBanners } from '@/features/pizza-shop/components/PizzaShopDealBanners';
import { PizzaShopMenuBoard } from '@/features/pizza-shop/components/PizzaShopMenuBoard';
import { PizzaShopFeaturedCollection } from '@/features/pizza-shop/components/PizzaShopFeaturedCollection';
import { PizzaShopTextMarquee } from '@/features/pizza-shop/components/PizzaShopTextMarquee';
import { PizzaShopInstagram } from '@/features/pizza-shop/components/PizzaShopInstagram';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Pizza Shop — Ambaz',
  description: 'Handcrafted stone-baked pizzas with fresh daily ingredients. Order online for delivery or pickup.',
};

export default function PizzaShopHomePage() {
  return (
    <HomepageEntrance>
      <div className="ps-sections">
        <PizzaShopHero />

        <PizzaShopTrustBadges />

        <PizzaShopCategories />

        <PizzaShopPromoBanners />

        <PizzaShopProductTabs />

        <PizzaShopDealOfDay />

        <PizzaShopDealBanners />

        <PizzaShopMenuBoard />

        <PizzaShopFeaturedCollection />

        <PizzaShopTextMarquee />

        <div className="ps-home-testimonial">
          <TestimonialSection />
        </div>

        <PizzaShopInstagram />

        <style>{`
          .ps-sections {
            padding-top: 0;
            padding-bottom: 80px;
            background: #000000;
          }
          .ps-sections > * + * {
            margin-top: 80px;
          }
          /* Recolor shared TestimonialSection for dark pizza theme */
          .ps-home-testimonial > section {
            background-color: transparent !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          }
          .ps-home-testimonial .ts-card {
            background-color: rgb(20,20,20) !important;
            box-shadow: 0 2px 16px rgba(0,0,0,0.35) !important;
          }
          .ps-home-testimonial h2 {
            color: #fff !important;
          }
          .ps-home-testimonial .ts-card h4 {
            color: #fff !important;
          }
          .ps-home-testimonial .ts-card p {
            color: rgba(255,255,255,0.6) !important;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
