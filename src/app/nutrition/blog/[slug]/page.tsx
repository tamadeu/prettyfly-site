import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { nutritionBlogPosts } from '@/data/nutrition-blog';


type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return nutritionBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = nutritionBlogPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Nutrition` : 'Blog' };
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day)
    .toLocaleDateString('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function NutritionBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = nutritionBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = nutritionBlogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb banner */}
      <div style={{ backgroundColor: '#0d0d0d', padding: '40px 0', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/nutrition-shop" style={{ color: '#999', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#555' }}>/</span>
            <Link href="/nutrition/blog" style={{ color: '#999', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Blog</Link>
            <span style={{ color: '#555' }}>/</span>
            <span style={{ color: '#ccc' }}>{post.title}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: '#fff', maxWidth: '760px', margin: '0 auto', lineHeight: 1.25 }}>{post.title}</h1>
          <p style={{ fontSize: '14px', color: '#777', marginTop: '12px' }}>{formatDate(post.date)} · {post.author}</p>
        </div>
      </div>

      {/* Hero image */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', aspectRatio: '16/9', overflow: 'hidden' }}>
        <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" priority />
      </div>

      {/* Article body */}
      <div className="container-main" style={{ paddingTop: '5rem', paddingBottom: '6rem', maxWidth: '760px' }}>
        <p style={{ fontSize: '1.7rem', color: '#555', lineHeight: 1.85, marginBottom: '2.4rem' }}>{post.excerpt}</p>
        <p style={{ fontSize: '1.7rem', color: '#555', lineHeight: 1.85, marginBottom: '2.4rem' }}>
          Whether you are training for peak performance or simply committed to a healthier lifestyle, nutrition science provides the foundation for every goal. Our team of certified nutritionists and sports dietitians are here to translate the latest research into practical, achievable advice.
        </p>
        <p style={{ fontSize: '1.7rem', color: '#555', lineHeight: 1.85, marginBottom: '4rem' }}>
          From macro tracking to supplement timing, every detail adds up to meaningful results. Explore our full article library and take the next step toward the best version of yourself.
        </p>

        {/* Shop CTA */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <Link
            href="/nutrition/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgb(140, 255, 100)',
              color: '#111',
              fontSize: '15px',
              fontWeight: 700,
              padding: '16px 40px',
              borderRadius: '40px',
              textDecoration: 'none',
            }}
          >
            Shop Nutrition
            <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: '#111', marginBottom: '2.4rem' }}>Related Articles</h2>
            <div className="nu-blog-related-grid">
              {related.map((rel) => (
                <article key={rel.id} className="nu-blog-related-card">
                  <Link href={`/nutrition/blog/${rel.slug}`} className="nu-blog-related-img-link">
                    <Image src={rel.image} alt={rel.title} fill className="nu-blog-related-img" style={{ objectFit: 'cover', transition: 'transform 500ms ease' }} sizes="(max-width: 749px) 100vw, 33vw" />
                  </Link>
                  <div style={{ padding: '16px 16px 20px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{formatDate(rel.date)}</p>
                    <Link href={`/nutrition/blog/${rel.slug}`} style={{ display: 'block', fontSize: '1.6rem', fontWeight: 600, color: '#222', textDecoration: 'none', lineHeight: 1.4 }}>
                      {rel.title}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .nu-blog-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .nu-blog-related-card { border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.06); display: flex; flex-direction: column; }
        .nu-blog-related-img-link { display: block; position: relative; aspect-ratio: 3/2; overflow: hidden; background: #e5e5e5; flex-shrink: 0; }
        .nu-blog-related-card:hover .nu-blog-related-img { transform: scale(1.05); }
        @media (max-width: 749px) { .nu-blog-related-grid { grid-template-columns: 1fr; } }
        @media (min-width: 750px) and (max-width: 991px) { .nu-blog-related-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
