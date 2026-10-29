'use client';

import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/services/api';
import type { SingleProductApiResponse } from '@/types/common';

interface UseProductOptions {
  endpoint?: string;
}

export function useProduct(idOrSlug: string, options: UseProductOptions = {}) {
  const base = options.endpoint ?? '/api/products';
  return useQuery({
    queryKey: [base, idOrSlug],
    queryFn: () => apiFetch<SingleProductApiResponse>(`${base}/${idOrSlug}`),
    enabled: !!idOrSlug,
  });
}
