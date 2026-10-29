export interface MegastoreBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const megastoreBlogPosts: MegastoreBlogPost[] = [
  { id: 'msb-1', title: 'Top wireless headphones for clear, immersive everyday audio', slug: 'top-wireless-headphones-everyday-audio', image: '/megastore/blog/blog1.webp', excerpt: 'Discover the best wireless headphones that deliver crystal-clear audio for your daily commute, workouts, and work-from-home sessions.', date: '2026-01-12', author: 'Ambaz Team' },
  { id: 'msb-2', title: 'Smartphone trends shaping how we work and stay connected', slug: 'smartphone-trends-shaping-2026', image: '/megastore/blog/blog2.webp', excerpt: 'From foldable displays to AI-assisted cameras, these are the smartphone innovations defining how we live and work in 2026.', date: '2026-02-05', author: 'Ambaz Team' },
  { id: 'msb-3', title: 'Building a productive home office with the right gear', slug: 'productive-home-office-right-gear', image: '/megastore/blog/blog3.webp', excerpt: 'A well-equipped home office can transform your productivity. Here are the essential tech pieces every remote worker should own.', date: '2026-02-28', author: 'Ambaz Team' },
  { id: 'msb-4', title: 'Smart home upgrades that pay for themselves in a year', slug: 'smart-home-upgrades-pay-themselves', image: '/megastore/blog/blog4.webp', excerpt: 'Smart thermostats, energy monitors, and automated lighting — these upgrades reduce bills and improve daily comfort.', date: '2026-03-14', author: 'Ambaz Team' },
  { id: 'msb-5', title: 'Choosing the right laptop for creators on the move', slug: 'right-laptop-creators-on-the-move', image: '/megastore/blog/blog1.webp', excerpt: 'Portability, battery life, display quality — find out what really matters when picking a laptop for video editing, design, and content creation.', date: '2026-04-02', author: 'Ambaz Team' },
  { id: 'msb-6', title: 'Cameras and accessories every content creator should own', slug: 'cameras-accessories-content-creators', image: '/megastore/blog/blog2.webp', excerpt: 'Whether you shoot YouTube videos, product photography, or social reels, these cameras and accessories will level up your content.', date: '2026-04-20', author: 'Ambaz Team' },
];
