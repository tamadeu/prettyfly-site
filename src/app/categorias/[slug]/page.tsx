import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';
import { getCategories } from '@/lib/backend';

export const revalidate = 60;

async function findCategory(slug: string) {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const category = await findCategory((await params).slug);
  return category
    ? { title: category.name, description: category.description || undefined }
    : { title: 'Categoria' };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await findCategory(slug);
  if (!category) notFound();

  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath={`/categorias/${category.slug}`}
        apiEndpoint="/api/shop-products"
        title={category.name}
        subtitle={category.description}
        breadcrumbLabel={category.name}
        lockedCategory={category.name}
        heroImage={category.heroImage || undefined}
      />
    </Suspense>
  );
}
