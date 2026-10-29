import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pizzaBlogPosts } from '@/data/pizza-blog';


interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = pizzaBlogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — Pizza Shop`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return pizzaBlogPosts.map((post) => ({ slug: post.slug }));
}

export default async function PizzaBlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = pizzaBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = pizzaBlogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ background: '#000000' }}>
      {/* ── Page header ── */}
      <div style={{ backgroundColor: '#1a1a1a', paddingBlock: '40px 50px', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pizza-shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#444' }}>/</span>
            <Link href="/pizza/blog/top-pizza-recipes-2025" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Blog</Link>
            <span style={{ color: '#444' }}>/</span>
            <span style={{ color: '#fff' }}>{post.title}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, color: '#fff', maxWidth: '800px', margin: '0 auto' }}>{post.title}</h1>
        </div>
      </div>

      {/* ── Article ── */}
      <div style={{ backgroundColor: '#111', paddingBlock: '60px 80px' }}>
        <div className="container-main">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>

            {/* Hero image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', marginBottom: '36px', border: '1px solid #2a2a2a' }}>
              <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 749px) 100vw, 760px" priority />
            </div>

            {/* Content */}
            <p style={{ fontSize: '18px', color: '#e84d1c', fontWeight: 600, marginBottom: '20px', lineHeight: 1.5 }}>{post.excerpt}</p>

            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: '20px' }}>
                Pizza has been a beloved staple for centuries, and for good reason — it brings people together with its incredible variety of flavours, textures, and possibilities. Whether you prefer a thin, crispy crust with minimal toppings or a thick, chewy base piled high with ingredients, there&apos;s a pizza out there for everyone.
              </p>
              <p style={{ marginBottom: '20px' }}>
                At Ambaz Pizza, we believe in using only the freshest ingredients, sourced daily from local suppliers. Our stone-baked process ensures every pizza delivers an authentic crunch and flavour that simply can&apos;t be replicated by conventional ovens.
              </p>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', margin: '32px 0 16px' }}>The Art of Stone Baking</h2>
              <p style={{ marginBottom: '20px' }}>
                Stone baking isn&apos;t just a cooking method — it&apos;s an art form. The intense, even heat of the stone draws moisture from the base, creating that perfect crisp without drying out the toppings. Combined with our slow-fermented dough (minimum 48 hours), the result is a crust with incredible depth of flavour.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Our chefs spend years mastering the timing and temperature for each pizza type. BBQ pizzas need a slightly higher heat to caramelise the sauce, while Veggie varieties benefit from a gentler bake to preserve the fresh character of each ingredient.
              </p>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', margin: '32px 0 16px' }}>Fresh Ingredients Make the Difference</h2>
              <p style={{ marginBottom: '20px' }}>
                We receive deliveries of fresh produce every morning. From sun-ripened tomatoes for our base sauce to hand-pulled mozzarella and locally-sourced meats — every ingredient is chosen for maximum flavour impact. No artificial preservatives, no shortcuts.
              </p>
              <p style={{ marginBottom: '0' }}>
                This commitment to quality is why our customers keep coming back. Once you taste the difference that fresh, quality ingredients make, it&apos;s hard to go back to anything less.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related posts ── */}
      {otherPosts.length > 0 && (
        <div style={{ backgroundColor: '#1a1a1a', paddingBlock: '60px 80px' }}>
          <div className="container-main">
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>More from the Blog</h2>
            <div className="ps-blog-related-grid">
              {otherPosts.map((p) => (
                <Link key={p.id} href={`/pizza/blog/${p.slug}`} className="ps-blog-related-card" style={{ textDecoration: 'none', display: 'block', background: '#111', borderRadius: '12px', overflow: 'hidden', border: '1px solid #2a2a2a', transition: 'border-color 300ms ease, transform 300ms ease' }}
                >
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 749px) 100vw, 33vw" />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{p.date}</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: '8px 0', lineHeight: 1.4 }}>{p.title}</h3>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.excerpt}</p>
                    <span style={{ fontSize: '13px', color: '#e84d1c', fontWeight: 600 }}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ps-blog-related-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 750px) {
          .ps-blog-related-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .ps-blog-related-card:hover {
          border-color: #e84d1c !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}
