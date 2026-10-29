import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { nutritionBlogPosts } from '@/data/nutrition-blog';

export const metadata: Metadata = { title: 'Blog — Nutrition' };

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day)
    .toLocaleDateString('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function NutritionBlogPage() {
  return (
    <>
      <div style={{ backgroundColor: '#0d0d0d', padding: '40px 0', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#999', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#555' }}>/</span>
            <span style={{ color: '#ccc' }}>Blog</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, color: '#fff' }}>Our Blog</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '5rem', paddingBottom: '7rem' }}>
        <div className="nubl-grid">
          {nutritionBlogPosts.map((post) => (
            <article key={post.id} className="nubl-card">
              <Link href={`/nutrition/blog/${post.slug}`} className="nubl-img-link">
                <Image src={post.image} alt={post.title} fill className="nubl-img" style={{ objectFit: 'cover', transition: 'transform 500ms ease' }} sizes="(max-width: 749px) 100vw, 33vw" />
              </Link>
              <div style={{ padding: '20px 20px 24px' }}>
                <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{formatDate(post.date)}</p>
                <Link href={`/nutrition/blog/${post.slug}`} style={{ display: 'block', fontSize: '1.8rem', fontWeight: 600, color: '#222', textDecoration: 'none', lineHeight: 1.4, marginBottom: '10px' }}>
                  {post.title}
                </Link>
                <p style={{ fontSize: '1.4rem', color: '#777', lineHeight: 1.7, marginBottom: '14px' }}>{post.excerpt.slice(0, 100)}…</p>
                <Link href={`/nutrition/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 500, color: '#111', textDecoration: 'none' }}>
                  Read more
                  <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .nubl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4rem; }
        .nubl-card { border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.06); display: flex; flex-direction: column; }
        .nubl-img-link { display: block; position: relative; aspect-ratio: 3/2; overflow: hidden; background: #e5e5e5; flex-shrink: 0; }
        .nubl-card:hover .nubl-img { transform: scale(1.05); }
        @media (max-width: 749px) { .nubl-grid { grid-template-columns: 1fr; } }
        @media (min-width: 750px) and (max-width: 991px) { .nubl-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
