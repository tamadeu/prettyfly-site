import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import blogPosts from '@/data/blog.json';
import type { BlogPost } from '@/types/common';
import { BlogDetailContent } from '@/features/blog/components/BlogDetailContent';

interface Props {
  params: Promise<{ slug: string }>;
}

const posts = blogPosts as BlogPost[];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const post = posts[index];
  const prevPost = index > 0 ? posts[index - 1] : null;
  const nextPost = index < posts.length - 1 ? posts[index + 1] : null;

  return (
    <BlogDetailContent
      post={post}
      prevPost={prevPost}
      nextPost={nextPost}
    />
  );
}
