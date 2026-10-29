import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { MegastoreBlog }      from '@/features/megastore/components/MegastoreBlog';
import { MegastoreTrustGrid } from '@/features/megastore/components/MegastoreTrustGrid';

const ES2Hero                = dynamic(() => import('@/features/electronics-store-2/components/ES2Hero').then(m => ({ default: m.ES2Hero })));
const ES2CategoryCards       = dynamic(() => import('@/features/electronics-store-2/components/ES2CategoryCards').then(m => ({ default: m.ES2CategoryCards })));
const ES2PromoBanners        = dynamic(() => import('@/features/electronics-store-2/components/ES2PromoBanners').then(m => ({ default: m.ES2PromoBanners })));
const ES2TabSection          = dynamic(() => import('@/features/electronics-store-2/components/ES2TabSection').then(m => ({ default: m.ES2TabSection })));
const ES2PromoStrip          = dynamic(() => import('@/features/electronics-store-2/components/ES2PromoStrip').then(m => ({ default: m.ES2PromoStrip })));
const ES2FeaturedCategories  = dynamic(() => import('@/features/electronics-store-2/components/ES2FeaturedCategories').then(m => ({ default: m.ES2FeaturedCategories })));
const ES2CountdownBanner     = dynamic(() => import('@/features/electronics-store-2/components/ES2CountdownBanner').then(m => ({ default: m.ES2CountdownBanner })));
const ES2BestsellingProducts = dynamic(() => import('@/features/electronics-store-2/components/ES2BestsellingProducts').then(m => ({ default: m.ES2BestsellingProducts })));
const ES2BannerCards         = dynamic(() => import('@/features/electronics-store-2/components/ES2BannerCards').then(m => ({ default: m.ES2BannerCards })));
const ES2RecommendedProducts = dynamic(() => import('@/features/electronics-store-2/components/ES2RecommendedProducts').then(m => ({ default: m.ES2RecommendedProducts })));
const ES2BrandLogos          = dynamic(() => import('@/features/electronics-store-2/components/ES2BrandLogos').then(m => ({ default: m.ES2BrandLogos })));


export const metadata: Metadata = {
  title: 'Electronics Store 2 â€” Premium Tech & Gadgets',
  description: 'Discover our premium electronics collection â€” laptops, speakers, headphones, gaming gear, and smart devices. Shop the best tech at unbeatable prices.',
};

export default function ElectronicsStore2HomePage() {
  return (
    <div className="es2-sections">
      <ES2Hero />
      <ES2CategoryCards />
      <ES2PromoBanners />
      <ES2TabSection />
      <ES2PromoStrip />
      <ES2FeaturedCategories />
      <ES2CountdownBanner />
      <ES2BestsellingProducts />
      <ES2BannerCards />
      <ES2RecommendedProducts />
      <ES2BrandLogos />
      <MegastoreBlog />
      <MegastoreTrustGrid />
      <style>{`
        .es2-sections {
          padding-bottom: 80px;
          background: #f5f5f5;
        }
        .es2-sections > * {
          padding-top: 0;
          padding-bottom: 0;
        }
        .es2-sections > * + * {
          margin-top: 80px;
        }
        /* Full-bleed sections that carry their own bg/padding */
        .es2-sections > .es2db-section,
        .es2-sections > .msb-section {
          margin-top: 80px;
        }

        /* â”€â”€ ES2 container: explicit 1530px cap, scoped to this page â”€â”€ */
        .es2-sections .container-main {
          max-width: 1530px;
        }

        /* At 750pxâ€“991px: moderate padding */
        @media (min-width: 750px) and (max-width: 991px) {
          .es2-sections .container-main {
            padding-inline: 2.4rem;
          }
        }

        /* At 992pxâ€“1199px: comfortable padding */
        @media (min-width: 992px) and (max-width: 1199px) {
          .es2-sections .container-main {
            padding-inline: 3rem;
          }
        }

        /* At 1200pxâ€“1529px: generous padding */
        @media (min-width: 1200px) and (max-width: 1529px) {
          .es2-sections .container-main {
            padding-inline: 4rem;
          }
        }

        /* At â‰¥1530px: reduced padding â€” container fills its max-width,
           keep a small gutter so content breathes without wasted space */
        @media (min-width: 1530px) {
          .es2-sections .container-main {
            padding-inline: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
