export interface PizzaBlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export const pizzaBlogPosts: PizzaBlogPost[] = [
  {
    id: 'ps-blog-1',
    title: 'Top 10 Pizza Recipes You Need to Try This Year',
    slug: 'top-pizza-recipes-2025',
    image: '/pizza/products/products2.webp',
    excerpt: 'From classic Margherita to bold BBQ Chicken — discover the must-try pizza recipes that have taken the food world by storm this season.',
    date: '2025-11-10',
    author: 'Ambaz Kitchen',
  },
  {
    id: 'ps-blog-2',
    title: 'The Surprising Health Benefits of Eating Pizza',
    slug: 'health-benefits-pizza',
    image: '/pizza/products/products10.webp',
    excerpt: 'Did you know pizza can be surprisingly nutritious? We break down the science behind wholesome toppings, portion sizes, and why fresh ingredients make all the difference.',
    date: '2025-10-28',
    author: 'Ambaz Kitchen',
  },
  {
    id: 'ps-blog-3',
    title: 'How to Make the Perfect Pizza Crust at Home',
    slug: 'how-to-make-perfect-crust',
    image: '/pizza/products/products3.webp',
    excerpt: 'Thin and crispy or thick and chewy? Learn the secrets to crafting the ideal pizza crust — from flour selection and hydration ratios to the art of the perfect bake.',
    date: '2025-10-05',
    author: 'Ambaz Kitchen',
  },
  {
    id: 'ps-blog-4',
    title: 'Wood-Fired vs Stone-Baked: Which Pizza Is Better?',
    slug: 'wood-fired-vs-stone-baked-pizza',
    image: '/pizza/products/products9.webp',
    excerpt: 'The great pizza debate — we put both baking methods to the test and share the definitive answer on which delivers the best flavour, texture, and char.',
    date: '2025-09-20',
    author: 'Ambaz Kitchen',
  },
  {
    id: 'ps-blog-5',
    title: '5 Unique Pizza Toppings You Have Never Tried',
    slug: 'unique-pizza-toppings',
    image: '/pizza/products/products12.webp',
    excerpt: 'Step outside your comfort zone with these bold, unexpected pizza toppings — from truffle oil and fig jam to spiced lamb — that will change how you think about pizza.',
    date: '2025-09-01',
    author: 'Ambaz Kitchen',
  },
  {
    id: 'ps-blog-6',
    title: 'The History of Pizza: From Naples to the World',
    slug: 'history-of-pizza',
    image: '/pizza/products/products4.webp',
    excerpt: 'Pizza has a rich 200-year history rooted in the streets of Naples. Discover how this humble flatbread conquered every culture on earth and became the world\'s favourite food.',
    date: '2025-08-15',
    author: 'Ambaz Kitchen',
  },
];
