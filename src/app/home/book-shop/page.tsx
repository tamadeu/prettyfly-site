import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const BookHero = dynamic(() => import('@/features/book/components/BookHero').then(m => ({ default: m.BookHero })));
const BookCategoryLinks = dynamic(() => import('@/features/book/components/BookCategoryLinks').then(m => ({ default: m.BookCategoryLinks })));
const BookFeatured = dynamic(() => import('@/features/book/components/BookFeatured').then(m => ({ default: m.BookFeatured })));
const BookBanners = dynamic(() => import('@/features/book/components/BookBanners').then(m => ({ default: m.BookBanners })));
const BookBestsellers = dynamic(() => import('@/features/book/components/BookBestsellers').then(m => ({ default: m.BookBestsellers })));
const BookNewArrivalsSale = dynamic(() => import('@/features/book/components/BookNewArrivalsSale').then(m => ({ default: m.BookNewArrivalsSale })));
const BookDeals = dynamic(() => import('@/features/book/components/BookDeals').then(m => ({ default: m.BookDeals })));
const BookVideoBanner = dynamic(() => import('@/features/book/components/BookVideoBanner').then(m => ({ default: m.BookVideoBanner })));
const BookTabColumns = dynamic(() => import('@/features/book/components/BookTabColumns').then(m => ({ default: m.BookTabColumns })));
const BookTrustBadges = dynamic(() => import('@/features/book/components/BookTrustBadges').then(m => ({ default: m.BookTrustBadges })));
const BookNewsletter = dynamic(() => import('@/features/book/components/BookNewsletter').then(m => ({ default: m.BookNewsletter })));
const BookLatestBlog = dynamic(() => import('@/features/book/components/BookLatestBlog').then(m => ({ default: m.BookLatestBlog })));
const BookInstagram = dynamic(() => import('@/features/book/components/BookInstagram').then(m => ({ default: m.BookInstagram })));

export const metadata: Metadata = {
  title: 'Ambaz — Book Store',
  description: 'Discover bestsellers, new arrivals and timeless classics. Shop premium books across every genre with fast, free shipping.',
};

export default function BookHomePage() {
  return (
    <div className="bk-home-sections">
      <BookHero />
      <BookCategoryLinks />
      <BookFeatured />
      <BookBanners />
      <BookBestsellers />
      <BookNewArrivalsSale />
      <BookDeals />
      <BookVideoBanner />
      <BookTabColumns />
      <BookTrustBadges />
      <BookNewsletter />
      <BookLatestBlog />
      <BookInstagram />

      <style>{`
        .bk-home-sections {
          padding-bottom: 80px;
        }
        .bk-home-sections > * + * {
          margin-top: 72px;
        }
        /* Category-link cards sit close under the hero */
        .bk-home-sections > section:nth-child(2) {
          margin-top: 44px;
        }
        @media (max-width: 749px) {
          .bk-home-sections > * + * { margin-top: 52px; }
        }
      `}</style>
    </div>
  );
}
