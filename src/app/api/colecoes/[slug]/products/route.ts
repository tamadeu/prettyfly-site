import { NextRequest } from 'next/server';
import { getCollectionProducts } from '@/lib/backend';
import { handleShopProducts } from '@/lib/shop-products-handler';

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return handleShopProducts(request, () => getCollectionProducts(slug));
}
