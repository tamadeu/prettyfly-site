import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';
import { ActiveWearTrustBadges } from '@/features/active-wear/components/ActiveWearTrustBadges';
import { ActiveWearHero } from '@/features/active-wear/components/ActiveWearHero';
import { ActiveWearExploreCategories } from '@/features/active-wear/components/ActiveWearExploreCategories';
import { ActiveWearPromoGrid } from '@/features/active-wear/components/ActiveWearPromoGrid';
import { ActiveWearNewArrivals } from '@/features/active-wear/components/ActiveWearNewArrivals';
import { ActiveWearCountdown } from '@/features/active-wear/components/ActiveWearCountdown';
import { ActiveWearTabContent } from '@/features/active-wear/components/ActiveWearTabContent';
import { ActiveWearVideoBanner } from '@/features/active-wear/components/ActiveWearVideoBanner';
import { ActiveWearShopTheLook } from '@/features/active-wear/components/ActiveWearShopTheLook';
import { ActiveWearInstagram } from '@/features/active-wear/components/ActiveWearInstagram';
import { records, text, type CmsContent } from '@/features/active-wear/cms';
import { getCmsPage, getSiteSettings, type CmsSection } from '@/lib/backend';
import type { Testimonial } from '@/types/common';

const DEFAULT_TITLE = 'Moda esportiva — Ambaz';
const DEFAULT_DESCRIPTION =
  'Eleve o nível dos seus treinos com roupas esportivas de alto desempenho: tops, leggings, calças jogger e peças essenciais para yoga, feitas para acompanhar seus movimentos.';

// Order used when the CMS page is unavailable.
const FALLBACK_SECTIONS: CmsSection[] = [
  'hero',
  'explore_categories',
  'promo_grid',
  'new_arrivals',
  'countdown',
  'tab_content',
  'testimonials',
  'video_banner',
  'shop_the_look',
  'instagram',
  'trust_badges',
].map((type, index) => ({ id: index, type, content: {} }));

const RENDERERS: Record<string, (content: CmsContent) => ReactNode> = {
  hero: (c) => <ActiveWearHero content={c} />,
  explore_categories: (c) => <ActiveWearExploreCategories content={c} />,
  promo_grid: (c) => <ActiveWearPromoGrid content={c} />,
  new_arrivals: (c) => <ActiveWearNewArrivals content={c} />,
  countdown: (c) => <ActiveWearCountdown content={c} />,
  tab_content: (c) => <ActiveWearTabContent content={c} />,
  testimonials: (c) => {
    const items: Testimonial[] = records(c.items).map((t, i) => ({
      id: `cms-${i}`,
      name: text(t.name, ''),
      role: text(t.role, ''),
      text: text(t.text, ''),
      rating: typeof t.rating === 'number' ? Math.min(5, Math.max(1, t.rating)) : 5,
      avatar: text(t.image, '/fashion/testimonials/testimonials1.webp'),
    }));
    return <TestimonialSection heading={text(c.title, 'Depoimentos')} items={items} backgroundColor="transparent" sectionPadding="0" />;
  },
  video_banner: (c) => <ActiveWearVideoBanner content={c} />,
  shop_the_look: (c) => <ActiveWearShopTheLook content={c} />,
  instagram: (c) => <ActiveWearInstagram content={c} />,
  trust_badges: (c) => <ActiveWearTrustBadges content={c} />,
};

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getCmsPage('home'), getSiteSettings()]);

  return {
    title: settings?.title || page?.title || DEFAULT_TITLE,
    description: page?.meta_description || settings?.description || DEFAULT_DESCRIPTION,
  };
}

export default async function HomePage() {
  const page = await getCmsPage('home');
  const sections = page?.sections ?? FALLBACK_SECTIONS;

  return (
    <HomepageEntrance>
      <div className="aw-home-sections">
        {sections.map((section) => {
          const render = RENDERERS[section.type];
          return render ? <div key={section.id}>{render(section.content ?? {})}</div> : null;
        })}

        <style>{`
          .aw-home-sections {
            padding-bottom: 80px;
          }
          .aw-home-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
