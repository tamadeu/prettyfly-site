export interface JewelleryBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

export const jewelleryBlogPosts: JewelleryBlogPost[] = [
  {
    id: 'jwb-1',
    title: 'How to Choose the Perfect Engagement Ring: A Complete Guide',
    slug: 'choose-perfect-engagement-ring',
    image: '/jewelry/blog/blog1.webp',
    excerpt: 'An engagement ring is one of the most meaningful purchases you will ever make. Our expert guide walks you through cut, clarity, carat, and metal choices to help you find the ring of her dreams.',
    date: '2025-11-02',
    author: 'Jewellery Curator',
    category: 'Rings',
  },
  {
    id: 'jwb-2',
    title: 'The Art of Layering Necklaces: Styling Tips from Our Jewellers',
    slug: 'layering-necklaces-styling-tips',
    image: '/jewelry/blog/blog2.webp',
    excerpt: 'Layering necklaces is a timeless styling technique that adds depth and personality to any outfit. Our master jewellers share their secrets for mixing lengths, textures, and metals with confidence.',
    date: '2025-10-15',
    author: 'Style Curator',
    category: 'Necklaces',
  },
  {
    id: 'jwb-3',
    title: 'Gold vs Platinum: Which Metal Is Right for Your Jewellery?',
    slug: 'gold-vs-platinum-jewellery',
    image: '/jewelry/blog/blog3.webp',
    excerpt: 'Gold and platinum are both precious metals but they differ in durability, color, and cost. We break down the key differences so you can make an informed choice for your next piece.',
    date: '2025-09-20',
    author: 'Jewellery Curator',
    category: 'Education',
  },
  {
    id: 'jwb-4',
    title: 'Caring for Your Fine Jewellery: Expert Advice',
    slug: 'caring-for-fine-jewellery',
    image: '/jewelry/blog/blog1.webp',
    excerpt: 'Fine jewellery requires gentle care to maintain its lustre and structural integrity. From proper storage to safe cleaning methods, here is everything you need to know to preserve your treasured pieces.',
    date: '2025-08-28',
    author: 'Style Curator',
    category: 'Care',
  },
];
