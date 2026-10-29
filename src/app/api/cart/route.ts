import { proxyCart } from '@/lib/cart-api-route';

export const dynamic = 'force-dynamic';
export const GET = (request: Request) => proxyCart(request);
export const PUT = (request: Request) => proxyCart(request);
