import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';
import { getHeaderConfig, getFooterConfig } from '@/lib/backend';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { CartDrawer } from '@/features/cart/components/CartDrawer';
import { SearchDrawer } from '@/features/search/components/SearchDrawer';
import { QuickViewModal } from '@/features/quickview/components/QuickViewModal';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import { CompareBar } from '@/components/shared/CompareBar';
import { PageLoader } from '@/components/shared/PageLoader';
import { NewsletterPopup } from '@/components/shared/NewsletterPopup';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

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
