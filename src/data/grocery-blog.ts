export interface GroceryBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const groceryBlogPosts: GroceryBlogPost[] = [
  {
    id: 'gb-1',
    title: 'Grocery store is to provide customers with range food',
    slug: 'grocery-store-range-food',
    image: '/grocery-shop/blog/blog1.webp',
    excerpt: 'Discover how modern grocery stores curate a diverse range of fresh and packaged foods to meet every household need, from daily staples to specialty ingredients.',
    date: '2025-11-10',
    author: 'Fresh Market Team',
  },
  {
    id: 'gb-2',
    title: 'Healthy fresh vegetables are nutrient-rich Fresh foods',
    slug: 'healthy-fresh-vegetables',
    image: '/grocery-shop/blog/blog2.webp',
    excerpt: 'Fresh vegetables are powerhouses of vitamins, minerals, and fiber. Learn which vegetables offer the most nutritional value and how to store them for maximum freshness.',
    date: '2025-10-22',
    author: 'Nutrition Expert',
  },
  {
    id: 'gb-3',
    title: 'Fresh vegetables are versatile and can be eaten raw, steamed',
    slug: 'fresh-vegetables-versatile',
    image: '/grocery-shop/blog/blog3.webp',
    excerpt: 'From crisp salads to hearty stews, fresh vegetables can be prepared in dozens of ways. Explore cooking techniques that preserve their flavor and nutritional content.',
    date: '2025-09-15',
    author: 'Chef Markus',
  },
  {
    id: 'gb-4',
    title: 'Seasonal produce every home cook should have on the shelf',
    slug: 'seasonal-produce-home-cook',
    image: '/grocery-shop/blog/blog1.webp',
    excerpt: 'Eating seasonally means better flavor, lower prices, and reduced environmental impact. Here are the must-have seasonal ingredients for every kitchen throughout the year.',
    date: '2025-08-30',
    author: 'Fresh Market Team',
  },
  {
    id: 'gb-5',
    title: 'How to pick the best organic fruits for your weekly haul',
    slug: 'best-organic-fruits-weekly-haul',
    image: '/grocery-shop/blog/blog2.webp',
    excerpt: 'Organic fruits are free from synthetic pesticides and often more nutrient-dense. Our guide helps you identify quality organic produce and get the most value from your grocery run.',
    date: '2025-08-05',
    author: 'Organic Specialist',
  },
  {
    id: 'gb-6',
    title: 'Farm-to-table pantry essentials you need this season',
    slug: 'farm-to-table-pantry-essentials',
    image: '/grocery-shop/blog/blog3.webp',
    excerpt: 'Stock your pantry with locally sourced, farm-fresh essentials that bring seasonal flavors to every meal. From artisan grains to small-batch preserves, here is your seasonal shopping list.',
    date: '2025-07-18',
    author: 'Fresh Market Team',
  },
];
