import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { MegastoreHero } from '@/features/megastore/components/MegastoreHero';
import { MegastoreCategoriesMarquee } from '@/features/megastore/components/MegastoreCategoriesMarquee';
import { MegastoreFeaturedCategories } from '@/features/megastore/components/MegastoreFeaturedCategories';
import { MegastoreFeaturedProducts } from '@/features/megastore/components/MegastoreFeaturedProducts';
import { MegastoreTwinBanners } from '@/features/megastore/components/MegastoreTwinBanners';
import { MegastorePromoBanners } from '@/features/megastore/components/MegastorePromoBanners';
import { MegastoreSliderBanner } from '@/features/megastore/components/MegastoreSliderBanner';
import { MegastoreFeaturedCollection } from '@/features/megastore/components/MegastoreFeaturedCollection';
import { MegastoreVideoBanner } from '@/features/megastore/components/MegastoreVideoBanner';
import { MegastorePopularProducts } from '@/features/megastore/components/MegastorePopularProducts';
import { MegastoreBlog } from '@/features/megastore/components/MegastoreBlog';
import { MegastoreTrustGrid } from '@/features/megastore/components/MegastoreTrustGrid';
import { MegastoreBrandMarquee } from '@/features/megastore/components/MegastoreBrandMarquee';
import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export const metadata: Metadata = {
  title: 'Megastore Shop — Ambaz',
  description: 'Premium electronics — headphones, laptops, smartphones, cameras, smart home and more.',
};

export default function MegastoreHomePage() {
  return (
    <HomepageEntrance>
      <div className="megastore-sections">
        <MegastoreHero />
        <MegastoreCategoriesMarquee />
        <MegastoreFeaturedCategories />
        <MegastoreFeaturedProducts />
        <MegastorePromoBanners />
        <MegastoreSliderBanner />
        <MegastoreTwinBanners />
        <MegastoreFeaturedCollection />
        <MegastoreVideoBanner />
        <MegastorePopularProducts />
        <MegastoreBrandMarquee />
        <div className="megastore-home-testimonial">
          <TestimonialSection />
        </div>
        <MegastoreBlog />
        <MegastoreTrustGrid />

        <style>{`
          .megastore-sections {
            padding-bottom: 80px;
            background-color: #f5f5f5;
          }
          .megastore-sections > * + * {
            margin-top: 80px;
          }
          .megastore-home-testimonial :global(.testimonial-section) {
            background-color: #f5f5f5 !important;
          }
          .megastore-home-testimonial :global(.testimonial-card) {
            border-color: #ececec !important;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
