import type { Metadata } from 'next';
import { MegastoreCollectionsPageContent } from '@/features/megastore/components/MegastoreCollectionsPageContent';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse our electronics categories — phones, laptops, headphones, cameras, speakers and more.',
};

export default function MegastoreCategoriesPage() {
  return <MegastoreCollectionsPageContent />;
}
