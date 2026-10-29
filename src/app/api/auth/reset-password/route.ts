import { proxyCustomerPost } from '@/lib/customer-auth-route';

export const dynamic = 'force-dynamic';

export const POST = (request: Request) => proxyCustomerPost(request, '/reset-password');
