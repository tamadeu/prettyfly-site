import type { Category } from '@/types/category';
import type { ColorOption, Product, ProductImage, ProductVariant } from '@/types/product';

const API_URL = (process.env.API_URL || 'http://127.0.0.1:8002/api/v1').replace(/\/$/, '');
const API_TOKEN = process.env.API_TOKEN || '';
const CURRENCY = process.env.API_CURRENCY || 'BRL';
const REVALIDATE_SECONDS = 60;

interface ApiImage {
  id: number;
  url: string;
  alt: string | null;
  sort_order: number;
}

interface ApiVariant {
  id: number;
  name: string;
  sku: string;
  attributes: { name: string; value: string }[];
  price: string;
  stock: number;
  images: ApiImage[];
}

interface ApiCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  thumbnail_url?: string | null;
  hero_image_url?: string | null;
  products_count?: number;
}

interface ApiProduct {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  category: ApiCategory | null;
  brand?: { id: number; name: string; slug: string } | null;
  images: ApiImage[];
  variants: ApiVariant[];
  created_at: string;
}

interface Paginated<T> {
  data: T[];
  meta: { current_page: number; last_page: number };
}

class BackendError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

async function backendFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      Accept: 'application/json',
      ...(API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {}),
    },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new BackendError(`Backend API error: ${response.status} ${response.statusText} (${path})`, response.status);
  }

  return response.json();
}

async function fetchAllPages<T>(path: string): Promise<T[]> {
  const items: T[] = [];
  let page = 1;
  let lastPage = 1;

  do {
    const separator = path.includes('?') ? '&' : '?';
    const result = await backendFetch<Paginated<T>>(`${path}${separator}page=${page}`);
    items.push(...result.data);
    lastPage = result.meta?.last_page ?? 1;
    page += 1;
  } while (page <= lastPage);

  return items;
}

function mapImages(images: ApiImage[], fallbackAlt: string): ProductImage[] {
  return [...images]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((image) => ({ id: String(image.id), src: image.url, alt: image.alt || fallbackAlt }));
}

function mapProduct(raw: ApiProduct): Product {
  const productImages = mapImages(raw.images ?? [], raw.name);
  const sizeOf = (variant: ApiVariant) =>
    variant.attributes?.find((attribute) => /tamanho|size/i.test(attribute.name))?.value ?? '';

  const variants: ProductVariant[] = (raw.variants ?? []).map((variant) => ({
    id: String(variant.id),
    color: variant.name,
    size: sizeOf(variant),
    price: parseFloat(variant.price),
    compareAtPrice: null,
    image: variant.images?.[0]?.url ?? productImages[0]?.src ?? '',
    available: variant.stock > 0,
    sku: variant.sku,
  }));

  const prices = variants.map((variant) => variant.price).filter((price) => !Number.isNaN(price));
  const colors: ColorOption[] = [];
  variants.forEach((variant) => {
    if (variant.color && !colors.some((color) => color.name === variant.color)) {
      colors.push({ name: variant.color, value: variant.image, type: 'image' });
    }
  });
  const sizes = Array.from(new Set(variants.map((variant) => variant.size).filter(Boolean)));

  const images = productImages;

  const categoryName = raw.category?.name ?? '';

  return {
    id: String(raw.id),
    slug: raw.slug,
    name: raw.name,
    vendor: '',
    price: prices.length ? Math.min(...prices) : 0,
    compareAtPrice: null,
    currency: CURRENCY,
    images,
    variants,
    colors,
    sizes,
    category: categoryName,
    tags: categoryName ? [categoryName] : [],
    brand: raw.brand?.name ?? '',
    availability: variants.some((variant) => variant.available) ? 'in-stock' : 'out-of-stock',
    badge: null,
    description: raw.description ?? '',
    features: [],
    rating: 0,
    reviewCount: 0,
    reviews: [],
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: raw.created_at,
    sku: variants[0]?.sku ?? '',
    countdownEnd: null,
    collections: raw.category ? [raw.category.slug] : [],
  };
}

