export interface SneakerBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const sneakerBlogPosts: SneakerBlogPost[] = [
  {
    id: 'sn-blog-1',
    title: 'The Ultimate Guide to Choosing Your Perfect Running Shoe',
    slug: 'choosing-running-shoe',
    image: '/sneaker/blog/blog1.webp',
    excerpt: 'Finding the right running shoe depends on your gait, foot type, and training goals. Our comprehensive guide breaks down everything from cushioning levels to drop height so you can run your best.',
    date: '2025-11-05',
    author: 'Sneaker Lab Team',
  },
  {
    id: 'sn-blog-2',
    title: 'Street Style 2025: How Sneakers Became Fashion Statements',
    slug: 'street-style-sneakers-2025',
    image: '/sneaker/blog/blog2.webp',
    excerpt: 'Sneakers have transcended sport and entered every corner of fashion. From luxury runways to street markets, discover how footwear became the defining accessory of modern style.',
    date: '2025-10-18',
    author: 'Style Correspondent',
  },
  {
    id: 'sn-blog-3',
    title: 'How to Care for Your Premium Sneakers: A Complete Guide',
    slug: 'sneaker-care-guide',
    image: '/sneaker/blog/blog3.webp',
    excerpt: 'Premium sneakers are an investment. Proper cleaning, storage, and maintenance can keep them looking fresh for years. Here are the expert techniques every sneaker enthusiast should know.',
    date: '2025-09-30',
    author: 'Sneaker Lab Team',
  },
  {
    id: 'sn-blog-4',
    title: 'Top 10 Performance Sneakers for Every Type of Runner',
    slug: 'top-10-performance-sneakers',
    image: '/sneaker/blog/blog1.webp',
    excerpt: 'Whether you sprint on the track, grind through trail runs, or log daily miles on pavement, there is a performance sneaker built for you. Here are the top picks for every running style.',
    date: '2025-09-10',
    author: 'Performance Analyst',
  },
  {
    id: 'sn-blog-5',
    title: 'Limited Edition Drops: What Makes a Sneaker Truly Iconic',
    slug: 'limited-edition-drops-iconic',
    image: '/sneaker/blog/blog2.webp',
    excerpt: 'Scarcity, storytelling, and cultural cachet are the ingredients that turn a shoe into a legend. We explore what separates a sought-after limited edition from a forgotten release.',
    date: '2025-08-20',
    author: 'Style Correspondent',
  },
  {
    id: 'sn-blog-6',
    title: 'Trail vs Road: Picking the Right Shoe for Your Terrain',
    slug: 'trail-vs-road-running-shoes',
    image: '/sneaker/blog/blog3.webp',
    excerpt: 'Trail and road running demand very different things from your footwear. Understanding the key differences in outsole, stability, and waterproofing will help you choose the right shoe for your adventure.',
    date: '2025-07-25',
    author: 'Sneaker Lab Team',
  },
];
