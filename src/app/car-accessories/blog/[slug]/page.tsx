import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { carAccessoriesBlogPosts } from '@/data/car-accessories-blog';


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return carAccessoriesBlogPosts.map((post) => ({ slug: post.slug }));
}

export default async function CarAccessoriesBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = carAccessoriesBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const related = carAccessoriesBlogPosts.filter((p) => p.id !== post.id).slice(0, 3);

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
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 700, color: '#111', maxWidth: '720px', margin: '0 auto', lineHeight: 1.3 }}>
            {post.title}
          </h1>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#888' }}>
            {post.author} &middot; {formattedDate}
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="container-main" style={{ paddingTop: '40px' }}>
        <div style={{ position: 'relative', width: '100%', height: 'clamp(220px, 42vw, 520px)', borderRadius: '14px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 749px) 100vw, 80vw"
            priority
          />
        </div>
      </div>

      {/* Article body */}
      <div className="container-main" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '17px', color: '#444', lineHeight: 1.85, marginBottom: '24px' }}>
            {post.excerpt}
          </p>
          <p style={{ fontSize: '17px', color: '#444', lineHeight: 1.85, marginBottom: '24px' }}>
            Whether you are upgrading your vehicle for performance or simply replacing worn parts, choosing the right components makes all the difference. Our team tests every item in our catalog — and we only stock what we&apos;d recommend to a fellow car enthusiast.
          </p>
          <p style={{ fontSize: '17px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
            Browse our full range to discover the latest arrivals, exclusive deals, and expert-curated bundles designed to keep your vehicle running at its peak.
          </p>

          <Link
            href="/car-accessories/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#5b72d6',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: '40px',
              textDecoration: 'none',
            }}
          >
            Shop Now
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div style={{ backgroundColor: '#f5f5f5', paddingBlock: '60px' }}>
          <div className="container-main">
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: '#111', marginBottom: '32px', textAlign: 'center' }}>
              Related Articles
            </h2>
            <div className="ca-blog-related-grid">
              {related.map((p) => (
                <Link key={p.id} href={`/car-accessories/blog/${p.slug}`} className="ca-blog-related-card">
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: '#e0e0e0' }}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                      sizes="33vw"
                      className="ca-blog-related-img"
                    />
                  </div>
                  <div style={{ padding: '16px 20px 20px' }}>
                    <p className="ca-blog-related-title">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ca-blog-related-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .ca-blog-related-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: transform 250ms ease, box-shadow 250ms ease;
        }
        .ca-blog-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .ca-blog-related-card:hover .ca-blog-related-img { transform: scale(1.04); }
        .ca-blog-related-title {
          font-size: 15px;
          font-weight: 600;
          color: #222;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 750px) {
          .ca-blog-related-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </>
  );
}
