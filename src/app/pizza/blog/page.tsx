import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pizzaBlogPosts } from '@/data/pizza-blog';

export const metadata: Metadata = { title: 'Blog — Pizza Shop' };

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, 1)
    .toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
    .toUpperCase();
}

export default function PizzaBlogPage() {
  return (
    <>
      {/* Breadcrumb banner */}
      <div style={{ backgroundColor: '#111', padding: '40px 0', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: '#fff' }}>Blog</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700, color: '#fff' }}>Blog</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
        <div className="psbl-grid">
          {pizzaBlogPosts.map((post) => (
            <article key={post.id} className="psbl-card">
              <Link href={`/pizza/blog/${post.slug}`} className="psbl-img-link">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="psbl-img"
                  style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 100vw, (max-width: 991px) 50vw, 33vw"
                />
              </Link>
              <div className="psbl-body">
                <p className="psbl-date">{formatDate(post.date)}</p>
                <Link href={`/pizza/blog/${post.slug}`} className="psbl-title">
                  {post.title}
                </Link>
                <p className="psbl-excerpt">{post.excerpt}</p>
                <Link href={`/pizza/blog/${post.slug}`} className="psbl-readmore">
                  Read more
                  <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .psbl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4rem; }
        .psbl-card { border-radius: 12px; overflow: hidden; background: #111; border: 1px solid #2a2a2a; display: flex; flex-direction: column; transition: border-color 300ms ease; }
        .psbl-card:hover { border-color: #e84d1c; }
        .psbl-img-link { display: block; position: relative; aspect-ratio: 3/2; overflow: hidden; background: #1a1a1a; flex-shrink: 0; }
        .psbl-card:hover .psbl-img { transform: scale(1.05); }
        .psbl-body { padding: 20px 20px 24px; display: flex; flex-direction: column; flex: 1; }
        .psbl-date { font-size: 1.3rem; font-weight: 500; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; margin-bottom: 1rem; text-transform: uppercase; }
        .psbl-title { display: block; font-size: 1.8rem; font-weight: 600; color: #fff; text-decoration: none; line-height: 1.4; margin-bottom: 1rem; transition: color 0.2s ease; }
        .psbl-title:hover { color: #e84d1c; }
        .psbl-excerpt { font-size: 1.5rem; color: rgba(255,255,255,0.55); line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; flex: 1; margin-bottom: 1.6rem; }
        .psbl-readmore { display: inline-flex; align-items: center; gap: 4px; font-size: 1.5rem; font-weight: 600; color: #e84d1c; text-decoration: none; }
        .psbl-readmore:hover { opacity: 0.8; }
        @media (max-width: 991px) { .psbl-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 599px) { .psbl-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
