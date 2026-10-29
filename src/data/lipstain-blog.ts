export interface LipstainBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const lipstainBlogPosts: LipstainBlogPost[] = [
  {
    id: 'ls-blog-1',
    title: 'How to Make Your Lip Color Last All Day',
    slug: 'make-lip-color-last-all-day',
    image: '/lipstain/blog/blog1.webp',
    excerpt: 'Long-lasting lip color is all about preparation and technique. From lip liner priming to setting with translucent powder, these pro tips will keep your lip stain vibrant from morning to night.',
    date: '2025-11-14',
    author: 'Makeup Artist Studio',
  },
  {
    id: 'ls-blog-2',
    title: 'Finding Your Perfect Red: The Ultimate Lip Color Guide',
    slug: 'perfect-red-lip-color-guide',
    image: '/lipstain/blog/blog2.webp',
    excerpt: 'Red lipstick is a classic, but not all reds are created equal. We break down warm reds, cool crimsons, and berry tones by skin undertone so you can find your most flattering shade.',
    date: '2025-10-30',
    author: 'Color Expert',
  },
  {
    id: 'ls-blog-3',
    title: 'Lip Stain vs Lipstick vs Lip Gloss: What Is the Difference?',
    slug: 'lip-stain-vs-lipstick-vs-gloss',
    image: '/lipstain/blog/blog3.webp',
    excerpt: 'Lip stains, lipsticks, and glosses each have distinct finishes and staying power. Understanding the differences helps you choose the right formula for every occasion and skin type.',
    date: '2025-10-08',
    author: 'Makeup Artist Studio',
  },
  {
    id: 'ls-blog-4',
    title: 'The Best Lip Care Routine for a Smooth, Hydrated Pout',
    slug: 'lip-care-routine-hydrated',
    image: '/lipstain/blog/blog1.webp',
    excerpt: 'Chapped, dry lips are not just uncomfortable — they make lip products look uneven. A consistent lip care routine with exfoliation and moisture is the secret to a perfect canvas.',
    date: '2025-09-22',
    author: 'Color Expert',
  },
  {
    id: 'ls-blog-5',
    title: 'Autumn Lip Trends: The Shades Defining the Season',
    slug: 'autumn-lip-trends',
    image: '/lipstain/blog/blog2.webp',
    excerpt: 'From deep berry and terracotta to muted mauve and classic burgundy, autumn brings some of the most flattering lip shades of the year. Here are the trending colors you need to try.',
    date: '2025-09-02',
    author: 'Makeup Artist Studio',
  },
  {
    id: 'ls-blog-6',
    title: 'Clean Beauty Lips: What Ingredients to Look For',
    slug: 'clean-beauty-lips-ingredients',
    image: '/lipstain/blog/blog3.webp',
    excerpt: 'Clean beauty is reshaping the cosmetics industry. We highlight the nourishing, non-toxic ingredients that make clean lip products both beautiful to wear and safe for everyday use.',
    date: '2025-08-10',
    author: 'Color Expert',
  },
];
