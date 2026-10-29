export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface FilterCounts {
  name: string;
  count: number;
}

export interface FiltersData {
  categories: FilterCounts[];
  brands: FilterCounts[];
  colors: FilterCounts[];
  sizes: FilterCounts[];
  priceRange: { min: number; max: number };
}

export interface ProductsApiResponse {
  products: import('./product').Product[];
  pagination: Pagination;
  filters: FiltersData;
}

export interface SingleProductApiResponse {
  product: import('./product').Product;
}

export interface SearchApiResponse {
  products: import('./product').Product[];
  suggestions: string[];
}

export interface CategoriesApiResponse {
  categories: import('./category').Category[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  type: 'link' | 'dropdown' | 'megamenu';
  children?: NavigationChild[];
  megaMenu?: MegaMenuColumn[];
  megaImage?: {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
  };
  megaProductSlider?: boolean;
  megaCategoryCards?: MegaCategoryCard[];
}

export interface MegaCategoryCard {
  id: string;
  label: string;
  itemCount?: number;
  image: string;
  href: string;
}

export interface NavigationChild {
  id: string;
  label: string;
  href: string;
  comingSoon?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  links: NavigationChild[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  buttonText: string;
}
