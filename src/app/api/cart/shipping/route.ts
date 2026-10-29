import { proxyCart } from '@/lib/cart-api-route';
export const POST = (request: Request) => proxyCart(request, '/shipping');
