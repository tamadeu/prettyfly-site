import type { Metadata } from 'next';
import { SWCollectionsPageContent } from '@/features/smart-watches/components/SWCollectionsPageContent';

export const metadata: Metadata = {
  title: 'Categories — Smart Watches',
  description: 'Browse our smart watch categories — smart watches, luxury watches, digital watches, and sports watches.',
};

export default function SmartWatchesCategoriesPage() {
  return <SWCollectionsPageContent />;
}
