'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Banner {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  href: string;
  btnVariant: 'red' | 'white';
}

const banners: Banner[] = [
  {
    id: 'b1',
    image: '/book/banner/baner1.webp',
    eyebrow: 'Sale up to 30%',
    title: 'Reading is the\nLeading authority',
    href: '/shop',
    btnVariant: 'red',
  },
  {
    id: 'b2',
    image: '/book/banner/baner2.webp',
    eyebrow: 'Limited time offer',
    title: 'Learn everything\nIn our books',
    href: '/shop',
    btnVariant: 'white',
  },
];

export function BookBanners() {
  return (
    <section>
      <div className="container-main">
        <div className="bkb-grid">
          {banners.map((b) => (
            <Link key={b.id} href={b.href} className="bkb-card">
              <Image src={b.image} alt={b.title.replace('\n', ' ')} fill className="bkb-img" style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }} sizes="50vw" />
              <div className="bkb-content">
                <p className={`bkb-eyebrow ${b.btnVariant === 'white' ? 'is-light' : ''}`}>{b.eyebrow}</p>
                <h3 className={`bkb-title ${b.btnVariant === 'white' ? 'is-light' : ''}`}>{b.title}</h3>
                <span className={`bkb-btn bkb-btn-${b.btnVariant}`}>Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .bkb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 750px) { .bkb-grid { grid-template-columns: 1fr 1fr; } }

        .bkb-card {
          position: relative;
          display: block;
          height: clamp(280px, 30vw, 380px);
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
        }
        .bkb-card:hover .bkb-img { transform: scale(1.04); }
        .bkb-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(28px, 4vw, 50px);
          z-index: 2;
          max-width: 60%;
        }
        .bkb-eyebrow { font-size: 14px; color: #444; margin-bottom: 12px; }
        .bkb-eyebrow.is-light { color: rgba(255,255,255,0.85); }
        .bkb-title {
          font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 700;
          color: #2a2a2a;
          line-height: 1.25;
          margin-bottom: 24px;
          white-space: pre-line;
        }
        .bkb-title.is-light { color: #fff; }
        .bkb-btn {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 26px;
          border-radius: 40px;
          width: fit-content;
          transition: background 220ms ease, color 220ms ease;
        }
        .bkb-btn-red { background: #e0294a; color: #fff; }
        .bkb-btn-red:hover { background: #b81f3b; }
        .bkb-btn-white { background: #fff; color: #2a2a2a; }
        .bkb-btn-white:hover { background: #2a2a2a; color: #fff; }

        @media (max-width: 749px) {
          .bkb-content { max-width: 78%; }
        }
      `}</style>
    </section>
  );
}
