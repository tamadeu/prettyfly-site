import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Marquee } from '@/components/shared/Marquee';
import { TrustBadges } from '@/components/shared/TrustBadges';

const BFHero            = dynamic(() => import('@/features/boutique-fashion/components/BFHero').then(m => ({ default: m.BFHero })));
const BFPromoBanners    = dynamic(() => import('@/features/boutique-fashion/components/BFPromoBanners').then(m => ({ default: m.BFPromoBanners })));
const BFFeaturedProducts = dynamic(() => import('@/features/boutique-fashion/components/BFFeaturedProducts').then(m => ({ default: m.BFFeaturedProducts })));
const BFDealOfTheDay    = dynamic(() => import('@/features/boutique-fashion/components/BFDealOfTheDay').then(m => ({ default: m.BFDealOfTheDay })));
const BFShopTheLook     = dynamic(() => import('@/features/boutique-fashion/components/BFShopTheLook').then(m => ({ default: m.BFShopTheLook })));
const BFBannerList      = dynamic(() => import('@/features/boutique-fashion/components/BFBannerList').then(m => ({ default: m.BFBannerList })));
const BFBrandLogos      = dynamic(() => import('@/features/boutique-fashion/components/BFBrandLogos').then(m => ({ default: m.BFBrandLogos })));
const BFInstagram       = dynamic(() => import('@/features/boutique-fashion/components/BFInstagram').then(m => ({ default: m.BFInstagram })));

export const metadata: Metadata = {
  title: 'Boutique Fashion — Premium Style Store',
  description: 'Discover curated boutique fashion — timeless pieces, premium fabrics, and effortless style for every occasion.',
};

export default function BoutiqueFashionHomePage() {
  return (
    <div className="bf-sections">
      <BFHero />
      <BFPromoBanners />
      <BFFeaturedProducts />
      <BFDealOfTheDay />
      <BFShopTheLook />
      <Marquee text="GREAT-FREE RETURNS PRODUCT WITHIN 10 DAYS" />
      <BFBannerList />
      <BFBrandLogos />
      <BFInstagram />
      <TrustBadges />
      <style>{`
        .bf-sections {
          padding-bottom: 80px;
        }
        .bf-sections > * + * {
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
}