export async function getProducts(): Promise<Product[]> {
  const raw = await fetchAllPages<ApiProduct>('/products');
  return raw.map(mapProduct);
}

export async function getProduct(idOrSlug: string): Promise<Product | null> {
  try {
    const result = await backendFetch<{ data: ApiProduct }>(`/products/${encodeURIComponent(idOrSlug)}`);
    return mapProduct(result.data);
  } catch (error) {
    if (error instanceof BackendError && error.status === 404) return null;
    throw error;
  }
}

export async function getCategories(): Promise<Category[]> {
  const [rawCategories, products] = await Promise.all([
    fetchAllPages<ApiCategory>('/categories'),
    getProducts(),
  ]);

  return rawCategories.map((category) => ({
    id: String(category.id),
    name: category.name,
    slug: category.slug,
    image: category.thumbnail_url || (products.find((product) => product.category === category.name)?.images[0]?.src ?? ''),
    heroImage: category.hero_image_url ?? '',
    description: category.description ?? '',
    productCount: category.products_count ?? 0,
  }));
}

export interface Collection {
  id: number;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  thumbnail: string;
}

interface ApiCollection {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  hero_image_url: string | null;
  thumbnail_url: string | null;
}

export async function getCollection(slug: string): Promise<Collection | null> {
  try {
    const result = await backendFetch<{ data: ApiCollection }>(`/collections/${encodeURIComponent(slug)}`);
    const c = result.data;
    return {
      id: c.id,
      name: c.name,
      slug: c.slug,
      description: c.description ?? '',
      heroImage: c.hero_image_url ?? '',
      thumbnail: c.thumbnail_url ?? '',
    };
  } catch (error) {
    if (error instanceof BackendError && error.status === 404) return null;
    throw error;
  }
}

export async function getCollectionProducts(slug: string): Promise<Product[]> {
  const raw = await fetchAllPages<ApiProduct>(`/collections/${encodeURIComponent(slug)}/products`);
  return raw.map(mapProduct);
}

export interface CmsSection {
  id: number;
  type: string;
  content: Record<string, unknown>;
}

export interface CmsPage {
  slug: string;
  title: string;
  meta_description: string | null;
  sections: CmsSection[];
}

// Returns null when the page is missing or the CMS is unreachable so callers can fall back to defaults.
export async function getCmsPage(slug: string): Promise<CmsPage | null> {
  try {
    const result = await backendFetch<{ data: CmsPage }>(`/pages/${encodeURIComponent(slug)}`);
    return result.data;
  } catch {
    return null;
  }
}

export interface TopbarConfig {
  enabled: boolean;
  background: string;
  text_color: string;
  autoplay: boolean;
  announcements: string[];
  socials: { network: string; href: string }[];
  show_currency: boolean;
  currencies: string[];
  show_language: boolean;
  languages: string[];
}

export interface HeaderConfig {
  topbar: TopbarConfig | null;
  contact?: { enabled: boolean; label: string; phone: string } | null;
  variant: string;
  logo_url: string | null;
  menu: import('@/types/common').NavigationItem[] | null;
}

export async function getHeaderConfig(): Promise<HeaderConfig | null> {
  try {
    const result = await backendFetch<{ data: HeaderConfig }>('/site/header');
    return result.data;
  } catch {
    return null;
  }
}

export interface FooterConfig {
  background: string;
  about_title: string;
  about_text: string;
  socials: { network: string; href: string }[];
  columns: { title: string; links: { label: string; href: string }[] }[];
  show_newsletter: boolean;
  newsletter_title: string;
  newsletter_text: string;
  newsletter_placeholder: string;
  show_currency: boolean;
  currencies: string[];
  show_language: boolean;
  languages: string[];
  copyright: string;
  show_payments: boolean;
  payment_height?: number;
  payment_images?: { src: string; alt: string }[];
}

export async function getFooterConfig(): Promise<FooterConfig | null> {
  try {
    const result = await backendFetch<{ data: FooterConfig | null }>('/site/footer');
    return result.data;
  } catch {
    return null;
  }
}
