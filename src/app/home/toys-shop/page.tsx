import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ToysHero = dynamic(() => import('@/features/toys/components/ToysHero').then(m => ({ default: m.ToysHero })));
const ToysPromoGrid = dynamic(() => import('@/features/toys/components/ToysPromoGrid').then(m => ({ default: m.ToysPromoGrid })));
const ToysTopCategories = dynamic(() => import('@/features/toys/components/ToysTopCategories').then(m => ({ default: m.ToysTopCategories })));
const ToysTrending = dynamic(() => import('@/features/toys/components/ToysTrending').then(m => ({ default: m.ToysTrending })));
const ToysImageBanners = dynamic(() => import('@/features/toys/components/ToysImageBanners').then(m => ({ default: m.ToysImageBanners })));
const ToysDealsProducts = dynamic(() => import('@/features/toys/components/ToysDealsProducts').then(m => ({ default: m.ToysDealsProducts })));
const ToysMarquee = dynamic(() => import('@/features/toys/components/ToysMarquee').then(m => ({ default: m.ToysMarquee })));
const ToysTabSection = dynamic(() => import('@/features/toys/components/ToysTabSection').then(m => ({ default: m.ToysTabSection })));
const ToysBrandLogos = dynamic(() => import('@/features/toys/components/ToysBrandLogos').then(m => ({ default: m.ToysBrandLogos })));
const TestimonialSection = dynamic(() => import('@/features/home/components/TestimonialSection').then(m => ({ default: m.TestimonialSection })));
const ToysNewsletter = dynamic(() => import('@/features/toys/components/ToysNewsletter').then(m => ({ default: m.ToysNewsletter })));
const TrustBadges = dynamic(() => import('@/components/shared/TrustBadges').then(m => ({ default: m.TrustBadges })));

export const metadata: Metadata = {
  title: 'Ambaz — Toys Store',
  description: 'Safe playtime, happy baby. Shop durable, colorful toys for every stage of childhood.',
};

export default function ToysHomePage() {
  return (
    <div className="toys-home-sections">
      <ToysHero />
      <ToysPromoGrid />
      <ToysTopCategories />
      <ToysTrending />
      <ToysImageBanners />
      <ToysDealsProducts />
      <ToysMarquee />
      <ToysTabSection />
      <ToysBrandLogos />
      <div className="toys-home-testimonial">
        <TestimonialSection backgroundColor="transparent" />
      </div>
      <ToysNewsletter />
      <div className="toys-trust">
        <TrustBadges />
      </div>
      <style>{`
        .toys-home-sections {
          padding-bottom: 80px;
        }
        .toys-home-sections > * + * {
          margin-top: 80px;
        }
        @media (max-width: 749px) {
          .toys-home-sections > * + * { margin-top: 56px; }
        }

        /* Testimonial card shadow — see skill/swiper-card-shadow-clip-fix.md
           for the full technique (same values as the Single Product source
           of truth, kept identical across storefronts for consistency). */
        .toys-home-testimonial .ts-card {
          box-shadow:
            0 20px 40px -14px rgba(15, 23, 42, 0.1),
            0 8px 16px -6px rgba(15, 23, 42, 0.06),
            0 -10px 24px -12px rgba(15, 23, 42, 0.07) !important;
        }
        .toys-home-testimonial .swiper {
          overflow: hidden !important;
          padding-block: 56px !important;
          margin-block: -56px !important;
          padding-inline: 18px !important;
          margin-inline: -18px !important;
          width: calc(100% + 36px) !important;
        }

        /* Icon with Text (Trust Badges) — shared component, unmodified,
           same as Backpack/Jewelry-2. Toys' screenshot shows 3 badges (no
           "Secure Payment", the 3rd), so it's scoped-hidden here and the
           grid rebalanced to 3 columns; the shared component itself stays
           untouched for every other storefront. */
        .toys-trust .tb-item:nth-child(3) { display: none; }
        .toys-trust .tb-grid { grid-template-columns: repeat(3, 1fr); }
        /* Fluid instead of a flat 52px so the icon doesn't crowd the text
           column right at the 992px 3-column threshold where there's the
           least room per item. min-width: 0 overrides the grid item's
           default min-width: auto (content's intrinsic size), which is
           the classic cause of a grid/flex item refusing to shrink below
           its content and bleeding out of its column. */
        .toys-trust .tb-icon svg { width: clamp(36px, 5vw, 52px); height: clamp(36px, 5vw, 52px); }
        .toys-trust .tb-item { min-width: 0; }
        .toys-trust .tb-title,
        .toys-trust .tb-desc { overflow-wrap: break-word; word-break: break-word; }
        @media (max-width: 991px) {
          .toys-trust .tb-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 599px) {
          .toys-trust .tb-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
