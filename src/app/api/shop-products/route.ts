import { NextRequest } from 'next/server';
import { getProducts } from '@/lib/backend';
import { handleShopProducts } from '@/lib/shop-products-handler';

export async function GET(request: NextRequest) {
  return handleShopProducts(request, getProducts);
}
