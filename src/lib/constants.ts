export const SITE_NAME = 'Ambaz';
export const SITE_DESCRIPTION = 'Loja online de moda premium — confira as últimas tendências em roupas, acessórios e muito mais.';
export const SITE_URL = 'https://ambaz-nextjs-project.vercel.app';

export const FREE_SHIPPING_THRESHOLD = 150;
export const GIFT_WRAP_PRICE = 10;
export const PRODUCTS_PER_PAGE = 12;
export const MAX_COMPARE_ITEMS = 4;

export const SORT_OPTIONS = [
  { label: 'Em destaque', value: 'featured' },
  { label: 'Mais vendidos', value: 'best-selling' },
  { label: 'Ordem alfabética, A–Z', value: 'name-asc' },
  { label: 'Ordem alfabética, Z–A', value: 'name-desc' },
  { label: 'Preço, do menor para o maior', value: 'price-asc' },
  { label: 'Preço, do maior para o menor', value: 'price-desc' },
  { label: 'Data, da mais antiga para a mais recente', value: 'date-asc' },
  { label: 'Data, da mais recente para a mais antiga', value: 'newest' },
] as const;

export const POPULAR_SEARCHES = ['Camiseta', 'Azul', 'Jaqueta', 'Vestido', 'Shorts'];

export const GROCERY_POPULAR_SEARCHES = ['Frutas', 'Legumes', 'Laticínios', 'Orgânicos', 'Carnes'];

export const PET_FOOD_POPULAR_SEARCHES = ['Ração para cães', 'Ração para gatos', 'Gatos filhotes', 'Filhotes', 'Petiscos'];

export const MEGASTORE_POPULAR_SEARCHES = ['Fones de ouvido', 'Relógio inteligente', 'Notebook', 'Câmera', 'Caixa de som'];

export const PIZZA_POPULAR_SEARCHES = ['Pepperoni', 'Pizza barbecue', 'Margherita', 'Vegetariana', 'Frango'];

export const PLANT_GARDEN_POPULAR_SEARCHES = ['Plantas para ambientes internos', 'Suculentas', 'Vasos', 'Sementes', 'Ferramentas de jardinagem'];

export const SKIN_CARE_POPULAR_SEARCHES = ['Vitamina C', 'Sérum', 'Hidratante', 'Protetor solar', 'Retinol'];

export const JEWELLERY_POPULAR_SEARCHES = ['Anéis', 'Colares', 'Diamantes', 'Ouro', 'Brincos'];

export const PHONE_CASE_POPULAR_SEARCHES = ['Capa para celular', 'Capa de couro', 'Capa fina', 'Capa carteira', 'Capa transparente'];

export const SMART_WATCHES_POPULAR_SEARCHES = ['Relógio inteligente', 'Monitor de atividades', 'Relógio de luxo', 'Relógio digital', 'Relógio esportivo'];

export const FOOTWEAR_POPULAR_SEARCHES = ['Tênis', 'Corrida', 'Botas', 'Mocassins', 'Calçados esportivos'];

export const TRUST_BADGES = [
  { icon: 'truck', title: 'Frete grátis', description: 'Em pedidos acima de US$ 100' },
  { icon: 'refresh', title: 'Devoluções fáceis', description: 'Política de devolução em 30 dias' },
  { icon: 'shield', title: 'Pagamento seguro', description: 'Criptografia SSL' },
  { icon: 'headphones', title: 'Suporte online 24 horas', description: 'Atendimento dedicado' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'TikTok', href: '#', icon: 'tiktok' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'FAQ', href: '/pages/faq' },
    { label: 'Encontre uma loja', href: '/pages/store-location' },
    { label: 'Política de privacidade', href: '/pages/privacy-policy' },
    { label: 'Política de reembolso', href: '/pages/refund-policy' },
    { label: 'Termos de serviço', href: '/pages/terms-of-service' },
  ],
  company: [
    { label: 'Lista de desejos', href: '/wishlist' },
    { label: 'Minha conta', href: '/login' },
    { label: 'Comparar produtos', href: '/compare' },
    { label: 'Carrinho', href: '/cart' },
    { label: 'Sobre nós', href: '/pages/about' },
  ],
} as const;

export const PAYMENT_METHODS = ['visa', 'mastercard', 'amex', 'paypal', 'discover', 'shopify'] as const;
