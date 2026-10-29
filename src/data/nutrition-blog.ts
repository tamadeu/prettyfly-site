export interface NutritionBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const nutritionBlogPosts: NutritionBlogPost[] = [
  {
    id: 'nb-1',
    title: 'How daily protein intake supports strength and recovery',
    slug: 'daily-protein-intake',
    image: '/nutrition/blog/blog1.webp',
    excerpt: 'Protein is the building block of muscle tissue. Understanding how much you need each day — and when to consume it — can dramatically improve your strength gains and post-workout recovery.',
    date: '2025-11-06',
    author: 'NutriSports Team',
  },
  {
    id: 'nb-2',
    title: 'The science behind pre-workout stimulants, explained',
    slug: 'pre-workout-science',
    image: '/nutrition/blog/blog2.webp',
    excerpt: 'Caffeine, beta-alanine, and creatine are the heavy hitters in most pre-workout formulas. We break down how each ingredient works, what the research says, and how to use them safely.',
    date: '2025-10-24',
    author: 'Performance Nutritionist',
  },
  {
    id: 'nb-3',
    title: 'Mass gainers vs whey protein — which should you pick?',
    slug: 'mass-gainers-vs-whey',
    image: '/nutrition/blog/blog3.webp',
    excerpt: 'Both mass gainers and whey protein can help you build muscle, but they serve different purposes. Learn how to choose the right supplement based on your caloric needs and fitness goals.',
    date: '2025-09-28',
    author: 'NutriSports Team',
  },
  {
    id: 'nb-4',
    title: 'Clean-label supplements: what to look for on the jar',
    slug: 'clean-label-supplements',
    image: '/nutrition/blog/blog1.webp',
    excerpt: 'The supplement industry is full of buzzwords. We help you cut through the noise by showing you exactly what a clean-label product looks like and which ingredients to avoid.',
    date: '2025-09-05',
    author: 'Performance Nutritionist',
  },
  {
    id: 'nb-5',
    title: 'Everyday vitamins that actually move the needle',
    slug: 'everyday-vitamins',
    image: '/nutrition/blog/blog2.webp',
    excerpt: 'Most vitamin supplements make bold claims but deliver little. We highlight the few that have solid scientific backing for improving energy, immunity, and overall wellbeing.',
    date: '2025-08-12',
    author: 'NutriSports Team',
  },
  {
    id: 'nb-6',
    title: 'Fueling endurance: carbs, hydration, and recovery stacks',
    slug: 'fueling-endurance',
    image: '/nutrition/blog/blog3.webp',
    excerpt: 'Endurance athletes have unique nutritional demands. From intra-workout carbohydrate timing to post-race electrolyte replenishment, here is the complete fueling strategy for going long.',
    date: '2025-07-22',
    author: 'Performance Nutritionist',
  },
];
