import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Cairo } from 'next/font/google';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

/* RTL Demo homepage — an exact section-for-section replica of the Default
   Fashion homepage (same components, same order, same data, same
   animations/interactions), rendered with dir="rtl" and an Arabic-capable
   font (Cairo) applied throughout the page body. Only two things differ from
   src/app/page.tsx: the dir="rtl"/lang="ar" wrapper and the font. Every
   section below is the literal same component Default Fashion uses — no
   forked/rebuilt section components — so layout, sections, animations and
   functionality are identical by construction, not by re-implementation.

   Global overlays (CartDrawer, SearchDrawer, QuickViewModal, CompareBar,
   Footer, MobileBottomNav, ScrollToTop) are mounted in the root layout as
   siblings of this page, not descendants — they do not inherit dir="rtl"
   from this wrapper and keep their existing, fully-functional LTR
   presentation, exactly as they do for every other storefront on the site. */

const HeroSlider = dynamic(() => import('@/features/home/components/HeroSlider').then(m => ({ default: m.HeroSlider })));
const PromotionalGrid = dynamic(() => import('@/features/home/components/PromotionalGrid').then(m => ({ default: m.PromotionalGrid })));
const FeaturedCollection = dynamic(() => import('@/features/home/components/FeaturedCollection').then(m => ({ default: m.FeaturedCollection })));
const LimitedTimeOffer = dynamic(() => import('@/features/home/components/LimitedTimeOffer').then(m => ({ default: m.LimitedTimeOffer })));
const ShopByCategories = dynamic(() => import('@/features/home/components/ShopByCategories').then(m => ({ default: m.ShopByCategories })));
const ShopTheLook = dynamic(() => import('@/features/home/components/ShopTheLook').then(m => ({ default: m.ShopTheLook })));
const FeaturedSlider = dynamic(() => import('@/features/home/components/FeaturedSlider').then(m => ({ default: m.FeaturedSlider })));
const TabContentSection = dynamic(() => import('@/features/home/components/TabContentSection').then(m => ({ default: m.TabContentSection })));
const BannerList = dynamic(() => import('@/features/home/components/BannerList').then(m => ({ default: m.BannerList })));
const TestimonialSection = dynamic(() => import('@/features/home/components/TestimonialSection').then(m => ({ default: m.TestimonialSection })));
const LatestBlog = dynamic(() => import('@/features/home/components/LatestBlog').then(m => ({ default: m.LatestBlog })));
const InstagramFeed = dynamic(() => import('@/features/home/components/InstagramFeed').then(m => ({ default: m.InstagramFeed })));

