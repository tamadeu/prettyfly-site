import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { Jewelry2Hero } from '@/features/jewelry-2/components/Jewelry2Hero';
import { Jewelry2CategoryGrid } from '@/features/jewelry-2/components/Jewelry2CategoryGrid';
import { Jewelry2NewArrivals } from '@/features/jewelry-2/components/Jewelry2NewArrivals';
import { Jewelry2Marquee } from '@/features/jewelry-2/components/Jewelry2Marquee';
import { Jewelry2FeaturedSplit } from '@/features/jewelry-2/components/Jewelry2FeaturedSplit';
import { Jewelry2ProductSlider } from '@/features/jewelry-2/components/Jewelry2ProductSlider';
import { Jewelry2Lookbook } from '@/features/jewelry-2/components/Jewelry2Lookbook';
import { Jewelry2ImageBanner } from '@/features/jewelry-2/components/Jewelry2ImageBanner';
import { Jewelry2Instagram } from '@/features/jewelry-2/components/Jewelry2Instagram';
import { Jewelry2Newsletter } from '@/features/jewelry-2/components/Jewelry2Newsletter';

/* Playfair Display — used for all headings across the Jewelry 2 homepage
   (brief's Rule #3). Scoped via a CSS variable + the .jz-home-sections
   wrapper so the global Albert Sans body font is untouched (Backpack
   precedent: src/app/home/backpack-shop/page.tsx). */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jewelry 2 — Ambaz',
  description: 'Discover your signature style — handcrafted rings, earrings, pearls and gold-plated jewelry made with exceptional materials and artisan precision.',
};

export default function Jewelry2HomePage() {
  return (
    <HomepageEntrance>
      <div className={`${playfair.variable} jz-home-sections`}>
        <Jewelry2Hero />
        <TrustBadges />
        <Jewelry2CategoryGrid />
        <Jewelry2NewArrivals />
        <Jewelry2Marquee />
        <Jewelry2FeaturedSplit />
        <Jewelry2ProductSlider />
        <Jewelry2Lookbook />
        <Jewelry2ImageBanner />
        <TestimonialSection />
        <Jewelry2Instagram />
        <Jewelry2Newsletter />

        <style>{`
          /* Plain block flow, never flex/grid — section order always follows
             JSX/DOM order (jzlb-section then jz2ib-section) and is never
             affected by breakpoints. No child of this wrapper may set
             \`order\`, negative margins, or position:absolute/fixed at the
             section level — those are the only mechanisms that could make a
             later section render visually above an earlier one. */
          .jz-home-sections {
            display: block;
            padding-bottom: 80px;
          }
          .jz-home-sections > * + * {
            margin-top: 80px;
          }

          /* Playfair Display for every heading on the Jewelry 2 homepage. */
          .jz-home-sections :is(h1, h2, h3, h4) {
            font-family: var(--font-playfair), 'Playfair Display', serif;
          }

          /* Trust badges: screenshot shows 3 items (Free Shipping, Online
             Support, Money Guarantee) — Secure Payment (3rd badge) is
             hidden and the grid balances to 3 columns. Scoped to
             .jz-trust-wrap so the shared component stays unchanged
             elsewhere (Backpack precedent). */
          .jz-home-sections .tb-item:nth-child(3) { display: none; }
          .jz-home-sections .tb-grid { grid-template-columns: repeat(3, 1fr); }
          .jz-home-sections .tb-icon svg { width: 56px; height: 56px; }
          @media (max-width: 991px) {
            .jz-home-sections .tb-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 599px) {
            .jz-home-sections .tb-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
