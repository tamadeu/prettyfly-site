import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { CraftDecoreHero } from '@/features/craft-and-decore/components/CraftDecoreHero';
import { CraftDecoreCategoriesSlider } from '@/features/craft-and-decore/components/CraftDecoreCategoriesSlider';
import { CraftDecorePromoBanners } from '@/features/craft-and-decore/components/CraftDecorePromoBanners';
import { CraftDecoreTrendingProducts } from '@/features/craft-and-decore/components/CraftDecoreTrendingProducts';
import { CraftDecoreCountdownBanner } from '@/features/craft-and-decore/components/CraftDecoreCountdownBanner';
import { CraftDecoreShopTheLook } from '@/features/craft-and-decore/components/CraftDecoreShopTheLook';
import { CraftDecoreNewArrivals } from '@/features/craft-and-decore/components/CraftDecoreNewArrivals';
import { CraftDecoreTabSection } from '@/features/craft-and-decore/components/CraftDecoreTabSection';
import { CraftDecoreMarquee } from '@/features/craft-and-decore/components/CraftDecoreMarquee';
import { CraftDecoreFeaturedCollection } from '@/features/craft-and-decore/components/CraftDecoreFeaturedCollection';
import { CraftDecoreInstagram } from '@/features/craft-and-decore/components/CraftDecoreInstagram';

export const metadata: Metadata = {
  title: 'Craft and Decore — Ambaz',
  description: 'Crafted with love, made by hand — timeless pottery and handcrafted decor for every home.',
};

export default function CraftAndDecoreHomePage() {
  return (
    <HomepageEntrance>
      <div className="cd-home-sections">
        <CraftDecoreHero />
        <CraftDecoreCategoriesSlider />
        <CraftDecorePromoBanners />
        <CraftDecoreTrendingProducts />
        <CraftDecoreCountdownBanner />
        <CraftDecoreShopTheLook />
        <CraftDecoreNewArrivals />
        <CraftDecoreTabSection />
        <CraftDecoreMarquee />
        <CraftDecoreFeaturedCollection />
        <TestimonialSection />
        <CraftDecoreInstagram />
        <div className="cd-trust">
          <TrustBadges />
        </div>

        <style>{`
          .cd-home-sections {
            padding-bottom: 80px;
          }
          .cd-home-sections > * + * {
            margin-top: 80px;
          }
          /* Heading-Font — the project's own design-system token
             (--font-heading, defined in globals.css) already governs every
             h1-h6 site-wide via the global base rule. This explicit
             restatement keeps the intent self-documenting on this homepage
             without introducing a per-storefront font override (unlike
             Coffee/Jewelry-2/Backpack, which load Playfair Display). */
          .cd-home-sections h1,
          .cd-home-sections h2,
          .cd-home-sections h3,
          .cd-home-sections h4 {
            font-family: var(--font-heading);
          }

          @media (max-width: 749px) {
            .cd-home-sections {
              padding-bottom: clamp(40px, 8vw, 80px);
            }
            .cd-home-sections > * + * {
              margin-top: clamp(40px, 8vw, 80px);
            }
          }

          /* Trust badges: Craft and Decore shows 3 items (Free Shipping &
             Return / Online Support / Money Guarantee — "Secure Payment",
             the 3rd default badge, is dropped) matching the screenshot.
             Scoped to .cd-trust so the shared component stays unchanged
             elsewhere (Coffee/Jewelry-2 precedent). */
          .cd-trust .tb-item:nth-child(3) { display: none; }
          .cd-trust .tb-grid { grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 749px) {
            .cd-trust .tb-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
