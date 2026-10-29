import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const SocksHero = dynamic(() => import('@/features/socks/components/SocksHero').then(m => ({ default: m.SocksHero })));
const SocksTrustBadges = dynamic(() => import('@/features/socks/components/SocksTrustBadges').then(m => ({ default: m.SocksTrustBadges })));
const SocksPromoGrid = dynamic(() => import('@/features/socks/components/SocksPromoGrid').then(m => ({ default: m.SocksPromoGrid })));
const SocksTrending = dynamic(() => import('@/features/socks/components/SocksTrending').then(m => ({ default: m.SocksTrending })));
const SocksLimitedOffer = dynamic(() => import('@/features/socks/components/SocksLimitedOffer').then(m => ({ default: m.SocksLimitedOffer })));
const SocksImageWithText = dynamic(() => import('@/features/socks/components/SocksImageWithText').then(m => ({ default: m.SocksImageWithText })));
const SocksMarquee = dynamic(() => import('@/features/socks/components/SocksMarquee').then(m => ({ default: m.SocksMarquee })));
const SocksBannerList = dynamic(() => import('@/features/socks/components/SocksBannerList').then(m => ({ default: m.SocksBannerList })));
const SocksBrandLogos = dynamic(() => import('@/features/socks/components/SocksBrandLogos').then(m => ({ default: m.SocksBrandLogos })));
const TestimonialSection = dynamic(() => import('@/features/home/components/TestimonialSection').then(m => ({ default: m.TestimonialSection })));
const SocksInstagram = dynamic(() => import('@/features/socks/components/SocksInstagram').then(m => ({ default: m.SocksInstagram })));

export const metadata: Metadata = {
  title: 'Ambaz — Socks Store',
  description: 'Perfect socks for every step. Shop cozy, colorful, and everyday socks for the whole family.',
};

export default function SocksHomePage() {
  return (
    <div className="socks-home-sections">
      <SocksHero />
      <SocksTrustBadges />
      <SocksPromoGrid />
      <SocksTrending />
      <SocksLimitedOffer />
      <SocksImageWithText />
      <SocksMarquee />
      <SocksBannerList />
      <SocksBrandLogos />
      <div className="socks-home-testimonial">
        <TestimonialSection backgroundColor="transparent" />
      </div>
      <SocksInstagram />
      <style>{`
        .socks-home-sections {
          padding-bottom: 80px;
        }
        .socks-home-sections > * + * {
          margin-top: 80px;
        }
        @media (max-width: 749px) {
          .socks-home-sections > * + * { margin-top: 56px; }
        }

        /* Testimonial card shadow — see skill/swiper-card-shadow-clip-fix.md
           for the full technique (same values as the Single Product source
           of truth, kept identical across storefronts for consistency).
           Replaces the previous single-layer '0 0 22px' shadow, which had
           no clip-buffer on the Swiper root and was being flush-cut by
           Swiper's own overflow: hidden on every side. */
        .socks-home-testimonial .ts-card {
          box-shadow:
            0 20px 40px -14px rgba(15, 23, 42, 0.1),
            0 8px 16px -6px rgba(15, 23, 42, 0.06),
            0 -10px 24px -12px rgba(15, 23, 42, 0.07) !important;
        }
        .socks-home-testimonial .swiper {
          overflow: hidden !important;
          padding-block: 56px !important;
          margin-block: -56px !important;
          padding-inline: 18px !important;
          margin-inline: -18px !important;
          width: calc(100% + 36px) !important;
        }
      `}</style>
    </div>
  );
}
