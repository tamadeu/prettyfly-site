import Image from 'next/image';
import Link from 'next/link';

const posts = [
  { id: 1, date: 'AUGUST 2024', title: "Intel Celeron processors Here's a general of a laptop.", image: '/electronics store/blog/blog-1.webp', href: '/blog' },
  { id: 2, date: 'AUGUST 2024', title: 'Gaming headphones are specialized audio devices.', image: '/electronics store/blog/blog-2.webp', href: '/blog' },
  { id: 3, date: 'AUGUST 2024', title: 'Creative Design Work to Make Your WordPress.', image: '/electronics store/blog/blog-3.webp', href: '/blog' },
];

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

export function ES2Blog() {
  return (
    <section className="es2bl-section">
      <div className="container-main">
        <h2 className="es2bl-heading">Latest Blog</h2>
        <div className="es2bl-grid">
          {posts.map((post) => (
            <article key={post.id} className="es2bl-card">
              <Link href={post.href} className="es2bl-img-wrap">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="es2bl-img"
                  sizes="(max-width: 749px) 100vw, (max-width: 991px) 50vw, 33vw"
                />
              </Link>
              <div className="es2bl-body">
                <div className="es2bl-date-row">
                  <IconCalendar />
                  <span className="es2bl-date">{post.date}</span>
                </div>
                <h3 className="es2bl-title">
                  <Link href={post.href} className="es2bl-title-link">{post.title}</Link>
                </h3>
                <Link href={post.href} className="es2bl-more">
                  Load more <IconArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .es2bl-section {
          padding-block: clamp(40px, 5vw, 72px);
          background: #fff;
        }

        .es2bl-heading {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #111;
          margin-bottom: 32px;
        }

        .es2bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 991px) {
          .es2bl-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 749px) {
          .es2bl-grid {
            grid-template-columns: 1fr;
          }
        }

        .es2bl-card {
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
        }

        .es2bl-img-wrap {
          display: block;
          position: relative;
          width: 100%;
          padding-top: 64%;
          overflow: hidden;
        }

        .es2bl-img {
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 550ms ease;
        }

        .es2bl-card:hover .es2bl-img {
          transform: scale(1.05);
        }

        .es2bl-body {
          padding: 20px 24px 24px;
        }

        .es2bl-date-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          color: #999;
        }

        .es2bl-date {
          font-size: 12px;
          color: #999;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .es2bl-title {
          font-size: clamp(16px, 1.4vw, 19px);
          font-weight: 700;
          color: #111;
          line-height: 1.4;
          margin-bottom: 14px;
        }

        .es2bl-title-link {
          color: inherit;
          text-decoration: none;
          transition: color 250ms ease;
        }

        .es2bl-title-link:hover {
          color: #2b6be6;
        }

        .es2bl-more {
          font-size: 14px;
          color: #555;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          transition: color 250ms ease;
        }

        .es2bl-more:hover {
          color: #2b6be6;
        }
      `}</style>
    </section>
  );
}
