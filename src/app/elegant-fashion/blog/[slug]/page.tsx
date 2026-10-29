import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { elegantFashionBlogPosts } from '@/data/elegant-fashion-blog';


type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return elegantFashionBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = elegantFashionBlogPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Elegant Fashion` : 'Blog' };
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day)
    .toLocaleDateString('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function ElegantFashionBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = elegantFashionBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = elegantFashionBlogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb banner */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '40px 0', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/elegant-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <Link href="/elegant-fashion/blog" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Blog</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>{post.title}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: '#111', maxWidth: '760px', margin: '0 auto', lineHeight: 1.25 }}>{post.title}</h1>
          <p style={{ fontSize: '14px', color: '#888', marginTop: '12px' }}>{formatDate(post.date)} · {post.author}</p>
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
          True elegance is never accidental. It is the result of thoughtful choices — in fabric, fit, colour, and occasion. Elegant fashion is not about following trends; it is about developing a refined personal style that communicates who you are with quiet confidence.
        </p>
        <p style={{ fontSize: '1.7rem', color: '#555', lineHeight: 1.85, marginBottom: '4rem' }}>
          Our style editors and fashion consultants are here to inspire you with practical guides, seasonal edits, and timeless principles. Discover our curated collection and elevate your wardrobe today.
        </p>

        {/* Shop CTA */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <Link
            href="/elegant-fashion/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#111',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              padding: '16px 40px',
              borderRadius: '0',
              textDecoration: 'none',
              letterSpacing: '0.08em',
            }}
          >
            SHOP THE COLLECTION
            <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: '#111', marginBottom: '2.4rem' }}>Related Articles</h2>
            <div className="ef-blog-related-grid">
              {related.map((rel) => (
                <article key={rel.id} className="ef-blog-related-card">
                  <Link href={`/elegant-fashion/blog/${rel.slug}`} className="ef-blog-related-img-link">
                    <Image src={rel.image} alt={rel.title} fill className="ef-blog-related-img" style={{ objectFit: 'cover', transition: 'transform 500ms ease' }} sizes="(max-width: 749px) 100vw, 33vw" />
                  </Link>
                  <div style={{ padding: '16px 16px 20px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{formatDate(rel.date)}</p>
                    <Link href={`/elegant-fashion/blog/${rel.slug}`} style={{ display: 'block', fontSize: '1.6rem', fontWeight: 600, color: '#222', textDecoration: 'none', lineHeight: 1.4 }}>
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
        .ef-blog-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .ef-blog-related-card { border-radius: 0; overflow: hidden; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.06); display: flex; flex-direction: column; }
        .ef-blog-related-img-link { display: block; position: relative; aspect-ratio: 3/2; overflow: hidden; background: #e5e5e5; flex-shrink: 0; }
        .ef-blog-related-card:hover .ef-blog-related-img { transform: scale(1.05); }
        @media (max-width: 749px) { .ef-blog-related-grid { grid-template-columns: 1fr; } }
        @media (min-width: 750px) and (max-width: 991px) { .ef-blog-related-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
