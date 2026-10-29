import type { Metadata } from 'next';
import { HomepageEntrance } from '@/components/shared/HomepageEntrance';
import { JewelleryHero } from '@/features/jewellery/components/JewelleryHero';
import { JewelleryCategoriesSection } from '@/features/jewellery/components/JewelleryCategoriesSection';
import { JewelleryNewArrivals } from '@/features/jewellery/components/JewelleryNewArrivals';
import { JewelleryDealsPromo } from '@/features/jewellery/components/JewelleryDealsPromo';
import { JewelleryShopTheLook } from '@/features/jewellery/components/JewelleryShopTheLook';
import { JewelleryProductSlider } from '@/features/jewellery/components/JewelleryProductSlider';
import { JewelleryMarquee } from '@/features/jewellery/components/JewelleryMarquee';
import { JewelleryTabSection } from '@/features/jewellery/components/JewelleryTabSection';
import { JewelleryTestimonials } from '@/features/jewellery/components/JewelleryTestimonials';
import { JewelleryBlog } from '@/features/jewellery/components/JewelleryBlog';
import { JewelleryInstagram } from '@/features/jewellery/components/JewelleryInstagram';
import { JewelleryTrustBadges } from '@/features/jewellery/components/JewelleryTrustBadges';

export const metadata: Metadata = {
  title: 'Fine Jewellery Shop — Ambaz',
  description: 'Discover handcrafted fine jewellery — rings, necklaces, earrings, and bracelets made with exceptional materials and artisan precision.',
};

export default function JewelleryHomePage() {
  return (
    <HomepageEntrance>
      <div className="jw-home-sections">
        <JewelleryHero />

        <JewelleryCategoriesSection />
        <JewelleryNewArrivals />
        <JewelleryDealsPromo />
        <JewelleryShopTheLook />
        <JewelleryProductSlider />
        <JewelleryMarquee />
        <JewelleryTabSection />
        <JewelleryTestimonials />
        <JewelleryBlog />
        <JewelleryInstagram />
        <JewelleryTrustBadges />

        <style>{`
          .jw-home-sections {
            padding-bottom: 80px;
          }
          .jw-home-sections > * + * {
            margin-top: 80px;
          }
        `}</style>
      </div>
    </HomepageEntrance>
  );
}
