import type { Metadata } from 'next';
import { ProductDetailContent } from '@/features/products/components/ProductDetailContent';
import { plantGardenProducts } from '@/data/plant-garden-products';


interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = plantGardenProducts.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map((img) => ({ url: img.src })),
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return plantGardenProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function PlantGardenProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData(slug)),
        }}
      />
      <ProductDetailContent
        slug={slug}
        apiEndpoint="/api/plant-garden-products"
        productHrefBase="/plant-garden/product"
        cardVariant="home"
      />
    </>
  );
}

function getStructuredData(slug: string) {
  const product = plantGardenProducts.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map((img) => img.src),
    description: product.description,
    brand: { '@type': 'Brand', name: product.vendor },
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      price: product.price.toFixed(2),
      priceCurrency: product.currency,
      availability: product.availability === 'in-stock'
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
    aggregateRating: product.reviewCount > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
    } : undefined,
  };
}
