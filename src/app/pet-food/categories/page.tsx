import type { Metadata } from 'next';
import { PetFoodCollectionsPageContent } from '@/features/pet-food/components/PetFoodCollectionsPageContent';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse our pet food categories — cat food, dog food, treats, grooming, and accessories.',
};

export default function PetFoodCategoriesPage() {
  return <PetFoodCollectionsPageContent />;
}
