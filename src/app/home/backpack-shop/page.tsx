import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { BackpackHero } from '@/features/backpack/components/BackpackHero';
import { BackpackCategories } from '@/features/backpack/components/BackpackCategories';
import { BackpackPromoBanners } from '@/features/backpack/components/BackpackPromoBanners';
import { BackpackFeatured } from '@/features/backpack/components/BackpackFeatured';
import { BackpackVideoBanner } from '@/features/backpack/components/BackpackVideoBanner';
import { BackpackDeals } from '@/features/backpack/components/BackpackDeals';
import { BackpackMarquee } from '@/features/backpack/components/BackpackMarquee';
import { BackpackTabContent } from '@/features/backpack/components/BackpackTabContent';
import { BackpackBannerList } from '@/features/backpack/components/BackpackBannerList';
import { BackpackBlog } from '@/features/backpack/components/BackpackBlog';
import { BackpackInstagram } from '@/features/backpack/components/BackpackInstagram';

/* Playfair Display — used for all headings across the Backpack homepage
   (Rule #3). Scoped via a CSS variable + the .bp-home-sections wrapper so the
   global Albert Sans body font is untouched. */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Backpack — Ambaz',
  description: 'Durable, stylish backpacks for every journey — travel, camping, school and everyday packs built to keep up with your adventures.',
};

export default function BackpackHomePage() {
  return (
    <HomepageEntrance>
      <div className={`${playfair.variable} bp-home-sections`}>
        <BackpackHero />
        <BackpackCategories />
        <BackpackPromoBanners />
        <BackpackFeatured />
        <BackpackVideoBanner />
        <BackpackDeals />
        <BackpackMarquee />
        <BackpackTabContent />
        <TestimonialSection />
        <BackpackBannerList />
        <BackpackBlog />
        <BackpackInstagram />
        <div className="bp-trust">
          <TrustBadges />
        </div>

        <style>{`
          .bp-home-sections {
            padding-bottom: 80px;
          }
          .bp-home-sections > * + * {
            margin-top: 80px;
          }

          /* Playfair Display for every heading on the Backpack homepage. */
          .bp-home-sections :is(h1, h2, h3, h4) {
            font-family: var(--font-playfair), 'Playfair Display', serif;
          }

          /* Trust badges: Backpack shows 3 items (no "Secure Payment", the 3rd
             badge) and balances to 3 columns. Scoped to .bp-trust so the shared
             component stays unchanged elsewhere. */
          .bp-trust .tb-item:nth-child(3) { display: none; }
          .bp-trust .tb-grid { grid-template-columns: repeat(3, 1fr); }
          .bp-trust .tb-icon svg { width: 50px; height: 50px; }
          @media (max-width: 991px) {
            .bp-trust .tb-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 599px) {
            .bp-trust .tb-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
