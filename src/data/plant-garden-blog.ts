export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const plantGardenBlogPosts: BlogPost[] = [
  {
    id: 'pg-blog-1',
    slug: 'container-gardening-bringing-nature-to-your-balcony-patio',
    title: 'Container Gardening: Bringing Nature to Your Balcony Patio',
    excerpt: 'Discover how to transform any small outdoor space into a lush garden paradise with the right containers, soil mixes, and plant choices that thrive in limited space.',
    image: '/plant-and-garden/blog/blog2.webp',
    date: '2026-05-08',
    author: 'Emma Gardener',
    category: 'Outdoor Living',
  },
  {
    id: 'pg-blog-2',
    slug: 'garden-therapy-how-plants-can-improve-your-wellbeing',
    title: 'Garden Therapy: How Plants Can Improve Your Wellbeing',
    excerpt: 'Science confirms what gardeners have always known — tending to plants is deeply calming and rewarding. Explore the mental health benefits of keeping a home garden.',
    image: '/plant-and-garden/blog/blog3.webp',
    date: '2026-05-05',
    author: 'Sophie Bloom',
    category: 'Wellness',
  },
  {
    id: 'pg-blog-3',
    slug: 'harvesting-happiness-the-benefits-of-a-home-garden',
    title: 'Harvesting Happiness: The Benefits of a Home Garden',
    excerpt: 'From stress relief to healthier food, growing your own garden brings rewards beyond the harvest. Learn how to start your journey toward a greener, happier lifestyle.',
    image: '/plant-and-garden/blog/blog1.webp',
    date: '2026-05-01',
    author: 'Daniel Green',
    category: 'Home & Garden',
  },
];
