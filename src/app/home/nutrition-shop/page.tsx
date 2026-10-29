import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { NutritionHero } from '@/features/nutrition/components/NutritionHero';
import { NutritionShopByCollection } from '@/features/nutrition/components/NutritionShopByCollection';
import { NutritionPromoGrid } from '@/features/nutrition/components/NutritionPromoGrid';
import { NutritionTrendingProducts } from '@/features/nutrition/components/NutritionTrendingProducts';
import { NutritionDealOfTheDay } from '@/features/nutrition/components/NutritionDealOfTheDay';
import { NutritionBeautifullyFunctional } from '@/features/nutrition/components/NutritionBeautifullyFunctional';
import { NutritionFeaturedCollection } from '@/features/nutrition/components/NutritionFeaturedCollection';
import { NutritionMarquee } from '@/features/nutrition/components/NutritionMarquee';
import { NutritionBlog } from '@/features/nutrition/components/NutritionBlog';
import { NutritionInstagram } from '@/features/nutrition/components/NutritionInstagram';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Nutrition Shop — Ambaz',
  description: 'Clean, performance-tested supplements and nutrition for every training day.',
};

export default function NutritionHomePage() {
  return (
    <HomepageEntrance>
      <div className="nutrition-sections">
        <NutritionHero />
        <NutritionShopByCollection />
        <NutritionPromoGrid />
        <NutritionTrendingProducts />
        <NutritionDealOfTheDay />
        <NutritionBeautifullyFunctional />
        <NutritionFeaturedCollection />
        <NutritionMarquee text="LIMITED-TIME NUTRITION DISCOUNTS!" />

        <div className="nutrition-home-testimonial">
          <TestimonialSection />
        </div>

        <NutritionBlog />
        <NutritionInstagram />

        <style>{`
        /* 80px gap between every homepage section (mirrors grocery / pet-food) */
        .nutrition-sections {
          padding-bottom: 80px;
        }
        .nutrition-sections > * + * {
          margin-top: 80px;
        }
        /* ── Nutrition Testimonial theme: black background, white text ── */
        .nutrition-home-testimonial > section {
          background-color: #000 !important;
        }
        .nutrition-home-testimonial h2 {
          color: #fff !important;
        }
        .nutrition-home-testimonial .ts-card {
          background-color: #0a0a0a !important;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.6) !important;
          border: 1px solid #1a1a1a;
        }
        .nutrition-home-testimonial .ts-card h4 {
          color: #fff !important;
        }
        .nutrition-home-testimonial .ts-card p {
          color: #cfcfcf !important;
        }
        /* Role line (second <p>) stays a cooler muted gray */
        .nutrition-home-testimonial .ts-card p:nth-of-type(1) {
          color: #9a9a9a !important;
        }
        /* Avatar ring switches from light cream to subtle dark ring */
        .nutrition-home-testimonial .ts-card > div:first-of-type {
          border-color: #2a2a2a !important;
          background-color: #1a1a1a !important;
        }
        /* Chat quote icon — lighten against the dark card */
        .nutrition-home-testimonial .ts-card svg path {
          fill: #fff;
        }
        /* Pagination dots → white accent against black */
        .nutrition-home-testimonial button[aria-label^="Page"] {
          border-color: #555 !important;
        }
      `}</style>
      </div>
    </HomepageEntrance>
  );
}
