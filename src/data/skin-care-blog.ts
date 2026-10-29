export interface SkinCareBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const skinCareBlogPosts: SkinCareBlogPost[] = [
  {
    id: 'skb-1',
    title: 'The Ultimate Morning Skincare Routine for Glowing Skin',
    slug: 'morning-skincare-routine',
    image: '/skin-care/blog/blog2.webp',
    excerpt: 'Starting your day with the right skincare steps can transform your complexion. Learn the science-backed morning routine that dermatologists recommend for every skin type.',
    date: '2025-11-12',
    author: 'Skin Care Editor',
  },
  {
    id: 'skb-2',
    title: 'Vitamin C vs Retinol: Which Serum Is Right for You?',
    slug: 'vitamin-c-vs-retinol',
    image: '/skin-care/blog/blog3.webp',
    excerpt: 'Both vitamin C and retinol are powerhouse actives — but they work in very different ways. Discover which one suits your skin concerns and how to incorporate them safely.',
    date: '2025-10-28',
    author: 'Dr. Amelia Voss',
  },
  {
    id: 'skb-3',
    title: 'How to Build a Minimalist Skincare Routine That Works',
    slug: 'minimalist-skincare-routine',
    image: '/skin-care/blog/blog1.webp',
    excerpt: 'More products does not always mean better skin. A streamlined three-step routine can deliver remarkable results while saving time and money.',
    date: '2025-10-05',
    author: 'Skin Care Editor',
  },
  {
    id: 'skb-4',
    title: 'The Science Behind Hyaluronic Acid and Deep Hydration',
    slug: 'hyaluronic-acid-hydration',
    image: '/skin-care/blog/blog2.webp',
    excerpt: 'Hyaluronic acid can hold up to 1000 times its weight in water, making it one of the most effective hydrating ingredients in skincare. Here is how it works and how to use it correctly.',
    date: '2025-09-18',
    author: 'Beauty Scientist',
  },
  {
    id: 'skb-5',
    title: "Night Creams vs Day Creams: What's the Difference?",
    slug: 'night-vs-day-creams',
    image: '/skin-care/blog/blog3.webp',
    excerpt: 'Your skin has different needs during the day and at night. Understanding these differences helps you choose the right moisturizer for each part of your daily routine.',
    date: '2025-08-22',
    author: 'Dr. Amelia Voss',
  },
  {
    id: 'skb-6',
    title: 'SPF Every Day: Why Sun Protection Is Non-Negotiable',
    slug: 'spf-every-day',
    image: '/skin-care/blog/blog1.webp',
    excerpt: 'UV damage is the leading cause of premature aging and skin cancer. Wearing SPF daily — even on cloudy days — is the single most important step in any skincare routine.',
    date: '2025-07-30',
    author: 'Skin Care Editor',
  },
];
