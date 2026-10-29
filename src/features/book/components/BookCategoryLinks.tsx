'use client';

import Image from 'next/image';
import Link from 'next/link';

/* Three category cards under the hero — book-cover image on the LEFT + heading
   + link list + "Button label »". Images come only from
   /public/book/product-categories/. */

function IconDoubleArrow({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M11.293 12 6.343 7.05 7.757 5.636 14.121 12l-6.364 6.364-1.414-1.414L11.293 12Z" />
      <path d="M17.657 12l-4.95-4.95 1.414-1.414L20.485 12l-6.364 6.364-1.414-1.414L17.657 12Z" />
    </svg>
  );
}

interface CategoryCard {
  title: string;
  links: { label: string; href: string }[];
  image: string;
  href: string;
}

const cards: CategoryCard[] = [
  {
    title: 'Cat Food',
    links: [
      { label: 'Dogs Food', href: '/shop?category=Featured' },
      { label: 'Kitten Food', href: '/shop?category=New Arrivals' },
      { label: 'Lilies Flower', href: '/shop?category=Popular' },
      { label: 'Pet Care', href: '/shop?category=Bestsellers' },
    ],
    image: '/book/product-categories/product-categories-1.avif',
    href: '/shop',
  },
  {
    title: 'Pet Playpens',
    links: [
      { label: 'Pet-Proofing', href: '/shop?category=Featured' },
      { label: 'Pet Food', href: '/shop?category=New Arrivals' },
      { label: 'Pet Fitness', href: '/shop?category=Popular' },
      { label: 'Pet Daycare', href: '/shop?category=Bestsellers' },
    ],
    image: '/book/product-categories/product-categories-2.avif',
    href: '/shop',
  },
  {
    title: 'Vibrant flower',
    links: [
      { label: 'Tulips Flower', href: '/shop?category=Featured' },
      { label: 'Sunflowers', href: '/shop?category=New Arrivals' },
      { label: 'Roses', href: '/shop?category=Popular' },
      { label: 'Pet-Proofing', href: '/shop?category=Bestsellers' },
    ],
    image: '/book/product-categories/product-categories-3.avif',
    href: '/shop',
  },
];

export function BookCategoryLinks() {
  return (
    <section className="bkcat-section">
      <div className="container-main">
        <div className="bkcat-grid">
          {cards.map((card) => (
            <div key={card.title} className="bkcat-card">
              <Link href={card.href} className="bkcat-img" aria-label={card.title}>
                <Image src={card.image} alt={card.title} fill style={{ objectFit: 'contain' }} sizes="(max-width: 749px) 40vw, 15vw" />
              </Link>
              <div className="bkcat-body">
                <h3 className="bkcat-title">{card.title}</h3>
                <ul className="bkcat-links">
                  {card.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="bkcat-link">{l.label}</Link>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="bkcat-shopnow">
                  Button label
                  <IconDoubleArrow size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bkcat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2vw, 24px);
        }
        .bkcat-card {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2vw, 28px);
          border: 1px solid #e6e6e6;
          border-radius: 8px;
          padding: clamp(20px, 2.5vw, 30px);
          background: #fff;
          transition: box-shadow 250ms ease, border-color 250ms ease;
          min-height: 230px;
        }
        .bkcat-card:hover { border-color: #f0cdd4; box-shadow: 0 8px 24px rgba(224,41,74,0.07); }
        .bkcat-img {
          position: relative;
          flex-shrink: 0;
          width: clamp(100px, 11vw, 140px);
          height: clamp(140px, 15vw, 200px);
          display: block;
        }
        .bkcat-body { display: flex; flex-direction: column; min-width: 0; }
        .bkcat-title {
          font-size: clamp(19px, 2.1vw, 23px);
          font-weight: 700;
          color: #2a2a2a;
          margin-bottom: 16px;
        }
        .bkcat-links {
          list-style: none;
          margin: 0 0 18px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .bkcat-link {
          font-size: 15px;
          color: #6a4a3a;
          text-decoration: none;
          transition: color 180ms ease;
        }
        .bkcat-link:hover { color: #e0294a; text-decoration: underline; }
        .bkcat-shopnow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 600;
          color: #2a2a2a;
          text-decoration: underline;
          text-underline-offset: 4px;
          width: fit-content;
          transition: color 180ms ease, gap 180ms ease;
        }
        .bkcat-shopnow:hover { color: #e0294a; gap: 10px; }

        @media (min-width: 750px) {
          .bkcat-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
