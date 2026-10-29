import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ShopPageContent } from '@/features/shop/components/ShopPageContent';
import { getCollection } from '@/lib/backend';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const collection = await getCollection((await params).slug);
  return collection
    ? { title: collection.name, description: collection.description || undefined }
    : { title: 'Coleção' };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = await getCollection(slug);
  if (!collection) notFound();

  return (
    <Suspense fallback={<div className="container-main py-[4rem] text-center text-[1.6rem] text-body">Loading...</div>}>
      <ShopPageContent
        basePath={`/colecoes/${collection.slug}`}
        apiEndpoint={`/api/colecoes/${collection.slug}/products`}
        title={collection.name}
        subtitle={collection.description}
        breadcrumbLabel={collection.name}
        heroImage={collection.heroImage || undefined}
      />
    </Suspense>
  );
}
