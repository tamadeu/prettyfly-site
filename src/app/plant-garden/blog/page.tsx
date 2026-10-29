import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { plantGardenBlogPosts } from '@/data/plant-garden-blog';

export const metadata: Metadata = { title: 'Blog — Plant & Garden' };

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, 1)
    .toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
    .toUpperCase();
}

export default function PlantGardenBlogPage() {
  return (
    <>
      {/* Breadcrumb banner */}
      <div style={{ backgroundColor: '#f5f7f2', padding: '40px 0', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/plant-garden-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Blog</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700, color: '#111' }}>Blog</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
        <div className="pgbl-grid">
          {plantGardenBlogPosts.map((post) => (
            <article key={post.id} className="pgbl-card">
              <Link href={`/plant-garden/blog/${post.slug}`} className="pgbl-img-link">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="pgbl-img"
                  style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 100vw, (max-width: 991px) 50vw, 33vw"
                />
              </Link>
              <div className="pgbl-body">
                <p className="pgbl-date">{formatDate(post.date)}</p>
                <Link href={`/plant-garden/blog/${post.slug}`} className="pgbl-title">
                  {post.title}
                </Link>
                <p className="pgbl-excerpt">{post.excerpt}</p>
                <Link href={`/plant-garden/blog/${post.slug}`} className="pgbl-readmore">
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
        .pgbl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4rem; }
        .pgbl-card { border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.06); display: flex; flex-direction: column; }
        .pgbl-img-link { display: block; position: relative; aspect-ratio: 3/2; overflow: hidden; background: #f0f5ee; flex-shrink: 0; }
        .pgbl-card:hover .pgbl-img { transform: scale(1.05); }
        .pgbl-body { padding: 20px 20px 24px; display: flex; flex-direction: column; flex: 1; }
        .pgbl-date { font-size: 1.3rem; font-weight: 500; color: #999; letter-spacing: 0.05em; margin-bottom: 1rem; text-transform: uppercase; }
        .pgbl-title { display: block; font-size: 1.8rem; font-weight: 600; color: #222; text-decoration: none; line-height: 1.4; margin-bottom: 1rem; transition: color 0.2s ease; }
        .pgbl-title:hover { color: #3a7d44; }
        .pgbl-excerpt { font-size: 1.5rem; color: #666; line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; flex: 1; margin-bottom: 1.6rem; }
        .pgbl-readmore { display: inline-flex; align-items: center; gap: 4px; font-size: 1.5rem; font-weight: 600; color: #3a7d44; text-decoration: none; }
        .pgbl-readmore:hover { opacity: 0.8; }
        @media (max-width: 991px) { .pgbl-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 599px) { .pgbl-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
