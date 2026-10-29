export interface ApiResult<T = unknown> {
  ok: boolean;
  status: number;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export async function api<T = unknown>(url: string, method = 'GET', body?: unknown): Promise<ApiResult<T>> {
  try {
    const response = await fetch(url, {
      method,
      headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    if (response.status === 204) return { ok: true, status: 204 };
    const json = await response.json().catch(() => ({}));
    if (response.status === 429) return { ok: false, status: 429, message: 'Muitas tentativas. Aguarde um minuto.' };
    return { ok: response.ok, status: response.status, data: json.data, message: json.message, errors: json.errors };
  } catch {
    return { ok: false, status: 0, message: 'Sem conexão. Tente novamente.' };
  }
}

export function firstError(result: ApiResult): string {
  const first = result.errors ? Object.values(result.errors)[0]?.[0] : undefined;
  return first ?? result.message ?? 'Não foi possível concluir.';
}
