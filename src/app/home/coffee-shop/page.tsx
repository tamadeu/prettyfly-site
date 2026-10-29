import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { CoffeeHero } from '@/features/coffee/components/CoffeeHero';
import { CoffeeCategoriesSection } from '@/features/coffee/components/CoffeeCategoriesSection';
import { CoffeePopularProducts } from '@/features/coffee/components/CoffeePopularProducts';
import { CoffeePromoBanners } from '@/features/coffee/components/CoffeePromoBanners';
import { CoffeeMenuBoard } from '@/features/coffee/components/CoffeeMenuBoard';
import { CoffeeNewArrivals } from '@/features/coffee/components/CoffeeNewArrivals';
import { CoffeeCozyBanner } from '@/features/coffee/components/CoffeeCozyBanner';
import { CoffeeMarquee } from '@/features/coffee/components/CoffeeMarquee';
import { CoffeeContact } from '@/features/coffee/components/CoffeeContact';
import { CoffeeInstagram } from '@/features/coffee/components/CoffeeInstagram';

/* Playfair Display — used for ALL typography across the Coffee homepage
   (Rule #2, per explicit instruction — broader than the headings-only
   Backpack/Jewelry-2 precedent). Scoped via a CSS variable + the
   .cf-home-sections wrapper so the global Albert Sans body font elsewhere
   in the app is untouched. */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coffee — Ambaz',
  description: 'Brewed to boost your every moment — freshly roasted coffee, beans, and brewing gear for your everyday ritual.',
};

export default function CoffeeHomePage() {
  return (
    <HomepageEntrance>
      <div className={`${playfair.variable} cf-home-sections`}>
        <CoffeeHero />
        <div className="cf-trust">
          <TrustBadges />
        </div>
        <CoffeeCategoriesSection />
        <CoffeePopularProducts />
        <CoffeePromoBanners />
        <CoffeeMenuBoard />
        <CoffeeNewArrivals />
        <CoffeeCozyBanner />
        <CoffeeMarquee />
        <CoffeeContact />
        <TestimonialSection />
        <CoffeeInstagram />

        <style>{`
          .cf-home-sections {
            padding-bottom: 80px;
            font-family: var(--font-playfair), serif;
          }
          .cf-home-sections > * + * {
            margin-top: 80px;
          }
          /* Form controls don't inherit font-family from the UA stylesheet by
             default, so Playfair must be applied to them explicitly to cover
             the Contact section's inputs/textarea/button. */
          .cf-home-sections input,
          .cf-home-sections textarea,
          .cf-home-sections button,
          .cf-home-sections select {
            font-family: inherit;
          }

          @media (max-width: 749px) {
            .cf-home-sections {
              padding-bottom: clamp(40px, 8vw, 80px);
            }
            .cf-home-sections > * + * {
              margin-top: clamp(40px, 8vw, 80px);
            }
          }

          /* Trust badges: Coffee shows 3 items (no "Money Guarantee", the 4th
             badge) and balances to 3 equal columns, with larger icons. Scoped
             to .cf-trust so the shared component stays unchanged elsewhere
             (Backpack precedent). 3 columns hold down to the mobile
             breakpoint (no intermediate 2-col step, which would orphan the
             3rd item) then collapse straight to a single stacked column. */
          .cf-trust .tb-item:nth-child(4) { display: none; }
          .cf-trust .tb-grid { grid-template-columns: repeat(3, 1fr); }
          .cf-trust .tb-icon svg { width: 52px; height: 52px; }
          @media (max-width: 749px) {
            .cf-trust .tb-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
