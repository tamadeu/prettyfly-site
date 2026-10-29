export interface PetFoodBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const petFoodBlogPosts: PetFoodBlogPost[] = [
  {
    id: 'pf-blog-1',
    title: 'How to Read a Pet Food Label: A Complete Guide',
    slug: 'how-to-read-pet-food-label',
    image: '/pet-food/blog/blog1.webp',
    excerpt: 'Pet food labels can be confusing and misleading. Our vet-approved guide shows you exactly how to decode ingredient lists, nutritional analyses, and AAFCO statements for your dog or cat.',
    date: '2025-11-08',
    author: 'Dr. Paws Team',
  },
  {
    id: 'pf-blog-2',
    title: 'Raw vs Kibble: What Science Says About Pet Nutrition',
    slug: 'raw-vs-kibble-nutrition',
    image: '/pet-food/blog/blog2.webp',
    excerpt: 'The raw feeding debate continues to grow. We review the latest research comparing raw diets to commercial kibble, examining digestibility, microbial safety, and long-term health outcomes.',
    date: '2025-10-20',
    author: 'Veterinary Nutritionist',
  },
  {
    id: 'pf-blog-3',
    title: 'The Top 5 Ingredients to Avoid in Your Pet\'s Food',
    slug: 'ingredients-to-avoid-pet-food',
    image: '/pet-food/blog/blog3.webp',
    excerpt: 'Not all pet food ingredients are created equal. From artificial preservatives to low-quality fillers, learn which common additives to watch out for when choosing food for your furry companion.',
    date: '2025-09-25',
    author: 'Dr. Paws Team',
  },
  {
    id: 'pf-blog-4',
    title: 'Senior Pets and Diet: Adjusting Nutrition as Your Pet Ages',
    slug: 'senior-pet-diet-nutrition',
    image: '/pet-food/blog/blog1.webp',
    excerpt: 'As pets age, their nutritional needs change significantly. Discover how to adjust your senior pet\'s diet to support joint health, digestion, and energy levels during their golden years.',
    date: '2025-09-05',
    author: 'Veterinary Nutritionist',
  },
  {
    id: 'pf-blog-5',
    title: 'Grain-Free Diets for Dogs: Benefits, Risks, and Alternatives',
    slug: 'grain-free-diets-dogs',
    image: '/pet-food/blog/blog2.webp',
    excerpt: 'Grain-free pet food has grown in popularity, but recent studies have raised important questions about heart health. We examine the evidence and offer balanced guidance for pet owners.',
    date: '2025-08-15',
    author: 'Dr. Paws Team',
  },
  {
    id: 'pf-blog-6',
    title: 'Homemade Pet Treats: Healthy Recipes Your Pet Will Love',
    slug: 'homemade-pet-treats-recipes',
    image: '/pet-food/blog/blog3.webp',
    excerpt: 'Making treats at home lets you control every ingredient. Our collection of vet-approved recipes uses simple, wholesome ingredients to keep your pet happy and healthy between meals.',
    date: '2025-07-20',
    author: 'Veterinary Nutritionist',
  },
];
