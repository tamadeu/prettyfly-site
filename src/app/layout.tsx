import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';
import { getHeaderConfig, getFooterConfig, getSiteSettings } from '@/lib/backend';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { CartDrawer } from '@/features/cart/components/CartDrawer';
import { SearchDrawer } from '@/features/search/components/SearchDrawer';
import { QuickViewModal } from '@/features/quickview/components/QuickViewModal';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import { CompareBar } from '@/components/shared/CompareBar';
import { WishlistSync } from '@/components/shared/WishlistSync';
import { PageLoader } from '@/components/shared/PageLoader';
import { NewsletterPopup } from '@/components/shared/NewsletterPopup';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert-sans',
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteName = settings?.title || SITE_NAME;
  const description = settings?.description || SITE_DESCRIPTION;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL),
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description,
    icons: settings?.favicon_url
      ? { icon: settings.favicon_url, shortcut: settings.favicon_url, apple: settings.favicon_url }
      : { icon: '/favicon.ico' },
    openGraph: {
      type: 'website',
      siteName,
      title: siteName,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerConfig, footerConfig] = await Promise.all([getHeaderConfig(), getFooterConfig()]);

  return (
    <html lang="pt-BR" dir="ltr" className={albertSans.variable}>
      <body className="min-h-screen flex flex-col">
        <PageLoader />
        <WishlistSync />
        <Providers>
          <Header config={headerConfig} />
          <main className="flex-1">{children}</main>
          <Footer config={footerConfig} />

          {/* Global overlays */}
          <MobileBottomNav />
          <CartDrawer />
          <SearchDrawer />
          <QuickViewModal />
          <CompareBar />
          <ScrollToTop />
          <NewsletterPopup />
        </Providers>
      </body>
    </html>
  );
}
