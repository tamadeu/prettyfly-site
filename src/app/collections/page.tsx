import type { Metadata } from 'next';
import { CollectionsPageContent } from '@/features/shop/components/CollectionsPageContent';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Browse our product collections.',
};

export default function CollectionsPage() {
  return <CollectionsPageContent />;
}
