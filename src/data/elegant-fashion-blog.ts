export interface ElegantFashionBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const elegantFashionBlogPosts: ElegantFashionBlogPost[] = [
  {
    id: 'ef-blog-1',
    title: 'Building a Timeless Capsule Wardrobe for Every Season',
    slug: 'timeless-capsule-wardrobe',
    image: '/elegant-fashion/blog/blog1.webp',
    excerpt: 'A well-curated capsule wardrobe means never having nothing to wear. We show you how to select versatile, quality pieces that work across seasons and occasions with effortless elegance.',
    date: '2025-11-15',
    author: 'Fashion Curator',
  },
  {
    id: 'ef-blog-2',
    title: 'The Art of Dressing for Every Occasion with Confidence',
    slug: 'dressing-for-every-occasion',
    image: '/elegant-fashion/blog/blog2.webp',
    excerpt: 'From boardroom to black-tie, knowing how to dress appropriately yet personally is a skill worth mastering. Our style guide covers dress codes, fit principles, and how to express yourself within any framework.',
    date: '2025-10-26',
    author: 'Style Director',
  },
  {
    id: 'ef-blog-3',
    title: 'Sustainable Luxury: How to Shop Fashion Responsibly',
    slug: 'sustainable-luxury-fashion',
    image: '/elegant-fashion/blog/blog3.webp',
    excerpt: 'Luxury and sustainability can coexist. Discover how to invest in high-quality pieces that last, support ethical brands, and build a wardrobe that is both beautiful and responsible.',
    date: '2025-10-02',
    author: 'Fashion Curator',
  },
  {
    id: 'ef-blog-4',
    title: 'How to Style Knitwear for an Elevated, Polished Look',
    slug: 'style-knitwear-elevated-look',
    image: '/elegant-fashion/blog/blog1.webp',
    excerpt: 'Knitwear is one of fashion\'s most versatile categories. Learn how to elevate a cashmere sweater, a ribbed turtleneck, or a chunky knit cardigan into a truly refined, put-together outfit.',
    date: '2025-09-18',
    author: 'Style Director',
  },
  {
    id: 'ef-blog-5',
    title: 'Accessorising with Intention: Less Is More',
    slug: 'accessorising-with-intention',
    image: '/elegant-fashion/blog/blog2.webp',
    excerpt: 'The right accessories complete an outfit without overwhelming it. From choosing a signature bag to layering delicate jewellery, discover how restraint in accessorising creates lasting elegance.',
    date: '2025-08-25',
    author: 'Fashion Curator',
  },
  {
    id: 'ef-blog-6',
    title: 'Fabric Knowledge: Choosing Quality Materials That Last',
    slug: 'fabric-knowledge-quality-materials',
    image: '/elegant-fashion/blog/blog3.webp',
    excerpt: 'Understanding fabric quality is one of the most valuable skills in fashion. We break down the characteristics of silk, wool, cashmere, and linen so you can invest wisely in pieces that endure.',
    date: '2025-07-30',
    author: 'Style Director',
  },
];