import { TrustBadges } from '@/components/shared/TrustBadges';

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — RTL Demo`,
  description: SITE_DESCRIPTION,
};

export default function RtlDemoHomePage() {
  return (
    <div dir="rtl" lang="ar" className={`${cairo.variable} rtl-home-sections`}>
      <HeroSlider />
      <PromotionalGrid />
      <FeaturedCollection />
      <LimitedTimeOffer />
      <ShopByCategories />
      <ShopTheLook />
      <FeaturedSlider />
      <TabContentSection />
      <BannerList />
      <div className="fashion-home-testimonial">
        <TestimonialSection />
      </div>
      <LatestBlog />
      <InstagramFeed />
      <TrustBadges />

      <style>{`
        .rtl-home-sections {
          padding-bottom: 80px;
          font-family: var(--font-cairo), sans-serif;
        }
        .rtl-home-sections > * + * {
          margin-top: 80px;
        }
        .rtl-home-sections input,
        .rtl-home-sections textarea,
        .rtl-home-sections button,
        .rtl-home-sections select {
          font-family: inherit;
        }
        /* Headings get an explicit font-family directly from the global
           h1-h6 base rule (globals.css), which overrides inheritance from
           this wrapper regardless of ancestor specificity — so Cairo needs
           to be restated here explicitly, same as every other per-storefront
           heading-font override in this project. */
        .rtl-home-sections h1,
        .rtl-home-sections h2,
        .rtl-home-sections h3,
        .rtl-home-sections h4,
        .rtl-home-sections h5,
        .rtl-home-sections h6 {
          font-family: var(--font-cairo), sans-serif;
        }

        /* RTL layout patches. The reused section components position a
           handful of elements with physical (left/right) offsets rather
           than logical (start/end) ones. The dir=rtl attribute alone
           already correctly mirrors flexbox/grid layouts and text direction
           natively (that covers the vast majority of every reused section),
           but these specific absolute-positioned elements need an explicit
           mirror so they sit on the correct side of their now-reversed
           parent. Scoped to this page only via .rtl-home-sections — the
           shared section components themselves are untouched. */

        /* Hero slider content box: aligned to the right side of the section
           to match RTL reading direction — dir=rtl already resolves
           flex-start to the right edge, so no override is needed here; the
           text and CTA inside are likewise right-aligned via inherited
           direction. Layout, spacing, typography and animations are
           untouched — this is purely a horizontal position. */

        /* Hero slider prev/next arrows: mirror to the RTL-conventional
           side (next → left, prev → right) and mirror their hover
           slide-in direction to match. The icon itself is also swapped
           between the two buttons (rotation moved from prev to next) so
           each arrow still points outward — away from center, in its own
           direction of travel — instead of both pointing inward toward
           each other, which is what a position-only mirror would produce. */
        .rtl-home-sections .hero-nav-prev {
          left: auto;
          right: 40px;
          transform: translateY(-50%) translateX(50px);
        }
        .rtl-home-sections .hero-nav-next {
          right: auto;
          left: 40px;
          transform: translateY(-50%) translateX(-50px) rotate(180deg);
        }
        .rtl-home-sections .hero-slider-section:hover .hero-nav-prev {
          transform: translateY(-50%) translateX(0);
        }
        .rtl-home-sections .hero-slider-section:hover .hero-nav-next {
          transform: translateY(-50%) translateX(0) rotate(180deg);
        }

        /* Product card wishlist/compare/quick-view action column: mirror
           from top-right to top-left. */
        .rtl-home-sections .fc-actions-overlay {
          right: auto !important;
          left: 12px !important;
        }

        /* Countdown Timer (Limited Time Offer) section: the heading column
           mirrors to the right side of the grid via dir=rtl, but its
           physical text-align:left keeps the text hugging the left edge of
           that cell instead of the cell's right edge — nudge it flush right
           to match how it sits flush left in the LTR original. */
        .rtl-home-sections .lto-grid,
        .rtl-home-sections .lto-heading {
          text-align: right;
        }

        /* "Shop now" / "Shop Now" / "Shop Collection" buttons across every
           reused section (Hero Slider's CTA, Limited Time Offer's CTA, the
           big Promotional Grid banner button, and the three ShopNowLink
           instances) all put the icon after the text in DOM order. Under RTL
           that visually moves the icon before the text — pin it explicitly
           so the icon stays trailing (after the text, pointing further into
           the reading-forward direction), the same visual relationship as
           the LTR original, everywhere this button pattern is reused. */
        .rtl-home-sections .hero-slide-cta,
        .rtl-home-sections .lto-cta,
        .rtl-home-sections .promo-btn,
        .rtl-home-sections .shop-now-link {
          flex-direction: row-reverse;
        }

        /* Banner list grid: the grid itself already mirrors correctly via
           inherited direction, but each card's plain-English title/
           description/link has no strong-RTL characters, so the browser's
           bidi algorithm still resolves their paragraph direction from the
           inherited dir=rtl — which drags trailing punctuation to the front
           of the line (e.g. ".Explore sophisticated..."). unicode-bidi:
           plaintext makes each text run resolve its own direction from its
           first strong character instead of inheriting, fixing punctuation
           order while the card itself stays correctly positioned by the
           mirrored grid. */
        .rtl-home-sections .banner-list-grid h3,
        .rtl-home-sections .banner-list-grid p,
        .rtl-home-sections .banner-list-grid a {
          unicode-bidi: plaintext;
        }

        /* Testimonial section: same plain-English-text-inside-dir=rtl bidi
           issue as the banner list — the quote's trailing period drags to
           the front of the line (e.g. ".issue with you further") because
           the paragraph has no strong-RTL characters and inherits paragraph
           direction from the ancestor instead of resolving it from its own
           content. unicode-bidi: plaintext fixes punctuation order on the
           name, role and quote text while textAlign: center (already set
           inline by the component) keeps every line centered in the card
           regardless of direction. */
        .rtl-home-sections .fashion-home-testimonial h4,
        .rtl-home-sections .fashion-home-testimonial p {
          unicode-bidi: plaintext;
        }
      `}</style>
    </div>
  );
}
