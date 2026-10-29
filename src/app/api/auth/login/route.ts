import { handleCustomerAuth } from '@/lib/customer-auth-route';

export const dynamic = 'force-dynamic';

export const POST = (request: Request) => handleCustomerAuth(request, '/login');
