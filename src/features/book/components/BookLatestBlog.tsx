'use client';

import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    date: 'NOVEMBER 2024',
    title: 'The Silent Patient by Alex Michaelides the book',
    image: '/book/blog/blog-1.webp',
    href: '/blog',
  },
  {
    id: 2,
    date: 'NOVEMBER 2024',
    title: 'Brief History of Humankind by Yuval Noah Harari',
    image: '/book/blog/blog-2.webp',
    href: '/blog',
  },
  {
    id: 3,
    date: 'NOVEMBER 2024',
    title: 'Children of Blood and Bone by Tomi Adeyemi',
    image: '/book/blog/blog-3.webp',
    href: '/blog',
  },
];

export function BookLatestBlog() {
  return (
    <section className="bkbl-section">
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="bkbl-heading">Latest Blog</h2>
        </div>

        <div className="bkbl-grid">
          {posts.map((post) => (
            <article key={post.id} className="bkbl-card">
              <Link href={post.href} className="bkbl-img">
                <Image src={post.image} alt={post.title} fill className="bkbl-img-el" style={{ objectFit: 'cover', transition: 'transform 500ms ease' }} sizes="(max-width: 749px) 100vw, 33vw" />
              </Link>
              <div className="bkbl-body">
                <div className="bkbl-date">{post.date}</div>
                <Link href={post.href} className="bkbl-title">{post.title}</Link>
                <Link href={post.href} className="bkbl-more">Load more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .bkbl-heading { font-size: clamp(24px, 3vw, 32px); font-weight: 600; color: #2a2a2a; }
        .bkbl-grid { display: grid; grid-template-columns: 1fr; gap: clamp(20px, 2.4vw, 30px); }
        .bkbl-card {
          border: 1px solid #ececec;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: box-shadow 250ms ease, border-color 250ms ease;
        }
        .bkbl-card:hover { border-color: #f0cdd4; box-shadow: 0 8px 24px rgba(224,41,74,0.07); }
        .bkbl-img { position: relative; display: block; height: 260px; overflow: hidden; background: #f5f5f5; }
        .bkbl-card:hover .bkbl-img-el { transform: scale(1.05); }
        .bkbl-body { padding: 22px 24px 26px; display: flex; flex-direction: column; gap: 14px; }
        .bkbl-date { font-size: 12px; font-weight: 600; letter-spacing: 0.5px; color: #9a9a9a; text-transform: uppercase; }
        .bkbl-title {
          font-size: clamp(17px, 2vw, 20px);
          font-weight: 600;
          color: #2a2a2a;
          line-height: 1.4;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .bkbl-title:hover { color: #e0294a; }
        .bkbl-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          font-size: 14px;
          font-weight: 500;
          color: #2a2a2a;
          padding: 9px 24px;
          border: 1.5px solid #ddd;
          border-radius: 40px;
          text-decoration: none;
          transition: background 200ms ease, color 200ms ease, border-color 200ms ease;
        }
        .bkbl-more:hover { background: #e0294a; border-color: #e0294a; color: #fff; }

        @media (min-width: 750px) { .bkbl-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>
    </section>
  );
}
