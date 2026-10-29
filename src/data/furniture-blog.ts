export interface FurnitureBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const furnitureBlogPosts: FurnitureBlogPost[] = [
  {
    id: 'fu-blog-1',
    title: 'How to Choose the Perfect Sofa for Your Living Room',
    slug: 'choose-perfect-sofa',
    image: '/furniture/blog/blog3.webp',
    excerpt: 'Choosing the right sofa is one of the most important decisions you will make for your living room. From size and fabric to frame quality, here is everything you need to know.',
    date: '2025-11-08',
    author: 'Interior Design Team',
  },
  {
    id: 'fu-blog-2',
    title: 'Top Interior Design Trends for 2025 Homes',
    slug: 'interior-design-trends-2025',
    image: '/furniture/blog/blog2.webp',
    excerpt: 'From earthy tones and natural textures to multifunctional furniture, the 2025 design landscape is all about comfort and authenticity. Explore the trends defining modern home interiors this year.',
    date: '2025-10-20',
    author: 'Style Editor',
  },
  {
    id: 'fu-blog-3',
    title: 'How to Care for Your Wooden Furniture: Expert Tips',
    slug: 'wooden-furniture-care-guide',
    image: '/furniture/blog/blog1.webp',
    excerpt: 'Proper care extends the life of your wooden furniture by decades. Learn how to clean, condition, and protect wood surfaces from everyday wear, moisture, and sunlight damage.',
    date: '2025-09-25',
    author: 'Furniture Specialist',
  },
  {
    id: 'fu-blog-4',
    title: 'Creating a Cozy Bedroom Retreat on Any Budget',
    slug: 'cozy-bedroom-retreat',
    image: '/furniture/blog/blog3.webp',
    excerpt: 'Your bedroom should be your personal sanctuary. With the right furniture choices, textiles, and lighting, you can create a warm, restful retreat without breaking the bank.',
    date: '2025-09-02',
    author: 'Interior Design Team',
  },
  {
    id: 'fu-blog-5',
    title: 'The Art of Mixing Vintage and Modern Furniture Styles',
    slug: 'vintage-modern-furniture-mix',
    image: '/furniture/blog/blog2.webp',
    excerpt: 'Blending old and new creates spaces full of character and personality. Discover the principles of contrast, balance, and cohesion that make vintage-modern interiors work beautifully.',
    date: '2025-08-14',
    author: 'Style Editor',
  },
];
