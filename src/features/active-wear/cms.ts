export type CmsContent = Record<string, any>;

export function text(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim() !== '' ? value : fallback;
}

export function records(value: unknown): CmsContent[] {
  return Array.isArray(value) ? value.filter((v): v is CmsContent => typeof v === 'object' && v !== null) : [];
}

export function strings(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string' && v.trim() !== '') : [];
}

export function number(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : fallback;
}

export function fromIndex<T>(list: T[], index: number): T {
  return list[index % list.length];
}
