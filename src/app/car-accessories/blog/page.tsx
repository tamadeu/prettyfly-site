import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { carAccessoriesBlogPosts } from '@/data/car-accessories-blog';

export const metadata: Metadata = { title: 'Blog — Car Accessories' };

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, 1)
    .toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
    .toUpperCase();
}

export default function CarAccessoriesBlogPage() {
  return (
    <>
      {/* Breadcrumb banner */}
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '40px 0', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/car-accessories-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Blog</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700, color: '#111' }}>Blog</h1>
        </div>
      </div>

      <div className="container-main" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
        <div className="cabl-grid">
          {carAccessoriesBlogPosts.map((post) => (
            <article key={post.id} className="cabl-card">
              <Link href={`/car-accessories/blog/${post.slug}`} className="cabl-img-link">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="cabl-img"
                  style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                  sizes="(max-width: 749px) 100vw, (max-width: 991px) 50vw, 33vw"
                />
              </Link>
              <div className="cabl-body">
                <p className="cabl-date">{formatDate(post.date)}</p>
                <Link href={`/car-accessories/blog/${post.slug}`} className="cabl-title">
                  {post.title}
                </Link>
                <p className="cabl-excerpt">{post.excerpt}</p>
                <Link href={`/car-accessories/blog/${post.slug}`} className="cabl-readmore">
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
        .cabl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4rem; }
        .cabl-card { border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.06); display: flex; flex-direction: column; }
        .cabl-img-link { display: block; position: relative; aspect-ratio: 3/2; overflow: hidden; background: #e5e5e5; flex-shrink: 0; }
        .cabl-card:hover .cabl-img { transform: scale(1.05); }
        .cabl-body { padding: 20px 20px 24px; display: flex; flex-direction: column; flex: 1; }
        .cabl-date { font-size: 1.3rem; font-weight: 500; color: #999; letter-spacing: 0.05em; margin-bottom: 1rem; text-transform: uppercase; }
        .cabl-title { display: block; font-size: 1.8rem; font-weight: 600; color: #222; text-decoration: none; line-height: 1.4; margin-bottom: 1rem; transition: color 0.2s ease; }
        .cabl-title:hover { color: #5b72d6; }
        .cabl-excerpt { font-size: 1.5rem; color: #666; line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; flex: 1; margin-bottom: 1.6rem; }
        .cabl-readmore { display: inline-flex; align-items: center; gap: 4px; font-size: 1.5rem; font-weight: 600; color: #5b72d6; text-decoration: none; }
        .cabl-readmore:hover { opacity: 0.8; }
        @media (max-width: 991px) { .cabl-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 599px) { .cabl-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
